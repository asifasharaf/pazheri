"use client";

import Link from "next/link";
import { useLanguage } from "./language-provider";
import { LanguageSwitcher } from "./language-switcher";
import { Wordmark } from "./wordmark";
import { bookMeta } from "@/lib/content/book";
import { society } from "@/lib/content/society";
import type { Bi } from "@/lib/i18n";

type Column = { title: Bi; links: { href: string; label: Bi }[] };

const columns: Column[] = [
  {
    title: { en: "The book", ml: "ഗ്രന്ഥം" },
    links: [
      { href: "/book", label: { en: "Contents", ml: "ഉള്ളടക്കം" } },
      { href: "/book/preface", label: { en: "Preface", ml: "ആമുഖം" } },
      { href: "/book/foreword", label: { en: "Foreword", ml: "അവതാരിക" } },
      {
        href: "/book/historical-background",
        label: { en: "Historical background", ml: "ചരിത്ര പശ്ചാത്തലം" },
      },
    ],
  },
  {
    title: { en: "Family", ml: "കുടുംബം" },
    links: [
      { href: "/family-tree", label: { en: "Family tree", ml: "വംശാവലി" } },
      { href: "/register", label: { en: "Registration", ml: "രജിസ്ട്രേഷൻ" } },
      { href: "/events", label: { en: "Assemblies", ml: "കുടുംബ യോഗങ്ങൾ" } },
    ],
  },
  {
    title: { en: "Society", ml: "സൊസൈറ്റി" },
    links: [
      { href: "/society", label: { en: "About the society", ml: "സൊസൈറ്റിയെക്കുറിച്ച്" } },
      { href: "/announcements", label: { en: "Announcements", ml: "അറിയിപ്പുകൾ" } },
    ],
  },
];

export function SiteFooter() {
  const { b, t } = useLanguage();

  return (
    <footer className="bg-onyx-footer text-white">
      <div className="page-shell py-20 lg:py-[100px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Wordmark inverted />
            <p className="mt-5 max-w-sm text-[15px] font-medium text-mist-300">
              {b(society.name)}
            </p>
            <p className="mt-2 text-[13px] font-medium text-slate-700">
              {t("society.registration")} {society.registrationNo}
            </p>
            <div className="mt-6">
              <LanguageSwitcher variant="full" />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title.en}>
                <h3 className="text-[15px] font-medium text-mist-300">
                  {b(column.title)}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href + link.label.en}>
                      <Link
                        href={link.href}
                        className="text-[14px] font-medium text-white hover:text-mist-300"
                      >
                        {b(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-carbon pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-[13px] font-medium text-slate-700">
            {t("footer.rights")}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium text-mist-300">
            <a href={`tel:${bookMeta.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
              {bookMeta.contact.phone}
            </a>
            <a href={`mailto:${bookMeta.contact.email}`} className="hover:text-white">
              {bookMeta.contact.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
