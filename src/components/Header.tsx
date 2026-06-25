"use client";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
  dict: Dictionary;
}

const navItems = [
  { key: "home" as const, href: "" },
  { key: "shop" as const, href: "/shop" },
  { key: "miningHeaters" as const, href: "/mining-heaters" },
  { key: "bitcoinMiners" as const, href: "/bitcoin-miners" },
  { key: "energySystems" as const, href: "/energy-systems" },
  { key: "solarPower" as const, href: "/solar-power" },
  { key: "monitoringDevices" as const, href: "/monitoring-devices" },
  { key: "accessories" as const, href: "/accessories" },
  { key: "support" as const, href: "/support" },
  { key: "contact" as const, href: "/contact" },
];

export function Header({ locale, dict }: HeaderProps) {
  const pathname = usePathname();
  const currentPath = pathname.replace(`/${locale}`, "") || "";

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-steel-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-energy-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">EM</span>
            </div>
            <span className="font-semibold text-steel-900 text-lg hidden sm:block">
              {dict.site.name}
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="px-2.5 py-2 text-sm text-steel-600 hover:text-energy-600 transition-colors whitespace-nowrap"
              >
                {dict.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}/quote`}
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white bg-energy-600 hover:bg-energy-700 rounded-md transition-colors"
            >
              {dict.hero.requestCustomSetup}
            </Link>
            <LanguageSwitcher locale={locale} currentPath={currentPath} />
          </div>
        </div>

        <nav className="xl:hidden flex gap-1 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-hide" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}${item.href}`}
              className="px-3 py-1.5 text-xs text-steel-600 hover:text-energy-600 bg-steel-50 hover:bg-energy-50 rounded-full whitespace-nowrap transition-colors shrink-0"
            >
              {dict.nav[item.key]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
