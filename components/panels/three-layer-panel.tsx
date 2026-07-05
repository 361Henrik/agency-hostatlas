"use client"

import { useLanguage } from "@/lib/language-context"

export function ThreeLayerPanel() {
  const { t } = useLanguage()

  const layers = [
    { number: "01", titleKey: "three_layer_01_title" as const, bodyKey: "three_layer_01_body" as const },
    { number: "02", titleKey: "three_layer_02_title" as const, bodyKey: "three_layer_02_body" as const },
    { number: "03", titleKey: "three_layer_03_title" as const, bodyKey: "three_layer_03_body" as const },
  ]

  return (
    <section
      data-section="concept"
      className="w-full flex flex-col items-center px-6 md:px-12 lg:px-20 py-28 lg:py-36 panel-green"
      style={{ backgroundColor: "#1F3528", color: "#F5F0E8" }}
    >
      {/* Header */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
          {t("three_layer_eyebrow")}
        </p>
        <h2
          className="font-serif leading-[1.06] mb-8"
          style={{ color: "#C9A962", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}
        >
          <span className="block">{t("three_layer_heading_line1")}</span>
          <span className="block">{t("three_layer_heading_line2")}</span>
        </h2>

        <div className="space-y-5 max-w-2xl mx-auto text-center">
          <p style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,243,239,0.88)", fontWeight: 500 }} className="font-sans">
            {t("three_layer_intro1")}
          </p>
          <p style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,243,239,0.82)", fontWeight: 500 }} className="font-sans">
            {t("three_layer_intro2")}
          </p>
        </div>
      </div>

      {/* Three-column grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 mt-10">
        {layers.map((layer) => (
          <div key={layer.number} className="flex flex-col">
            <span
              className="font-serif font-medium mb-4 md:mb-6"
              style={{
                fontSize: "clamp(48px, 8vw, 96px)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "oklch(0.72 0.10 75)",
              }}
            >
              {layer.number}
            </span>
            <h3 className="font-serif text-[#F5F3EF] leading-[1.15] mb-4" style={{ fontSize: "clamp(1.375rem, 2vw, 1.75rem)", fontWeight: 500 }}>
              {t(layer.titleKey)}
            </h3>
            <p className="font-sans" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,243,239,0.85)", fontWeight: 500 }}>
              {t(layer.bodyKey)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
