# Host Atlas — Corporate Events Site

## ⚠️ CRITICAL: Deployment Identity

**This repo** (`361Henrik/corporate-hostatlas`) is the **corporate events site**.

| Property | Value |
|----------|-------|
| Live URL | **`corporate.hostatlas.guide`** |
| Vercel project | `corporate-hostatlas` |
| Vercel project ID | `prj_uRxLSVDj8aooFTVMoIYXyusbkKDy` |
| Vercel team | `361projects` (`team_juRCMwpWi5GO5yVPvFNQudPG`) |

**DO NOT** deploy this repo to `prj_Au74vtvYWKQiNkJjNkE2DlrJqAAc` (the travel-operator project).

## ⚠️ CRITICAL: How Deployment Works — Read Before Touching CI

**Vercel's native GitHub integration handles all deployments.**

- Push to `main` → Vercel automatically builds and deploys to production.
- No GitHub Actions workflow is needed. No `VERCEL_TOKEN` secret is needed.
- **NEVER create or restore `.github/workflows/deploy.yml`** (or any Vercel deploy workflow).
  Every time this file has been added, it has caused failures because the required
  `VERCEL_TOKEN` GitHub secret is not configured and should not be.
- If you see a red ✗ in GitHub Actions, check whether a deploy workflow was accidentally
  recreated. The fix is always to delete it — not to add secrets.
- To verify a deploy succeeded, check the Vercel dashboard or `corporate.hostatlas.guide`
  directly. GitHub's green/red badge is irrelevant when no workflow exists.

## Product

Corporate events guest experience app. Audience: event organisers and their guests.
Positioning: "Make the whole visit feel hosted." — a bespoke digital host layer for
senior executives, VIP guests, and international delegations.

Includes:
- Landing page: hero, gap section, guest journey (4 occasions), how it works, Oslo routes,
  for organizers, ROI, what's next, CTA/pilot panel
- Guest app at `/explore` — route selection, POI walking navigation, geolocation
- `lib/oslo-data.ts` — 5 Oslo routes with EN/NO content
- `lib/translations.ts` — EN/NO copy for all landing page sections
- `components/oslo-map.tsx` — react-leaflet map

## The Sister Repo

The **travel-operator marketing site** lives in `361Henrik/hostatlas-web-v2` and deploys to `one.hostatlas.guide`.
These are two completely separate products and must never be merged.
