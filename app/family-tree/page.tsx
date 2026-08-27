import type { Metadata } from "next";
import { Suspense } from "react";
import { FamilyTree } from "@/components/family/family-tree";
import { getRegisteredHouseholds } from "@/lib/content/registrations";

export const metadata: Metadata = {
  title: "Family Tree",
  description:
    "The Pazheri genealogy from Husain Valiyuppappa through the six branches of the family.",
};

export default function FamilyTreePage() {
  // Read at build time; the page ships as static HTML.
  const households = getRegisteredHouseholds();

  return (
    <Suspense fallback={<div className="page-shell py-24" />}>
      <FamilyTree households={households} />
    </Suspense>
  );
}
