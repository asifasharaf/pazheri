import type { Metadata } from "next";
import { getAnnouncements } from "@/lib/store";
import { AnnouncementsView } from "@/components/pages/announcements-view";

export const metadata: Metadata = {
  title: "Announcements",
  description: "Notices published by the state executive of the society.",
};

// Runtime-added announcements are read from disk on each request.
export const dynamic = "force-dynamic";

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements();
  return <AnnouncementsView announcements={announcements} />;
}
