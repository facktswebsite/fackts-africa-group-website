
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function submit(event) {
    event.preventDefault();
    setStatus("Sending...");
    const form = new FormData(event.currentTarget);
    const body = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!response.ok) throw new Error("Request failed");
      setStatus("Received. FACKTS will get back to you.");
      event.currentTarget.reset();
    } catch {
      setStatus("Could not submit here. Email info@facktsafrica.co.ke.");
    }
  }

  return <form className="form" onSubmit={submit}>
    <div className="field"><label>Name</label><input name="name" required placeholder="Your name" /></div>
    <div className="field"><label>Organization</label><input name="organization" placeholder="Brand / team / studio / institution" /></div>
    <div className="field"><label>Email</label><input name="email" type="email" required placeholder="you@example.com" /></div>
    <div className="field"><label>Phone</label><input name="phone" placeholder="+254..." /></div>
    <div className="field"><label>What brings you to FACKTS?</label><select name="interest" defaultValue="" required><option value="" disabled>Select one</option><option>Brand / sponsorship / activation</option><option>Basketball team / academy</option><option>Tournament / event owner</option><option>Studio / music business</option><option>Artist / producer / creator</option><option>Institution / campus / community programme</option><option>Media / production</option><option>Other</option></select></div>
    <div className="field"><label>What should become better after we work together?</label><textarea name="message" required placeholder="Tell us the outcome, audience, timing and why it matters." /></div>
    <button type="submit">Send to FACKTS ↗</button>
    {status && <div className="meta text-muted">{status}</div>}
  </form>;
}
