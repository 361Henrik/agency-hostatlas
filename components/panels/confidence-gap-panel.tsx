"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useCountUp } from "@/hooks/use-count-up"

// Matches the literal "~50%" (EN), "約50%" (JA), or "约50%" (ZH) inside the
// translated stat sentence, capturing the lead-in glyph (~ / 約 / 约) so the
// count-up can be spliced back in without touching the translation strings.
const STAT_NUMBER_PATTERN = /(~|約|约)\s*50\s*%/

export function ConfidenceGapPanel() {
  const { t } = useLanguage()
  const { ref: countRef, value: statValue } = useCountUp<HTMLDivElement>(50)

  const statText = t("dead_time_stat")
  const statMatch = statText.match(STAT_NUMBER_PATTERN)
  const statBefore = statMatch ? statText.slice(0, statMatch.index) : ""
  const statAfter = statMatch ? statText.slice((statMatch.index ?? 0) + statMatch[0].length) : statText
  const statPrefix = statMatch ? statMatch[1] : "~"

  return (
    <section
      data-section="confidence-gap"
      className="w-full flex flex-col lg:flex-row"
      style={{ backgroundColor: "#F8F5EE", minHeight: "80vh" }}
    >
      {/* Left — image (mobile: appears above copy via flex-col order) */}
      <div className="relative w-full lg:w-3/5 min-h-[56vw] lg:min-h-0 order-1 reveal-scale">
        <Image
          src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=80"
          alt="A quiet Lofoten village street — the destination is right there, and almost no one walks into it"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 40%" }}
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        {/* TODO(phase-8): replace with S2 directed-capture cluster shot (guests clustered
            near the coach, empty street behind) — plan §3. Interim: real Unsplash village
            photo; the previous local asset was a cruise-deck couple (wrong vertical). */}
      </div>

      {/* Right — copy */}
      <div
        className="w-full lg:w-2/5 flex flex-col justify-center px-8 md:px-12 lg:px-14 xl:px-16 py-20 lg:py-28 order-2 reveal-stagger"
        style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
      >
        <p
          className="reveal font-sans font-medium uppercase mb-6"
          style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: "rgba(28,43,30,0.5)" }}
        >
          {t("dead_time_eyebrow")}
        </p>

        <h2
          className="reveal font-serif text-balance mb-10 leading-[1.06]"
          style={{ fontSize: "clamp(1.875rem, 3vw, 3rem)", color: "#1C2B1E", fontWeight: 500 }}
        >
          {t("dead_time_heading")}
        </h2>

        <div className="reveal space-y-5">
          <p className="font-sans" style={{ fontSize: "clamp(1rem, 2.5vw, 1.1875rem)", lineHeight: 1.6, color: "rgba(28,43,30,0.8)", fontWeight: 500 }}>
            {t("dead_time_p1")}
          </p>
          <p className="font-sans" style={{ fontSize: "clamp(1rem, 2.5vw, 1.1875rem)", lineHeight: 1.6, color: "rgba(28,43,30,0.75)" }}>
            {t("dead_time_p2")}
          </p>
          <p className="font-sans" style={{ fontSize: "clamp(1rem, 2.5vw, 1.1875rem)", lineHeight: 1.6, color: "rgba(28,43,30,0.75)" }}>
            {t("dead_time_p3")}
          </p>
        </div>

        <div
          ref={countRef}
          className="reveal mt-10 pt-6 pb-6 pl-6 pr-6 w-full lg:w-auto"
          style={{
            backgroundColor: "rgba(195,92,60,0.08)",
            borderLeft: "3px solid #C35C3C",
            borderRadius: "12px",
          }}
        >
          <p
            className="font-sans font-medium"
            style={{ fontSize: "0.9375rem", lineHeight: 1.5, color: "#1C2B1E" }}
          >
            {statBefore}
            <span style={{ fontVariantNumeric: "tabular-nums", display: "inline-block", minWidth: "3.4ch" }}>
              {statPrefix}{statValue}%
            </span>
            {statAfter}
          </p>
        </div>
      </div>
    </section>
  )
}
