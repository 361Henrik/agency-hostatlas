// HostAtlas guest-app service worker — offline layer for /explore.
//
// Registered with scope "/explore" only: the marketing page gains nothing
// from offline and must never be served stale. Bump VERSION on any change
// to caching behaviour; activation deletes all caches from other versions.
//
// Cache map:
//   ha-docs     HTML documents + RSC payloads (network-first, cache fallback)
//   ha-static   /_next/static/** (cache-first — content-hashed, immutable)
//   ha-images   /_next/image optimizer responses (stale-while-revalidate)
//   ha-assets   other same-origin assets: logo, icons (stale-while-revalidate)
//   ha-tiles    OSM raster tiles (cache-first, LRU-capped)

const VERSION = "v2"
const DOC_CACHE = `ha-docs-${VERSION}`
const STATIC_CACHE = `ha-static-${VERSION}`
const IMAGE_CACHE = `ha-images-${VERSION}`
const ASSET_CACHE = `ha-assets-${VERSION}`
const TILE_CACHE = `ha-tiles-${VERSION}`
const ALL_CACHES = [DOC_CACHE, STATIC_CACHE, IMAGE_CACHE, ASSET_CACHE, TILE_CACHE]

const TILE_LRU_MAX = 400
const STATIC_LRU_MAX = 120
const IMAGE_LRU_MAX = 80

// Mirrors lib/offline-urls.ts OFFLINE_DOCS — update both together.
// EN is unprefixed; ja/zh carry locale path prefixes.
const ROUTE_IDS = [
  "first-evening-svolvaer",
  "story-of-skrei",
  "golden-hour-photo-walk",
  "coastal-culture-craft",
  "weather-safe-short-walk",
]
const OFFLINE_DOCS = ["", "/ja", "/zh"].flatMap((prefix) => [
  `${prefix}/explore`,
  ...ROUTE_IDS.flatMap((id) => [
    `${prefix}/explore/${id}`,
    `${prefix}/explore/${id}/navigate`,
  ]),
])

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(DOC_CACHE)
      // addAll is atomic and would fail the whole install on one bad URL;
      // fetch individually and tolerate misses — the page-side warm-up
      // verifies and repairs the doc set afterwards.
      .then((cache) =>
        Promise.allSettled(
          OFFLINE_DOCS.map((url) =>
            fetch(url).then((res) => {
              if (res.ok) return cache.put(url, res)
            })
          )
        )
      )
      .then(() => self.skipWaiting())
  )
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys()) {
        if (key.startsWith("ha-") && !ALL_CACHES.includes(key)) await caches.delete(key)
      }
      await self.clients.claim()
    })()
  )
})

async function trimCache(cacheName, max) {
  const cache = await caches.open(cacheName)
  const keys = await cache.keys()
  // FIFO approximation of LRU — good enough for a bounded demo corridor
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i])
}

async function cacheFirst(cacheName, request, lruMax) {
  const cache = await caches.open(cacheName)
  const hit = await cache.match(request)
  if (hit) return hit
  const res = await fetch(request)
  if (res.ok || res.type === "opaque") {
    await cache.put(request, res.clone())
    if (lruMax) trimCache(cacheName, lruMax)
  }
  return res
}

async function staleWhileRevalidate(cacheName, request, lruMax) {
  const cache = await caches.open(cacheName)
  const hit = await cache.match(request)
  const refresh = fetch(request)
    .then((res) => {
      if (res.ok) {
        cache.put(request, res.clone())
        if (lruMax) trimCache(cacheName, lruMax)
      }
      return res
    })
    .catch(() => null)
  return hit ?? refresh.then((res) => res ?? Response.error())
}

async function networkFirst(cacheName, request, cacheKey) {
  const cache = await caches.open(cacheName)
  try {
    const res = await fetch(request)
    if (res.ok) await cache.put(cacheKey, res.clone())
    return res
  } catch {
    const hit = await cache.match(cacheKey)
    if (hit) return hit
    throw new Error("offline and uncached: " + cacheKey)
  }
}

self.addEventListener("fetch", (event) => {
  const request = event.request
  if (request.method !== "GET") return
  const url = new URL(request.url)

  // 1. OSM tiles (cross-origin)
  if (url.hostname.endsWith("tile.openstreetmap.org")) {
    event.respondWith(cacheFirst(TILE_CACHE, request, TILE_LRU_MAX))
    return
  }

  // 2. POI source images (cross-origin, pre-vendoring) — cache what the
  //    optimizer or a direct <img> pulls, so warm-up fetches stick.
  if (url.hostname === "images.unsplash.com") {
    event.respondWith(cacheFirst(IMAGE_CACHE, request, IMAGE_LRU_MAX))
    return
  }

  if (url.origin !== location.origin) return

  // 3. Immutable hashed build assets
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(STATIC_CACHE, request, STATIC_LRU_MAX))
    return
  }

  // 4. next/image optimizer responses (same-origin; key includes url+w+q)
  if (url.pathname === "/_next/image") {
    event.respondWith(staleWhileRevalidate(IMAGE_CACHE, request, IMAGE_LRU_MAX))
    return
  }

  // 5. RSC flight payloads — same pathname as the HTML document but a
  //    different response body. Cache under a synthetic key so an offline
  //    hard reload is never served a flight payload as a document.
  if (request.headers.get("RSC") === "1") {
    event.respondWith(
      networkFirst(DOC_CACHE, request, url.pathname + "?_rsc_sw=1").catch(() => Response.error())
    )
    return
  }

  // 6. Navigations — network-first so deploys self-heal; per-URL cached
  //    document offline; /explore shell only as a degraded last resort.
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        const cache = await caches.open(DOC_CACHE)
        try {
          const res = await fetch(request)
          if (res.ok) await cache.put(url.pathname, res.clone())
          return res
        } catch {
          const hit = await cache.match(url.pathname)
          if (hit) return hit
          const shell = await cache.match("/explore")
          return shell ?? Response.error()
        }
      })()
    )
    return
  }

  // 7. Other same-origin assets (logo, icons, favicons)
  if (/\.(png|jpe?g|svg|webp|avif|ico)$/.test(url.pathname)) {
    event.respondWith(staleWhileRevalidate(ASSET_CACHE, request))
    return
  }
})
