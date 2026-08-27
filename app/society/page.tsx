import type { Metadata } from "next";
import { SocietyView } from "@/components/pages/society-view";

export const metadata: Metadata = {
  title: "The Society",
  description:
    "The Pazheri Family Educational & Charitable Society — structure, office bearers and contacts.",
};

export default function SocietyPage() {
  return <SocietyView />;
}
