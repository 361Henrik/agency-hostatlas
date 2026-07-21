#!/usr/bin/env node
// One-shot image vendoring: downloads every hotlinked Unsplash photo into
// public/lofoten/ at the widths the site actually uses, so the references in
// lib/lofoten-data.ts and the panels can be flipped to local paths.
//
// Run from any machine with normal network access (the remote dev container's
// network policy blocks images.unsplash.com):
//   node scripts/vendor-images.mjs
//
// Idempotent — existing files are skipped. After running, commit the files in
// public/lofoten/ and update the references (see public/lofoten/CREDITS.md).

import { mkdir, writeFile, access } from "node:fs/promises"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "lofoten")

// name → { id, width } — width matches the largest size the site requests.
const MANIFEST = {
  "hero-lofoten-peaks.jpg":            { id: "photo-1554072453-c8e38bb22ca6", w: 1920 },
  "confidence-gap-harbour-winter.jpg": { id: "photo-1755916265534-7338a85c22c3", w: 1600 },
  "photo-moment-golden-hour.jpg":      { id: "photo-1771683989435-e6b2fb7e3f38", w: 1200 },
  "poi-torget-square.jpg":             { id: "photo-1761237177405-76fd06acc8b5", w: 800 },
  "poi-harbour-light.jpg":             { id: "photo-1761237319657-5d2d43494dc9", w: 800 },
  "poi-svolvaergeita.jpg":             { id: "photo-1506905925346-21bda4d32df4", w: 800 },
  "poi-fishing-heritage.jpg":          { id: "photo-1518998053901-5348d3961a04", w: 800 },
  "poi-drying-racks.jpg":              { id: "photo-1590523741831-ab7e8b8f9c7f", w: 800 },
  "poi-coastal-craft.jpg":             { id: "photo-1565193566173-7a0ee3dbe261", w: 800 },
  "poi-viewpoint.jpg":                 { id: "photo-1558618666-fcd25c85cd64", w: 800 },
}

await mkdir(OUT_DIR, { recursive: true })
let downloaded = 0
let skipped = 0
let failed = 0

for (const [name, { id, w }] of Object.entries(MANIFEST)) {
  const dest = join(OUT_DIR, name)
  try {
    await access(dest)
    skipped++
    continue
  } catch {
    // not present — download
  }
  const url = `https://images.unsplash.com/${id}?w=${w}&q=85&fm=jpg`
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    await writeFile(dest, Buffer.from(await res.arrayBuffer()))
    console.log(`✓ ${name} (${w}w)`)
    downloaded++
  } catch (err) {
    console.error(`✗ ${name}: ${err.message}`)
    failed++
  }
}

console.log(`\ndone: ${downloaded} downloaded, ${skipped} already present, ${failed} failed`)
if (failed > 0) process.exit(1)
