import type { Dictionary } from "@/i18n/types";
import type { Product } from "@/data/products";
import Link from "next/link";

interface ProductCardProps {
  locale: string;
  dict: Dictionary;
  product: Product;
}

export function ProductCard({ locale, dict, product }: ProductCardProps) {
  const translation = dict.products[product.slug];
  const availability = dict.availability[product.availability];

  return (
    <article className="group site-card border rounded-xl overflow-hidden hover:shadow-lg hover:border-energy-300 hover:shadow-energy-900/5 transition-all">
      <div className="aspect-[4/3] bg-gradient-to-br from-energy-50 via-energy-100/50 to-sun-50 flex items-center justify-center">
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-energy-100 to-sun-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-energy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-energy-700 uppercase tracking-wide">
            {dict.categories[product.category]?.title}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-steel-900 group-hover:text-energy-700 transition-colors line-clamp-2">
          {translation?.name ?? product.model}
        </h3>
        <p className="mt-1 text-sm text-steel-500">
          {product.brand} · {product.model}
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs text-steel-600">
          <span className="px-2 py-1 bg-energy-50 rounded">{product.powerConsumption}</span>
          {product.hashrate && (
            <span className="px-2 py-1 bg-energy-50 rounded">{product.hashrate}</span>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold text-energy-900">
              {product.price.toLocaleString()} {product.currency}
            </p>
            <p className="text-xs text-energy-600 font-medium">{availability}</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Link
            href={`/${locale}/products/${product.slug}`}
            className="flex-1 text-center px-3 py-2 text-sm font-medium text-steel-700 bg-energy-50 hover:bg-energy-100 rounded-md transition-colors"
          >
            {dict.common.learnMore}
          </Link>
          <Link
            href={`/${locale}/quote?product=${product.slug}`}
            className="flex-1 text-center px-3 py-2 text-sm font-medium text-white bg-energy-600 hover:bg-energy-700 rounded-md transition-colors"
          >
            {dict.productLabels.requestQuote}
          </Link>
        </div>
      </div>
    </article>
  );
}
