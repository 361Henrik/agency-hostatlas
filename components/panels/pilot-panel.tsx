"use client"

import { Clock, BarChart3, ShieldCheck, Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const includes = [
  "Route Research & Content Creation",
  "Industry Lens Curation",
  "Hosted Guest Platform",
  "QR / SMS / Email Deployment",
  "Engagement Report",
]

const projectDetails = [
  { icon: ShieldCheck, label: "Defined scope",     detail: "One event city, one industry lens, full support." },
  { icon: Clock,       label: "48-hour setup",     detail: "From sign-off to live guest experience." },
  { icon: BarChart3,   label: "Post-event insight", detail: "Engagement data delivered after the event." },
]

export function PilotPanel() {
  const { t } = useLanguage()

  return (
    <section
      data-section="contact"
      className="w-full flex flex-col items-center px-6 md:px-10 lg:px-20 py-28 md:py-40"
      style={{ backgroundColor: "#1F3528", color: "#F5F0E8" }}
    >
      {/* Section label */}
      <p className="font-sans font-medium uppercase tracking-[0.25em] text-accent mb-10" style={{ fontSize: "0.75rem" }}>
        {t("pilot_eyebrow")}
      </p>

      {/* Main heading */}
      <div className="text-center max-w-[52ch] mx-auto mb-16">
        <h2
          className="font-serif text-balance leading-[1.06] mb-8"
          style={{ color: "#C9A962", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 500 }}
        >
          {t("pilot_heading")}
        </h2>
        <p className="font-sans text-pretty" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.82)", fontWeight: 500 }}>
          {t("pilot_body")}
        </p>
      </div>

      {/* Two-column details */}
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
        {/* Left — includes */}
        <div>
          <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
            {t("pilot_includes_label")}
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

        {/* Right — working with us + contact */}
        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
              {t("pilot_working_label")}
            </p>
            <p className="font-sans text-pretty mb-5" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.82)", fontWeight: 500 }}>
              {t("pilot_working_body")}
            </p>
          </div>

          {/* Contact block */}
          <div
            className="p-7"
            style={{ border: "1px solid rgba(201,169,98,0.35)", backgroundColor: "rgba(255,255,255,0.04)" }}
          >
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-4" style={{ fontSize: "0.75rem" }}>
              {t("pilot_contact_label")}
            </p>
            <p className="font-sans mb-5" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.75)" }}>
              {t("pilot_contact_body")}
            </p>
            <a
              href="mailto:connect@hostatlas.guide?subject=Request%20a%20Conversation%20%E2%80%94%20The%20Host%20Atlas"
              className="inline-flex items-center justify-center w-full font-sans font-medium uppercase tracking-[0.12em] transition-all duration-300"
              style={{
                fontSize: "0.8125rem",
                color: "#1F3528",
                backgroundColor: "#C9A962",
                padding: "1rem 2rem",
                letterSpacing: "0.12em",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#b8944f" }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C9A962" }}
            >
              Request a Conversation
            </a>
            <p
              className="font-sans mt-4 text-center"
              style={{ fontSize: "0.875rem", color: "rgba(245,240,232,0.4)" }}
            >
              or email{" "}
              <a
                href="mailto:connect@hostatlas.guide"
                className="transition-opacity hover:opacity-75"
                style={{ color: "rgba(201,169,98,0.7)" }}
              >
                connect@hostatlas.guide
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
