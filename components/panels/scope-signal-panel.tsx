"use client"

import { Check } from "lucide-react"

const scopeItems = [
  "Route Architecture",
  "Curated Content Creation",
  "Hosted Branded Platform",
  "Operator Control",
  "Engagement Insight",
]

export function ScopeSignalPanel() {
  return (
    <div className="h-full w-full flex items-center justify-center px-6 md:px-16 panel-white">
      <div className="max-w-[50ch] w-full text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6 font-sans">
          Scope
        </p>

        <h3 className="text-4xl tracking-tight md:text-5xl lg:text-6xl text-balance text-foreground mb-10 leading-[1.08]" style={{ fontWeight: 500 }}>
          What The Curated Lens Combines
        </h3>

        <div className="space-y-5 text-left max-w-[35ch] mx-auto">
          {scopeItems.map((item) => (
            <div key={item} className="flex items-center gap-5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent/20">
                <Check className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
              </div>
              <span
                className="font-sans text-foreground/80"
                style={{ fontSize: "1.1875rem" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
