"use client"

import Image from "next/image"

export function WhatsThatPanel() {
  return (
    <section
      data-section="whats-that"
      className="w-full flex flex-col lg:flex-row"
      style={{ backgroundColor: "#F8F5EE", minHeight: "80vh" }}
    >
      {/* Left — image, fills full height */}
      <div className="relative w-full lg:w-3/5 min-h-[56vw] lg:min-h-0">
        <Image
          src="/whats-that-over-there.jpg"
          alt="Guests on a cruise ship deck pointing at the Norwegian fjord landscape — red cabins, drying racks and snow-capped peaks"
          fill
          className="object-cover"
          style={{ objectPosition: "70% 50%" }}
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />
      </div>

      {/* Right — copy */}
      <div
        className="w-full lg:w-2/5 flex flex-col justify-center px-8 md:px-12 lg:px-14 xl:px-16 py-20 lg:py-28"
        style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
      >
        <p
          className="font-sans font-medium uppercase tracking-[0.2em] mb-6"
          style={{ fontSize: "0.75rem", color: "rgba(196,154,92,1)" }}
        >
          The Guest Perspective
        </p>

        <h2
          className="font-serif text-balance mb-10 leading-[1.06]"
          style={{ fontSize: "clamp(2.25rem, 3.2vw, 3.5rem)", color: "#1C2B1E", fontWeight: 500 }}
        >
          &ldquo;What&rsquo;s that
          <br />
          over there?&rdquo;
        </h2>

        <div className="space-y-5">
          <p
            className="font-sans"
            style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.8)", fontWeight: 500 }}
          >
            Your guests are on deck. The landscape unfolds — vast, striking, often extraordinary. And yet, most of it passes without explanation.
          </p>
          <p
            className="font-sans"
            style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.75)" }}
          >
            Between major stops, 60–80% of most voyages are left unguided. The quiet stretches — where there is only nature, distance, and time — are filled with stories that are never told.
          </p>
          <p
            className="font-sans"
            style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.75)" }}
          >
            The Host Atlas transforms these silent stretches into moments of discovery — where each guest can follow what interests them, at their own pace, in their own language.
          </p>
          <p
            className="font-sans font-medium"
            style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "#1C2B1E" }}
          >
            Without context, even the most remarkable landscape becomes mundane.
          </p>
        </div>

        
      </div>
    </section>
  )
}
