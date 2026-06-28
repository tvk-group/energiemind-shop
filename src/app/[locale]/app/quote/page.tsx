import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
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
    path: "/app/quote",
    title: dict.pages.quote.title,
    description: dict.pages.quote.description,
  });
}

export default async function AppQuotePage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-energy-900">{dict.pages.quote.heading}</h1>
        <p className="mt-1 text-sm text-steel-600">{dict.pages.quote.intro}</p>
      </div>
      <QuoteForm dict={dict} />
      <SafetyDisclaimer dict={dict} variant="compact" />
    </div>
  );
}
