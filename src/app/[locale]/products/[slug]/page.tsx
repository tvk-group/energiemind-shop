import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SafetyDisclaimer } from "@/components/SafetyDisclaimer";
import { SpecTable, ProductActions } from "@/components/SpecTable";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { products, getProductBySlug } from "@/data/products";
import {
  buildPageMetadata,
  buildProductSchema,
  buildBreadcrumbSchema,
} from "@/lib/seo";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const dict = await getDictionary(locale as Locale);
  const translation = dict.products[slug];
  return buildPageMetadata({
    locale: locale as Locale,
    path: `/products/${slug}`,
    title: `${translation?.name ?? product.model} | ${dict.site.name}`,
    description: translation?.useCase ?? dict.pages.shop.description,
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const dict = await getDictionary(locale as Locale);
  const translation = dict.products[slug];
  const related = products
    .filter((p) => p.category === product.category && p.slug !== slug)
    .slice(0, 3);

  const schemas = [
    buildProductSchema(locale as Locale, dict, product),
    buildBreadcrumbSchema(locale as Locale, [
      { name: dict.common.breadcrumbHome, path: "" },
      { name: dict.common.breadcrumbShop, path: "/shop" },
      { name: translation?.name ?? product.model, path: `/products/${slug}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumbs
          items={[
            { name: dict.common.breadcrumbHome, href: `/${locale}` },
            { name: dict.common.breadcrumbShop, href: `/${locale}/shop` },
            { name: translation?.name ?? product.model },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
          <div className="aspect-square bg-gradient-to-br from-steel-100 to-steel-50 rounded-xl flex items-center justify-center border border-steel-200">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-energy-100 rounded-xl flex items-center justify-center">
                <svg className="w-12 h-12 text-energy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-energy-600">
                {dict.categories[product.category]?.title}
              </span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-steel-900">
              {translation?.name ?? product.model}
            </h1>
            <p className="mt-2 text-steel-500">
              {product.brand} · {product.model}
            </p>
            <p className="mt-4 text-2xl font-bold text-steel-900">
              {product.price.toLocaleString()} {product.currency}
            </p>
            <p className="mt-1 text-sm font-medium text-energy-600">
              {dict.availability[product.availability]}
            </p>
            <p className="mt-4 text-steel-600 leading-relaxed">{translation?.useCase}</p>

            <div className="mt-8">
              <ProductActions locale={locale} dict={dict} product={product} />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold text-steel-900 mb-4">
            {dict.productLabels.specifications}
          </h2>
          <SpecTable dict={dict} product={product} />
        </div>

        {translation?.riskNotice && (
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="font-semibold text-amber-900">{dict.productLabels.riskNotice}</h3>
            <p className="mt-2 text-sm text-amber-800">{translation.riskNotice}</p>
          </div>
        )}

        <div className="mt-12">
          <SafetyDisclaimer dict={dict} variant="compact" />
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-steel-900 mb-6">
              {dict.productLabels.relatedProducts}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} locale={locale} dict={dict} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
