"use client";

import { useLanguage } from "@/components/language-provider";
import { formatDate } from "./announcements-view";
import type { FamilyEvent } from "@/lib/store";

function EventList({ events }: { events: FamilyEvent[] }) {
  const { t, b, locale } = useLanguage();
  return (
    <ul className="mt-6 grid gap-4">
      {events.map((event) => (
        <li key={event.id} className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
          <span className="w-full shrink-0 text-[13px] font-medium text-slate-700 sm:w-40">
            {formatDate(event.date, locale)}
          </span>
          <span className="min-w-0">
            <span className="display-voice block text-subheading text-ink-black">
              {b(event.title)}
            </span>
            <span className="mt-1 block text-[13px] font-medium text-slate-600">
              {t("events.venue")}: {b(event.venue)}
            </span>
            <span className="mt-3 block text-[15px] font-medium text-slate-600">
              {b(event.detail)}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function EventsView({
  upcoming,
  past,
}: {
  upcoming: FamilyEvent[];
  past: FamilyEvent[];
}) {
  const { t, b } = useLanguage();

  return (
    <div className="page-shell py-16 lg:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">{t("section.manage.eyebrow")}</span>
        <h1 className="display-voice mt-6 text-heading text-ink-black lg:text-heading-lg">
          {t("events.title")}
        </h1>
        <p className="mt-4 text-body-lg font-medium text-slate-600">
          {t("card.events.body")}
        </p>
      </div>

      <section className="mt-14">
        <h2 className="display-voice text-subheading text-ink-black">
          {t("events.upcoming")}
        </h2>
        {upcoming.length === 0 ? (
          <p className="mt-4 text-[15px] font-medium text-slate-600">
            {b({ en: "Nothing scheduled yet.", ml: "ഇപ്പോൾ പരിപാടികളൊന്നുമില്ല." })}
          </p>
        ) : (
          <EventList events={upcoming} />
        )}
      </section>

      <section className="mt-16">
        <h2 className="display-voice text-subheading text-ink-black">
          {t("events.past")}
        </h2>
        <EventList events={past} />
      </section>
    </div>
  );
}
