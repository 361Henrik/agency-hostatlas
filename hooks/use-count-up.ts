"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Animates an integer from 0 to `target` once, when the returned ref enters
 * the viewport. Fires a single time (IntersectionObserver unobserves after
 * the first intersection) and eases out over `duration` ms.
 *
 * Renders `target` immediately, with no animation, when
 * `prefers-reduced-motion: reduce` matches.
 */
export function useCountUp<T extends HTMLElement = HTMLSpanElement>(target: number, duration = 800) {
  const ref = useRef<T>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)

            const start = performance.now()
            // Ease-out cubic.
            const ease = (t: number) => 1 - Math.pow(1 - t, 3)

            const tick = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              setValue(Math.round(ease(progress) * target))
              if (progress < 1) requestAnimationFrame(tick)
            }

            requestAnimationFrame(tick)
          }
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, value }
}
