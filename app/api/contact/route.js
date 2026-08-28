
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    for (const key of ["name", "email", "interest", "message"]) {
      if (!data[key] || String(data[key]).trim().length < 2) return NextResponse.json({ ok: false, error: `Missing ${key}` }, { status: 400 });
    }
    console.log("FACKTS PARTNERSHIP INQUIRY", { ...data, receivedAt: new Date().toISOString() });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
