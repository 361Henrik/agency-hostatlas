"use client"

import { useLanguage } from "@/lib/language-context"

const occasions = [
  {
    num: "01",
    when: "Before the event",
    heading: "Arrival evening. Jetlag walk. Cultural orientation.",
    body: "Senior guests often arrive a day early. They're curious, experienced travellers who want to understand where they are before meetings begin — but not as tourists. Host Atlas gives them a purposeful start.",
    examples: [
      "Guest arrives the evening before",
      "Short orientation walk near the hotel",
      "Cultural and business context before the first session",
    ],
  },
  {
    num: "02",
    when: "During the event",
    heading: "Conference ends at 16:00. Dinner is at 19:30.",
    body: "The most valuable unstructured time. Guests are cognitively full. A purposeful walk resets them — and returns them to the evening programme with something worth saying.",
    examples: [
      "Two-hour gap before the formal dinner",
      "Industry-themed route connecting city to conference themes",
      "Walk from venue to restaurant with narrative stops",
    ],
  },
  {
    num: "03",
    when: "After the event",
    heading: "Post-event extension. Morning before departure.",
    body: "Senior executives are twice as likely to extend business trips. Those extra days are currently unmanaged. Host Atlas extends your hospitality across the full stay — and wherever guests go next.",
    examples: [
      "One or two days remaining after the programme",
      "Morning route before the afternoon flight",
      "Onward journey — Oslo to Bergen, Stockholm to Copenhagen",
    ],
  },
  {
    num: "04",
    when: "Accompanying partners",
    heading: "Independent time. A different kind of guest.",
    body: "When the executive is in meetings, their partner has time alone in an unfamiliar city. Host Atlas gives them a thoughtful, host-branded way to experience it — without the event team needing to run a separate programme.",
    examples: [
      "Partner has unstructured time during sessions",
      "Same curated routes, independently accessed",
      "No additional logistics for the event team",
    ],
  },
]

export function OpportunityTextPanel() {
  const { t } = useLanguage()

  return (
    <section data-section="opportunity" className="w-full panel-white py-28 md:py-36" style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}>
      {/* Editorial heading */}
      <div className="flex items-center justify-center px-6 md:px-16 pb-16 lg:pb-20">
        <div className="w-full max-w-5xl text-center">
          <p className="font-sans font-medium uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(196,154,92,1)", fontSize: "0.75rem" }}>
            {t("opportunity_eyebrow")}
          </p>
          <h2 className="font-serif text-balance mb-8 leading-[1.06]" style={{ color: "#1C2B1E", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            {t("opportunity_heading_line1")}
            <br />
            {t("opportunity_heading_line2")}
          </h2>
          <p className="font-sans text-pretty mx-auto max-w-[52ch]" style={{ color: "rgba(28,43,30,0.75)", fontSize: "1.1875rem", lineHeight: 1.6 }}>
            {t("opportunity_body")}
          </p>
        </div>
      </div>

      {/* 4 occasion cards — 2x2 grid */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-accent/10 border border-accent/10">
          {occasions.map((occ) => (
            <div key={occ.num} className="p-8 lg:p-10 bg-card flex flex-col gap-4">
              <div className="flex items-baseline gap-4">
                <span
                  className="font-serif font-medium shrink-0"
                  style={{ fontSize: "2.5rem", lineHeight: 1, letterSpacing: "-0.02em", color: "#C9A962" }}
                >
                  {occ.num}
                </span>
                <span
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", color: "rgba(196,154,92,0.8)" }}
                >
                  {occ.when}
                </span>
              </div>

              <h3 className="font-serif text-foreground leading-[1.2]" style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                {occ.heading}
              </h3>

              <p className="font-sans" style={{ fontSize: "clamp(1rem, 2.5vw, 1.0625rem)", lineHeight: 1.65, color: "rgba(28,43,30,0.75)" }}>
                {occ.body}
              </p>

              <ul className="space-y-1.5 mt-1">
                {occ.examples.map((ex) => (
                  <li key={ex} className="flex gap-2.5">
                    <span className="shrink-0 mt-[0.35em]" style={{ color: "rgba(196,154,92,0.6)", fontSize: "0.5rem" }}>◆</span>
                    <span className="font-sans" style={{ fontSize: "0.9375rem", lineHeight: 1.55, color: "rgba(28,43,30,0.6)" }}>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Callout note */}
        <div
          className="mt-px px-8 py-6 flex gap-4 items-start"
          style={{ backgroundColor: "rgba(28,43,30,0.04)", border: "1px solid rgba(196,154,92,0.15)", borderTop: "none" }}
        >
          <span className="shrink-0 mt-0.5" style={{ color: "#C9A962", fontSize: "1rem" }}>→</span>
          <p className="font-sans" style={{ fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)", lineHeight: 1.65, color: "rgba(28,43,30,0.72)" }}>
            <span className="font-medium" style={{ color: "rgba(28,43,30,0.9)" }}>Accompanying partners and guests with independent time.</span>{" "}
            Give partners a purposeful way to experience the city while the formal programme continues. Same guide. No additional logistics.
          </p>
        </div>
      </div>
    </section>
  )
}
