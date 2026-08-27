import { NextResponse } from "next/server";
import { isAuthorised } from "@/lib/admin";
import { addAnnouncement, getAnnouncements, type Announcement } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function str(value: unknown, max = 400): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function GET() {
  return NextResponse.json({ announcements: await getAnnouncements() });
}

export async function POST(request: Request) {
  if (!isAuthorised(request)) {
    return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const titleEn = str(body.titleEn, 200);
  const titleMl = str(body.titleMl, 200);
  const bodyEn = str(body.bodyEn, 4000);
  const bodyMl = str(body.bodyMl, 4000);

  if (!titleEn || !titleMl) {
    return NextResponse.json({ error: "missing_title" }, { status: 400 });
  }

  const announcement: Announcement = {
    id: crypto.randomUUID(),
    date: str(body.date, 10) || new Date().toISOString().slice(0, 10),
    pinned: body.pinned === true,
    category: {
      en: str(body.categoryEn, 40) || "Notice",
      ml: str(body.categoryMl, 40) || "അറിയിപ്പ്",
    },
    title: { en: titleEn, ml: titleMl },
    body: { en: bodyEn, ml: bodyMl },
  };

  try {
    await addAnnouncement(announcement);
  } catch {
    return NextResponse.json({ error: "storage_unavailable" }, { status: 503 });
  }

  return NextResponse.json({ ok: true, id: announcement.id }, { status: 201 });
}
