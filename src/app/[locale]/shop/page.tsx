import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SafetyDisclaimer } from "@/components/SafetyDisclaimer";
import { products } from "@/data/products";
import { buildPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return buildPageMetadata({
    locale: locale as Locale,
    path: "/shop",
    title: dict.pages.shop.title,
    description: dict.pages.shop.description,
  });
}

export default async function ShopPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[
          { name: dict.common.breadcrumbHome, href: `/${locale}` },
          { name: dict.common.breadcrumbShop },
        ]}
      />
      <h1 className="text-3xl font-bold text-steel-900">{dict.pages.shop.heading}</h1>
      <p className="mt-2 text-steel-600 max-w-2xl">{dict.pages.shop.subheading}</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} locale={locale} dict={dict} product={product} />
        ))}
      </div>

      <div className="mt-12">
        <SafetyDisclaimer dict={dict} variant="compact" />
      </div>
    </div>
  );
}
