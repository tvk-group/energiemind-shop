import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SafetyDisclaimer } from "@/components/SafetyDisclaimer";
import { PageShell } from "@/components/PageShell";
import { getProductsByCategory } from "@/data/products";
import { buildPageMetadata } from "@/lib/seo";

interface CategoryPageProps {
  params: Promise<{ locale: string }>;
  categorySlug: string;
}

export async function generateCategoryMetadata({
  params,
  categorySlug,
}: CategoryPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const cat = dict.categories[categorySlug];
  return buildPageMetadata({
    locale: locale as Locale,
    path: `/${categorySlug}`,
    title: cat?.metaTitle ?? dict.pages.shop.title,
    description: cat?.metaDescription ?? dict.pages.shop.description,
  });
}

export async function CategoryPageContent({
  params,
  categorySlug,
}: CategoryPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const cat = dict.categories[categorySlug];
  const categoryProducts = getProductsByCategory(categorySlug);

  if (!cat) return null;

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: dict.common.breadcrumbHome, href: `/${locale}` },
          { name: dict.common.breadcrumbShop, href: `/${locale}/shop` },
          { name: cat.title },
        ]}
      />
      <h1 className="text-3xl font-bold text-energy-900">{cat.title}</h1>
      <p className="mt-3 text-steel-600 max-w-3xl leading-relaxed">{cat.description}</p>

      {categoryProducts.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.slug} locale={locale} dict={dict} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-10 p-8 bg-energy-50 border border-energy-200 rounded-xl text-center">
          <p className="text-steel-600">{dict.availability.customQuote}</p>
        </div>
      )}

      <div className="mt-12">
        <SafetyDisclaimer dict={dict} variant="compact" />
      </div>
    </PageShell>
  );
}
