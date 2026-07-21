import type { MetadataRoute } from "next"
import { lofotenRoutes } from "@/lib/lofoten-data"
import { LOCALES, localizePath } from "@/lib/locale"
import { BASE_URL } from "@/lib/seo"

// Indexable canonical paths. /navigate views are excluded deliberately —
// they are app-like full-screen states with no standalone search value.
const PATHS: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/explore", priority: 0.8 },
  ...lofotenRoutes.map((r) => ({ path: `/explore/${r.id}`, priority: 0.6 })),
  { path: "/privacy", priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap(({ path, priority }) =>
    LOCALES.map((lang) => ({
      url: BASE_URL + localizePath(path, lang),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: {
          en: BASE_URL + localizePath(path, "en"),
          ja: BASE_URL + localizePath(path, "ja"),
          "zh-Hans": BASE_URL + localizePath(path, "zh"),
        },
      },
    }))
  )
}
