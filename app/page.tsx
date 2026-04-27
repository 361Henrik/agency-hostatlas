"use client"

import { Navigation } from "@/components/navigation"
import { HeroPanel } from "@/components/panels/hero-panel"
import { DeadTimePanel } from "@/components/panels/dead-time-panel"
import { OpportunityTextPanel } from "@/components/panels/opportunity-text-panel"
import { ThreeLayerPanel } from "@/components/panels/three-layer-panel"
import { OsloRoutesPanel } from "@/components/panels/oslo-routes-panel"
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
        <DeadTimePanel />
        <OpportunityTextPanel />
        <ThreeLayerPanel />
        <OsloRoutesPanel />
        <OperatorPanel />
        <StrategicValuePanel />
        <PilotPanel />
        <FooterPanel />
      </main>
    </>
  )
}
