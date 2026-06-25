import type { Dictionary } from "@/i18n/types";

interface FaqSectionProps {
  dict: Dictionary;
}

export function FaqSection({ dict }: FaqSectionProps) {
  return (
    <section className="py-16 bg-steel-50" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="text-2xl font-bold text-steel-900 text-center">
          {dict.faq.title}
        </h2>
        <dl className="mt-10 space-y-6">
          {dict.faq.items.map((item, i) => (
            <div key={i} className="bg-white border border-steel-200 rounded-lg p-6">
              <dt className="font-semibold text-steel-900">{item.question}</dt>
              <dd className="mt-2 text-steel-600 text-sm leading-relaxed">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
