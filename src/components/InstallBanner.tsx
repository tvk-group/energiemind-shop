"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/types";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

interface InstallBannerProps {
  dict: Dictionary;
}

export function InstallBanner({ dict }: InstallBannerProps) {
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [installed, setInstalled] = useState(false);
  const app = dict.pages.app;

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setInstalled(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (installed || dismissed || !deferred) return null;

  return (
    <div className="mb-4 p-4 rounded-xl bg-gradient-to-r from-energy-600 to-energy-700 text-white shadow-lg">
      <p className="text-sm font-medium">{app.installPrompt}</p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={async () => {
            await deferred.prompt();
            setDeferred(null);
          }}
          className="flex-1 py-2 text-sm font-semibold bg-sun-400 text-energy-900 rounded-lg"
        >
          {app.installButton}
        </button>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="px-3 py-2 text-sm bg-white/15 rounded-lg"
        >
          ×
        </button>
      </div>
    </div>
  );
}
