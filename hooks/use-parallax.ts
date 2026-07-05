"use client"

import { useEffect, useRef } from "react"

/**
 * Subtle vertical scroll parallax.
 *
 * Returns a ref to attach to the element you want to translate. The element is
 * moved downward at `rate`× the scroll position (default 0.15×), so it drifts
 * slower than the page scroll. Uses only `transform: translate3d` (GPU-composited,
 * no layout thrash) and reads `scrollY` inside a requestAnimationFrame batch.
 *
 * No-ops entirely when `prefers-reduced-motion: reduce` matches — the element is
 * left with whatever transform its CSS gives it (e.g. Ken Burns is disabled by
 * the global reduced-motion block, so the image stays static).
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(rate = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let latestScrollY = window.scrollY
    let ticking = false

    const apply = () => {
      ticking = false
      // Translate the wrapper; the Ken Burns scale lives on the inner <img>,
      // so the two transforms compose without fighting each other.
      el.style.transform = `translate3d(0, ${latestScrollY * rate}px, 0)`
    }

    const onScroll = () => {
      // Read scroll position only here; write is deferred to the rAF callback.
      latestScrollY = window.scrollY
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(apply)
      }
    }

    // Set the initial position (handles a non-zero scroll on mount / refresh).
    apply()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [rate])

  return ref
}
