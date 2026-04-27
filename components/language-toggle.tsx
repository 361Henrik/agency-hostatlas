"use client"

import { useLanguage } from "@/lib/language-context"

interface LanguageToggleProps {
  className?: string
  onLight?: boolean
}

export function LanguageToggle({ className = "", onLight = false }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage()

  return (
    <button
      onClick={() => setLang(lang === "en" ? "no" : "en")}
      className={`font-sans font-medium uppercase transition-opacity duration-200 hover:opacity-70 ${className}`}
      style={{
        fontSize: "0.8125rem",
        letterSpacing: "0.12em",
        color: onLight ? "rgba(28,43,30,0.7)" : "rgba(201,169,98,0.9)",
      }}
      aria-label={lang === "en" ? "Switch to Norwegian" : "Switch to English"}
    >
      {lang === "en" ? "NO" : "EN"}
    </button>
  )
}
