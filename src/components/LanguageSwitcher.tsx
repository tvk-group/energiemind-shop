import type { Locale } from "@/i18n/config";
import { localeNames } from "@/i18n/config";
import Link from "next/link";

interface LanguageSwitcherProps {
  locale: Locale;
  currentPath: string;
}

export function LanguageSwitcher({ locale, currentPath }: LanguageSwitcherProps) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-steel-600 hover:text-energy-600 border border-steel-200 rounded-md bg-white transition-colors"
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3c2.2 2.4 3.4 5.1 3.4 9s-1.2 6.6-3.4 9c-2.2-2.4-3.4-5.1-3.4-9s1.2-6.6 3.4-9z" />
        </svg>
        <span>{localeNames[locale]}</span>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul
        role="listbox"
        className="absolute right-0 top-full mt-1 w-48 max-h-80 overflow-y-auto bg-white border border-steel-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all z-50"
      >
        {(Object.entries(localeNames) as [Locale, string][]).map(([code, name]) => (
          <li key={code} role="option" aria-selected={code === locale}>
            <Link
              href={`/${code}${currentPath}`}
              className={`block px-4 py-2 text-sm hover:bg-energy-50 hover:text-energy-700 ${
                code === locale ? "bg-energy-50 text-energy-700 font-medium" : "text-steel-700"
              }`}
              hrefLang={code}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
