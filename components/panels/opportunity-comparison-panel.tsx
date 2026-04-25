"use client"

import Image from "next/image"

const annotations = [
  { category: "Geology", detail: "Precambrian gneiss, 1.8 billion years" },
  { category: "Heritage", detail: "Hanseatic trading post, est. 1360" },
  { category: "Ecology", detail: "White-tailed eagle nesting site" },
]

export function OpportunityComparisonPanel() {
  return (
    <div className="h-full w-full flex items-center bg-background">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left — The View Alone */}
        <div className="relative flex flex-col h-full lg:border-r border-border">
          <div className="flex items-center justify-center gap-4 py-5 border-b border-border px-6">
            <div className="h-px flex-1 bg-border" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-sans shrink-0">
              The View Alone
            </p>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="relative flex-1 min-h-[50vw] lg:min-h-0">
            <Image
              src="/fjord-without-lens.jpg"
              alt="A quiet Norwegian fjord — beautiful but unnarrated"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="px-6 lg:px-8 py-5 border-t border-border">
            <p
              className="text-sm text-muted-foreground/70 italic"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Beautiful. Silent. The landscape passes without context.
            </p>
          </div>
        </div>

        {/* Right — The View With The Curated Lens */}
        <div className="relative flex flex-col h-full">
          <div className="flex items-center justify-center gap-4 py-5 border-b border-accent/30 px-6">
            <div className="h-px flex-1 bg-accent/30" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent font-sans shrink-0">
              With The Curated Lens
            </p>
            <div className="h-px flex-1 bg-accent/30" />
          </div>
          <div className="relative flex-1 min-h-[50vw] lg:min-h-0">
            <Image
              src="/fjord-without-lens.jpg"
              alt="The same fjord, enriched with location-aware annotations"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gold annotation overlays — desktop only */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
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

          {/* Mobile annotations list — visible only on mobile */}
          <div className="lg:hidden px-6 py-5 border-t border-accent/30 space-y-3">
            {annotations.map((annotation) => (
              <div key={annotation.category} className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-accent/80 mt-1.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{annotation.category}</p>
                  <p className="text-[13px] text-foreground/80 mt-0.5">{annotation.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer caption */}
          <div className="px-6 lg:px-8 py-5 border-t border-accent/30">
            <p
              className="text-sm text-accent/80 italic"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The same view, now with meaning. Heritage, geology, ecology — surfaced at the moment of curiosity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
