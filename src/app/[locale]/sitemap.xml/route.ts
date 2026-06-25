import { locales, isValidLocale } from "@/i18n/config";
import { generateLocaleSitemapXml } from "@/lib/sitemap";
import { notFound } from "next/navigation";

interface RouteProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: RouteProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const xml = generateLocaleSitemapXml(locale);
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
