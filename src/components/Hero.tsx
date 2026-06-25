import type { Dictionary } from "@/i18n/types";
import Link from "next/link";

interface HeroProps {
  locale: string;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-steel-50 via-white to-energy-50 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-energy-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-steel-200 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-steel-900 leading-tight tracking-tight">
            {dict.hero.headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-steel-600 leading-relaxed">
            {dict.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/shop`}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-energy-600 hover:bg-energy-700 rounded-lg transition-colors shadow-sm"
            >
              {dict.hero.browseProducts}
            </Link>
            <Link
              href={`/${locale}/quote`}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-energy-700 bg-white hover:bg-energy-50 border border-energy-200 rounded-lg transition-colors"
            >
              {dict.hero.requestCustomSetup}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
