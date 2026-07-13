"use client"

import { useEffect } from "react"

export function SwRegister() {
  useEffect(() => {
    // Production only — the SW fights fast-refresh in dev. Scope is the
    // guest app subtree; the marketing page must never be served stale.
    if (process.env.NODE_ENV !== "production") return
    if (!("serviceWorker" in navigator)) return
    navigator.serviceWorker.register("/sw.js", { scope: "/explore" }).catch(() => {
      // Registration failure (old browser, storage denied) just means no
      // offline layer — the app itself is unaffected.
    })
  }, [])
  return null
}
