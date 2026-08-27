"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { TreeNode } from "./tree-node";
import { allNames, branches, pathToNode, root, type Person } from "@/lib/content/tree";
import { mergeRegister, unplacedHouseholds } from "@/lib/content/merge-register";
import { readLocalHouseholds, type Household } from "@/lib/registrations";

function collectIds(person: Person, out: string[] = []): string[] {
  out.push(person.id);
  for (const child of person.children ?? []) collectIds(child, out);
  return out;
}

const allIds = collectIds(root);

export function FamilyTree({ households }: { households: Household[] }) {
  const { t, b } = useLanguage();
  const params = useSearchParams();
  const focusId = params.get("focus") ?? undefined;
  const branchId = params.get("branch") ?? undefined;

  // Entries saved in this browser but not yet published, so a family sees
  // its own registration in the tree straight away.
  const [local, setLocal] = useState<Household[]>([]);
  useEffect(() => setLocal(readLocalHouseholds()), []);

  const all = useMemo(() => [...households, ...local], [households, local]);
  const tree = useMemo(() => mergeRegister(root, all), [all]);
  const unplaced = useMemo(() => unplacedHouseholds(root, all), [all]);

  const initial = useMemo(() => {
    const ids = new Set<string>(["root", "a"]);
    if (focusId) for (const id of pathToNode(focusId)) ids.add(id);
    if (branchId) for (const id of pathToNode(branchId)) ids.add(id);
    return ids;
  }, [focusId, branchId]);

  const [expanded, setExpanded] = useState<Set<string>>(initial);

  /**
   * A household saved on this device is grafted onto a branch that starts
   * collapsed, so without this it would be "in the tree" but invisible.
   * Open the path down to each one.
   */
  const localPaths = useMemo(() => {
    const ids = new Set<string>();
    for (const household of local) {
      const code = household.branch.trim().toUpperCase();
      const branch = branches.find((node) => node.code?.toUpperCase() === code);
      if (!branch) continue;
      for (const id of pathToNode(branch.id)) ids.add(id);
      ids.add(branch.id);
    }
    return ids;
  }, [local]);

  // Re-open the path whenever the deep link or the local register changes.
  useEffect(() => {
    setExpanded(new Set([...initial, ...localPaths]));
  }, [initial, localPaths]);

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
        <h1 className="super-heading mt-6 text-ink-black">
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
          person={tree}
          depth={0}
          expanded={expanded}
          toggle={toggle}
          focusId={focusId}
        />
      </ul>

      {unplaced.length > 0 ? (
        <section className="mt-14">
          <h2 className="display-voice text-subheading text-ink-black">
            {t("tree.unplaced")}
          </h2>
          <p className="mt-2 max-w-2xl text-[14px] font-medium text-slate-600">
            {t("tree.unplacedHelp")}
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {unplaced.map((household) => (
              <li key={household.id} className="card-flat p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="display-voice text-[16px] text-ink-black">
                    {b(household.name)}
                  </span>
                  <span
                    className={
                      household.origin === "local"
                        ? "eyebrow py-0.5 text-[11px]"
                        : "badge-new"
                    }
                  >
                    {t(
                      household.origin === "local"
                        ? "tree.localOnly"
                        : "tree.registered",
                    )}
                  </span>
                </div>
                {household.district ? (
                  <p className="mt-1 text-[13px] font-medium text-slate-600">
                    {household.district}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
