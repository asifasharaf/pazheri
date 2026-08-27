import type { Person } from "@/lib/content/tree";
import type { Household } from "@/lib/registrations";
import type { Bi } from "@/lib/i18n";

function describe(household: Household): Bi | undefined {
  const parts: { en: string; ml: string }[] = [];
  if (household.house) parts.push({ en: household.house, ml: household.house });
  if (household.panchayat)
    parts.push({ en: household.panchayat, ml: household.panchayat });
  if (household.district)
    parts.push({ en: household.district, ml: household.district });
  if (parts.length === 0) return undefined;
  return {
    en: parts.map((part) => part.en).join(", "),
    ml: parts.map((part) => part.ml).join(", "),
  };
}

function note(household: Household): Bi | undefined {
  const bits: Bi[] = [];
  if (household.ancestor) {
    bits.push({
      en: `Descends from ${household.ancestor}.`,
      ml: `${household.ancestor} പരമ്പരയിൽ.`,
    });
  }
  if (household.members) {
    bits.push({
      en: `${household.members} in the household.`,
      ml: `കുടുംബത്തിൽ ${household.members} പേർ.`,
    });
  }
  if (household.notes) bits.push({ en: household.notes, ml: household.notes });
  if (bits.length === 0) return undefined;
  return {
    en: bits.map((bit) => bit.en).join(" "),
    ml: bits.map((bit) => bit.ml).join(" "),
  };
}

function toPerson(household: Household): Person {
  return {
    id: `reg-${household.id}`,
    name: household.name,
    place: describe(household),
    note: note(household),
    registered: household.origin,
  };
}

/**
 * Graft the register onto the book's tree.
 *
 * Households are attached to the branch they named, as siblings of the
 * recorded descendants. The book's own structure is never mutated — a new
 * tree is returned — so a bad entry can never corrupt the genealogy.
 */
export function mergeRegister(root: Person, households: Household[]): Person {
  if (households.length === 0) return root;

  const byBranch = new Map<string, Household[]>();
  for (const household of households) {
    const code = household.branch.trim().toUpperCase();
    const list = byBranch.get(code);
    if (list) list.push(household);
    else byBranch.set(code, [household]);
  }

  function visit(person: Person): Person {
    const additions = person.code ? byBranch.get(person.code.toUpperCase()) : undefined;
    const children = person.children?.map(visit);

    if (!additions && !children) return person;

    return {
      ...person,
      children: [...(children ?? []), ...(additions ?? []).map(toPerson)],
    };
  }

  return visit(root);
}

/** Households whose branch could not be matched to the book. */
export function unplacedHouseholds(
  root: Person,
  households: Household[],
): Household[] {
  const codes = new Set<string>();
  (function collect(person: Person) {
    if (person.code) codes.add(person.code.toUpperCase());
    person.children?.forEach(collect);
  })(root);

  return households.filter(
    (household) => !codes.has(household.branch.trim().toUpperCase()),
  );
}
