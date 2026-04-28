import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"

import { Analytics } from "@vercel/analytics/next"
import { Lexend, Playfair_Display, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'
import { Toaster } from "@/components/ui/sonner"
import { LanguageProvider } from "@/lib/language-context"
import { LangSync } from "@/components/lang-sync"

const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

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

export const metadata: Metadata = {
  metadataBase: new URL("https://agency.hostatlas.guide"),
  title: "HostAtlas for Travel Agencies — Curated Experiences for Premium Group Travel in Norway",
  description:
    "Give your guests the confidence to explore. HostAtlas provides curated, multilingual, time-bound walking experiences for premium Asian group travelers in Norwegian destinations.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "HostAtlas for Travel Agencies",
    description:
      "Give your guests the confidence to explore. Curated, multilingual, offline-ready routes for premium Asian group travelers in Lofoten.",
    url: "https://agency.hostatlas.guide",
    type: "website",
    locale: "en_US",
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
    title: "HostAtlas for Travel Agencies",
    description:
      "Give your guests the confidence to explore.",
    images: ["/og-lofoten.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${lexend.variable} ${playfair.variable} font-sans antialiased bg-background`}>
        <LanguageProvider>
          <Suspense fallback={null}>
            <LangSync />
          </Suspense>
          {children}
          <Toaster />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}

import './globals.css'
