"use client";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AppShellProps {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}

const tabs = [
  { key: "home", href: "", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { key: "shop", href: "/shop", icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" },
  { key: "quote", href: "/quote", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { key: "support", href: "/support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
] as const;

const tabLabels: Record<string, keyof Dictionary["pages"]["app"]> = {
  home: "tabHome",
  shop: "tabShop",
  quote: "tabQuote",
  support: "tabSupport",
};

export function AppShell({ locale, dict, children }: AppShellProps) {
  const pathname = usePathname();
  const base = `/${locale}/app`;
  const app = dict.pages.app;

  function isActive(href: string) {
    const full = `${base}${href}`;
    if (href === "") return pathname === base || pathname === `${base}/`;
    return pathname.startsWith(full);
  }

  return (
    <div className="flex flex-col h-full min-h-[100dvh] bg-gradient-to-b from-energy-50 to-white">
      <header className="shrink-0 bg-gradient-to-r from-energy-700 to-energy-800 text-white px-4 pt-safe pb-3 shadow-md">
        <div className="flex items-center justify-between max-w-lg mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-energy-400 to-sun-400 flex items-center justify-center shadow">
              <span className="font-bold text-sm text-energy-900">EM</span>
            </div>
            <div>
              <p className="font-semibold text-sm leading-tight">{dict.site.name}</p>
              <p className="text-xs text-energy-100/80">{app.heading}</p>
            </div>
          </div>
          <Link
            href={`/${locale}`}
            className="text-xs px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
          >
            {app.backToWebsite}
          </Link>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-lg mx-auto px-4 py-4">{children}</div>
      </main>

      <nav className="fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-energy-200 pb-safe">
        <div className="max-w-lg mx-auto flex justify-around">
          {tabs.map((tab) => {
            const active = isActive(tab.href);
            return (
              <Link
                key={tab.key}
                href={`${base}${tab.href}`}
                className={`flex flex-col items-center gap-0.5 py-2 px-3 min-w-[4.5rem] transition-colors ${
                  active ? "text-energy-700" : "text-steel-500"
                }`}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 2 : 1.5} d={tab.icon} />
                </svg>
                <span className="text-[10px] font-medium">{app[tabLabels[tab.key]]}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
