"use client"

import Image from "next/image"
import {
  QrCode,
  Monitor,
  Smartphone,
  Globe,
  Headphones,
  Map,
  Camera,
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

const personalisationCategories = [
  { icon: Landmark, label: "History" },
  { icon: Mountain, label: "Nature" },
  { icon: Leaf, label: "Ecology" },
  { icon: UtensilsCrossed, label: "Food" },
  { icon: BookOpen, label: "Culture" },
  { icon: Compass, label: "Architecture" },
]

const engagementModes = [
  {
    icon: Headphones,
    title: "Audio",
    description: "Narrated stories guests can listen to while watching the landscape pass.",
  },
  {
    icon: Map,
    title: "Map View",
    description: "An interactive map showing points of interest along the current route.",
  },
  {
    icon: Camera,
    title: "Camera View",
    description: "Point-of-interest recognition tied to what guests see outside the window.",
  },
]

export function GuestSection() {
  return (
    <section id="guest" className="relative">
      {/* Amalfi coast image band */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/amalfi-coastal.jpg"
          alt="Amalfi Coast at golden hour with pastel-coloured villages cascading down Mediterranean cliffs into azure water"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      <div className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-20 reveal">
            <div className="editorial-divider mb-8">
              <div className="h-1.5 w-1.5 rotate-45 border border-accent/50" />
            </div>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl text-balance text-foreground mb-5">
              The Guest Experience
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto text-pretty">
              Calm, contextual, and entirely frictionless. Designed to enrich
              the journey without interrupting it.
            </p>
          </div>

          {/* Frictionless Access */}
          <div className="mb-24 reveal">
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-sans mb-6">
              Frictionless Access
            </p>
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-border border border-border">
              {accessPoints.map((point) => (
                <div
                  key={point.text}
                  className="flex items-center gap-3 p-5 bg-card"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-border">
                    <point.icon className="h-4 w-4 text-accent" />
                  </div>
                  <p className="text-sm text-foreground">{point.text}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 italic"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Low operational burden. No installations. No additional staff.
            </p>
          </div>

          {/* Personalisation */}
          <div className="mb-24 reveal">
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-sans mb-4">
              Personalisation
            </p>
            <h3 className="text-2xl font-medium tracking-tight md:text-3xl text-balance text-foreground mb-5">
              Guests Choose What Interests Them.
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl text-pretty mb-8">
              On first access, guests select categories of interest. The
              experience then surfaces relevant content — ensuring
              each guest encounters the perspective that matters most to them.
            </p>
            <div className="flex flex-wrap gap-3">
              {personalisationCategories.map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-2.5 px-4 py-2.5 border border-accent/30 bg-card"
                >
                  <cat.icon className="h-3.5 w-3.5 text-accent" />
                  <span
                    className="text-sm text-foreground"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contextual Discovery — with editorial image */}
          <div className="mb-24 reveal">
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-sans mb-4">
              Contextual Discovery
            </p>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-medium tracking-tight md:text-3xl text-balance text-foreground mb-5">
                  Content Tied to What They See.
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                  The Curated Lens delivers insight relative to the guest's
                  position. As the landscape changes, so does the
                  narrative — each point of interest surfaced at the
                  moment it becomes visible, not before, not after.
                </p>
              </div>
              <div className="relative aspect-square overflow-hidden border border-accent/20">
                <Image
                  src="/guest-cabin-phone.png"
                  alt="Guest in cruise cabin holding phone to window, viewing mountain landscape through The Curated Lens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Video — illustrative example */}
          <div className="mb-24 reveal">
            <div className="relative border border-accent/20 overflow-hidden bg-black">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls={false}
                className="w-full h-auto block"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Close_Up_Screen_Content_Video-Jkr0TMGzi8Gq1sXht4c5aPjy49Hafc.mp4"
                ref={(el) => { if (el) el.volume = 0 }}
              />
            </div>
            <p
              className="text-sm text-muted-foreground mt-4 italic text-center"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              An illustrative example of what your guests could experience as they travel.
            </p>
          </div>

          {/* Modes of Engagement */}
          <div className="reveal">
            <p className="text-[11px] uppercase tracking-[0.25em] text-accent font-sans mb-4">
              Modes of Engagement
            </p>
            <h3 className="text-2xl font-medium tracking-tight md:text-3xl text-balance text-foreground mb-8">
              Three Ways to Experience the Journey.
            </h3>
            <div className="grid gap-px md:grid-cols-3 bg-border border border-border reveal-stagger">
              {engagementModes.map((mode) => (
                <div
                  key={mode.title}
                  className="bg-card flex flex-col reveal"
                >
                  {/* Editorial image for Audio and Camera modes */}
                  {mode.title === "Map View" && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/guest-deck-reading.png"
                        alt="Guest on a river cruise deck browsing the interactive map on her phone with a chateau and rolling vineyards in the background"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  {mode.title === "Audio" && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/guest-deck-headphones.png"
                        alt="Guest with headphones on cruise deck listening to narrated stories while gazing at a historic palace across the water"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  {mode.title === "Camera View" && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src="/guest-phone-ar.png"
                        alt="Guest holding phone at cruise railing, screen showing point-of-interest information overlaid on the landscape"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex h-10 w-10 items-center justify-center border border-border mb-5">
                      <mode.icon className="h-4.5 w-4.5 text-accent" />
                    </div>
                    <h4
                      className="text-[15px] font-medium text-foreground mb-2"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {mode.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mode.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
