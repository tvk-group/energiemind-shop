import type { AvailabilityKey } from "@/i18n/types";

export interface Product {
  slug: string;
  category: string;
  brand: string;
  model: string;
  hashrate: string | null;
  powerConsumption: string;
  heatOutput: string | null;
  voltage: string;
  price: number;
  currency: string;
  availability: AvailabilityKey;
}

export const products: Product[] = [
  {
    slug: "heatbit-v2",
    category: "mining-heaters",
    brand: "Heatbit",
    model: "V2",
    hashrate: "Variable",
    powerConsumption: "1400W",
    heatOutput: "1200W thermal",
    voltage: "220–240V",
    price: 899,
    currency: "EUR",
    availability: "onRequest",
  },
  {
    slug: "heatcore-pro-12",
    category: "mining-heaters",
    brand: "HeatCore",
    model: "Pro 12",
    hashrate: "12 TH/s",
    powerConsumption: "3200W",
    heatOutput: "2800W thermal",
    voltage: "380V 3-phase",
    price: 4290,
    currency: "EUR",
    availability: "customQuote",
  },
  {
    slug: "antminer-s21-hydro",
    category: "bitcoin-miners",
    brand: "Bitmain",
    model: "Antminer S21 Hydro",
    hashrate: "335 TH/s",
    powerConsumption: "5360W",
    heatOutput: "Water-cooled",
    voltage: "380V 3-phase",
    price: 5890,
    currency: "EUR",
    availability: "onRequest",
  },
  {
    slug: "whatsminer-m60s",
    category: "bitcoin-miners",
    brand: "MicroBT",
    model: "M60S",
    hashrate: "186 TH/s",
    powerConsumption: "3441W",
    heatOutput: "Air exhaust",
    voltage: "220V / 380V",
    price: 3290,
    currency: "EUR",
    availability: "preOrder",
  },
  {
    slug: "solar-hybrid-8kw",
    category: "solar-power",
    brand: "SolarEdge",
    model: "Hybrid 8kW",
    hashrate: null,
    powerConsumption: "N/A (inverter)",
    heatOutput: null,
    voltage: "400V AC output",
    price: 1890,
    currency: "EUR",
    availability: "onRequest",
  },
  {
    slug: "mppt-controller-pro",
    category: "solar-power",
    brand: "Victron",
    model: "MPPT Pro 150/70",
    hashrate: null,
    powerConsumption: "Self-consumption <20W",
    heatOutput: null,
    voltage: "48V DC",
    price: 490,
    currency: "EUR",
    availability: "onRequest",
  },
  {
    slug: "energymind-monitor-pro",
    category: "monitoring-devices",
    brand: "EnergieMIND",
    model: "Monitor Pro",
    hashrate: null,
    powerConsumption: "5W",
    heatOutput: null,
    voltage: "100–240V AC",
    price: 349,
    currency: "EUR",
    availability: "onRequest",
  },
  {
    slug: "smart-plug-energy",
    category: "monitoring-devices",
    brand: "Shelly",
    model: "Plug S Energy (6-Pack)",
    hashrate: null,
    powerConsumption: "<1W per unit",
    heatOutput: null,
    voltage: "220–240V",
    price: 129,
    currency: "EUR",
    availability: "onRequest",
  },
  {
    slug: "immersion-cool-kit",
    category: "cooling-systems",
    brand: "HeatSink Labs",
    model: "Immersion Kit 8U",
    hashrate: null,
    powerConsumption: "Pump: 200W",
    heatOutput: "Liquid loop",
    voltage: "220V",
    price: 7490,
    currency: "EUR",
    availability: "customQuote",
  },
  {
    slug: "duct-heat-exchanger",
    category: "cooling-systems",
    brand: "ThermalBridge",
    model: "HX-500",
    hashrate: null,
    powerConsumption: "Fan: 80W",
    heatOutput: "Up to 5kW recovered",
    voltage: "220V",
    price: 1190,
    currency: "EUR",
    availability: "onRequest",
  },
  {
    slug: "psu-3600w-platinum",
    category: "accessories",
    brand: "Delta",
    model: "DPS-3600AB",
    hashrate: null,
    powerConsumption: "3600W max output",
    heatOutput: null,
    voltage: "200–240V input",
    price: 290,
    currency: "EUR",
    availability: "onRequest",
  },
  {
    slug: "cable-kit-industrial",
    category: "accessories",
    brand: "EnergieMIND",
    model: "Industrial Kit A",
    hashrate: null,
    powerConsumption: "N/A",
    heatOutput: null,
    voltage: "Up to 600V rated",
    price: 149,
    currency: "EUR",
    availability: "onRequest",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
