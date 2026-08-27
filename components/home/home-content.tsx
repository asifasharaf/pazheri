"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SectionHead } from "@/components/ui/section";
import { BookPreview } from "./book-preview";
import { NameSearch } from "./name-search";
import { branches, treeStats } from "@/lib/content/tree";
import type { Announcement, FamilyEvent } from "@/lib/content/desk";
import type { Bi } from "@/lib/i18n";

const deskCards: {
  href: string;
  titleKey: "card.register.title" | "card.announcements.title" | "card.events.title" | "card.society.title";
  bodyKey: "card.register.body" | "card.announcements.body" | "card.events.body" | "card.society.body";
}[] = [
  { href: "/register", titleKey: "card.register.title", bodyKey: "card.register.body" },
  { href: "/announcements", titleKey: "card.announcements.title", bodyKey: "card.announcements.body" },
  { href: "/events", titleKey: "card.events.title", bodyKey: "card.events.body" },
  { href: "/society", titleKey: "card.society.title", bodyKey: "card.society.body" },
];

const places: Bi[] = [
  { en: "Thodupuzha", ml: "തൊടുപുഴ" },
  { en: "Kondotty", ml: "കൊണ്ടോട്ടി" },
  { en: "Vallikkunnu", ml: "വള്ളിക്കുന്ന്" },
  { en: "Kizhisseri", ml: "കിഴിശ്ശേരി" },
  { en: "Tirurangadi", ml: "തിരൂരങ്ങാടി" },
  { en: "Peruvalloor", ml: "പെരുവള്ളൂർ" },
  { en: "Vannappuram", ml: "വണ്ണപ്പുറം" },
];

