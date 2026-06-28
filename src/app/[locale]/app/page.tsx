import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
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
    path: "/app",
    title: dict.pages.app.title,
    description: dict.pages.app.description,
  });
}

const quickActions = [
  { key: "shop", href: "/shop", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z", color: "from-energy-500 to-energy-600" },
  { key: "quote", href: "/quote", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "from-sun-400 to-sun-500" },
  { key: "support", href: "/support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z", color: "from-energy-600 to-energy-700" },
  { key: "install", href: "/install", icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4", color: "from-energy-400 to-energy-500" },
] as const;

const actionLabels: Record<string, string> = {
  shop: "tabShop",
  quote: "tabQuote",
  support: "tabSupport",
  install: "installButton",
};

export default async function AppDashboardPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const app = dict.pages.app;

  return (
    <div className="space-y-6">
      <InstallBanner dict={dict} />

      <div>
        <h1 className="text-xl font-bold text-energy-900">{app.dashboard}</h1>
        <p className="mt-1 text-sm text-steel-600">{app.intro}</p>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-steel-700 uppercase tracking-wide mb-3">
          {app.quickActions}
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Link
              key={action.key}
              href={`/${locale}/app${action.href}`}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-energy-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-sm`}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={action.icon} />
                </svg>
              </div>
              <span className="text-sm font-medium text-steel-800">
                {app[actionLabels[action.key] as keyof typeof app]}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-xl bg-white border border-energy-200/80">
        <h2 className="text-sm font-semibold text-steel-700">{app.recentActivity}</h2>
        <p className="mt-2 text-sm text-steel-500">{app.noActivity}</p>
      </div>

      <p className="text-xs text-center text-steel-400">{app.offlineNote}</p>
    </div>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
