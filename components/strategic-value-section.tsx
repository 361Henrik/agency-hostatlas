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
    <section id="strategic-value" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="editorial-divider mb-6">
            <div className="h-1.5 w-1.5 rotate-45 border border-accent/50" />
          </div>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl text-balance text-foreground mb-4">
            Strategic Value for Operators
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto text-pretty">
            Three distinct dimensions of advantage. Each measurable. Each compounding over time.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border mb-14 reveal-stagger">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-7 md:p-8 bg-card flex flex-col reveal">
              <div className="flex h-10 w-10 items-center justify-center border border-accent/25 mb-5">
                <pillar.icon className="h-4.5 w-4.5 text-accent" />
              </div>
              <h3
                className="text-base font-medium mb-4 text-balance text-foreground"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {pillar.title}
              </h3>
              <ul className="space-y-2.5">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="text-accent mt-1 shrink-0">{"—"}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="max-w-lg mx-auto text-center reveal">
          <div className="w-10 h-px bg-accent/40 mx-auto mb-5" />
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
