"use client"

const layers = [
  {
    number: "01",
    title: "Curation",
    body: "We research, write, curate and geo-locate narratives for your routes. You approve. We publish directly to the guest platform.",
  },
  {
    number: "02",
    title: "Experience",
    body: "Guests access The Host Atlas via QR and are guided through the quiet stretches of the journey with context delivered in motion.",
  },
  {
    number: "03",
    title: "Insight",
    body: "Engagement is measured in real time. Data reveals what captures attention — and what drives it — across every route.",
  },
]

export function ThreeLayerPanel() {
  return (
    <section
      data-section="concept"
      className="w-full flex flex-col items-center px-6 md:px-12 lg:px-20 py-28 lg:py-36 panel-green"
      style={{ backgroundColor: "#1F3528", color: "#F5F0E8" }}
    >
      {/* Header */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
          System Architecture
        </p>
        <h2
          className="font-serif leading-[1.06] mb-8"
          style={{ color: "#C9A962", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}
        >
          <span className="block">Curated Narratives.</span>
          <span className="block">Transforming the Quiet Passages.</span>
        </h2>

        <div className="space-y-5 max-w-2xl mx-auto text-center">
          <p style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,243,239,0.88)", fontWeight: 500 }} className="font-sans">
            Guests often find themselves looking out between the stops, between the attractions, wondering what they are seeing. The uninterpreted landscape and sights leave guests with questions about what they are seeing.                 
          </p>
          <p style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,243,239,0.82)", fontWeight: 500 }} className="font-sans">
            The Host Atlas resolves this. It turns unanswered questions into context, and long stretches into part of the experience.
          </p>
        </div>

        
      </div>

      {/* Three-column grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 mt-10">
        {layers.map((layer) => (
          <div key={layer.number} className="flex flex-col">
            <span
              className="font-serif font-medium mb-4 md:mb-6"
              style={{
                fontSize: "clamp(48px, 8vw, 96px)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "oklch(0.72 0.10 75)",
              }}
            >
              {layer.number}
            </span>

            <h3 className="font-serif text-[#F5F3EF] leading-[1.15] mb-4" style={{ fontSize: "clamp(1.375rem, 2vw, 1.75rem)", fontWeight: 500 }}>
              {layer.title}
            </h3>

            <p className="font-sans" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,243,239,0.85)", fontWeight: 500 }}>
              {layer.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
