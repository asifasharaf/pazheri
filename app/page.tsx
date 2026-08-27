import { getAnnouncements, getEvents, splitEvents } from "@/lib/store";
import { HomeContent } from "@/components/home/home-content";

export default async function HomePage() {
  const announcements = await getAnnouncements();
  const { upcoming } = splitEvents(getEvents());

  return (
    <HomeContent
      announcements={announcements.slice(0, 3)}
      upcoming={upcoming.slice(0, 2)}
    />
  );
}
