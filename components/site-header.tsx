"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "./language-provider";
import { LanguageSwitcher } from "./language-switcher";
import { PromoBanner } from "./promo-banner";
import { Wordmark } from "./wordmark";
import type { UiKey } from "@/lib/i18n";

const navItems: { href: string; key: UiKey }[] = [
  { href: "/book", key: "nav.book" },
  { href: "/family-tree", key: "nav.tree" },
  { href: "/announcements", key: "nav.announcements" },
  { href: "/society", key: "nav.society" },
];

export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-page-canvas/90 backdrop-blur-sm">
      <PromoBanner />
      <div className="border-b border-mist-50">
        <div className="page-shell flex h-[68px] items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-[10px] px-3 py-2 text-[15px] font-medium transition-colors",
                    active
                      ? "text-ink-black"
                      : "text-slate-600 hover:text-ink-black hover:bg-paper",
                  ].join(" ")}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <Link href="/register" className="btn btn-primary hidden sm:inline-flex">
              {t("nav.register")}
            </Link>
            <button
              type="button"
              className="btn btn-secondary md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? t("nav.close") : t("nav.menu")}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-b border-mist-50 bg-page-canvas md:hidden">
          <div className="page-shell flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-[10px] px-3 py-2.5 text-[15px] font-medium text-carbon hover:bg-paper"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-2"
            >
              {t("nav.register")}
            </Link>
            <div className="mt-3 sm:hidden">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
