import type { Metadata } from "next"
import Link from "next/link"
import { isLang, localizePath, type Lang } from "@/lib/locale"
import { altLanguages } from "@/lib/seo"

type PrivacyContent = {
  title: string
  intro: string
  collectHeading: string
  collectBody: string
  notCollectHeading: string
  notCollectBody: string
  noAdsHeading: string
  noAdsBody: string
  gdprHeading: string
  gdprBody: string
  contactLabel: string
  back: string
}

const content: Record<Lang, PrivacyContent> = {
  en: {
    title: "Privacy",
    intro:
      "This page explains what HostAtlas collects, what it deliberately does not collect, and how to reach us with any question or request.",
    collectHeading: "What we collect",
    collectBody:
      "When an agency submits an enquiry form on this site, we store the details provided — name, work email, agency, market, group size, departure window, and message — with Supabase, hosted in the EU region. This is used solely to respond to the enquiry. We also use anonymized, cookie-free page analytics (Vercel Analytics) to understand how the site is used, without identifying individual visitors.",
    notCollectHeading: "What we do not collect",
    notCollectBody:
      "The guest experience requests location and camera permissions during a route. Both are processed entirely on the guest's own device — to show their position on the map and to power the live view — and are never transmitted, stored, or logged by HostAtlas.",
    noAdsHeading: "No advertising trackers",
    noAdsBody:
      "HostAtlas runs no advertising trackers, sells no data, and shares no information with third parties for marketing purposes.",
    gdprHeading: "Your rights (GDPR)",
    gdprBody:
      "Our legal basis for processing enquiry data is legitimate interest in responding to business enquiries. To request access to or erasure of your data, contact us at connect@hostatlas.guide.",
    contactLabel: "The Host Atlas · connect@hostatlas.guide",
    back: "Back to home",
  },
  ja: {
    title: "プライバシー",
    intro:
      "本ページでは、HostAtlasが収集する情報、意図的に収集しない情報、およびご質問・ご依頼の際の連絡先についてご説明します。",
    collectHeading: "収集する情報",
    collectBody:
      "本サイトのお問い合わせフォームをご送信いただいた際、ご提供いただいた情報 — お名前、業務用メールアドレス、旅行会社名、市場、団体人数、出発予定時期、メッセージ — をEUリージョンでホストされるSupabaseに保存します。これはお問い合わせへの返信のみを目的として使用されます。また、匿名かつCookieを使用しないページ解析（Vercel Analytics）により、個々の訪問者を特定することなくサイトの利用状況を把握しています。",
    notCollectHeading: "収集しない情報",
    notCollectBody:
      "ゲスト向け体験では、ルート利用中に位置情報とカメラへのアクセス許可を求めることがあります。いずれもゲストご本人の端末内でのみ処理され — 地図上の現在地表示およびライブビュー機能のために使用されます — HostAtlasへ送信、保存、記録されることは一切ありません。",
    noAdsHeading: "広告トラッカーなし",
    noAdsBody: "HostAtlasは広告トラッカーを一切使用せず、データを販売せず、マーケティング目的で第三者と情報を共有することもありません。",
    gdprHeading: "お客様の権利（GDPR）",
    gdprBody:
      "お問い合わせデータの処理における法的根拠は、業務上のお問い合わせへの対応という正当な利益です。データへのアクセスまたは削除をご希望の場合は、connect@hostatlas.guideまでご連絡ください。",
    contactLabel: "The Host Atlas · connect@hostatlas.guide",
    back: "ホームに戻る",
  },
  zh: {
    title: "隐私",
    intro: "本页说明 HostAtlas 会收集哪些信息、有意不收集哪些信息，以及如有任何问题或请求应如何联系我们。",
    collectHeading: "我们收集的信息",
    collectBody:
      "当旅行社通过本网站提交咨询表单时，我们会将所提供的信息 — 姓名、工作邮箱、旅行社名称、市场、团队人数、出发时间窗口及留言 — 存储于托管在欧盟区域的 Supabase 中，仅用于回复该咨询。我们还使用匿名、不使用 Cookie 的页面分析工具（Vercel Analytics）来了解网站的使用情况，不会识别具体访问者身份。",
    notCollectHeading: "我们不会收集的信息",
    notCollectBody:
      "客人体验在路线使用过程中会请求位置和相机权限。这两项权限均完全在客人自己的设备上处理 — 用于在地图上显示其位置以及支持实时视图功能 — HostAtlas 绝不会传输、存储或记录这些数据。",
    noAdsHeading: "无广告追踪",
    noAdsBody: "HostAtlas 不使用任何广告追踪器，不出售数据，也不会出于营销目的与第三方共享信息。",
    gdprHeading: "您的权利（GDPR）",
    gdprBody:
      "我们处理咨询数据的法律依据是回应商业咨询的正当利益。如需申请访问或删除您的数据，请联系 connect@hostatlas.guide。",
    contactLabel: "The Host Atlas · connect@hostatlas.guide",
    back: "返回首页",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "en"
  const c = content[lang]
  return {
    title: `${c.title} — HostAtlas`,
    description: c.intro,
    alternates: altLanguages("/privacy", lang),
    robots: { index: true, follow: true },
  }
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "en"
  const c = content[lang]
  const homeHref = localizePath("/", lang)

  return (
    <main style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E", minHeight: "100vh" }}>
      <div className="w-full max-w-2xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <Link
          href={homeHref}
          className="font-sans font-medium uppercase inline-block mb-12 transition-opacity duration-200 hover:opacity-70"
          style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "rgba(28,43,30,0.55)" }}
        >
          ← {c.back}
        </Link>

        <h1
          className="font-serif mb-8"
          style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 500, color: "#1C2B1E", lineHeight: 1.15 }}
        >
          {c.title}
        </h1>

        <p className="font-sans mb-14" style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "rgba(28,43,30,0.75)" }}>
          {c.intro}
        </p>

        <section className="mb-10">
          <h2 className="font-serif mb-4" style={{ fontSize: "1.375rem", fontWeight: 500, color: "#1C2B1E" }}>
            {c.collectHeading}
          </h2>
          <p className="font-sans" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(28,43,30,0.72)" }}>
            {c.collectBody}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif mb-4" style={{ fontSize: "1.375rem", fontWeight: 500, color: "#1C2B1E" }}>
            {c.notCollectHeading}
          </h2>
          <p className="font-sans" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(28,43,30,0.72)" }}>
            {c.notCollectBody}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif mb-4" style={{ fontSize: "1.375rem", fontWeight: 500, color: "#1C2B1E" }}>
            {c.noAdsHeading}
          </h2>
          <p className="font-sans" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(28,43,30,0.72)" }}>
            {c.noAdsBody}
          </p>
        </section>

        <section className="mb-16">
          <h2 className="font-serif mb-4" style={{ fontSize: "1.375rem", fontWeight: 500, color: "#1C2B1E" }}>
            {c.gdprHeading}
          </h2>
          <p className="font-sans" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(28,43,30,0.72)" }}>
            {c.gdprBody}
          </p>
        </section>

        <div className="pt-8" style={{ borderTop: "1px solid rgba(28,43,30,0.15)" }}>
          <p className="font-sans" style={{ fontSize: "0.875rem", color: "rgba(28,43,30,0.55)", letterSpacing: "0.02em" }}>
            {c.contactLabel}
          </p>
        </div>
      </div>
    </main>
  )
}
