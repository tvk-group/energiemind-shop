"use client";

import type { Dictionary } from "@/i18n/types";
import { useState } from "react";

interface ContactFormProps {
  dict: Dictionary;
}

export function ContactForm({ dict }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-energy-50 border border-energy-200 rounded-lg p-6 text-center">
        <p className="text-energy-800 font-medium">{dict.pages.contact.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-steel-700 mb-1">
          {dict.pages.contact.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 border border-steel-200 rounded-lg focus:ring-2 focus:ring-energy-500 focus:border-energy-500 outline-none transition-shadow"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-steel-700 mb-1">
          {dict.pages.contact.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 border border-steel-200 rounded-lg focus:ring-2 focus:ring-energy-500 focus:border-energy-500 outline-none transition-shadow"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-steel-700 mb-1">
          {dict.pages.contact.company}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-2.5 border border-steel-200 rounded-lg focus:ring-2 focus:ring-energy-500 focus:border-energy-500 outline-none transition-shadow"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-steel-700 mb-1">
          {dict.pages.contact.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 border border-steel-200 rounded-lg focus:ring-2 focus:ring-energy-500 focus:border-energy-500 outline-none transition-shadow resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-energy-600 hover:bg-energy-700 rounded-lg transition-colors"
      >
        {dict.pages.contact.submit}
      </button>
    </form>
  );
}
