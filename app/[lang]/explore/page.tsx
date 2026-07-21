import type { Metadata } from "next"
import { isLang, type Lang } from "@/lib/locale"
import { altLanguages } from "@/lib/seo"
import ExploreClient from "./explore-client"

const exploreMeta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Explore Lofoten — HostAtlas Guest Experience",
    description:
      "Five curated, time-bound walking routes in Svolvær — multilingual, offline-ready, with meeting-point return built in.",
  },
  ja: {
    title: "ロフォーテンを歩く — HostAtlas ゲスト体験",
    description:
      "スヴォルヴェールの厳選された時間設計型ウォーキングルート5本 — 多言語・オフライン対応、ミーティングポイントへの帰還案内つき。",
  },
  zh: {
    title: "漫步罗弗敦 — HostAtlas 客人体验",
    description: "斯沃尔韦尔五条精选限时步行路线 — 多语言、支持离线，内置集合点返回指引。",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "en"
  return {
    title: exploreMeta[lang].title,
    description: exploreMeta[lang].description,
    alternates: altLanguages("/explore", lang),
  }
}

export default function ExplorePage() {
  return <ExploreClient />
}
