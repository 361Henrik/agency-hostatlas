"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function ConfidenceGapPanel() {
  const { t } = useLanguage()

  return (
    <section
      data-section="confidence-gap"
      className="w-full flex flex-col lg:flex-row"
      style={{ backgroundColor: "#F8F5EE", minHeight: "80vh" }}
    >
      {/* Left — image */}
      <div className="relative w-full lg:w-3/5 min-h-[56vw] lg:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1755916265534-7338a85c22c3?w=1200&q=85"
          alt="Travelers walking on a snowy pier toward dramatic Norwegian mountains"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 40%" }}
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      {/* Right — copy */}
      <div
        className="w-full lg:w-2/5 flex flex-col justify-center px-8 md:px-12 lg:px-14 xl:px-16 py-20 lg:py-28"
        style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
      >
        <p
          className="font-sans font-medium uppercase mb-6"
          style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: "rgba(28,43,30,0.5)" }}
        >
          {t("dead_time_eyebrow")}
        </p>

        <h2
          className="font-serif text-balance mb-10 leading-[1.06]"
          style={{ fontSize: "clamp(1.875rem, 3vw, 3rem)", color: "#1C2B1E", fontWeight: 500 }}
        >
          {t("dead_time_heading")}
        </h2>

        <div className="space-y-5">
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
          className="mt-10 pt-8 border-t"
          style={{ borderColor: "rgba(28,43,30,0.12)" }}
        >
          <p
            className="font-sans font-medium"
            style={{ fontSize: "0.9375rem", lineHeight: 1.5, color: "rgba(195,92,60,0.9)" }}
          >
            {t("dead_time_stat")}
          </p>
        </div>
      </div>
    </section>
  )
}
