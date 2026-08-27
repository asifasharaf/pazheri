import type { Bi } from "@/lib/i18n";
import announcementsJson from "@/content/announcements.json";
import eventsJson from "@/content/events.json";

/**
 * Announcements and assemblies are content, not state: they ship with the
 * site and are edited by changing content/*.json and redeploying. There is
 * no database and no server behind them, which is what lets the whole site
 * build to static files.
 */

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

function byDateDesc<T extends { date: string }>(a: T, b: T) {
  return b.date.localeCompare(a.date);
}

export function getAnnouncements(): Announcement[] {
  return [...(announcementsJson as Announcement[])].sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
    return byDateDesc(a, b);
  });
}

export function getEvents(): FamilyEvent[] {
  return [...(eventsJson as FamilyEvent[])].sort(byDateDesc);
}

/**
 * Split by date at build time. `today` is injectable so the split is
 * testable and so callers can pin it if they ever need to.
 */
export function splitEvents(events: FamilyEvent[], today = new Date()) {
  const cutoff = today.toISOString().slice(0, 10);
  return {
    upcoming: events
      .filter((event) => event.date >= cutoff)
      .sort((a, b) => a.date.localeCompare(b.date)),
    past: events.filter((event) => event.date < cutoff),
  };
}
