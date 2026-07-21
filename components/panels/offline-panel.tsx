"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { WifiOff, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function OfflinePanel() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)

  // One-time trigger for the step sequence + bronze underline draw.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="offline"
      className="w-full py-28 md:py-36"
      style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Left — photographic strip (remoteness carries the section) */}
          <div className="w-full lg:w-2/5 flex flex-col items-start">
            <div
              className="relative mb-8 reveal-scale -mx-6 w-[calc(100%+3rem)] md:-mx-12 md:w-[calc(100%+6rem)] lg:mx-0 lg:w-full"
              style={{ aspectRatio: "21 / 9", overflow: "hidden" }}
            >
              {/* TODO(phase-8): replace with S7 empty island road — plan §3 */}
              <Image
                src="/cinematic-norwegian-fjord-landscape-with-steep-mou.jpg"
                alt="Remote Norwegian island road with mountains closing in, no connectivity"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
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
              style={{ backgroundColor: "rgba(195,92,60,0.08)", borderLeft: "3px solid #c35c3c" }}
            >
              <WifiOff className="h-5 w-5 shrink-0 mt-0.5" strokeWidth={1.5} style={{ color: "#c35c3c" }} />
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

            {/* How it works — sequential reveal, 300ms apart */}
            <div className="space-y-0">
              {[
                { step: "01", label: t("offline_step_1_label"), sub: t("offline_step_1_sub") },
                { step: "02", label: t("offline_step_2_label"), sub: t("offline_step_2_sub"), underline: true },
                { step: "03", label: t("offline_step_3_label"), sub: t("offline_step_3_sub") },
              ].map(({ step, label, sub, underline }, i) => (
                <div
                  key={step}
                  className="flex items-start gap-5 py-6"
                  style={{
                    borderBottom: "1px solid rgba(28,43,30,0.08)",
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 600ms ease-out ${i * 300}ms, transform 600ms ease-out ${i * 300}ms`,
                  }}
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
                      style={{
                        fontSize: "0.9375rem",
                        color: "rgba(28,43,30,0.55)",
                        lineHeight: 1.5,
                        display: "inline",
                        backgroundImage: underline
                          ? "linear-gradient(#c9a962, #c9a962)"
                          : "none",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "0 100%",
                        backgroundSize: underline ? (revealed ? "100% 2px" : "0% 2px") : undefined,
                        transition: underline ? "background-size 700ms ease-out 900ms" : undefined,
                        paddingBottom: underline ? "2px" : undefined,
                      }}
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
