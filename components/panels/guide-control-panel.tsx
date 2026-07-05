"use client"

import { useEffect, useRef, useState } from "react"
import { Lock, Unlock, Sliders } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const ROUTES = [
  { name: "First Evening in Svolvær", time: "18:00 — 19:30", finalActive: true },
  { name: "Golden Hour Photo Walk", time: "20:45 — 22:00", finalActive: true },
  { name: "The Story of Skrei", time: "Tomorrow · 10:00", finalActive: false },
  { name: "Coastal Culture & Craft", time: "Tomorrow · 14:00", finalActive: false },
]

export function GuideControlPanel() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  // How many of the "active" routes have flipped on so far (0, 1, or 2).
  const [flippedCount, setFlippedCount] = useState(0)
  const [labelsVisible, setLabelsVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const activeTotal = ROUTES.filter((r) => r.finalActive).length

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFlippedCount(activeTotal)
      setLabelsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
            const timers: ReturnType<typeof setTimeout>[] = []
            for (let i = 1; i <= activeTotal; i++) {
              timers.push(setTimeout(() => setFlippedCount(i), i * 400))
            }
            timers.push(setTimeout(() => setLabelsVisible(true), activeTotal * 400 + 300))
          }
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="guide-control"
      className="w-full py-28 md:py-36"
      style={{ backgroundColor: "#1a1f1a", color: "#F5F0E8" }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left — copy (mobile: above mockup) */}
          <div className="w-full lg:w-1/2 order-1 lg:order-none">
            <p
              className="font-sans font-medium uppercase mb-6"
              style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: "rgba(201,169,98,0.75)" }}
            >
              {t("guide_control_eyebrow")}
            </p>
            <h2
              className="font-serif text-balance leading-[1.06] mb-8"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 500, color: "#F5F0E8" }}
            >
              {t("guide_control_heading")}
            </h2>
            <p
              className="font-sans text-pretty mb-12"
              style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7, color: "rgba(245,240,232,0.72)" }}
            >
              {t("guide_control_body")}
            </p>

            <ul className="space-y-5 reveal-stagger">
              {[
                { icon: Sliders, text: t("guide_control_feature_1") },
                { icon: Lock, text: t("guide_control_feature_2") },
                { icon: Unlock, text: t("guide_control_feature_3") },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-4 reveal">
                  <div
                    className="shrink-0 w-8 h-8 flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "rgba(201,169,98,0.08)", border: "1px solid rgba(201,169,98,0.2)" }}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.5} style={{ color: "#C9A962" }} />
                  </div>
                  <span
                    className="font-sans"
                    style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(245,240,232,0.72)" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — control diagram (mobile: below copy) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-none">
            <div
              className="w-full"
              style={{ backgroundColor: "#0F1F15", border: "1px solid rgba(201,169,98,0.15)", padding: "28px" }}
            >
              <p
                className="font-sans font-medium uppercase mb-6"
                style={{ fontSize: "0.625rem", letterSpacing: "0.18em", color: "rgba(201,169,98,0.5)" }}
              >
                Guide activation panel
              </p>

              <div className="space-y-3">
                {ROUTES.map(({ name, time, finalActive }, rowIndex) => {
                  // Order of activation among the "active" rows only.
                  const activeIndexAmongActive =
                    finalActive ? ROUTES.slice(0, rowIndex + 1).filter((r) => r.finalActive).length : 0
                  const isOn = finalActive && flippedCount >= activeIndexAmongActive

                  return (
                    <div
                      key={name}
                      className="flex items-center justify-between px-4 py-3"
                      style={{
                        backgroundColor: isOn ? "rgba(201,169,98,0.08)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${isOn ? "rgba(201,169,98,0.25)" : "rgba(255,255,255,0.06)"}`,
                        transition: "background-color 500ms ease-out, border-color 500ms ease-out",
                      }}
                    >
                      <div>
                        <p
                          className="font-sans font-medium"
                          style={{
                            fontSize: "0.9375rem",
                            color: isOn ? "#F5F0E8" : "rgba(245,240,232,0.4)",
                            transition: "color 500ms ease-out",
                          }}
                        >
                          {name}
                        </p>
                        <p
                          className="font-sans"
                          style={{
                            fontSize: "0.8125rem",
                            color: isOn ? "rgba(201,169,98,0.65)" : "rgba(245,240,232,0.25)",
                            opacity: finalActive ? (labelsVisible ? 1 : 0) : 1,
                            transition: "color 500ms ease-out, opacity 500ms ease-out",
                          }}
                        >
                          {time}
                        </p>
                      </div>
                      <div
                        className="w-8 h-5 flex items-center shrink-0"
                        style={{
                          justifyContent: isOn ? "flex-end" : "flex-start",
                          paddingLeft: isOn ? 0 : "4px",
                          paddingRight: isOn ? "4px" : 0,
                          backgroundColor: isOn ? "rgba(31,74,58,0.8)" : "rgba(255,255,255,0.05)",
                          border: `1px solid ${isOn ? "rgba(201,169,98,0.3)" : "rgba(255,255,255,0.08)"}`,
                          borderRadius: "12px",
                          transition: "background-color 500ms ease-out, border-color 500ms ease-out",
                        }}
                      >
                        <div
                          className="w-3 h-3"
                          style={{
                            backgroundColor: isOn ? "#C9A962" : "rgba(255,255,255,0.2)",
                            borderRadius: "50%",
                            transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1), background-color 500ms ease-out",
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              <p
                className="font-sans mt-5"
                style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.28)", lineHeight: 1.5 }}
              >
                Guests see only active routes. Inactive routes are invisible until you open them.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
