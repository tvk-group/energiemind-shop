import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { buildPageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return buildPageMetadata({
    locale: locale as Locale,
    path: "/contact",
    title: dict.pages.contact.title,
    description: dict.pages.contact.description,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <PageShell narrow>
      <Breadcrumbs
        items={[
          { name: dict.common.breadcrumbHome, href: `/${locale}` },
          { name: dict.nav.contact },
        ]}
      />
      <h1 className="text-3xl font-bold text-energy-900">{dict.pages.contact.heading}</h1>
      <p className="mt-3 text-steel-600">{dict.pages.contact.intro}</p>
      <div className="mt-8">
        <ContactForm dict={dict} />
      </div>
    </PageShell>
  );
}
