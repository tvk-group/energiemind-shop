import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
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
    path: "/app/support",
    title: dict.pages.support.title,
    description: dict.pages.support.description,
  });
}

export default async function AppSupportPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const support = dict.pages.support;

  const sections = [
    { title: support.installationTitle, text: support.installationText },
    { title: support.warrantyTitle, text: support.warrantyText },
    { title: support.shippingTitle, text: support.shippingText },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-xl font-bold text-energy-900">{support.heading}</h1>
        <p className="mt-1 text-sm text-steel-600">{support.intro}</p>
      </div>

      {sections.map((section) => (
        <div key={section.title} className="p-4 rounded-xl bg-white border border-energy-200/80">
          <h2 className="font-semibold text-energy-800">{section.title}</h2>
          <p className="mt-2 text-sm text-steel-600 leading-relaxed">{section.text}</p>
        </div>
      ))}

      <Link
        href={`/${locale}/contact`}
        className="block w-full text-center py-3 rounded-xl bg-energy-600 text-white font-medium hover:bg-energy-700 transition-colors"
      >
        {dict.nav.contact}
      </Link>
    </div>
  );
}
