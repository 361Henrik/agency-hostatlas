"use client"

import {
  QrCode,
  Monitor,
  Smartphone,
  Globe,
  Landmark,
  Mountain,
  Leaf,
  UtensilsCrossed,
  BookOpen,
  Compass,
} from "lucide-react"

const accessPoints = [
  { icon: QrCode, text: "QR code placed aboard" },
  { icon: Monitor, text: "Browser-based, no downloads" },
  { icon: Smartphone, text: "Works across all devices" },
  { icon: Globe, text: "Automatic language detection" },
]

const categories = [
  { icon: Landmark, label: "History" },
  { icon: Mountain, label: "Nature" },
  { icon: Leaf, label: "Ecology" },
  { icon: UtensilsCrossed, label: "Food" },
  { icon: BookOpen, label: "Culture" },
  { icon: Compass, label: "Architecture" },
]

export function GuestIntroPanel() {
  return (
    <div className="min-h-full w-full panel-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-10">
        <div className="max-w-[65ch] mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans mb-5">
              The Guest Experience
            </p>
            <h2 className="text-4xl tracking-tight md:text-5xl lg:text-6xl text-balance text-foreground mb-4 leading-[1.08]" style={{ fontWeight: 500 }}>
              Calm, Contextual, Frictionless.
            </h2>
            <p className="font-sans text-muted-foreground max-w-[50ch] mx-auto text-pretty" style={{ fontSize: "1.1875rem", lineHeight: 1.6 }}>
              Designed to enrich the journey without interrupting it.
              Guests access curated content through their own device.
            </p>
          </div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {/* Access */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-sans mb-5">
                Frictionless Access
              </p>
              <div className="space-y-3.5">
                {accessPoints.map((point) => (
                  <div key={point.text} className="flex items-center gap-3">
                    <point.icon className="h-4 w-4 text-accent shrink-0" />
                    <p className="font-sans text-foreground" style={{ fontSize: "1.1875rem", lineHeight: 1.6 }}>{point.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Personalisation */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-sans mb-5">
                Personalisation
              </p>
              <p className="font-sans text-muted-foreground text-pretty mb-6" style={{ fontSize: "1.1875rem", lineHeight: 1.6 }}>
                Guests choose what interests them. The experience
                surfaces relevant content for each individual.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-5">
                  <span className="font-sans flex items-center gap-1.5 text-foreground/70" style={{ fontSize: "1.1875rem" }}>
                    <Compass className="h-3.5 w-3.5 text-accent" /> Architecture
                  </span>
                  <span className="font-sans flex items-center gap-1.5 text-foreground/70" style={{ fontSize: "1.1875rem" }}>
                    <UtensilsCrossed className="h-3.5 w-3.5 text-accent" /> Food
                  </span>
                  <span className="font-sans flex items-center gap-1.5 text-foreground/70" style={{ fontSize: "1.1875rem" }}>
                    <Mountain className="h-3.5 w-3.5 text-accent" /> Nature
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="font-sans flex items-center gap-1.5 text-foreground/70" style={{ fontSize: "1.1875rem" }}>
                    <Landmark className="h-3.5 w-3.5 text-accent" /> History
                  </span>
                  <span className="font-sans flex items-center gap-1.5 text-foreground/70" style={{ fontSize: "1.1875rem" }}>
                    <BookOpen className="h-3.5 w-3.5 text-accent" /> Culture
                  </span>
                  <span className="font-sans flex items-center gap-1.5 text-foreground/70" style={{ fontSize: "1.1875rem" }}>
                    <Leaf className="h-3.5 w-3.5 text-accent" /> Ecology
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
