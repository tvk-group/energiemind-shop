import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/i18n/dictionaries/en").then((m) => m.default),
  tr: () => import("@/i18n/dictionaries/tr").then((m) => m.default),
  de: () => import("@/i18n/dictionaries/de").then((m) => m.default),
  fr: () => import("@/i18n/dictionaries/fr").then((m) => m.default),
  es: () => import("@/i18n/dictionaries/es").then((m) => m.default),
  it: () => import("@/i18n/dictionaries/it").then((m) => m.default),
  pt: () => import("@/i18n/dictionaries/pt").then((m) => m.default),
  nl: () => import("@/i18n/dictionaries/nl").then((m) => m.default),
  ar: () => import("@/i18n/dictionaries/ar").then((m) => m.default),
  ru: () => import("@/i18n/dictionaries/ru").then((m) => m.default),
  "zh-cn": () => import("@/i18n/dictionaries/zh-cn").then((m) => m.default),
  "zh-tw": () => import("@/i18n/dictionaries/zh-tw").then((m) => m.default),
  ja: () => import("@/i18n/dictionaries/ja").then((m) => m.default),
  ko: () => import("@/i18n/dictionaries/ko").then((m) => m.default),
  hi: () => import("@/i18n/dictionaries/hi").then((m) => m.default),
  ur: () => import("@/i18n/dictionaries/ur").then((m) => m.default),
  pl: () => import("@/i18n/dictionaries/pl").then((m) => m.default),
  ro: () => import("@/i18n/dictionaries/ro").then((m) => m.default),
  el: () => import("@/i18n/dictionaries/el").then((m) => m.default),
  sv: () => import("@/i18n/dictionaries/sv").then((m) => m.default),
  no: () => import("@/i18n/dictionaries/no").then((m) => m.default),
  da: () => import("@/i18n/dictionaries/da").then((m) => m.default),
  fi: () => import("@/i18n/dictionaries/fi").then((m) => m.default),
  he: () => import("@/i18n/dictionaries/he").then((m) => m.default),
  id: () => import("@/i18n/dictionaries/id").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
