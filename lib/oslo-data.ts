export type Lang = "en" | "no"
export type POIType = "city_highlight" | "industry_poi" | "host_narrative"

export interface LocalizedString {
  en: string
  no: string
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

export interface OsloRoute {
  id: string
  title: LocalizedString
  theme: LocalizedString
  summary: LocalizedString
  duration: string
  distance: string
  startCoords: [number, number]
  endCoords: [number, number]
  pois: POI[]
}

export const osloRoutes: OsloRoute[] = [
  {
    id: "banking-financial-history",
    title: {
      en: "Banking & Financial History Walk",
      no: "Bank- og finanshistorisk vandring",
    },
    theme: { en: "Banking & Finance", no: "Bank og finans" },
    summary: {
      en: "Follow the institutions that built Oslo into a Nordic financial capital — from the first savings banks to the modern central bank.",
      no: "Følg institusjonene som bygde Oslo til en nordisk finanshovedstad — fra de første sparebankene til den moderne sentralbanken.",
    },
    duration: "60 min",
    distance: "2.8 km",
    startCoords: [59.9108, 10.7404],
    endCoords: [59.9090, 10.7500],
    pois: [
      {
        id: "norges-bank",
        title: { en: "Norges Bank", no: "Norges Bank" },
        description: {
          en: "Established in 1816, Norges Bank is one of the oldest central banks in the world. Its neoclassical headquarters on Bankplassen has overseen Norway's monetary policy through oil booms, financial crises, and the creation of the Government Pension Fund — now the world's largest sovereign wealth fund.",
          no: "Etablert i 1816 er Norges Bank en av verdens eldste sentralbanker. Dens neoklassiske hovedkvarter på Bankplassen har overvåket Norges pengepolitikk gjennom oljeoppganger, finanskriser og opprettelsen av Statens pensjonsfond — nå verdens største statlige investeringsfond.",
        },
        type: "industry_poi",
        coordinates: [59.9108, 10.7404],
        imageUrl: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&q=80",
        followUpTopic: {
          en: "Norway's sovereign wealth fund strategy",
          no: "Norges statlige investeringsstrategier",
        },
      },
      {
        id: "oslo-bors",
        title: { en: "Oslo Stock Exchange", no: "Oslo Børs" },
        description: {
          en: "Founded in 1819, Oslo Børs is one of Scandinavia's oldest exchanges. Today it is part of Euronext and hosts over 200 listed companies, with energy and shipping sectors dominating. The exchange building's trading floor witnessed every major boom and crash in Norwegian economic history.",
          no: "Grunnlagt i 1819 er Oslo Børs en av Skandinavias eldste børser. I dag er den en del av Euronext og huser over 200 børsnoterte selskaper, med energi- og shippingsektorer som dominerer. Børsens handelsgulv vitnet om enhver større oppgang og krasj i norsk økonomisk historie.",
        },
        type: "industry_poi",
        coordinates: [59.9103, 10.7413],
        followUpTopic: {
          en: "Nordic capital markets and energy sector listings",
          no: "Nordiske kapitalmarkeder og energisektorens børsnoteringer",
        },
      },
      {
        id: "christiania-sparebank",
        title: { en: "The Old Christiania Savings Bank", no: "Den gamle Christiania Sparebank" },
        description: {
          en: "Built in 1827, this building housed one of Norway's first savings banks — an institution that allowed ordinary citizens to accumulate capital at a time when banking was reserved for the elite. The savings bank movement it represents transformed Norwegian society and funded the merchant class that drove Oslo's 19th-century expansion.",
          no: "Bygget i 1827 huset denne bygningen en av Norges første sparebanker — en institusjon som lot vanlige borgere akkumulere kapital på en tid da bankvirksomhet var forbeholdt eliten.",
        },
        type: "host_narrative",
        coordinates: [59.9097, 10.7355],
        followUpTopic: {
          en: "The democratisation of banking in Scandinavia",
          no: "Demokratiseringen av bankvesen i Skandinavia",
        },
      },
      {
        id: "dnb-hq",
        title: { en: "DNB — Norway's Largest Bank", no: "DNB — Norges største bank" },
        description: {
          en: "DNB is Norway's largest financial services group and one of the largest in the Nordic region, with roots going back to 1822. Its headquarters near Aker Brygge serves over 2 million retail customers and manages assets across shipping finance, energy lending, and corporate banking — sectors that defined Norwegian economic identity in the 20th century.",
          no: "DNB er Norges største finanskonsern og ett av de største i Norden, med røtter tilbake til 1822. Dens hovedkvarter nær Aker Brygge betjener over 2 millioner privatkunder.",
        },
        type: "industry_poi",
        coordinates: [59.9050, 10.7578],
        followUpTopic: {
          en: "Nordic banking consolidation and the DNB model",
          no: "Nordisk bankkonsolidering og DNB-modellen",
        },
      },
      {
        id: "city-hall-finance",
        title: { en: "Oslo City Hall — Capital of Capital", no: "Oslo Rådhus — Kapitalens by" },
        description: {
          en: "Oslo City Hall, completed in 1950, represents a city transformed by financial confidence. The murals inside chart Norway's rise from fishing and farming to an industrial and financial powerhouse. The Nobel Peace Prize ceremony held here each December draws the world's attention — a reminder that Oslo punches far above its population size on the global stage.",
          no: "Oslo Rådhus, ferdigstilt i 1950, representerer en by forvandlet av finansiell selvtillit. Muralene innenfor kartlegger Norges fremvekst fra fiske og jordbruk til en industriell og finansiell stormakt.",
        },
        type: "city_highlight",
        coordinates: [59.9112, 10.7294],
        followUpTopic: {
          en: "Oslo's transformation from fishing town to Nordic capital",
          no: "Oslos transformasjon fra fiskeby til nordisk hovedstad",
        },
      },
      {
        id: "aker-brygge-history",
        title: { en: "Aker Brygge — From Shipyard to Financial Quarter", no: "Aker Brygge — Fra verft til finanskvarter" },
        description: {
          en: "Once Norway's most important shipyard, Aker Brygge was transformed in the 1980s into a mixed-use development that became a symbol of Oslo's post-industrial reinvention. The site represents a deliberate economic shift: from heavy industry to finance, services, and urban lifestyle — a pattern replicated across Nordic cities in the same era.",
          no: "En gang Norges viktigste verft ble Aker Brygge på 1980-tallet forvandlet til et blandet utbyggingsprosjekt som ble et symbol på Oslos post-industrielle nyoppfinnelse.",
        },
        type: "city_highlight",
        coordinates: [59.9080, 10.7325],
      },
    ],
  },

  {
    id: "fintech-startups",
    title: {
      en: "Fintech & Startups Tour",
      no: "Fintech og oppstartstur",
    },
    theme: { en: "Fintech & Innovation", no: "Fintech og innovasjon" },
    summary: {
      en: "Discover Oslo's emerging fintech cluster — the startups, coworking spaces, and accelerators reshaping how Scandinavia thinks about money.",
      no: "Oppdag Oslos voksende fintech-klynge — oppstartsselskapene, coworking-stedene og akseleratorene som omformer Skandinavias tanker om penger.",
    },
    duration: "50 min",
    distance: "2.4 km",
    startCoords: [59.9080, 10.7325],
    endCoords: [59.9165, 10.7490],
    pois: [
      {
        id: "mesh-oslo",
        title: { en: "Mesh — Oslo's Startup Hub", no: "Mesh — Oslos oppstartshub" },
        description: {
          en: "Mesh is one of Scandinavia's leading coworking and startup communities, housing hundreds of founders, developers, and investors under one roof. Its location in central Oslo reflects the city's ambition to build a startup ecosystem capable of competing with Stockholm and Copenhagen — and increasingly, it is succeeding.",
          no: "Mesh er ett av Skandinavias ledende coworking- og oppstartsfellesskap, med hundrevis av gründere, utviklere og investorer under ett tak. Dets beliggenhet i sentrale Oslo gjenspeiler byens ambisjon om å bygge et oppstartsøkosystem.",
        },
        type: "industry_poi",
        coordinates: [59.9130, 10.7481],
        followUpTopic: {
          en: "Oslo's startup ecosystem and funding landscape",
          no: "Oslos oppstartsøkosystem og finansieringslandskap",
        },
      },
      {
        id: "schibsted-campus",
        title: { en: "Schibsted — Media Turned Tech Investor", no: "Schibsted — Fra media til tech-investor" },
        description: {
          en: "Schibsted began as a 19th-century newspaper publisher and transformed itself into one of Europe's most successful digital marketplaces. Its Oslo campus houses a product and engineering organisation that has spun out several fintech ventures. Schibsted's story is a template for how legacy companies can reinvent themselves through technology investment.",
          no: "Schibsted startet som et avisforlag på 1800-tallet og forvandlet seg til et av Europas mest vellykkede digitale markedsplasser. Dets Oslo-campus huser en produkt- og ingeniørorganisasjon som har spinnet ut flere fintech-ventures.",
        },
        type: "industry_poi",
        coordinates: [59.9172, 10.7556],
        followUpTopic: {
          en: "How Nordic media companies pivoted to tech",
          no: "Hvordan nordiske medieselskaper pivoterte til tech",
        },
      },
      {
        id: "vipps-district",
        title: { en: "Vipps — Norway's Payment Revolution", no: "Vipps — Norges betalingsrevolusjon" },
        description: {
          en: "Vipps, launched in 2015 by DNB, became Norway's dominant mobile payment platform within three years — used by over 4 million Norwegians in a country of 5 million. The product's rapid adoption reflects Norway's unusually high digital trust, strong smartphone penetration, and a banking sector willing to cannibalise its own revenue in pursuit of platform dominance.",
          no: "Vipps, lansert i 2015 av DNB, ble Norges dominerende mobilbetalingsplattform innen tre år — brukt av over 4 millioner nordmenn i et land med 5 millioner.",
        },
        type: "industry_poi",
        coordinates: [59.9100, 10.7430],
        followUpTopic: {
          en: "Vipps MobilePay merger and Nordic payment consolidation",
          no: "Vipps MobilePay-fusjonen og nordisk betalingskonsolidering",
        },
      },
      {
        id: "oslo-fintech-hub",
        title: { en: "Oslo Fintech Hub", no: "Oslo Fintech Hub" },
        description: {
          en: "Established with support from Finance Norway and Oslo municipality, Oslo Fintech Hub is the official meeting point between established financial institutions and challenger startups. It hosts regulatory sandboxes, investor introductions, and accelerator programmes — and is becoming a model for how traditional financial centres can embrace disruption rather than resist it.",
          no: "Etablert med støtte fra Finance Norway og Oslo kommune er Oslo Fintech Hub det offisielle møtepunktet mellom etablerte finansinstitusjoner og utfordrer-startups.",
        },
        type: "industry_poi",
        coordinates: [59.9116, 10.7380],
        followUpTopic: {
          en: "Regulatory sandboxes and fintech policy in Norway",
          no: "Regulatoriske sandkasser og fintech-politikk i Norge",
        },
      },
      {
        id: "torget-startup-district",
        title: { en: "Youngstorget — Ideas Made Real", no: "Youngstorget — Ideer gjort til virkelighet" },
        description: {
          en: "Youngstorget has long been Oslo's square of political ideas and civic organisation. Today the surrounding streets are filling with startup offices, venture funds, and innovation studios — a new kind of ambition replacing the old. The square itself still hosts public debates and market stalls, a reminder that the best innovation happens at the intersection of tradition and disruption.",
          no: "Youngstorget har lenge vært Oslos torg for politiske ideer og borgerlig organisering. I dag fylles de omkringliggende gatene med startup-kontorer, venturekapitalfond og innovasjonsstudioer.",
        },
        type: "city_highlight",
        coordinates: [59.9165, 10.7490],
      },
    ],
  },

  {
    id: "oslo-culture-highlights",
    title: {
      en: "Oslo Culture & Highlights",
      no: "Oslo kultur og høydepunkter",
    },
    theme: { en: "Culture & City", no: "Kultur og by" },
    summary: {
      en: "The essential Oslo — a walk through the city's most iconic landmarks, waterfront, and cultural institutions that define this small but ambitious capital.",
      no: "Det vesentlige Oslo — en gåtur gjennom byens mest ikoniske landemerker, strandpromenade og kulturinstitusjoner som definerer denne lille, men ambisiøse hovedstaden.",
    },
    duration: "75 min",
    distance: "3.2 km",
    startCoords: [59.9175, 10.7278],
    endCoords: [59.9075, 10.7530],
    pois: [
      {
        id: "royal-palace",
        title: { en: "The Royal Palace", no: "Slottet" },
        description: {
          en: "Built between 1825 and 1849, the Royal Palace sits at the end of Karl Johans gate, Oslo's main ceremonial boulevard. Unlike most European royal residences, the palace is publicly accessible on guided tours and the surrounding park is always open. The daily changing of the guard at 1:30pm is a reminder that Norway maintains its constitutional monarchy with an easy confidence.",
          no: "Bygget mellom 1825 og 1849 ligger Slottet for enden av Karl Johans gate, Oslos viktigste seremonielle boulevarden. I motsetning til de fleste europeiske kongelige residenser er palasset offentlig tilgjengelig på guidede turer.",
        },
        type: "city_highlight",
        coordinates: [59.9175, 10.7278],
        imageUrl: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=800&q=80",
      },
      {
        id: "nasjonaltheatret",
        title: { en: "Nationaltheatret", no: "Nationaltheatret" },
        description: {
          en: "Opened in 1899, Nationaltheatret is Norway's primary stage for drama and was built to give the Norwegian language — not Danish — its rightful place in Norwegian cultural life. Ibsen and Bjørnson, the twin giants of Norwegian literature, stand in bronze outside. The theatre's programme continues to balance classical works with bold contemporary productions.",
          no: "Åpnet i 1899 er Nationaltheatret Norges primære dramatikkscene og ble bygget for å gi det norske språket — ikke dansk — sin rettmessige plass i det norske kulturliv.",
        },
        type: "city_highlight",
        coordinates: [59.9145, 10.7319],
      },
      {
        id: "aker-brygge-waterfront",
        title: { en: "Aker Brygge Waterfront", no: "Aker Brygge strandpromenade" },
        description: {
          en: "The Aker Brygge waterfront is Oslo's living room — a place where the city's relationship with the fjord becomes tangible. Restaurants, galleries, and pedestrian promenades line the water's edge. On a clear day, the view stretches across the Oslofjord to the forested hills of Nesodden. It is a deliberate urban planning success: a former industrial site transformed into a place of civic pleasure.",
          no: "Aker Brygge strandpromenade er Oslos stue — et sted hvor byens forhold til fjorden blir håndgripelig. Restauranter, gallerier og fotgjengerpromenacer følger vannkanten.",
        },
        type: "city_highlight",
        coordinates: [59.9080, 10.7325],
        imageUrl: "https://images.unsplash.com/photo-1589308154706-a27d6a4dc8c7?w=800&q=80",
      },
      {
        id: "oslo-opera-house",
        title: { en: "Oslo Opera House", no: "Operahuset i Oslo" },
        description: {
          en: "Opened in 2008 and designed by Snøhetta, the Oslo Opera House is one of the most celebrated pieces of architecture in contemporary Europe. Its white marble and granite form rises from the fjord so that visitors can walk across the roof — creating a public space that belongs to everyone. The building won the Mies van der Rohe Award in 2009 and is widely credited with triggering the regeneration of the Bjørvika waterfront.",
          no: "Åpnet i 2008 og designet av Snøhetta er Oslo Operahuset et av de mest berømte arkitekturverk i dagens Europa. Dets hvite marmor- og granittform reiser seg fra fjorden slik at besøkende kan gå over taket.",
        },
        type: "city_highlight",
        coordinates: [59.9075, 10.7530],
        imageUrl: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=800&q=80",
        followUpTopic: {
          en: "Nordic architecture and urban regeneration",
          no: "Nordisk arkitektur og byfornyelse",
        },
      },
      {
        id: "karl-johans-gate",
        title: { en: "Karl Johans gate", no: "Karl Johans gate" },
        description: {
          en: "Oslo's main ceremonial street, named after the Swedish-Norwegian king who transformed the city, runs 1.3 kilometres from the Central Station to the Royal Palace. It passes the Parliament building, the University of Oslo's original campus, the Grand Hotel — where Ibsen took his daily walk — and a dozen landmarks that condense Norwegian history into a single walk.",
          no: "Oslos viktigste seremonielle gate, oppkalt etter den svensk-norske kongen som forvandlet byen, strekker seg 1,3 kilometer fra Sentralstasjonen til Slottet.",
        },
        type: "city_highlight",
        coordinates: [59.9135, 10.7400],
      },
    ],
  },

  {
    id: "innovation-investment-trail",
    title: {
      en: "Innovation & Investment Trail",
      no: "Innovasjons- og investeringssporet",
    },
    theme: { en: "Investment & Venture Capital", no: "Investering og venturekapital" },
    summary: {
      en: "Trace the flow of capital from Norway's sovereign wealth fund through to the venture ecosystem funding the next generation of Nordic companies.",
      no: "Spor kapitalflyten fra Norges statlige investeringsfond gjennom til venture-økosystemet som finansierer neste generasjon nordiske selskaper.",
    },
    duration: "65 min",
    distance: "3.0 km",
    startCoords: [59.9059, 10.7258],
    endCoords: [59.9174, 10.7524],
    pois: [
      {
        id: "tjuvholmen-art",
        title: { en: "Tjuvholmen — Where Capital Meets Culture", no: "Tjuvholmen — Der kapital møter kultur" },
        description: {
          en: "Tjuvholmen, literally 'Thieves' Island', was once Oslo's most lawless neighbourhood. Today it is one of the most expensive addresses in Norway — home to the Astrup Fearnley Museum of Modern Art, private equity offices, and architect-designed residences. The transformation from crime to capital is stark and deliberate, and reflects how Norwegian wealth is increasingly expressed through cultural investment.",
          no: "Tjuvholmen var en gang Oslos mest lovløse nabolag. I dag er det en av de dyreste adressene i Norge — hjemsted for Astrup Fearnley Museum for moderne kunst, private equity-kontorer og arkitekttegnede boliger.",
        },
        type: "city_highlight",
        coordinates: [59.9059, 10.7258],
        imageUrl: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80",
        followUpTopic: {
          en: "Art as an asset class and Nordic cultural investment",
          no: "Kunst som aktivaklasse og nordisk kulturinvestering",
        },
      },
      {
        id: "nbim-area",
        title: { en: "The Sovereign Wealth Fund — The World's Largest", no: "Statens pensjonsfond — Verdens største" },
        description: {
          en: "Norway's Government Pension Fund Global, managed by Norges Bank Investment Management (NBIM), holds stakes in over 9,000 companies across 70 countries and is worth approximately 1.7 trillion USD — the equivalent of over 300,000 USD per Norwegian citizen. The fund was built on oil revenues but is now a major force in global equities, fixed income, and real estate. Its ethical guidelines exclude companies involved in weapons, tobacco, and severe environmental harm.",
          no: "Norges statlige pensjonsfond Utland, forvaltet av Norges Bank Investment Management (NBIM), holder eierandeler i over 9 000 selskaper i 70 land og er verdt omtrent 1,7 billioner USD.",
        },
        type: "industry_poi",
        coordinates: [59.9108, 10.7404],
        followUpTopic: {
          en: "Responsible investing and ESG frameworks in sovereign funds",
          no: "Ansvarlig investering og ESG-rammeverk i statlige fond",
        },
      },
      {
        id: "nrk-dokkbygget",
        title: { en: "Dokkbygget Innovation District", no: "Dokkbygget innovasjonsdistrikt" },
        description: {
          en: "The Dokkbygget area near Filipstad has become a concentration point for Oslo's emerging tech and creative economy. Former warehouse buildings now house product studios, design agencies, and early-stage investment firms. The area is part of a broader western waterfront strategy to extend the Aker Brygge transformation further along the fjord.",
          no: "Dokkbygget-området nær Filipstad har blitt et konsentrasjonspunkt for Oslos fremvoksende tech- og kreativ økonomi. Tidligere lagerbygninger huser nå produktstudioer, designbyråer og tidligfase-investeringsfirmaer.",
        },
        type: "host_narrative",
        coordinates: [59.9038, 10.7528],
      },
      {
        id: "alliance-venture",
        title: { en: "Nordic Venture Capital — A Growing Force", no: "Nordisk venturekapital — En voksende kraft" },
        description: {
          en: "The Nordics have quietly built one of the world's most productive startup ecosystems per capita — producing Spotify, Klarna, Kahoot, and Autostore among many others. Oslo's venture community, anchored by firms like Alliance Venture, Investinor, and Northzone, is increasingly writing larger cheques into later-stage rounds as the ecosystem matures. The city's density makes deal flow surprisingly efficient.",
          no: "Norden har stille bygget ett av verdens mest produktive oppstartsøkosystem per innbygger — og produsert Spotify, Klarna, Kahoot og Autostore blant mange andre.",
        },
        type: "industry_poi",
        coordinates: [59.9120, 10.7490],
        followUpTopic: {
          en: "Nordic venture capital returns and exit landscape",
          no: "Nordiske venturekapitalavkastninger og exit-landskap",
        },
      },
      {
        id: "oslo-science-park",
        title: { en: "Gaustadbekkdalen — Oslo's Deep Tech Corridor", no: "Gaustadbekkdalen — Oslos Deep Tech-korridor" },
        description: {
          en: "North of the city centre, the Gaustadbekkdalen area houses the University of Oslo's research park, Simula Research Laboratory, and a cluster of deep tech companies spun out of academic research. This is where Norway's investment in fundamental research translates into commercial ventures in areas like quantum computing, marine biology, and climate technology.",
          no: "Nord for sentrum huser Gaustadbekkdalen Universitetet i Oslos forskningspark, Simula Research Laboratory, og en klynge av deep tech-selskaper utspunnet fra akademisk forskning.",
        },
        type: "industry_poi",
        coordinates: [59.9174, 10.7524],
        followUpTopic: {
          en: "University spin-outs and deep tech investment in Norway",
          no: "Universitets-spinouts og deep tech-investering i Norge",
        },
      },
    ],
  },

  {
    id: "corporate-innovation-hybrid",
    title: {
      en: "Corporate Innovation Hybrid Walk",
      no: "Hybrid bedriftsinnovasjonsvandring",
    },
    theme: { en: "Corporate Innovation", no: "Bedriftsinnovasjon" },
    summary: {
      en: "A curated blend — Oslo's best city highlights alongside the innovation and finance stories most relevant to corporate event guests.",
      no: "En kuratert blanding — Oslos beste byhøydepunkter kombinert med innovasjons- og finanshistoriene mest relevante for bedriftens gjester.",
    },
    duration: "90 min",
    distance: "4.0 km",
    startCoords: [59.9112, 10.7294],
    endCoords: [59.9075, 10.7530],
    pois: [
      {
        id: "city-hall-hybrid",
        title: { en: "Oslo City Hall — A Statement of Intent", no: "Oslo Rådhus — En intensjonserklæring" },
        description: {
          en: "Oslo City Hall was 20 years in the making, delayed by wars and economic downturns, but its completion in 1950 announced a city confident in its future. The murals inside are extraordinary — a 2,000 square metre narrative of Norwegian working life, industry, and democratic values. For corporate guests, the hall represents what can be built when institutions commit to a long-term vision.",
          no: "Oslo Rådhus var 20 år underveis, forsinket av kriger og økonomiske nedgangstider, men fullførelsen i 1950 annonserte en by trygg på sin fremtid. Muralene innenfor er ekstraordinære.",
        },
        type: "city_highlight",
        coordinates: [59.9112, 10.7294],
        imageUrl: "https://images.unsplash.com/photo-1589308154706-a27d6a4dc8c7?w=800&q=80",
      },
      {
        id: "innovation-norway-hq",
        title: { en: "Innovation Norway", no: "Innovasjon Norge" },
        description: {
          en: "Innovation Norway is the government's primary instrument for stimulating Norwegian industry and trade. It funds startups, supports exports, and facilitates international partnerships for Norwegian companies. For foreign corporate visitors, it is often the first point of contact when exploring Norwegian market entry or partnership opportunities — and its office near the waterfront reflects the outward-facing orientation of modern Norwegian industrial policy.",
          no: "Innovasjon Norge er regjeringens primære instrument for å stimulere norsk industri og handel. Det finansierer oppstarter, støtter eksport og tilrettelegger internasjonale partnerskap for norske selskaper.",
        },
        type: "industry_poi",
        coordinates: [59.9095, 10.7310],
        followUpTopic: {
          en: "Norwegian market entry and Innovation Norway programmes",
          no: "Norsk markedsinngang og Innovasjon Norge-programmer",
        },
      },
      {
        id: "aker-brygge-hybrid",
        title: { en: "Aker Brygge — Reinvention as Strategy", no: "Aker Brygge — Nyoppfinnelse som strategi" },
        description: {
          en: "The Aker Brygge transformation is a corporate strategy lesson written in concrete and glass. Aker ASA — the industrial conglomerate that owned the original shipyard — deliberately divested from manufacturing and reinvested in energy, finance, and real estate. The shipyard site became some of Oslo's most valuable urban real estate. The move was controversial but ultimately prescient: a company that refused to be defined by what it had always been.",
          no: "Aker Brygge-transformasjonen er en bedriftsstrategi-leksjon skrevet i betong og glass. Aker ASA — det industrielle konsernet som eide det opprinnelige verftet — solgte seg bevisst ut av produksjon og reinvesterte i energi, finans og eiendom.",
        },
        type: "host_narrative",
        coordinates: [59.9080, 10.7325],
        followUpTopic: {
          en: "Corporate portfolio transformation and industrial reinvention",
          no: "Bedriftsporteføljetransformasjon og industriell nyoppfinnelse",
        },
      },
      {
        id: "norges-bank-hybrid",
        title: { en: "Norges Bank — The Long Game", no: "Norges Bank — Det lange spillet" },
        description: {
          en: "The Government Pension Fund Global, managed from Norges Bank's headquarters, is perhaps the most patient institutional investor in the world. It operates on a 30-to-100-year time horizon, holding shares in most of the world's publicly listed companies and advocating for good governance, transparency, and long-term value creation. In an era of quarterly reporting pressure, it represents a different model of corporate ownership entirely.",
          no: "Statens pensjonsfond Utland, forvaltet fra Norges Banks hovedkvarter, er kanskje verdens mest tålmodige institusjonelle investor. Det opererer med en 30-til-100-årig tidshorisont.",
        },
        type: "industry_poi",
        coordinates: [59.9108, 10.7404],
        followUpTopic: {
          en: "Long-term investing and the patient capital model",
          no: "Langsiktig investering og den tålmodige kapitalmodellen",
        },
      },
      {
        id: "opera-hybrid",
        title: { en: "Oslo Opera House — Architecture as Signal", no: "Operahuset — Arkitektur som signal" },
        description: {
          en: "When Oslo chose Snøhetta to design its opera house, it was making a statement about the kind of city it intended to become. The building's radical accessibility — you walk on its roof, you swim beside it in summer — reflects a Scandinavian conviction that cultural infrastructure should belong to everyone, not just those who can afford tickets. The Bjørvika district that grew around it is now Oslo's most dynamic development zone.",
          no: "Da Oslo valgte Snøhetta for å designe operahuset, markerte det hvilken type by det hadde tenkt å bli. Bygningens radikale tilgjengelighet — du går på taket, du svømmer ved siden av det om sommeren — gjenspeiler en skandinavisk overbevisning.",
        },
        type: "city_highlight",
        coordinates: [59.9075, 10.7530],
        imageUrl: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?w=800&q=80",
        followUpTopic: {
          en: "Oslo's Fjord City masterplan and urban waterfront strategy",
          no: "Oslos Fjordbyen-masterplan og urban strandpromenadet-strategi",
        },
      },
      {
        id: "stortinget",
        title: { en: "Stortinget — The Parliament", no: "Stortinget — Nasjonalforsamlingen" },
        description: {
          en: "Built in 1866, Norway's parliament building sits at the heart of Karl Johans gate. Norway's political system — characterised by coalition governments, strong social partnership between employers and trade unions, and high levels of civic trust — has produced remarkable economic and social stability. The country consistently ranks among the world's highest on indices of democracy, equality, and wellbeing, outcomes that are inseparable from its institutional design.",
          no: "Bygget i 1866 ligger Norges parlamentsbygning i hjertet av Karl Johans gate. Norges politiske system — preget av koalisjonsregjeringer, sterkt sosialt partnerskap mellom arbeidsgivere og fagforeninger og høy borgertillit — har produsert bemerkelsesverdig økonomisk og sosial stabilitet.",
        },
        type: "city_highlight",
        coordinates: [59.9135, 10.7395],
      },
    ],
  },
  {
    id: "oslo-essentials",
    title: {
      en: "Oslo — The Top 10",
      no: "Oslo — De ti beste",
    },
    theme: { en: "Oslo Essentials", no: "Oslo grunnleggende" },
    summary: {
      en: "The ten places that define this city. Not a tourist checklist — a considered introduction for intelligent visitors with an afternoon to spend.",
      no: "De ti stedene som definerer denne byen. Ikke en turistsjekkliste — en gjennomtenkt introduksjon for kloke besøkende med en ettermiddag til disposisjon.",
    },
    duration: "90 min",
    distance: "3.8 km",
    startCoords: [59.9080, 10.7325],
    endCoords: [59.9233, 10.7531],
    pois: [
      {
        id: "aker-brygge-essentials",
        title: { en: "Aker Brygge", no: "Aker Brygge" },
        description: {
          en: "The old Akers Mekaniske Verksteder shipyard closed in 1982 after 150 years; within a decade, the waterfront had become Oslo's most animated public space. Restaurants, galleries, and residences occupy what were once dry docks and machine halls. This is where the city chose to spend its leisure time — and the choice says something about how Oslo sees itself.",
          no: "Det gamle Akers Mekaniske Verksteder-verftet stengte i 1982 etter 150 år i drift; i løpet av et tiår hadde kaifronten blitt Oslos mest levende offentlige rom. Restauranter, gallerier og boliger fyller nå det som en gang var tørrdokker og maskinhaller. Her har byen valgt å tilbringe fritiden sin — og valget sier noe om hvordan Oslo ser på seg selv.",
        },
        type: "city_highlight",
        coordinates: [59.9080, 10.7325],
        followUpTopic: {
          en: "Oslo's post-industrial waterfront transformation",
          no: "Oslos post-industrielle kaifronttransformasjon",
        },
      },
      {
        id: "akershus-fortress",
        title: { en: "Akershus Fortress", no: "Akershus Festning" },
        description: {
          en: "Built around 1300 to defend the city, Akershus has been a royal residence, a prison for political detainees, and the site of wartime executions during the German occupation. Seven centuries of Oslo history are compressed into one site on the waterfront peninsula. Stand on the ramparts and you have the fjord, the city, and its full arc of past in one frame.",
          no: "Bygget rundt 1300 for å forsvare byen har Akershus tjent som kongelig residens, fengsel for politiske fanger og henrettelsessted under den tyske okkupasjonen. Sju hundre år med Oslos historie er komprimert på én kaifront. Stå på bastionene, og du har fjorden, byen og dens fulle historiske bue i ett bilde.",
        },
        type: "city_highlight",
        coordinates: [59.9068, 10.7386],
        followUpTopic: {
          en: "Oslo under German occupation, 1940–1945",
          no: "Oslo under tysk okkupasjon, 1940–1945",
        },
      },
      {
        id: "nobel-peace-center",
        title: { en: "The Nobel Peace Center", no: "Nobels Fredssenter" },
        description: {
          en: "Oslo holds the unusual distinction of awarding one of the five Nobel Prizes — the Peace Prize — while Stockholm handles the others. The Nobel Peace Center, opened in 2005, makes that choice visible: who was honoured, and why, in each year since 1901. That Oslo was entrusted with this particular prize is not accidental — it reflects the city's long tradition of quiet diplomatic engagement.",
          no: "Oslo innehar den uvanlige rettigheten å dele ut én av de fem Nobelprisene — Fredsprisen — mens Stockholm håndterer de øvrige. Nobels Fredssenter, åpnet i 2005, gjør dette valget synlig: hvem som ble hedret, og hvorfor, for hvert år siden 1901. At Oslo ble betrodd nettopp denne prisen er ikke tilfeldig — det gjenspeiler byens lange tradisjon for stille diplomatisk engasjement.",
        },
        type: "city_highlight",
        coordinates: [59.9094, 10.7272],
        followUpTopic: {
          en: "The politics of the Nobel Peace Prize selection",
          no: "Politikken bak utvelgelsen av Nobels fredspris",
        },
      },
      {
        id: "radhuset",
        title: { en: "Rådhuset — City Hall", no: "Rådhuset" },
        description: {
          en: "Most visitors photograph Rådhuset from the waterfront and move on — a mistake. The interior, completed after 20 years of construction in 1950, is covered in murals and frescoes by the foremost Norwegian artists of the era, documenting the country's history and working life. This is where the Nobel Peace Prize ceremony takes place each 10th of December, which gives the building a global significance its exterior barely hints at.",
          no: "De fleste besøkende fotograferer Rådhuset fra kaifronten og går videre — en feiltagelse. Interiøret, ferdigstilt etter 20 års bygging i 1950, er dekket av veggmalerier og fresker av tidens fremste norske kunstnere, som dokumenterer landets historie og arbeidsliv. Det er her Nobels fredsprisseremoni avholdes hvert 10. desember, noe som gir bygningen en global betydning dens eksteriør knapt antyder.",
        },
        type: "city_highlight",
        coordinates: [59.9112, 10.7294],
        followUpTopic: {
          en: "Norwegian public art of the 20th century",
          no: "Norsk offentlig kunst på 1900-tallet",
        },
      },
      {
        id: "karl-johans-gate",
        title: { en: "Karl Johans gate", no: "Karl Johans gate" },
        description: {
          en: "Planned in the early 19th century as the city's ceremonial axis, Karl Johans gate runs in a deliberate straight line from the Royal Palace at one end to the Storting and the cathedral at the other. The geometry is a statement: monarchy, democracy, and faith arranged in a single line of sight. Oslo's parades, protests, and public moments happen here.",
          no: "Planlagt på begynnelsen av 1800-tallet som byens seremonielle akse, strekker Karl Johans gate seg i en bevisst rett linje fra Slottet i den ene enden til Stortinget og domkirken i den andre. Geometrien er en erklæring: monarki, demokrati og tro arrangert i én siktlinje. Oslos parader, demonstrasjoner og offentlige øyeblikk utspiller seg her.",
        },
        type: "city_highlight",
        coordinates: [59.9138, 10.7387],
        followUpTopic: {
          en: "Urban planning in 19th-century Christiania",
          no: "Byplanlegging i 1800-tallets Christiania",
        },
      },
      {
        id: "royal-palace",
        title: { en: "The Royal Palace & Palace Park", no: "Slottet og Slottsparken" },
        description: {
          en: "Built between 1825 and 1849, the palace was designed to project Scandinavian royal authority — and has ended up projecting something quite different: accessibility. The park surrounding it is open to the public every day, with no outer perimeter fence. Norwegians walk their dogs here, sit on the lawn, and largely ignore the palace with a democratic indifference the monarchy appears to have made peace with.",
          no: "Bygget mellom 1825 og 1849 for å utstråle skandinavisk kongelig autoritet, har slottet endt opp med å formidle noe ganske annet: tilgjengelighet. Parken rundt det er åpen for alle hver dag, uten ytre gjerde. Osloborgere lufter hundene sine her, sitter på plenen og ignorerer slottet med en demokratisk likegyldighet monarkiet tilsynelatende har gjort fred med.",
        },
        type: "city_highlight",
        coordinates: [59.9197, 10.7269],
        followUpTopic: {
          en: "Nordic constitutional monarchies",
          no: "Nordiske konstitusjonelle monarkier",
        },
      },
      {
        id: "national-museum",
        title: { en: "The National Museum", no: "Nasjonalmuseet" },
        description: {
          en: "Opened in 2022 after uniting four separate institutions, the National Museum is now the largest art museum in the Nordic countries. Edvard Munch's The Scream is here — the 1893 tempera version, in a room designed specifically around it. The building itself, by Kleihues + Schuwerk, is worth the visit independently: a considered Nordic structure that respects its waterfront setting without trying to compete with it.",
          no: "Åpnet i 2022 etter å ha samlet fire separate institusjoner, er Nasjonalmuseet nå det største kunstmuseet i Norden. Edvard Munchs Skrik er her — 1893-versjonen i tempera, i et rom spesielt utformet rundt det. Selve bygningen, av Kleihues + Schuwerk, er verdt besøket i seg selv: en gjennomtenkt nordisk konstruksjon som respekterer kaifrontomgivelsene uten å forsøke å konkurrere med dem.",
        },
        type: "city_highlight",
        coordinates: [59.9121, 10.7257],
        followUpTopic: {
          en: "Edvard Munch and Norwegian expressionism",
          no: "Edvard Munch og norsk ekspresjonisme",
        },
      },
      {
        id: "storting-eidsvoll",
        title: { en: "Eidsvoll plass & the Storting", no: "Eidsvoll plass og Stortinget" },
        description: {
          en: "The Norwegian constitution was signed at Eidsvoll in 1814, just 110 kilometres north of this square — the document established one of the most liberal democracies of its era. The Storting that upholds it has sat on this square since 1866, facing Karl Johans gate across a space still used for public assembly. This is where Norwegian democracy has a permanent, physical address.",
          no: "Den norske grunnloven ble undertegnet på Eidsvoll i 1814, bare 110 kilometer nord for dette torget — dokumentet etablerte et av sin tids mest liberale demokratier. Stortinget som ivaretar den har hatt tilhold på denne plassen siden 1866, vendt mot Karl Johans gate over et rom som fremdeles brukes til folkemøter. Her har norsk demokrati sin permanente, fysiske adresse.",
        },
        type: "city_highlight",
        coordinates: [59.9143, 10.7379],
        followUpTopic: {
          en: "The Eidsvoll constitution and Norwegian independence",
          no: "Eidsvollgrunnloven og norsk selvstendighet",
        },
      },
      {
        id: "tjuvholmen",
        title: { en: "Tjuvholmen", no: "Tjuvholmen" },
        description: {
          en: "Tjuvholmen — 'thief's islet' — was once where Oslo executed its criminals. Today it is the most architecturally deliberate development in the city: a carefully planned mixed waterfront neighbourhood completed in 2010, with the Astrup Fearnley Museum of Modern Art at its tip. The contrast between the name's history and the present reality is quintessential Oslo — thoughtful, unsentimental, forward.",
          no: "Tjuvholmen var en gang stedet der Oslo henrettet sine kriminelle. I dag er det den mest arkitektonisk bevisste utbyggingen i byen: et nøye planlagt blandet kaifrontstrøk fullført i 2010, med Astrup Fearnley Museet for moderne kunst ytterst på pynten. Kontrasten mellom navnets historie og den nåværende virkeligheten er typisk Oslo — gjennomtenkt, uten sentimentalitet, fremtidsrettet.",
        },
        type: "city_highlight",
        coordinates: [59.9063, 10.7292],
        followUpTopic: {
          en: "Contemporary Nordic architecture and waterfront urban design",
          no: "Samtidig nordisk arkitektur og urban kaifrontutforming",
        },
      },
      {
        id: "mathallen-oslo",
        title: { en: "Mathallen Oslo", no: "Mathallen Oslo" },
        description: {
          en: "Opened in 2012 in the Vulkan development, Mathallen is a covered food market with around 30 vendors operating under one roof: fishmongers, cheesemakers, a butcher specialising in game, a baker, a coffee roaster. It reflects what Oslo has become in the last decade — a city with a confident, locally-rooted food culture that no longer needs to explain itself to international visitors. Come late morning for the full picture.",
          no: "Åpnet i 2012 i Vulkan-utbyggingen er Mathallen et overdekket matmarked med rundt 30 leverandører under ett tak: fiskehandlere, osteprodusenter, en slakter spesialisert på vilt, en baker, en kaffebrenner. Det speiler hva Oslo har blitt det siste tiåret — en by med en selvsikker, lokalt forankret matkultur som ikke lenger trenger å forklare seg for internasjonale besøkende. Kom sent på formiddagen for det fulle bildet.",
        },
        type: "host_narrative",
        coordinates: [59.9233, 10.7531],
        followUpTopic: {
          en: "New Nordic food culture and Oslo's restaurant scene",
          no: "Ny nordisk matkultur og Oslos restaurantscene",
        },
      },
    ],
  },
]
