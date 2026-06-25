import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageShell } from "@/components/PageShell";
import { SafetyDisclaimer } from "@/components/SafetyDisclaimer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return buildPageMetadata({
    locale: locale as Locale,
    path: "/energy-systems",
    title: dict.pages.energySystems.title,
    description: dict.pages.energySystems.description,
  });
}

export default async function EnergySystemsPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const page = dict.pages.energySystems;

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { name: dict.common.breadcrumbHome, href: `/${locale}` },
          { name: page.heading },
        ]}
      />
      <h1 className="text-3xl font-bold text-energy-900">{page.heading}</h1>
      <p className="mt-4 text-steel-600 max-w-3xl leading-relaxed text-lg">{page.body}</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["mining-heaters", "solar-power", "monitoring-devices"].map((slug) => {
          const cat = dict.categories[slug];
          return (
            <Link
              key={slug}
              href={`/${locale}/${slug}`}
              className="p-6 site-card border rounded-xl hover:border-energy-300 hover:shadow-md transition-all"
            >
              <h2 className="font-semibold text-energy-900">{cat?.title}</h2>
              <p className="mt-2 text-sm text-steel-600 line-clamp-3">{cat?.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-energy-900 mb-6">{dict.nav.shop}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.slug} locale={locale} dict={dict} product={product} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href={`/${locale}/quote`}
          className="px-8 py-3 text-base font-medium text-energy-900 bg-sun-400 hover:bg-sun-300 rounded-lg transition-colors shadow-sm"
        >
          {dict.hero.requestCustomSetup}
        </Link>
      </div>

      <div className="mt-12">
        <SafetyDisclaimer dict={dict} />
      </div>
    </PageShell>
  );
}
