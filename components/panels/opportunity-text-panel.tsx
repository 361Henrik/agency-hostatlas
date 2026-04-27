"use client"

import { useLanguage } from "@/lib/language-context"
import { Map, Camera, Navigation } from "lucide-react"

const modes = [
  { icon: Map,        labelKey: "Map View",    descKey: "An interactive map showing the route and points of interest. Tap any marker to read the story." },
  { icon: Navigation, labelKey: "Live View",   descKey: "Walk the route with real-time position tracking and next-stop guidance as you move through the city." },
  { icon: Camera,     labelKey: "Camera View", descKey: "Point your camera at the city and surface contextual information about what you see. (v2)" },
]

export function OpportunityTextPanel() {
  const { t } = useLanguage()

  return (
    <section data-section="opportunity" className="w-full panel-white py-28 md:py-36" style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}>
      {/* Editorial heading */}
      <div className="flex items-center justify-center px-6 md:px-16 pb-16 lg:pb-20">
        <div className="w-full max-w-5xl text-center">
          <p className="font-sans font-medium uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(196,154,92,1)", fontSize: "0.75rem" }}>
            {t("opportunity_eyebrow")}
          </p>
          <h2 className="font-serif text-balance mb-8 leading-[1.06]" style={{ color: "#1C2B1E", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            {t("opportunity_heading_line1")}
            <br />
            {t("opportunity_heading_line2")}
          </h2>
          <p className="font-sans text-pretty mx-auto max-w-[52ch]" style={{ color: "rgba(28,43,30,0.75)", fontSize: "1.1875rem", lineHeight: 1.6 }}>
            {t("opportunity_body")}
          </p>
        </div>
      </div>

      {/* Mode icons */}
      <div className="px-6 md:px-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14">
          {modes.map((m) => (
            <div key={m.labelKey} className="text-center">
              <m.icon className="h-7 w-7 text-accent mx-auto stroke-[1.5] mb-4" />
              <h4 className="font-serif text-foreground mb-2 leading-[1.15]" style={{ fontSize: "1.25rem", fontWeight: 500 }}>{m.labelKey}</h4>
              <p className="font-sans max-w-[22ch] mx-auto" style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(28,43,30,0.68)" }}>
                {m.descKey}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
