"use client"

import { Check } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import type { Lang } from "@/lib/language-context"

type L = Record<Lang, string>

const layers = [
  { number: "01", titleKey: "three_layer_01_title" as const, bodyKey: "managed_service_curation_condensed" as const },
  { number: "02", titleKey: "three_layer_02_title" as const, bodyKey: "managed_service_experience_condensed" as const },
  { number: "03", titleKey: "three_layer_03_title" as const, bodyKey: "managed_service_insight_condensed" as const },
]

const steps: Array<{ num: string; title: L; lines: [L, L]; note: L }> = [
  {
    num: "01",
    title: { en: "Share Your Tour Itinerary", ja: "ツアー旅程を共有", zh: "分享您的旅游行程" },
    lines: [
      { en: "Tell us your destinations, your group profile, and your departure dates.",          ja: "目的地、グループプロファイル、出発日をお知らせください。",          zh: "告诉我们您的目的地、团队特征和出发日期。" },
      { en: "We align the route themes to the specific places and time windows in your itinerary.", ja: "旅程の特定の場所と時間帯にルートテーマを合わせます。",          zh: "我们将路线主题与您行程中的具体地点和时间窗口对齐。" },
    ],
    note: { en: "No technical setup required. We handle everything from here.",                  ja: "技術的な設定は不要です。こちらですべて処理します。",              zh: "无需技术设置。我们处理一切。" },
  },
  {
    num: "02",
    title: { en: "We Configure the Routes",   ja: "ルートを設定します",      zh: "我们配置路线" },
    lines: [
      { en: "Time-bound walking routes built for your specific destinations.",                   ja: "特定の目的地に合わせて構築されたタイムバウンドウォーキングルート。",  zh: "为您的特定目的地构建的限时步行路线。" },
      { en: "Meeting-point return logic, photo moments, and cultural depth built in.",           ja: "集合点帰還ロジック、フォトモーメント、文化的深みが組み込まれています。", zh: "内置集合点返回逻辑、拍照时机和文化深度。" },
    ],
    note: { en: "Routes delivered within 48 hours of receiving your itinerary.",               ja: "旅程を受け取ってから48時間以内にルートを提供します。",             zh: "收到您的行程后48小时内交付路线。" },
  },
  {
    num: "03",
    title: { en: "You Approve the Content",   ja: "コンテンツを承認します",   zh: "您批准内容" },
    lines: [
      { en: "Review every route and point of interest in our preview tool.",                    ja: "プレビューツールですべてのルートと興味ポイントを確認します。",       zh: "在我们的预览工具中审查每条路线和兴趣点。" },
      { en: "Request edits, adjust timing, approve in a single sign-off.",                      ja: "編集を依頼し、タイミングを調整し、一度の承認で完了します。",       zh: "请求编辑，调整时间，单次审批完成。" },
    ],
    note: { en: "Your destinations, your timing, your approval — before your guests arrive.", ja: "あなたの目的地、あなたのタイミング、あなたの承認 — ゲストが到着する前に。", zh: "您的目的地，您的时间，您的批准——在您的客人抵达之前。" },
  },
  {
    num: "04",
    title: { en: "Set the Languages",         ja: "言語を設定します",         zh: "设置语言" },
    lines: [
      { en: "Activate EN, 日本語, or 简体中文 — or all three for mixed-nationality groups.",   ja: "EN、日本語、または简体中文をアクティベート — または混合国籍グループ向けに3つすべて。", zh: "激活EN、日本語或简体中文——或为混合国籍团体激活全部三种。" },
      { en: "Language is set at the agency level. Guests open their native language automatically.", ja: "言語は旅行会社レベルで設定されます。ゲストは自動的に母国語で開きます。", zh: "语言在旅行社层面设置。客人自动以母语打开。" },
    ],
    note: { en: "Cultural tone adapted, not just translated. Same destination, different voice.", ja: "単なる翻訳ではなく、文化的トーン適応。同じ目的地、異なる声。", zh: "文化语气适配，而非仅仅翻译。相同目的地，不同声音。" },
  },
  {
    num: "05",
    title: { en: "Activate on the Day",       ja: "当日にアクティベート",      zh: "当天激活" },
    lines: [
      { en: "Your guide activates the relevant routes for each stop — guests only see what's live.", ja: "ガイドが各停留地点に関連するルートをアクティベート — ゲストはライブのものだけを見ます。", zh: "您的导游为每个停留点激活相关路线——客人只看到正在进行的内容。" },
      { en: "Guests scan a QR code or tap a link. No app download. Works in any mobile browser.", ja: "ゲストはQRコードをスキャンするかリンクをタップします。アプリ不要。モバイルブラウザで動作。", zh: "客人扫描二维码或点击链接。无需下载应用。在任何手机浏览器中运行。" },
    ],
    note: { en: "All content cached at QR scan. Works offline in Lofoten's dead zones.",       ja: "QRスキャン時にすべてのコンテンツをキャッシュ。ロフォーテンのデッドゾーンでもオフラインで動作。", zh: "二维码扫描时缓存所有内容。在罗弗敦的死区离线工作。" },
  },
  {
    num: "06",
    title: { en: "You Receive the Insight",   ja: "インサイトを受け取ります",   zh: "您收到洞察报告" },
    lines: [
      { en: "Which routes were walked. Which stops captured attention. How guests used their time.", ja: "どのルートが歩かれたか。どの停留地が注目を集めたか。ゲストがどのように時間を使ったか。", zh: "哪些路线被行走。哪些停留点引发关注。客人如何使用他们的时间。" },
      { en: "Engagement data delivered after the departure — not guesswork.",                   ja: "出発後に提供されるエンゲージメントデータ — 推測ではありません。",  zh: "出发后提供的参与度数据——而非猜测。" },
    ],
    note: { en: "Intelligence that makes your next departure smarter.",                         ja: "次の出発をより賢くするインテリジェンス。",                       zh: "让您的下次出发更加智慧的情报。" },
  },
]

