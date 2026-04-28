"use client"

import { useLanguage } from "@/lib/language-context"
import type { Lang } from "@/lib/language-context"

type L = Record<Lang, string>

const occasions: Array<{ num: string; when: L; heading: L; body: L; examples: [L, L, L] }> = [
  {
    num: "01",
    when:    { en: "Before the event",       no: "Før arrangementet" },
    heading: { en: "Arrival evening. Jetlag walk. Cultural orientation.", no: "Ankomstkveld. Turen mot jetlag. Kulturell orientering." },
    body:    {
      en: "Senior guests often arrive a day early. They're curious, experienced travellers who want to understand where they are before meetings begin — but not as tourists. Host Atlas gives them a purposeful start.",
      no: "Seniorgjester ankommer ofte en dag tidlig. De er nysgjerrige, erfarne reisende som ønsker å forstå omgivelsene sine før møtene begynner — men ikke som turister. Host Atlas gir dem en formålsfull start.",
    },
    examples: [
      { en: "Guest arrives the evening before",                              no: "Gjesten ankommer kvelden før" },
      { en: "Short orientation walk near the hotel",                         no: "Kort orienteringstur nær hotellet" },
      { en: "Cultural and business context before the first session",        no: "Kulturell og forretningsmessig kontekst før første sesjon" },
    ],
  },
  {
    num: "02",
    when:    { en: "During the event",       no: "Under arrangementet" },
    heading: { en: "Conference ends at 16:00. Dinner is at 19:30.", no: "Konferansen slutter 16:00. Middag er klokken 19:30." },
    body:    {
      en: "The most valuable unstructured time. Guests are cognitively full. A purposeful walk resets them — and returns them to the evening programme with something worth saying.",
      no: "Den mest verdifulle ustrukturerte tiden. Gjestene er kognitivt fulle. En formålsfull gåtur nullstiller dem — og returnerer dem til kveldsprogrammet med noe verdt å si.",
    },
    examples: [
      { en: "Two-hour gap before the formal dinner",                         no: "To timers pause før den formelle middagen" },
      { en: "Industry-themed route connecting city to conference themes",     no: "Bransjetemat rute som kobler byen til konferansens temaer" },
      { en: "Walk from venue to restaurant with narrative stops",             no: "Gåtur fra venue til restaurant med narrative stopp" },
    ],
  },
  {
    num: "03",
    when:    { en: "After the event",        no: "Etter arrangementet" },
    heading: { en: "Post-event extension. Morning before departure.", no: "Forlengelse etter arrangementet. Morgenen før avreise." },
    body:    {
      en: "Senior executives are twice as likely to extend business trips. Those extra days are currently unmanaged. Host Atlas extends your hospitality across the full stay — and wherever guests go next.",
      no: "Toppledere er dobbelt så tilbøyelige til å forlenge forretningsreiser. De ekstra dagene er foreløpig uhåndterte. Host Atlas forlenger gjestfriheten din gjennom hele oppholdet — og videre dit gjestene reiser.",
    },
    examples: [
      { en: "One or two days remaining after the programme",                 no: "En eller to dager igjen etter programmet" },
      { en: "Morning route before the afternoon flight",                      no: "Morgentur før ettermiddagsflyet" },
      { en: "Onward journey — Oslo to Bergen, Stockholm to Copenhagen",      no: "Videre reise — Oslo til Bergen, Stockholm til København" },
    ],
  },
  {
    num: "04",
    when:    { en: "Accompanying partners",  no: "Medfølgende partnere" },
    heading: { en: "Independent time. A different kind of guest.", no: "Selvstendig tid. En annen type gjest." },
    body:    {
      en: "When the executive is in meetings, their partner has time alone in an unfamiliar city. Host Atlas gives them a thoughtful, host-branded way to experience it — without the event team needing to run a separate programme.",
      no: "Når lederen er i møter, har partneren tid alene i en ukjent by. Host Atlas gir dem en gjennomtenkt, vertsmerket måte å oppleve den på — uten at arrangementsteamet trenger å drive et separat program.",
    },
    examples: [
      { en: "Partner has unstructured time during sessions",                 no: "Partneren har ustrukturert tid under sesjonene" },
      { en: "Same curated routes, independently accessed",                   no: "De samme kuraterte rutene, tilgjengelig selvstendig" },
      { en: "No additional logistics for the event team",                    no: "Ingen ekstra logistikk for arrangementsteamet" },
    ],
  },
]

export function OpportunityTextPanel() {
  const { t, lang } = useLanguage()

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
                  {occ.when[lang]}
                </span>
              </div>

              <h3 className="font-serif text-foreground leading-[1.2]" style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                {occ.heading[lang]}
              </h3>

              <p className="font-sans" style={{ fontSize: "clamp(1rem, 2.5vw, 1.0625rem)", lineHeight: 1.65, color: "rgba(28,43,30,0.75)" }}>
                {occ.body[lang]}
              </p>

              <ul className="space-y-1.5 mt-1">
                {occ.examples.map((ex) => (
                  <li key={ex.en} className="flex gap-2.5">
                    <span className="shrink-0 mt-[0.35em]" style={{ color: "rgba(196,154,92,0.6)", fontSize: "0.5rem" }}>◆</span>
                    <span className="font-sans" style={{ fontSize: "0.9375rem", lineHeight: 1.55, color: "rgba(28,43,30,0.6)" }}>{ex[lang]}</span>
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
            <span className="font-medium" style={{ color: "rgba(28,43,30,0.9)" }}>{t("opp_callout_bold")}</span>{" "}
            {t("opp_callout_body")}
          </p>
        </div>
      </div>
    </section>
  )
}
