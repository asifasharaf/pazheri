"use client";

import { useLanguage } from "./language-provider";

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  const { t } = useLanguage();
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className={[
          "grid h-8 w-8 place-items-center rounded-[9px]",
          inverted ? "bg-white" : "bg-ink-black",
        ].join(" ")}
      >
        {/* One root, branching. */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke={inverted ? "#1c1d1f" : "#ffffff"}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M8 13.2V6.6" />
          <path d="M8 9.4C8 7 6.8 5.7 4.8 5.2" />
          <path d="M8 7.6c0-2.2 1.3-3.5 3.2-4" />
          <circle cx="8" cy="13.6" r="0.85" fill={inverted ? "#1c1d1f" : "#ffffff"} stroke="none" />
          <circle cx="4" cy="5" r="0.85" fill={inverted ? "#1c1d1f" : "#ffffff"} stroke="none" />
          <circle cx="11.9" cy="3.4" r="0.85" fill={inverted ? "#1c1d1f" : "#ffffff"} stroke="none" />
          <circle cx="8" cy="5.9" r="0.85" fill={inverted ? "#1c1d1f" : "#ffffff"} stroke="none" />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={[
            "display-voice block text-[17px] tracking-[-0.34px]",
            inverted ? "text-white" : "text-ink-black",
          ].join(" ")}
        >
          {t("brand.name")}
        </span>
        <span
          className={[
            "block text-[11px] font-medium tracking-[-0.11px]",
            inverted ? "text-mist-300" : "text-slate-600",
          ].join(" ")}
        >
          {t("brand.tagline")}
        </span>
      </span>
    </span>
  );
}
