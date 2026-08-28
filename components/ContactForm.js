"use client";

import { useState } from "react";

const inbox = "info@facktsafrica.co.ke";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");

  async function submit(event) {
    event.preventDefault();
    setStatus("Sending...");
    setFallbackUrl("");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const body = Object.fromEntries(form.entries());
    const subject = encodeURIComponent(`FACKTS website inquiry — ${body.interest || "General"}`);
    const emailBody = encodeURIComponent(`Name: ${body.name || ""}\nOrganization: ${body.organization || ""}\nEmail: ${body.email || ""}\nPhone: ${body.phone || ""}\nInterest: ${body.interest || ""}\n\nOutcome / message:\n${body.message || ""}`);
    const mailto = `mailto:${inbox}?subject=${subject}&body=${emailBody}`;

    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!response.ok) throw new Error("Request failed");
      setStatus("Received. Your inquiry has been sent to FACKTS.");
      formElement.reset();
    } catch {
      setStatus("Online delivery is not available right now. Use the direct email option below.");
      setFallbackUrl(mailto);
    }
  }

  return <form className="form" onSubmit={submit}>
    <div className="hp-field" aria-hidden="true"><label>Website<input name="website" tabIndex="-1" autoComplete="off" /></label></div>
    <div className="field"><label>Name</label><input name="name" required placeholder="Your name" /></div>
    <div className="field"><label>Organization</label><input name="organization" placeholder="Brand / team / studio / institution" /></div>
    <div className="field"><label>Email</label><input name="email" type="email" required placeholder="you@example.com" /></div>
    <div className="field"><label>Phone</label><input name="phone" placeholder="+254..." /></div>
    <div className="field"><label>What brings you to FACKTS?</label><select name="interest" defaultValue="" required><option value="" disabled>Select one</option><option>Brand / sponsorship / activation</option><option>Basketball team / academy</option><option>Tournament / event owner</option><option>Studio / music business</option><option>Artist / producer / creator</option><option>Institution / campus / community programme</option><option>Media / production</option><option>Other</option></select></div>
    <div className="field"><label>What should become better after we work together?</label><textarea name="message" required placeholder="Tell us the outcome, audience, timing and why it matters." /></div>
    <button type="submit">Send to FACKTS ↗</button>
    {status && <div className="meta text-muted form-status">{status}</div>}
    {fallbackUrl && <a className="form-fallback" href={fallbackUrl}>Email FACKTS directly ↗</a>}
  </form>;
}
