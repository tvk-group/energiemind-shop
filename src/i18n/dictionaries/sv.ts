import type { Dictionary } from "@/i18n/types";

const sv: Dictionary = {
  site: {
    name: "EnergieMIND Shop",
    tagline: "Energimedveten gruv- och infrastrukturhårdvara",
    domain: "https://energiemind.shop",
    appUrl: "https://app.energiemind.shop",
  },
  nav: {
    home: "Hem",
    shop: "Butik",
    miningHeaters: "Gruvvärmare",
    bitcoinMiners: "Bitcoin-gruvar",
    energySystems: "Energisystem",
    solarPower: "Sol & el",
    monitoringDevices: "Övervakningsenheter",
    accessories: "Tillbehör",
    support: "Support",
    contact: "Kontakt",
    app: "App",
  },
  hero: {
    headline: "Energimedveten gruv- och infrastrukturhårdvara",
    subheadline:
      "Utrustning för nyttiggörande av gruvvärme, energiövervakning, solintegration och intelligenta infrastruktursystem.",
    browseProducts: "Bläddra bland produkter",
    requestCustomSetup: "Begär anpassad installation",
    getApp: "Hämta appen",
  },
  categories: {
    "mining-heaters": {
      title: "Gruvvärmare",
      description:
        "Bitcoin-gruvar utformade för återvinning av värme i bostäder och kommersiella lokaler. Omvandlar beräkningskraft till användbar termisk energi.",
      metaTitle: "Gruvvärmare | EnergieMIND Shop",
      metaDescription:
        "Gruvvärmare som omvandlar Bitcoin-gruvdrift till användbar värme. Professionell hårdvara för energimedvetna värmesystem.",
    },
    "bitcoin-miners": {
      title: "Bitcoin-gruvar",
      description:
        "Högeffektiva ASIC-gruvar för datacenter, industri och värmeintegrerade installationer.",
      metaTitle: "Bitcoin-gruvar | EnergieMIND Shop",
      metaDescription:
        "Professionella Bitcoin ASIC-gruvar med fullständiga specifikationer. Tillgängliga på begäran med anpassad installationssupport.",
    },
    "solar-power": {
      title: "Sol & el",
      description:
        "Solväxelriktare, hybridsystem och elkraftsinfrastruktur för gruvdrift och energioptimering.",
      metaTitle: "Sol- och elkraftutrustning | EnergieMIND Shop",
      metaDescription:
        "Solpaneler, hybridväxelriktare och kraftsystem för energimedveten gruvinfrastruktur.",
    },
    "monitoring-devices": {
      title: "Energiövervakning",
      description:
        "Realtidsövervakning av effekt, smarta uttag och infrastrukturtelemetri för optimerad energianvändning.",
      metaTitle: "Energiövervakningsenheter | EnergieMIND Shop",
      metaDescription:
        "Professionell energiövervakningshårdvara för gruvanläggningar och smart infrastruktur.",
    },
    "cooling-systems": {
      title: "Kylsystem",
      description:
        "Immersionskylning, kanalvärmeväxlare och termisk hantering för gruvhårdvara.",
      metaTitle: "Kylsystem | EnergieMIND Shop",
      metaDescription:
        "Gruvkylningslösningar inklusive immersionssatser och värmeväxlare för effektiv termisk hantering.",
    },
    accessories: {
      title: "Kablar & tillbehör",
      description:
        "Industriella nätaggregat, kablage och datacentertillbehör för gruvinstallationer.",
      metaTitle: "Gruvtillbehör | EnergieMIND Shop",
      metaDescription:
        "Nätaggregat, kablar och tillbehör för professionell gruv- och energiinfrastruktur.",
    },
    "energy-systems": {
      title: "Energisystem",
      description:
        "Integrerade energioptimeringssystem som kombinerar gruvdrift, uppvärmning, sol och övervakning.",
      metaTitle: "Energisystem | EnergieMIND Shop",
      metaDescription:
        "Kompletta energisystem för nyttiggörande av gruvvärme, solintegration och infrastrukturoptimering.",
    },
    "custom-installations": {
      title: "Anpassade installationer",
      description:
        "Skräddarsydda hårdvarupaket och installationsplanering för din specifika energiinfrastruktur.",
      metaTitle: "Anpassade installationer | EnergieMIND Shop",
      metaDescription:
        "Begär anpassade gruv- och energihårdvarulösningar anpassade till din byggnad och dina energimål.",
    },
  },
  productLabels: {
    brand: "Märke",
    model: "Modell",
    hashrate: "Hashrate",
    powerConsumption: "Effektförbrukning",
    heatOutput: "Värmeavgivning",
    voltage: "Spänning",
    useCase: "Användningsområde",
    warranty: "Garanti",
    shipping: "Frakt",
    installation: "Installationsanvisningar",
    riskNotice: "Risk- och säkerhetsmeddelande",
    price: "Pris",
    addToCart: "Lägg i varukorg",
    requestQuote: "Begär offert",
    specifications: "Tekniska specifikationer",
    availability: "Tillgänglighet",
    relatedProducts: "Relaterade produkter",
    notApplicable: "Ej tillämpligt",
  },
  availability: {
    onRequest: "Tillgänglig på begäran",
    preOrder: "Förhandsbeställningsförfrågan",
    customQuote: "Anpassad offert",
  },
  products: {
    "heatbit-v2": {
      name: "Gruvvärmare Heatbit V2",
      useCase:
        "Bostadsvärme med integrerad Bitcoin-gruvdrift. Idealisk för lägenheter och mindre hem med tillräcklig elkapacitet.",
      warranty: "2 års tillverkargaranti",
      shipping: "Skickas inom 5–10 arbetsdagar efter orderbekräftelse",
      installation:
        "Plug-and-play-installation. Kräver dedikerad 16 A-krets. Professionell elgranskning rekommenderas.",
      riskNotice:
        "Enhet med hög effektförbrukning. Säkerställ tillräcklig ventilation och kretskapacitet. Värmeavgivningen varierar med omgivningsförhållanden.",
    },
    "heatcore-pro-12": {
      name: "Gruvvärmare HeatCore Pro 12",
      useCase:
        "Integration med hydronisk uppvärmning i kommersiella och större bostadsbyggnader. Ansluts till befintliga radiator- eller golvvärmesystem.",
      warranty: "3 års garanti med valfri förlängd täckning",
      shipping: "Frakttransport. Leveranstid 2–4 veckor",
      installation:
        "Professionell installation krävs. Hydronisk anslutning av certifierad HVAC-tekniker.",
      riskNotice:
        "Industriell effektförbrukning. Byggnadens värmedistribution måste utvärderas före installation.",
    },
    "antminer-s21-hydro": {
      name: "Antminer S21 Hydro",
      useCase:
        "Högpresterande vattenkyld Bitcoin-gruvdrift för datacenter och industriella värmeåtervinningssystem.",
      warranty: "180 dagars tillverkargaranti",
      shipping: "Bulkorder skickas på pall. Leveranstid på begäran",
      installation:
        "Kräver vattenkylningsslinga och 380 V trefasström. Installation endast i datacenter.",
      riskNotice:
        "Industriell gruvutrustning. Professionell installation obligatorisk. Ingen lönsamhetsgaranti.",
    },
    "whatsminer-m60s": {
      name: "Whatsminer M60S",
      useCase:
        "Luftkyld ASIC-gruvar för kommersiella gruvanläggningar med potential för värmeåtervinning.",
      warranty: "180 dagars tillverkargaranti",
      shipping: "Tillgänglig på begäran. Regionala fraktalternativ varierar",
      installation:
        "Kräver tillräckligt kylningsluftflöde och 220 V/380 V elkraftsinfrastruktur.",
      riskNotice:
        "Genererar betydande värme och buller. Gruvintäkter garanteras inte.",
    },
    "solar-hybrid-8kw": {
      name: "Hybrid solväxelriktare 8 kW",
      useCase:
        "Hybrid solväxelriktare för att kompensera gruvdriftens elförbrukning med lokal produktion.",
      warranty: "5 års växelriktargaranti, valfri 10-års förlängning",
      shipping: "Skickas inom 7–14 arbetsdagar",
      installation:
        "Behörig elektriker och solinstallatör krävs. Nätanslutningsgodkännande kan behövas.",
      riskNotice:
        "Regler för nätanslutning varierar per region. Professionell installation krävs.",
    },
    "mppt-controller-pro": {
      name: "MPPT solregulator Pro",
      useCase:
        "Maximum power point tracking-regulator för off-grid och hybrid gruvkraftsystem.",
      warranty: "3 års garanti",
      shipping: "I lager för uppfyllande av förfrågningar",
      installation:
        "Kompatibel med 48 V batteribanker. Följ riktlinjer för polaritet och säkringar.",
      riskNotice:
        "DC-elsystem kräver korrekta säkerhetsåtgärder och kvalificerad installation.",
    },
    "energymind-monitor-pro": {
      name: "EnergieMIND Monitor Pro",
      useCase:
        "Trefas energiövervakning med molnbaserad instrumentpanel för gruvanläggningar och smarta byggnader.",
      warranty: "2 års garanti",
      shipping: "Skickas inom 3–5 arbetsdagar",
      installation:
        "CT-klämminstallation av behörig elektriker. Wi-Fi- eller Ethernet-anslutning.",
      riskNotice:
        "Måste installeras på spänningslösa kretsar av kvalificerad personal.",
    },
    "smart-plug-energy": {
      name: "Smart energiövervakningsuttag (6-pack)",
      useCase:
        "Effektövervakning per enhet för gruvriggar, värmare och infrastrukturutrustning.",
      warranty: "1 års garanti",
      shipping: "Tillgänglig på begäran",
      installation:
        "Plug-and-play. Appkonfiguration krävs. Max 16 A per enhet.",
      riskNotice:
        "Överskrid inte märkströmmen. Ej lämplig för direktanslutning av högpresterande gruvar.",
    },
    "immersion-cool-kit": {
      name: "Immersionskylningssats",
      useCase:
        "Dielektriskt immersionskylningssystem för hög densitet ASIC-installationer.",
      warranty: "2 års garanti på tank och kylenhet",
      shipping: "Fraktleverans. Anpassade leveranstider",
      installation:
        "Professionell installation krävs. Anläggningsbedömning behövs.",
      riskNotice:
        "Hantering av dielektrisk vätska kräver utbildad personal. Brandsäkerhetsgranskning krävs.",
    },
    "duct-heat-exchanger": {
      name: "Kanalvärmeväxlarmodul",
      useCase:
        "Fångar upp gruvarnas avgasvärme för HVAC-kanalintegration i kommersiella byggnader.",
      warranty: "2 års garanti",
      shipping: "Skickas inom 10–15 arbetsdagar",
      installation:
        "HVAC-professionell installation. Bedömning av kanaldimensioner krävs.",
      riskNotice:
        "Värmeåtervinnings effektivitet beror på byggnadsdesign och luftflödeskonfiguration.",
    },
    "psu-3600w-platinum": {
      name: "3600 W Platinum nätaggregat",
      useCase:
        "Högeffektivt nätaggregat för ASIC-gruvar och gruvvärmarinstallationer.",
      warranty: "1 års garanti",
      shipping: "Tillgänglig på begäran",
      installation:
        "Matcha spänning och kontakttyp till målhårdvaran. Tillräckligt luftflöde krävs.",
      riskNotice:
        "Använd endast med kompatibel hårdvara. Överbelastning ogiltigförklarar garantin.",
    },
    "cable-kit-industrial": {
      name: "Industriellt kabelkit",
      useCase:
        "Tungt elkraft- och datakablage för gruvrack och infrastrukturinstallationer.",
      warranty: "90 dagars garanti",
      shipping: "Tillgänglig på begäran",
      installation:
        "Följ lokala elregler. Använd lämplig tvärsnitt för strömstyrkan.",
      riskNotice:
        "Felaktig kablning innebär brand- och utrustningsskaderisk. Professionell installation rekommenderas.",
    },
  },
  pages: {
    home: {
      title: "EnergieMIND Shop | Energimedveten gruv- och infrastrukturhårdvara",
      description:
        "Officiell butik för EnergieMIND-hårdvara. Gruvvärmare, Bitcoin-gruvar, solsystem, energiövervakning och infrastrukturutrustning.",
    },
    shop: {
      title: "Alla produkter | EnergieMIND Shop",
      description:
        "Bläddra bland gruvvärmare, ASIC-gruvar, solutrustning, övervakningsenheter och tillbehör. Begär offerter för alla produkter.",
      heading: "Hårdvarukatalog",
      subheading:
        "Fysisk utrustning för energimedveten gruvdrift, uppvärmning och infrastrukturoptimering.",
    },
    support: {
      title: "Support | EnergieMIND Shop",
      description:
        "Installationsvägledning, garantiinformation och fraktdetaljer för EnergieMIND-hårdvaruprodukter.",
      heading: "Produktsupport",
      intro:
        "Vårt team ger teknisk vägledning för hårdvaruval, installationsplanering och garantisupport.",
      installationTitle: "Installationssupport",
      installationText:
        "Många produkter kräver professionell el- eller HVAC-installation. Vi tillhandahåller dokumentation och kan rekommendera certifierade installatörer i din region.",
      warrantyTitle: "Garanti",
      warrantyText:
        "Garantivillkor varierar per produkt och tillverkare. Alla garantianspråk kräver köpbevis och dokumentation av korrekt installation.",
      shippingTitle: "Frakt & leverans",
      shippingText:
        "Frakttider beror på produkttillgänglighet och destination. Vi visar inget falskt lager — all tillgänglighet bekräftas på begäran.",
    },
    contact: {
      title: "Kontakt | EnergieMIND Shop",
      description:
        "Kontakta EnergieMIND Shop för produktförfrågningar, anpassade installationer och teknisk support.",
      heading: "Kontakta oss",
      intro:
        "Hör av dig för produktfrågor, bulkorder eller anpassad planering av energiinfrastruktur.",
      name: "Fullständigt namn",
      email: "E-postadress",
      company: "Företag (valfritt)",
      message: "Meddelande",
      submit: "Skicka meddelande",
      success: "Tack. Vi svarar inom 1–2 arbetsdagar.",
    },
    quote: {
      title: "Begär offert | EnergieMIND Shop",
      description:
        "Begär en anpassad offert för gruvhårdvara, värmesystem och energiinfrastrukturutrustning.",
      heading: "Begär en offert",
      intro:
        "Berätta om ditt projekt så förbereder vi ett skräddarsytt hårdvaruförslag med frakt- och installationsvägledning.",
      product: "Produkt eller kategori",
      quantity: "Antal",
      setupType: "Installationstyp",
      setupResidential: "Bostad",
      setupCommercial: "Kommersiell / industriell",
      setupCustom: "Anpassad infrastruktur",
      submit: "Skicka offertförfrågan",
      success:
        "Din offertförfrågan har mottagits. Vårt team kontaktar dig inom kort.",
    },
    energySystems: {
      title: "Energisystem | EnergieMIND Shop",
      description:
        "Integrerade energisystem som kombinerar gruvdrift, uppvärmning, solkraft och övervakning för optimerad infrastruktur.",
      heading: "Integrerade energisystem",
      body: "Kombinera nyttiggörande av gruvvärme, solproduktion och realtidsövervakning i en enhetlig energiinfrastruktur. Vi designar anpassade hårdvarupaket för bostads-, kommersiella och industriella installationer.",
    },
    app: {
      title: "EnergieMIND Shop-appen | Mobilt hårdvaruportal",
      description: "Installera EnergieMIND Shop-appen för att bläddra i mining-hårdvara, begära offerter och få support.",
      heading: "EnergieMIND Shop-appen",
      intro: "Din mobila portal för energimedveten mining-hårdvara. Bläddra produkter, skicka offerter och kontakta teamet — optimerad för telefon och surfplatta.",
      dashboard: "Instrumentpanel",
      quickActions: "Snabbåtgärder",
      recentActivity: "Senaste offertförfrågningar",
      noActivity: "Inga offertförfrågningar ännu. Skicka din första förfrågan från fliken Offert.",
      installTitle: "Installera butiksappen",
      installIntro: "Lägg till EnergieMIND Shop på hemskärmen — fungerar idag via Lägg till på hemskärmen på iOS och Android.",
      iphoneSteps: "Safari → app.energiemind.shop → Dela → Lägg till på hemskärmen",
      androidSteps: "Chrome → app.energiemind.shop → meny → Installera app eller Lägg till på hemskärmen",
      desktopSteps: "Chrome eller Edge → installationsikon i adressfältet eller bokmärk app.energiemind.shop",
      openApp: "Öppna appen",
      installed: "Appen är redo på enheten",
      installPrompt: "Installera för snabb åtkomst till offerter och katalog",
      installButton: "Installera app",
      offlineNote: "Cachade sidor tillgängliga offline efter första besöket",
      tabHome: "Hem",
      tabShop: "Butik",
      tabQuote: "Offert",
      tabSupport: "Support",
      backToWebsite: "Fullständig webbplats",
    },
  },
  safety: {
    title: "Viktigt säkerhets- och juridiskt meddelande",
    items: [
      "Gruvutrustning förbrukar mycket el och kan kräva uppgraderad elinfrastruktur.",
      "Professionell installation kan krävas för gruvar, värmare och solutrustning.",
      "Effektiviteten för värmeåtervinning beror på byggnadsdesign, isolering och HVAC-konfiguration.",
      "Alla elinstallationer måste granskas för säkerhetsöverensstämmelse av kvalificerad personal.",
      "Ingen lönsamhetsgaranti. Gruvintäkter beror på nätverksförhållanden och driftskostnader.",
      "Ingen garanti för gruvintäkter. Tidigare resultat förutsäger inte framtida utfall.",
    ],
    footer:
      "Genom att begära en offert eller köpa utrustning bekräftar du dessa risker och godkänner att följa alla lokala regler.",
  },
  footer: {
    description:
      "EnergieMIND Shop tillhandahåller hårdvara och utrustning för energimedveten gruvdrift, uppvärmning, övervakning och infrastrukturoptimering.",
    categories: "Kategorier",
    legal: "Juridiskt",
    privacy: "Integritetspolicy",
    terms: "Användarvillkor",
    disclaimer: "Säkerhetsfriskrivning",
    rights: "Alla rättigheter förbehållna.",
  },
  faq: {
    title: "Vanliga frågor",
    items: [
      {
        question: "Säljer ni fysisk hårdvara?",
        answer:
          "Ja. EnergieMIND Shop säljer fysisk gruvhårdvara, värmare, solutrustning, övervakningsenheter och tillbehör. Detta är inte en token-försäljning eller butik för virtuella produkter.",
      },
      {
        question: "Kan jag köpa direkt online?",
        answer:
          "Vi arbetar för närvarande i offertläge. Använd Begär offert på valfri produktsida för att få pris, tillgänglighet och fraktdetaljer för din region.",
      },
      {
        question: "Är gruvdrift lönsam?",
        answer:
          "Vi ger inga lönsamhetsgarantier. Gruvavkastning beror på elkostnader, hårdvarueffektivitet, nätverkssvårighet och marknadsförhållanden.",
      },
      {
        question: "Kan gruvdrift värma mitt hem?",
        answer:
          "Gruvvärmare är utformade för värmeåtervinning, men effektiviteten beror på byggnadens isolering, klimat och värmesystem. Professionell bedömning rekommenderas.",
      },
      {
        question: "Erbjuder ni installation?",
        answer:
          "Vi tillhandahåller installationsdokumentation och kan koppla dig till certifierade elektriker och HVAC-proffs i regioner vi stödjer.",
      },
      {
        question: "Hur får jag EnergieMIND Shop-appen?",
        answer: "Öppna app.energiemind.shop på telefonen och lägg till på hemskärmen (iPhone: Safari → Dela → Lägg till på hemskärmen; Android: Chrome → Installera app). Appen ger mobil åtkomst till butik, offerter och support.",
      },
    ],
  },
  common: {
    learnMore: "Läs mer",
    viewAll: "Visa alla",
    backToShop: "Tillbaka till butiken",
    language: "Språk",
    breadcrumbHome: "Hem",
    breadcrumbShop: "Butik",
  },
};

export default sv;
