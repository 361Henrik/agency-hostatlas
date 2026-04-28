"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const steps = [
  {
    num: "01",
    title: "Define Your Event",
    lines: ["Tell us your event city, your industry focus, and the number of guests.", "We align the route themes to your conference topics and brand voice."],
    note: "No technical setup required. We handle everything from briefing.",
  },
  {
    num: "02",
    title: "We Build the Routes",
    lines: ["Five curated walking routes, each written to your industry lens.", "Every point of interest researched, written, and geo-positioned."],
    note: "You receive fully structured, content-ready routes before your event.",
  },
  {
    num: "03",
    title: "You Approve the Content",
    lines: ["Review every route and point of interest in our preview tool.", "Request edits, adjust emphasis, approve in a single sign-off."],
    note: "Your brand, your voice, your approval — before a single guest arrives.",
  },
  {
    num: "04",
    title: "Deploy in Minutes",
    lines: ["Guests access their routes via a QR code on their event badge or programme.", "Or send the link directly by SMS or email before arrival."],
    note: "No app download required. Works in any mobile browser.",
  },
  {
    num: "05",
    title: "Guests Experience the City",
    lines: ["Self-guided, branded walking routes with map view and live navigation.", "Each stop tells a story connecting the city to your event's themes."],
    note: "Guests move at their own pace — in English or Norwegian.",
  },
  {
    num: "06",
    title: "You Receive the Insight",
    lines: ["Which routes were walked. Which stops captured attention.", "Which topics sparked follow-up interest from your guests."],
    note: "Engagement intelligence delivered after the event — not guesswork.",
  },
]

const itIs = [
  "A premium digital host layer",
  "A bespoke city narrative for your guests",
  "A curated, host-branded recommendation experience",
  "A way to extend hospitality beyond the programme",
  "Fast to deploy, with no new logistics or staffing",
  "Measurable — with engagement data after the event",
]

const itIsNot = [
  "A live tour operation or guide service",
  "A logistics or transport platform",
  "A generic city guide or tourist app",
  "A restaurant marketplace or booking platform",
  "A replacement for your event team",
  "A mass-market event app for general attendees",
]

export function OperatorPanel() {
  const { t } = useLanguage()

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
                {step.title}
              </h4>
              <div className="mb-3 space-y-1">
                {step.lines.map((line, i) => (
                  <p key={i} className="font-sans" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.78)", fontWeight: i === 0 ? 500 : 400 }}>{line}</p>
                ))}
              </div>
              <p className="font-sans italic mt-auto" style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "rgba(28,43,30,0.6)" }}>
                {step.note}
              </p>
            </div>
          ))}
        </div>

        {/* What it is / What it is not */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-accent/10 border border-accent/10">
          {/* Left */}
          <div className="p-8 lg:p-10 bg-card">
            <p className="font-sans font-medium uppercase tracking-[0.18em] mb-6" style={{ fontSize: "0.6875rem", color: "rgba(196,154,92,1)" }}>
              What it is
            </p>
            <ul className="space-y-3">
              {itIs.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <Check className="h-3.5 w-3.5 text-accent shrink-0 mt-[0.3em]" strokeWidth={2.5} />
                  <span className="font-sans" style={{ fontSize: "clamp(1rem, 2vw, 1.0625rem)", lineHeight: 1.6, color: "rgba(28,43,30,0.8)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="p-8 lg:p-10 bg-card" style={{ borderLeft: "1px solid rgba(196,154,92,0.1)" }}>
            <p className="font-sans font-medium uppercase tracking-[0.18em] mb-6" style={{ fontSize: "0.6875rem", color: "rgba(28,43,30,0.45)" }}>
              What it is not
            </p>
            <ul className="space-y-3">
              {itIsNot.map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="shrink-0 font-sans font-medium mt-[0.05em]" style={{ color: "rgba(28,43,30,0.3)", fontSize: "1rem" }}>−</span>
                  <span className="font-sans" style={{ fontSize: "clamp(1rem, 2vw, 1.0625rem)", lineHeight: 1.6, color: "rgba(28,43,30,0.55)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
