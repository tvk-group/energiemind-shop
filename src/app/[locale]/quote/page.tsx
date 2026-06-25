import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { SafetyDisclaimer } from "@/components/SafetyDisclaimer";
import { buildPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return buildPageMetadata({
    locale: locale as Locale,
    path: "/quote",
    title: dict.pages.quote.title,
    description: dict.pages.quote.description,
  });
}

export default async function QuotePage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[
          { name: dict.common.breadcrumbHome, href: `/${locale}` },
          { name: dict.pages.quote.heading },
        ]}
      />
      <h1 className="text-3xl font-bold text-steel-900">{dict.pages.quote.heading}</h1>
      <p className="mt-3 text-steel-600">{dict.pages.quote.intro}</p>
      <div className="mt-8">
        <QuoteForm dict={dict} />
      </div>
      <div className="mt-10">
        <SafetyDisclaimer dict={dict} variant="compact" />
      </div>
    </div>
  );
}
