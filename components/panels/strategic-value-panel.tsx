"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import type { Lang } from "@/lib/language-context"

type L = Record<Lang, string>

const pillars: Array<{ num: string; title: L; points: [L, L, L] }> = [
  {
    num: "01",
    title: {
      en: "Higher Guest Satisfaction Scores",
      ja: "より高いゲスト満足度スコア",
      zh: "更高的客人满意度评分",
    },
    points: [
      {
        en: "Guests who explore Lofoten with confidence return to the group programme more engaged — not anxious or scattered.",
        ja: "自信を持ってロフォーテンを探索したゲストは、不安になることなく、グループプログラムにより積極的に戻ってきます。",
        zh: "充满信心探索罗弗敦的客人回归团体行程时更投入——而不是焦虑或分散。",
      },
      {
        en: "Near-50% Chinese visitor dissatisfaction in Norway is driven by unstructured time. HostAtlas closes that gap directly.",
        ja: "ノルウェーでの中国人訪問者の不満の約50%は非構造的な時間によって引き起こされます。HostAtlasはそのギャップを直接埋めます。",
        zh: "中国游客在挪威近50%的不满意度源于非结构化时间。HostAtlas直接弥补这一差距。",
      },
      {
        en: "A confident guest becomes a peer recommendation. In Chinese travel culture, word-of-mouth is the primary booking driver.",
        ja: "自信のあるゲストはクチコミになります。中国の旅行文化では、口コミが主要な予約動機です。",
        zh: "充满信心的客人会成为口碑推荐者。在中国旅行文化中，口碑是主要的预订驱动力。",
      },
    ],
  },
  {
    num: "02",
    title: {
      en: "Zero Missed Buses. Zero Operational Risk.",
      ja: "バスの乗り遅れゼロ。運営リスクゼロ。",
      zh: "零误车。零运营风险。",
    },
    points: [
      {
        en: "Every route includes a departure countdown and real-time return navigation to the group meeting point.",
        ja: "すべてのルートには出発カウントダウンとグループ集合点へのリアルタイム帰還ナビゲーションが含まれています。",
        zh: "每条路线都包含出发倒计时和实时返回团体集合点的导航。",
      },
      {
        en: "The guide controls which routes are visible. Guests cannot activate content for the wrong stop or the wrong day.",
        ja: "ガイドはどのルートが見えるかを制御します。ゲストは間違った停留地や間違った日のコンテンツをアクティベートできません。",
        zh: "导游控制哪些路线可见。客人无法激活错误站点或错误日期的内容。",
      },
      {
        en: "Offline-first architecture means the tool works in Lofoten's connectivity dead zones — exactly where it's needed most.",
        ja: "オフラインファーストのアーキテクチャにより、ロフォーテンの接続のないゾーンでもツールが機能します — まさに最も必要な場所で。",
        zh: "离线优先架构意味着该工具在罗弗敦的无网络区域同样有效——正是最需要的地方。",
      },
    ],
  },
  {
    num: "03",
    title: {
      en: "A Destination Beyond Three Spots",
      ja: "3つのスポットを超えた目的地",
      zh: "超越三个景点的目的地",
    },
    points: [
      {
        en: "Without HostAtlas, premium guests spend free time at 2–3 well-known spots. With it, they experience the depth that justifies the premium price.",
        ja: "HostAtlasなしでは、プレミアムゲストは2〜3の有名スポットで自由時間を過ごします。HostAtlasがあれば、プレミアム価格を正当化する深みを体験します。",
        zh: "没有HostAtlas，高端客人将在2至3个知名景点度过自由时间。有了它，他们能体验到证明高端价格合理的深度。",
      },
      {
        en: "Photography viewpoints, cultural moments, and golden hour timing — built into every route, delivered in the guest's language.",
        ja: "フォトポイント、文化的な瞬間、ゴールデンアワーのタイミング — すべてのルートに組み込まれ、ゲストの言語で提供されます。",
        zh: "摄影观景点、文化时刻和黄金时段时机——融入每条路线，以客人的语言呈现。",
      },
      {
        en: "Post-departure engagement data shows which routes were walked, which stops captured attention, and how guests used their time.",
        ja: "出発後のエンゲージメントデータは、どのルートが歩かれたか、どの停留地が注目を集めたか、ゲストがどのように時間を使ったかを示します。",
        zh: "出发后的参与度数据显示哪些路线被行走、哪些停留点引发关注，以及客人如何使用他们的时间。",
      },
    ],
  },
]

export function StrategicValuePanel() {
  const { t, lang } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)

  // One-time trigger for the pillar stagger-reveal + bronze underline draw.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="why-hostatlas"
      className="w-full flex items-center justify-center px-6 md:px-12 lg:px-20 py-28 md:py-36 panel-green"
      style={{ backgroundColor: "#1F3528", color: "#F5F0E8" }}
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-balance text-foreground mb-6 leading-[1.06]" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            {t("strategic_heading")}
          </h2>
          <p className="font-sans text-pretty mx-auto max-w-[52ch]" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,240,232,0.72)", fontWeight: 500 }}>
            {t("strategic_intro")}
          </p>
        </div>

        {/* Three pillars — stagger-reveal, each draws a bronze underline under numeral + title */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border reveal-stagger">
          {pillars.map((pillar, idx) => (
            <div key={pillar.num} className="p-7 md:p-9 bg-card flex flex-col reveal">
              <div
                className="inline-block mb-6 self-start"
                style={{
                  backgroundImage: "linear-gradient(#c9a962, #c9a962)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0 100%",
                  backgroundSize: revealed ? "100% 2px" : "0% 2px",
                  transition: `background-size 700ms ease-out ${200 + idx * 200}ms`,
                  paddingBottom: "0.75rem",
                }}
              >
                <span
                  className="font-serif font-medium block"
                  style={{ fontSize: "2.5rem", color: "#C9A962", letterSpacing: "-0.02em", lineHeight: 1 }}
                >
                  {pillar.num}
                </span>
                <h3 className="font-serif mt-3 text-balance text-foreground leading-[1.2]" style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                  {pillar.title[lang]}
                </h3>
              </div>
              <ul className="space-y-3">
                {pillar.points.map((point, i) => (
                  <li key={point.en} className="flex gap-3">
                    <span className="text-accent mt-0.5 shrink-0">{"—"}</span>
                    <p className="font-sans" style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "rgba(245,240,232,0.85)", fontWeight: i === 0 ? 500 : 400 }}>{point[lang]}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
