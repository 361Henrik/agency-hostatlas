# agency.hostatlas.guide

The HostAtlas marketing site for premium travel agencies bringing Japanese and Chinese group travelers to Lofoten, Norway. See [CLAUDE.md](./CLAUDE.md) for the full positioning brief.

## Stack

Next.js 16 (App Router, Turbopack) + React 19 + Tailwind 4 + shadcn/ui. Content and copy live in `lib/lofoten-data.ts` (routes/POIs) and `lib/translations.ts` (EN/JA/ZH strings).

## Development

```bash
pnpm install
pnpm dev      # starts on http://localhost:3000
pnpm build    # production build
pnpm lint
```

## Structure

- `app/page.tsx` — the 12-section marketing page, panels in `components/panels/`
- `app/explore/` — the live guest-app demo (embedded inline on the marketing page and linkable directly)
- `lib/lofoten-data.ts` — the five Lofoten route/POI dataset (EN/JA/ZH)
- `lib/translations.ts` — all UI and marketing copy strings (EN/JA/ZH)

## Deployment

Deployed on Vercel from the `main` branch. Set `outputDirectory` explicitly if the Vercel project was ever re-imported (see workspace CLAUDE.md for why).
