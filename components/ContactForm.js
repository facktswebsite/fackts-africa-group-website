"use client";

import { useRef, useState } from "react";

const inbox = "info@facktsafrica.co.ke";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");
  const submissionId = useRef("");

  async function submit(event) {
    event.preventDefault();
    setStatus("Sending...");
    setFallbackUrl("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    if (!submissionId.current) submissionId.current = crypto.randomUUID();
    const body = { ...Object.fromEntries(form.entries()), submissionId: submissionId.current };
    const subject = encodeURIComponent(
      `FACKTS website inquiry — ${body.interest || "General"}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${body.name || ""}\nOrganization: ${body.organization || ""}\nEmail: ${body.email || ""}\nPhone: ${body.phone || ""}\nInterest: ${body.interest || ""}\n\nOutcome / message:\n${body.message || ""}`
    );
    const mailto = `mailto:${inbox}?subject=${subject}&body=${emailBody}`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error("Request failed");
      const result = await response.json();
      if (result.crmSynced && result.emailSent) {
        setStatus("Received. Your enquiry is in the FACKTS Africa CRM and an email notification was sent.");
      } else if (result.crmSynced) {
        setStatus("Received. Your enquiry is in the FACKTS Africa CRM. Email notification is temporarily unavailable.");
      } else if (result.emailSent) {
        setStatus("Your enquiry was emailed to FACKTS Africa. The CRM connection is temporarily unavailable; the team will follow up from email.");
      } else {
        throw new Error("Delivery not confirmed");
      }
      submissionId.current = "";
      formElement.reset();
    } catch {
      setStatus(
        "Online delivery is not available right now. The direct email option remains available below."
      );
      setFallbackUrl(mailto);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="hp-field" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex="-1" autoComplete="off" />
        </label>
      </div>

      <div className="field">
        <label>Contact name</label>
        <input name="name" required placeholder="Full name" />
      </div>

      <div className="field">
        <label>Organization</label>
        <input
          name="organization"
          placeholder="Brand / team / studio / institution"
        />
      </div>

      <div className="field">
        <label>Email</label>
        <input
          name="email"
          type="email"
          required
          placeholder="name@organization.com"
        />
      </div>

      <div className="field">
        <label>Phone</label>
        <input name="phone" placeholder="+254..." />
      </div>

      <div className="field">
        <label>Relationship type</label>
        <select name="interest" defaultValue="" required>
          <option value="" disabled>
            Select one
          </option>
          <option>Brand activation</option>
          <option>Property partnership</option>
          <option>Team / academy / league</option>
          <option>University / institution</option>
          <option>Music / creative business</option>
          <option>Corporate / CSR / community programme</option>
          <option>Media / production</option>
          <option>Other</option>
        </select>
      </div>

      <div className="field">
        <label>Partnership brief / desired outcome</label>
        <textarea
          name="message"
          required
          placeholder="Organisation, audience, intended outcome, timing and relevant context."
        />
      </div>

      <button type="submit">Submit partnership enquiry ↗</button>

      {status && <div className="meta text-muted form-status">{status}</div>}
      {fallbackUrl && (
        <a className="form-fallback" href={fallbackUrl}>
          Email FACKTS Africa Group directly ↗
        </a>
      )}
    </form>
  );
}
