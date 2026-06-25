import type { Dictionary } from "@/i18n/types";

const da: Dictionary = {
  site: {
    name: "EnergieMIND Shop",
    tagline: "Energibevidst minedrift og infrastrukturhardware",
    domain: "https://energiemind.shop",
  },
  nav: {
    home: "Hjem",
    shop: "Butik",
    miningHeaters: "Minevarmere",
    bitcoinMiners: "Bitcoin-minere",
    energySystems: "Energisystemer",
    solarPower: "Sol og strøm",
    monitoringDevices: "Overvågningsenheder",
    accessories: "Tilbehør",
    support: "Support",
    contact: "Kontakt",
  },
  hero: {
    headline: "Energibevidst minedrift og infrastrukturhardware",
    subheadline:
      "Udstyr til varmegenvinding fra minedrift, energiovervågning, solintegration og intelligente infrastruktursystemer.",
    browseProducts: "Gennemse produkter",
    requestCustomSetup: "Anmod om tilpasset opsætning",
  },
  categories: {
    "mining-heaters": {
      title: "Minevarmere",
      description:
        "Bitcoin-minere udviklet til varmegenvinding i boliger og erhvervsejendomme. Omdanner beregningsarbejde til brugbar termisk energi.",
      metaTitle: "Minevarmere | EnergieMIND Shop",
      metaDescription:
        "Minevarmere, der omdanner Bitcoin-minedrift til brugbar varme. Professionelt udstyr til energibevidste varmesystemer.",
    },
    "bitcoin-miners": {
      title: "Bitcoin-minere",
      description:
        "Højtydende ASIC-minere til datacentre, industri og varmeintegrerede installationer.",
      metaTitle: "Bitcoin-minere | EnergieMIND Shop",
      metaDescription:
        "Professionelle Bitcoin ASIC-minere med fulde specifikationer. Tilgængelige på forespørgsel med support til tilpasset installation.",
    },
    "solar-power": {
      title: "Sol og strøm",
      description:
        "Solinvertere, hybridsystemer og strøminfrastruktur til minedrift og energioptimering.",
      metaTitle: "Sol- og strømudstyr | EnergieMIND Shop",
      metaDescription:
        "Solpaneler, hybridinvertere og strømsystemer til energibevidst minedriftsinfrastruktur.",
    },
    "monitoring-devices": {
      title: "Energiovervågning",
      description:
        "Strømovervågning i realtid, smarte stikkontakter og infrastrukturtelemetri til optimeret energiforbrug.",
      metaTitle: "Energiovervågningsenheder | EnergieMIND Shop",
      metaDescription:
        "Professionelt energiovervågningsudstyr til minedriftsanlæg og smart infrastruktur.",
    },
    "cooling-systems": {
      title: "Kølesystemer",
      description:
        "Nedsænkningkøling, kanalvarmevekslere og termisk styring til minedriftshardware.",
      metaTitle: "Kølesystemer | EnergieMIND Shop",
      metaDescription:
        "Køleløsninger til minedrift, herunder nedsænkningssæt og varmevekslere til effektiv termisk styring.",
    },
    accessories: {
      title: "Kabler og tilbehør",
      description:
        "Industrielle strømforsyninger, kabler og datacentertilbehør til minedriftsinstallationer.",
      metaTitle: "Minedriftstilbehør | EnergieMIND Shop",
      metaDescription:
        "Strømforsyninger, kabler og tilbehør til professionel minedrift og energiinfrastruktur.",
    },
    "energy-systems": {
      title: "Energisystemer",
      description:
        "Integrerede energioptimeringssystemer, der kombinerer minedrift, opvarmning, sol og overvågning.",
      metaTitle: "Energisystemer | EnergieMIND Shop",
      metaDescription:
        "Komplette energisystemer til varmegenvinding fra minedrift, solintegration og infrastrukturoptimering.",
    },
    "custom-installations": {
      title: "Tilpassede installationer",
      description:
        "Skræddersyede hardwarepakker og installationsplanlægning til din specifikke energiinfrastruktur.",
      metaTitle: "Tilpassede installationer | EnergieMIND Shop",
      metaDescription:
        "Anmod om tilpassede minedrifts- og energihardwareopsætninger tilpasset din bygning og dine energimål.",
    },
  },
  productLabels: {
    brand: "Mærke",
    model: "Model",
    hashrate: "Hashrate",
    powerConsumption: "Strømforbrug",
    heatOutput: "Varmeafgivelse",
    voltage: "Spænding",
    useCase: "Anvendelse",
    warranty: "Garanti",
    shipping: "Forsendelse",
    installation: "Installationsnoter",
    riskNotice: "Risiko- og sikkerhedsadvarsel",
    price: "Pris",
    addToCart: "Tilføj til kurv",
    requestQuote: "Anmod om tilbud",
    specifications: "Tekniske specifikationer",
    availability: "Tilgængelighed",
    relatedProducts: "Relaterede produkter",
    notApplicable: "Ikke relevant",
  },
  availability: {
    onRequest: "Tilgængelig på forespørgsel",
    preOrder: "Forudbestillingsforespørgsel",
    customQuote: "Tilpasset tilbud",
  },
  products: {
    "heatbit-v2": {
      name: "Heatbit V2 minevarmer",
      useCase:
        "Rumopvarmning i boliger med integreret Bitcoin-minedrift. Ideel til lejligheder og mindre boliger med tilstrækkelig elektrisk kapacitet.",
      warranty: "2 års producentgaranti",
      shipping: "Afsendes inden for 5–10 hverdage efter ordrebekræftelse",
      installation:
        "Plug-and-play-opsætning. Kræver dedikeret 16A-kreds. Professionel elektrisk gennemgang anbefales.",
      riskNotice:
        "Enhed med højt strømforbrug. Sørg for tilstrækkelig ventilation og kredskapacitet. Varmeafgivelse varierer med omgivelsesforhold.",
    },
    "heatcore-pro-12": {
      name: "HeatCore Pro 12 minevarmer",
      useCase:
        "Integration med hydronisk opvarmning i erhverv og større boliger. Tilsluttes eksisterende radiator- eller gulvvarmesystemer.",
      warranty: "3 års garanti med valgfri udvidet dækning",
      shipping: "Fragtforsendelse. Leveringstid 2–4 uger",
      installation:
        "Professionel installation påkrævet. Hydronisk tilslutning af certificeret HVAC-tekniker.",
      riskNotice:
        "Industrielt strømforbrug. Bygningens varmefordeling skal vurderes før installation.",
    },
    "antminer-s21-hydro": {
      name: "Antminer S21 Hydro",
      useCase:
        "Højtydende Bitcoin-minedrift med vandkøling til datacentre og industrielle varmegenvindingssystemer.",
      warranty: "180 dages producentgaranti",
      shipping: "Større ordrer sendes på palle. Leveringstid på forespørgsel",
      installation:
        "Kræver vandkølingssløjfe og 380V trefaset strøm. Kun installation i datacenter.",
      riskNotice:
        "Industrielt minedriftsudstyr. Professionel installation er obligatorisk. Ingen rentabilitetsgaranti.",
    },
    "whatsminer-m60s": {
      name: "Whatsminer M60S",
      useCase:
        "Luftkølet ASIC-miner til kommercielle minedriftsanlæg med potentiale for varmefangst.",
      warranty: "180 dages producentgaranti",
      shipping: "Tilgængelig på forespørgsel. Regionale forsendelsesmuligheder varierer",
      installation:
        "Kræver tilstrækkelig køleluftstrøm og 220V/380V strøminfrastruktur.",
      riskNotice:
        "Genererer betydelig varme og støj. Indtægter fra minedrift er ikke garanteret.",
    },
    "solar-hybrid-8kw": {
      name: "Sol hybridinverter 8 kW",
      useCase:
        "Hybrid solinverter til at reducere minedriftens strømforbrug med lokal produktion.",
      warranty: "5 års invertergaranti, 10 års valgfri forlængelse",
      shipping: "Afsendes inden for 7–14 hverdage",
      installation:
        "Autoriseret elektriker og solinstallatør påkrævet. Nettilslutning kan kræve godkendelse.",
      riskNotice:
        "Regler for nettilslutning varierer efter region. Professionel installation påkrævet.",
    },
    "mppt-controller-pro": {
      name: "MPPT solcontroller Pro",
      useCase:
        "MPPT-controller til off-grid og hybride strømsystemer til minedrift.",
      warranty: "3 års garanti",
      shipping: "På lager til levering på forespørgsel",
      installation:
        "Kompatibel med 48V batteribanker. Følg polaritets- og sikringsretningslinjer.",
      riskNotice:
        "DC-elektriske systemer kræver korrekte sikkerhedsforanstaltninger og kvalificeret installation.",
    },
    "energymind-monitor-pro": {
      name: "EnergieMIND Monitor Pro",
      useCase:
        "Trefaset energiovervågning med cloud-dashboard til minedriftsanlæg og smarte bygninger.",
      warranty: "2 års garanti",
      shipping: "Afsendes inden for 3–5 hverdage",
      installation:
        "Installation af strømtransformatorer af kvalificeret elektriker. Wi-Fi eller Ethernet-forbindelse.",
      riskNotice:
        "Skal installeres på spændingsløse kredse af kvalificeret personale.",
    },
    "smart-plug-energy": {
      name: "Smart stikkontakt energimåler (6-pak)",
      useCase:
        "Strømovervågning pr. enhed til minedriftsrigs, varmere og infrastrukturudstyr.",
      warranty: "1 års garanti",
      shipping: "Tilgængelig på forespørgsel",
      installation:
        "Plug-and-play. App-opsætning påkrævet. Maks. 16A pr. enhed.",
      riskNotice:
        "Overskrid ikke nominel strømstyrke. Ikke egnet til direkte tilslutning af højtydende minere.",
    },
    "immersion-cool-kit": {
      name: "Nedsænkningkølingssæt",
      useCase:
        "Dielektrisk nedsænkningkølingssystem til ASIC-installationer med høj tæthed.",
      warranty: "2 års garanti på tank og køleenhed",
      shipping: "Fragtlevering. Tilpassede leveringstider",
      installation:
        "Professionel installation påkrævet. Vurdering af anlægget er nødvendig.",
      riskNotice:
        "Håndtering af dielektrisk væske kræver uddannet personale. Brandsikkerhedsvurdering påkrævet.",
    },
    "duct-heat-exchanger": {
      name: "Kanalvarmevekslermodul",
      useCase:
        "Opsamler varme fra minerudstød til integration i HVAC-kanaler i erhvervsejendomme.",
      warranty: "2 års garanti",
      shipping: "Afsendes inden for 10–15 hverdage",
      installation:
        "Professionel HVAC-installation. Vurdering af kanaldimensionering påkrævet.",
      riskNotice:
        "Effektiviteten af varmegenvinding afhænger af bygningsdesign og luftstrømkonfiguration.",
    },
    "psu-3600w-platinum": {
      name: "3600W Platinum strømforsyning",
      useCase:
        "Højtydende strømforsyning til ASIC-minere og minevarmeinstallationer.",
      warranty: "1 års garanti",
      shipping: "Tilgængelig på forespørgsel",
      installation:
        "Tilpas spænding og stiktype til målhardware. Tilstrækkelig luftstrøm påkrævet.",
      riskNotice:
        "Brug kun med kompatibelt udstyr. Overbelastning annullerer garantien.",
    },
    "cable-kit-industrial": {
      name: "Industrielt kabelsæt",
      useCase:
        "Kraftige strøm- og datakabler til minedriftsracks og infrastrukturinstallationer.",
      warranty: "90 dages garanti",
      shipping: "Tilgængelig på forespørgsel",
      installation:
        "Følg lokale elektriske regler. Brug korrekt tværsnit til strømstyrken.",
      riskNotice:
        "Forkert kabelføring udgør brand- og udstyrsrisiko. Professionel installation anbefales.",
    },
  },
  pages: {
    home: {
      title: "EnergieMIND Shop | Energibevidst minedrift og infrastrukturhardware",
      description:
        "Officiel butik for EnergieMIND-hardware. Minevarmere, Bitcoin-minere, solsystemer, energiovervågning og infrastrukturudstyr.",
    },
    shop: {
      title: "Se alle produkter | EnergieMIND Shop",
      description:
        "Gennemse minevarmere, ASIC-minere, soludstyr, overvågningsenheder og tilbehør. Anmod om tilbud på alle produkter.",
      heading: "Hardwarekatalog",
      subheading:
        "Fysisk udstyr til energibevidst minedrift, opvarmning og infrastrukturoptimering.",
    },
    support: {
      title: "Support | EnergieMIND Shop",
      description:
        "Installationsvejledning, garantioplysninger og forsendelsesdetaljer for EnergieMIND-hardware.",
      heading: "Produktsupport",
      intro:
        "Vores team yder teknisk vejledning til valg af hardware, installationsplanlægning og garantisupport.",
      installationTitle: "Installationsstøtte",
      installationText:
        "Mange produkter kræver professionel elektrisk eller HVAC-installation. Vi leverer dokumentation og kan anbefale certificerede installatører i din region.",
      warrantyTitle: "Garanti",
      warrantyText:
        "Garantibetingelser varierer efter produkt og producent. Alle garantikrav kræver købsbevis og dokumentation for korrekt installation.",
      shippingTitle: "Forsendelse og levering",
      shippingText:
        "Leveringstider afhænger af produkttilgængelighed og destination. Vi viser ikke falsk lagerbeholdning — al tilgængelighed bekræftes på forespørgsel.",
    },
    contact: {
      title: "Kontakt | EnergieMIND Shop",
      description:
        "Kontakt EnergieMIND Shop for produktforespørgsler, tilpassede installationer og teknisk support.",
      heading: "Kontakt os",
      intro:
        "Kontakt os for produktspørgsmål, større ordrer eller planlægning af tilpasset energiinfrastruktur.",
      name: "Fulde navn",
      email: "E-mailadresse",
      company: "Virksomhed (valgfrit)",
      message: "Besked",
      submit: "Send besked",
      success: "Tak. Vi svarer inden for 1–2 hverdage.",
    },
    quote: {
      title: "Anmod om tilbud | EnergieMIND Shop",
      description:
        "Anmod om et tilpasset tilbud på minedriftshardware, varmesystemer og energiinfrastrukturudstyr.",
      heading: "Anmod om tilbud",
      intro:
        "Fortæl os om dit projekt, så udarbejder vi et skræddersyet hardwareforslag med forsendelses- og installationsvejledning.",
      product: "Produkt eller kategori",
      quantity: "Antal",
      setupType: "Installationstype",
      setupResidential: "Bolig",
      setupCommercial: "Erhverv / industri",
      setupCustom: "Tilpasset infrastruktur",
      submit: "Send tilbudsforespørgsel",
      success:
        "Din tilbudsforespørgsel er modtaget. Vores team kontakter dig snart.",
    },
    energySystems: {
      title: "Energisystemer | EnergieMIND Shop",
      description:
        "Integrerede energisystemer, der kombinerer minedrift, opvarmning, solenergi og overvågning til optimeret infrastruktur.",
      heading: "Integrerede energisystemer",
      body: "Kombiner varmegenvinding fra minedrift, solproduktion og overvågning i realtid i en samlet energiinfrastruktur. Vi designer tilpassede hardwarepakker til boliger, erhverv og industri.",
    },
  },
  safety: {
    title: "Vigtig sikkerheds- og juridisk meddelelse",
    items: [
      "Minedriftsudstyr bruger meget strøm og kan kræve opgraderet elektrisk infrastruktur.",
      "Professionel installation kan være påkrævet for minere, varmere og soludstyr.",
      "Effektiviteten af varmegenvinding afhænger af bygningsdesign, isolering og HVAC-konfiguration.",
      "Alle elektriske installationer skal gennemgås for sikkerhedsoverholdelse af kvalificeret personale.",
      "Ingen rentabilitetsgaranti. Indtægter fra minedrift afhænger af netværksforhold og driftsomkostninger.",
      "Ingen garanti for indtægter fra minedrift. Tidligere resultater er ingen garanti for fremtidige resultater.",
    ],
    footer:
      "Ved at anmode om tilbud eller købe udstyr anerkender du disse risici og accepterer at følge alle lokale regler.",
  },
  footer: {
    description:
      "EnergieMIND Shop leverer hardware og udstyr til energibevidst minedrift, opvarmning, overvågning og infrastrukturoptimering.",
    categories: "Kategorier",
    legal: "Juridisk",
    privacy: "Privatlivspolitik",
    terms: "Servicevilkår",
    disclaimer: "Sikkerhedsfraskrivelse",
    rights: "Alle rettigheder forbeholdes.",
  },
  faq: {
    title: "Ofte stillede spørgsmål",
    items: [
      {
        question: "Sælger I fysisk hardware?",
        answer:
          "Ja. EnergieMIND Shop sælger fysisk minedriftshardware, varmere, soludstyr, overvågningsenheder og tilbehør. Dette er ikke et token-forsalg eller en butik for virtuelle produkter.",
      },
      {
        question: "Kan jeg købe direkte online?",
        answer:
          "Vi opererer i øjeblikket i tilbudstilstand. Brug «Anmod om tilbud» på en hvilken som helst produktside for at modtage pris, tilgængelighed og forsendelsesdetaljer for din region.",
      },
      {
        question: "Er minedrift rentabel?",
        answer:
          "Vi giver ingen rentabilitetsgarantier. Afkast fra minedrift afhænger af elomkostninger, hardwareeffektivitet, netværksvanskelighed og markedsforhold.",
      },
      {
        question: "Kan minedrift opvarme mit hjem?",
        answer:
          "Minevarmere er udviklet til varmegenvinding, men effektiviteten afhænger af bygningens isolering, klima og varmesystem. Professionel vurdering anbefales.",
      },
      {
        question: "Tilbyder I installation?",
        answer:
          "Vi leverer installationsdokumentation og kan forbinde dig med certificerede elektrikere og HVAC-fagfolk i understøttede regioner.",
      },
    ],
  },
  common: {
    learnMore: "Læs mere",
    viewAll: "Se alle",
    backToShop: "Tilbage til butikken",
    language: "Sprog",
    breadcrumbHome: "Hjem",
    breadcrumbShop: "Butik",
  },
};

export default da;
