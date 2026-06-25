# EnergieMIND Shop

Official e-commerce website for EnergieMIND physical hardware — mining heaters, Bitcoin miners, solar equipment, energy monitoring, and infrastructure accessories.

**Live domain:** https://energiemind.shop

## Features

- 25 fully localized languages with dedicated URL paths (`/en/`, `/tr/`, `/de/`, etc.)
- Enterprise-grade SEO: hreflang, canonical tags, Open Graph, Twitter cards, JSON-LD schemas
- Language-specific sitemaps with sitemap index
- Quote-based commerce flow (no fake inventory or checkout)
- Product specification tables with safety disclaimers
- Professional hardware store design

## Supported Languages

EN, TR, DE, FR, ES, IT, PT, NL, AR, RU, ZH-CN, ZH-TW, JA, KO, HI, UR, PL, RO, EL, SV, NO, DA, FI, HE, ID

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en/` by default.

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js hosting. Configure `energiemind.shop` as the custom domain.

## Project Structure

```
src/
  app/[locale]/     # Localized pages
  components/       # UI components
  data/             # Product & category data
  i18n/dictionaries/ # 25 language translation files
  lib/              # SEO & sitemap utilities
```
