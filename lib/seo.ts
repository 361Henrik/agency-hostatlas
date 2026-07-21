// Server-only localized site metadata. Deliberately separate from
// lib/translations.ts, which is client-bundled UI copy.

import type { Lang } from "./locale"
import { localizePath } from "./locale"

export const BASE_URL = "https://agency.hostatlas.guide"

export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  ja: "ja_JP",
  zh: "zh_CN",
}

export const siteMeta: Record<Lang, { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  en: {
    title: "HostAtlas for Travel Agencies — Curated Experiences for Premium Group Travel in Norway",
    description:
      "Give your guests the confidence to explore. HostAtlas provides curated, multilingual, time-bound walking experiences for premium Asian group travelers in Norwegian destinations.",
    ogTitle: "HostAtlas for Travel Agencies",
    ogDescription:
      "Give your guests the confidence to explore. Curated, multilingual, offline-ready routes for premium Asian group travelers in Lofoten.",
  },
  ja: {
    title: "HostAtlas 旅行会社向け — ノルウェー・プレミアム団体旅行のための厳選体験",
    description:
      "お客様に、安心して歩き出せる自信を。HostAtlasは、ノルウェーの目的地でプレミアム団体旅行のお客様に、厳選された多言語・時間設計型のウォーキング体験を提供します。",
    ogTitle: "HostAtlas 旅行会社向け",
    ogDescription:
      "お客様に、安心して歩き出せる自信を。ロフォーテンでの厳選された多言語・オフライン対応ルート。",
  },
  zh: {
    title: "HostAtlas 旅行社方案 — 挪威高端团队旅行的精选体验",
    description:
      "让您的客人安心探索。HostAtlas 为挪威目的地的高端团队旅客提供精选、多语言、限时设计的步行体验。",
    ogTitle: "HostAtlas 旅行社方案",
    ogDescription: "让您的客人安心探索。罗弗敦精选多语言、支持离线的路线。",
  },
}

/**
 * Self-referencing canonical + hreflang trio + x-default (EN) for a
 * canonical (unprefixed) path.
 */
export function altLanguages(path: string, lang: Lang) {
  return {
    canonical: BASE_URL + localizePath(path, lang),
    languages: {
      en: BASE_URL + localizePath(path, "en"),
      ja: BASE_URL + localizePath(path, "ja"),
      "zh-Hans": BASE_URL + localizePath(path, "zh"),
      "x-default": BASE_URL + localizePath(path, "en"),
    },
  }
}
