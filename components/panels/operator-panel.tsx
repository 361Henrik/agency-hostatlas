"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Lang } from "@/lib/language-context"

type L = Record<Lang, string>

const steps: Array<{ num: string; title: L; lines: [L, L]; note: L }> = [
  {
    num: "01",
    title: { en: "Define Your Event",       no: "Definer arrangementet ditt" },
    lines: [
      { en: "Tell us your event city, your industry focus, and the number of guests.",          no: "Fortell oss arrangementsbyen, bransjefokuset og antall gjester." },
      { en: "We align the route themes to your conference topics and brand voice.",              no: "Vi tilpasser rutetemaene til konferanseinnholdet og din merkevarestemme." },
    ],
    note: { en: "No technical setup required. We handle everything from briefing.",             no: "Ingen teknisk oppsett nødvendig. Vi håndterer alt fra briefing." },
  },
  {
    num: "02",
    title: { en: "We Build the Routes",     no: "Vi bygger rutene" },
    lines: [
      { en: "Five curated walking routes, each written to your industry lens.",                 no: "Fem kuraterte gåturer, hver skrevet etter din bransjlinse." },
      { en: "Every point of interest researched, written, and geo-positioned.",                 no: "Hvert interessepunkt er forsket på, skrevet og geo-posisjonert." },
    ],
    note: { en: "You receive fully structured, content-ready routes before your event.",        no: "Du mottar ferdig strukturerte, innholdsklare ruter før arrangementet." },
  },
  {
    num: "03",
    title: { en: "You Approve the Content", no: "Du godkjenner innholdet" },
    lines: [
      { en: "Review every route and point of interest in our preview tool.",                    no: "Se gjennom alle ruter og interessepunkter i forhåndsvisningsverktøyet." },
      { en: "Request edits, adjust emphasis, approve in a single sign-off.",                    no: "Be om justeringer, endre vektlegging, godkjenn i ett enkelt steg." },
    ],
    note: { en: "Your brand, your voice, your approval — before a single guest arrives.",       no: "Din merkevare, din tone, din godkjenning — før én eneste gjest ankommer." },
  },
  {
    num: "04",
    title: { en: "Deploy in Minutes",       no: "Klar på minutter" },
    lines: [
      { en: "Guests access their routes via a QR code on their event badge or programme.",      no: "Gjestene får tilgang til rutene via QR-kode på arrangementsbadgen eller programmet." },
      { en: "Or send the link directly by SMS or email before arrival.",                        no: "Eller send lenken direkte via SMS eller e-post før ankomst." },
    ],
    note: { en: "No app download required. Works in any mobile browser.",                      no: "Ingen app-nedlasting nødvendig. Fungerer i alle mobilnettlesere." },
  },
  {
    num: "05",
    title: { en: "Guests Experience the City", no: "Gjestene opplever byen" },
    lines: [
      { en: "Self-guided, branded walking routes with map view and live navigation.",           no: "Selvguidede, merkede gåturer med kartvisning og live navigasjon." },
      { en: "Each stop tells a story connecting the city to your event's themes.",              no: "Hvert stopp forteller en historie som knytter byen til arrangementets temaer." },
    ],
    note: { en: "Guests move at their own pace — in English or Norwegian.",                    no: "Gjestene går i eget tempo — på engelsk eller norsk." },
  },
  {
    num: "06",
    title: { en: "You Receive the Insight", no: "Du mottar innsikten" },
    lines: [
      { en: "Which routes were walked. Which stops captured attention.",                        no: "Hvilke ruter som ble gått. Hvilke stopp som fanget oppmerksomhet." },
      { en: "Which topics sparked follow-up interest from your guests.",                        no: "Hvilke temaer som skapte videre interesse blant gjestene." },
    ],
    note: { en: "Engagement intelligence delivered after the event — not guesswork.",          no: "Engasjementsdata levert etter arrangementet — ikke gjettverk." },
  },
]

