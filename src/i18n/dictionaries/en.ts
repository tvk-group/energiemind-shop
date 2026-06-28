import type { Dictionary } from "@/i18n/types";

const en: Dictionary = {
  site: {
    name: "EnergieMIND Shop",
    tagline: "Energy-Aware Mining & Infrastructure Hardware",
    domain: "https://energiemind.shop",
    appUrl: "https://app.energiemind.shop",
  },
  nav: {
    home: "Home",
    shop: "Shop",
    miningHeaters: "Mining Heaters",
    bitcoinMiners: "Bitcoin Miners",
    energySystems: "Energy Systems",
    solarPower: "Solar & Power",
    monitoringDevices: "Monitoring Devices",
    accessories: "Accessories",
    support: "Support",
    contact: "Contact",
    app: "App",
  },
  hero: {
    headline: "Energy-Aware Mining & Infrastructure Hardware",
    subheadline:
      "Equipment for mining heat utility, energy monitoring, solar integration and intelligent infrastructure systems.",
    browseProducts: "Browse Products",
    requestCustomSetup: "Request Custom Setup",
    getApp: "Get the App",
  },
  categories: {
    "mining-heaters": {
      title: "Mining Heaters",
      description:
        "Bitcoin miners engineered for residential and commercial heat reuse. Convert computational work into usable thermal energy.",
      metaTitle: "Mining Heaters | EnergieMIND Shop",
      metaDescription:
        "Mining heaters that convert Bitcoin mining into usable heat. Professional hardware for energy-aware heating systems.",
    },
    "bitcoin-miners": {
      title: "Bitcoin Miners",
      description:
        "High-efficiency ASIC miners for data center, industrial and heat-integrated deployments.",
      metaTitle: "Bitcoin Miners | EnergieMIND Shop",
      metaDescription:
        "Professional Bitcoin ASIC miners with full specifications. Available on request with custom installation support.",
    },
    "solar-power": {
      title: "Solar & Power",
      description:
        "Solar inverters, hybrid systems and power infrastructure for mining and energy optimization.",
      metaTitle: "Solar & Power Equipment | EnergieMIND Shop",
      metaDescription:
        "Solar panels, hybrid inverters and power systems for energy-aware mining infrastructure.",
    },
    "monitoring-devices": {
      title: "Energy Monitoring",
      description:
        "Real-time power monitoring, smart plugs and infrastructure telemetry for optimized energy use.",
      metaTitle: "Energy Monitoring Devices | EnergieMIND Shop",
      metaDescription:
        "Professional energy monitoring hardware for mining facilities and smart infrastructure.",
    },
    "cooling-systems": {
      title: "Cooling Systems",
      description:
        "Immersion cooling, duct heat exchangers and thermal management for mining hardware.",
      metaTitle: "Cooling Systems | EnergieMIND Shop",
      metaDescription:
        "Mining cooling solutions including immersion kits and heat exchangers for efficient thermal management.",
    },
    accessories: {
      title: "Cables & Accessories",
      description:
        "Industrial power supplies, cabling and data center accessories for mining installations.",
      metaTitle: "Mining Accessories | EnergieMIND Shop",
      metaDescription:
        "Power supplies, cables and accessories for professional mining and energy infrastructure.",
    },
    "energy-systems": {
      title: "Energy Systems",
      description:
        "Integrated energy optimization systems combining mining, heating, solar and monitoring.",
      metaTitle: "Energy Systems | EnergieMIND Shop",
      metaDescription:
        "Complete energy systems for mining heat utility, solar integration and infrastructure optimization.",
    },
    "custom-installations": {
      title: "Custom Installations",
      description:
        "Tailored hardware bundles and installation planning for your specific energy infrastructure.",
      metaTitle: "Custom Installations | EnergieMIND Shop",
      metaDescription:
        "Request custom mining and energy hardware setups tailored to your building and energy goals.",
    },
  },
  productLabels: {
    brand: "Brand",
    model: "Model",
    hashrate: "Hashrate",
    powerConsumption: "Power Consumption",
    heatOutput: "Heat Output",
    voltage: "Voltage",
    useCase: "Use Case",
    warranty: "Warranty",
    shipping: "Shipping",
    installation: "Installation Notes",
    riskNotice: "Risk & Safety Notice",
    price: "Price",
    addToCart: "Add to Cart",
    requestQuote: "Request Quote",
    specifications: "Technical Specifications",
    availability: "Availability",
    relatedProducts: "Related Products",
    notApplicable: "N/A",
  },
  availability: {
    onRequest: "Available on request",
    preOrder: "Pre-order inquiry",
    customQuote: "Custom quote",
  },
  products: {
    "heatbit-v2": {
      name: "Heatbit V2 Mining Heater",
      useCase:
        "Residential space heating with integrated Bitcoin mining. Ideal for apartments and small homes with adequate electrical capacity.",
      warranty: "2-year manufacturer warranty",
      shipping: "Ships within 5–10 business days after order confirmation",
      installation:
        "Plug-and-play setup. Requires dedicated 16A circuit. Professional electrical review recommended.",
      riskNotice:
        "High power consumption device. Ensure adequate ventilation and circuit capacity. Heat output varies with ambient conditions.",
    },
    "heatcore-pro-12": {
      name: "HeatCore Pro 12 Mining Heater",
      useCase:
        "Commercial and large residential hydronic heating integration. Connects to existing radiator or floor heating systems.",
      warranty: "3-year warranty with optional extended coverage",
      shipping: "Freight shipping. Lead time 2–4 weeks",
      installation:
        "Professional installation required. Hydronic connection by certified HVAC technician.",
      riskNotice:
        "Industrial-grade power draw. Building heat distribution must be evaluated before installation.",
    },
    "antminer-s21-hydro": {
      name: "Antminer S21 Hydro",
      useCase:
        "High-performance hydro-cooled Bitcoin mining for data centers and industrial heat recovery systems.",
      warranty: "180-day manufacturer warranty",
      shipping: "Bulk orders ship on pallet. Lead time on request",
      installation:
        "Requires hydro cooling loop and 380V three-phase power. Data center installation only.",
      riskNotice:
        "Industrial mining equipment. Professional installation mandatory. No profitability guarantee.",
    },
    "whatsminer-m60s": {
      name: "Whatsminer M60S",
      useCase:
        "Air-cooled ASIC miner for commercial mining facilities with heat capture potential.",
      warranty: "180-day manufacturer warranty",
      shipping: "Available on request. Regional shipping options vary",
      installation:
        "Requires adequate cooling airflow and 220V/380V power infrastructure.",
      riskNotice:
        "Generates significant heat and noise. Mining income not guaranteed.",
    },
    "solar-hybrid-8kw": {
      name: "Solar Hybrid Inverter 8kW",
      useCase:
        "Hybrid solar inverter for offsetting mining power consumption with on-site generation.",
      warranty: "5-year inverter warranty, 10-year optional extension",
      shipping: "Ships within 7–14 business days",
      installation:
        "Licensed electrician and solar installer required. Grid-tie approval may be needed.",
      riskNotice:
        "Grid connection regulations vary by region. Professional installation required.",
    },
    "mppt-controller-pro": {
      name: "MPPT Solar Controller Pro",
      useCase:
        "Maximum power point tracking controller for off-grid and hybrid mining power systems.",
      warranty: "3-year warranty",
      shipping: "In stock for request fulfillment",
      installation:
        "Compatible with 48V battery banks. Follow polarity and fuse guidelines.",
      riskNotice:
        "DC electrical systems require proper safety measures and qualified installation.",
    },
    "energymind-monitor-pro": {
      name: "EnergieMIND Monitor Pro",
      useCase:
        "Three-phase energy monitoring with cloud dashboard for mining facilities and smart buildings.",
      warranty: "2-year warranty",
      shipping: "Ships within 3–5 business days",
      installation:
        "CT clamp installation by qualified electrician. Wi-Fi or Ethernet connectivity.",
      riskNotice:
        "Must be installed on de-energized circuits by qualified personnel.",
    },
    "smart-plug-energy": {
      name: "Smart Plug Energy Monitor (6-Pack)",
      useCase:
        "Per-device power monitoring for mining rigs, heaters and infrastructure equipment.",
      warranty: "1-year warranty",
      shipping: "Available on request",
      installation:
        "Plug-and-play. App setup required. Max 16A per unit.",
      riskNotice:
        "Do not exceed rated amperage. Not suitable for direct high-power miner connections.",
    },
    "immersion-cool-kit": {
      name: "Immersion Cooling Kit",
      useCase:
        "Dielectric immersion cooling system for high-density ASIC deployments.",
      warranty: "2-year warranty on tank and cooling unit",
      shipping: "Freight delivery. Custom lead times",
      installation:
        "Professional installation required. Facility assessment needed.",
      riskNotice:
        "Handling of dielectric fluid requires trained personnel. Fire safety review required.",
    },
    "duct-heat-exchanger": {
      name: "Duct Heat Exchanger Module",
      useCase:
        "Captures miner exhaust heat for HVAC duct integration in commercial buildings.",
      warranty: "2-year warranty",
      shipping: "Ships within 10–15 business days",
      installation:
        "HVAC professional installation. Duct sizing assessment required.",
      riskNotice:
        "Heat recovery efficiency depends on building design and airflow configuration.",
    },
    "psu-3600w-platinum": {
      name: "3600W Platinum PSU",
      useCase:
        "High-efficiency power supply for ASIC miners and mining heater deployments.",
      warranty: "1-year warranty",
      shipping: "Available on request",
      installation:
        "Match voltage and connector type to target hardware. Adequate airflow required.",
      riskNotice:
        "Use only with compatible hardware. Overloading voids warranty.",
    },
    "cable-kit-industrial": {
      name: "Industrial Cable Kit",
      useCase:
        "Heavy-duty power and data cabling for mining rack and infrastructure installations.",
      warranty: "90-day warranty",
      shipping: "Available on request",
      installation:
        "Follow local electrical codes. Use appropriate gauge for amperage.",
      riskNotice:
        "Incorrect cabling poses fire and equipment damage risk. Professional installation recommended.",
    },
  },
  pages: {
    home: {
      title: "EnergieMIND Shop | Energy-Aware Mining & Infrastructure Hardware",
      description:
        "Official shop for EnergieMIND hardware. Mining heaters, Bitcoin miners, solar systems, energy monitoring and infrastructure equipment.",
    },
    shop: {
      title: "Shop All Products | EnergieMIND Shop",
      description:
        "Browse mining heaters, ASIC miners, solar equipment, monitoring devices and accessories. Request quotes for all products.",
      heading: "Hardware Catalog",
      subheading:
        "Physical equipment for energy-aware mining, heating and infrastructure optimization.",
    },
    support: {
      title: "Support | EnergieMIND Shop",
      description:
        "Installation guidance, warranty information and shipping details for EnergieMIND hardware products.",
      heading: "Product Support",
      intro:
        "Our team provides technical guidance for hardware selection, installation planning and warranty support.",
      installationTitle: "Installation Support",
      installationText:
        "Many products require professional electrical or HVAC installation. We provide documentation and can recommend certified installers in your region.",
      warrantyTitle: "Warranty",
      warrantyText:
        "Warranty terms vary by product and manufacturer. All warranty claims require proof of purchase and proper installation documentation.",
      shippingTitle: "Shipping & Fulfillment",
      shippingText:
        "Shipping timelines depend on product availability and destination. We do not display fake inventory — all availability is confirmed on request.",
    },
    contact: {
      title: "Contact | EnergieMIND Shop",
      description:
        "Contact EnergieMIND Shop for product inquiries, custom installations and technical support.",
      heading: "Contact Us",
      intro:
        "Reach out for product questions, bulk orders or custom energy infrastructure planning.",
      name: "Full Name",
      email: "Email Address",
      company: "Company (optional)",
      message: "Message",
      submit: "Send Message",
      success: "Thank you. We will respond within 1–2 business days.",
    },
    quote: {
      title: "Request Quote | EnergieMIND Shop",
      description:
        "Request a custom quote for mining hardware, heating systems and energy infrastructure equipment.",
      heading: "Request a Quote",
      intro:
        "Tell us about your project and we will prepare a tailored hardware proposal with shipping and installation guidance.",
      product: "Product or Category",
      quantity: "Quantity",
      setupType: "Installation Type",
      setupResidential: "Residential",
      setupCommercial: "Commercial / Industrial",
      setupCustom: "Custom Infrastructure",
      submit: "Submit Quote Request",
      success:
        "Your quote request has been received. Our team will contact you shortly.",
    },
    energySystems: {
      title: "Energy Systems | EnergieMIND Shop",
      description:
        "Integrated energy systems combining mining, heating, solar power and monitoring for optimized infrastructure.",
      heading: "Integrated Energy Systems",
      body: "Combine mining heat utility, solar generation and real-time monitoring into a unified energy infrastructure. We design custom hardware bundles for residential, commercial and industrial deployments.",
    },
    app: {
      title: "EnergieMIND Shop App | Mobile Hardware Portal",
      description:
        "Install the EnergieMIND Shop app to browse mining hardware, request quotes, and access support from your home screen.",
      heading: "EnergieMIND Shop App",
      intro:
        "Your mobile portal for energy-aware mining hardware. Browse products, submit quote requests, and contact our team — optimized for phone and tablet.",
      dashboard: "Dashboard",
      quickActions: "Quick Actions",
      recentActivity: "Recent Quote Requests",
      noActivity: "No quote requests yet. Submit your first inquiry from the Quote tab.",
      installTitle: "Install the Shop App",
      installIntro:
        "Add EnergieMIND Shop to your home screen for fast access — works today via Add to Home Screen on iOS and Android.",
      iphoneSteps: "Safari → app.energiemind.shop → Share → Add to Home Screen",
      androidSteps: "Chrome → app.energiemind.shop → menu → Install app or Add to Home screen",
      desktopSteps: "Chrome or Edge → install icon in the address bar, or bookmark app.energiemind.shop",
      openApp: "Open App",
      installed: "App ready on your device",
      installPrompt: "Install for quick access to quotes and product catalog",
      installButton: "Install App",
      offlineNote: "Cached pages available offline after first visit",
      tabHome: "Home",
      tabShop: "Shop",
      tabQuote: "Quote",
      tabSupport: "Support",
      backToWebsite: "Full Website",
    },
  },
  safety: {
    title: "Important Safety & Legal Notice",
    items: [
      "Mining equipment consumes high electricity and may require upgraded electrical infrastructure.",
      "Professional installation may be required for miners, heaters and solar equipment.",
      "Heat reuse efficiency depends on building design, insulation and HVAC configuration.",
      "All electrical installations must be reviewed for safety compliance by qualified personnel.",
      "No profitability guarantee. Mining income depends on network conditions and operating costs.",
      "No mining income guarantee. Past performance does not predict future results.",
    ],
    footer:
      "By requesting a quote or purchasing equipment, you acknowledge these risks and agree to follow all local regulations.",
  },
  footer: {
    description:
      "EnergieMIND Shop provides hardware and equipment for energy-aware mining, heating, monitoring and infrastructure optimization.",
    categories: "Categories",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    disclaimer: "Safety Disclaimer",
    rights: "All rights reserved.",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Do you sell physical hardware?",
        answer:
          "Yes. EnergieMIND Shop sells physical mining hardware, heaters, solar equipment, monitoring devices and accessories. This is not a token presale or virtual product store.",
      },
      {
        question: "Can I buy directly online?",
        answer:
          "We currently operate in quote mode. Use Request Quote on any product page to receive pricing, availability and shipping details for your region.",
      },
      {
        question: "Is mining profitable?",
        answer:
          "We make no profitability guarantees. Mining returns depend on electricity costs, hardware efficiency, network difficulty and market conditions.",
      },
      {
        question: "Can mining heat my home?",
        answer:
          "Mining heaters are designed for heat reuse, but efficiency depends on your building insulation, climate and heating system. Professional assessment is recommended.",
      },
      {
        question: "Do you offer installation?",
        answer:
          "We provide installation documentation and can connect you with certified electricians and HVAC professionals in supported regions.",
      },
      {
        question: "How do I get the EnergieMIND Shop app?",
        answer:
          "Open app.energiemind.shop on your phone and add it to your home screen (Safari → Share → Add to Home Screen on iPhone; Chrome → Install app on Android). The app provides mobile access to the shop, quotes, and support.",
      },
    ],
  },
  common: {
    learnMore: "Learn More",
    viewAll: "View All",
    backToShop: "Back to Shop",
    language: "Language",
    breadcrumbHome: "Home",
    breadcrumbShop: "Shop",
  },
};

export default en;
