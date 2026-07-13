import type { ReactNode } from "react"
import { Suspense } from "react"
import { LangSync } from "@/components/lang-sync"
import { SwRegister } from "@/components/sw-register"

export default function ExploreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <LangSync />
      </Suspense>
      <SwRegister />
      {children}
    </>
  )
}
