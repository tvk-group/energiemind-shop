"use client";

import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface SiteChromeProps {
  locale: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}

export function SiteChrome({ locale, dict, children }: SiteChromeProps) {
  const pathname = usePathname();
  const isApp = pathname.includes(`/${locale}/app`);

  if (isApp) {
    return <>{children}</>;
  }

  return (
    <>
      <Header locale={locale} dict={dict} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
