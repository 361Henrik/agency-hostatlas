"use client"

import Image from "next/image"

export function OpportunitySection() {
  return (
    <section id="opportunity" className="bg-background">
      {/* Strategic opportunity text */}
      <div className="py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-20 reveal">
            <div className="editorial-divider mb-8">
              <div className="h-1.5 w-1.5 rotate-45 border border-accent/50" />
            </div>
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl text-balance text-foreground mb-6">
              The Space Between Ports
              <br />
              Is an Untapped Asset.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
              Scenic journeys are defined by their routes, yet much of the
              landscape between scheduled stops remains unnarrated.
              Guests look out the window with questions that guides
              cannot always answer. This is not a failing — it is
              an opportunity that has simply lacked a structured response.
            </p>
          </div>
        </div>
      </div>

      {/* Stacked editorial comparison — The View Alone / The View With The Curated Lens */}
      <div className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">

          {/* The View Alone */}
          <div className="mb-2 reveal-scale">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px flex-1 bg-border" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-sans shrink-0">
                The View Alone
              </p>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="relative aspect-[21/9] overflow-hidden editorial-image">
              <Image
                src="/fjord-without-lens.jpg"
                alt="A quiet Norwegian fjord with steep mountains, calm water, and small wooden houses along the shoreline — beautiful but unnarrated"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
            </div>
            <p
              className="text-sm text-muted-foreground/70 mt-4 italic max-w-lg"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Beautiful. Silent. The landscape passes without context — geology, heritage, ecology, all invisible.
            </p>
          </div>

          {/* The View With The Curated Lens */}
          <div className="mt-16 reveal-scale">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px flex-1 bg-accent/30" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans shrink-0">
                The View With The Curated Lens
              </p>
              <div className="h-px flex-1 bg-accent/30" />
            </div>
            <div className="relative aspect-[21/9] overflow-hidden editorial-image">
              <Image
                src="/fjord-without-lens.jpg"
                alt="The same Norwegian fjord, now enriched with subtle location-aware annotations revealing heritage, geology, and cultural context"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 1152px"
              />
              {/* Subtle gold annotation overlays — editorial, not technical */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Annotation line 1 — mountain geology */}
                <div className="absolute top-[22%] left-[18%]">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/80 mt-1" />
                    <div className="h-px w-12 bg-accent/50 mt-1.5" />
                    <div className="bg-background/85 backdrop-blur-sm border border-accent/30 px-3 py-1.5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Geology</p>
                      <p className="text-[11px] text-foreground/80 mt-0.5">Precambrian gneiss, 1.8 billion years</p>
                    </div>
                  </div>
                </div>

                {/* Annotation line 2 — village heritage */}
                <div className="absolute top-[55%] left-[45%]">
                  <div className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent/80 mt-1" />
                    <div className="h-px w-10 bg-accent/50 mt-1.5" />
                    <div className="bg-background/85 backdrop-blur-sm border border-accent/30 px-3 py-1.5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-accent">Heritage</p>
                      <p className="text-[11px] text-foreground/80 mt-0.5">Hansestic trading post, est. 1360</p>
                    </div>
                  </div>
                </div>

                {/* Annotation line 3 — ecology */}
                <div className="absolute top-[35%] right-[12%]">
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
            <p
              className="text-sm text-accent/80 mt-4 italic max-w-lg"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The same view, now with meaning. Heritage, geology, ecology — surfaced at the moment of curiosity.
            </p>
          </div>
        </div>
      </div>

      {/* What is The Curated Lens */}
      <div className="py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="max-w-2xl mx-auto text-center reveal">
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

          {/* Transforming the Silent Stretches */}
          <div className="mt-24 reveal">
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
            <div className="editorial-divider mt-12">
              <div className="h-1.5 w-1.5 rotate-45 border border-accent/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
