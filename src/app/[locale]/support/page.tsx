import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageShell } from "@/components/PageShell";
import { SafetyDisclaimer } from "@/components/SafetyDisclaimer";
import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, buildFaqSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return buildPageMetadata({
    locale: locale as Locale,
    path: "/support",
    title: dict.pages.support.title,
    description: dict.pages.support.description,
  });
}

export default async function SupportPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const page = dict.pages.support;

  return (
    <>
      <JsonLd data={buildFaqSchema(dict)} />
      <PageShell narrow>
        <Breadcrumbs
          items={[
            { name: dict.common.breadcrumbHome, href: `/${locale}` },
            { name: dict.nav.support },
          ]}
        />
        <h1 className="text-3xl font-bold text-energy-900">{page.heading}</h1>
        <p className="mt-3 text-steel-600 text-lg">{page.intro}</p>

        <div className="mt-10 space-y-8">
          <section className="site-card border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-energy-900">{page.installationTitle}</h2>
            <p className="mt-3 text-steel-600 leading-relaxed">{page.installationText}</p>
          </section>
          <section className="site-card border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-energy-900">{page.warrantyTitle}</h2>
            <p className="mt-3 text-steel-600 leading-relaxed">{page.warrantyText}</p>
          </section>
          <section className="site-card border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-energy-900">{page.shippingTitle}</h2>
            <p className="mt-3 text-steel-600 leading-relaxed">{page.shippingText}</p>
          </section>
        </div>

        <div className="mt-12">
          <SafetyDisclaimer dict={dict} />
        </div>
      </PageShell>
      <FaqSection dict={dict} />
    </>
  );
}
