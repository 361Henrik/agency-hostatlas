"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Sun, Eye, Aperture } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

// Inset live with an interim AI-composited product shot (real app UI on the
// screen, generated scene — approved 2026-07). The Phase 8 S5b directed capture
// (guest composing a photograph) remains the target replacement (plan §3).
const INSET_ENABLED = true

export function PhotoMomentPanel() {
  const { t } = useLanguage()
  const panelRef = useRef<HTMLElement>(null)
  // Drives the golden-hour transition + the copy stagger reveal.
  const [goldenHour, setGoldenHour] = useState(false)

  useEffect(() => {
    const node = panelRef.current
    if (!node) return

    // Reduced motion: land on the final (warm) state immediately, no observer.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGoldenHour(true)
      return
    }

    // One-time observer: the light turns golden once, when the panel enters view.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setGoldenHour(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={panelRef}
      data-section="photo-moment"
      className={`w-full flex flex-col lg:flex-row photo-moment${goldenHour ? " is-golden" : ""}`}
      style={{ minHeight: "70vh", backgroundColor: "#1a1f1a" }}
    >
      {/* Left — image(s) */}
      <div className="relative w-full lg:w-1/2 min-h-[50vw] lg:min-h-0 flex flex-col lg:block">
        {/* Main frame — S5a golden-hour reflection (3:2) */}
        <div className="photo-moment-main relative w-full min-h-[50vw] lg:min-h-0 lg:absolute lg:inset-0">
          <Image
            src="https://images.unsplash.com/photo-1771683989435-e6b2fb7e3f38?w=1200&q=85"
            alt="Village lights reflecting on still water with Norwegian mountain backdrop at golden hour"
            fill
            className="object-cover"
            style={{ objectPosition: "50% 60%" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Base scrim — eases warmer as the light turns golden */}
          <div className="photo-moment-scrim absolute inset-0" aria-hidden="true" />
          {/* Bronze golden-hour overlay — 0 → 12%, soft-light warms without muddying */}
          <div className="photo-moment-glow absolute inset-0" aria-hidden="true" />

          {/* Golden Hour Window badge — fades in 400ms after the transition starts */}
          <div
            className="photo-moment-badge absolute bottom-6 left-6"
            style={{
              backgroundColor: "rgba(15,31,21,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(201,169,98,0.3)",
              padding: "10px 14px",
            }}
          >
            <p
              className="font-sans font-medium uppercase"
              style={{ fontSize: "0.625rem", letterSpacing: "0.18em", color: "rgba(201,169,98,0.75)", marginBottom: "2px" }}
            >
              Golden Hour Window
            </p>
            <p className="font-sans font-medium" style={{ fontSize: "0.875rem", color: "#F5F0E8" }}>
              21:15 — 22:45 tonight
            </p>
          </div>
        </div>

        {INSET_ENABLED && (
          <>
            {/* TODO(phase-8): replace with S5b guest-composing directed capture — plan §3 */}
            {/* Desktop: 4:5 portrait inset bridging the image/copy seam — breaks the grid
                into the copy panel's padding, stays vertically inside the frame */}
            <div
              className="photo-moment-inset hidden lg:block absolute z-10 overflow-hidden"
              style={{
                width: "28%",
                aspectRatio: "4 / 5",
                right: "-6%",
                bottom: "9%",
                border: "4px solid var(--atlas-canvas, #f6f3ee)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
              }}
            >
              <Image
                src="/lofoten/photo-moment-guest-countdown.jpg"
                alt="A guest's hands holding a phone showing the HostAtlas departure countdown, golden-hour harbour behind"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 60vw, 14vw"
              />
            </div>
            {/* Mobile: inset becomes a second stacked frame below the main image */}
            <div
              className="photo-moment-inset-mobile relative block lg:hidden w-full overflow-hidden"
              style={{ aspectRatio: "4 / 5", borderTop: "4px solid var(--atlas-canvas, #f6f3ee)" }}
            >
              <Image
                src="/lofoten/photo-moment-guest-countdown.jpg"
                alt="A guest's hands holding a phone showing the HostAtlas departure countdown, golden-hour harbour behind"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </>
        )}
      </div>

      {/* Right — copy */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-14 xl:px-16 py-20 lg:py-28 reveal-stagger"
        style={{ color: "#F5F0E8" }}
      >
        <p
          className={`reveal font-sans font-medium uppercase mb-6${goldenHour ? " visible" : ""}`}
          style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: "rgba(201,169,98,0.75)" }}
        >
          {t("photo_eyebrow")}
        </p>
        <h2
          className={`reveal font-serif text-balance leading-[1.06] mb-8${goldenHour ? " visible" : ""}`}
          style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", fontWeight: 500, color: "#F5F0E8" }}
        >
          {t("photo_heading")}
        </h2>
        <p
          className={`reveal font-sans text-pretty mb-12${goldenHour ? " visible" : ""}`}
          style={{ fontSize: "clamp(1rem, 2vw, 1.1875rem)", lineHeight: 1.7, color: "rgba(245,240,232,0.72)" }}
        >
          {t("photo_body")}
        </p>

        <ul className={`reveal space-y-5${goldenHour ? " visible" : ""}`}>
          {[
            { icon: Sun, text: t("photo_feature_1") },
            { icon: Eye, text: t("photo_feature_2") },
            { icon: Aperture, text: t("photo_feature_3") },
          ].map(({ icon: Icon, text }, i) => (
            <li key={i} className="flex items-start gap-4">
              <div
                className="shrink-0 w-8 h-8 flex items-center justify-center mt-0.5"
                style={{ backgroundColor: "rgba(201,169,98,0.10)", border: "1px solid rgba(201,169,98,0.25)" }}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.5} style={{ color: "#C9A962" }} />
              </div>
              <span
                className="font-sans"
                style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(245,240,232,0.75)" }}
              >
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
