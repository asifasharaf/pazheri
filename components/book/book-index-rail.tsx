"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { chapters, type BookChapter } from "@/lib/content/book";

type Props = {
  /** The chapter being read, so its own headings can be listed. */
  current: BookChapter;
};

type Heading = { id: string; label: string };

/**
 * A Notion-style index. On desktop it lives in the left margin as a set of
 * tick marks that expand into a full contents list on hover or keyboard
 * focus. Hover is a pointer affordance, so below `lg` the same index is a
 * tap-to-open sheet instead — never a hidden rail.
 */
export function BookIndexRail({ current }: Props) {
  const { t, b } = useLanguage();
  const [open, setOpen] = useState(false);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  // Section headings are rendered by the chapter body, so read them from the
  // DOM rather than duplicating the block list here.
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLHeadingElement>("[data-chapter-heading]"),
    );
    setHeadings(
      nodes.map((node) => ({ id: node.id, label: node.textContent ?? "" })),
    );

    if (nodes.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveHeading(visible.target.id);
      },
      { rootMargin: "-120px 0px -70% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [current.slug]);

  // Close the mobile sheet on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const contents = (
    <>
      <p className="px-3 text-[11px] font-medium tracking-[0.06em] text-slate-700 uppercase">
        {t("book.index")}
      </p>
      <ul className="mt-2">
        {chapters.map((chapter) => {
          const active = chapter.slug === current.slug;
          return (
            <li key={chapter.slug}>
              <Link
                href={`/book/${chapter.slug}`}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={[
                  "block rounded-[8px] px-3 py-[7px] text-[13px] font-medium transition-colors",
                  active
                    ? "bg-paper text-ink-black"
                    : "text-slate-600 hover:bg-paper hover:text-ink-black",
                ].join(" ")}
              >
                {b(chapter.title)}
              </Link>

              {active && headings.length > 0 ? (
                <ul className="mt-0.5 mb-1 ml-3 border-l border-mist-50 pl-2">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        onClick={() => setOpen(false)}
                        className={[
                          "block rounded-[8px] px-2 py-1.5 text-[12px] font-medium transition-colors",
                          activeHeading === heading.id
                            ? "text-cobalt-core"
                            : "text-slate-700 hover:text-ink-black",
                        ].join(" ")}
                      >
                        {heading.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </>
  );

  return (
    <>
      {/* Desktop: tick marks in the margin that bloom into the contents. */}
      <div className="pointer-events-none fixed top-[104px] left-4 z-30 hidden lg:block xl:left-8">
        <div className="group pointer-events-auto">
          <ul
            aria-hidden
            className="space-y-1.5 py-2 transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0"
          >
            {chapters.map((chapter) => (
              <li
                key={chapter.slug}
                className={[
                  "h-[2px] rounded-full transition-all duration-200",
                  chapter.slug === current.slug
                    ? "w-8 bg-ink-black"
                    : "w-5 bg-cloud-200",
                ].join(" ")}
              />
            ))}
          </ul>

          <nav
            aria-label={t("book.index")}
            className="absolute top-0 left-0 w-64 origin-left -translate-x-1 scale-[0.98] rounded-[12px] border border-mist-50 bg-page-canvas p-2 opacity-0 shadow-[rgba(28,40,64,0.06)_0px_2px_6px_0px,rgba(28,40,64,0.08)_0px_6px_20px_-2px] transition-all duration-200 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:scale-100 group-focus-within:opacity-100"
          >
            {contents}
          </nav>
        </div>
      </div>

      {/* Mobile and tablet: the same index behind a tap. */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="btn btn-secondary fixed right-4 bottom-4 z-30 h-12 shadow-[rgba(28,40,64,0.08)_0px_6px_20px_-2px] lg:hidden"
      >
        ☰ {t("book.openIndex")}
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label={t("book.closeIndex")}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-obsidian/30"
          />
          <nav
            aria-label={t("book.index")}
            className="absolute inset-x-0 bottom-0 max-h-[75vh] overflow-y-auto rounded-t-[14px] border-t border-mist-50 bg-page-canvas p-4 pb-8"
          >
            {contents}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="btn btn-secondary mt-4 w-full"
            >
              {t("book.closeIndex")}
            </button>
          </nav>
        </div>
      ) : null}
    </>
  );
}
