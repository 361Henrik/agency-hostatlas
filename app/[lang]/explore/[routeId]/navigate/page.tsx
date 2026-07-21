import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { lofotenRoutes } from "@/lib/lofoten-data"
import NavigateClient from "./navigate-client"

// dynamicParams stays enabled — see ../page.tsx for rationale.
export function generateStaticParams() {
  return lofotenRoutes.map((route) => ({ routeId: route.id }))
}

// Full-screen in-walk view — app-like, no standalone search value.
export const metadata: Metadata = {
  robots: { index: false },
}

export default async function NavigatePage({
  params,
}: {
  params: Promise<{ lang: string; routeId: string }>
}) {
  const { routeId } = await params
  if (!lofotenRoutes.some((r) => r.id === routeId)) notFound()
  return <NavigateClient routeId={routeId} />
}
