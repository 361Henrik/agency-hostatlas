export type Lang = "en" | "ja" | "zh"
export type POIType = "city_highlight" | "photo_moment" | "cultural_story"

export interface LocalizedString {
  en: string
  ja: string
  zh: string
}

export interface POI {
  id: string
  title: LocalizedString
  description: LocalizedString
  type: POIType
  coordinates: [number, number]
  imageUrl?: string
  followUpTopic?: LocalizedString
}

export interface LofotenRoute {
  id: string
  title: LocalizedString
  theme: LocalizedString
  summary: LocalizedString
  duration: string
  distance: string
  difficulty: string
  weatherSuitability: string
  returnLogic: string
  guideRecommended: boolean
  startCoords: [number, number]
  endCoords: [number, number]
  pois: POI[]
}

export const lofotenRoutes: LofotenRoute[] = [
  {
    id: "first-evening-svolvaer",
    title: {
      en: "First Evening in Svolvær",
      ja: "スヴォルヴェールの初夜",
      zh: "斯沃尔韦尔的第一个夜晚",
    },
    theme: {
      en: "Orientation",
      ja: "オリエンテーション",
      zh: "方向引导",
    },
    summary: {
      en: "A gentle introduction to Svolvær for first-time visitors — the harbour, the light, the scale of the mountains. Safe, short, and always returnable. The ideal first walk.",
      ja: "初めて訪れる方のためのスヴォルヴェール入門 — 港、光、山々のスケール感。安全で短く、いつでも戻れます。",
      zh: "为初次访客提供的斯沃尔韦尔温和入门——港口、光线、山脉的尺度。安全、短暂，随时可返回。",
    },
    duration: "30 min",
    distance: "1.2 km",
    difficulty: "Easy",
    weatherSuitability: "All conditions",
    returnLogic: "Return to Torget square — visible from every point on this route",
    guideRecommended: true,
    startCoords: [68.2343, 14.5671],
    endCoords: [68.2338, 14.5686],
    pois: [
      {
        id: "svolvaer-torget",
        title: {
          en: "Torget — The Town Square",
          ja: "トルゲット — 町の広場",
          zh: "托尔盖特 — 镇广场",
        },
        description: {
          en: "Torget is the beating heart of Svolvær — a compact harbour square where fishing boats, tourist vessels, and the occasional Hurtigruten coastal steamer arrive within metres of each other. Stand here for five minutes and you understand what Lofoten is: a working fishing community that the world has decided to visit. The square is your anchor point for this walk and every walk from here.",
          ja: "トルゲットはスヴォルヴェールの中心 — 漁船、観光船、そして時折ルティルーテンの沿岸蒸気船が数メートル以内に到着するコンパクトな港の広場です。ここに5分立っていれば、ロフォーテンとは何かがわかります。世界が訪れることにした漁業コミュニティです。",
          zh: "托尔盖特是斯沃尔韦尔跳动的心脏——一个紧凑的港口广场，渔船、游轮，偶尔还有赫尔蒂格鲁滕海岸轮船在数米之内停靠。在这里站五分钟，你就能理解罗弗敦是什么：一个世界决定来访的渔业社区。",
        },
        type: "city_highlight",
        coordinates: [68.2343, 14.5671],
        imageUrl: "https://images.unsplash.com/photo-1578500494374-7e79a3b3c22f?w=800&q=80",
      },
      {
        id: "svolvaer-harbour-light",
        title: {
          en: "The Harbour Light",
          ja: "港の光",
          zh: "港口之光",
        },
        description: {
          en: "Lofoten sits well above the Arctic Circle, and its light is unlike anything in Asia or Central Europe. In summer, the sun barely sets — golden hour can last three hours. In winter, the blue hour casts everything in a deep, photogenic twilight that photographers travel thousands of kilometres to capture. At this spot on the harbour wall, looking northwest, you are facing the best light direction for the next two hours of your evening.",
          ja: "ロフォーテンは北極圏のかなり上に位置し、その光はアジアや中央ヨーロッパとは異なります。夏には太陽がほとんど沈まず、ゴールデンアワーが3時間続くこともあります。このハーバーウォールのスポットから北西を向くと、今夜の最良の光の方向が見えます。",
          zh: "罗弗敦位于北极圈以上，其光线与亚洲或中欧截然不同。夏天，太阳几乎不落——黄金时段可以持续三个小时。站在这个港口墙的位置，面向西北，你正面对着接下来两小时最佳的光线方向。",
        },
        type: "photo_moment",
        coordinates: [68.2348, 14.5658],
        imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
        followUpTopic: {
          en: "Best light times for photography in Lofoten",
          ja: "ロフォーテンでの写真撮影の最適な時間",
          zh: "罗弗敦摄影的最佳光线时间",
        },
      },
      {
        id: "svolvaer-mountain-backdrop",
        title: {
          en: "Svolværgeita — The Goat",
          ja: "スヴォルヴェールゲイタ — 山羊の峰",
          zh: "斯沃尔韦格塔 — 山羊峰",
        },
        description: {
          en: "The twin peaks above Svolvær — locally called 'The Goat' — are visible from almost every point in town. They define the skyline in a way that makes every photograph of the harbour unmistakably Lofoten. Looking directly up from Torget you can see both peaks. The light catches them differently at every hour. In the late evening, when the sun angles low from the northwest, they turn the colour of copper.",
          ja: "スヴォルヴェール上空の双峰 — 地元では「ヤギ」と呼ばれています — は市内のほぼどこからでも見えます。ゴールデンアワーには銅色に輝きます。トルゲットから直接見上げると両方の峰が見えます。",
          zh: "斯沃尔韦尔上方的双峰——当地人称之为'山羊'——几乎从镇上每个角落都能看到。它们以一种让港口每张照片都清晰地标注为罗弗敦的方式定义了天际线。在黄金时段，它们会变成铜色。",
        },
        type: "photo_moment",
        coordinates: [68.2390, 14.5770],
        imageUrl: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
      },
      {
        id: "svolvaer-return-point",
        title: {
          en: "Return: Torget Square",
          ja: "帰還：トルゲット広場",
          zh: "返回：托尔盖特广场",
        },
        description: {
          en: "Your meeting point and return destination. The square is visible from every part of this walk — if you can see the harbour, you can find your way back. Your group departs from here. The bus stop and the main pier are both within 100 metres.",
          ja: "集合場所と帰還地点。広場はこのウォークのあらゆる場所から見えます。港が見えれば、帰り道がわかります。グループはここから出発します。",
          zh: "您的集合点和返回目的地。广场从这次步行的每个地方都可以看到——如果你能看到港口，你就能找到回来的路。您的团队从这里出发。",
        },
        type: "city_highlight",
        coordinates: [68.2343, 14.5671],
      },
    ],
  },

  {
    id: "story-of-skrei",
    title: {
      en: "The Story of Skrei",
      ja: "スクレイの物語",
      zh: "斯克莱的故事",
    },
    theme: {
      en: "Fishing Heritage",
      ja: "漁業遺産",
      zh: "渔业遗产",
    },
    summary: {
      en: "Lofoten's identity is built on cod. This walk traces that story from the migrating Arctic skrei to the dried stockfish that fed medieval Europe — through boathouses, drying racks, and the community that made it all work.",
      ja: "ロフォーテンのアイデンティティはタラで築かれています。このウォークは、北極のスクレイの回遊から中世ヨーロッパを養った干しタラまでの物語をたどります。",
      zh: "罗弗敦的身份是建立在鳕鱼上的。这次步行追溯了从北极斯克莱迁徙到供养中世纪欧洲的干鱼之间的故事——穿过船库、晾鱼架和使一切运转的社区。",
    },
    duration: "60 min",
    distance: "2.4 km",
    difficulty: "Moderate",
    weatherSuitability: "Best in dry weather",
    returnLogic: "Return path marked at each stop — follow the orange markers back to Torget harbour",
    guideRecommended: true,
    startCoords: [68.2343, 14.5671],
    endCoords: [68.2156, 14.4891],
    pois: [
      {
        id: "skrei-fish-market",
        title: {
          en: "The Fish Quay",
          ja: "魚のquay",
          zh: "鱼码头",
        },
        description: {
          en: "Every January to April, the Arctic skrei cod make their annual migration from the Barents Sea to spawn in the warmer waters off Lofoten — the same journey they have made for thousands of years. Norwegian fishermen have been waiting for them here since the Viking age. The quay at dawn during skrei season is one of the most alive places in Europe: boats unloading in the dark, buyers negotiating on the pier, the smell of cold salt water and fresh fish. Out of season, the quay is quieter but the infrastructure of the trade is still here.",
          ja: "毎年1月から4月、北極のスクレイタラはバレンツ海からロフォーテン沖の暖かい水域に産卵のために回遊します — 数千年間続けてきた同じ旅です。ノルウェーの漁師たちはバイキング時代からここで彼らを待っています。",
          zh: "每年1月至4月，北极斯克莱鳕鱼从巴伦支海迁徙到罗弗敦附近温暖水域产卵——这是它们数千年来一直进行的相同旅程。自维京时代起，挪威渔民就在这里等待它们。",
        },
        type: "cultural_story",
        coordinates: [68.2338, 14.5686],
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      },
      {
        id: "hjell-stockfish-racks",
        title: {
          en: "The Hjell — Drying Racks",
          ja: "ヒェル — 干しラック",
          zh: "干鱼架",
        },
        description: {
          en: "The wooden drying racks — called hjell — that you see across Lofoten are among the most important structures in Norwegian food history. Gutted cod are hung in pairs by their tails and left outside through the spring and summer. The cold, dry Arctic wind and the long daylight hours do what no industrial process can replicate: transform fresh fish into stockfish that can survive two years without refrigeration. Medieval Europe's protein supply depended on these racks.",
          ja: "ロフォーテン全体で見られる木製の干しラック — ヒェルと呼ばれます — はノルウェーの食文化史において最も重要な構造物の一つです。腸を取り除いたタラは尾を上にして対で吊るされ、春から夏にかけて外に置かれます。",
          zh: "您在罗弗敦各地看到的木制晾鱼架——称为hjell——是挪威食品历史上最重要的结构之一。去内脏的鳕鱼以尾部成对悬挂，在春夏两季放置在室外。寒冷干燥的北极风和漫长的日照时间做了工业过程无法复制的事情：将新鲜鱼转化为可以在没有冷藏的情况下保存两年的鳕鱼干。",
        },
        type: "cultural_story",
        coordinates: [68.2280, 14.5100],
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        followUpTopic: {
          en: "The stockfish trade and its role in medieval European food supply",
          ja: "干しタラ貿易と中世ヨーロッパの食料供給における役割",
          zh: "干鳕鱼贸易及其在中世纪欧洲食品供应中的作用",
        },
      },
      {
        id: "rorbu-fishermans-cabin",
        title: {
          en: "The Rorbu — Fisherman's Cabin",
          ja: "ロルブー — 漁師の小屋",
          zh: "渔民小屋",
        },
        description: {
          en: "The red and ochre wooden cabins on stilts that define Lofoten's visual identity are called rorbu. Traditionally they housed the seasonal fishermen who came from across Norway to catch the skrei — up to 30,000 men at the peak of the season. Today many are accommodation for visitors, but their form is unchanged: compact, practical, built to survive Arctic winters on the waterline. The rorbu is one of the most photographed structures in Norway. From here, looking back toward the mountains, you have the classic Lofoten composition.",
          ja: "ロフォーテンの視覚的アイデンティティを定義する杭の上の赤とオーカーの木造小屋はロルブーと呼ばれます。伝統的にスクレイを捕まえるためにノルウェー全土から来た季節労働者の漁師たちを収容していました。ここから山々を振り返ると、ロフォーテンの古典的な構図が得られます。",
          zh: "定义罗弗敦视觉身份的高跷上的红色和赭色木屋称为rorbu。传统上，它们为来自挪威各地捕捞斯克莱的季节性渔民提供住所——在旺季高峰时可达30,000人。从这里回望山脉，你就得到了经典的罗弗敦构图。",
        },
        type: "photo_moment",
        coordinates: [68.2200, 14.4950],
        imageUrl: "https://images.unsplash.com/photo-1601439678777-b2b5c7965ed0?w=800&q=80",
      },
      {
        id: "kabelvag-village",
        title: {
          en: "Kabelvåg — The First Town",
          ja: "カーベルヴォーグ — 最初の町",
          zh: "卡贝尔沃格 — 第一个城镇",
        },
        description: {
          en: "Kabelvåg, five kilometres southwest of Svolvær, is the oldest town in North Norway — established in the 12th century as a base for the king's collection of fishing taxes. Its church, built in 1898, was the largest north of Trondheim at the time, serving the thousands of seasonal fishermen who came for the skrei. The church's scale is a direct statement about how economically significant this small community was to Norwegian state revenues for centuries.",
          ja: "スヴォルヴェールから南西に5キロのカーベルヴォーグは北ノルウェーで最も古い町です — 12世紀に王の漁業税徴収の拠点として設立されました。1898年に建てられた教会は当時トロンハイム以北で最大でした。",
          zh: "卡贝尔沃格，位于斯沃尔韦尔西南五公里处，是挪威北部最古老的城镇——建立于12世纪，作为国王征收渔业税的基地。1898年建造的教堂在当时是特隆赫姆以北最大的，为成千上万来捕捞斯克莱的季节性渔民服务。",
        },
        type: "cultural_story",
        coordinates: [68.2156, 14.4891],
        imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        followUpTopic: {
          en: "The role of the Lofoten fishing industry in Norwegian state formation",
          ja: "ノルウェー国家形成におけるロフォーテン漁業の役割",
          zh: "罗弗敦渔业在挪威国家形成中的作用",
        },
      },
    ],
  },

  {
    id: "golden-hour-photo-walk",
    title: {
      en: "Golden Hour Photo Walk",
      ja: "ゴールデンアワー・フォトウォーク",
      zh: "黄金时段摄影步行",
    },
    theme: {
      en: "Photography",
      ja: "写真",
      zh: "摄影",
    },
    summary: {
      en: "Built around the light. Three viewpoints, each chosen for what they offer at golden hour — the angle, the reflection, the mountain silhouette. Timed to the sun. Weather-dependent but always worth waiting for.",
      ja: "光を中心に構成されています。3つの展望ポイント、それぞれがゴールデンアワーに提供するもの — 角度、反射、山のシルエット — のために選ばれました。太陽に合わせてタイミングを調整します。",
      zh: "围绕光线构建。三个观景点，每个都因其在黄金时段提供的内容而被选择——角度、倒影、山脉轮廓。与太阳同步。天气依赖但总是值得等待。",
    },
    duration: "45 min",
    distance: "1.8 km",
    difficulty: "Easy",
    weatherSuitability: "Clear or partly cloudy — reschedule in heavy rain",
    returnLogic: "All three viewpoints are within 900m of Torget — return at any point, always downhill to harbour",
    guideRecommended: true,
    startCoords: [68.2343, 14.5671],
    endCoords: [68.2310, 14.5720],
    pois: [
      {
        id: "photo-harbour-reflection",
        title: {
          en: "Harbour Reflection Point",
          ja: "港の反射ポイント",
          zh: "港口倒影点",
        },
        description: {
          en: "On calm evenings, the harbour surface becomes a mirror. The mountains, the rorbu, and the fishing boats all reflect in still water that holds the last light long after the direct sun has moved. Stand at the inner harbour edge, facing northeast. The composition frames the twin peaks of Svolværgeita with the red rorbu in the foreground and the reflection doubling the image below. Shoot at f/8, ISO 200, with a neutral density filter if the light is bright. This is the shot Lofoten is known for.",
          ja: "穏やかな夜には、港の水面が鏡になります。山々、ロルブー、漁船がすべて静かな水面に映り、直射光が去った後も長く最後の光を保ちます。内港の端に立ち、北東を向きます。この構図はスヴォルヴェールゲイタの双峰を前景の赤いロルブーとともに映し出します。",
          zh: "在平静的夜晚，港口水面成为一面镜子。山脉、渔民小屋和渔船都倒映在静止的水面中，在直射阳光移走后很久还能保持最后的光线。站在内港边缘，面向东北方。这个构图将斯沃尔韦格塔双峰与前景的红色渔民小屋框在一起，倒影在下方将图像翻倍。",
        },
        type: "photo_moment",
        coordinates: [68.2348, 14.5660],
        imageUrl: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
        followUpTopic: {
          en: "Camera settings for low-light Lofoten photography",
          ja: "ロフォーテン低光撮影のカメラ設定",
          zh: "罗弗敦低光摄影的相机设置",
        },
      },
      {
        id: "photo-mountain-silhouette",
        title: {
          en: "Mountain Silhouette Viewpoint",
          ja: "山のシルエット展望ポイント",
          zh: "山脉轮廓观景点",
        },
        description: {
          en: "At this elevation above the town, the Lofoten Wall — the dramatic ridge of peaks that runs the length of the archipelago — becomes visible as a single silhouette. At golden hour from the northwest, the ridge turns deep orange, then purple, then fades into blue. You can shoot the entire ridge in one frame from here. The composition: the ridge fills the upper third of the frame, the fjord and village fill the lower two-thirds. This shot requires a wide-angle lens — 24mm equivalent or wider.",
          ja: "この町の上の高さから、ロフォーテン・ウォール — 群島の長さに沿って走る劇的な峰の尾根 — が単一のシルエットとして見えます。ゴールデンアワーに北西からの光で、尾根は深いオレンジ色、そして紫色に変わります。",
          zh: "在这个城镇上方的高度，罗弗敦墙——贯穿群岛长度的戏剧性山脊——作为单一轮廓变得可见。在黄金时段从西北方向，山脊变成深橙色，然后是紫色，然后渐变为蓝色。从这里可以在一帧中拍摄整条山脊。",
        },
        type: "photo_moment",
        coordinates: [68.2380, 14.5600],
        imageUrl: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
      },
      {
        id: "photo-fishing-boats",
        title: {
          en: "The Working Boats",
          ja: "作業船",
          zh: "工作船只",
        },
        description: {
          en: "The wooden fishing boats moored at the south end of the harbour are still active working vessels. At golden hour, their weathered wood and rope detail photograph beautifully in warm light. Shoot close — the texture of the paint, the rust on the cleats, the coiled rope. These details carry more of Lofoten's truth than any mountain panorama. Late afternoon to early evening is when the boats return from the day's work. If you are here during skrei season, there will be activity at this exact time.",
          ja: "港の南端に係留された木製漁船はまだ現役の作業船です。ゴールデンアワーには、風化した木材とロープの詳細が暖かい光の中で美しく撮影されます。近くで撮影しましょう — 塗料のテクスチャ、係留金具の錆、巻かれたロープ。",
          zh: "停泊在港口南端的木制渔船仍然是活跃的工作船只。在黄金时段，它们风化的木材和绳索细节在温暖的光线中拍摄得非常漂亮。靠近拍摄——油漆的纹理、系缆柱上的锈迹、盘绕的绳索。这些细节比任何山脉全景都更能反映罗弗敦的真实面貌。",
        },
        type: "photo_moment",
        coordinates: [68.2330, 14.5700],
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      },
    ],
  },

  {
    id: "coastal-culture-craft",
    title: {
      en: "Coastal Culture & Craft",
      ja: "沿岸の文化と工芸",
      zh: "沿海文化与工艺",
    },
    theme: {
      en: "Culture & Craft",
      ja: "文化と工芸",
      zh: "文化与工艺",
    },
    summary: {
      en: "Lofoten's artists and craftspeople have been drawn here for generations — by the light, the isolation, and the particular quality of a landscape that changes every hour. This walk visits three of the archipelago's working studios and small galleries.",
      ja: "ロフォーテンのアーティストと職人たちは光、孤立、そして毎時変化する風景の特殊な質に惹かれて何世代にもわたってここに引き寄せられてきました。",
      zh: "罗弗敦的艺术家和工匠们世代被吸引到这里——被光线、孤独，以及每小时都在变化的独特景观品质所吸引。这次步行参观群岛三个正在运营的工作室和小画廊。",
    },
    duration: "90 min",
    distance: "3.1 km",
    difficulty: "Moderate",
    weatherSuitability: "All conditions — studios are indoor destinations",
    returnLogic: "Final studio is 1.5km from Torget — timed return markers shown at 30 and 15 minutes before departure",
    guideRecommended: false,
    startCoords: [68.2343, 14.5671],
    endCoords: [68.2210, 14.5000],
    pois: [
      {
        id: "gallery-galleri-lofoten",
        title: {
          en: "Galleri Lofoten",
          ja: "ガレリ・ロフォーテン",
          zh: "罗弗敦画廊",
        },
        description: {
          en: "The gallery district around Svolvær represents one of the highest concentrations of working artists per capita anywhere in Norway. Many came initially for a summer and never left — drawn by a quality of light that changes so rapidly that painting from observation here is a completely different discipline from painting in a studio in Oslo or Bergen. The gallery shows work by resident artists, most of which is painted within 10 kilometres of where you are standing. The prices are not tourist prices. This is primary market work.",
          ja: "スヴォルヴェール周辺のギャラリー地区は、ノルウェーの中でも一人当たりの現役アーティストの集中度が最も高い場所の一つです。多くは最初は夏のために来て、二度と去りませんでした — 観察から絵を描くことをまったく別の学問にする急速に変化する光の質に惹かれて。",
          zh: "斯沃尔韦尔周围的画廊区代表了挪威人均在职艺术家最密集的地方之一。许多人最初是为了夏天而来，却再也没有离开——被一种光线品质所吸引，这种光线变化如此迅速，以至于在这里写生绘画与在奥斯陆或卑尔根的工作室绘画完全不同。画廊展示居民艺术家的作品，其中大部分是在距离您站立的地方10公里以内绘制的。",
        },
        type: "cultural_story",
        coordinates: [68.2335, 14.5655],
        imageUrl: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
      },
      {
        id: "craft-knitwear-studio",
        title: {
          en: "The Wool Studio",
          ja: "ウールスタジオ",
          zh: "羊毛工作室",
        },
        description: {
          en: "Norwegian wool craft has a long tradition in Lofoten — the Norwegian sweater patterns that have become globally recognisable originated in coastal communities like this one. The studio here works with traditional Spelsau wool from local sheep, a breed that has grazed these islands for over a thousand years. The patterns used encode practical information — weather conditions, local landmarks, family identities — in a visual language that was entirely functional before it became decorative.",
          ja: "ノルウェーのウール工芸はロフォーテンに長い伝統があります。世界的に認知されるようになったノルウェーのセーターパターンは、このような沿岸コミュニティに起源を持ちます。ここのスタジオは地元の羊からの伝統的なスペルサウウールを使用しています。使用されるパターンは実用的な情報をエンコードします — 気象条件、地元のランドマーク、家族のアイデンティティ。",
          zh: "挪威羊毛工艺在罗弗敦有着悠久的传统——已成为全球知名的挪威毛衣图案起源于像这样的沿海社区。这里的工作室使用来自当地羊的传统Spelsau羊毛，这个品种在这些岛屿上放牧了超过一千年。所使用的图案编码了实用信息——天气条件、当地地标、家族身份——在一种语言中，这种语言在成为装饰性之前完全是功能性的。",
        },
        type: "cultural_story",
        coordinates: [68.2260, 14.5200],
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        followUpTopic: {
          en: "Traditional Norwegian knitwear patterns and their coastal origins",
          ja: "伝統的なノルウェーニットウェアのパターンとその沿岸起源",
          zh: "传统挪威针织品图案及其沿海起源",
        },
      },
      {
        id: "craft-ceramics-studio",
        title: {
          en: "The Ceramics Studio",
          ja: "陶芸スタジオ",
          zh: "陶瓷工作室",
        },
        description: {
          en: "The ceramicist who runs this studio moved to Lofoten from Oslo fifteen years ago and has not left. The work is influenced directly by the landscape — the colours of the sea, the texture of the rock face, the matte grey of winter light. Much of it is functional: bowls, cups, serving plates — made to be used, not displayed. The studio sells work at accessible prices because the maker wants the work to go to people who will use it. You can watch work in progress if the kiln is running.",
          ja: "このスタジオを運営する陶芸家は15年前にオスロからロフォーテンに移り住み、以来去っていません。作品は景色に直接影響されています — 海の色、岩肌のテクスチャ、冬の光のマットグレー。多くは機能的です：ボウル、カップ、サービングプレート — 展示ではなく使用するために作られています。",
          zh: "经营这个工作室的陶艺师十五年前从奥斯陆搬到罗弗敦，此后就没有离开过。这些作品直接受到景观的影响——海的颜色、岩石表面的纹理、冬季光线的哑光灰色。大部分是功能性的：碗、杯子、餐盘——是用来使用的，而不是展示的。",
        },
        type: "cultural_story",
        coordinates: [68.2210, 14.5000],
        imageUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
      },
    ],
  },

  {
    id: "weather-safe-short-walk",
    title: {
      en: "Weather-Safe Short Walk",
      ja: "天候安全ショートウォーク",
      zh: "全天候安全短途步行",
    },
    theme: {
      en: "Backup Route",
      ja: "バックアップルート",
      zh: "备用路线",
    },
    summary: {
      en: "For when the weather closes in. This route stays close to the town centre, uses sheltered paths, and returns reliably to the bus. Short enough to complete in any conditions. Always open, always safe.",
      ja: "天気が悪化した時のためのルートです。このルートは市街地の近くにとどまり、sheltered pathを使用し、確実にバスに戻ります。どんな状況でも完了できるほど短い。常にオープン、常に安全。",
      zh: "当天气变差时。这条路线靠近市中心，使用有遮蔽的路径，并可靠地返回巴士。短到在任何条件下都能完成。始终开放，始终安全。",
    },
    duration: "30 min",
    distance: "1.0 km",
    difficulty: "Easy",
    weatherSuitability: "All conditions including heavy rain and wind",
    returnLogic: "Circular route — ends at starting point. Never more than 500m from Torget harbour and the bus",
    guideRecommended: true,
    startCoords: [68.2343, 14.5671],
    endCoords: [68.2343, 14.5671],
    pois: [
      {
        id: "weather-covered-market",
        title: {
          en: "The Covered Wharf",
          ja: "屋根付きの波止場",
          zh: "有盖码头",
        },
        description: {
          en: "The covered fishing wharf next to the harbour has been operational for over a century. Its wooden roof shelters the activity that goes on year-round regardless of weather — boat maintenance, net repair, equipment storage. In bad weather, it is one of the most atmospheric places in Svolvær: the sound of rain on the old roof, the smell of salt, tar and wood, the boats moving slightly in the water below. On this route it is also your shelter. Take your time here.",
          ja: "港の隣にある屋根付きの漁業波止場は一世紀以上にわたって稼働しています。木製の屋根は天候に関係なく年間を通じて続く活動を保護します。悪天候の中、それはスヴォルヴェールで最も雰囲気のある場所の一つです：古い屋根に降る雨の音、塩、タール、木材の匂い。",
          zh: "港口旁边的有盖渔业码头已经运营了一个多世纪。它的木制屋顶遮蔽了无论天气如何全年进行的活动——船只维护、修补渔网、设备存储。在恶劣天气中，它是斯沃尔韦尔最有氛围的地方之一：雨水打在旧屋顶上的声音，盐、焦油和木材的气味，船只在下方水中轻微移动。",
        },
        type: "city_highlight",
        coordinates: [68.2340, 14.5680],
        imageUrl: "https://images.unsplash.com/photo-1578500494374-7e79a3b3c22f?w=800&q=80",
      },
      {
        id: "weather-lofoten-museum",
        title: {
          en: "Lofoten War Memorial Museum",
          ja: "ロフォーテン戦争記念博物館",
          zh: "罗弗敦战争纪念博物馆",
        },
        description: {
          en: "Lofoten was one of the most strategically contested areas of Norway during the Second World War. The British made several commando raids here in 1941 and 1942 — destroying fish oil factories that were supplying glycerine for German explosives, and evacuating local volunteers to train as Free Norwegian forces. The museum covers both the German occupation of the islands and the Allied operations, with original equipment and personal testimonies. It is small, serious, and very well presented.",
          ja: "ロフォーテンは第二次世界大戦中にノルウェーで最も戦略的に争われた地域の一つでした。イギリスは1941年と1942年にここで数回のコマンド作戦を実施しました。博物館はドイツによる島々の占領と連合軍の作戦の両方を、オリジナルの機器と個人の証言とともに網羅しています。",
          zh: "罗弗敦是二战期间挪威战略争夺最激烈的地区之一。英国在1941年和1942年在这里进行了几次突击队袭击——摧毁为德国炸药提供甘油的鱼油工厂，并疏散当地志愿者训练为自由挪威军队。博物馆涵盖了德国对岛屿的占领和盟军行动，配有原始装备和个人证词。",
        },
        type: "cultural_story",
        coordinates: [68.2348, 14.5659],
        imageUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
        followUpTopic: {
          en: "The Allied commando raids on Lofoten in 1941–42",
          ja: "1941〜42年のロフォーテンへの連合軍コマンド作戦",
          zh: "1941-42年盟军对罗弗敦的突击队袭击",
        },
      },
      {
        id: "weather-return-cafe",
        title: {
          en: "Return: Torget & the Harbour Café",
          ja: "帰還：トルゲットとハーバーカフェ",
          zh: "返回：托尔盖特和港口咖啡馆",
        },
        description: {
          en: "You are back at Torget. Your bus departs from the pier 100 metres to your left. If you have time before departure, the harbour café serves local fish soup — a Lofoten staple made with the day's catch, cream, and root vegetables. In bad weather, it is always warm inside. The group meeting point is the orange bollard at the end of the main pier. You cannot miss it.",
          ja: "トルゲットに戻りました。バスは左100メートルの桟橋から出発します。出発前に時間がある場合、ハーバーカフェではその日の漁獲物、クリーム、根菜で作ったロフォーテンの定番ローカルフィッシュスープを提供しています。グループの集合場所はメイン桟橋の端のオレンジ色のボラードです。",
          zh: "您回到了托尔盖特。您的巴士从左边100米的码头出发。如果在出发前有时间，港口咖啡馆供应当地鱼汤——这是罗弗敦的主食，用当天的渔获、奶油和根茎蔬菜制成。团队集合点是主码头末端的橙色系缆桩。不会错过它的。",
        },
        type: "city_highlight",
        coordinates: [68.2343, 14.5671],
      },
    ],
  },
]

// Backwards compatibility alias used by explore pages
export const osloRoutes = lofotenRoutes
export type OsloRoute = LofotenRoute
