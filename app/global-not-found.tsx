// Renders for paths that match no route at all (the root layout lives inside
// app/[lang], so this must be a complete document). Kept dependency-free and
// inline-styled — it renders without the app's CSS pipeline.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "1.5rem",
          backgroundColor: "#0F1F15",
          color: "#F5F0E8",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(201,169,98,0.75)",
            marginBottom: "1.5rem",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          HostAtlas
        </p>
        <h1 style={{ fontSize: "2.25rem", fontWeight: 500, color: "#C9A962", margin: "0 0 1rem", lineHeight: 1.15 }}>
          This page isn&apos;t available.
        </h1>
        <p style={{ fontSize: "1rem", color: "rgba(245,240,232,0.7)", margin: "0 0 0.5rem", fontFamily: "system-ui, sans-serif" }}>
          このページはご利用いただけません。 · 此页面不可用。
        </p>
        <a
          href="/"
          style={{
            marginTop: "2rem",
            backgroundColor: "#C9A962",
            color: "#1F3528",
            padding: "0.75rem 1.75rem",
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 500,
          }}
        >
          agency.hostatlas.guide
        </a>
      </body>
    </html>
  )
}
