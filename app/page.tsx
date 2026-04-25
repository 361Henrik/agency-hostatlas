"use client"

import { Navigation } from "@/components/navigation"
import { HeroPanel } from "@/components/panels/hero-panel"
import { ThreeLayerPanel } from "@/components/panels/three-layer-panel"
import { WhatsThatPanel } from "@/components/panels/whats-that-panel"
import { OpportunityTextPanel } from "@/components/panels/opportunity-text-panel"
import { GuestDiscoveryPanel } from "@/components/panels/guest-discovery-panel"
import { OperatorPanel } from "@/components/panels/operator-panel"
import { StrategicValuePanel } from "@/components/panels/strategic-value-panel"
import { PilotPanel } from "@/components/panels/pilot-panel"
import { FooterPanel } from "@/components/panels/footer-panel"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroPanel />
        <WhatsThatPanel />
        <OpportunityTextPanel />
        <ThreeLayerPanel />
        <GuestDiscoveryPanel />
        <OperatorPanel />
        <StrategicValuePanel />
        <PilotPanel />
        <FooterPanel />
      </main>
    </>
  )
}
