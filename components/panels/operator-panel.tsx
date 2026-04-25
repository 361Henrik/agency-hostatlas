"use client"

const steps = [
  {
    num: "01",
    title: "Define the Experience",
    lines: ["You select the route.", "You define your tone of voice.", "You choose the categories you want your guests to explore."],
    note: "We work within your strategic framework — not the other way around.",
  },
  {
    num: "02",
    title: "We Build It For You",
    lines: ["In-depth research across your selected categories.", "Every point of interest written in your brand voice.", "Each POI geo-mapped precisely to the route."],
    note: "You receive a fully structured, ready-to-launch experience.",
  },
  {
    num: "03",
    title: "Approve & Launch",
    lines: ["You review. You approve. You launch from your operator dashboard."],
    note: "Guests access the experience via QR code and select the themes they want to follow.",
  },
  {
    num: "04",
    title: "Deliver a Dynamic Guest Experience",
    lines: ["Curated points of interest appear in map view or as a live lens overlay in camera view."],
    note: "Guests engage with what matters to them — in the moment.",
  },
  {
    num: "05",
    title: "Unlock Behavioural Insight",
    lines: ["What guests explore. What they skip. Which themes drive attention."],
    note: "For the first time, the space between ports becomes measurable.",
  },
  {
    num: "06",
    title: "Optimize & Scale",
    lines: ["Refine content. Adjust categories. Enhance future departures.", "Launch new routes using the same streamlined process."],
    note: "Define. Approve. Launch. Measure. Optimize. Relaunch.",
  },
]

export function OperatorPanel() {
  return (
    <section
      data-section="operators"
      className="w-full flex flex-col items-center px-6 md:px-10 lg:px-16 py-28 md:py-36 panel-white"
      style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
    >
      <div className="max-w-6xl w-full">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
            How It Works
          </p>
          <h2 className="font-serif text-balance mb-5 leading-[1.06] text-accent" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            From Curated Narratives to Revenue Insight
          </h2>
          <p className="font-sans max-w-[48ch] mx-auto text-pretty" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.75)" }}>
            The Host Atlas turns your voyages into measurable, branded guest experiences. This is how it works:
          </p>
        </div>

        {/* 6-step grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-accent/10 border border-accent/10">
          {steps.map((step) => (
            <div key={step.num} className="p-6 lg:p-7 bg-card flex flex-col">
              <span className="uppercase tracking-[0.15em] mb-3 font-serif" style={{ fontSize: "2.5rem", color: "#C9A962" }}>
                {step.num}
              </span>
              <h4 className="font-serif mb-2 text-foreground leading-[1.2]" style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                {step.title}
              </h4>
              <div className="mb-3 space-y-1">
                {step.lines.map((line, i) => (
                  <p key={i} className="font-sans" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.78)", fontWeight: i === 0 ? 500 : 400 }}>{line}</p>
                ))}
              </div>
              <p className="font-sans italic mt-auto" style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "rgba(28,43,30,0.6)" }}>
                {step.note}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
