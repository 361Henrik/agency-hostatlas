import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { lofotenRoutes } from "@/lib/lofoten-data"
import { isLang, type Lang } from "@/lib/locale"
import { altLanguages } from "@/lib/seo"
import RouteDetailClient from "./route-detail-client"

// dynamicParams stays enabled so an unknown routeId reaches the explicit
// notFound() below and gets the styled [lang]/not-found boundary instead of
// the bare router-level 404.
export function generateStaticParams() {
  return lofotenRoutes.map((route) => ({ routeId: route.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; routeId: string }>
}): Promise<Metadata> {
  const { lang: raw, routeId } = await params
  const lang: Lang = isLang(raw) ? raw : "en"
  const route = lofotenRoutes.find((r) => r.id === routeId)
  if (!route) return {}
  return {
    title: `${route.title[lang]} — HostAtlas`,
    description: route.summary[lang],
    alternates: altLanguages(`/explore/${routeId}`, lang),
  }
}

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ lang: string; routeId: string }>
}) {
  const { routeId } = await params
  if (!lofotenRoutes.some((r) => r.id === routeId)) notFound()
  return <RouteDetailClient routeId={routeId} />
}
