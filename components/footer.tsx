"use client"

import { Mail, Linkedin } from "lucide-react"

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="h-px bg-accent/20" />

      <div className="mx-auto max-w-6xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <div
              className="text-xl text-foreground"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ThreeSixtyOne
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The Curated Lens. An operator-branded, location-aware
              capability for fixed-route travel. Transforming the
              silent stretches into strategic guest engagement.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="mailto:hello@threesixtyone.travel"
                className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Email us"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center border border-border text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div className="space-y-5">
            <h3 className="text-[11px] font-light uppercase tracking-[0.2em] text-muted-foreground/60">
              Navigate
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "The Opportunity", href: "#opportunity" },
                { label: "Guest Experience", href: "#guest-experience" },
                { label: "For Operators", href: "#operators" },
                { label: "Strategic Value", href: "#strategic-value" },
                { label: "Request a Pilot", href: "#pilot" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-[11px] font-light uppercase tracking-[0.2em] text-muted-foreground/60">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@threesixtyone.travel"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  hello@threesixtyone.travel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-[11px] text-muted-foreground/50 tracking-wide">
          <p>{"© 2026 ThreeSixtyOne. All rights reserved."}</p>
        </div>
      </div>
    </footer>
  )
}
