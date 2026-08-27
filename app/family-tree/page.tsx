import type { Metadata } from "next";
import { Suspense } from "react";
import { FamilyTree } from "@/components/family/family-tree";

export const metadata: Metadata = {
  title: "Family Tree",
  description:
    "The Pazheri genealogy from Husain Valiyuppappa through the six branches of the family.",
};

export default function FamilyTreePage() {
  return (
    <Suspense fallback={<div className="page-shell py-24" />}>
      <FamilyTree />
    </Suspense>
  );
}
