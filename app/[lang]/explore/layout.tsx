import type { ReactNode } from "react"
import { SwRegister } from "@/components/sw-register"

export default function ExploreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SwRegister />
      {children}
    </>
  )
}
