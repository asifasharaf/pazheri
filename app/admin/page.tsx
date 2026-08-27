import type { Metadata } from "next";
import { AdminDesk } from "@/components/pages/admin-desk";

export const metadata: Metadata = {
  title: "Family desk",
  description: "Registrations and announcements, for the state secretariat.",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminDesk />;
}
