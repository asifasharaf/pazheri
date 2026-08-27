import type { Metadata } from "next";
import { getAnnouncements } from "@/lib/content/desk";
import { AnnouncementsView } from "@/components/pages/announcements-view";

export const metadata: Metadata = {
  title: "Announcements",
  description: "Notices published by the state executive of the society.",
};


export default function AnnouncementsPage() {
  const announcements = getAnnouncements();
  return <AnnouncementsView announcements={announcements} />;
}
