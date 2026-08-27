"use client";

import { LOCALES, localeLabel, localeShortLabel, ui, pick } from "@/lib/i18n";
import { useLanguage } from "./language-provider";

type Props = {
  /** "compact" for the header, "full" for the homepage hero. */
  variant?: "compact" | "full";
};

export function LanguageSwitcher({ variant = "compact" }: Props) {
  const { locale, setLocale } = useLanguage();
  const compact = variant === "compact";

  return (
    <div
      role="group"
      aria-label={pick(ui["lang.aria"], locale)}
      className="inline-flex items-center gap-1 rounded-[10px] border border-mist-50 bg-page-canvas p-1"
    >
      {LOCALES.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            lang={code}
            className={[
              "rounded-[7px] px-2.5 py-1.5 text-[13px] font-medium transition-colors",
              compact ? "min-w-[38px]" : "min-w-[64px] px-3",
              active
                ? "bg-ink-black text-white"
                : "text-slate-600 hover:text-ink-black hover:bg-paper",
            ].join(" ")}
          >
            {compact ? localeShortLabel[code] : localeLabel[code]}
          </button>
        );
      })}
    </div>
  );
}
