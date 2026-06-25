import type { Locale } from "@/i18n/config";
import { locales, ogLocales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const SITE_URL = "https://energiemind.shop";

export function getCanonicalUrl(locale: Locale, path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

export function getAlternateLanguages(path: string = ""): Record<string, string> {
  const cleanPath = path.startsWith("/") ? path : path ? `/${path}` : "";
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    alternates[locale] = `${SITE_URL}/${locale}${cleanPath}`;
  }
  alternates["x-default"] = `${SITE_URL}/en${cleanPath}`;
  return alternates;
}

export interface PageSeoInput {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  image?: string;
}

export function buildPageMetadata(input: PageSeoInput) {
  const { locale, path, title, description, type = "website", image } = input;
  const url = getCanonicalUrl(locale, path);
  const ogImage = image ?? `${SITE_URL}/og-default.png`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: getAlternateLanguages(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "EnergieMIND Shop",
      locale: ogLocales[locale],
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [ogImage],
    },
  };
}

export function buildOrganizationSchema(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: dict.site.name,
    url: dict.site.domain,
    description: dict.site.tagline,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: locales.map((l) => l.toUpperCase()),
    },
  };
}

export function buildWebsiteSchema(dict: Dictionary, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: dict.site.name,
    url: `${SITE_URL}/${locale}`,
    description: dict.site.tagline,
    inLanguage: locale,
    publisher: {
      "@type": "Organization",
      name: dict.site.name,
    },
  };
}

export function buildBreadcrumbSchema(
  locale: Locale,
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(locale, item.path),
    })),
  };
}

export function buildProductSchema(
  locale: Locale,
  dict: Dictionary,
  product: {
    slug: string;
    brand: string;
    model: string;
    price: number;
    currency: string;
  }
) {
  const translation = dict.products[product.slug];
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: translation?.name ?? product.model,
    description: translation?.useCase ?? "",
    brand: { "@type": "Brand", name: product.brand },
    sku: product.slug,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
      availability: "https://schema.org/PreOrder",
      url: getCanonicalUrl(locale, `/products/${product.slug}`),
    },
  };
}

export function buildFaqSchema(dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export { SITE_URL };
