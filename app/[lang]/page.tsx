import type { Metadata } from "next"
import { isLang, type Lang } from "@/lib/locale"
import { altLanguages } from "@/lib/seo"
import PageClient from "./page-client"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "en"
  return { alternates: altLanguages("/", lang) }
}

export default function Page() {
  return <PageClient />
}
