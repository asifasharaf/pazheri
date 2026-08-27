"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { TreeNode } from "./tree-node";
import { allNames, branches, pathToNode, root, type Person } from "@/lib/content/tree";

function collectIds(person: Person, out: string[] = []): string[] {
  out.push(person.id);
  for (const child of person.children ?? []) collectIds(child, out);
  return out;
}

const allIds = collectIds(root);

export function FamilyTree() {
  const { t, b } = useLanguage();
  const params = useSearchParams();
  const focusId = params.get("focus") ?? undefined;
  const branchId = params.get("branch") ?? undefined;

  const initial = useMemo(() => {
    const ids = new Set<string>(["root", "a"]);
    if (focusId) for (const id of pathToNode(focusId)) ids.add(id);
    if (branchId) for (const id of pathToNode(branchId)) ids.add(id);
    return ids;
  }, [focusId, branchId]);

  const [expanded, setExpanded] = useState<Set<string>>(initial);

  // Re-open the path whenever the deep link changes.
  useEffect(() => {
    setExpanded(new Set(initial));
  }, [initial]);

  // Bring the focused node into view once its ancestors are open.
  useEffect(() => {
    if (!focusId) return;
    const id = focusId.split(":")[0];
    const node = document.getElementById(`node-${id}`);
    node?.scrollIntoView({ block: "center", behavior: "smooth" });
  }, [focusId, expanded]);

  const toggle = (id: string) =>
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <div className="page-shell py-16 lg:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">{t("section.tree.eyebrow")}</span>
        <h1 className="display-voice mt-6 text-heading text-ink-black lg:text-heading-lg">
          {t("tree.title")}
        </h1>
        <p className="mt-4 text-body-lg font-medium text-slate-600">
          {t("section.tree.body")}
        </p>
        <p className="mt-3 text-[14px] font-medium text-slate-700">
          {t("tree.legend")} · {allNames.length} {t("search.results")}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setExpanded(new Set(allIds))}
        >
          {t("tree.expandAll")}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setExpanded(new Set(["root", "a"]))}
        >
          {t("tree.collapseAll")}
        </button>
        <span className="ml-auto flex flex-wrap gap-1.5">
          {branches.map((branch) => (
            <button
              key={branch.id}
              type="button"
              onClick={() =>
                setExpanded((current) => {
                  const next = new Set(current);
                  for (const id of pathToNode(branch.id)) next.add(id);
                  next.add(branch.id);
                  return next;
                })
              }
              className="rounded-[7px] border border-mist-50 px-2.5 py-1.5 text-[12px] font-medium text-slate-600 hover:bg-paper hover:text-ink-black"
            >
              {branch.code} · {b(branch.name)}
            </button>
          ))}
        </span>
      </div>

      <ul className="mt-10 space-y-3">
        <TreeNode
          person={root}
          depth={0}
          expanded={expanded}
          toggle={toggle}
          focusId={focusId}
        />
      </ul>
    </div>
  );
}
