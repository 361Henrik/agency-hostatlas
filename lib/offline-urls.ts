import { lofotenRoutes } from "./lofoten-data"
import { LOCALES, localizePath } from "./locale"

// Single source of truth for the guest app's offline surface.
// NOTE: public/sw.js mirrors OFFLINE_DOCS in its own constant (a service
// worker cannot import app modules) — update both together. The list only
// changes when a route is added or the URL space changes (e.g. i18n paths).

// Mirrors VERSION in public/sw.js — bump both together.
export const SW_VERSION = "v2"
export const DOC_CACHE_NAME = `ha-docs-${SW_VERSION}`

const CANONICAL_DOCS: string[] = [
  "/explore",
  ...lofotenRoutes.flatMap((r) => [`/explore/${r.id}`, `/explore/${r.id}/navigate`]),
]

// All three locales are cached — a guest may switch language mid-walk.
export const OFFLINE_DOCS: string[] = LOCALES.flatMap((lang) =>
  CANONICAL_DOCS.map((path) => localizePath(path, lang))
)

/** Every POI image the guest app can show (remote today, /lofoten/* later). */
export const OFFLINE_IMAGES: string[] = Array.from(
  new Set(
    lofotenRoutes.flatMap((r) => r.pois.map((p) => p.imageUrl).filter((u): u is string => !!u))
  )
)

// Widths matching next/image deviceSizes for dpr2/dpr3 phones (390–414px
// viewports) — the guest device profile. The optimizer URL is deterministic,
// so warming these makes POI images available offline for the common case.
export const IMAGE_WARMUP_WIDTHS = [828, 1080]

export function imageOptimizerUrl(src: string, width: number): string {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`
}
