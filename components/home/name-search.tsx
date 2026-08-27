"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { searchNames } from "@/lib/content/tree";

export function NameSearch() {
  const { t, b } = useLanguage();
  const [query, setQuery] = useState("");
  const hits = useMemo(() => searchNames(query), [query]);
  const searching = query.trim().length >= 2;

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="flex items-center gap-2 rounded-[12px] border border-mist-50 bg-page-canvas p-2 shadow-[rgba(28,40,64,0.06)_0px_2px_6px_0px]">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t("search.placeholder")}
          aria-label={t("search.submit")}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-[15px] font-medium text-ink-black outline-none placeholder:text-fog-400"
        />
        <span
          aria-hidden
          className="grid h-7 w-7 shrink-0 place-items-center rounded-[7px] bg-cobalt-core text-[13px] text-white"
        >
          →
        </span>
      </div>

      {searching ? (
        <div className="card mt-3 overflow-hidden text-left">
          {hits.length === 0 ? (
            <p className="px-4 py-4 text-[14px] font-medium text-slate-600">
              {t("search.none")}
            </p>
          ) : (
            <ul className="divide-y divide-mist-50">
              {hits.map((hit) => (
                <li key={hit.id}>
                  <Link
                    href={`/family-tree?focus=${encodeURIComponent(hit.id)}`}
                    className="flex items-baseline justify-between gap-4 px-4 py-3 hover:bg-paper"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-[15px] font-medium text-ink-black">
                        {b(hit.name)}
                      </span>
                      <span className="block truncate text-[12px] font-medium text-slate-600">
                        {hit.path.map((p) => b(p)).join(" › ") || "—"}
                      </span>
                    </span>
                    {hit.code ? (
                      <span className="eyebrow shrink-0 py-1">{hit.code}</span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <p className="mt-3 text-[13px] font-medium text-slate-600">
          {t("search.hint")}
        </p>
      )}
    </div>
  );
}
