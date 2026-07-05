"use client"

import { Navigation } from "@/components/navigation"
import { HeroPanel } from "@/components/panels/hero-panel"
import { ConfidenceGapPanel } from "@/components/panels/confidence-gap-panel"
import { OpportunityTextPanel } from "@/components/panels/opportunity-text-panel"
import { LofotenRoutesPanel } from "@/components/panels/lofoten-routes-panel"
import { PhotoMomentPanel } from "@/components/panels/photo-moment-panel"
import { MeetingPointPanel } from "@/components/panels/meeting-point-panel"
import { OfflinePanel } from "@/components/panels/offline-panel"
import { LanguagePanel } from "@/components/panels/language-panel"
import { GuideControlPanel } from "@/components/panels/guide-control-panel"
import { ManagedServicePanel } from "@/components/panels/managed-service-panel"
import { StrategicValuePanel } from "@/components/panels/strategic-value-panel"
import { PilotPanel } from "@/components/panels/pilot-panel"

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <HeroPanel />
        <ConfidenceGapPanel />
        <OpportunityTextPanel />
        <LofotenRoutesPanel />
        <PhotoMomentPanel />
        <MeetingPointPanel />
        <OfflinePanel />
        <LanguagePanel />
        <GuideControlPanel />
        <ManagedServicePanel />
        <StrategicValuePanel />
        <PilotPanel />
      </main>
    </>
  )
}
