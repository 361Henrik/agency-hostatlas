"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function DeadTimePanel() {
  const { t } = useLanguage()

  return (
    <section
      data-section="dead-time"
      className="w-full flex flex-col lg:flex-row"
      style={{ backgroundColor: "#F8F5EE", minHeight: "80vh" }}
    >
      {/* Left — image */}
      <div className="relative w-full lg:w-3/5 min-h-[56vw] lg:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=85"
          alt="Conference corridor with guests between sessions — an opportunity for curated city hospitality"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 30%" }}
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>

      {/* Right — copy */}
      <div
        className="w-full lg:w-2/5 flex flex-col justify-center px-8 md:px-12 lg:px-14 xl:px-16 py-20 lg:py-28"
        style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
      >
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
      </div>
    </section>
  )
}
