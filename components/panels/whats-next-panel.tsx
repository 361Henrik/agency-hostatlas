"use client"

const cards = [
  {
    phase: "Coming next",
    phaseStyle: "gold",
    title: "Multi-city capability",
    heading: "Oslo to Bergen. Stockholm to Copenhagen. Wherever your guests go next.",
    body: "Some senior guests extend their trip beyond the event city. We're building guide packs for onward destinations — same quality, same host-branded experience, new city.",
    items: [
      "Nordic city guide packs",
      "Onward journey provisioning from event brief",
      "Bergen, Stavanger, Tromsø, Stockholm, Copenhagen",
    ],
  },
  {
    phase: "Coming next",
    phaseStyle: "gold",
    title: "Bespoke narrative stops",
    heading: "Route stops built around your company, your sponsors, your guests' industries.",
    body: "The current product delivers an industry lens. The next layer is specific narrative — stops written around a company history, a sponsor's presence in the city, or the host's own story here.",
    items: [
      "Company-specific narrative stops on any route",
      "Sponsor-branded stop integration",
      "Host company identity woven into the city narrative",
    ],
  },
  {
    phase: "In development",
    phaseStyle: "amber",
    title: "Speed to brief",
    heading: "From event brief to live guest guide — faster with every event.",
    body: "For established clients with a defined industry lens, we're working toward rapid deployment where a new event builds on proven frameworks rather than starting from zero.",
    items: [
      "Reusable route frameworks per industry",
      "Shorter lead times as content library grows",
      "Rapid provisioning for repeat cities and clients",
    ],
  },
  {
    phase: "Exploring",
    phaseStyle: "muted",
    title: "Intelligent guest layer",
    heading: "A guide that knows more the longer it's used.",
    body: "We're exploring an optional conversational layer — allowing guests to ask contextual questions about what they're seeing, and receive a private summary after the event.",
    items: [
      "Contextual Q&A at each point of interest",
      "Private note-saving for the guest",
      "Post-event summary of stops and topics",
      "No data shared without guest consent",
    ],
  },
]

const phaseColors: Record<string, { bg: string; text: string }> = {
  gold:  { bg: "rgba(201,169,98,0.15)", text: "#C9A962" },
  amber: { bg: "rgba(201,169,98,0.08)", text: "rgba(201,169,98,0.65)" },
  muted: { bg: "rgba(245,240,232,0.06)", text: "rgba(245,240,232,0.4)" },
}

export function WhatsNextPanel() {
  return (
    <section
      data-section="whats-next"
      className="w-full px-6 md:px-12 lg:px-20 py-28 md:py-36"
      style={{ backgroundColor: "#162B1E", color: "#F5F0E8" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-sans font-medium uppercase tracking-[0.2em] mb-6" style={{ fontSize: "0.75rem", color: "rgba(201,169,98,0.8)" }}>
            Product direction
          </p>
          <h2 className="font-serif leading-[1.06] mb-8" style={{ color: "#C9A962", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            Where this is going.
          </h2>
          <p className="font-sans text-pretty mx-auto max-w-[54ch]" style={{ fontSize: "1rem", lineHeight: 1.7, color: "rgba(245,240,232,0.55)" }}>
            The current product is focused and intentional. What follows is a transparent view of the capabilities we're building toward — for the clients and use cases where they make sense. Nothing here is a commitment or timeline. Everything here is grounded in real conversations with event teams, travel desks, and senior guests.
          </p>
        </div>

        {/* 4 cards — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
          {cards.map((card) => {
            const pc = phaseColors[card.phaseStyle]
            return (
              <div key={card.title} className="p-8 lg:p-10 flex flex-col gap-4" style={{ backgroundColor: "rgba(31,53,40,0.6)" }}>
                <span
                  className="font-sans font-medium uppercase self-start px-2.5 py-1"
                  style={{ fontSize: "0.625rem", letterSpacing: "0.16em", backgroundColor: pc.bg, color: pc.text, borderRadius: "2px" }}
                >
                  {card.phase}
                </span>

                <p className="font-sans font-medium uppercase tracking-[0.1em]" style={{ fontSize: "0.6875rem", color: "rgba(245,240,232,0.4)" }}>
                  {card.title}
                </p>

                <h3 className="font-serif leading-[1.2]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)", fontWeight: 500, color: "#F5F0E8" }}>
                  {card.heading}
                </h3>

                <p className="font-sans" style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", lineHeight: 1.65, color: "rgba(245,240,232,0.65)" }}>
                  {card.body}
                </p>

                <ul className="space-y-1.5 mt-1">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <span className="shrink-0 mt-[0.35em]" style={{ color: "rgba(201,169,98,0.45)", fontSize: "0.5rem" }}>◆</span>
                      <span className="font-sans" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "rgba(245,240,232,0.5)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Closing callout */}
        <div
          className="mt-px px-8 py-6 flex gap-4 items-start"
          style={{ backgroundColor: "rgba(201,169,98,0.04)", border: "1px solid rgba(201,169,98,0.12)", borderTop: "none" }}
        >
          <span className="shrink-0 mt-0.5" style={{ color: "rgba(201,169,98,0.5)", fontSize: "1rem" }}>→</span>
          <p className="font-sans" style={{ fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)", lineHeight: 1.65, color: "rgba(245,240,232,0.5)" }}>
            We share this because the companies we work with are thinking about more than one event. If any of these directions are relevant to a conversation you're already having internally — that's a good reason to start the conversation with us now.
          </p>
        </div>
      </div>
    </section>
  )
}
