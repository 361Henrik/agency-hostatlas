# Host Atlas — Corporate Events Site

## ⚠️ CRITICAL: Deployment Identity

**This repo** (`361Henrik/corporate-hostatlas`) is the **corporate events site**.

| Property | Value |
|----------|-------|
| Live URL | **`corporate.hostatlas.guide`** |
| Vercel project | `corporate-hostatlas` |
| Vercel project ID | `prj_uRxLSVDj8aooFTVMoIYXyusbkKDy` |
| Vercel team | `361projects` (`team_juRCMwpWi5GO5yVPvFNQudPG`) |
| GitHub Actions secret `VERCEL_PROJECT_ID` | `prj_uRxLSVDj8aooFTVMoIYXyusbkKDy` |

**DO NOT** deploy this repo to `prj_Au74vtvYWKQiNkJjNkE2DlrJqAAc` (the travel-operator project).
**DO NOT** change `VERCEL_PROJECT_ID` to anything other than `prj_uRxLSVDj8aooFTVMoIYXyusbkKDy`.

## Product

Corporate events guest experience app. Audience: event planners and their guests.
Hero: "Dead Time Between Sessions Is a Missed Opportunity."

Includes:
- Landing page with Oslo routes panel
- Guest app at `/explore` — route selection, POI walking navigation, geolocation
- `lib/oslo-data.ts` — 5 Oslo routes with EN/NO content
- `components/oslo-map.tsx` — react-leaflet map

## The Sister Repo

The **travel-operator marketing site** lives in `361Henrik/hostatlas-web-v2` and deploys to `one.hostatlas.guide`.
These are two completely separate products and must never be merged.