const itIs: L[] = [
  { en: "A premium digital host layer",                              no: "Et premium digitalt vertslag" },
  { en: "A bespoke city narrative for your guests",                  no: "Et skreddersydd bynarrativ for dine gjester" },
  { en: "A curated, host-branded recommendation experience",         no: "En kuratert, vertsmerket anbefalingsopplevelse" },
  { en: "A way to extend hospitality beyond the programme",          no: "En måte å forlenge gjestfriheten utover programmet" },
  { en: "Fast to deploy, with no new logistics or staffing",         no: "Rask å rulle ut — uten ny logistikk eller bemanning" },
  { en: "Measurable — with engagement data after the event",         no: "Målbart — med engasjementsdata etter arrangementet" },
]

const itIsNot: L[] = [
  { en: "A live tour operation or guide service",                    no: "En live turoperasjon eller guideservice" },
  { en: "A logistics or transport platform",                         no: "En logistikk- eller transportplattform" },
  { en: "A generic city guide or tourist app",                       no: "En generisk byguide eller turistapp" },
  { en: "A restaurant marketplace or booking platform",              no: "En restaurantmarkedsplass eller bookingplattform" },
  { en: "A replacement for your event team",                         no: "En erstatning for arrangementsteamet ditt" },
  { en: "A mass-market event app for general attendees",             no: "En massemarkeds-app for vanlige deltagere" },
]

export function OperatorPanel() {
  const { t, lang } = useLanguage()

  return (
    <section
      data-section="operators"
      className="w-full flex flex-col items-center px-6 md:px-10 lg:px-16 py-28 md:py-36 panel-white"
      style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
            {t("operator_eyebrow")}
          </p>
          <h2 className="font-serif text-balance mb-5 leading-[1.06] text-accent" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            {t("operator_heading")}
          </h2>
          <p className="font-sans max-w-[48ch] mx-auto text-pretty" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.75)" }}>
            {t("operator_intro")}
          </p>
        </div>

        {/* 6-step grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-accent/10 border border-accent/10">
          {steps.map((step) => (
            <div key={step.num} className="p-6 lg:p-7 bg-card flex flex-col">
              <span className="uppercase tracking-[0.15em] mb-3 font-serif" style={{ fontSize: "2.5rem", color: "#C9A962" }}>
                {step.num}
              </span>
              <h4 className="font-serif mb-2 text-foreground leading-[1.2]" style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                {step.title[lang]}
              </h4>
              <div className="mb-3 space-y-1">
                {step.lines.map((line, i) => (
                  <p key={i} className="font-sans" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.78)", fontWeight: i === 0 ? 500 : 400 }}>{line[lang]}</p>
                ))}
              </div>
              <p className="font-sans italic mt-auto" style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "rgba(28,43,30,0.6)" }}>
                {step.note[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* What it is / What it is not */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-accent/10 border border-accent/10">
          {/* Left */}
          <div className="p-8 lg:p-10 bg-card">
            <p className="font-sans font-medium uppercase tracking-[0.18em] mb-6" style={{ fontSize: "0.6875rem", color: "rgba(196,154,92,1)" }}>
              {t("operator_label_is")}
            </p>
            <ul className="space-y-3">
              {itIs.map((item) => (
                <li key={item.en} className="flex gap-3 items-start">
                  <Check className="h-3.5 w-3.5 text-accent shrink-0 mt-[0.3em]" strokeWidth={2.5} />
                  <span className="font-sans" style={{ fontSize: "clamp(1rem, 2vw, 1.0625rem)", lineHeight: 1.6, color: "rgba(28,43,30,0.8)" }}>{item[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="p-8 lg:p-10 bg-card" style={{ borderLeft: "1px solid rgba(196,154,92,0.1)" }}>
            <p className="font-sans font-medium uppercase tracking-[0.18em] mb-6" style={{ fontSize: "0.6875rem", color: "rgba(28,43,30,0.45)" }}>
              {t("operator_label_is_not")}
            </p>
            <ul className="space-y-3">
              {itIsNot.map((item) => (
                <li key={item.en} className="flex gap-3 items-start">
                  <span className="shrink-0 font-sans font-medium mt-[0.05em]" style={{ color: "rgba(28,43,30,0.3)", fontSize: "1rem" }}>−</span>
                  <span className="font-sans" style={{ fontSize: "clamp(1rem, 2vw, 1.0625rem)", lineHeight: 1.6, color: "rgba(28,43,30,0.55)" }}>{item[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
