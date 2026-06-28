import type { Dictionary } from "@/i18n/types";
import Link from "next/link";

interface AppInstallSectionProps {
  locale: string;
  dict: Dictionary;
}

export function AppInstallSection({ locale, dict }: AppInstallSectionProps) {
  const app = dict.pages.app;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-energy-800 via-energy-700 to-energy-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sun-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sun-300 text-sm font-medium uppercase tracking-wide mb-2">
              {dict.nav.app}
            </p>
            <h2 className="text-3xl font-bold">{app.installTitle}</h2>
            <p className="mt-4 text-energy-100/90 leading-relaxed">{app.installIntro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/${locale}/app`}
                className="inline-flex px-6 py-3 bg-sun-400 text-energy-900 font-semibold rounded-lg hover:bg-sun-300 transition-colors"
              >
                {app.openApp} →
              </Link>
              <Link
                href={`/${locale}/app/install`}
                className="inline-flex px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                {dict.common.learnMore}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white/10 backdrop-blur border border-white/15">
              <p className="font-semibold text-sun-200">iPhone / iPad</p>
              <p className="mt-1 text-sm text-energy-100/80">{app.iphoneSteps}</p>
            </div>
            <div className="p-5 rounded-xl bg-white/10 backdrop-blur border border-white/15">
              <p className="font-semibold text-sun-200">Android</p>
              <p className="mt-1 text-sm text-energy-100/80">{app.androidSteps}</p>
            </div>
            <div className="p-5 rounded-xl bg-white/10 backdrop-blur border border-white/15">
              <p className="font-semibold text-sun-200">Desktop</p>
              <p className="mt-1 text-sm text-energy-100/80">{app.desktopSteps}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
