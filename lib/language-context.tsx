"use client"

import { createContext, useContext, type ReactNode } from "react"
import { translations, type TranslationKey } from "./translations"
import type { Lang } from "./locale"

export type { Lang }

interface LanguageContextValue {
  lang: Lang
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

// The URL is the single source of truth: lang arrives from the [lang] route
// param via the root layout. No state, no localStorage — SSR and hydration
// render identical output in the right language, and a locale navigation
// re-renders the persistent layout with the new param so every consumer
// updates without a remount.
export function LanguageProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = (key: TranslationKey): string => translations[lang][key] ?? key
  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider")
  return ctx
}
