import { NextRequest, NextResponse } from "next/server"

// Locale-prefix normalization for the [lang] route segment.
//   /ja/*, /zh/*  → pass through (segment receives the locale directly)
//   /en/*         → 308 to the unprefixed canonical
//   anything else → internal rewrite to /en/* (URL bar unchanged)
//   legacy ?lang= → 308 to the prefixed path (old QR codes / shared links)
// No Accept-Language auto-redirect by design: it is an SEO hazard and this
// audience picks language explicitly (QR codes can encode /ja/explore).

const PREFIXED_LOCALES = ["ja", "zh"]

export function proxy(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl

  const legacy = searchParams.get("lang")
  if (legacy === "ja" || legacy === "zh" || legacy === "en") {
    const url = req.nextUrl.clone()
    url.searchParams.delete("lang")
    const first = pathname.split("/")[1]
    const bare = PREFIXED_LOCALES.includes(first)
      ? pathname.slice(first.length + 1) || "/"
      : pathname
    url.pathname = legacy === "en" ? bare : `/${legacy}${bare === "/" ? "" : bare}`
    return NextResponse.redirect(url, 308)
  }

  const first = pathname.split("/")[1]
  if (PREFIXED_LOCALES.includes(first)) return NextResponse.next()

  if (first === "en") {
    const url = req.nextUrl.clone()
    url.pathname = pathname.replace(/^\/en(?=\/|$)/, "") || "/"
    return NextResponse.redirect(url, 308)
  }

  const url = req.nextUrl.clone()
  url.pathname = `/en${pathname === "/" ? "" : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Exclude Next internals, the API, and any file-like path (contains a dot:
  // sw.js, icons, images, sitemap.xml, robots.txt...). A gap here would break
  // the service worker or all of EN — extend with care.
  matcher: ["/((?!_next|api/|.*\\..*).*)"],
}
