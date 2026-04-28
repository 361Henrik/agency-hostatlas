"use client"

import { useLanguage } from "@/lib/language-context"
import type { Lang } from "@/lib/language-context"

type L = Record<Lang, string>

const pillars: Array<{ num: string; title: L; points: [L, L, L] }> = [
  {
    num: "01",
    title: {
      en: "Stronger Guest Satisfaction",
      no: "Sterkere gjestetilfredshet",
    },
    points: [
      { en: "Guests who walk the city return to the evening programme more engaged — not scattered.",             no: "Gjester som går i byen, vender tilbake til kveldsprogrammet mer engasjert — ikke spredt." },
      { en: "A structured city experience reduces the aimless gap that erodes event satisfaction scores.",        no: "En strukturert byopplevelse reduserer det formålsløse gapet som svekker tilfredshetsscore." },
      { en: "A city experience branded to your event makes the city feel like part of the programme.",           no: "En byopplevelse merket til ditt arrangement gjør at byen føles som en del av programmet." },
    ],
  },
  {
    num: "02",
    title: {
      en: "Brand Continuity Beyond the Venue",
      no: "Merkevarekontinuitet utover møtelokalet",
    },
    points: [
      { en: "Your event brand travels with the guest into the city — on every street, at every stop.",           no: "Ditt arrangementsbrand følger gjesten ut i byen — på hver gate, ved hvert stopp." },
      { en: "Every point of interest carries your narrative framing, your tone, your identity.",                  no: "Hvert interessepunkt bærer din narrative innramming, din tone, din identitet." },
      { en: "Brand presence becomes continuous — not confined to the conference room or gala dinner.",            no: "Merkevaretilstedeværelsen blir kontinuerlig — ikke begrenset til konferanserommet eller gallamiddagen." },
    ],
  },
  {
    num: "03",
    title: {
      en: "Actionable Engagement Data",
      no: "Handlingsorienterte engasjementsdata",
    },
    points: [
      { en: "Understand which topics resonate with your guests outside the formal programme.",                    no: "Forstå hvilke temaer som resonnerer med dine gjester utenfor det formelle programmet." },
      { en: "Which routes were walked, which stops engaged, which themes sparked follow-up interest.",            no: "Hvilke ruter som ble gått, hvilke stopp som engasjerte, hvilke temaer som skapte videre interesse." },
      { en: "Intelligence that informs future event content, sponsor conversations, and city selection.",         no: "Innsikt som former fremtidige arrangementer, sponsorsamtaler og valg av arrangementsby." },
    ],
  },
]

export function StrategicValuePanel() {
  const { t, lang } = useLanguage()

  return (
    <section
      data-section="advantage"
      className="w-full flex items-center justify-center px-6 md:px-12 lg:px-20 py-28 md:py-36 panel-green"
      style={{ backgroundColor: "#1F3528", color: "#F5F0E8" }}
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
            {t("strategic_eyebrow")}
          </p>
          <h2 className="font-serif text-balance text-foreground mb-6 leading-[1.06]" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            {t("strategic_heading")}
          </h2>
          <p className="font-sans text-pretty mx-auto max-w-[52ch]" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.72)", fontWeight: 500 }}>
            {t("strategic_intro")}
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {pillars.map((pillar) => (
            <div key={pillar.num} className="p-7 md:p-9 bg-card flex flex-col">
              <span
                className="font-serif font-medium mb-6 block"
                style={{ fontSize: "2.5rem", color: "#C9A962", letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                {pillar.num}
              </span>
              <h3 className="font-serif mb-4 text-balance text-foreground leading-[1.2]" style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                {pillar.title[lang]}
              </h3>
              <ul className="space-y-3">
                {pillar.points.map((point, i) => (
                  <li key={point.en} className="flex gap-3">
                    <span className="text-accent mt-0.5 shrink-0">{"—"}</span>
                    <p className="font-sans" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.85)", fontWeight: i === 0 ? 500 : 400 }}>{point[lang]}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
