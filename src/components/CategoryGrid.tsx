import type { Dictionary } from "@/i18n/types";
import Link from "next/link";

interface CategoryGridProps {
  locale: string;
  dict: Dictionary;
}

const categorySlugs = [
  "mining-heaters",
  "bitcoin-miners",
  "solar-power",
  "monitoring-devices",
  "cooling-systems",
  "accessories",
  "energy-systems",
  "custom-installations",
] as const;

const categoryHrefs: Record<string, string> = {
  "mining-heaters": "/mining-heaters",
  "bitcoin-miners": "/bitcoin-miners",
  "solar-power": "/solar-power",
  "monitoring-devices": "/monitoring-devices",
  "cooling-systems": "/cooling-systems",
  accessories: "/accessories",
  "energy-systems": "/energy-systems",
  "custom-installations": "/quote",
};

export function CategoryGrid({ locale, dict }: CategoryGridProps) {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-steel-900">
          {dict.pages.shop.heading}
        </h2>
        <p className="mt-2 text-steel-600 max-w-2xl">{dict.pages.shop.subheading}</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categorySlugs.map((slug) => {
            const cat = dict.categories[slug];
            if (!cat) return null;
            return (
              <Link
                key={slug}
                href={`/${locale}${categoryHrefs[slug]}`}
                className="group p-6 bg-white border border-steel-200 rounded-xl hover:border-energy-300 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-energy-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-energy-200 transition-colors">
                  <svg className="w-5 h-5 text-energy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-steel-900 group-hover:text-energy-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm text-steel-600 line-clamp-3">{cat.description}</p>
                <span className="mt-3 inline-flex text-sm font-medium text-energy-600 group-hover:text-energy-700">
                  {dict.common.learnMore} →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
