import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fromMarkdown, type Household } from "@/lib/registrations";

const DIR = path.join(process.cwd(), "content", "registrations");

/**
 * Read the register at build time. Runs in a server component only — the
 * site is a static export, so this happens once during `next build` and the
 * result is baked into the page.
 */
export function getRegisteredHouseholds(): Household[] {
  let files: string[];
  try {
    files = readdirSync(DIR).filter((file) => file.endsWith(".md"));
  } catch {
    // The directory is absent on a fresh checkout with no registrations yet.
    return [];
  }

  return files
    .map((file) => {
      const source = readFileSync(path.join(DIR, file), "utf8");
      return fromMarkdown(source, file.replace(/\.md$/, ""));
    })
    .filter((household): household is Household => household !== null)
    .sort((a, b) => a.name.en.localeCompare(b.name.en));
}
