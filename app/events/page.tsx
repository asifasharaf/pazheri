import type { Metadata } from "next";
import { getEvents, splitEvents } from "@/lib/store";
import { EventsView } from "@/components/pages/events-view";

export const metadata: Metadata = {
  title: "Assemblies & events",
  description: "State, regional and panchayat-level meetings of the family.",
};

export default function EventsPage() {
  const { upcoming, past } = splitEvents(getEvents());
  return <EventsView upcoming={upcoming} past={past} />;
}
