import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductCard } from "@/components/ProductCard";
import { SafetyDisclaimer } from "@/components/SafetyDisclaimer";
import { FaqSection } from "@/components/FaqSection";
import { AppInstallSection } from "@/components/AppInstallSection";
import { JsonLd } from "@/components/JsonLd";
import { products } from "@/data/products";
import {
  buildPageMetadata,
  buildOrganizationSchema,
  buildWebsiteSchema,
  buildFaqSchema,
} from "@/lib/seo";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return buildPageMetadata({
    locale: locale as Locale,
    path: "",
    title: dict.pages.home.title,
    description: dict.pages.home.description,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const featured = products.slice(0, 4);

  const schemas = [
    buildOrganizationSchema(dict),
    buildWebsiteSchema(dict, locale as Locale),
    buildFaqSchema(dict),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <Hero locale={locale} dict={dict} />
      <CategoryGrid locale={locale} dict={dict} />

      <section className="py-16 site-section border-y border-energy-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-steel-900">{dict.nav.shop}</h2>
            <Link
              href={`/${locale}/shop`}
              className="text-sm font-medium text-energy-600 hover:text-energy-700"
            >
              {dict.common.viewAll} →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard
                key={product.slug}
                locale={locale}
                dict={dict}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SafetyDisclaimer dict={dict} />
        </div>
      </section>

      <AppInstallSection locale={locale} dict={dict} />

      <FaqSection dict={dict} />
    </>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
