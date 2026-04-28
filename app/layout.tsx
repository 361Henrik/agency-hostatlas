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
  metadataBase: new URL("https://corporate.hostatlas.guide"),
  title: "The Host Atlas for Corporate Events",
  description:
    "Turn unused event time into branded local discovery. Give your guests a curated, industry-relevant view of the city — combining local highlights with stories that connect to your event and brand.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "The Host Atlas for Corporate Events",
    description:
      "Turn unused event time into branded local discovery. Five curated Oslo routes for the Nordic Finance Summit — map view, live navigation, EN/NO language support.",
    url: "https://corporate.hostatlas.guide",
    type: "website",
    locale: "en_US",
    siteName: "The Host Atlas",
    images: [
      {
        url: "/og-oslo.jpg",
        width: 1200,
        height: 630,
        alt: "The Host Atlas for Corporate Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Host Atlas for Corporate Events",
    description:
      "Turn unused event time into branded local discovery.",
    images: ["/og-oslo.jpg"],
  },
  generator: 'v0.app'
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
