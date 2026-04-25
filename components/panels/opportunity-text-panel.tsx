"use client"

import Image from "next/image"

export function OpportunityTextPanel() {
  return (
    <section data-section="opportunity" className="w-full panel-white py-28 md:py-36" style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}>
      {/* Editorial heading */}
      <div className="flex items-center justify-center px-6 md:px-16 pb-16 lg:pb-20">
        <div className="w-full max-w-5xl text-center">
          <p className="font-sans font-medium uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(196,154,92,1)", fontSize: "0.75rem" }}>
            A Leadership Opportunity
          </p>
          <h2 className="font-serif text-balance mb-8 leading-[1.06]" style={{ color: "#1C2B1E", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            The Landscape Between Stops
            <br />
            Is Strategic Territory
          </h2>
          <p className="font-sans text-pretty mx-auto max-w-[48ch]" style={{ color: "rgba(28,43,30,0.75)", fontSize: "1.1875rem", lineHeight: 1.6 }}>
            Curated narratives bring the silent stretches of the journey to life. By revealing the hidden layers of the landscape, they turn passing moments into meaningful brand experiences your guests will value. The guests get the option to see their chosen narratives in map view or live view, and read or listen to your stories through their chosen lens of discovery. This way the quiet passages come alive.                                                                                                                                                                    
          </p>
        </div>
      </div>

      {/* Composite comparison image */}
      <div className="mx-6 lg:mx-12 xl:mx-16">
        <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "16 / 7" }}>
          <Image
            src="/fjord-comparison.jpg"
            alt="Side-by-side comparison: without The Host Atlas (plain fjord) and with The Host Atlas (fjord with gold pin annotations for Mt. Storehornet, Leirfossen waterfall, Trading post 1752, and Coastal fish trade route)"
            fill
            className="object-contain object-center"
            sizes="100vw"
            style={{ backgroundColor: "#F8F5EE" }}
          />
        </div>
        
      </div>
    </section>
  )
}
