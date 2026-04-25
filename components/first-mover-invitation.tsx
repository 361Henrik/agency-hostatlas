"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Clock, BarChart3, ShieldCheck } from "lucide-react"

const pilotDetails = [
  { icon: ShieldCheck, label: "Limited scope", detail: "One route, one voyage, full support." },
  { icon: Clock, label: "6-week activation", detail: "From sign-off to live guest experience." },
  { icon: BarChart3, label: "Measurable insight", detail: "Engagement data delivered at conclusion." },
]

export function PilotSection() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="pilot" className="bg-secondary">
      {/* First-Mover Advantage */}
      <div className="py-24 px-6 border-b border-accent/10">
        <div className="mx-auto max-w-2xl text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-accent/40" />
            <div className="h-1.5 w-1.5 rotate-45 border border-accent/40" />
            <div className="h-px w-10 bg-accent/40" />
          </div>
          <p className="text-[12px] uppercase tracking-[0.3em] font-light text-accent mb-6">
            First-Mover Advantage
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl text-balance text-secondary-foreground mb-6">
            A Leadership Opportunity
          </h2>
          <p className="text-base font-light leading-relaxed text-secondary-foreground/65 max-w-lg mx-auto text-pretty">
            The operators who adopt The Curated Lens first will define
            what location-aware guest engagement looks like for
            premium travel. This is not a competitive feature —
            it is a new category. And the window to shape it is now.
          </p>
        </div>
      </div>

      {/* Pilot Invitation */}
      <div className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            {/* Left — Pilot structure */}
            <div className="reveal">
              <p className="text-[12px] uppercase tracking-[0.3em] font-light text-accent mb-6">
                Structured Pilot Programme
              </p>
              <h3 className="text-2xl font-medium tracking-tight md:text-3xl text-balance text-secondary-foreground mb-5">
                Controlled. Measured.
                <br />
                Insight-Driven.
              </h3>
              <p className="text-base font-light leading-relaxed text-secondary-foreground/60 text-pretty mb-10">
                Each pilot is scoped to a single route with full
                ThreeSixtyOne support. At conclusion, you receive
                a comprehensive engagement report — data that
                informs your strategic decision to expand.
              </p>

              <div className="space-y-5">
                {pilotDetails.map((detail) => (
                  <div key={detail.label} className="flex gap-4 items-start">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-accent/20">
                      <detail.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p
                        className="text-sm font-medium text-secondary-foreground"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {detail.label}
                      </p>
                      <p className="text-sm text-secondary-foreground/50">
                        {detail.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="reveal-fade">
              <div className="border border-accent/20 p-8 md:p-10">
                <p
                  className="text-lg font-medium text-secondary-foreground mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Request a Pilot
                </p>
                <p className="text-sm text-secondary-foreground/45 mb-8">
                  Expressions of interest from premium travel operators.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="pilot-name"
                        className="text-[11px] uppercase tracking-[0.15em] font-light text-secondary-foreground/50"
                      >
                        Name
                      </label>
                      <Input
                        id="pilot-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="bg-white/5 border-accent/15 text-secondary-foreground placeholder:text-secondary-foreground/25 focus:border-accent focus:ring-accent  h-11"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="pilot-email"
                        className="text-[11px] uppercase tracking-[0.15em] font-light text-secondary-foreground/50"
                      >
                        Email
                      </label>
                      <Input
                        id="pilot-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="bg-white/5 border-accent/15 text-secondary-foreground placeholder:text-secondary-foreground/25 focus:border-accent focus:ring-accent  h-11"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="pilot-company"
                        className="text-[11px] uppercase tracking-[0.15em] font-light text-secondary-foreground/50"
                      >
                        Company
                      </label>
                      <Input
                        id="pilot-company"
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Your company name"
                        className="bg-white/5 border-accent/15 text-secondary-foreground placeholder:text-secondary-foreground/25 focus:border-accent focus:ring-accent  h-11"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full border border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground text-[12px] uppercase tracking-[0.18em] py-6 h-auto  font-normal mt-2 transition-all duration-300"
                    >
                      Request a Pilot
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-5 py-6 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="h-px w-6 bg-accent/50" />
                      <div className="h-1.5 w-1.5 rotate-45 border border-accent/50" />
                      <div className="h-px w-6 bg-accent/50" />
                    </div>
                    <h3 className="text-2xl font-medium text-secondary-foreground">
                      Thank you, {name}.
                    </h3>
                    <p className="text-base text-secondary-foreground/60 leading-relaxed text-pretty">
                      We will be in touch shortly to discuss how The Curated Lens
                      could serve your routes and your guests.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
