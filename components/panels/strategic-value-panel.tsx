"use client"

const pillars = [
  {
    num: "01",
    title: "Stronger Guest Experience",
    points: [
      "Guests engage with landscape between ports, not just at stops.",
      "Curiosity is met in real time, with curated context.",
      "The experience feels native to the voyage — never intrusive.",
    ],
  },
  {
    num: "02",
    title: "New Strategic Insight",
    points: [
      "Understand what guests engage with, when, where, and for how long.",
      "Behavioural data tied to geography — a dimension operators currently lack.",
      "Smarter decisions about route design and content investment.",
    ],
  },
  {
    num: "03",
    title: "Organic Brand Extension",
    points: [
      "The experience carries your visual identity and narrative style.",
      "Brand presence becomes continuous — not confined to cabin or dock.",
      "Engagement patterns inform how your brand evolves.",
    ],
  },
]

export function StrategicValuePanel() {
  return (
    <section
      data-section="advantage"
      className="w-full flex items-center justify-center px-6 md:px-12 lg:px-20 py-28 md:py-36 panel-green"
      style={{ backgroundColor: "#1F3528", color: "#F5F0E8" }}
    >
      <div className="max-w-6xl w-full">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
            Strategic Value
          </p>
          <h2 className="font-serif text-balance text-foreground mb-5 leading-[1.06]" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            Value for Travel Operators  
          </h2>
          <p className="font-sans max-w-[40ch] mx-auto text-pretty" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.85)", fontWeight: 500 }}>
            {""}
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-7 md:p-9 bg-card flex flex-col">
              <span
                className="font-serif font-medium mb-6 block"
                style={{ fontSize: "2.5rem", color: "#C9A962", letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                {pillar.num}
              </span>
              <h3 className="font-serif mb-4 text-balance text-foreground leading-[1.2]" style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.points.map((point, i) => (
                  <li key={point} className="flex gap-3">
                    <span className="text-accent mt-0.5 shrink-0">{"—"}</span>
                    <p className="font-sans" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.85)", fontWeight: i === 0 ? 500 : 400 }}>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
