import Link from "next/link"

// On-brand 404 for everything inside a valid locale: bad route ids in the
// guest app and any unknown path (middleware rewrites unprefixed junk to
// /en/*, so all 404s land here). Server component — no language context,
// so all three languages are shown, guest-calm first.
export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#0F1F15", color: "#F5F0E8" }}
    >
      <p
        className="font-sans font-medium uppercase mb-6"
        style={{ fontSize: "0.75rem", letterSpacing: "0.22em", color: "rgba(201,169,98,0.75)" }}
      >
        HostAtlas
      </p>
      <h1
        className="font-serif mb-4"
        style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)", fontWeight: 500, color: "#C9A962", lineHeight: 1.15 }}
      >
        This route isn&apos;t active.
      </h1>
      <p className="font-sans mb-2" style={{ fontSize: "1.0625rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.6 }}>
        このルートは現在ご利用いただけません。 · 此路线当前不可用。
      </p>
      <p className="font-sans mb-10" style={{ fontSize: "0.9375rem", color: "rgba(245,240,232,0.5)", lineHeight: 1.6 }}>
        The page may have moved, or the link may be from an earlier tour.
      </p>
      <Link
        href="/explore"
        className="font-sans font-medium uppercase px-7 py-3 transition-opacity duration-200 hover:opacity-80"
        style={{ backgroundColor: "#C9A962", color: "#1F3528", fontSize: "0.8rem", letterSpacing: "0.12em" }}
      >
        View available routes · ルート一覧 · 查看路线
      </Link>
      <Link
        href="/"
        className="font-sans mt-6 transition-opacity duration-200 hover:opacity-70"
        style={{ fontSize: "0.8125rem", color: "rgba(201,169,98,0.6)", letterSpacing: "0.08em" }}
      >
        agency.hostatlas.guide
      </Link>
    </div>
  )
}
