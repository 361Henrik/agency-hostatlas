"use client"

import { Clock, BarChart3, ShieldCheck, Check } from "lucide-react"

const includes = [
  "Route Architecture",
  "Content Creation",
  "Hosted Platform",
  "Operator Control",
  "Engagement Insight",
]

const projectDetails = [
  { icon: ShieldCheck, label: "Defined scope",      detail: "One route, one voyage, full support." },
  { icon: Clock,       label: "6-week activation",  detail: "From sign-off to live guest experience." },
  { icon: BarChart3,   label: "Measurable insight", detail: "Engagement data delivered at conclusion." },
]

export function PilotPanel() {
  return (
    <section
      data-section="contact"
      className="w-full flex flex-col items-center px-6 md:px-10 lg:px-20 py-28 md:py-40"
      style={{ backgroundColor: "#1F3528", color: "#F5F0E8" }}
    >
      {/* Section label */}
      <p className="font-sans font-medium uppercase tracking-[0.25em] text-accent mb-10" style={{ fontSize: "0.75rem" }}>
        A Leadership Opportunity
      </p>

      {/* Main heading */}
      <div className="text-center max-w-[52ch] mx-auto mb-16">
        <h2
          className="font-serif text-balance leading-[1.06] mb-8"
          style={{ color: "#C9A962", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 500 }}
        >
          Curating the Quiet Passages   
        </h2>
        <p className="font-sans text-pretty" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.82)", fontWeight: 500 }}>
          {"The Host Atlas is now available as a defined project  - one route, one voyage, fully supported from start to finish.\n\nIf you operate fixed-route travel,  coastal voyages, river cruises or expedition cruises  The Host Atlas is built for you."}
        </p>
      </div>

      {/* Gold divider */}
      

      {/* Two-column details */}
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">

        {/* Left — includes */}
        <div>
          <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
            Each Project Includes
          </p>
          <div className="grid grid-cols-1 gap-y-3 mb-8">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={2.5} />
                <span className="font-sans" style={{ fontSize: "1.1875rem", color: "rgba(245,240,232,0.8)" }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {projectDetails.map((d) => (
              <div key={d.label} className="flex gap-4 items-start">
                <d.icon className="h-4 w-4 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-sans font-medium" style={{ fontSize: "1.1875rem", color: "rgba(245,240,232,0.9)" }}>{d.label}</p>
                  <p className="font-sans" style={{ fontSize: "1.0625rem", color: "rgba(245,240,232,0.5)" }}>{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — editorial statement + contact */}
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
              Working With Us
            </p>
            <p className="font-sans text-pretty mb-5" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.82)", fontWeight: 500 }}>
              We work directly with route operators and product teams to design and deploy a fully curated, branded experience. without technical overhead or the need for a large internal team.
            </p>
            <p className="font-sans text-pretty" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.65)" }}>
              {""}
            </p>
          </div>

          {/* Contact block */}
          <div
            className="p-7"
            style={{ border: "1px solid rgba(201,169,98,0.35)", backgroundColor: "rgba(255,255,255,0.04)" }}
          >
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-4" style={{ fontSize: "0.75rem" }}>
              Get in Touch
            </p>
            <p className="font-sans mb-5" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.75)" }}>
              Reach us directly to discuss your route, your guests, and how The Host Atlas can serve both.
            </p>
            <a
              href="mailto:connect@hostatlas.guide"
              className="group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-75"
            >
              <span
                className="font-serif italic leading-none"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "#C9A962", fontWeight: 500 }}
              >
                connect@hostatlas.guide
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
