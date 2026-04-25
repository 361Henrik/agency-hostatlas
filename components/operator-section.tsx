"use client"

import { Route, MapPin, Palette, CheckCircle } from "lucide-react"

const operatorCapabilities = [
  {
    icon: Route,
    title: "Route Definition",
    description:
      "Select a voyage. ThreeSixtyOne populates it with expertly researched points of interest, ready for your review.",
  },
  {
    icon: MapPin,
    title: "Content Mapping",
    description:
      "Every point of interest is written within your chosen categories — heritage, geology, ecology, cuisine — in your voice, not ours.",
  },
  {
    icon: Palette,
    title: "Themed Journeys",
    description:
      "Create curated experiences around specific themes: a geology-focused voyage, a culinary discovery, a cultural immersion.",
  },
  {
    icon: CheckCircle,
    title: "Editorial Control",
    description:
      "Full approval authority. Browse, adjust, refine, or approve as-is. Nothing reaches your guests without your sign-off.",
  },
]

export function OperatorSection() {
  return (
    <section id="operators" className="py-28 md:py-36 bg-secondary">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-accent/40" />
            <div className="h-1.5 w-1.5 rotate-45 border border-accent/40" />
            <div className="h-px w-10 bg-accent/40" />
          </div>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl text-balance text-secondary-foreground mb-4">
            How Operators Work With It
          </h2>
          <p className="text-base text-secondary-foreground/50 leading-relaxed max-w-xl mx-auto text-pretty">
            Full brand integration. Curated structure. No loss of control.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 gap-px bg-accent/10 border border-accent/15 mb-14 reveal-stagger">
          {operatorCapabilities.map((cap, i) => (
            <div key={cap.title} className="p-7 bg-secondary flex flex-col reveal">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-sans">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-9 w-9 items-center justify-center border border-accent/20">
                  <cap.icon className="h-4 w-4 text-accent" />
                </div>
              </div>
              <h4
                className="text-lg font-medium mb-2 text-secondary-foreground"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {cap.title}
              </h4>
              <p className="text-sm text-secondary-foreground/55 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* Emphasis */}
        <div className="max-w-xl mx-auto text-center reveal">
          <div className="w-10 h-px bg-accent/30 mx-auto mb-5" />
          <p
            className="text-base text-secondary-foreground/70 leading-relaxed italic text-pretty"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Your brand. Your editorial voice. Your approval on every detail.
          </p>
        </div>
      </div>
    </section>
  )
}
