"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { bookMeta, chapters } from "@/lib/content/book";

export function BookContents() {
  const { t, b } = useLanguage();

  return (
    <div className="page-shell py-16 lg:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">{b(bookMeta.firstPublished)}</span>
        <h1 className="display-voice mt-6 text-heading text-ink-black lg:text-heading-lg">
          {b(bookMeta.title)}
        </h1>
        <p className="mt-4 text-body-lg font-medium text-slate-600">
          {b(bookMeta.author)} · {b(bookMeta.authorAddress)}
        </p>
        <p className="mt-6 rounded-[12px] border border-mist-50 bg-paper p-4 text-[14px] font-medium text-slate-600">
          {t("book.readingNote")}
        </p>
      </div>

      <h2 className="display-voice mt-16 text-subheading text-ink-black">
        {t("book.contents")}
      </h2>

      <ol className="mt-6 grid gap-4 lg:grid-cols-2">
        {chapters.map((chapter) => (
          <li key={chapter.slug}>
            <Link href={`/book/${chapter.slug}`} className="card block h-full p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-[12px] font-medium text-fog-400">
                  {t("book.chapter")} {chapter.index}
                </span>
              </div>
              <h3 className="display-voice mt-2 text-subheading text-ink-black">
                {b(chapter.title)}
              </h3>
              {chapter.byline ? (
                <p className="mt-1.5 text-[13px] font-medium text-slate-700">
                  {b(chapter.byline)}
                </p>
              ) : null}
              <p className="mt-3 text-[15px] font-medium text-slate-600">
                {b(chapter.summary)}
              </p>
            </Link>
          </li>
        ))}
      </ol>

      <div className="mt-16 card p-6 lg:p-8">
        <h2 className="display-voice text-subheading text-ink-black">
          {b({ en: "Publication details", ml: "പ്രസിദ്ധീകരണ വിവരങ്ങൾ" })}
        </h2>
        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-[13px] font-medium text-slate-700">
              {b({ en: "Published by", ml: "പ്രസിദ്ധീകരണം" })}
            </dt>
            <dd className="mt-1 text-[15px] font-medium text-carbon">
              {b(bookMeta.publisher)}
            </dd>
          </div>
          {bookMeta.colophon.map((row) => (
            <div key={row.label.en}>
              <dt className="text-[13px] font-medium text-slate-700">
                {b(row.label)}
              </dt>
              <dd className="mt-1 text-[15px] font-medium text-carbon">
                {b(row.value)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
