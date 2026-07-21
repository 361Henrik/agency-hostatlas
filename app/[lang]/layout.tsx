import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import {
  Lexend,
  Playfair_Display,
  Noto_Sans_JP,
  Noto_Serif_JP,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import { LanguageProvider } from "@/lib/language-context"
import { LOCALES, isLang, type Lang } from "@/lib/locale"
import { altLanguages, siteMeta, BASE_URL, OG_LOCALE } from "@/lib/seo"
import { notFound } from "next/navigation"

import "../globals.css"

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-lexend",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

// CJK faces — Playfair/Lexend carry no CJK glyphs, so without these the
// JA/ZH pages fall back to system fonts and lose the premium typography.
// next/font ships unicode-range subsets, so EN visitors download nothing.
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif-jp",
  display: "swap",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto-sans-sc",
  display: "swap",
})

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif-sc",
  display: "swap",
})

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "en"
  const meta = siteMeta[lang]
  return {
    metadataBase: new URL(BASE_URL),
    title: meta.title,
    description: meta.description,
    icons: {
      icon: "/icon.svg",
      apple: "/apple-icon.png",
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: BASE_URL,
      type: "website",
      locale: OG_LOCALE[lang],
      siteName: "HostAtlas",
      images: [
        {
          url: "/og-lofoten.jpg",
          width: 1200,
          height: 630,
          alt: "HostAtlas for Travel Agencies — Lofoten, Norway",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: ["/og-lofoten.jpg"],
    },
  }
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HostAtlas",
  url: BASE_URL,
  email: "connect@hostatlas.guide",
  description:
    "Curated, multilingual, time-bound walking experiences for premium group travel in Norwegian destinations.",
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang: raw } = await params
  if (!isLang(raw)) notFound()
  const lang: Lang = raw

  return (
    <html lang={lang === "zh" ? "zh-Hans" : lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${lexend.variable} ${playfair.variable} ${notoSansJP.variable} ${notoSerifJP.variable} ${notoSansSC.variable} ${notoSerifSC.variable} font-sans antialiased bg-background`}
      >
        <LanguageProvider lang={lang}>
          {children}
          <Toaster />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
