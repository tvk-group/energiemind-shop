import type { Dictionary } from "@/i18n/types";

interface SafetyDisclaimerProps {
  dict: Dictionary;
  variant?: "full" | "compact";
}

export function SafetyDisclaimer({ dict, variant = "full" }: SafetyDisclaimerProps) {
  if (variant === "compact") {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">
        <p className="font-medium">{dict.safety.title}</p>
        <p className="mt-1 text-amber-800">{dict.safety.items[0]}</p>
      </div>
    );
  }

  return (
    <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 lg:p-8" aria-labelledby="safety-notice">
      <h2 id="safety-notice" className="text-lg font-semibold text-amber-900">
        {dict.safety.title}
      </h2>
      <ul className="mt-4 space-y-2">
        {dict.safety.items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-amber-800">
            <span className="text-amber-500 shrink-0" aria-hidden>⚠</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-amber-700 border-t border-amber-200 pt-4">
        {dict.safety.footer}
      </p>
    </section>
  );
}
