import type { Bi } from "@/lib/i18n";

/**
 * A household that has registered with the society.
 *
 * Deliberately carries no phone number or email. A register entry is a file
 * in the repository, and the repository is public — contact details travel
 * privately to the general secretary in the message the form composes, never
 * in the committed entry.
 */
export type Household = {
  id: string;
  name: Bi;
  house?: string;
  /** Branch code as printed in the book: B1…B6, or "unknown". */
  branch: string;
  ancestor?: string;
  district?: string;
  panchayat?: string;
  members?: number;
  registered: string;
  notes?: string;
  /**
   * "published" — committed to the repository and part of the register.
   * "local"     — saved in this browser only, not yet sent or published.
   */
  origin: "published" | "local";
};

export const LOCAL_REGISTRATIONS_KEY = "pazheri.registrations";

export type HouseholdInput = {
  name: string;
  nameMl?: string;
  house?: string;
  branch: string;
  ancestor?: string;
  district?: string;
  panchayat?: string;
  members?: string | number;
  notes?: string;
  registered?: string;
};

function slugify(value: string): string {
  return (
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 48) || "household"
  );
}

/** Filename a register entry should be committed under. */
export function registrationFilename(input: HouseholdInput): string {
  const date = (input.registered ?? new Date().toISOString().slice(0, 10)).slice(0, 10);
  return `${date}-${slugify(input.name)}.md`;
}

const FRONTMATTER_KEYS = [
  "name",
  "nameMl",
  "house",
  "branch",
  "ancestor",
  "district",
  "panchayat",
  "members",
  "registered",
] as const;

/** Serialise a household to the markdown format kept in content/registrations. */
export function toMarkdown(input: HouseholdInput): string {
  const values: Record<string, string> = {
    ...Object.fromEntries(
      FRONTMATTER_KEYS.map((key) => [key, String(input[key] ?? "").trim()]),
    ),
    registered: (input.registered ?? new Date().toISOString().slice(0, 10)).slice(0, 10),
  };

  const lines = FRONTMATTER_KEYS.filter((key) => values[key]).map(
    (key) => `${key}: ${values[key]}`,
  );

  const notes = (input.notes ?? "").trim();
  return `---\n${lines.join("\n")}\n---\n\n${notes}\n`;
}

/**
 * Parse one register entry. The frontmatter is a flat `key: value` block —
 * deliberately not YAML, so no parser dependency is needed and a family
 * member editing a file by hand cannot break the build with indentation.
 */
export function fromMarkdown(
  source: string,
  id: string,
  origin: Household["origin"] = "published",
): Household | null {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return null;

  const fields: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    if (key) fields[key] = value;
  }

  const name = fields.name?.trim();
  if (!name) return null;

  const members = Number.parseInt(fields.members ?? "", 10);

  return {
    id,
    // An entry may be filed in either script; the other side falls back to it
    // rather than showing an empty name.
    name: { en: name, ml: fields.nameMl?.trim() || name },
    house: fields.house || undefined,
    branch: fields.branch || "unknown",
    ancestor: fields.ancestor || undefined,
    district: fields.district || undefined,
    panchayat: fields.panchayat || undefined,
    members: Number.isFinite(members) ? members : undefined,
    registered: fields.registered || "",
    notes: match[2].trim() || undefined,
    origin,
  };
}

/** Households saved in this browser and not yet published. */
export function readLocalHouseholds(): Household[] {
  try {
    const raw = window.localStorage.getItem(LOCAL_REGISTRATIONS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Household[]) : [];
  } catch {
    return [];
  }
}

export function saveLocalHousehold(household: Household): void {
  try {
    const existing = readLocalHouseholds().filter((h) => h.id !== household.id);
    window.localStorage.setItem(
      LOCAL_REGISTRATIONS_KEY,
      JSON.stringify([...existing, household]),
    );
  } catch {
    /* storage unavailable — the downloaded file is still the real record */
  }
}
