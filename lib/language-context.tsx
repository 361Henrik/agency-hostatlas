"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { translations, type TranslationKey } from "./translations"

export type Lang = "en" | "ja" | "zh"

const LANG_STORAGE_KEY = "hostatlas-lang"

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "ja" || value === "zh"
}

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  // Read persisted language after mount only — avoids SSR/CSR hydration mismatch.
  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY)
    if (isLang(stored)) setLangState(stored)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    window.localStorage.setItem(LANG_STORAGE_KEY, l)
  }

  const t = (key: TranslationKey): string => translations[lang][key] ?? key
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}
