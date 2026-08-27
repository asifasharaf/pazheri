"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import type { BookChapter } from "@/lib/content/book";

export function ChapterView({
  chapter,
  prev,
  next,
}: {
  chapter: BookChapter;
  prev?: BookChapter;
  next?: BookChapter;
}) {
  const { t, b } = useLanguage();

  return (
    <article className="page-shell py-16 lg:py-24">
      <div className="mx-auto max-w-[720px]">
        <Link href="/book" className="link-accent text-[14px]">
          ← {t("book.backToContents")}
        </Link>

        <header className="mt-8 border-b border-mist-50 pb-10">
          <span className="eyebrow">
            {t("book.chapter")} {chapter.index}
          </span>
          <h1 className="display-voice mt-5 text-heading-sm text-ink-black lg:text-heading">
            {b(chapter.title)}
          </h1>
          {chapter.byline ? (
            <p className="mt-4 text-[15px] font-medium text-carbon">
              {b(chapter.byline)}
            </p>
          ) : null}
          {chapter.dateline ? (
            <p className="mt-1 text-[13px] font-medium text-slate-600">
              {b(chapter.dateline)}
            </p>
          ) : null}
        </header>

        <div className="book-prose mt-10">
          {chapter.blocks.map((block, index) => {
            switch (block.kind) {
              case "h":
                return (
                  <h2
                    key={index}
                    className="display-voice mt-12 mb-5 text-subheading text-ink-black first:mt-0"
                  >
                    {b(block.text)}
                  </h2>
                );
              case "quote":
                return (
                  <figure key={index} className="my-10">
                    <blockquote className="quote-voice text-[28px] leading-[1.23] text-ink-black">
                      {b(block.text)}
                    </blockquote>
                    <figcaption className="mt-4 text-[14px] font-medium text-slate-600">
                      — {b(block.source)}
                    </figcaption>
                  </figure>
                );
              case "list":
                return (
                  <ul key={index} className="my-6 space-y-2.5">
                    {block.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex gap-3 text-[16px] font-medium text-carbon"
                      >
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cobalt-core" />
                        <span>{b(item)}</span>
                      </li>
                    ))}
                  </ul>
                );
              case "note":
                return (
                  <p
                    key={index}
                    className="my-8 rounded-[12px] border border-mist-50 bg-paper p-4 text-[15px] font-medium text-slate-600"
                  >
                    {b(block.text)}
                  </p>
                );
              default:
                return <p key={index}>{b(block.text)}</p>;
            }
          })}
        </div>

        <nav className="mt-16 flex flex-col gap-3 border-t border-mist-50 pt-8 sm:flex-row sm:justify-between">
          {prev ? (
            <Link href={`/book/${prev.slug}`} className="btn btn-secondary">
              ← {t("book.prev")}: {b(prev.title)}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/book/${next.slug}`} className="btn btn-secondary">
              {t("book.next")}: {b(next.title)} →
            </Link>
          ) : (
            <Link href="/family-tree" className="btn btn-primary">
              {t("section.tree.cta")} →
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
