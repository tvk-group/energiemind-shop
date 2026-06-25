import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const SITE_URL = "https://energiemind.shop";

const locales = [
  "en", "tr", "de", "fr", "es", "it", "pt", "nl", "ar", "ru",
  "zh-cn", "zh-tw", "ja", "ko", "hi", "ur", "pl", "ro", "el",
  "sv", "no", "da", "fi", "he", "id",
];

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

function getLocaleEntries(locale) {
  const now = new Date().toISOString();
  const entries = staticPaths.map((path) => ({
    url: `${SITE_URL}/${locale}${path}`,
    lastmod: now,
    changefreq: path === "" ? "daily" : "weekly",
    priority: path === "" ? "1.0" : path === "/shop" ? "0.9" : "0.8",
  }));

  const productEntries = productSlugs.map((slug) => ({
    url: `${SITE_URL}/${locale}/products/${slug}`,
    lastmod: now,
    changefreq: "weekly",
    priority: "0.7",
  }));

  return [...entries, ...productEntries];
}

function localeSitemapXml(locale) {
  const entries = getLocaleEntries(locale);
  const urls = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${e.url}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

function sitemapIndexXml() {
  const now = new Date().toISOString();
  const sitemaps = locales
    .map(
      (locale) =>
        `  <sitemap>\n    <loc>${SITE_URL}/${locale}/sitemap.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps}\n</sitemapindex>`;
}

const publicDir = join(process.cwd(), "public");
mkdirSync(publicDir, { recursive: true });

for (const locale of locales) {
  const localeDir = join(publicDir, locale);
  mkdirSync(localeDir, { recursive: true });
  writeFileSync(join(localeDir, "sitemap.xml"), localeSitemapXml(locale));
}

writeFileSync(join(publicDir, "sitemap.xml"), sitemapIndexXml());

writeFileSync(
  join(publicDir, "robots.txt"),
  `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Yandex
Allow: /

User-agent: Baiduspider
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Host: ${SITE_URL}
`
);

console.log(`Generated sitemap index and ${locales.length} locale sitemaps.`);
