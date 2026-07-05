"use client"

import { Navigation } from "@/components/navigation"
import { HeroPanel } from "@/components/panels/hero-panel"
import { ConfidenceGapPanel } from "@/components/panels/confidence-gap-panel"
import { OpportunityTextPanel } from "@/components/panels/opportunity-text-panel"
import { ThreeLayerPanel } from "@/components/panels/three-layer-panel"
import { LofotenRoutesPanel } from "@/components/panels/lofoten-routes-panel"
import { MeetingPointPanel } from "@/components/panels/meeting-point-panel"
import { OfflinePanel } from "@/components/panels/offline-panel"
import { PhotoMomentPanel } from "@/components/panels/photo-moment-panel"
import { LanguagePanel } from "@/components/panels/language-panel"
import { GuideControlPanel } from "@/components/panels/guide-control-panel"
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
        <ConfidenceGapPanel />
        <OpportunityTextPanel />
        <ThreeLayerPanel />
        <LofotenRoutesPanel />
        <MeetingPointPanel />
        <OfflinePanel />
        <PhotoMomentPanel />
        <LanguagePanel />
        <GuideControlPanel />
        <OperatorPanel />
        <StrategicValuePanel />
        <PilotPanel />
        <FooterPanel />
      </main>
    </>
  )
}
