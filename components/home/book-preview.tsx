"use client";

import { useLanguage } from "@/components/language-provider";
import { bookMeta, chapters } from "@/lib/content/book";

/**
 * A rendering of the book's title page, treated as the "product screenshot"
 * of the system: white card, 14px radius, drifting shadow, no padding of its
 * own — the page fills the card.
 */
export function BookPreview() {
  const { b } = useLanguage();

  return (
    <div className="card-screenshot mx-auto w-full max-w-3xl">
      <div className="border-b border-mist-50 bg-paper px-6 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-cloud-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-cloud-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-cloud-200" />
          <span className="ml-3 truncate text-[12px] font-medium text-slate-600">
            {b(bookMeta.title)} · {b(bookMeta.firstPublished)}
          </span>
        </div>
      </div>

      <div className="grid gap-0 sm:grid-cols-[1.1fr_1fr]">
        <div className="border-b border-mist-50 px-8 py-10 sm:border-b-0 sm:border-r">
          <p className="text-[11px] font-medium tracking-[0.06em] text-slate-700 uppercase">
            {b({ en: "Title page", ml: "ശീർഷക താൾ" })}
          </p>
          <h3 className="display-voice mt-5 text-[32px] leading-[1.1] tracking-[-0.32px] text-ink-black">
            {b(bookMeta.title)}
          </h3>
          <p className="mt-4 text-[15px] font-medium text-carbon">
            {b(bookMeta.author)}
          </p>
          <p className="mt-1 text-[13px] font-medium text-slate-600">
            {b(bookMeta.authorAddress)}
          </p>
          <dl className="mt-8 space-y-2.5">
            {bookMeta.colophon.map((row) => (
              <div key={row.label.en} className="flex gap-3 text-[13px]">
                <dt className="w-28 shrink-0 font-medium text-slate-700">
                  {b(row.label)}
                </dt>
                <dd className="font-medium text-carbon">{b(row.value)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="divide-y divide-mist-50">
          {chapters.map((chapter) => (
            <li
              key={chapter.slug}
              className="flex items-baseline gap-3 px-6 py-[13px]"
            >
              <span className="w-5 shrink-0 text-[12px] font-medium text-fog-400">
                {chapter.index}
              </span>
              <span className="min-w-0 truncate text-[14px] font-medium text-carbon">
                {b(chapter.title)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
