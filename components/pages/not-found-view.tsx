"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

export function NotFoundView() {
  const { t } = useLanguage();

  return (
    <div className="page-shell py-20 text-center lg:py-28">
      <h1 className="super-heading text-ink-black">{t("notfound.title")}</h1>
      <p className="mx-auto mt-5 max-w-lg text-body-lg font-medium text-slate-600">
        {t("notfound.body")}
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/book" className="btn btn-primary">
          {t("book.contents")}
        </Link>
        <Link href="/" className="btn btn-secondary">
          {t("common.backHome")}
        </Link>
      </div>
    </div>
  );
}
