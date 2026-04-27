"use client"

import Image from "next/image"

export function HeroPanel() {
  return (
    <section data-section="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-aerial-landscape.jpg"
          alt="Aerial view of rolling green hills flowing into a winding river meeting the sea at early morning with soft golden light and atmospheric mist"
          fill
          priority
          className="object-cover hero-ken-burns saturate-[0.85]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.20) 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 md:px-16 lg:px-24 pb-[12vh] md:pb-[14vh]">
        <div className="w-full">
          <h1
            className="font-serif font-medium"
            style={{
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              color: "#F4F1EA",
              fontSize: "clamp(2rem, 7vw, 5.5rem)",
            }}
          >
            <span className="block">A Hill is Just a Hill</span>
            <span className="block">Until You Know Its Story.</span>
          </h1>

          <p
            className="font-sans font-medium text-pretty mt-8 md:mt-12 max-w-[42ch]"
            style={{
              fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.94)",
            }}
          >
            The Host Atlas transforms quiet stretches into branded, story-driven experiences that deepen guest engagement and deliver the strategic insight needed to elevate storytelling and drive long-term loyalty.
          </p>

          <p
            className="tagline-reveal font-sans font-medium mt-10 md:mt-14 uppercase"
            style={{
              fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
              letterSpacing: "0.22em",
              color: "rgba(201,169,98,0.9)",
            }}
          >
            {'Curated \u00B7 Branded \u00B7 Hosted \u00B7 Operator-Controlled'}
          </p>
        </div>
      </div>
    </section>
  )
}
