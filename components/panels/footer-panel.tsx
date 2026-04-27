"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function FooterPanel() {
  const { t } = useLanguage()

  return (
    <footer
      data-section="footer"
      className="w-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-16 py-24 md:py-32"
      style={{ backgroundColor: "#152A1E", color: "#F5F0E8" }}
    >
      <div className="text-center max-w-[42ch] mx-auto mb-14">
        <div className="flex items-center justify-center gap-5 mb-10">
          <div className="flex-1 h-px max-w-[80px]" style={{ backgroundColor: "rgba(201,169,98,0.25)" }} />
          <div className="h-1.5 w-1.5 rotate-45 shrink-0" style={{ border: "1px solid rgba(201,169,98,0.4)" }} />
          <div className="flex-1 h-px max-w-[80px]" style={{ backgroundColor: "rgba(201,169,98,0.25)" }} />
        </div>
        <h2
          className="font-serif text-balance leading-[1.06] mb-8"
          style={{ color: "#C9A962", fontSize: "clamp(1.875rem, 4vw, 3.25rem)", fontWeight: 500 }}
        >
          {t("footer_heading")}
        </h2>
        <p className="font-sans text-balance" style={{ fontSize: "1.125rem", lineHeight: 1.65, color: "rgba(245,240,232,0.55)" }}>
          {t("footer_body")}
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <div className="border-t pt-10 flex flex-col items-center gap-5" style={{ borderColor: "rgba(201,169,98,0.15)" }}>
          <Image
            src="/host-atlas-logo.png"
            alt="The Host Atlas"
            width={360}
            height={144}
            className="h-[120px] md:h-[156px] w-auto object-contain brightness-0 invert opacity-60"
          />

          <a
            href="mailto:connect@hostatlas.guide"
            className="group font-serif italic transition-opacity duration-300 hover:opacity-70"
            style={{ fontSize: "clamp(1.125rem, 2vw, 1.4375rem)", color: "#C9A962", fontWeight: 500 }}
          >
            connect@hostatlas.guide
          </a>

          <span className="font-sans" style={{ fontSize: "0.8125rem", color: "rgba(245,240,232,0.35)", letterSpacing: "0.08em" }}>
            © 2026 The Host Atlas
          </span>
        </div>
      </div>
    </footer>
  )
}
