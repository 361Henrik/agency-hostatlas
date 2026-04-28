import type { ReactNode } from "react"
import { Suspense } from "react"
import { LangSync } from "@/components/lang-sync"

export default function ExploreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <LangSync />
      </Suspense>
      {children}
    </>
  )
}
