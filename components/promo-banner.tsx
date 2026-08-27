"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";

const DISMISS_KEY = "pazheri.banner.dismissed";

export function PromoBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(DISMISS_KEY) === "1") setVisible(false);
    } catch {
      /* storage unavailable — keep the banner */
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="bg-onyx-footer text-white">
      <div className="page-shell flex h-12 items-center justify-center gap-4">
        <Link
          href="/register"
          className="flex items-center gap-2 text-[14px] font-medium text-white hover:opacity-80"
        >
          <span className="badge-new">{t("banner.cta")}</span>
          <span className="truncate">{t("banner.text")}</span>
          <span aria-hidden>→</span>
        </Link>
        <button
          type="button"
          aria-label={t("banner.dismiss")}
          onClick={() => {
            setVisible(false);
            try {
              window.localStorage.setItem(DISMISS_KEY, "1");
            } catch {
              /* ignore */
            }
          }}
          className="ml-auto shrink-0 text-[18px] leading-none text-mist-300 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
}
