"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function HeroPanel() {
  const { t } = useLanguage()

  return (
    <section data-section="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1673697967248-0a52621c991e?w=1920&q=85"
          alt="Aerial view of Oslo city and the Oslofjord"
          fill
          priority
          className="object-cover hero-ken-burns saturate-[0.85]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.20) 40%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center gap-2 pointer-events-none scroll-indicator-fade">
        <span
          className="font-sans font-medium uppercase"
          style={{ fontSize: "0.625rem", letterSpacing: "0.25em", color: "rgba(201,169,98,0.75)" }}
        >
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="scroll-chevron"
          aria-hidden="true"
        >
          <path d="M1 1L8 8L15 1" stroke="rgba(201,169,98,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 9L8 16L15 9" stroke="rgba(201,169,98,0.45)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-16 lg:px-24 pb-[12vh] md:pb-[14vh]">
        <div className="w-full">
          <p
            className="font-sans font-medium uppercase mb-6"
            style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: "rgba(201,169,98,0.85)" }}
          >
            {t("hero_eyebrow")}
          </p>

          <h1
            className="font-serif font-medium"
            style={{
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              color: "#F4F1EA",
              fontSize: "clamp(2rem, 7vw, 5.5rem)",
            }}
          >
            <span className="block">{t("hero_h1_line1")}</span>
            <span className="block">{t("hero_h1_line2")}</span>
          </h1>

          <p
            className="font-sans font-normal md:font-medium text-pretty mt-8 md:mt-12 max-w-[48ch]"
            style={{
              fontSize: "clamp(0.9375rem, 1.8vw, 1.375rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.90)",
            }}
          >
            {t("hero_body")}
          </p>

          <p
            className="tagline-reveal font-sans font-medium mt-10 md:mt-14 uppercase"
            style={{
              fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
              letterSpacing: "0.22em",
              color: "rgba(201,169,98,0.9)",
            }}
          >
            {t("hero_tagline")}
          </p>
        </div>
      </div>
    </section>
  )
}
