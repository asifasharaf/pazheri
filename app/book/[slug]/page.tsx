import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChapterView } from "@/components/book/chapter-view";
import { chapters, getChapter, chapterNeighbours } from "@/lib/content/book";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) return { title: "Not found" };
  return { title: chapter.title.en, description: chapter.summary.en };
}

export default async function ChapterPage({ params }: Params) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const { prev, next } = chapterNeighbours(slug);
  return <ChapterView chapter={chapter} prev={prev} next={next} />;
}
