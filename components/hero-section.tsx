"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-danube-evening.jpg"
          alt="Luxury river cruise ship gliding along the Danube at golden hour with historic city spires in the background"
          fill
          priority
          className="object-cover hero-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/65" />
      </div>

      <div className="relative z-10 flex min-h-[92vh] flex-col items-center justify-end px-6 pb-28 md:pb-32 text-center text-white">
        <div className="max-w-3xl space-y-7">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-accent/60" />
            <div className="h-1.5 w-1.5 rotate-45 border border-accent/60" />
            <div className="h-px w-10 bg-accent/60" />
          </div>

          <p className="text-[12px] uppercase tracking-[0.4em] font-light text-white/50">
            The Curated Lens
          </p>

          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl lg:text-7xl text-balance">
            Between Every Port,
            <br />
            an Untapped Opportunity.
          </h1>

          <p className="text-base font-light leading-relaxed md:text-lg text-white/70 max-w-xl mx-auto text-pretty">
            An operator-branded, location-aware capability that transforms
            the silent stretches of every voyage into moments of
            strategic guest engagement.
          </p>

          <div className="flex flex-col items-center gap-4 pt-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              onClick={() => scrollTo("#pilot")}
              className="border border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground text-[12px] uppercase tracking-[0.18em] px-10 py-6 h-auto  font-normal transition-all duration-300"
            >
              Request a Pilot
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#opportunity")}
              className="border-white/25 text-white/70 hover:bg-white/8 hover:text-white text-[12px] uppercase tracking-[0.18em] px-10 py-6 h-auto  font-normal bg-transparent transition-all duration-300"
            >
              Explore the Opportunity
            </Button>
          </div>
        </div>

        <button
          onClick={() => scrollTo("#opportunity")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
          aria-label="Scroll to content"
        >
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">Scroll</span>
            <ChevronDown className="h-4 w-4 text-white/30" />
          </div>
        </button>
      </div>

      {/* Bottom fade gradient suggesting continuation */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  )
}
