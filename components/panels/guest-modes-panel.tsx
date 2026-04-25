"use client"

import Image from "next/image"
import { Headphones, Map, Camera } from "lucide-react"

const modes = [
  {
    icon: Headphones,
    title: "Audio",
    description: "Narrated stories guests listen to while watching the landscape pass.",
    image: "/guest-deck-headphones.png",
    imageAlt: "Guest with headphones on cruise deck",
  },
  {
    icon: Map,
    title: "Map View",
    description: "An interactive map showing points of interest along the current route.",
    image: "/guest-deck-reading.png",
    imageAlt: "Guest browsing the interactive route map",
  },
  {
    icon: Camera,
    title: "Camera View",
    description: "Point-of-interest recognition tied to what guests see outside.",
    image: "/guest-phone-ar.png",
    imageAlt: "Guest holding phone with POI information overlaid",
  },
]

export function GuestModesPanel() {
  return (
    <div className="min-h-full w-full flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 pb-12 panel-white">
      <div className="max-w-[65ch] mx-auto w-full md:max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-sans mb-5">
            Modes of Engagement
          </p>
          <h3 className="text-4xl tracking-tight md:text-5xl lg:text-6xl text-balance text-foreground leading-[1.08]" style={{ fontWeight: 500 }}>
            Three Ways to Experience the Journey.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {modes.map((mode) => (
            <div key={mode.title} className="bg-card flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden editorial-image">
                <Image
                  src={mode.image}
                  alt={mode.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center border border-accent/20 mb-4">
                  <mode.icon className="h-8 w-8 text-accent" />
                </div>
                <h4
                  className="font-serif text-foreground mb-2 leading-[1.2]"
                  style={{ fontSize: "1.125rem", fontWeight: 500 }}
                >
                  {mode.title}
                </h4>
                <p className="font-sans text-muted-foreground" style={{ fontSize: "1.1875rem", lineHeight: 1.6 }}>
                  {mode.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
