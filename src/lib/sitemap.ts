import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/seo";

const staticPaths = [
  "",
  "/shop",
  "/mining-heaters",
  "/bitcoin-miners",
  "/energy-systems",
  "/solar-power",
  "/monitoring-devices",
  "/accessories",
  "/cooling-systems",
  "/support",
  "/contact",
  "/quote",
];

const productSlugs = [
  "heatbit-v2",
  "heatcore-pro-12",
  "antminer-s21-hydro",
  "whatsminer-m60s",
  "solar-hybrid-8kw",
  "mppt-controller-pro",
  "energymind-monitor-pro",
  "smart-plug-energy",
  "immersion-cool-kit",
  "duct-heat-exchanger",
  "psu-3600w-platinum",
  "cable-kit-industrial",
];

export function getLocaleSitemapEntries(locale: string) {
  const entries = staticPaths.map((path) => ({
    url: `${SITE_URL}/${locale}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("daily" as const) : ("weekly" as const),
    priority: path === "" ? 1 : path === "/shop" ? 0.9 : 0.8,
  }));

  const productEntries = productSlugs.map((slug) => ({
    url: `${SITE_URL}/${locale}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...entries, ...productEntries];
}

export function generateSitemapIndexXml(): string {
  const sitemaps = locales
    .map(
      (locale) =>
        `  <sitemap>\n    <loc>${SITE_URL}/${locale}/sitemap.xml</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </sitemap>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}\n</sitemapindex>`;
}

export function generateLocaleSitemapXml(locale: string): string {
  const entries = getLocaleSitemapEntries(locale);
  const urls = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${entry.url}</loc>\n    <lastmod>${entry.lastModified.toISOString()}</lastmod>\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}
