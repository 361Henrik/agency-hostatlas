"use client"

import { useLanguage } from "@/lib/language-context"
import type { Lang } from "@/lib/language-context"

type L = Record<Lang, string>

const occasions: Array<{ num: string; when: L; heading: L; body: L; examples: [L, L, L] }> = [
  {
    num: "01",
    when: {
      en: "Arrival evening",
      ja: "到着の夜",
      zh: "抵达当晚",
    },
    heading: {
      en: "First hours in Lofoten. Orientation. Confidence from the start.",
      ja: "ロフォーテン最初の数時間。オリエンテーション。最初から自信を。",
      zh: "抵达罗弗敦的最初几小时。定向。从一开始建立信心。",
    },
    body: {
      en: "Guests arrive fatigued from long-haul travel. A short, guided-freedom walk near the hotel tells them: this place is navigable, this is safe, there is something worth seeing. It sets the emotional tone for the entire stay.",
      ja: "長距離移動で疲れたゲストが到着します。ホテル近くの短い自由ウォーキングが伝えること：この場所は歩けます、安全です、見る価値があります。滞在全体の感情的なトーンが設定されます。",
      zh: "客人经过长途飞行后疲惫抵达。酒店附近一段简短的引导式自由漫步传递出：这个地方可以探索、这里很安全、有值得一看的风景。这为整个行程奠定了情感基调。",
    },
    examples: [
      {
        en: "30-minute orientation walk from the hotel",
        ja: "ホテルからの30分オリエンテーションウォーク",
        zh: "从酒店出发的30分钟定向步行",
      },
      {
        en: "Meeting point logic active from day one",
        ja: "初日から集合点ロジックが有効",
        zh: "第一天起集合点逻辑即激活",
      },
      {
        en: "Guests understand the destination before the first full day",
        ja: "最初のフルデイの前に目的地を理解",
        zh: "在第一个完整行程日前了解目的地",
      },
    ],
  },
  {
    num: "02",
    when: {
      en: "Mid-tour free time",
      ja: "ツアー中の自由時間",
      zh: "旅途中的自由时间",
    },
    heading: {
      en: "Bus drops at 16:00. Dinner at 19:30. The gap is the product.",
      ja: "バスは16:00に到着。夕食は19:30。そのギャップがプロダクトです。",
      zh: "大巴16:00抵达。晚餐19:30。这段空隙就是产品所在。",
    },
    body: {
      en: "This is the window where guests either explore Lofoten with confidence — or cluster near the bus and photograph the same three spots. HostAtlas gives them a structured path into the destination, in their language, with a countdown back to the meeting point.",
      ja: "このウィンドウで、ゲストはロフォーテンを自信を持って探索するか、バスの近くに集まって同じ3つのスポットを撮影するかのどちらかです。HostAtlasは彼らの言語で、集合点へのカウントダウンと共に、目的地への構造化されたルートを提供します。",
      zh: "在这段时间里，客人要么充满信心地探索罗弗敦，要么聚集在大巴附近拍摄相同的三处景点。HostAtlas以他们的语言提供通往目的地的结构化路径，并附带返回集合点的倒计时。",
    },
    examples: [
      {
        en: "60–90 minute route with departure countdown",
        ja: "出発カウントダウン付き60〜90分ルート",
        zh: "附带出发倒计时的60至90分钟路线",
      },
      {
        en: "Photography viewpoints and golden hour timing built in",
        ja: "フォトポイントとゴールデンアワーのタイミングが組み込まれています",
        zh: "内置摄影观景点和黄金时段时机",
      },
      {
        en: "No guest misses the bus — return logic is always active",
        ja: "バスに乗り遅れるゲストはいません — 帰還ロジックは常に有効",
        zh: "没有客人错过大巴——返回逻辑始终有效",
      },
    ],
  },
  {
    num: "03",
    when: {
      en: "Departure morning",
      ja: "出発の朝",
      zh: "出发当天早晨",
    },
    heading: {
      en: "Last morning in Lofoten. One final route. A lasting impression.",
      ja: "ロフォーテン最後の朝。最後の一つのルート。永続的な印象。",
      zh: "在罗弗敦的最后早晨。最后一条路线。留下持久印象。",
    },
    body: {
      en: "The last experience is the most remembered. A calm, short walk before the coach departs — with the light quality Lofoten is famous for — closes the trip on a high. Word-of-mouth returns to the agency.",
      ja: "最後の体験は最も記憶に残ります。コーチが出発する前の穏やかな短いウォーキング — ロフォーテンが有名な光の質と共に — 旅を高い音符で締めくくります。口コミは旅行会社に戻ってきます。",
      zh: "最后的体验是最被铭记的。在大巴出发前进行平静短暂的步行——伴随着罗弗敦著名的光线质感——让旅程以高点收尾。口碑回馈给旅行社。",
    },
    examples: [
      {
        en: "30-minute route before coach departure",
        ja: "コーチ出発前の30分ルート",
        zh: "大巴出发前的30分钟路线",
      },
      {
        en: "Weather-safe option always available as backup",
        ja: "バックアップとして常に天候対応オプションが利用可能",
        zh: "天气安全备选方案始终可用作备份",
      },
      {
        en: "Photography moment timed to departure-morning light",
        ja: "出発の朝の光に合わせたフォトモーメント",
        zh: "摄影时机与出发早晨的光线完美配合",
      },
    ],
  },
  {
    num: "04",
    when: {
      en: "Multi-stop itineraries",
      ja: "複数停留地の旅程",
      zh: "多站行程",
    },
    heading: {
      en: "Ålesund today. Flåm tomorrow. One platform, each destination.",
      ja: "今日はオーレスン。明日はフロム。一つのプラットフォーム、各目的地。",
      zh: "今天奥勒松。明天弗洛姆。同一平台，每个目的地。",
    },
    body: {
      en: "Premium Norway tours visit multiple destinations. HostAtlas routes are configured per destination and activated by the guide on the day. Guests carry one QR code. The experience adapts to wherever they are.",
      ja: "プレミアムノルウェーツアーは複数の目的地を訪れます。HostAtlasのルートは目的地ごとに設定され、当日ガイドによってアクティベートされます。ゲストは1つのQRコードを持ちます。体験は彼らがいる場所に適応します。",
      zh: "高端挪威游览多个目的地。HostAtlas路线按目的地配置，由导游在当天激活。客人只需携带一个二维码。体验随所在地点而适应调整。",
    },
    examples: [
      {
        en: "One QR code covers all destinations in the itinerary",
        ja: "1つのQRコードが旅程のすべての目的地をカバー",
        zh: "一个二维码覆盖行程中的所有目的地",
      },
      {
        en: "Guide activates the relevant destination on arrival",
        ja: "ガイドが到着時に関連する目的地をアクティベート",
        zh: "导游到达时激活相关目的地",
      },
      {
        en: "Each destination configured to its specific free-time windows",
        ja: "各目的地がその特定の自由時間ウィンドウに合わせて設定",
        zh: "每个目的地根据其特定的自由时间窗口配置",
      },
    ],
  },
]

