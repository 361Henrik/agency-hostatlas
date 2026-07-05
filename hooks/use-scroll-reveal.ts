"use client"

import { useEffect } from "react"

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    )

    const elements = document.querySelectorAll(".reveal, .reveal-fade, .reveal-scale")
    for (const el of elements) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])
}
