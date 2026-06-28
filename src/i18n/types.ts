export type AvailabilityKey = "onRequest" | "preOrder" | "customQuote";

export interface ProductTranslation {
  name: string;
  useCase: string;
  warranty: string;
  shipping: string;
  installation: string;
  riskNotice: string;
}

export interface CategoryTranslation {
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

export interface Dictionary {
  site: {
    name: string;
    tagline: string;
    domain: string;
    appUrl: string;
  };
  nav: {
    home: string;
    shop: string;
    miningHeaters: string;
    bitcoinMiners: string;
    energySystems: string;
    solarPower: string;
    monitoringDevices: string;
    accessories: string;
    support: string;
    contact: string;
    app: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    browseProducts: string;
    requestCustomSetup: string;
    getApp: string;
  };
  categories: Record<string, CategoryTranslation>;
  productLabels: {
    brand: string;
    model: string;
    hashrate: string;
    powerConsumption: string;
    heatOutput: string;
    voltage: string;
    useCase: string;
    warranty: string;
    shipping: string;
    installation: string;
    riskNotice: string;
    price: string;
    addToCart: string;
    requestQuote: string;
    specifications: string;
    availability: string;
    relatedProducts: string;
    notApplicable: string;
  };
  availability: Record<AvailabilityKey, string>;
  products: Record<string, ProductTranslation>;
  pages: {
    home: PageMeta;
    shop: PageMeta & { heading: string; subheading: string };
    support: PageMeta & {
      heading: string;
      intro: string;
      installationTitle: string;
      installationText: string;
      warrantyTitle: string;
      warrantyText: string;
      shippingTitle: string;
      shippingText: string;
    };
    contact: PageMeta & {
      heading: string;
      intro: string;
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      success: string;
    };
    quote: PageMeta & {
      heading: string;
      intro: string;
      product: string;
      quantity: string;
      setupType: string;
      setupResidential: string;
      setupCommercial: string;
      setupCustom: string;
      submit: string;
      success: string;
    };
    energySystems: PageMeta & { heading: string; body: string };
    app: PageMeta & {
      heading: string;
      intro: string;
      dashboard: string;
      quickActions: string;
      recentActivity: string;
      noActivity: string;
      installTitle: string;
      installIntro: string;
      iphoneSteps: string;
      androidSteps: string;
      desktopSteps: string;
      openApp: string;
      installed: string;
      installPrompt: string;
      installButton: string;
      offlineNote: string;
      tabHome: string;
      tabShop: string;
      tabQuote: string;
      tabSupport: string;
      backToWebsite: string;
    };
  };
  safety: {
    title: string;
    items: string[];
    footer: string;
  };
  footer: {
    description: string;
    categories: string;
    legal: string;
    privacy: string;
    terms: string;
    disclaimer: string;
    rights: string;
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  common: {
    learnMore: string;
    viewAll: string;
    backToShop: string;
    language: string;
    breadcrumbHome: string;
    breadcrumbShop: string;
  };
}