const itIs: L[] = [
  { en: "A curated digital companion for your guests' free time",                ja: "ゲストの自由時間のためのキュレーションされたデジタルコンパニオン",    zh: "为您客人自由时间设计的精心策划数字伴侣" },
  { en: "Time-bound routes with departure countdowns and return logic",           ja: "出発カウントダウンと帰還ロジックを備えたタイムバウンドルート",       zh: "带有出发倒计时和返回逻辑的限时路线" },
  { en: "Offline-capable — no signal needed after QR scan",                      ja: "オフライン対応 — QRスキャン後は信号不要",                          zh: "离线可用——QR扫描后无需信号" },
  { en: "White-labelled to your agency brand",                                   ja: "あなたの旅行会社ブランドでホワイトラベル",                          zh: "以您的旅行社品牌白标显示" },
  { en: "Deployed within 48 hours of receiving your itinerary",                  ja: "旅程受信から48時間以内に展開",                                    zh: "收到行程后48小时内部署" },
  { en: "Measurable — engagement data delivered after departure",                ja: "測定可能 — 出発後にエンゲージメントデータを提供",                   zh: "可量化——出发后提供参与度数据" },
]

const itIsNot: L[] = [
  { en: "A live tour guide or escort service",                                   ja: "ライブツアーガイドまたはエスコートサービス",                       zh: "实时导游或陪同服务" },
  { en: "A logistics or transport platform",                                     ja: "物流または交通プラットフォーム",                                  zh: "物流或交通平台" },
  { en: "A tourist app or activity booking tool",                                ja: "観光アプリやアクティビティ予約ツール",                             zh: "旅游应用或活动预订工具" },
  { en: "A replacement for your programme or guide team",                        ja: "プログラムやガイドチームの代替",                                  zh: "您的行程或导游团队的替代品" },
  { en: "A general city guide open to all travellers",                           ja: "すべての旅行者に開かれた一般的な都市ガイド",                       zh: "向所有旅行者开放的一般城市指南" },
  { en: "An AI concierge or recommendation engine",                              ja: "AIコンシェルジュまたはレコメンデーションエンジン",                 zh: "AI礼宾服务或推荐引擎" },
]

