"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { lofotenRoutes } from "@/lib/lofoten-data"
import {
  OFFLINE_DOCS,
  OFFLINE_IMAGES,
  IMAGE_WARMUP_WIDTHS,
  DOC_CACHE_NAME,
  imageOptimizerUrl,
} from "@/lib/offline-urls"
import { prefetchTiles } from "@/lib/tile-prefetch"

type Status = "idle" | "preparing" | "ready"

// Warm the offline caches from page context. The service worker passively
// caches everything this component fetches; documents are put into the
// shared Cache API directly. Idempotent — cached entries are not refetched.
async function warmUp(prefetch: (href: string) => void): Promise<boolean> {
  const docCache = await caches.open(DOC_CACHE_NAME)

  // 1. Documents — verify the SW's install precache, repair any misses.
  await Promise.allSettled(
    OFFLINE_DOCS.map(async (url) => {
      if (await docCache.match(url)) return
      const res = await fetch(url, { headers: { accept: "text/html" } })
      if (res.ok) await docCache.put(url, res)
    })
  )

  // 2. Build assets. The chunks this page loaded arrived before the SW took
  //    control, so re-request them now that fetches are intercepted; then
  //    force the ssr:false dynamic chunks (map, camera) that no HTML ever
  //    references, plus RSC prefetch for fast online client-nav.
  const staticEntries = performance
    .getEntriesByType("resource")
    .map((e) => e.name)
    .filter((name) => name.includes("/_next/static/"))
  await Promise.allSettled(staticEntries.map((u) => fetch(u)))
  await Promise.allSettled([
    import("@/components/lofoten-map"),
    import("@/components/live-view-camera"),
  ])
  OFFLINE_DOCS.forEach((url) => prefetch(url))

  // 3. POI images through the next/image optimizer (deterministic URLs).
  await Promise.allSettled(
    OFFLINE_IMAGES.flatMap((src) =>
      IMAGE_WARMUP_WIDTHS.map((w) => fetch(imageOptimizerUrl(src, w)))
    )
  )

  // 4. Map tile corridor — skip inside the marketing page's iframe embed so
  //    every landing-page view doesn't hit the OSM servers; the QR-scan
  //    visit is the one that matters.
  if (window.self === window.top) {
    await prefetchTiles(lofotenRoutes)
  }

  // 5. Only claim "ready" if the full document set is genuinely cached.
  const checks = await Promise.all(OFFLINE_DOCS.map((url) => docCache.match(url)))
  return checks.every(Boolean)
}

export function OfflineReady() {
  const { t } = useLanguage()
  const router = useRouter()
  const [status, setStatus] = useState<Status>("idle")

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("caches" in window)) return
    let cancelled = false
    setStatus("preparing")
    navigator.serviceWorker.ready
      .then(() => warmUp(router.prefetch.bind(router)))
      .then((complete) => {
        if (!cancelled) setStatus(complete ? "ready" : "idle")
      })
      .catch(() => {
        if (!cancelled) setStatus("idle")
      })
    return () => {
      cancelled = true
    }
  }, [router])

  if (status === "idle") return null

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 transition-colors duration-500"
      style={{
        borderRadius: "999px",
        border: `1px solid ${status === "ready" ? "rgba(126,184,164,0.4)" : "rgba(201,169,98,0.25)"}`,
        backgroundColor: status === "ready" ? "rgba(126,184,164,0.1)" : "rgba(201,169,98,0.06)",
      }}
      role="status"
    >
      <span
        className={status === "preparing" ? "animate-pulse" : ""}
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          backgroundColor: status === "ready" ? "#7EB8A4" : "rgba(201,169,98,0.7)",
        }}
      />
      <span
        className="font-sans font-medium uppercase"
        style={{
          fontSize: "0.625rem",
          letterSpacing: "0.14em",
          color: status === "ready" ? "#7EB8A4" : "rgba(201,169,98,0.75)",
        }}
      >
        {status === "ready" ? t("offline_ready") : t("offline_preparing")}
      </span>
    </div>
  )
}
