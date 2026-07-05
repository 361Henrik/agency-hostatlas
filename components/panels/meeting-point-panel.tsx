"use client"

import { Clock, MapPin, ArrowRight, Navigation } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function MeetingPointPanel() {
  const { t } = useLanguage()

  return (
    <section
      data-section="meeting-point"
      className="w-full py-28 md:py-36"
      style={{ backgroundColor: "#1f4a3a", color: "#F5F0E8" }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div className="w-full lg:w-1/2">
            <p
              className="font-sans font-medium uppercase mb-6"
              style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: "rgba(201,169,98,0.75)" }}
            >
              {t("meeting_point_eyebrow")}
            </p>
            <h2
              className="font-serif text-balance leading-[1.06] mb-8"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 500, color: "#F5F0E8" }}
            >
              {t("meeting_point_heading")}
            </h2>
            <p
              className="font-sans text-pretty mb-12"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7, color: "rgba(245,240,232,0.80)" }}
            >
              {t("meeting_point_body")}
            </p>

            {/* Feature list */}
            <ul className="space-y-5">
              {[
                { icon: Clock, text: t("meeting_point_feature_1") },
                { icon: MapPin, text: t("meeting_point_feature_2") },
                { icon: Navigation, text: t("meeting_point_feature_3") },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-9 h-9 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "rgba(201,169,98,0.12)", border: "1px solid rgba(201,169,98,0.3)" }}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} style={{ color: "#C9A962" }} />
                  </div>
                  <span
                    className="font-sans"
                    style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(245,240,232,0.80)" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — UI mockup */}
          <div className="w-full lg:w-1/2">
            <div
              className="w-full max-w-sm mx-auto"
              style={{
                backgroundColor: "#0F1F15",
                border: "1px solid rgba(201,169,98,0.2)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {/* Phone status bar */}
              <div
                className="px-5 pt-4 pb-3 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(201,169,98,0.10)" }}
              >
                <span className="font-sans font-medium" style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", color: "rgba(201,169,98,0.55)" }}>
                  HOSTATLAS
                </span>
                <span className="font-sans" style={{ fontSize: "0.6875rem", color: "rgba(245,240,232,0.4)" }}>
                  Svolvær · Lofoten
                </span>
              </div>

              {/* Departure countdown */}
              <div
                className="px-5 py-5"
                style={{ borderBottom: "1px solid rgba(201,169,98,0.10)" }}
              >
                <p
                  className="font-sans font-medium uppercase mb-3"
                  style={{ fontSize: "0.625rem", letterSpacing: "0.18em", color: "rgba(195,92,60,0.85)" }}
                >
                  Departure in
                </p>
                <div className="flex items-end gap-2">
                  <span
                    className="font-serif font-medium"
                    style={{ fontSize: "3.5rem", lineHeight: 1, letterSpacing: "-0.03em", color: "#C9A962" }}
                  >
                    22
                  </span>
                  <span
                    className="font-sans mb-2"
                    style={{ fontSize: "1rem", color: "rgba(245,240,232,0.55)" }}
                  >
                    min
                  </span>
                </div>
                <div
                  className="h-1.5 w-full mt-3"
                  style={{ backgroundColor: "rgba(201,169,98,0.12)", borderRadius: "2px" }}
                >
                  <div
                    className="h-full"
                    style={{ width: "37%", backgroundColor: "#C9A962", borderRadius: "2px" }}
                  />
                </div>
              </div>

              {/* Meeting point */}
              <div className="px-5 py-4">
                <p
                  className="font-sans font-medium uppercase mb-2"
                  style={{ fontSize: "0.625rem", letterSpacing: "0.18em", color: "rgba(245,240,232,0.4)" }}
                >
                  Meeting point
                </p>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" style={{ color: "#C9A962" }} strokeWidth={1.5} />
                  <span className="font-sans font-medium" style={{ fontSize: "0.9375rem", color: "#F5F0E8" }}>
                    Torget Harbour · Main Pier
                  </span>
                </div>
                <button
                  className="mt-4 flex items-center gap-2 font-sans font-medium uppercase"
                  style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "#C9A962" }}
                >
                  Get directions
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
