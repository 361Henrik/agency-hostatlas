"use client"

import { Headphones, Map, Camera } from "lucide-react"

const personas = [
  { icon: Headphones, title: "Audio",       description: "Narrated stories while the landscape unfolds outside." },
  { icon: Map,        title: "Map View",    description: "Points of interest surfaced along the live route." },
  { icon: Camera,     title: "Camera View", description: "Recognition tied to what guests see in real time." },
]

export function GuestDiscoveryPanel() {
  return (
    <section data-section="experience" className="w-full panel-white py-28 md:py-36"       style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}>
      <div className="flex flex-col items-center px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto w-full">

          {/* Editorial header */}
          <div className="text-center mb-12">
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
              Contextual Discovery
            </p>
            <h2 className="font-serif text-balance text-foreground mb-5 leading-[1.06]" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
              As the Journey Unfolds
            </h2>
            <p className="font-sans text-balance max-w-[48ch] mx-auto text-center" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.75)" }}>
              Context is engineered into the journey. Insight appears with precision, aligned to place, pace, and brand intent. Every reveal is intentional and designed to strengthen engagement and elevate perception.
            </p>
          </div>

          {/* Video */}
          <div className="mb-4">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                key="poi-video-2"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls={false}
                className="absolute inset-0 w-full h-full object-cover"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/POI_Color_Change_Video_Generated%20%281%29-uIT83t0CqsqYdkHFALxleWYATgJ2Xc.mp4"
              />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[oklch(0.985_0.002_85/0.5)] to-transparent pointer-events-none" />
            </div>
            <p className="mt-3 mb-20 md:mb-28 font-sans text-right italic" style={{ fontSize: "0.9375rem", color: "rgba(28,43,30,0.4)" }}>
              Illustrated example
            </p>
          </div>

          

          {/* Personas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 max-w-3xl mx-auto">
            {personas.map((p) => (
              <div key={p.title} className="text-center">
                <p.icon className="h-8 w-8 text-accent mx-auto stroke-[1.5] mb-4" />
                <h4 className="font-serif text-foreground mb-2 leading-[1.15]" style={{ fontSize: "1.375rem", fontWeight: 500 }}>{p.title}</h4>
                <p className="font-sans max-w-[18ch] mx-auto" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.68)" }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
