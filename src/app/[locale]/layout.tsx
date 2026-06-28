import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SiteChrome } from "@/components/SiteChrome";
import { PwaRegister } from "@/components/PwaRegister";
import { notFound } from "next/navigation";

import { HtmlAttributes } from "@/components/HtmlAttributes";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  if (!locales.includes(localeParam as Locale)) notFound();
  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <HtmlAttributes locale={locale} />
      <PwaRegister />
      <SiteChrome locale={locale} dict={dict}>
        {children}
      </SiteChrome>
    </>
  );
}
