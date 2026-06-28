import type { Dictionary } from "@/i18n/types";
import Link from "next/link";

interface HeroProps {
  locale: string;
  dict: Dictionary;
}

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-energy-200/60">
      <div className="absolute inset-0 bg-gradient-to-br from-energy-700 via-energy-600 to-energy-800" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_85%_15%,rgba(251,191,36,0.55),transparent_42%)]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_10%_80%,rgba(110,201,159,0.45),transparent_40%)]" />
      <div className="absolute top-8 right-12 w-28 h-28 rounded-full bg-gradient-to-br from-sun-300 to-sun-500 opacity-80 blur-sm" aria-hidden />
      <div className="absolute top-12 right-16 w-16 h-16 rounded-full bg-sun-200 opacity-90" aria-hidden>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-sun-300 to-sun-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-energy-100 text-sm font-medium border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-sun-400" aria-hidden />
            EnergieMIND · Green Energy Hardware
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {dict.hero.headline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-energy-100/90 leading-relaxed">
            {dict.hero.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/shop`}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-energy-800 bg-sun-400 hover:bg-sun-300 rounded-lg transition-colors shadow-lg shadow-black/10"
            >
              {dict.hero.browseProducts}
            </Link>
            <Link
              href={`/${locale}/quote`}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-white/15 hover:bg-white/25 border border-white/30 rounded-lg transition-colors backdrop-blur-sm"
            >
              {dict.hero.requestCustomSetup}
            </Link>
            <Link
              href={`/${locale}/app`}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-energy-800 bg-white hover:bg-energy-50 rounded-lg transition-colors shadow-lg shadow-black/10"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              {dict.hero.getApp}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
