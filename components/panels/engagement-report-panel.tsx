"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { lofotenRoutes } from "@/lib/lofoten-data"

// Palette — ATLASdesign only (see CLAUDE.md).
const CANVAS = "#F8F5EE"
const CARD = "#FCFBF7"
const CHARCOAL = "#1a1f1a"
const MUTED = "#6e6a5e"
const GREEN = "#1f4a3a"
const BRONZE = "#c9a962"
const BORDER = "#ccc4b8"
const TRACK = "#e8e2d9"

// Presentational mock data. Numbers are illustrative (see sample caption).
// Route engagement = share of guests who walked each route. The final route is
// the weather-backup — low by design, annotated as such, not treated as a miss.
const routeEngagement = [86, 71, 64, 38, 12]

// Language split of guest sessions — a part-to-whole segmented bar. JA is 0 for
// this Shanghai departure. Segments carry direct labels + a 2px surface gap so
// identity never rests on colour alone (dataviz: secondary encoding).
const languageSplit = [
  { code: "中文", value: 88, color: GREEN },
  { code: "EN", value: 12, color: BRONZE },
  { code: "日本語", value: 0, color: MUTED },
]

export function EngagementReportPanel() {
  const { t, lang } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  // Drives the one-time bar-width draw once the panel enters view.
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDrawn(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setDrawn(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const meta = [
    t("engagement_meta_guests"),
    t("engagement_meta_departure"),
    t("engagement_meta_windows"),
    t("engagement_meta_destination"),
  ]

  const statTiles = [
    { value: t("engagement_stat1_value"), label: t("engagement_stat1_label") },
    { value: t("engagement_stat2_value"), label: t("engagement_stat2_label") },
    { value: t("engagement_stat3_value"), label: t("engagement_stat3_label") },
  ]

  return (
    <section
      ref={sectionRef}
      data-section="engagement-report"
      className="w-full flex items-center justify-center px-6 md:px-12 lg:px-20 py-28 md:py-36"
      style={{ backgroundColor: CANVAS, color: CHARCOAL }}
    >
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-14 reveal-stagger">
          <p
            className="reveal font-sans font-medium uppercase mb-6"
            style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: GREEN }}
          >
            {t("engagement_eyebrow")}
          </p>
          <h2
            className="reveal font-serif text-balance mb-6 leading-[1.06]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: CHARCOAL }}
          >
            {t("engagement_heading")}
          </h2>
          <p
            className="reveal font-sans text-pretty mx-auto max-w-[54ch]"
            style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: MUTED, fontWeight: 500 }}
          >
            {t("engagement_body")}
          </p>
        </div>

        {/* Report card */}
        <div
          className="reveal-scale"
          style={{ backgroundColor: CARD, border: `1px solid ${BORDER}`, borderRadius: "3px" }}
        >
          {/* Card header — sample caption + group meta */}
          <div
            className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-6 md:px-10 py-6"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <span
              className="font-sans font-medium uppercase self-start"
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.16em",
                color: BRONZE,
                border: `1px solid ${BRONZE}`,
                borderRadius: "999px",
                padding: "5px 12px",
              }}
            >
              {t("engagement_sample_caption")}
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {meta.map((m, i) => (
                <span key={m} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden="true" style={{ color: BORDER }}>
                      ·
                    </span>
                  )}
                  <span
                    className="font-sans font-medium"
                    style={{ fontSize: "0.9375rem", color: CHARCOAL }}
                  >
                    {m}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="px-6 md:px-10 py-8 md:py-10">
            {/* Route engagement — horizontal bars, single sequential hue.
                One series, so no legend: the title names it. Values direct-labelled. */}
            <p
              className="font-sans font-medium uppercase mb-6"
              style={{ fontSize: "0.75rem", letterSpacing: "0.16em", color: MUTED }}
            >
              {t("engagement_routes_title")}
            </p>
            <ul className="space-y-4">
              {lofotenRoutes.map((route, i) => {
                const value = routeEngagement[i] ?? 0
                const isBackup = i === lofotenRoutes.length - 1
                return (
                  <li key={route.id}>
                    <div className="flex items-baseline justify-between gap-4 mb-1.5">
                      <span
                        className="font-sans"
                        style={{ fontSize: "0.9375rem", color: CHARCOAL, fontWeight: 500 }}
                      >
                        {route.title[lang]}
                      </span>
                      <span
                        className="font-sans tabular-nums shrink-0"
                        style={{ fontSize: "0.9375rem", color: GREEN, fontWeight: 600 }}
                      >
                        {value}%
                      </span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "10px",
                        backgroundColor: TRACK,
                        borderRadius: "5px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: drawn ? `${value}%` : "0%",
                          height: "100%",
                          backgroundColor: isBackup ? MUTED : GREEN,
                          borderRadius: "5px",
                          transition: `width 900ms cubic-bezier(0.16, 1, 0.3, 1) ${120 + i * 110}ms`,
                        }}
                        aria-hidden="true"
                      />
                    </div>
                    {isBackup && (
                      <p
                        className="font-sans mt-1.5"
                        style={{ fontSize: "0.8125rem", color: MUTED, fontStyle: "italic" }}
                      >
                        {t("engagement_backup_note")}
                      </p>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Stat tiles — a KPI row of headline figures + a segmented
                language-split tile (part-to-whole, direct-labelled). */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-10"
              style={{ backgroundColor: BORDER, border: `1px solid ${BORDER}`, borderRadius: "2px", overflow: "hidden" }}
            >
              {statTiles.map((tile) => (
                <div key={tile.label} className="flex flex-col gap-2 p-5" style={{ backgroundColor: CARD }}>
                  <span
                    className="font-serif tabular-nums"
                    style={{ fontSize: "2.25rem", lineHeight: 1, fontWeight: 500, color: GREEN }}
                  >
                    {tile.value}
                  </span>
                  <span className="font-sans" style={{ fontSize: "0.875rem", lineHeight: 1.45, color: MUTED }}>
                    {tile.label}
                  </span>
                </div>
              ))}

              {/* Language split tile */}
              <div className="flex flex-col gap-2 p-5" style={{ backgroundColor: CARD }}>
                <div
                  className="flex w-full mt-1"
                  style={{ height: "12px", borderRadius: "3px", overflow: "hidden", gap: "2px" }}
                  aria-hidden="true"
                >
                  {languageSplit
                    .filter((s) => s.value > 0)
                    .map((s) => (
                      <div
                        key={s.code}
                        style={{
                          width: drawn ? `${s.value}%` : "0%",
                          backgroundColor: s.color,
                          transition: "width 900ms cubic-bezier(0.16, 1, 0.3, 1) 500ms",
                        }}
                      />
                    ))}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {languageSplit.map((s) => (
                    <span key={s.code} className="flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        style={{ width: "8px", height: "8px", borderRadius: "2px", backgroundColor: s.color }}
                      />
                      <span
                        className="font-sans tabular-nums"
                        style={{ fontSize: "0.8125rem", color: CHARCOAL, fontWeight: 500 }}
                      >
                        {s.code} {s.value}%
                      </span>
                    </span>
                  ))}
                </div>
                <span className="font-sans" style={{ fontSize: "0.875rem", lineHeight: 1.45, color: MUTED }}>
                  {t("engagement_stat4_label")}
                </span>
              </div>
            </div>

            {/* Photo-moment highlight — most-engaged stop */}
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-10 p-5"
              style={{ backgroundColor: "rgba(31,74,58,0.05)", border: `1px solid ${BORDER}`, borderRadius: "2px" }}
            >
              <span
                className="font-sans font-medium uppercase shrink-0"
                style={{ fontSize: "0.6875rem", letterSpacing: "0.16em", color: BRONZE }}
              >
                {t("engagement_photo_label")}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-serif" style={{ fontSize: "1.25rem", fontWeight: 500, color: CHARCOAL }}>
                  {t("engagement_photo_name")}
                </span>
                <span className="font-sans" style={{ fontSize: "0.9375rem", color: MUTED }}>
                  {t("engagement_photo_detail")}
                </span>
              </div>
            </div>

            {/* Operational recommendation — the intelligence moment */}
            <div className="mt-8 pl-5" style={{ borderLeft: `2px solid ${BRONZE}` }}>
              <p
                className="font-sans font-medium uppercase mb-2"
                style={{ fontSize: "0.6875rem", letterSpacing: "0.16em", color: MUTED }}
              >
                {t("engagement_reco_label")}
              </p>
              <p
                className="font-serif italic text-pretty"
                style={{ fontSize: "clamp(1.125rem, 2.2vw, 1.4375rem)", lineHeight: 1.4, color: GREEN, fontWeight: 500 }}
              >
                {t("engagement_reco_body")}
              </p>
            </div>
          </div>
        </div>

        {/* Framing line — ties to the pilot "Post-Departure Engagement Report" include */}
        <p
          className="font-sans text-center text-pretty mx-auto max-w-[46ch] mt-10"
          style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: CHARCOAL, fontWeight: 500 }}
        >
          {t("engagement_framing")}
        </p>
      </div>
    </section>
  )
}
