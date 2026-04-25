import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { Lexend, Playfair_Display, Geist_Mono as V0_Font_Geist_Mono } from 'next/font/google'

// Initialize fonts
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
  title: "The Host Atlas",
  description:
    "An operator-branded, location-aware information capability designed for fixed-route travel. Transforming scenic journeys into strategic guest experiences.",
  openGraph: {
    title: "The Host Atlas — by ThreeSixtyOne",
    description:
      "A new strategic capability for premium travel operators. Transform the silent stretches of every voyage into moments of branded guest engagement.",
    type: "website",
    locale: "en_US",
    siteName: "ThreeSixtyOne",
    images: [
      {
        url: "/hero-coastal-voyage.jpg",
        width: 1200,
        height: 630,
        alt: "The Host Atlas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Host Atlas",
    description:
      "A new strategic capability for premium travel operators.",
    images: ["/hero-coastal-voyage.jpg"],
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}


import './globals.css'