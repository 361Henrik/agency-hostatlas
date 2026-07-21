// Thin typed wrapper over @vercel/analytics `track` so event names and
// payload shapes are checked at compile time. No PII (names, emails, free
// text) is ever allowed in a payload — only route/lang identifiers and
// booleans/enums.
import { track } from "@vercel/analytics"

type Events = {
  demo_open: { surface: "direct" | "iframe"; lang: string }
  route_start: { route: string; lang: string }
  poi_open: { route: string; poi: string; lang: string }
  meeting_point_toggle: { route: string; shown: boolean }
  language_switch: { from: string; to: string }
  lead_submit: { outcome: "success" | "unavailable" | "invalid" | "error"; lang: string }
  calendly_click: { lang: string }
  mailto_click: { surface: string; lang: string }
  qr_visit: { lang: string }
  offline_ready: { lang: string }
}

export function trackEvent<K extends keyof Events>(name: K, props: Events[K]) {
  try {
    track(name, props)
  } catch {
    // analytics must never break the app
  }
}
