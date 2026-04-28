"use client"

import Image from "next/image"
import { Sun, Eye, Aperture } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PhotoMomentPanel() {
  const { t } = useLanguage()

  return (
    <section
      data-section="photo-moment"
      className="w-full flex flex-col lg:flex-row"
      style={{ minHeight: "70vh" }}
    >
      {/* Left — image */}
      <div className="relative w-full lg:w-1/2 min-h-[50vw] lg:min-h-0">
        <Image
          src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1200&q=85"
          alt="Golden hour photography in Lofoten — harbour reflection"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 60%" }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Photo moment badge overlay */}
        <div
          className="absolute bottom-6 left-6"
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
          <p
            className="font-sans font-medium"
            style={{ fontSize: "0.875rem", color: "#F5F0E8" }}
          >
            21:15 — 22:45 tonight
          </p>
        </div>
      </div>

      {/* Right — copy */}
      <div
        className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-12 lg:px-14 xl:px-16 py-20 lg:py-28"
        style={{ backgroundColor: "#1a1f1a", color: "#F5F0E8" }}
      >
        <p
          className="font-sans font-medium uppercase mb-6"
          style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: "rgba(201,169,98,0.75)" }}
        >
          {t("photo_eyebrow")}
        </p>
        <h2
          className="font-serif text-balance leading-[1.06] mb-8"
          style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", fontWeight: 500, color: "#F5F0E8" }}
        >
          {t("photo_heading")}
        </h2>
        <p
          className="font-sans text-pretty mb-12"
          style={{ fontSize: "clamp(1rem, 2vw, 1.1875rem)", lineHeight: 1.7, color: "rgba(245,240,232,0.72)" }}
        >
          {t("photo_body")}
        </p>

        <ul className="space-y-5">
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
