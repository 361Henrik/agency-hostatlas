import type { LofotenRoute } from "./lofoten-data"

// Prefetch the OSM tile corridor for a set of routes so the map works
// offline. All five Lofoten routes share one ~2×2 km corridor around
// Svolvær harbour, so this is ~120–140 tiles (~2–3 MB) at z14–16.
//
// OSM tile-usage policy note: bulk downloading is discouraged and z17+
// offline downloads are forbidden. This is a one-time, small, throttled
// prefetch per device at z14–16 — far below any abuse threshold — with
// attribution kept in the map UI. Before real production traffic, switch
// to a provider whose ToS permits offline caching (Protomaps/MapTiler).

const ZOOM_LEVELS = [14, 15, 16]
const PADDING_DEG = 0.004 // ≈ 300–450 m at this latitude
const CONCURRENCY = 6

function lonToX(lon: number, z: number): number {
  return Math.floor(((lon + 180) / 360) * 2 ** z)
}

function latToY(lat: number, z: number): number {
  const rad = (lat * Math.PI) / 180
  return Math.floor(((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2) * 2 ** z)
}

export function corridorTileUrls(routes: LofotenRoute[]): string[] {
  const coords = routes.flatMap((r) => [
    r.startCoords,
    r.endCoords,
    ...r.pois.map((p) => p.coordinates),
  ])
  const lats = coords.map((c) => c[0])
  const lons = coords.map((c) => c[1])
  const bounds = {
    minLat: Math.min(...lats) - PADDING_DEG,
    maxLat: Math.max(...lats) + PADDING_DEG,
    minLon: Math.min(...lons) - PADDING_DEG,
    maxLon: Math.max(...lons) + PADDING_DEG,
  }

  const urls: string[] = []
  for (const z of ZOOM_LEVELS) {
    const x0 = lonToX(bounds.minLon, z)
    const x1 = lonToX(bounds.maxLon, z)
    // Y grows southward in tile space, so maxLat gives the smaller Y
    const y0 = latToY(bounds.maxLat, z)
    const y1 = latToY(bounds.minLat, z)
    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        const s = "abc"[(x + y) % 3]
        urls.push(`https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`)
      }
    }
  }
  return urls
}

/** Fetch tiles through the service worker (which caches them), throttled. */
export async function prefetchTiles(
  routes: LofotenRoute[],
  onProgress?: (done: number, total: number) => void
): Promise<void> {
  const urls = corridorTileUrls(routes)
  let done = 0
  const queue = [...urls]
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length > 0) {
      const url = queue.shift()
      if (!url) break
      try {
        await fetch(url, { mode: "cors", credentials: "omit" })
      } catch {
        // Offline mid-warm-up or a blocked tile — skip; runtime caching
        // picks it up on the next online map pan.
      }
      done++
      onProgress?.(done, urls.length)
    }
  })
  await Promise.all(workers)
}
