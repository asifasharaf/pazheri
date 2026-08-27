"use client";

import { useLanguage } from "@/components/language-provider";
import type { Person } from "@/lib/content/tree";

type Props = {
  person: Person;
  depth: number;
  expanded: Set<string>;
  toggle: (id: string) => void;
  focusId?: string;
};

export function TreeNode({ person, depth, expanded, toggle, focusId }: Props) {
  const { b, t } = useLanguage();
  const hasChildren = (person.children?.length ?? 0) > 0;
  const hasIssue = (person.issue?.length ?? 0) > 0;
  const open = expanded.has(person.id);
  const focused = focusId?.split(":")[0] === person.id;

  return (
    <li id={`node-${person.id}`} className="relative scroll-mt-32">
      <div
        className={[
          "rounded-[12px] border p-4 transition-colors",
          focused
            ? "border-cobalt-core bg-ice-wash"
            : "border-mist-50 bg-page-canvas hover:border-cloud-200",
        ].join(" ")}
      >
        <div className="flex items-start gap-3">
          {hasChildren ? (
            <button
              type="button"
              onClick={() => toggle(person.id)}
              aria-expanded={open}
              aria-label={b(person.name)}
              className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-[7px] border border-mist-50 text-[13px] font-medium text-carbon hover:bg-paper"
            >
              {open ? "−" : "+"}
            </button>
          ) : (
            <span
              aria-hidden
              className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-cloud-200"
            />
          )}

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              {person.code ? (
                <span className="eyebrow py-0.5 text-[11px]">{person.code}</span>
              ) : null}
              <span className="display-voice text-[17px] tracking-[-0.017em] text-ink-black">
                {b(person.name)}
              </span>
              {hasChildren ? (
                <span className="text-[12px] font-medium text-slate-700">
                  {person.children?.length}{" "}
                  {t(
                    person.children?.length === 1 ? "tree.branch" : "tree.branches",
                  )}
                </span>
              ) : null}
            </div>

            {person.place ? (
              <p className="mt-1 text-[13px] font-medium text-slate-600">
                {b(person.place)}
              </p>
            ) : null}
            {person.spouse ? (
              <p className="mt-1 text-[13px] font-medium text-slate-600">
                {t("tree.spouse")}: {b(person.spouse)}
              </p>
            ) : null}
            {person.note ? (
              <p className="mt-2 text-[13px] font-medium text-carbon">
                {b(person.note)}
              </p>
            ) : null}

            {hasIssue ? (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {person.issue?.map((name) => (
                  <li
                    key={name.en}
                    className="rounded-[7px] bg-paper px-2.5 py-1 text-[13px] font-medium text-carbon"
                  >
                    {b(name)}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>

      {hasChildren && open ? (
        <ul className="mt-3 space-y-3 border-l border-mist-50 pl-4 sm:pl-6">
          {person.children?.map((child) => (
            <TreeNode
              key={child.id}
              person={child}
              depth={depth + 1}
              expanded={expanded}
              toggle={toggle}
              focusId={focusId}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
