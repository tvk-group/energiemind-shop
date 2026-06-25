"use client";

import type { Locale } from "@/i18n/config";
import { getDirection } from "@/i18n/config";
import { useEffect } from "react";

interface HtmlAttributesProps {
  locale: Locale;
}

export function HtmlAttributes({ locale }: HtmlAttributesProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = getDirection(locale);
  }, [locale]);

  return null;
}
