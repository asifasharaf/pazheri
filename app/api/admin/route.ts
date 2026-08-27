import { NextResponse } from "next/server";
import { isAuthorised } from "@/lib/admin";
import { getRegistrations } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!isAuthorised(request)) {
    return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  }
  return NextResponse.json({ registrations: await getRegistrations() });
}
