"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/lib/language-context"

// Nav labels map to section anchors by data-section id. "For Agencies" now scrolls to
// the Confidence Gap panel (position 2) — the buyer's problem recognition moment —
// rather than the Managed Service panel (position 10, formerly OperatorPanel's
// "agencies" anchor), per the re-sequenced 12-section arc.
const NAV_SECTION_IDS = ["confidence-gap", "routes", "why-hostatlas"]
const CTA_SECTION_ID = "contact"
// Sections rendered on the light --atlas-canvas (#F8F5EE) background, used to invert
// nav link color while scrolled past the top. Verified against each panel's own
// backgroundColor after the re-sequence (new 12-section order): confidence-gap (2),
// opportunity (3), routes (4), offline (7), language-layer (8), and the light half of
// the merged Managed Service panel (10, data-section="agencies") are all --atlas-canvas.
// Everything else (hero, meeting-point, photo-moment, guide-control, why-hostatlas,
// contact) is dark. Previously this list only had ["opportunity", "routes"], which
// under-covered confidence-gap/offline/language-layer even before this re-sequence —
// fixed here since the file was already being touched for the arc change.
const lightSections = ["confidence-gap", "opportunity", "routes", "offline", "language-layer", "agencies"]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
      const sections = document.querySelectorAll("[data-section]")
      let current = "hero"
      sections.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120) {
          current = el.getAttribute("data-section") ?? current
        }
      })
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const el = document.querySelector(`[data-section="${sectionId}"]`)
    if (!el) return
    const offset = 72
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: "smooth" })
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const onLight = lightSections.includes(activeSection) && !scrolled

  const navColor       = onLight ? "rgba(38, 38, 38, 0.8)"  : "rgba(255,255,255,1)"
  const navHoverColor  = onLight ? "rgba(38, 38, 38, 1)"     : "rgba(255,255,255,1)"
  const underlineColor = onLight ? "rgba(38, 38, 38, 0.5)"  : "rgba(201, 169, 98, 1)"
  const ctaColor       = onLight ? "rgba(38, 38, 38, 0.8)"  : "rgba(201, 169, 98, 1)"
  const ctaHoverColor  = onLight ? "rgba(38, 38, 38, 1)"    : "rgba(201, 169, 98, 1)"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-[400ms] ${
        scrolled
          ? "bg-[oklch(0.22_0.05_155/0.97)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center px-4 md:px-10 lg:px-14 h-[64px] md:h-[72px]">
        {/* Logo */}
        <button onClick={scrollToTop} className="shrink-0">
          <Image
            src="/host-atlas-logo.png"
            alt="The Host Atlas"
            width={270}
            height={108}
            className="h-[52px] md:h-[72px] lg:h-[90px] w-auto object-contain transition-opacity duration-300"
            style={{ filter: onLight ? "none" : "brightness(0) invert(1)", opacity: 1 }}
          />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 ml-8">
          {NAV_SECTION_IDS.map((sectionId, i) => {
            const label = t(["nav_agencies", "nav_routes", "nav_why"][i] as any)
            const isActive = activeSection === sectionId
            return (
              <button
                key={sectionId}
                onClick={() => scrollToSection(sectionId)}
                className="group relative text-[14px] uppercase font-medium transition-colors duration-200 py-1"
                style={{ letterSpacing: "0.06em", color: navColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = navHoverColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = navColor)}
              >
                {label}
                <span
                  className="absolute left-0 right-0 bottom-0 h-px transition-opacity duration-200"
                  style={{ backgroundColor: underlineColor, opacity: isActive ? 1 : 0 }}
                />
                {!isActive && (
                  <span
                    className="absolute left-0 right-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ backgroundColor: underlineColor }}
                  />
                )}
              </button>
            )
          })}

          {/* CTA */}
          <button
            onClick={() => scrollToSection(CTA_SECTION_ID)}
            className="group relative text-[14px] uppercase font-medium py-1 transition-colors duration-200"
            style={{ letterSpacing: "0.06em", color: ctaColor }}
            onMouseEnter={(e) => (e.currentTarget.style.color = ctaHoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = ctaColor)}
          >
            {t("nav_contact")}
            <span
              className="absolute left-0 right-0 bottom-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ backgroundColor: underlineColor }}
            />
            {activeSection === CTA_SECTION_ID && (
              <span
                className="absolute left-0 right-0 bottom-0 h-px"
                style={{ backgroundColor: underlineColor, opacity: 1 }}
              />
            )}
          </button>
        </div>

        {/* Mobile CTA — visible below md */}
        <button
          onClick={() => scrollToSection(CTA_SECTION_ID)}
          className="md:hidden ml-auto mr-3 font-sans font-medium uppercase px-4 py-1.5 text-[11px] tracking-[0.10em] transition-opacity duration-200 hover:opacity-80"
          style={{
            backgroundColor: "rgba(201,169,98,1)",
            color: "#1C2B1E",
          }}
        >
          {t("nav_contact")}
        </button>

        {/* Language toggle — far right */}
        <div className="md:ml-auto">
          <LanguageToggle onLight={onLight} />
        </div>
      </div>

      <div
        className={`h-px bg-[oklch(0.38_0.06_155)] transition-opacity duration-[400ms] ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </nav>
  )
}
