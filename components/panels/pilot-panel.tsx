"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, BarChart3, ShieldCheck, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Lang } from "@/lib/language-context"

type L = Record<Lang, string>

const includes: Record<Lang, string[]> = {
  en: [
    "Route Research & Content Creation",
    "Cultural & Photography Lens Curation",
    "Multilingual Guest Platform (EN / 日本語 / 中文)",
    "QR Deployment & Offline Caching",
    "Post-Departure Engagement Report",
  ],
  ja: [
    "ルート調査とコンテンツ制作",
    "文化・写真レンズのキュレーション",
    "多言語ゲストプラットフォーム (EN / 日本語 / 中文)",
    "QRデプロイとオフラインキャッシング",
    "出発後エンゲージメントレポート",
  ],
  zh: [
    "路线研究与内容创建",
    "文化与摄影视角策划",
    "多语言客人平台 (EN / 日本語 / 中文)",
    "二维码部署与离线缓存",
    "出发后参与度报告",
  ],
}

const projectDetails: Array<{ icon: React.ElementType; label: L; detail: L }> = [
  {
    icon: ShieldCheck,
    label: {
      en: "Defined scope",
      ja: "明確に定義されたスコープ",
      zh: "明确定义的范围",
    },
    detail: {
      en: "One destination, one itinerary, full support.",
      ja: "一つの目的地、一つの旅程、完全サポート。",
      zh: "一个目的地，一份行程，全力支持。",
    },
  },
  {
    icon: Clock,
    label: {
      en: "48-hour setup",
      ja: "48時間セットアップ",
      zh: "48小时部署",
    },
    detail: {
      en: "From itinerary sign-off to live guest experience.",
      ja: "旅程承認からライブゲスト体験まで。",
      zh: "从行程确认到实时客人体验。",
    },
  },
  {
    icon: BarChart3,
    label: {
      en: "Post-departure insight",
      ja: "出発後インサイト",
      zh: "出发后洞察",
    },
    detail: {
      en: "Engagement data delivered after the departure.",
      ja: "出発後にエンゲージメントデータを提供。",
      zh: "出发后提供参与度数据。",
    },
  },
]

