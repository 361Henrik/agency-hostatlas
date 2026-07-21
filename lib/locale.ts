// URL-locale helpers. EN lives unprefixed (/, /explore/...); ja and zh get
// path prefixes (/ja/..., /zh/...). The [lang] route segment receives the
// locale via middleware rewrite for EN and directly for ja/zh.

export const LOCALES = ["en", "ja", "zh"] as const
export type Lang = (typeof LOCALES)[number]

export function isLang(value: string | null | undefined): value is Lang {
  return value === "en" || value === "ja" || value === "zh"
}

/** Prefix a canonical (unprefixed) path for the given locale. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === "" ? "/" : path
  if (lang === "en") return clean
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`
}

/** Split a URL pathname into its locale and canonical (unprefixed) path. */
export function stripLocale(pathname: string): { lang: Lang; path: string } {
  const first = pathname.split("/")[1]
  if (first === "ja" || first === "zh") {
    const rest = pathname.slice(first.length + 1)
    return { lang: first, path: rest === "" ? "/" : rest }
  }
  return { lang: "en", path: pathname === "" ? "/" : pathname }
}