function formatDate(iso: string, locale: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(
    locale === "ml" ? "ml-IN" : "en-IN",
    { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
  );
}

export function HomeContent({
  announcements,
  upcoming,
}: {
  announcements: Announcement[];
  upcoming: FamilyEvent[];
}) {
  const { t, b, locale } = useLanguage();

  const stats: { value: string; label: string }[] = [
    { value: String(treeStats.generations), label: t("stats.generations") },
    { value: String(treeStats.branches), label: t("stats.branches") },
    { value: String(treeStats.names), label: t("stats.names") },
    { value: "900+", label: t("stats.years") },
  ];

  return (
    <>
      {/* Hero ---------------------------------------------------------- */}
      <section className="page-shell pt-16 pb-20 lg:pt-24 lg:pb-[100px]">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t("hero.eyebrow")}</span>
          <h1 className="display-voice mt-6 text-heading text-ink-black sm:text-heading-lg lg:text-display">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg font-medium text-slate-600">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="btn btn-primary">
              {t("hero.primary")}
            </Link>
            <Link href="/register" className="btn btn-secondary">
              {t("hero.secondary")}
            </Link>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <span className="text-[12px] font-medium text-slate-700">
              {t("lang.switch")}
            </span>
            <LanguageSwitcher variant="full" />
          </div>

          <div className="mt-12">
            <NameSearch />
          </div>
        </div>
      </section>

      {/* Place strip — the system's logo strip, in place names ---------- */}
      <section className="border-y border-mist-50 bg-page-canvas">
        <div className="page-shell py-16">
          <p className="text-center text-[12px] font-medium tracking-[0.06em] text-slate-700 uppercase">
            {b({
              en: "Branches of the family live at",
              ml: "കുടുംബ ശാഖകൾ വേരൂന്നിയ ദേശങ്ങൾ",
            })}
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {places.map((place) => (
              <li
                key={place.en}
                className="display-voice text-[19px] tracking-[-0.017em] text-ink-black"
              >
                {b(place)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats --------------------------------------------------------- */}
      <section className="page-shell section">
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-flat p-6">
              <dt className="display-voice text-heading-sm text-ink-black">
                {stat.value}
              </dt>
              <dd className="mt-2 text-[14px] font-medium text-slate-600">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* The book ------------------------------------------------------ */}
      <section className="border-y border-mist-50 bg-paper">
        <div className="page-shell section">
          <SectionHead
            align="center"
            eyebrow={t("section.book.eyebrow")}
            title={t("section.book.title")}
            body={t("section.book.body")}
          />
          <div className="mt-10 flex justify-center">
            <Link href="/book" className="btn btn-primary">
              {t("section.book.cta")}
            </Link>
          </div>
          <div className="mt-14">
            <BookPreview />
          </div>
        </div>
      </section>

      {/* Pull quote — the one serif moment in the system ---------------- */}
      <section className="page-shell section">
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="quote-voice text-[28px] leading-[1.23] text-ink-black lg:text-[40px] lg:leading-[1.1]">
            {b({
              en: "“Learn about the lineages you need in order to keep your family ties, for the joining of kinship is a cause of love enduring in the family.”",
              ml: "“നിങ്ങളുടെ കുടുംബ ബന്ധം നിലനിർത്തുന്നതിന് ആവശ്യമായ കുടുംബ പരമ്പരകളെ കുറിച്ച് നിങ്ങൾ പഠിക്കുക. കാരണം കുടുംബ ബന്ധം ചേർക്കൽ കുടുംബത്തിൽ സ്നേഹം നിലനിൽക്കുന്നതിന് കാരണമാണ്.”",
            })}
          </blockquote>
          <figcaption className="mt-6 text-[14px] font-medium text-slate-600">
            {b({ en: "Tirmidhi", ml: "തിർമുദി" })}
          </figcaption>
        </figure>
      </section>

      {/* Family tree --------------------------------------------------- */}
      <section className="border-y border-mist-50 bg-paper">
        <div className="page-shell section">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHead
                eyebrow={t("section.tree.eyebrow")}
                title={t("section.tree.title")}
                body={t("section.tree.body")}
              />
              <Link href="/family-tree" className="btn btn-primary mt-8">
                {t("section.tree.cta")}
              </Link>
            </div>

            <ul className="card divide-y divide-mist-50 overflow-hidden">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <Link
                    href={`/family-tree?branch=${branch.id}`}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-paper"
                  >
                    <span className="eyebrow shrink-0 py-1">{branch.code}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[15px] font-medium text-ink-black">
                        {b(branch.name)}
                      </span>
                      {branch.place ? (
                        <span className="block truncate text-[13px] font-medium text-slate-600">
                          {b(branch.place)}
                        </span>
                      ) : null}
                    </span>
                    <span aria-hidden className="text-slate-700">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Family desk --------------------------------------------------- */}
      <section className="page-shell section">
        <SectionHead
          eyebrow={t("section.manage.eyebrow")}
          title={t("section.manage.title")}
          body={t("section.manage.body")}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deskCards.map((card) => (
            <Link key={card.href} href={card.href} className="card group p-6">
              <h3 className="display-voice text-subheading text-ink-black">
                {t(card.titleKey)}
              </h3>
              <p className="mt-3 text-[15px] font-medium text-slate-600">
                {t(card.bodyKey)}
              </p>
              <span className="link-accent mt-5 inline-flex items-center gap-1.5 text-[14px] font-medium">
                {t("card.open")}
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="display-voice text-subheading text-ink-black">
                {t("announcements.title")}
              </h3>
              <Link href="/announcements" className="link-accent text-[14px]">
                {t("common.readMore")}
              </Link>
            </div>
            <ul className="mt-5 divide-y divide-mist-50">
              {announcements.map((item) => (
                <li key={item.id} className="py-3.5 first:pt-0 last:pb-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="eyebrow py-1">{b(item.category)}</span>
                    {item.pinned ? (
                      <span className="badge-new">{t("announcements.pinned")}</span>
                    ) : null}
                    <span className="text-[12px] font-medium text-slate-700">
                      {formatDate(item.date, locale)}
                    </span>
                  </div>
                  <p className="mt-2 text-[15px] font-medium text-ink-black">
                    {b(item.title)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <h3 className="display-voice text-subheading text-ink-black">
                {t("events.upcoming")}
              </h3>
              <Link href="/events" className="link-accent text-[14px]">
                {t("common.readMore")}
              </Link>
            </div>
            <ul className="mt-5 divide-y divide-mist-50">
              {upcoming.length === 0 ? (
                <li className="py-3.5 text-[15px] font-medium text-slate-600">
                  {b({ en: "Nothing scheduled yet.", ml: "ഇപ്പോൾ പരിപാടികളൊന്നുമില്ല." })}
                </li>
              ) : (
                upcoming.map((event) => (
                  <li key={event.id} className="py-3.5 first:pt-0 last:pb-0">
                    <span className="text-[12px] font-medium text-slate-700">
                      {formatDate(event.date, locale)}
                    </span>
                    <p className="mt-1.5 text-[15px] font-medium text-ink-black">
                      {b(event.title)}
                    </p>
                    <p className="mt-0.5 text-[13px] font-medium text-slate-600">
                      {t("events.venue")}: {b(event.venue)}
                    </p>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
