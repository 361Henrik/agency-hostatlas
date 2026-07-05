"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import type { Lang } from "@/lib/language-context"

export function LangSync() {
  const params = useSearchParams()
  const { setLang } = useLanguage()
  useEffect(() => {
    const l = params.get("lang") as Lang | null
    if (l === "en" || l === "ja" || l === "zh") setLang(l)
  }, [params, setLang])
  return null
}
