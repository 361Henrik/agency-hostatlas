"use client"

export function OpportunityDefinitionPanel() {
  return (
    <div className="min-h-full w-full flex items-center justify-center px-6 md:px-16 lg:px-20 pt-20 pb-12 panel-green">
      <div className="max-w-[60ch] w-full text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6 font-sans">
          Introducing The Curated Lens
        </p>

        <h3 className="text-4xl tracking-tight md:text-5xl lg:text-6xl text-balance text-foreground mb-6 leading-[1.08]" style={{ fontWeight: 500 }}>
          A New Capability
          <br />
          for Fixed-Route Travel.
        </h3>

        <p className="font-sans text-muted-foreground text-pretty mb-12" style={{ fontSize: "1.1875rem", lineHeight: 1.6 }}>
          An operator-branded, location-aware information capability
          that delivers contextual insight to guests in real time.
          Every stretch of coastline, every valley, every passing
          landmark receives a narrative — curated, branded, and
          available precisely when the guest is looking.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 bg-accent/40" />
          <div className="h-1.5 w-1.5 rotate-45 border border-accent/40" />
          <div className="h-px w-12 bg-accent/40" />
        </div>

        <h3 className="text-xl tracking-tight md:text-2xl text-balance text-foreground mb-6 leading-[1.15]" style={{ fontWeight: 500 }}>
          Transforming the Silent Stretches
        </h3>

        <div className="text-left space-y-5">
          <p className="font-sans text-muted-foreground text-pretty" style={{ fontSize: "1.1875rem", lineHeight: 1.6, fontWeight: 500 }}>
            Between major attractions, guests wonder about the geology
            of a cliff face, the history of a shoreline settlement.
            The Curated Lens fills these gaps calmly and seamlessly.
          </p>
          <p
            className="font-serif text-foreground text-pretty italic"
            style={{ fontSize: "1.1875rem", lineHeight: 1.6 }}
          >
            The silent stretches become your most compelling content.
          </p>
        </div>
      </div>
    </div>
  )
}
