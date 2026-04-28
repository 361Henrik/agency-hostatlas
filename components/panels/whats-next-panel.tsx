"use client"

import { useLanguage } from "@/lib/language-context"
import type { Lang } from "@/lib/language-context"

type L = Record<Lang, string>

const cards: Array<{
  phase: L; phaseStyle: string
  title: L; heading: L; body: L; items: L[]
}> = [
  {
    phase:     { en: "Coming next",    no: "Kommer snart" },
    phaseStyle: "gold",
    title:     { en: "Multi-city capability",     no: "Flerbykonsept" },
    heading:   { en: "Oslo to Bergen. Stockholm to Copenhagen. Wherever your guests go next.", no: "Oslo til Bergen. Stockholm til København. Der gjestene dine reiser neste." },
    body:      { en: "Some senior guests extend their trip beyond the event city. We're building guide packs for onward destinations — same quality, same host-branded experience, new city.", no: "Noen seniorgjester forlenger reisen utover arrangementsbyen. Vi bygger guidepakker for videre destinasjoner — samme kvalitet, samme vertsmerket opplevelse, ny by." },
    items: [
      { en: "Nordic city guide packs",                               no: "Nordiske byguide-pakker" },
      { en: "Onward journey provisioning from event brief",          no: "Provisjonering av videre reise fra arrangementsbriefing" },
      { en: "Bergen, Stavanger, Tromsø, Stockholm, Copenhagen",      no: "Bergen, Stavanger, Tromsø, Stockholm, København" },
    ],
  },
  {
    phase:     { en: "Coming next",    no: "Kommer snart" },
    phaseStyle: "gold",
    title:     { en: "Bespoke narrative stops",   no: "Skreddersydde narrative stopp" },
    heading:   { en: "Route stops built around your company, your sponsors, your guests' industries.", no: "Rutestopp bygget rundt din bedrift, dine sponsorer, gjestenes bransjer." },
    body:      { en: "The current product delivers an industry lens. The next layer is specific narrative — stops written around a company history, a sponsor's presence in the city, or the host's own story here.", no: "Det nåværende produktet leverer en bransjlinse. Det neste laget er spesifikk narrativ — stopp skrevet rundt en bedriftshistorie, en sponsors tilstedeværelse i byen, eller vertselskapets egen fortelling her." },
    items: [
      { en: "Company-specific narrative stops on any route",         no: "Bedriftsspesifikke narrative stopp på enhver rute" },
      { en: "Sponsor-branded stop integration",                      no: "Sponsormerket stopintegrasjon" },
      { en: "Host company identity woven into the city narrative",   no: "Vertselskapets identitet vevet inn i byens fortelling" },
    ],
  },
  {
    phase:     { en: "In development", no: "Under utvikling" },
    phaseStyle: "amber",
    title:     { en: "Speed to brief",           no: "Fart fra briefing til levering" },
    heading:   { en: "From event brief to live guest guide — faster with every event.", no: "Fra arrangementsbriefing til live gjesteguide — raskere med hvert arrangement." },
    body:      { en: "For established clients with a defined industry lens, we're working toward rapid deployment where a new event builds on proven frameworks rather than starting from zero.", no: "For etablerte klienter med en definert bransjlinse arbeider vi mot rask utrulling, der nye arrangementer bygger på velprøvde rammeverk fremfor å starte fra null." },
    items: [
      { en: "Reusable route frameworks per industry",                no: "Gjenbrukbare rute-rammeverk per bransje" },
      { en: "Shorter lead times as content library grows",           no: "Kortere leveringstider etter hvert som innholdsbiblioteket vokser" },
      { en: "Rapid provisioning for repeat cities and clients",      no: "Rask provisjonering for gjentagende byer og klienter" },
    ],
  },
  {
    phase:     { en: "Exploring",      no: "Under utforskning" },
    phaseStyle: "muted",
    title:     { en: "Intelligent guest layer",  no: "Intelligent gjestelag" },
    heading:   { en: "A guide that knows more the longer it's used.", no: "En guide som vet mer jo lenger den brukes." },
    body:      { en: "We're exploring an optional conversational layer — allowing guests to ask contextual questions about what they're seeing, and receive a private summary after the event.", no: "Vi utforsker et valgfritt samtalende lag — som lar gjester stille kontekstuelle spørsmål om det de ser, og motta et privat sammendrag etter arrangementet." },
    items: [
      { en: "Contextual Q&A at each point of interest",             no: "Kontekstuell spørsmål og svar ved hvert interessepunkt" },
      { en: "Private note-saving for the guest",                     no: "Privat notatlagring for gjesten" },
      { en: "Post-event summary of stops and topics",                no: "Sammendrag av stopp og temaer etter arrangementet" },
      { en: "No data shared without guest consent",                  no: "Ingen data delt uten gjestesamtykke" },
    ],
  },
]

