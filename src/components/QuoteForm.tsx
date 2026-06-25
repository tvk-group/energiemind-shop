"use client";

import type { Dictionary } from "@/i18n/types";
import { products } from "@/data/products";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

interface QuoteFormProps {
  dict: Dictionary;
}

function QuoteFormInner({ dict }: QuoteFormProps) {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("product") ?? "";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-energy-50 border border-energy-200 rounded-lg p-6 text-center">
        <p className="text-energy-800 font-medium">{dict.pages.quote.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="quote-name" className="block text-sm font-medium text-steel-700 mb-1">
          {dict.pages.contact.name}
        </label>
        <input
          type="text"
          id="quote-name"
          name="name"
          required
          className="w-full px-4 py-2.5 border border-steel-200 rounded-lg focus:ring-2 focus:ring-energy-500 focus:border-energy-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="quote-email" className="block text-sm font-medium text-steel-700 mb-1">
          {dict.pages.contact.email}
        </label>
        <input
          type="email"
          id="quote-email"
          name="email"
          required
          className="w-full px-4 py-2.5 border border-steel-200 rounded-lg focus:ring-2 focus:ring-energy-500 focus:border-energy-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="product" className="block text-sm font-medium text-steel-700 mb-1">
          {dict.pages.quote.product}
        </label>
        <select
          id="product"
          name="product"
          defaultValue={preselected}
          className="w-full px-4 py-2.5 border border-steel-200 rounded-lg focus:ring-2 focus:ring-energy-500 focus:border-energy-500 outline-none bg-white"
        >
          <option value="">{dict.pages.quote.product}</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {dict.products[p.slug]?.name ?? p.model}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-steel-700 mb-1">
          {dict.pages.quote.quantity}
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min={1}
          defaultValue={1}
          className="w-full px-4 py-2.5 border border-steel-200 rounded-lg focus:ring-2 focus:ring-energy-500 focus:border-energy-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="setupType" className="block text-sm font-medium text-steel-700 mb-1">
          {dict.pages.quote.setupType}
        </label>
        <select
          id="setupType"
          name="setupType"
          className="w-full px-4 py-2.5 border border-steel-200 rounded-lg focus:ring-2 focus:ring-energy-500 focus:border-energy-500 outline-none bg-white"
        >
          <option value="residential">{dict.pages.quote.setupResidential}</option>
          <option value="commercial">{dict.pages.quote.setupCommercial}</option>
          <option value="custom">{dict.pages.quote.setupCustom}</option>
        </select>
      </div>
      <div>
        <label htmlFor="quote-message" className="block text-sm font-medium text-steel-700 mb-1">
          {dict.pages.contact.message}
        </label>
        <textarea
          id="quote-message"
          name="message"
          rows={4}
          className="w-full px-4 py-2.5 border border-steel-200 rounded-lg focus:ring-2 focus:ring-energy-500 focus:border-energy-500 outline-none resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-energy-600 hover:bg-energy-700 rounded-lg transition-colors"
      >
        {dict.pages.quote.submit}
      </button>
    </form>
  );
}

export function QuoteForm({ dict }: QuoteFormProps) {
  return (
    <Suspense fallback={<div className="h-96 bg-steel-50 rounded-lg animate-pulse" />}>
      <QuoteFormInner dict={dict} />
    </Suspense>
  );
}
