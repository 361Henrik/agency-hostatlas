"use client"

import Link from "next/link"
import { Clock, Route, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { osloRoutes } from "@/lib/oslo-data"
import { Badge } from "@/components/ui/badge"

const themeColors: Record<string, string> = {
  "banking-financial-history":   "#C9A962",
  "fintech-startups":            "#7EB8A4",
  "oslo-culture-highlights":     "#A8B89C",
  "innovation-investment-trail": "#B8A0C8",
  "corporate-innovation-hybrid": "#C9A962",
}

export function OsloRoutesPanel() {
  const { lang, t } = useLanguage()

  return (
    <section
      data-section="routes"
      className="w-full panel-white py-28 md:py-36"
      style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans font-medium uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(196,154,92,1)", fontSize: "0.75rem" }}>
            {t("routes_eyebrow")}
          </p>
          <h2 className="font-serif text-balance leading-[1.06] mb-6" style={{ color: "#1C2B1E", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            {t("routes_heading")}
          </h2>
          <p className="font-sans text-pretty mx-auto max-w-[52ch]" style={{ color: "rgba(28,43,30,0.72)", fontSize: "1.1875rem", lineHeight: 1.6 }}>
            {t("routes_intro")}
          </p>
        </div>

        {/* Route cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {osloRoutes.map((route, index) => {
            const accentColor = themeColors[route.id] ?? "#C9A962"
            return (
              <Link
                key={route.id}
                href={`/explore/${route.id}`}
                className="group flex flex-col bg-card border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                {/* Route number bar */}
                <div
                  className="px-6 pt-6 pb-4 flex items-start gap-4"
                  style={{ borderBottom: "1px solid rgba(201,169,98,0.12)" }}
                >
                  <span
                    className="font-serif font-medium shrink-0"
                    style={{ fontSize: "3rem", lineHeight: 1, letterSpacing: "-0.02em", color: accentColor }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <Badge
                      className="font-sans uppercase text-[10px] tracking-[0.12em] mb-2"
                      style={{
                        backgroundColor: `${accentColor}18`,
                        color: accentColor,
                        border: `1px solid ${accentColor}30`,
                        borderRadius: "2px",
                        paddingTop: "2px",
                        paddingBottom: "2px",
                      }}
                    >
                      {route.theme[lang]}
                    </Badge>
                    <h3 className="font-serif text-foreground leading-[1.2]" style={{ fontSize: "1.1875rem", fontWeight: 500 }}>
                      {route.title[lang]}
                    </h3>
                  </div>
                </div>

                {/* Summary + meta */}
                <div className="px-6 py-5 flex flex-col flex-1">
                  <p className="font-sans flex-1 mb-5" style={{ fontSize: "1rem", lineHeight: 1.65, color: "rgba(28,43,30,0.70)" }}>
                    {route.summary[lang]}
                  </p>
                  <div className="flex items-center gap-5 mb-5">
                    <div className="flex items-center gap-1.5" style={{ color: "rgba(28,43,30,0.5)" }}>
                      <Clock className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span className="font-sans" style={{ fontSize: "0.875rem" }}>{route.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5" style={{ color: "rgba(28,43,30,0.5)" }}>
                      <Route className="h-3.5 w-3.5" strokeWidth={1.5} />
                      <span className="font-sans" style={{ fontSize: "0.875rem" }}>{route.distance}</span>
                    </div>
                    <span className="font-sans" style={{ fontSize: "0.875rem", color: "rgba(28,43,30,0.4)" }}>
                      {route.pois.length} stops
                    </span>
                  </div>

                  <div className="flex items-center gap-2 transition-opacity duration-200 group-hover:opacity-100 opacity-70">
                    <span className="font-sans font-medium uppercase" style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: accentColor }}>
                      {t("routes_view_route")}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" style={{ color: accentColor }} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Guest access note */}
        <div className="text-center">
          <p className="font-sans" style={{ fontSize: "0.9375rem", color: "rgba(28,43,30,0.5)" }}>
            {t("routes_qr_label")}{" "}
            <span className="font-medium" style={{ color: "rgba(28,43,30,0.7)" }}>
              corporate.hostatlas.guide/explore
            </span>
          </p>
          <p className="font-sans mt-4 mx-auto max-w-[60ch]" style={{ fontSize: "0.8125rem", color: "rgba(28,43,30,0.45)", lineHeight: 1.6 }}>
            {t("routes_footnote")}
          </p>
        </div>
      </div>
    </section>
  )
}
