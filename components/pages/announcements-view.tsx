"use client";

import { useLanguage } from "@/components/language-provider";
import type { Announcement } from "@/lib/content/desk";

export function formatDate(iso: string, locale: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(
    locale === "ml" ? "ml-IN" : "en-IN",
    { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
  );
}

export function AnnouncementsView({
  announcements,
}: {
  announcements: Announcement[];
}) {
  const { t, b, locale } = useLanguage();

  return (
    <div className="page-shell py-16 lg:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">{t("section.manage.eyebrow")}</span>
        <h1 className="display-voice mt-6 text-heading text-ink-black lg:text-heading-lg">
          {t("announcements.title")}
        </h1>
        <p className="mt-4 text-body-lg font-medium text-slate-600">
          {t("announcements.subtitle")}
        </p>
      </div>

      {announcements.length === 0 ? (
        <p className="mt-12 text-body-lg font-medium text-slate-600">
          {t("announcements.empty")}
        </p>
      ) : (
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {announcements.map((item) => (
            <li key={item.id} className="card p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="eyebrow py-1">{b(item.category)}</span>
                {item.pinned ? (
                  <span className="badge-new">{t("announcements.pinned")}</span>
                ) : null}
                <span className="text-[12px] font-medium text-slate-700">
                  {formatDate(item.date, locale)}
                </span>
              </div>
              <h2 className="display-voice mt-4 text-subheading text-ink-black">
                {b(item.title)}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] font-medium text-slate-600">
                {b(item.body)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
