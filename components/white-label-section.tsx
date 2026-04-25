"use client"

import { Sparkles, BarChart3, Fingerprint } from "lucide-react"

const pillars = [
  {
    icon: Sparkles,
    title: "A Stronger Guest Experience",
    points: [
      "Guests engage with the landscape between ports, not just at scheduled stops.",
      "Curiosity is met in real time, with curated context that complements the journey.",
      "The experience feels native to the voyage — never intrusive, always enriching.",
    ],
  },
  {
    icon: BarChart3,
    title: "A New Strategic Insight Capability",
    points: [
      "Understand what guests engage with, when, where, and for how long.",
      "Behavioural data tied to geography — a dimension operators currently lack.",
      "Smarter decisions about future route design, content investment, and partnerships.",
    ],
  },
  {
    icon: Fingerprint,
    title: "An Organic Brand Extension",
    points: [
      "The experience carries your visual identity, your editorial voice, your narrative style.",
      "Your brand presence becomes continuous — not confined to the cabin or the dock.",
      "A deeper understanding of engagement patterns informs how your brand evolves.",
    ],
  },
]

export function StrategicValueSection() {
  return (
    <section id="value" className="py-32 px-6 bg-background">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="editorial-divider mb-8">
            <div className="h-1.5 w-1.5 rotate-45 border border-accent/50" />
          </div>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl text-balance text-foreground mb-5">
            Strategic Value for Operators
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto text-pretty">
            Three distinct dimensions of advantage. Each measurable. Each compounding over time.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid gap-px md:grid-cols-3 bg-border border border-border reveal-stagger">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 md:p-10 bg-card flex flex-col reveal"
            >
              <div className="flex h-11 w-11 items-center justify-center border border-accent/25 mb-6">
                <pillar.icon className="h-5 w-5 text-accent" />
              </div>
              <h3
                className="text-lg font-medium mb-5 text-balance text-foreground"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-accent mt-1.5 shrink-0">{"—"}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing emphasis */}
        <div className="max-w-lg mx-auto text-center mt-16 reveal">
          <div className="w-10 h-px bg-accent/40 mx-auto mb-6" />
          <p
            className="text-base text-foreground leading-relaxed text-pretty"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            In-journey behavioural insight is something operators
            currently lack. The Curated Lens makes it visible.
          </p>
        </div>

      </div>
    </section>
  )
}