export function PilotPanel() {
  const { t, lang } = useLanguage()

  const explorePath = lang !== "en" ? `/explore?lang=${lang}` : "/explore"

  return (
    <section
      data-section="contact"
      className="w-full flex flex-col items-center relative"
      style={{ backgroundColor: "#1F3528", color: "#F5F0E8" }}
    >
      {/* TODO(phase-8): replace with S9 blue-hour harbour — plan §3.
          Backdrop skipped for now: public/fjord-with-atlas.jpg has map-pin UI
          graphics (POI labels/markers) baked into the photo itself — it reads
          as a product mockup, not a calm harbour photograph, so it fails the
          "near-abstract at low opacity" bar. Source S9 in Phase 8 instead. */}
      <div className="w-full flex flex-col items-center px-6 md:px-10 lg:px-20 pt-28 md:pt-40 pb-20 md:pb-28 relative z-10">
        {/* Section label */}
        <p className="font-sans font-medium uppercase tracking-[0.25em] text-accent mb-10" style={{ fontSize: "0.75rem" }}>
          {t("pilot_eyebrow")}
        </p>

        {/* Main heading */}
        <div className="text-center max-w-[52ch] mx-auto mb-16">
          <h2
            className="font-serif text-balance leading-[1.06] mb-8"
            style={{ color: "#C9A962", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 500 }}
          >
            {t("pilot_heading")}
          </h2>
          <p className="font-sans text-pretty" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.82)", fontWeight: 500 }}>
            {t("pilot_body")}
          </p>
          <p
            className="font-sans text-pretty mt-6"
            style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "rgba(201,169,98,0.75)", fontStyle: "italic" }}
          >
            {t("pilot_credibility_line")}
          </p>
        </div>

        {/* Two-column details */}
        <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left — includes (mobile: collapses to accordion, renders after contact box) */}
          <div className="order-2 md:order-1">
            {/* Mobile accordion */}
            <details className="md:hidden group" style={{ borderTop: "1px solid var(--atlas-border)" }}>
              <summary
                className="flex items-center justify-between py-5 cursor-pointer list-none font-sans font-medium uppercase tracking-[0.2em] text-accent"
                style={{ fontSize: "0.75rem" }}
              >
                {t("pilot_includes_label")}
                <svg
                  className="h-3 w-3 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 4L6 8L10 4" stroke="#C9A962" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="pb-8" style={{ borderBottom: "1px solid var(--atlas-border)" }}>
                <div className="grid grid-cols-1 gap-y-3 mb-8">
                  {includes[lang].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={2.5} />
                      <span className="font-sans" style={{ fontSize: "1.0625rem", color: "rgba(245,240,232,0.8)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {projectDetails.map((d) => (
                    <div key={d.label.en} className="flex gap-4 items-start">
                      <d.icon className="h-4 w-4 text-accent shrink-0 mt-1" />
                      <div>
                        <p className="font-sans font-medium" style={{ fontSize: "1.0625rem", color: "rgba(245,240,232,0.9)" }}>{d.label[lang]}</p>
                        <p className="font-sans" style={{ fontSize: "1rem", color: "rgba(245,240,232,0.5)" }}>{d.detail[lang]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </details>

            {/* Desktop — unchanged, always expanded */}
            <div className="hidden md:block">
              <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
                {t("pilot_includes_label")}
              </p>
              <div className="grid grid-cols-1 gap-y-3 mb-8">
                {includes[lang].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={2.5} />
                    <span className="font-sans" style={{ fontSize: "1.0625rem", color: "rgba(245,240,232,0.8)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {projectDetails.map((d) => (
                  <div key={d.label.en} className="flex gap-4 items-start">
                    <d.icon className="h-4 w-4 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-sans font-medium" style={{ fontSize: "1.0625rem", color: "rgba(245,240,232,0.9)" }}>{d.label[lang]}</p>
                      <p className="font-sans" style={{ fontSize: "1rem", color: "rgba(245,240,232,0.5)" }}>{d.detail[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — working with us + contact (mobile: renders first) */}
          <div className="flex flex-col justify-between gap-10 order-1 md:order-2">
            <div>
              <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
                {t("pilot_working_label")}
              </p>
              <p className="font-sans text-pretty mb-5" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.82)", fontWeight: 500 }}>
                {t("pilot_working_body")}
              </p>
            </div>

            {/* Contact block — reveal-scale, the ask stays still */}
            <div
              className="p-7 reveal-scale"
              style={{ border: "1px solid rgba(201,169,98,0.35)", backgroundColor: "rgba(255,255,255,0.04)" }}
            >
              <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-4" style={{ fontSize: "0.75rem" }}>
                {t("pilot_contact_label")}
              </p>
              <p className="font-sans mb-5" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.75)" }}>
                {t("pilot_contact_body")}
              </p>
              <a
                href="mailto:connect@hostatlas.guide?subject=Agency%20Enquiry%20%E2%80%94%20HostAtlas"
                className="inline-flex items-center justify-center w-full font-sans font-medium uppercase tracking-[0.12em] transition-all duration-300"
                style={{
                  fontSize: "0.8125rem",
                  color: "#1F3528",
                  backgroundColor: "#C9A962",
                  padding: "1rem 2rem",
                  letterSpacing: "0.12em",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#b8944f" }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C9A962" }}
              >
                {t("cta_request_conversation")}
              </a>
              <p
                className="font-sans mt-4 text-center"
                style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.4)" }}
              >
                {t("cta_email_prefix")}{" "}
                <a
                  href="mailto:connect@hostatlas.guide"
                  className="transition-opacity hover:opacity-75"
                  style={{ color: "rgba(201,169,98,0.7)" }}
                >
                  connect@hostatlas.guide
                </a>
              </p>
              <Link
                href={explorePath}
                className="inline-block mt-5 font-sans font-medium uppercase transition-opacity duration-200 hover:opacity-70 w-full text-center"
                style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "rgba(201,169,98,0.6)" }}
              >
                {t("cta_lofoten_experience")}
              </Link>
            </div>
          </div>
        </div>

        {/* Closing coda — folded in from FooterPanel */}
        <div className="text-center max-w-[42ch] mx-auto mt-4">
          <div className="flex items-center justify-center gap-5 mb-10">
            <div className="flex-1 h-px max-w-[80px]" style={{ backgroundColor: "rgba(201,169,98,0.25)" }} />
            <div className="h-1.5 w-1.5 rotate-45 shrink-0" style={{ border: "1px solid rgba(201,169,98,0.4)" }} />
            <div className="flex-1 h-px max-w-[80px]" style={{ backgroundColor: "rgba(201,169,98,0.25)" }} />
          </div>
          <p
            className="font-serif italic text-balance leading-[1.3]"
            style={{ color: "#C9A962", fontSize: "clamp(1.375rem, 3vw, 2rem)", fontWeight: 500 }}
          >
            {t("footer_heading")}
          </p>
        </div>
      </div>

      {/* Legal strip — folded in from FooterPanel, deepened bottom band */}
      <div
        className="w-full flex flex-col items-center px-6 md:px-10 lg:px-16 py-16 md:py-20"
        style={{ backgroundColor: "#152A1E" }}
      >
        <div className="w-full max-w-2xl mx-auto">
          <div className="border-t pt-10 flex flex-col items-center gap-5" style={{ borderColor: "rgba(201,169,98,0.15)" }}>
            <Image
              src="/host-atlas-logo.png"
              alt="The Host Atlas"
              width={360}
              height={144}
              className="h-[80px] md:h-[100px] w-auto object-contain brightness-0 invert opacity-60"
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
      </div>
    </section>
  )
}
