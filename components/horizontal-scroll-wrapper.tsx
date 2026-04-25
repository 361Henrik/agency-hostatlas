"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

/* Each panel is 92vw wide with a 1.5vw gap — totaling 93.5vw per step.
   This leaves ~8% of the next panel visible as a peek. */
const PANEL_VW = 92
const GAP_VW = 1.5
const STEP_VW = PANEL_VW + GAP_VW

interface HorizontalScrollWrapperProps {
  children: ReactNode
  panelCount: number
}

export function HorizontalScrollWrapper({ children, panelCount }: HorizontalScrollWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const getStepPx = () => (window.innerWidth * STEP_VW) / 100

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      container.scrollLeft += (e.deltaY + e.deltaX) * 2.5
    }

    const handleScroll = () => {
      const maxScroll = container.scrollWidth - container.clientWidth
      if (maxScroll <= 0) return
      const pct = container.scrollLeft / maxScroll
      setProgress(pct)
      const stepPx = getStepPx()
      const idx = Math.round(container.scrollLeft / stepPx)
      setActiveIndex(Math.min(idx, panelCount - 1))
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    container.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("scroll", handleScroll)
    }
  }, [panelCount])

  // Keyboard navigation
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const stepPx = getStepPx()
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault()
        container.scrollBy({ left: stepPx, behavior: "smooth" })
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault()
        container.scrollBy({ left: -stepPx, behavior: "smooth" })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Touch support for mobile
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let touchStartX = 0
    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const deltaX = touchStartX - e.touches[0].clientX
      const deltaY = touchStartY - e.touches[0].clientY

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault()
      }
    }

    container.addEventListener("touchstart", handleTouchStart, { passive: true })
    container.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    <>
      {/* Slider container — capped at z-0, no transforms, overflow clipped */}
      <div
        className="relative h-screen w-screen"
        style={{ zIndex: 0, overflow: "clip" }}
      >
        <div
          ref={containerRef}
          data-horizontal-scroll
          className="flex h-full w-full overflow-x-auto overflow-y-hidden scroll-smooth items-stretch"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            gap: `${GAP_VW}vw`,
            paddingLeft: `${GAP_VW}vw`,
            paddingRight: `${GAP_VW}vw`,
          }}
        >
          {children}
        </div>
      </div>

      {/* Fixed UI — rendered OUTSIDE the slider container to avoid stacking issues */}
      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-border z-[90]">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Directional arrow — bottom-left (back) */}
      {activeIndex > 0 && (
        <button
          onClick={() => {
            const container = containerRef.current
            if (!container) return
            container.scrollBy({ left: -getStepPx(), behavior: "smooth" })
          }}
          className="fixed bottom-10 left-10 z-[90] group cursor-pointer"
          aria-label="Previous panel"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C49A5C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Directional arrow — bottom-right (next) */}
      {activeIndex < panelCount - 1 && (
        <button
          onClick={() => {
            const container = containerRef.current
            if (!container) return
            container.scrollBy({ left: getStepPx(), behavior: "smooth" })
          }}
          className="fixed bottom-10 right-10 z-[90] group cursor-pointer"
          aria-label="Next panel"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C49A5C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      )}
    </>
  )
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex-none h-screen overflow-y-auto rounded-sm ${className}`}
      style={{
        width: `${PANEL_VW}vw`,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {children}
    </div>
  )
}
