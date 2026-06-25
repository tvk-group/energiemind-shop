export const categories = [
  {
    slug: "mining-heaters",
    icon: "heat",
    productSlugs: ["heatbit-v2", "heatcore-pro-12"],
  },
  {
    slug: "bitcoin-miners",
    icon: "miner",
    productSlugs: ["antminer-s21-hydro", "whatsminer-m60s"],
  },
  {
    slug: "solar-power",
    icon: "solar",
    productSlugs: ["solar-hybrid-8kw", "mppt-controller-pro"],
  },
  {
    slug: "monitoring-devices",
    icon: "monitor",
    productSlugs: ["energymind-monitor-pro", "smart-plug-energy"],
  },
  {
    slug: "cooling-systems",
    icon: "cooling",
    productSlugs: ["immersion-cool-kit", "duct-heat-exchanger"],
  },
  {
    slug: "accessories",
    icon: "accessories",
    productSlugs: ["psu-3600w-platinum", "cable-kit-industrial"],
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];
