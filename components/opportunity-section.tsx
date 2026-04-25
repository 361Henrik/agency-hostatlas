"use client"

import Image from "next/image"

export function OpportunitySection() {
  return (
    <section id="opportunity" className="py-28 md:py-36 bg-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        {/* Opening statement */}
        <div className="max-w-2xl mx-auto text-center mb-24 reveal">
          <div className="editorial-divider mb-8">
            <div className="h-1.5 w-1.5 rotate-45 border border-accent/50" />
          </div>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl text-balance text-foreground mb-6">
            The Space Between Ports
            <br />
            Is an Untapped Asset.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto text-pretty">
            Scenic journeys are defined by their routes, yet much of the
            landscape between scheduled stops remains unnarrated.
            Guests look out the window with questions that guides
            cannot always answer. This is not a failing — it is
            an opportunity that has simply lacked a structured response.
          </p>
        </div>

        {/* Comparison: View Alone vs With Curated Lens */}
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border mb-24 reveal">
          {/* Left — The View Alone */}
          <div className="flex flex-col bg-card">
            <div className="flex items-center justify-center gap-4 py-4 border-b border-border px-6">
              <div className="h-px flex-1 bg-border" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-sans shrink-0">
                The View Alone
              </p>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/fjord-without-lens.jpg"
                alt="A quiet Norwegian fjord — beautiful but unnarrated"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="px-6 py-4 border-t border-border">
              <p
                className="text-sm text-muted-foreground/70 italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Beautiful. Silent. The landscape passes without context.
              </p>
            </div>
          </div>

          {/* Right — With The Curated Lens */}
          <div className="flex flex-col bg-card">
            <div className="flex items-center justify-center gap-4 py-4 border-b border-accent/30 px-6">
              <div className="h-px flex-1 bg-accent/30" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans shrink-0">
                With The Curated Lens
              </p>
              <div className="h-px flex-1 bg-accent/30" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/fjord-without-lens.jpg"
                alt="The same fjord, enriched with location-aware annotations"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              {/* Gold annotation overlays */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[22%] left-[12%]">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/80 mt-1" />
                    <div className="h-px w-12 bg-accent/50 mt-1.5" />
                    <div className="bg-background/85 backdrop-blur-sm border border-accent/30 px-3 py-1.5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Geology</p>
                      <p className="text-[11px] text-foreground/80 mt-0.5">Precambrian gneiss, 1.8 billion years</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[55%] left-[30%]">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/80 mt-1" />
                    <div className="h-px w-10 bg-accent/50 mt-1.5" />
                    <div className="bg-background/85 backdrop-blur-sm border border-accent/30 px-3 py-1.5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Heritage</p>
                      <p className="text-[11px] text-foreground/80 mt-0.5">Hanseatic trading post, est. 1360</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[35%] right-[8%]">
                  <div className="flex items-start gap-2 flex-row-reverse">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/80 mt-1" />
                    <div className="h-px w-10 bg-accent/50 mt-1.5" />
                    <div className="bg-background/85 backdrop-blur-sm border border-accent/30 px-3 py-1.5 text-right">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Ecology</p>
                      <p className="text-[11px] text-foreground/80 mt-0.5">White-tailed eagle nesting site</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-accent/30">
              <p
                className="text-sm text-accent/80 italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The same view, now with meaning. Heritage, geology, ecology — surfaced at the moment of curiosity.
              </p>
            </div>
          </div>
        </div>

        {/* Definition + Silent Stretches */}
        <div className="max-w-3xl mx-auto reveal">
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6 font-sans">
              Introducing The Curated Lens
            </p>
            <h3 className="text-2xl font-medium tracking-tight md:text-3xl text-balance text-foreground mb-6">
              A New Capability for Fixed-Route Travel.
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty mb-6">
              The Curated Lens is an operator-branded, location-aware
              information capability that delivers contextual insight
              to guests in real time. It gives every stretch of coastline,
              every valley, and every passing landmark a narrative — curated,
              branded, and available precisely when the guest is looking.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">
              It is not a platform. It is not an overlay. It is a new
              dimension of perspective — an organic extension of how
              you already speak to your guests, made continuous.
            </p>
          </div>

          <div className="editorial-divider mb-10">
            <div className="h-1.5 w-1.5 rotate-45 border border-accent/50" />
          </div>

          <h3 className="text-2xl font-medium tracking-tight md:text-3xl text-center text-balance text-foreground mb-8">
            Transforming the Silent Stretches
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                Between major attractions, guests ask questions. They wonder
                about the geology of a cliff face, the history of a shoreline
                settlement, the ecology of a passing forest.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                Guides cannot answer every contextual question — nor should
                they have to. The Curated Lens fills these gaps calmly and
                seamlessly, offering curated insight tied to what
                guests see outside the window.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                No disruption to the journey's rhythm. No additional
                equipment or staff. Simply a richer, more intentional
                guest experience that operates quietly alongside
                your existing programme.
              </p>
              <p className="text-base text-foreground leading-relaxed text-pretty font-medium">
                The silent stretches become your most compelling content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
