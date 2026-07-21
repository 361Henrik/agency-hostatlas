"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLanguage, type Lang } from "@/lib/language-context"
import { localizePath, stripLocale } from "@/lib/locale"
import { trackEvent } from "@/lib/track"

const CARDS: { code: string; name: string; sub: string; sample: string; lang: Lang }[] = [
  {
    code: "EN",
    name: "English",
    sub: "International baseline",
    sample: "The Lofoten Wall rises almost vertically from the sea — a 100km ridge of jagged peaks that has guided fishermen home for a thousand years.",
    lang: "en",
  },
  {
    code: "日本語",
    name: "Japanese",
    sub: "文化的トーン適応",
    sample: "千年の間、漁師たちを導いてきたロフォーテン・ウォール。海からほぼ垂直に立ち上がる100kmの尾根は、訪れる者すべてに圧倒的な存在感を示します。",
    lang: "ja",
  },
  {
    code: "中文",
    name: "简体中文",
    sub: "文化语气适配",
    sample: "罗弗敦墙几乎从海面垂直升起——一条100公里长的锯齿状山脊，千年来一直引领渔民归家。它的壮观令每一位到访者叹为观止。",
    lang: "zh",
  },
]

export function LanguagePanel() {
  const { t, lang } = useLanguage()
  const router = useRouter()
  const pathname = usePathname()
  // Language is a URL now — switching navigates to the same page under the
  // selected locale prefix.
  const setLang = (next: Lang) => {
    if (next === lang) return
    const { path } = stripLocale(pathname)
    trackEvent("language_switch", { from: lang, to: next })
    router.push(localizePath(path, next))
  }

  return (
    <section
      data-section="language-layer"
      className="w-full py-28 md:py-36"
      style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
    >
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p
            className="font-sans font-medium uppercase mb-6"
            style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: "rgba(28,43,30,0.5)" }}
          >
            {t("language_eyebrow")}
          </p>
          <h2
            className="font-serif text-balance leading-[1.06] mb-6 max-w-[22ch]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500, color: "#1C2B1E" }}
          >
            {t("language_heading")}
          </h2>
          <p
            className="font-sans text-pretty max-w-[56ch]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.7, color: "rgba(28,43,30,0.72)" }}
          >
            {t("language_body")}
          </p>
        </div>

        {/* Language cards — 150ms stagger, click switches site language */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 reveal-stagger">
          {CARDS.map(({ code, name, sub, sample, lang: cardLang }, i) => {
            const active = lang === cardLang
            return (
              <button
                key={code}
                type="button"
                role="button"
                tabIndex={0}
                aria-pressed={active}
                onClick={() => setLang(cardLang)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setLang(cardLang)
                  }
                }}
                className="flex flex-col p-7 text-left reveal cursor-pointer"
                style={{
                  backgroundColor: active ? "#1f4a3a" : "transparent",
                  border: `1px solid ${active ? "rgba(201,169,98,0.3)" : "rgba(28,43,30,0.12)"}`,
                  animationDelay: `${i * 150}ms`,
                  transition: "background-color 400ms ease-out, border-color 400ms ease-out",
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span
                      className="font-serif font-medium block mb-1"
                      style={{ fontSize: "1.5rem", color: active ? "#C9A962" : "#1C2B1E" }}
                    >
                      {code}
                    </span>
                    <span
                      className="font-sans"
                      style={{ fontSize: "0.8125rem", color: active ? "rgba(245,240,232,0.55)" : "rgba(28,43,30,0.5)" }}
                    >
                      {sub}
                    </span>
                  </div>
                  <span
                    className="font-sans font-medium uppercase"
                    style={{ fontSize: "0.6875rem", letterSpacing: "0.12em", color: active ? "rgba(201,169,98,0.6)" : "rgba(28,43,30,0.35)" }}
                  >
                    {name}
                  </span>
                </div>

                <blockquote
                  className="font-sans italic flex-1"
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                    color: active ? "rgba(245,240,232,0.75)" : "rgba(28,43,30,0.65)",
                    borderLeft: `2px solid ${active ? "rgba(201,169,98,0.4)" : "rgba(28,43,30,0.15)"}`,
                    paddingLeft: "14px",
                    fontStyle: "normal",
                  }}
                >
                  {sample}
                </blockquote>
              </button>
            )
          })}
        </div>

        {/* Feature chips */}
        <div className="flex flex-col sm:flex-row gap-4">
          {[t("language_feature_1"), t("language_feature_2"), t("language_feature_3")].map((feat, i) => (
            <div
              key={i}
              className="flex items-start gap-3 flex-1 p-5"
              style={{ backgroundColor: "rgba(28,43,30,0.04)", border: "1px solid rgba(28,43,30,0.08)" }}
            >
              <span
                className="font-serif font-medium shrink-0"
                style={{ fontSize: "1.25rem", color: "rgba(28,43,30,0.2)", lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                className="font-sans"
                style={{ fontSize: "0.9375rem", lineHeight: 1.5, color: "rgba(28,43,30,0.7)" }}
              >
                {feat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
