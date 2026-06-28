import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { InstallBanner } from "@/components/InstallBanner";
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
    path: "/app/install",
    title: dict.pages.app.installTitle,
    description: dict.pages.app.installIntro,
  });
}

export default async function AppInstallPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const app = dict.pages.app;

  const steps = [
    { label: "iPhone / iPad", text: app.iphoneSteps },
    { label: "Android", text: app.androidSteps },
    { label: "Desktop", text: app.desktopSteps },
  ];

  return (
    <div className="space-y-5">
      <InstallBanner dict={dict} />

      <div>
        <h1 className="text-xl font-bold text-energy-900">{app.installTitle}</h1>
        <p className="mt-2 text-sm text-steel-600 leading-relaxed">{app.installIntro}</p>
      </div>

      {steps.map((step) => (
        <div key={step.label} className="p-4 rounded-xl bg-white border border-energy-200/80">
          <p className="font-semibold text-energy-700">{step.label}</p>
          <p className="mt-1 text-sm text-steel-600">{step.text}</p>
        </div>
      ))}

      <div className="p-4 rounded-xl bg-gradient-to-br from-energy-700 to-energy-800 text-white">
        <p className="font-medium">{dict.site.appUrl}</p>
        <p className="mt-1 text-sm text-energy-100/80">{app.offlineNote}</p>
      </div>

      <Link
        href={`/${locale}/app`}
        className="block w-full text-center py-3 rounded-xl bg-sun-400 text-energy-900 font-semibold hover:bg-sun-300 transition-colors"
      >
        {app.openApp} →
      </Link>
    </div>
  );
}
