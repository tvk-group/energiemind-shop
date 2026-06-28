import type { Dictionary } from "@/i18n/types";

const nl: Dictionary = {
  site: {
    name: "EnergieMIND Shop",
    tagline: "Energiebewuste mining- en infrastructuurhardware",
    domain: "https://energiemind.shop",
    appUrl: "https://app.energiemind.shop",
  },
  nav: {
    home: "Home",
    shop: "Shop",
    miningHeaters: "Miningverwarmers",
    bitcoinMiners: "Bitcoin-miners",
    energySystems: "Energiesystemen",
    solarPower: "Zonne-energie & stroom",
    monitoringDevices: "Monitoringapparatuur",
    accessories: "Accessoires",
    support: "Support",
    contact: "Contact",
    app: "App",
  },
  hero: {
    headline: "Energiebewuste mining- en infrastructuurhardware",
    subheadline:
      "Apparatuur voor miningwarmtehergebruik, energiemonitoring, zonne-integratie en intelligente infrastructuursystemen.",
    browseProducts: "Producten bekijken",
    requestCustomSetup: "Aangepaste installatie aanvragen",
    getApp: "App downloaden",
  },
  categories: {
    "mining-heaters": {
      title: "Miningverwarmers",
      description:
        "Bitcoin-miners ontworpen voor warmtehergebruik in residentiële en commerciële omgevingen. Zet rekenwerk om in bruikbare thermische energie.",
      metaTitle: "Miningverwarmers | EnergieMIND Shop",
      metaDescription:
        "Miningverwarmers die Bitcoin-mining omzetten in bruikbare warmte. Professionele hardware voor energiebewuste verwarmingssystemen.",
    },
    "bitcoin-miners": {
      title: "Bitcoin-miners",
      description:
        "Hoogefficiënte ASIC-miners voor datacenters, industriële installaties en warmtegeïntegreerde implementaties.",
      metaTitle: "Bitcoin-miners | EnergieMIND Shop",
      metaDescription:
        "Professionele Bitcoin ASIC-miners met volledige specificaties. Op aanvraag beschikbaar met ondersteuning voor aangepaste installatie.",
    },
    "solar-power": {
      title: "Zonne-energie & stroom",
      description:
        "Zonne-omvormers, hybride systemen en stroominfrastructuur voor mining en energieoptimalisatie.",
      metaTitle: "Zonne-energie & stroomapparatuur | EnergieMIND Shop",
      metaDescription:
        "Zonnepanelen, hybride omvormers en stroomsystemen voor energiebewuste mininginfrastructuur.",
    },
    "monitoring-devices": {
      title: "Energiemonitoring",
      description:
        "Realtime stroommonitoring, slimme stekkers en infrastructuurtelemetrie voor geoptimaliseerd energieverbruik.",
      metaTitle: "Energiemonitoringapparatuur | EnergieMIND Shop",
      metaDescription:
        "Professionele energiemonitoringhardware voor miningfaciliteiten en slimme infrastructuur.",
    },
    "cooling-systems": {
      title: "Koelsystemen",
      description:
        "Immersion cooling, kanaalwarmtewisselaars en thermisch beheer voor mininghardware.",
      metaTitle: "Koelsystemen | EnergieMIND Shop",
      metaDescription:
        "Miningkoeloplossingen inclusief immersiekit en warmtewisselaars voor efficiënt thermisch beheer.",
    },
    accessories: {
      title: "Kabels & accessoires",
      description:
        "Industriële voedingen, bekabeling en datacenteraccessoires voor mininginstallaties.",
      metaTitle: "Miningaccessoires | EnergieMIND Shop",
      metaDescription:
        "Voedingen, kabels en accessoires voor professionele mining en energie-infrastructuur.",
    },
    "energy-systems": {
      title: "Energiesystemen",
      description:
        "Geïntegreerde energieoptimalisatiesystemen die mining, verwarming, zonne-energie en monitoring combineren.",
      metaTitle: "Energiesystemen | EnergieMIND Shop",
      metaDescription:
        "Complete energiesystemen voor miningwarmtehergebruik, zonne-integratie en infrastructuuroptimalisatie.",
    },
    "custom-installations": {
      title: "Aangepaste installaties",
      description:
        "Op maat gemaakte hardwarebundels en installatieplanning voor uw specifieke energie-infrastructuur.",
      metaTitle: "Aangepaste installaties | EnergieMIND Shop",
      metaDescription:
        "Vraag aangepaste mining- en energiehardwareconfiguraties aan, afgestemd op uw gebouw en energiedoelen.",
    },
  },
  productLabels: {
    brand: "Merk",
    model: "Model",
    hashrate: "Hashrate",
    powerConsumption: "Stroomverbruik",
    heatOutput: "Warmteafgifte",
    voltage: "Spanning",
    useCase: "Toepassing",
    warranty: "Garantie",
    shipping: "Verzending",
    installation: "Installatienotities",
    riskNotice: "Risico- en veiligheidsmededeling",
    price: "Prijs",
    addToCart: "In winkelwagen",
    requestQuote: "Offerte aanvragen",
    specifications: "Technische specificaties",
    availability: "Beschikbaarheid",
    relatedProducts: "Gerelateerde producten",
    notApplicable: "N.v.t.",
  },
  availability: {
    onRequest: "Op aanvraag beschikbaar",
    preOrder: "Pre-orderaanvraag",
    customQuote: "Aangepaste offerte",
  },
  products: {
    "heatbit-v2": {
      name: "Heatbit V2 Mining Heater",
      useCase:
        "Residentiële ruimteverwarming met geïntegreerde Bitcoin-mining. Ideaal voor appartementen en kleine woningen met voldoende elektrische capaciteit.",
      warranty: "2 jaar fabrieksgarantie",
      shipping: "Verzending binnen 5–10 werkdagen na orderbevestiging",
      installation:
        "Plug-and-play installatie. Vereist een apart 16A-circuit. Professionele elektrische controle aanbevolen.",
      riskNotice:
        "Apparaat met hoog stroomverbruik. Zorg voor voldoende ventilatie en circuitcapaciteit. Warmteafgifte varieert met omgevingsomstandigheden.",
    },
    "heatcore-pro-12": {
      name: "HeatCore Pro 12 Mining Heater",
      useCase:
        "Commerciële en grote residentiële hydronische verwarmingsintegratie. Aansluiting op bestaande radiatoren of vloerverwarming.",
      warranty: "3 jaar garantie met optionele uitgebreide dekking",
      shipping: "Vrachtverzending. Levertijd 2–4 weken",
      installation:
        "Professionele installatie vereist. Hydronische aansluiting door gecertificeerde HVAC-technicus.",
      riskNotice:
        "Industrieel stroomverbruik. Warmteverdeling in het gebouw moet vóór installatie worden beoordeeld.",
    },
    "antminer-s21-hydro": {
      name: "Antminer S21 Hydro",
      useCase:
        "Hoogpresterende hydrogekoelde Bitcoin-mining voor datacenters en industriële warmteherwinningsystemen.",
      warranty: "180 dagen fabrieksgarantie",
      shipping: "Bulkbestellingen verzonden op pallet. Levertijd op aanvraag",
      installation:
        "Vereist hydrokoelcircuit en 380V driefasige stroom. Alleen voor datacenterinstallatie.",
      riskNotice:
        "Industriële miningapparatuur. Professionele installatie verplicht. Geen winstgarantie.",
    },
    "whatsminer-m60s": {
      name: "Whatsminer M60S",
      useCase:
        "Luchtgekoelde ASIC-miner voor commerciële miningfaciliteiten met potentieel voor warmteopvang.",
      warranty: "180 dagen fabrieksgarantie",
      shipping: "Op aanvraag beschikbaar. Regionale verzendopties variëren",
      installation:
        "Vereist adequate koelluchtstroom en 220V/380V stroominfrastructuur.",
      riskNotice:
        "Genereert aanzienlijke warmte en geluid. Mininginkomsten niet gegarandeerd.",
    },
    "solar-hybrid-8kw": {
      name: "Solar Hybrid Inverter 8kW",
      useCase:
        "Hybride zonne-omvormer voor het compenseren van miningstroomverbruik met lokale opwekking.",
      warranty: "5 jaar omvormergarantie, optionele verlenging tot 10 jaar",
      shipping: "Verzending binnen 7–14 werkdagen",
      installation:
        "Gelicentieerde elektricien en zonne-installateur vereist. Netkoppeling kan goedkeuring vereisen.",
      riskNotice:
        "Netkoppelingsregels variëren per regio. Professionele installatie vereist.",
    },
    "mppt-controller-pro": {
      name: "MPPT Solar Controller Pro",
      useCase:
        "Maximum power point tracking-controller voor off-grid en hybride miningstroomsystemen.",
      warranty: "3 jaar garantie",
      shipping: "Op voorraad voor aanvraagafhandeling",
      installation:
        "Compatibel met 48V-accubanken. Volg polariteits- en zekeringrichtlijnen.",
      riskNotice:
        "Gelijkstroomsystemen vereisen juiste veiligheidsmaatregelen en gekwalificeerde installatie.",
    },
    "energymind-monitor-pro": {
      name: "EnergieMIND Monitor Pro",
      useCase:
        "Driefasige energiemonitoring met clouddashboard voor miningfaciliteiten en slimme gebouwen.",
      warranty: "2 jaar garantie",
      shipping: "Verzending binnen 3–5 werkdagen",
      installation:
        "CT-klem installatie door gekwalificeerde elektricien. Wi-Fi- of Ethernetverbinding.",
      riskNotice:
        "Moet door gekwalificeerd personeel op spanningsloze circuits worden geïnstalleerd.",
    },
    "smart-plug-energy": {
      name: "Smart Plug Energy Monitor (6-Pack)",
      useCase:
        "Stroommonitoring per apparaat voor miningrigs, verwarmers en infrastructuurapparatuur.",
      warranty: "1 jaar garantie",
      shipping: "Op aanvraag beschikbaar",
      installation:
        "Plug-and-play. App-configuratie vereist. Max. 16A per eenheid.",
      riskNotice:
        "Overschrijd de nominale stroomsterkte niet. Niet geschikt voor directe aansluiting van krachtige miners.",
    },
    "immersion-cool-kit": {
      name: "Immersion Cooling Kit",
      useCase:
        "Diëlektrisch immersion koelsysteem voor ASIC-implementaties met hoge dichtheid.",
      warranty: "2 jaar garantie op tank en koeleenheid",
      shipping: "Vrachtlevering. Aangepaste levertijden",
      installation:
        "Professionele installatie vereist. Faciliteitsbeoordeling nodig.",
      riskNotice:
        "Omgaan met diëlektrische vloeistof vereist getraind personeel. Brandveiligheidscontrole vereist.",
    },
    "duct-heat-exchanger": {
      name: "Duct Heat Exchanger Module",
      useCase:
        "Vangt mineruitlaatwarmte op voor HVAC-kanaalintegratie in commerciële gebouwen.",
      warranty: "2 jaar garantie",
      shipping: "Verzending binnen 10–15 werkdagen",
      installation:
        "HVAC-professionele installatie. Beoordeling van kanaalafmetingen vereist.",
      riskNotice:
        "Warmteherwinningsrendement hangt af van gebouwontwerp en luchtstroomconfiguratie.",
    },
    "psu-3600w-platinum": {
      name: "3600W Platinum PSU",
      useCase:
        "Hoogefficiënte voeding voor ASIC-miners en miningverwarmerimplementaties.",
      warranty: "1 jaar garantie",
      shipping: "Op aanvraag beschikbaar",
      installation:
        "Stem spanning en connectortype af op doelhardware. Voldoende luchtstroom vereist.",
      riskNotice:
        "Alleen gebruiken met compatibele hardware. Overbelasting maakt garantie ongeldig.",
    },
    "cable-kit-industrial": {
      name: "Industrial Cable Kit",
      useCase:
        "Zware stroom- en databekabeling voor miningracks en infrastructuurinstallaties.",
      warranty: "90 dagen garantie",
      shipping: "Op aanvraag beschikbaar",
      installation:
        "Volg lokale elektrische voorschriften. Gebruik de juiste doorsnede voor de stroomsterkte.",
      riskNotice:
        "Onjuiste bekabeling vormt brand- en apparatuurschaderisico. Professionele installatie aanbevolen.",
    },
  },
  pages: {
    home: {
      title: "EnergieMIND Shop | Energiebewuste mining- en infrastructuurhardware",
      description:
        "Officiële shop voor EnergieMIND-hardware. Miningverwarmers, Bitcoin-miners, zonnesystemen, energiemonitoring en infrastructuurapparatuur.",
    },
    shop: {
      title: "Alle producten | EnergieMIND Shop",
      description:
        "Bekijk miningverwarmers, ASIC-miners, zonneapparatuur, monitoringapparatuur en accessoires. Vraag offertes aan voor alle producten.",
      heading: "Hardwarecatalogus",
      subheading:
        "Fysieke apparatuur voor energiebewuste mining, verwarming en infrastructuuroptimalisatie.",
    },
    support: {
      title: "Support | EnergieMIND Shop",
      description:
        "Installatiehandleiding, garantie-informatie en verzenddetails voor EnergieMIND-hardwareproducten.",
      heading: "Productsupport",
      intro:
        "Ons team biedt technische begeleiding bij hardwareselectie, installatieplanning en garantieondersteuning.",
      installationTitle: "Installatieondersteuning",
      installationText:
        "Veel producten vereisen professionele elektrische of HVAC-installatie. Wij leveren documentatie en kunnen gecertificeerde installateurs in uw regio aanbevelen.",
      warrantyTitle: "Garantie",
      warrantyText:
        "Garantievoorwaarden variëren per product en fabrikant. Alle garantieclaims vereisen aankoopbewijs en documentatie van correcte installatie.",
      shippingTitle: "Verzending & afhandeling",
      shippingText:
        "Verzendtijden zijn afhankelijk van productbeschikbaarheid en bestemming. Wij tonen geen fictieve voorraad — alle beschikbaarheid wordt op aanvraag bevestigd.",
    },
    contact: {
      title: "Contact | EnergieMIND Shop",
      description:
        "Neem contact op met EnergieMIND Shop voor productvragen, aangepaste installaties en technische ondersteuning.",
      heading: "Neem contact op",
      intro:
        "Neem contact op voor productvragen, bulkbestellingen of aangepaste energie-infrastructuurplanning.",
      name: "Volledige naam",
      email: "E-mailadres",
      company: "Bedrijf (optioneel)",
      message: "Bericht",
      submit: "Bericht verzenden",
      success: "Bedankt. Wij reageren binnen 1–2 werkdagen.",
    },
    quote: {
      title: "Offerte aanvragen | EnergieMIND Shop",
      description:
        "Vraag een aangepaste offerte aan voor mininghardware, verwarmingssystemen en energie-infrastructuurapparatuur.",
      heading: "Offerte aanvragen",
      intro:
        "Vertel ons over uw project en wij stellen een op maat gemaakt hardwarevoorstel op met begeleiding bij verzending en installatie.",
      product: "Product of categorie",
      quantity: "Aantal",
      setupType: "Installatietype",
      setupResidential: "Residentieel",
      setupCommercial: "Commercieel / Industrieel",
      setupCustom: "Aangepaste infrastructuur",
      submit: "Offerteaanvraag verzenden",
      success:
        "Uw offerteaanvraag is ontvangen. Ons team neemt binnenkort contact met u op.",
    },
    energySystems: {
      title: "Energiesystemen | EnergieMIND Shop",
      description:
        "Geïntegreerde energiesystemen die mining, verwarming, zonne-energie en monitoring combineren voor geoptimaliseerde infrastructuur.",
      heading: "Geïntegreerde energiesystemen",
      body:
        "Combineer miningwarmtehergebruik, zonne-opwekking en realtime monitoring in één geïntegreerde energie-infrastructuur. Wij ontwerpen aangepaste hardwarebundels voor residentiële, commerciële en industriële implementaties.",
    },
    app: {
      title: "EnergieMIND Shop App | Mobiel hardwareportaal",
      description: "Installeer de EnergieMIND Shop app om mininghardware te bekijken, offertes aan te vragen en support te krijgen.",
      heading: "EnergieMIND Shop App",
      intro: "Uw mobiele portaal voor energiebewuste mininghardware. Bekijk producten, dien offertes in en neem contact op — geoptimaliseerd voor telefoon en tablet.",
      dashboard: "Dashboard",
      quickActions: "Snelle acties",
      recentActivity: "Recente offerteaanvragen",
      noActivity: "Nog geen offerteaanvragen. Dien uw eerste aanvraag in via het tabblad Offerte.",
      installTitle: "Shop-app installeren",
      installIntro: "Voeg EnergieMIND Shop toe aan uw startscherm — werkt vandaag via Zet op beginscherm op iOS en Android.",
      iphoneSteps: "Safari → app.energiemind.shop → Delen → Zet op beginscherm",
      androidSteps: "Chrome → app.energiemind.shop → menu → App installeren of Toevoegen aan startscherm",
      desktopSteps: "Chrome of Edge → installatiepictogram in de adresbalk of bladwijzer app.energiemind.shop",
      openApp: "App openen",
      installed: "App klaar op uw apparaat",
      installPrompt: "Installeer voor snelle toegang tot offertes en catalogus",
      installButton: "App installeren",
      offlineNote: "Gecachte pagina's offline beschikbaar na eerste bezoek",
      tabHome: "Home",
      tabShop: "Shop",
      tabQuote: "Offerte",
      tabSupport: "Support",
      backToWebsite: "Volledige website",
    },
  },
  safety: {
    title: "Belangrijke veiligheids- en juridische mededeling",
    items: [
      "Miningapparatuur verbruikt veel elektriciteit en kan een upgrade van de elektrische infrastructuur vereisen.",
      "Professionele installatie kan vereist zijn voor miners, verwarmers en zonneapparatuur.",
      "Warmtehergebruiksefficiëntie hangt af van gebouwontwerp, isolatie en HVAC-configuratie.",
      "Alle elektrische installaties moeten door gekwalificeerd personeel op veiligheidsconformiteit worden beoordeeld.",
      "Geen winstgarantie. Mininginkomsten zijn afhankelijk van netwerkomstandigheden en operationele kosten.",
      "Geen garantie op mininginkomsten. Prestaties uit het verleden voorspellen geen toekomstige resultaten.",
    ],
    footer:
      "Door een offerte aan te vragen of apparatuur aan te schaffen, erkent u deze risico's en gaat u akkoord met alle lokale regelgeving.",
  },
  footer: {
    description:
      "EnergieMIND Shop levert hardware en apparatuur voor energiebewuste mining, verwarming, monitoring en infrastructuuroptimalisatie.",
    categories: "Categorieën",
    legal: "Juridisch",
    privacy: "Privacybeleid",
    terms: "Servicevoorwaarden",
    disclaimer: "Veiligheidsdisclaimer",
    rights: "Alle rechten voorbehouden.",
  },
  faq: {
    title: "Veelgestelde vragen",
    items: [
      {
        question: "Verkopen jullie fysieke hardware?",
        answer:
          "Ja. EnergieMIND Shop verkoopt fysieke mininghardware, verwarmers, zonneapparatuur, monitoringapparatuur en accessoires. Dit is geen token-presale of winkel voor virtuele producten.",
      },
      {
        question: "Kan ik direct online kopen?",
        answer:
          "Wij werken momenteel in offertemodus. Gebruik Offerte aanvragen op elke productpagina om prijzen, beschikbaarheid en verzenddetails voor uw regio te ontvangen.",
      },
      {
        question: "Is mining winstgevend?",
        answer:
          "Wij geven geen winstgaranties. Miningopbrengsten zijn afhankelijk van elektriciteitskosten, hardware-efficiëntie, netwerkmoeilijkheid en marktomstandigheden.",
      },
      {
        question: "Kan mining mijn huis verwarmen?",
        answer:
          "Miningverwarmers zijn ontworpen voor warmtehergebruik, maar de efficiëntie hangt af van isolatie, klimaat en verwarmingssysteem. Professionele beoordeling wordt aanbevolen.",
      },
      {
        question: "Bieden jullie installatie aan?",
        answer:
          "Wij leveren installatiedocumentatie en kunnen u in contact brengen met gecertificeerde elektriciens en HVAC-professionals in ondersteunde regio's.",
      },
      {
        question: "Hoe krijg ik de EnergieMIND Shop app?",
        answer: "Open app.energiemind.shop op uw telefoon en voeg toe aan het startscherm (Safari → Delen → Zet op beginscherm op iPhone; Chrome → App installeren op Android). De app biedt mobiele toegang tot shop, offertes en support.",
      },
    ],
  },
  common: {
    learnMore: "Meer informatie",
    viewAll: "Alles bekijken",
    backToShop: "Terug naar shop",
    language: "Taal",
    breadcrumbHome: "Home",
    breadcrumbShop: "Shop",
  },
};

export default nl;
