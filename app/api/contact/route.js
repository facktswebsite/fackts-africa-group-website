import { NextResponse } from "next/server";

const recipient = "info@facktsafrica.co.ke";

function clean(value = "") {
  return String(value).trim().slice(0, 5000);
}

function escapeHtml(value = "") {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const input = await request.json();
    const data = {
      name: clean(input.name),
      organization: clean(input.organization),
      email: clean(input.email),
      phone: clean(input.phone),
      interest: clean(input.interest),
      message: clean(input.message),
      website: clean(input.website),
    };

    if (data.website) return NextResponse.json({ ok: true });

    for (const key of ["name", "email", "interest", "message"]) {
      if (!data[key] || data[key].length < 2) return NextResponse.json({ ok: false, error: `Missing ${key}` }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(data.email)) return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL || "FACKTS Website <website@facktsafrica.co.ke>";
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "Email delivery is not configured." }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: data.email,
        subject: `FACKTS website inquiry — ${data.interest}`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111"><h2>New FACKTS website inquiry</h2><p><strong>Name:</strong> ${escapeHtml(data.name)}</p><p><strong>Organization:</strong> ${escapeHtml(data.organization || "—")}</p><p><strong>Email:</strong> ${escapeHtml(data.email)}</p><p><strong>Phone:</strong> ${escapeHtml(data.phone || "—")}</p><p><strong>Interest:</strong> ${escapeHtml(data.interest)}</p><p><strong>Outcome / message:</strong><br/>${escapeHtml(data.message).replaceAll("\n", "<br/>")}</p></div>`,
      }),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("FACKTS CONTACT DELIVERY ERROR", details);
      return NextResponse.json({ ok: false, error: "Email delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("FACKTS CONTACT ERROR", error);
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
