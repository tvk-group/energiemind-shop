import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { ProductCard } from "@/components/ProductCard";
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
    path: "/app/shop",
    title: dict.pages.shop.title,
    description: dict.pages.shop.description,
  });
}

export default async function AppShopPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-energy-900">{dict.pages.shop.heading}</h1>
        <p className="mt-1 text-sm text-steel-600">{dict.pages.shop.subheading}</p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            locale={locale}
            dict={dict}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
