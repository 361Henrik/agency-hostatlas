"use client"

import { useEffect, useState } from "react"

export type CountdownState = "normal" | "warning" | "critical"

const START_KEY_PREFIX = "hostatlas-route-start:"
// Demo departure = route start + route duration + this buffer. Real deployments
// take the group's actual departure time from the tour itinerary.
const BUFFER_MINUTES = 15

const WARNING_MINUTES = 15
const CRITICAL_MINUTES = 5

/** Stamp (or restart) the walk's start time. Called from "Start Walking". */
export function stampRouteStart(routeId: string) {
  try {
    window.sessionStorage.setItem(START_KEY_PREFIX + routeId, String(Date.now()))
  } catch {
    // sessionStorage unavailable (private mode) — hook falls back to mount time
  }
}

function parseDurationMinutes(duration: string): number {
  const m = duration.match(/(\d+)/)
  return m ? parseInt(m[1], 10) : 60
}

function formatRemaining(ms: number): string {
  const totalSeconds = Math.round(ms / 1000)
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  if (h > 0) return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
  return `${m}:${String(s).padStart(2, "0")}`
}

/**
 * Live departure countdown for a route walk.
 *
 * Departure time resolution order:
 * 1. `?demoMinutes=N` query param — pitch-demo override, counts down from N minutes
 *    (read via window.location to avoid a useSearchParams Suspense requirement)
 * 2. sessionStorage stamp written by "Start Walking" on the route detail page
 * 3. a fresh stamp at mount — covers direct links into /navigate
 */
export function useDepartureCountdown(routeId: string, duration: string) {
  const [departureAt, setDepartureAt] = useState<number | null>(null)
  const [remainingMs, setRemainingMs] = useState<number | null>(null)

  useEffect(() => {
    const demo = Number(new URLSearchParams(window.location.search).get("demoMinutes"))
    if (Number.isFinite(demo) && demo > 0) {
      setDepartureAt(Date.now() + demo * 60_000)
      return
    }
    const key = START_KEY_PREFIX + routeId
    let start = 0
    try {
      start = Number(window.sessionStorage.getItem(key))
    } catch {
      // fall through to a fresh stamp
    }
    if (!Number.isFinite(start) || start <= 0) {
      start = Date.now()
      try {
        window.sessionStorage.setItem(key, String(start))
      } catch {
        // non-persistent is fine — countdown still runs for this view
      }
    }
    setDepartureAt(start + (parseDurationMinutes(duration) + BUFFER_MINUTES) * 60_000)
  }, [routeId, duration])

  useEffect(() => {
    if (departureAt === null) return
    const tick = () => setRemainingMs(Math.max(0, departureAt - Date.now()))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [departureAt])

  const minutes = remainingMs === null ? null : remainingMs / 60_000
  const state: CountdownState =
    minutes === null || minutes > WARNING_MINUTES
      ? "normal"
      : minutes <= CRITICAL_MINUTES
        ? "critical"
        : "warning"

  return {
    /** null until the departure time has resolved on the client */
    remainingMs,
    state,
    label: remainingMs === null ? "" : formatRemaining(remainingMs),
  }
}