const phaseColors: Record<string, { bg: string; text: string }> = {
  gold:  { bg: "rgba(201,169,98,0.15)", text: "#C9A962" },
  amber: { bg: "rgba(201,169,98,0.08)", text: "rgba(201,169,98,0.65)" },
  muted: { bg: "rgba(245,240,232,0.06)", text: "rgba(245,240,232,0.4)" },
}

export function WhatsNextPanel() {
  const { t, lang } = useLanguage()

  return (
    <section
      data-section="whats-next"
      className="w-full px-6 md:px-12 lg:px-20 py-28 md:py-36"
      style={{ backgroundColor: "#162B1E", color: "#F5F0E8" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans font-medium uppercase tracking-[0.2em] mb-6" style={{ fontSize: "0.75rem", color: "rgba(201,169,98,0.8)" }}>
            {t("wnext_eyebrow")}
          </p>
          <h2 className="font-serif leading-[1.06] mb-8" style={{ color: "#C9A962", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            {t("wnext_heading")}
          </h2>
          <p className="font-sans text-pretty mx-auto max-w-[54ch]" style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(245,240,232,0.55)" }}>
            {t("wnext_intro")}
          </p>
        </div>

        {/* 4 cards — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
          {cards.map((card) => {
            const pc = phaseColors[card.phaseStyle]
            return (
              <div key={card.title.en} className="p-8 lg:p-10 flex flex-col gap-4" style={{ backgroundColor: "rgba(31,53,40,0.6)" }}>
                <span
                  className="font-sans font-medium uppercase self-start px-2.5 py-1"
                  style={{ fontSize: "0.625rem", letterSpacing: "0.16em", backgroundColor: pc.bg, color: pc.text, borderRadius: "2px" }}
                >
                  {card.phase[lang]}
                </span>

                <p className="font-sans font-medium uppercase tracking-[0.1em]" style={{ fontSize: "0.6875rem", color: "rgba(245,240,232,0.4)" }}>
                  {card.title[lang]}
                </p>

                <h3 className="font-serif leading-[1.2]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", fontWeight: 500, color: "#F5F0E8" }}>
                  {card.heading[lang]}
                </h3>

                <p className="font-sans" style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", lineHeight: 1.65, color: "rgba(245,240,232,0.65)" }}>
                  {card.body[lang]}
                </p>

                <ul className="space-y-1.5 mt-1">
                  {card.items.map((item) => (
                    <li key={item.en} className="flex gap-2.5 items-start">
                      <span className="shrink-0 mt-[0.35em]" style={{ color: "rgba(201,169,98,0.45)", fontSize: "0.5rem" }}>◆</span>
                      <span className="font-sans" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "rgba(245,240,232,0.5)" }}>{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Closing callout */}
        <div
          className="mt-px px-8 py-6 flex gap-4 items-start"
          style={{ backgroundColor: "rgba(201,169,98,0.04)", border: "1px solid rgba(201,169,98,0.12)", borderTop: "none" }}
        >
          <span className="shrink-0 mt-0.5" style={{ color: "rgba(201,169,98,0.5)", fontSize: "1rem" }}>→</span>
          <p className="font-sans" style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", lineHeight: 1.65, color: "rgba(245,240,232,0.5)" }}>
            {t("wnext_callout")}
          </p>
        </div>
      </div>
    </section>
  )
}
