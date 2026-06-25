import type { Dictionary } from "@/i18n/types";
import Link from "next/link";

interface FooterProps {
  locale: string;
  dict: Dictionary;
}

const categoryLinks = [
  { slug: "mining-heaters", href: "/mining-heaters" },
  { slug: "bitcoin-miners", href: "/bitcoin-miners" },
  { slug: "solar-power", href: "/solar-power" },
  { slug: "monitoring-devices", href: "/monitoring-devices" },
  { slug: "cooling-systems", href: "/cooling-systems" },
  { slug: "accessories", href: "/accessories" },
];

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="bg-steel-900 text-steel-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-energy-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">EM</span>
              </div>
              <span className="font-semibold text-white text-lg">{dict.site.name}</span>
            </div>
            <p className="text-sm leading-relaxed">{dict.footer.description}</p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">{dict.footer.categories}</h3>
            <ul className="space-y-2">
              {categoryLinks.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${locale}${cat.href}`}
                    className="text-sm hover:text-energy-400 transition-colors"
                  >
                    {dict.categories[cat.slug]?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">{dict.footer.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/support`} className="hover:text-energy-400 transition-colors">
                  {dict.footer.disclaimer}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-energy-400 transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-steel-700 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} {dict.site.name}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
