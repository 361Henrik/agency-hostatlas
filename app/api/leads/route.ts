import { NextResponse } from "next/server"
import { z } from "zod"

// Lead capture endpoint. Inserts into Supabase `leads` via PostgREST with a
// raw fetch (no supabase-js dependency). Build must never break on missing env.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const leadSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  agency: z.string().min(1).max(200),
  market: z.enum(["ja", "zh", "other"]),
  group_size: z.string().max(100).optional(),
  next_departure_window: z.string().max(200).optional(),
  message: z.string().max(4000).optional(),
  source_lang: z.enum(["en", "ja", "zh"]).default("en"),
})

const SUPABASE_URL =
  process.env.SUPABASE_URL ?? "https://pefncfuzdtooaaguyqlt.supabase.co"

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "validation" }, { status: 400 })
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "validation" }, { status: 400 })
  }

  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!key) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 })
  }

  let res: Response
  try {
    res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(parsed.data),
    })
  } catch {
    return NextResponse.json({ error: "upstream" }, { status: 502 })
  }

  if (!res.ok) {
    // Do not leak the upstream body.
    return NextResponse.json({ error: "upstream" }, { status: 502 })
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