export function OpportunityTextPanel() {
  const { t, lang } = useLanguage()

  return (
    <section data-section="opportunity" className="w-full panel-white py-28 md:py-36" style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}>
      {/* Editorial heading */}
      <div className="flex items-center justify-center px-6 md:px-16 pb-16 lg:pb-20">
        <div className="w-full max-w-5xl text-center">
          <p className="font-sans font-medium uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(196,154,92,1)", fontSize: "0.75rem" }}>
            {t("opportunity_eyebrow")}
          </p>
          <h2 className="font-serif text-balance mb-8 leading-[1.06]" style={{ color: "#1C2B1E", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
            {t("opportunity_heading_line1")}
            <br />
            {t("opportunity_heading_line2")}
          </h2>
          <p className="font-sans text-pretty mx-auto max-w-[52ch]" style={{ color: "rgba(28,43,30,0.75)", fontSize: "1.1875rem", lineHeight: 1.6 }}>
            {t("opportunity_body")}
          </p>
        </div>
      </div>

      {/* 4 occasion cards — 2x2 grid */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-accent/10 border border-accent/10">
          {occasions.map((occ) => (
            <div key={occ.num} className="p-8 lg:p-10 bg-card flex flex-col gap-4">
              <div className="flex items-baseline gap-4">
                <span
                  className="font-serif font-medium shrink-0"
                  style={{ fontSize: "2.5rem", lineHeight: 1, letterSpacing: "-0.02em", color: "#C9A962" }}
                >
                  {occ.num}
                </span>
                <span
                  className="font-sans font-medium uppercase"
                  style={{ fontSize: "0.6875rem", letterSpacing: "0.18em", color: "rgba(196,154,92,0.8)" }}
                >
                  {occ.when[lang]}
                </span>
              </div>

              <h3 className="font-serif text-foreground leading-[1.2]" style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                {occ.heading[lang]}
              </h3>

              <p className="font-sans" style={{ fontSize: "clamp(1rem, 2.5vw, 1.0625rem)", lineHeight: 1.65, color: "rgba(28,43,30,0.75)" }}>
                {occ.body[lang]}
              </p>

              <ul className="space-y-1.5 mt-1">
                {occ.examples.map((ex) => (
                  <li key={ex.en} className="flex gap-2.5">
                    <span className="shrink-0 mt-[0.35em]" style={{ color: "rgba(196,154,92,0.6)", fontSize: "0.5rem" }}>◆</span>
                    <span className="font-sans" style={{ fontSize: "0.9375rem", lineHeight: 1.55, color: "rgba(28,43,30,0.6)" }}>{ex[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Callout note */}
        <div
          className="mt-px px-8 py-6 flex gap-4 items-start"
          style={{ backgroundColor: "rgba(28,43,30,0.04)", border: "1px solid rgba(196,154,92,0.15)", borderTop: "none" }}
        >
          <span className="shrink-0 mt-0.5" style={{ color: "#C9A962", fontSize: "1rem" }}>→</span>
          <p className="font-sans" style={{ fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)", lineHeight: 1.65, color: "rgba(28,43,30,0.72)" }}>
            <span className="font-medium" style={{ color: "rgba(28,43,30,0.9)" }}>{t("opp_callout_bold")}</span>{" "}
            {t("opp_callout_body")}
          </p>
        </div>
      </div>
    </section>
  )
}
