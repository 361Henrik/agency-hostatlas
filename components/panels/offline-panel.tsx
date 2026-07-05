"use client"

import { WifiOff, Download, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function OfflinePanel() {
  const { t } = useLanguage()

  return (
    <section
      data-section="offline"
      className="w-full py-28 md:py-36"
      style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left — icon + stat */}
          <div className="w-full lg:w-2/5 flex flex-col items-start">
            <div
              className="w-20 h-20 flex items-center justify-center mb-10"
              style={{ backgroundColor: "rgba(31,74,58,0.08)", border: "1px solid rgba(31,74,58,0.15)" }}
            >
              <WifiOff className="h-9 w-9" strokeWidth={1.5} style={{ color: "#1f4a3a" }} />
            </div>

            <p
              className="font-sans font-medium uppercase mb-4"
              style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: "rgba(28,43,30,0.5)" }}
            >
              {t("offline_eyebrow")}
            </p>
            <h2
              className="font-serif text-balance leading-[1.06] mb-8"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 500, color: "#1C2B1E" }}
            >
              {t("offline_heading")}
            </h2>

            <div
              className="px-6 py-5 flex items-start gap-4"
              style={{ backgroundColor: "rgba(195,92,60,0.06)", borderLeft: "3px solid rgba(195,92,60,0.5)" }}
            >
              <p
                className="font-sans font-medium"
                style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "rgba(28,43,30,0.75)" }}
              >
                {t("offline_stat")}
              </p>
            </div>
          </div>

          {/* Right — copy + how it works */}
          <div className="w-full lg:w-3/5">
            <p
              className="font-sans text-pretty mb-12"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7, color: "rgba(28,43,30,0.75)" }}
            >
              {t("offline_body")}
            </p>

            {/* How it works */}
            <div className="space-y-0">
              {[
                { step: "01", label: "Guest scans QR code at destination", sub: "All route content pre-loaded in one moment" },
                { step: "02", label: "Phone goes into a dead zone", sub: "No signal. No problem. Content already cached." },
                { step: "03", label: "Route continues without interruption", sub: "Map, narration, photos, return logic — all offline" },
              ].map(({ step, label, sub }) => (
                <div
                  key={step}
                  className="flex items-start gap-5 py-6"
                  style={{ borderBottom: "1px solid rgba(28,43,30,0.08)" }}
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <div
                      className="w-8 h-8 flex items-center justify-center"
                      style={{ backgroundColor: "rgba(31,74,58,0.08)", borderRadius: "50%", border: "1px solid rgba(31,74,58,0.15)" }}
                    >
                      <Check className="h-4 w-4" strokeWidth={2.5} style={{ color: "#1f4a3a" }} />
                    </div>
                    <span
                      className="font-serif font-medium"
                      style={{ fontSize: "1rem", color: "rgba(28,43,30,0.3)", letterSpacing: "-0.01em" }}
                    >
                      {step}
                    </span>
                  </div>
                  <div>
                    <p
                      className="font-sans font-medium mb-1"
                      style={{ fontSize: "1rem", color: "#1C2B1E" }}
                    >
                      {label}
                    </p>
                    <p
                      className="font-sans"
                      style={{ fontSize: "0.9375rem", color: "rgba(28,43,30,0.55)", lineHeight: 1.5 }}
                    >
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
