"use client"

import Link from "next/link"
import type { ComponentProps } from "react"
import { useLanguage } from "@/lib/language-context"
import { localizePath } from "@/lib/locale"

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  /** Canonical (unprefixed) path — the locale prefix is added automatically. */
  href: string
}

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { lang } = useLanguage()
  return <Link href={localizePath(href, lang)} {...props} />
}
