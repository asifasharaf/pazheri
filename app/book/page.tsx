import type { Metadata } from "next";
import { BookContents } from "@/components/book/book-contents";

export const metadata: Metadata = {
  title: "The Book",
  description:
    "The complete digital edition of the Pazheri family history by Abbas Master Pazheri.",
};

export default function BookIndexPage() {
  return <BookContents />;
}
