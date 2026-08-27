import { getAnnouncements, getEvents, splitEvents } from "@/lib/content/desk";
import { HomeContent } from "@/components/home/home-content";

export default function HomePage() {
  const { upcoming } = splitEvents(getEvents());

  return (
    <HomeContent
      announcements={getAnnouncements().slice(0, 3)}
      upcoming={upcoming.slice(0, 2)}
    />
  );
}
