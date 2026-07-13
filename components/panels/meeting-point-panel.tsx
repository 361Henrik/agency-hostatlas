"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Clock, MapPin, ArrowRight, Navigation } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function MeetingPointPanel() {
  const { t, lang } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [ticked, setTicked] = useState(false)
  const [barSettled, setBarSettled] = useState(false)

  // One-time countdown tick + progress bar settle, triggered when the panel enters view.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setTicked(true)
      setBarSettled(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
            const tickTimer = setTimeout(() => setTicked(true), 1000)
            const barTimer = setTimeout(() => setBarSettled(true), 1000)
            return () => {
              clearTimeout(tickTimer)
              clearTimeout(barTimer)
            }
          }
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="meeting-point"
      className="w-full py-28 md:py-36"
      style={{ backgroundColor: "#1f4a3a", color: "#F5F0E8" }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-start">

          {/* Right on desktop, ABOVE copy on mobile — the UI is the proof */}
          <div className="w-full lg:w-1/2 order-1 lg:order-none">
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
                    className="font-serif font-medium tabular-nums relative inline-block"
                    style={{ fontSize: "3.5rem", lineHeight: 1, letterSpacing: "-0.03em", color: "#C9A962" }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        transition: "opacity 600ms ease-out, transform 600ms ease-out",
                        opacity: ticked ? 0 : 1,
                        transform: ticked ? "translateY(-8px)" : "translateY(0)",
                        position: ticked ? "absolute" : "static",
                        left: 0,
                        top: 0,
                      }}
                    >
                      23
                    </span>
                    <span
                      style={{
                        display: "inline-block",
                        transition: "opacity 600ms ease-out, transform 600ms ease-out",
                        opacity: ticked ? 1 : 0,
                        transform: ticked ? "translateY(0)" : "translateY(8px)",
                        position: ticked ? "static" : "absolute",
                        left: 0,
                        top: 0,
                      }}
                    >
                      22
                    </span>
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
                    style={{
                      width: barSettled ? "37%" : "44%",
                      backgroundColor: "#C9A962",
                      borderRadius: "2px",
                      transition: "width 900ms cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
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

          {/* Left on desktop, BELOW mockup on mobile — copy */}
          <div className="w-full lg:w-1/2 order-2 lg:order-none">
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

            {/* Feature list — stagger-reveal */}
            <ul className="space-y-5 reveal-stagger">
              {[
                { icon: Clock, text: t("meeting_point_feature_1") },
                { icon: MapPin, text: t("meeting_point_feature_2") },
                { icon: Navigation, text: t("meeting_point_feature_3") },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-4 reveal">
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

            {/* Into the live demo — countdown pre-set so the safety layer is
                immediately visible, matching the mockup's 22 minutes */}
            <Link
              href={`/explore/first-evening-svolvaer/navigate?demoMinutes=22${lang !== "en" ? `&lang=${lang}` : ""}`}
              className="mt-12 inline-flex items-center gap-2 font-sans font-medium uppercase transition-opacity duration-200 hover:opacity-75"
              style={{ fontSize: "0.8rem", letterSpacing: "0.12em", color: "#C9A962" }}
            >
              {t("meeting_point_cta")}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
