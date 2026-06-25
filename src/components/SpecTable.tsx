import type { Dictionary } from "@/i18n/types";
import type { Product } from "@/data/products";
import Link from "next/link";

interface SpecTableProps {
  dict: Dictionary;
  product: Product;
}

export function SpecTable({ dict, product }: SpecTableProps) {
  const translation = dict.products[product.slug];
  const rows = [
    { label: dict.productLabels.brand, value: product.brand },
    { label: dict.productLabels.model, value: product.model },
    {
      label: dict.productLabels.hashrate,
      value: product.hashrate ?? dict.productLabels.notApplicable,
    },
    { label: dict.productLabels.powerConsumption, value: product.powerConsumption },
    {
      label: dict.productLabels.heatOutput,
      value: product.heatOutput ?? dict.productLabels.notApplicable,
    },
    { label: dict.productLabels.voltage, value: product.voltage },
    { label: dict.productLabels.useCase, value: translation?.useCase ?? "" },
    { label: dict.productLabels.warranty, value: translation?.warranty ?? "" },
    { label: dict.productLabels.shipping, value: translation?.shipping ?? "" },
    { label: dict.productLabels.installation, value: translation?.installation ?? "" },
    {
      label: dict.productLabels.availability,
      value: dict.availability[product.availability],
    },
    {
      label: dict.productLabels.price,
      value: `${product.price.toLocaleString()} ${product.currency}`,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-steel-200 rounded-lg overflow-hidden">
        <caption className="sr-only">{dict.productLabels.specifications}</caption>
        <thead>
          <tr className="bg-steel-50">
            <th
              scope="col"
              className="px-4 py-3 text-left font-semibold text-steel-900 border-b border-steel-200"
            >
              {dict.productLabels.specifications}
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left font-semibold text-steel-900 border-b border-steel-200 w-2/3"
            />
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-steel-50/50"}>
              <td className="px-4 py-3 font-medium text-steel-700 border-b border-steel-100 whitespace-nowrap">
                {row.label}
              </td>
              <td className="px-4 py-3 text-steel-600 border-b border-steel-100">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface ProductActionsProps {
  locale: string;
  dict: Dictionary;
  product: Product;
}

export function ProductActions({ locale, dict, product }: ProductActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Link
        href={`/${locale}/quote?product=${product.slug}`}
        className="flex-1 text-center px-6 py-3 text-base font-medium text-white bg-energy-600 hover:bg-energy-700 rounded-lg transition-colors"
      >
        {dict.productLabels.requestQuote}
      </Link>
      <Link
        href={`/${locale}/contact`}
        className="flex-1 text-center px-6 py-3 text-base font-medium text-energy-700 bg-energy-50 hover:bg-energy-100 border border-energy-200 rounded-lg transition-colors"
      >
        {dict.nav.contact}
      </Link>
    </div>
  );
}
