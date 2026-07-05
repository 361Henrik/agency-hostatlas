"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Route, MapPin, Play } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { lofotenRoutes } from "@/lib/lofoten-data"
import { Badge } from "@/components/ui/badge"

const LofotenMap = dynamic(
  () => import("@/components/lofoten-map").then((m) => m.LofotenMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full animate-pulse" style={{ backgroundColor: "#1a2b1f" }} />
    ),
  }
)

const poiTypeLabels: Record<string, { en: string; ja: string; zh: string }> = {
  city_highlight:   { en: "Cultural Stop",  ja: "文化スポット",  zh: "文化景点" },
  photo_moment:     { en: "Photo Moment",   ja: "フォトモーメント", zh: "拍照时机" },
  cultural_story:   { en: "Guide Story",    ja: "ガイドストーリー", zh: "导游故事" },
  industry_poi:     { en: "Cultural Stop",  ja: "文化スポット",  zh: "文化景点" },
  host_narrative:   { en: "Guide Story",    ja: "ガイドストーリー", zh: "导游故事" },
}

export default function RouteDetailPage({ params }: { params: Promise<{ routeId: string }> }) {
  const { routeId } = use(params)
  const { lang, t } = useLanguage()
  const route = lofotenRoutes.find((r) => r.id === routeId)
  if (!route) notFound()

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0F1F15", color: "#F5F0E8" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 px-4 py-3 flex items-center justify-between"
        style={{ backgroundColor: "rgba(15,31,21,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(201,169,98,0.12)" }}
      >
        <Link
          href={`/explore${lang !== "en" ? `?lang=${lang}` : ""}`}
          className="flex items-center gap-2 transition-opacity hover:opacity-70"
          style={{ color: "rgba(245,240,232,0.7)" }}
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          <span className="font-sans" style={{ fontSize: "0.875rem" }}>{t("explore_back")}</span>
        </Link>
        <Link href={lang !== "en" ? `/?lang=${lang}` : "/"} className="absolute left-1/2 -translate-x-1/2" aria-label="Back to main site">
          <Image
            src="/host-atlas-logo.png"
            alt="The Host Atlas"
            width={120}
            height={48}
            className="h-8 w-auto object-contain brightness-0 invert opacity-70"
          />
        </Link>
        <LanguageToggle />
      </header>

      {/* Route title block */}
      <div className="px-5 pt-7 pb-5">
        <Badge
          className="font-sans uppercase text-[10px] tracking-[0.12em] mb-3"
          style={{ backgroundColor: "rgba(201,169,98,0.12)", color: "#C9A962", border: "1px solid rgba(201,169,98,0.25)", borderRadius: "2px" }}
        >
          {route.theme[lang]}
        </Badge>
        <h1 className="font-serif mb-4 leading-[1.1]" style={{ fontSize: "clamp(1.75rem, 6vw, 2.5rem)", fontWeight: 500, color: "#C9A962" }}>
          {route.title[lang]}
        </h1>
        <p className="font-sans mb-5" style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "rgba(245,240,232,0.70)" }}>
          {route.summary[lang]}
        </p>

        {/* Meta chips */}
        <div className="flex flex-wrap items-center gap-4 mb-1">
          <div className="flex items-center gap-1.5" style={{ color: "rgba(245,240,232,0.5)" }}>
            <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="font-sans" style={{ fontSize: "0.875rem" }}>{route.duration}</span>
          </div>
          <div className="flex items-center gap-1.5" style={{ color: "rgba(245,240,232,0.5)" }}>
            <Route className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="font-sans" style={{ fontSize: "0.875rem" }}>{route.distance}</span>
          </div>
          <div className="flex items-center gap-1.5" style={{ color: "rgba(245,240,232,0.5)" }}>
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="font-sans" style={{ fontSize: "0.875rem" }}>{route.pois.length} {t("routes_stops")}</span>
          </div>
        </div>
      </div>

      {/* Map preview */}
      <div className="mx-4 mb-6 overflow-hidden rounded-sm" style={{ height: "220px", border: "1px solid rgba(201,169,98,0.15)" }}>
        <LofotenMap route={route} interactive={false} className="w-full h-full" />
      </div>

      {/* Start CTA */}
      <div className="px-4 mb-8">
        <Link
          href={`/explore/${routeId}/navigate${lang !== "en" ? `?lang=${lang}` : ""}`}
          className="flex items-center justify-center gap-3 w-full py-4 font-sans font-medium uppercase transition-opacity hover:opacity-85 active:scale-[0.98]"
          style={{
            backgroundColor: "#C9A962",
            color: "#1F3528",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            borderRadius: "2px",
          }}
        >
          <Play className="h-4 w-4" strokeWidth={2} fill="currentColor" />
          {t("explore_start")}
        </Link>
      </div>

      {/* POI list */}
      <div className="px-4 pb-16">
        <p className="font-sans uppercase tracking-[0.15em] mb-5" style={{ fontSize: "0.6875rem", color: "rgba(201,169,98,0.55)" }}>
          {t("explore_on_this_route")}
        </p>
        <div className="space-y-0">
          {route.pois.map((poi, index) => {
            const typeLabel = poiTypeLabels[poi.type]?.[lang] ?? poi.type
            return (
              <div
                key={poi.id}
                className="py-4"
                style={{ borderBottom: "1px solid rgba(201,169,98,0.08)" }}
              >
                {poi.imageUrl && (
                  <div className="relative w-full mb-3 overflow-hidden rounded-sm" style={{ height: "160px" }}>
                    <Image
                      src={poi.imageUrl}
                      alt={poi.title[lang]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                )}
                <div className="flex gap-4">
                  {/* Number */}
                  <span
                    className="font-serif shrink-0 w-7 pt-0.5"
                    style={{ fontSize: "1.25rem", lineHeight: 1.1, color: "rgba(201,169,98,0.6)", fontWeight: 500 }}
                  >
                    {index + 1}
                  </span>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-serif leading-[1.2]" style={{ fontSize: "1.0625rem", fontWeight: 500, color: "#F5F0E8" }}>
                        {poi.title[lang]}
                      </h3>
                      <Badge
                        className="font-sans uppercase text-[9px] tracking-[0.08em] shrink-0"
                        style={{
                          backgroundColor: "rgba(201,169,98,0.08)",
                          color: "rgba(201,169,98,0.65)",
                          border: "1px solid rgba(201,169,98,0.15)",
                          borderRadius: "2px",
                        }}
                      >
                        {typeLabel}
                      </Badge>
                    </div>
                    <p className="font-sans line-clamp-2" style={{ fontSize: "0.9375rem", lineHeight: 1.55, color: "rgba(245,240,232,0.5)" }}>
                      {poi.description[lang]}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
