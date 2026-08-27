import { NextResponse } from "next/server";
import { addRegistration, forwardRegistration, type Registration } from "@/lib/store";

export const runtime = "nodejs";

function str(value: unknown, max = 240): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const entry: Registration = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    fullName: str(body.fullName, 120),
    houseName: str(body.houseName, 120) || undefined,
    branch: str(body.branch, 40),
    ancestor: str(body.ancestor, 120) || undefined,
    phone: str(body.phone, 24),
    email: str(body.email, 160) || undefined,
    district: str(body.district, 60),
    panchayat: str(body.panchayat, 120) || undefined,
    members: Number.isFinite(Number(body.members))
      ? Math.max(0, Math.min(99, Number(body.members)))
      : undefined,
    notes: str(body.notes, 2000) || undefined,
  };

  if (!entry.fullName || !entry.phone || !entry.branch || !entry.district) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }

  // The local file is the path when the site runs on its own server; the
  // relay is the durable path when the filesystem is read-only. At least
  // one of them has to actually take the entry.
  const saved = await addRegistration(entry).then(
    () => true,
    () => false,
  );
  const relayed = process.env.REGISTRATION_WEBHOOK_URL
    ? await forwardRegistration(entry).then(
        () => true,
        () => false,
      )
    : false;

  if (!saved && !relayed) {
    return NextResponse.json({ error: "storage_unavailable" }, { status: 503 });
  }

  return NextResponse.json({ ok: true, id: entry.id }, { status: 201 });
}
