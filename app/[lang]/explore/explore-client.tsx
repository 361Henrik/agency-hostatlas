"use client"

import Image from "next/image"
import { Clock, Route, ArrowRight } from "lucide-react"
import { LocalizedLink } from "@/components/localized-link"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { OfflineReady } from "@/components/offline-ready"
import { lofotenRoutes } from "@/lib/lofoten-data"
import { Badge } from "@/components/ui/badge"

const themeColors: Record<string, string> = {
  "first-evening-svolvaer":    "#C9A962",
  "story-of-skrei":            "#7EB8A4",
  "golden-hour-photo-walk":    "#C9A962",
  "coastal-culture-craft":     "#A8B89C",
  "weather-safe-short-walk":   "#8FAAB8",
}

export default function ExploreClient() {
  const { lang, t } = useLanguage()

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0F1F15", color: "#F5F0E8" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 px-5 py-4 flex items-center justify-between" style={{ backgroundColor: "rgba(15,31,21,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(201,169,98,0.12)" }}>
        <LocalizedLink href="/" aria-label="Back to main site">
          <Image
            src="/host-atlas-logo.png"
            alt="The Host Atlas"
            width={160}
            height={64}
            className="h-10 w-auto object-contain brightness-0 invert opacity-85"
          />
        </LocalizedLink>
        <LanguageToggle />
      </header>

      {/* Event banner */}
      <div className="px-5 pt-8 pb-2 text-center">
        <p className="font-sans font-medium uppercase tracking-[0.2em]" style={{ fontSize: "0.6875rem", color: "rgba(201,169,98,0.75)" }}>
          {t("explore_eyebrow")}
        </p>
      </div>

      {/* Main heading */}
      <div className="px-5 pt-4 pb-8 text-center">
        <h1 className="font-serif mb-3" style={{ fontSize: "clamp(2rem, 8vw, 3rem)", fontWeight: 500, color: "#C9A962", lineHeight: 1.05 }}>
          {t("explore_heading")}
        </h1>
        <p className="font-sans" style={{ fontSize: "1.0625rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.5 }}>
          {t("explore_subheading")}
        </p>
        <div className="mt-4">
          <OfflineReady />
        </div>
      </div>

      {/* Route list */}
      <div className="px-4 pb-16 space-y-3 max-w-2xl mx-auto">
        <p className="font-sans uppercase tracking-[0.15em] mb-5 px-1" style={{ fontSize: "0.6875rem", color: "rgba(201,169,98,0.55)" }}>
          {t("explore_select_prompt")}
        </p>

        {lofotenRoutes.map((route, index) => {
          const accentColor = themeColors[route.id] ?? "#C9A962"
          return (
            <LocalizedLink
              key={route.id}
              href={`/explore/${route.id}`}
              className="group flex gap-4 p-5 transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,169,98,0.12)",
                borderRadius: "4px",
              }}
            >
              {/* Number */}
              <span
                className="font-serif shrink-0"
                style={{ fontSize: "2.25rem", lineHeight: 1, letterSpacing: "-0.02em", color: accentColor, opacity: 0.85 }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <Badge
                    className="font-sans uppercase text-[10px] tracking-[0.1em] shrink-0"
                    style={{
                      backgroundColor: `${accentColor}18`,
                      color: accentColor,
                      border: `1px solid ${accentColor}28`,
                      borderRadius: "2px",
                      paddingTop: "1px",
                      paddingBottom: "1px",
                    }}
                  >
                    {route.theme[lang]}
                  </Badge>
                </div>
                <h2 className="font-serif mb-2 leading-[1.2]" style={{ fontSize: "1.125rem", fontWeight: 500, color: "#F5F0E8" }}>
                  {route.title[lang]}
                </h2>
                <p className="font-sans mb-3 line-clamp-2" style={{ fontSize: "0.9375rem", lineHeight: 1.55, color: "rgba(245,240,232,0.55)" }}>
                  {route.summary[lang]}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5" style={{ color: "rgba(245,240,232,0.4)" }}>
                    <Clock className="h-3 w-3" strokeWidth={1.5} />
                    <span className="font-sans" style={{ fontSize: "0.8125rem" }}>{route.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: "rgba(245,240,232,0.4)" }}>
                    <Route className="h-3 w-3" strokeWidth={1.5} />
                    <span className="font-sans" style={{ fontSize: "0.8125rem" }}>{route.distance}</span>
                  </div>
                  <span className="font-sans" style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.3)" }}>
                    {route.pois.length} {t("routes_stops")}
                  </span>
                </div>
              </div>

              <ArrowRight
                className="h-4 w-4 shrink-0 self-center transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: accentColor, opacity: 0.6 }}
              />
            </LocalizedLink>
          )
        })}
      </div>

      {/* Footer */}
      <div className="text-center pb-12 px-5">
        <p className="font-sans" style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.25)", letterSpacing: "0.06em" }}>
          {t("explore_powered_by")}
        </p>
      </div>
    </div>
  )
}
