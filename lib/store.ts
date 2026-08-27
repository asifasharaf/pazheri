import { promises as fs } from "node:fs";
import path from "node:path";
import type { Bi } from "@/lib/i18n";
import seedAnnouncements from "@/content/announcements.json";
import seedEvents from "@/content/events.json";

export type Announcement = {
  id: string;
  date: string;
  pinned?: boolean;
  category: Bi;
  title: Bi;
  body: Bi;
};

export type FamilyEvent = {
  id: string;
  date: string;
  title: Bi;
  venue: Bi;
  detail: Bi;
};

export type Registration = {
  id: string;
  receivedAt: string;
  fullName: string;
  houseName?: string;
  branch: string;
  ancestor?: string;
  phone: string;
  email?: string;
  district: string;
  panchayat?: string;
  members?: number;
  notes?: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const REGISTRATIONS_FILE = path.join(DATA_DIR, "registrations.json");
const ANNOUNCEMENTS_FILE = path.join(DATA_DIR, "announcements.json");

async function readJsonFile<T>(file: string): Promise<T[]> {
  try {
    const raw = await fs.readFile(file, "utf8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    // Missing file on a fresh checkout, or a read-only filesystem.
    return [];
  }
}

async function writeJsonFile<T>(file: string, rows: T[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(file, `${JSON.stringify(rows, null, 2)}\n`, "utf8");
}

function byDateDesc<T extends { date: string }>(a: T, b: T) {
  return b.date.localeCompare(a.date);
}

/**
 * Announcements published by the state executive: the seeded set from
 * content/, plus anything added through the admin desk at runtime.
 */
export async function getAnnouncements(): Promise<Announcement[]> {
  const added = await readJsonFile<Announcement>(ANNOUNCEMENTS_FILE);
  const merged = [...(seedAnnouncements as Announcement[]), ...added];
  return merged.sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
    return byDateDesc(a, b);
  });
}

export async function addAnnouncement(
  announcement: Announcement,
): Promise<void> {
  const added = await readJsonFile<Announcement>(ANNOUNCEMENTS_FILE);
  await writeJsonFile(ANNOUNCEMENTS_FILE, [...added, announcement]);
}

export function getEvents(): FamilyEvent[] {
  return [...(seedEvents as FamilyEvent[])].sort(byDateDesc);
}

export function splitEvents(events: FamilyEvent[], today = new Date()) {
  const cutoff = today.toISOString().slice(0, 10);
  return {
    upcoming: events.filter((e) => e.date >= cutoff).sort((a, b) => a.date.localeCompare(b.date)),
    past: events.filter((e) => e.date < cutoff),
  };
}

export async function getRegistrations(): Promise<Registration[]> {
  const rows = await readJsonFile<Registration>(REGISTRATIONS_FILE);
  return rows.sort((a, b) => b.receivedAt.localeCompare(a.receivedAt));
}

export async function addRegistration(entry: Registration): Promise<void> {
  const rows = await readJsonFile<Registration>(REGISTRATIONS_FILE);
  await writeJsonFile(REGISTRATIONS_FILE, [...rows, entry]);
}

/**
 * Optional relay so a deployment on a read-only filesystem still delivers
 * registrations somewhere the secretariat can see them.
 */
export async function forwardRegistration(entry: Registration): Promise<void> {
  const url = process.env.REGISTRATION_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(entry),
  });
}
