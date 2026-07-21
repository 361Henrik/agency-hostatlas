# Image credits — public/lofoten/

Interim imagery is sourced from Unsplash (unsplash.com/license: free for
commercial use, no permission required, attribution appreciated). The
long-term plan (`TODO(phase-8)` comments in the code) is licensed,
art-directed photography; until then, these are the working assets.

Vendoring: run `node scripts/vendor-images.mjs` from a machine with normal
network access (the remote dev container blocks images.unsplash.com), commit
the downloaded files here, then flip the references in `lib/lofoten-data.ts`
and the hero/confidence-gap/photo-moment panels from `images.unsplash.com/...`
to `/lofoten/<name>` and remove the `images.unsplash.com` remotePattern from
`next.config.mjs`.

| Local file (planned) | Unsplash photo | Used for |
| --- | --- | --- |
| hero-lofoten-peaks.jpg | unsplash.com/photos/1554072453-c8e38bb22ca6 | Hero + Torget POI |
| confidence-gap-harbour-winter.jpg | unsplash.com/photos/1755916265534-7338a85c22c3 | Confidence-gap panel |
| photo-moment-golden-hour.jpg | unsplash.com/photos/1771683989435-e6b2fb7e3f38 | Photo-moment panel + POI |
| poi-torget-square.jpg | unsplash.com/photos/1761237177405-76fd06acc8b5 | Svolvær POIs |
| poi-harbour-light.jpg | unsplash.com/photos/1761237319657-5d2d43494dc9 | Harbour-light POI |
| poi-svolvaergeita.jpg | unsplash.com/photos/1506905925346-21bda4d32df4 | Mountain POIs |
| poi-fishing-heritage.jpg | unsplash.com/photos/1518998053901-5348d3961a04 | Skrei-route POIs |
| poi-drying-racks.jpg | unsplash.com/photos/1590523741831-ab7e8b8f9c7f | Drying-rack POIs |
| poi-coastal-craft.jpg | unsplash.com/photos/1565193566173-7a0ee3dbe261 | Craft-route POIs |
| poi-viewpoint.jpg | unsplash.com/photos/1558618666-fcd25c85cd64 | Viewpoint POIs |

Photographer names: resolve from each photo's Unsplash page when vendoring
(the container cannot reach Unsplash to fetch them) and record them here.