export function ManagedServicePanel() {
  const { t, lang } = useLanguage()

  return (
    <section data-section="agencies" className="w-full flex flex-col items-center">
      {/* (a) Dark-green intro band — condensed Curate / Experience / Insight strip */}
      <div
        className="w-full flex flex-col items-center px-6 md:px-12 lg:px-20 py-24 lg:py-28 panel-green"
        style={{ backgroundColor: "#1F3528", color: "#F5F0E8" }}
      >
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
            {t("three_layer_eyebrow")}
          </p>
          <h2
            className="font-serif leading-[1.06] mb-8"
            style={{ color: "#C9A962", fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}
          >
            {t("three_layer_heading_line1")}
          </h2>
          <p style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(245,243,239,0.88)", fontWeight: 500 }} className="font-sans max-w-2xl mx-auto">
            {t("three_layer_intro1")}
          </p>
        </div>

        {/* Condensed 3-up strip */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mt-6">
          {layers.map((layer) => (
            <div key={layer.number} className="flex flex-col">
              <span
                className="font-serif font-medium mb-3 md:mb-4"
                style={{
                  fontSize: "clamp(40px, 6vw, 72px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "#C9A962",
                }}
              >
                {layer.number}
              </span>
              <h3 className="font-serif text-[#F5F3EF] leading-[1.15] mb-3" style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)", fontWeight: 500 }}>
                {t(layer.titleKey)}
              </h3>
              <p className="font-sans" style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "rgba(245,243,239,0.85)", fontWeight: 500 }}>
                {t(layer.bodyKey)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* (b) Light section — 6-step "From Tour Itinerary to Guest Experience" grid */}
      <div
        className="w-full flex flex-col items-center px-6 md:px-10 lg:px-16 py-28 md:py-36 panel-white"
        style={{ backgroundColor: "#F8F5EE", color: "#1C2B1E" }}
      >
        <div className="max-w-6xl w-full">
          <div className="text-center mb-14">
            <p className="font-sans font-medium uppercase tracking-[0.2em] text-accent mb-6" style={{ fontSize: "0.75rem" }}>
              {t("operator_eyebrow")}
            </p>
            <h2 className="font-serif text-balance mb-5 leading-[1.06] text-accent" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", fontWeight: 500 }}>
              {t("operator_heading")}
            </h2>
            <p className="font-sans max-w-[48ch] mx-auto text-pretty" style={{ fontSize: "1.1875rem", lineHeight: 1.6, color: "rgba(28,43,30,0.75)" }}>
              {t("operator_intro")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-accent/10 border border-accent/10">
            {steps.map((step) => (
              <div key={step.num} className="p-6 lg:p-7 bg-card flex flex-col">
                <span className="uppercase tracking-[0.15em] mb-3 font-serif" style={{ fontSize: "2.5rem", color: "#C9A962" }}>
                  {step.num}
                </span>
                <h4 className="font-serif mb-2 text-foreground leading-[1.2]" style={{ fontSize: "1.25rem", fontWeight: 500 }}>
                  {step.title[lang]}
                </h4>
                <div className="mb-3 space-y-1">
                  {step.lines.map((line, i) => (
                    <p key={i} className="font-sans" style={{ fontSize: "1.0625rem", lineHeight: 1.6, color: "rgba(28,43,30,0.78)", fontWeight: i === 0 ? 500 : 400 }}>{line[lang]}</p>
                  ))}
                </div>
                <p className="font-sans italic mt-auto" style={{ fontSize: "1rem", lineHeight: 1.6, color: "rgba(28,43,30,0.6)" }}>
                  {step.note[lang]}
                </p>
              </div>
            ))}
          </div>

          {/* (c) What it is / What it is not — kept verbatim */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-accent/10 border border-accent/10">
            <div className="p-8 lg:p-10 bg-card">
              <p className="font-sans font-medium uppercase tracking-[0.18em] mb-6" style={{ fontSize: "0.6875rem", color: "rgba(196,154,92,1)" }}>
                {t("operator_label_is")}
              </p>
              <ul className="space-y-3">
                {itIs.map((item) => (
                  <li key={item.en} className="flex gap-3 items-start">
                    <Check className="h-3.5 w-3.5 text-accent shrink-0 mt-[0.3em]" strokeWidth={2.5} />
                    <span className="font-sans" style={{ fontSize: "clamp(1rem, 2vw, 1.0625rem)", lineHeight: 1.6, color: "rgba(28,43,30,0.8)" }}>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 lg:p-10 bg-card" style={{ borderLeft: "1px solid rgba(196,154,92,0.1)" }}>
              <p className="font-sans font-medium uppercase tracking-[0.18em] mb-6" style={{ fontSize: "0.6875rem", color: "rgba(28,43,30,0.45)" }}>
                {t("operator_label_is_not")}
              </p>
              <ul className="space-y-3">
                {itIsNot.map((item) => (
                  <li key={item.en} className="flex gap-3 items-start">
                    <span className="shrink-0 font-sans font-medium mt-[0.05em]" style={{ color: "rgba(28,43,30,0.3)", fontSize: "1rem" }}>−</span>
                    <span className="font-sans" style={{ fontSize: "clamp(1rem, 2vw, 1.0625rem)", lineHeight: 1.6, color: "rgba(28,43,30,0.55)" }}>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
