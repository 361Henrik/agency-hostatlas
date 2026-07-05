"use client"

import { useLanguage, type Lang } from "@/lib/language-context"

const LANG_CYCLE: Lang[] = ["en", "ja", "zh"]
const LANG_LABELS: Record<Lang, string> = { en: "EN", ja: "日本語", zh: "中文" }
const LANG_NEXT_LABEL: Record<Lang, string> = { en: "日本語", ja: "中文", zh: "EN" }

interface LanguageToggleProps {
  className?: string
  onLight?: boolean
}

export function LanguageToggle({ className = "", onLight = false }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage()

  const next = LANG_CYCLE[(LANG_CYCLE.indexOf(lang) + 1) % LANG_CYCLE.length]

  return (
    <button
      onClick={() => setLang(next)}
      className={`font-sans font-medium uppercase transition-opacity duration-200 hover:opacity-70 ${className}`}
      style={{
        fontSize: "0.8125rem",
        letterSpacing: "0.06em",
        color: onLight ? "rgba(28,43,30,0.7)" : "rgba(201,169,98,0.9)",
      }}
      aria-label={`Switch to ${LANG_NEXT_LABEL[lang]}`}
    >
      {LANG_LABELS[lang]}
    </button>
  )
}
