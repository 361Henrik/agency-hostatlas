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
      en: "First hours in Lofoten. No shared language. No sense of the place.",
      ja: "ロフォーテンでの最初の数時間。共通の言語もなく、土地の感覚もない。",
      zh: "抵达罗弗敦的最初几小时。没有共通语言，也没有方向感。",
    },
    body: {
      en: "Guests arrive fatigued from long-haul travel, in an unfamiliar place with no shared language. Without a way to enter it, that first evening sets the pattern for the rest of the stay: guests near the hotel door, watching the destination rather than stepping into it.",
      ja: "ゲストは長時間の移動で疲労した状態で、共通言語のない不慣れな土地に到着します。その場に入っていく手立てがなければ、最初の夜の過ごし方が滞在全体のパターンを決めてしまいます — ホテルの入り口付近に留まり、目的地を眺めるだけで、足を踏み入れることはありません。",
      zh: "客人经过长途飞行，疲惫不堪，抵达一个语言不通的陌生环境。如果没有进入这个环境的方式，第一晚的状态就会为整个行程定下基调——客人聚集在酒店门口附近，只是观望这个目的地，而不是真正走进它。",
    },
    examples: [
      {
        en: "Guests default to the lobby or the hotel entrance",
        ja: "ゲストはロビーやホテルの入り口に留まりがちです",
        zh: "客人默认停留在大堂或酒店门口",
      },
      {
        en: "No shared language to ask whether it's safe to walk further",
        ja: "さらに歩いても安全かどうかを尋ねる共通言語がありません",
        zh: "没有共通语言可以询问再往前走是否安全",
      },
      {
        en: "The emotional tone for the whole stay is set in these first hours",
        ja: "滞在全体の空気感は、この最初の数時間で決まります",
        zh: "整个行程的情绪基调，在这最初几小时内就已确定",
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
      en: "Bus drops at 16:00. Dinner at 19:30. The gap repeats, unmanaged.",
      ja: "バスの到着は16時。夕食は19時30分。この空白は、管理されないまま繰り返されます。",
      zh: "大巴16点抵达，晚餐19点30分。这段空白反复出现，且无人管理。",
    },
    body: {
      en: "This is the window where guests either enter Lofoten with confidence — or cluster near the bus and photograph the same three spots, watching the clock instead of the light.",
      ja: "この時間帯は、ゲストが自信を持ってロフォーテンに足を踏み入れるか、それともバスの近くに留まり同じ3つの場所を撮影し続け、光ではなく時計を気にして過ごすかの分かれ目になります。",
      zh: "这段时间决定客人是自信地走进罗弗敦，还是聚集在大巴附近，反复拍摄同样的三个地点——盯着时间，而不是光线。",
    },
    examples: [
      {
        en: "60–90 minutes, unmanaged, four times over the tour",
        ja: "60〜90分間、管理されない時間がツアー中に4回訪れます",
        zh: "60至90分钟的无管理空档，整个行程中出现四次",
      },
      {
        en: "Golden hour passes with the camera still in the bag",
        ja: "カメラをバッグに入れたまま、ゴールデンアワーが過ぎていきます",
        zh: "黄金时刻悄然流逝，相机仍留在包里",
      },
      {
        en: "Guests misjudge the walk back and risk the departure time",
        ja: "ゲストが帰り道の所要時間を見誤り、出発時刻に間に合わなくなるおそれがあります",
        zh: "客人低估返回所需时间，可能耽误出发",
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
      en: "Last morning in Lofoten. The most remembered. The most rushed.",
      ja: "ロフォーテン最後の朝。最も記憶に残り、最も慌ただしい時間。",
      zh: "在罗弗敦的最后一个早晨。最令人难忘，也最为仓促。",
    },
    body: {
      en: "Guests want one final walk before the coach leaves. Without a clear route and a clock they can trust, that walk gets skipped or cut short — and the trip ends on hesitation instead of a view.",
      ja: "ゲストはコーチが出発する前に、最後にもう一度歩きたいと考えています。信頼できるルートと時計がなければ、その散策は省かれるか、途中で切り上げられてしまいます — 旅の締めくくりが、景色ではなくためらいのまま終わってしまいます。",
      zh: "客人希望在大巴出发前再走一次。如果没有明确的路线和可信赖的时间提示，这次散步往往被取消或提前结束——行程在犹豫中结束，而不是在风景中收尾。",
    },
    examples: [
      {
        en: "The last morning is what guests describe to others first",
        ja: "最後の朝の体験は、ゲストが真っ先に人に語る内容になります",
        zh: "客人最先向他人讲述的，往往是这最后一个早晨",
      },
      {
        en: "No guest wants to be the one who delays the coach",
        ja: "コーチの出発を遅らせる側になりたいゲストはいません",
        zh: "没有客人愿意成为拖延大巴出发的人",
      },
      {
        en: "Hesitation wins over the walk, more often than not",
        ja: "多くの場合、散策よりもためらいが勝ります",
        zh: "多数情况下，犹豫胜过了这段散步",
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
      en: "Ålesund today. Flåm tomorrow. The same gap, reset each time.",
      ja: "今日はオーレスン。明日はフロム。同じ空白が、その都度リセットされます。",
      zh: "今天在奥勒松，明天到弗洛姆。同样的空白，每次重新出现。",
    },
    body: {
      en: "A new destination, and the same uncertainty resets with it. Without a shared way to navigate each stop, guests re-learn the same caution — and guides re-explain the same boundaries — at every destination on the itinerary.",
      ja: "新しい目的地とともに、同じ不確かさもリセットされます。各訪問地を移動するための共通の手立てがなければ、ゲストは同じ慎重さを一から学び直し、ガイドは同じ注意事項を旅程のすべての訪問地で繰り返し説明することになります。",
      zh: "每到一个新目的地，同样的不确定感也随之重启。如果没有统一的方式来引导每一站，客人只能在每个目的地重新摸索同样的谨慎，导游也要在每一站重复说明同样的注意事项。",
    },
    examples: [
      {
        en: "Every new destination resets guest confidence to zero",
        ja: "新しい目的地に着くたびに、ゲストの自信はゼロに戻ります",
        zh: "每到一个新目的地，客人的信心都要重新建立",
      },
      {
        en: "What worked in one town does not carry over to the next",
        ja: "ある町でうまくいった方法が、次の町では通用しません",
        zh: "在一个城镇奏效的方法，无法沿用到下一个",
      },
      {
        en: "Guides repeat the same boundaries and warnings at every stop",
        ja: "ガイドは訪問地ごとに、同じ注意事項や警告を繰り返します",
        zh: "导游在每一站都要重复相同的提醒和警告",
      },
    ],
  },
]

export function OpportunityTextPanel() {
  const { t, lang } = useLanguage()

  return (
    <section data-section="opportunity" className="w-full panel-white py-28 md:py-36" style={{ backgroundColor: "var(--atlas-stone)", color: "#1C2B1E" }}>
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

      {/* 4 occasion cards — 2x2 grid, stagger-reveal on scroll */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-accent/10 border border-accent/10 reveal-stagger">
          {occasions.map((occ) => (
            <div key={occ.num} className="p-8 lg:p-10 bg-card flex flex-col gap-4 reveal">
              <div className="flex items-baseline gap-4">
                <span
                  className="font-serif font-medium shrink-0"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1, letterSpacing: "-0.02em", color: "var(--atlas-green)" }}
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
