import "server-only";

import { createHmac, randomUUID } from "node:crypto";

/**
 * Sends a validated Group website enquiry to FACKTS Africa OS.
 * Only this server module can access the shared secret.
 */
export async function deliverWebsiteEnquiryToCrm(data, eventId = randomUUID()) {
  const origin = process.env.FACKTS_CRM_URL;
  const secret = process.env.FACKTS_CRM_WEBHOOK_SECRET;
  if (!origin || !secret || secret.length < 32) {
    throw new Error("CRM connection is not configured.");
  }

  const url = new URL("/api/integrations/intake", origin);
  if (url.protocol !== "https:") throw new Error("CRM connection requires HTTPS.");

  const body = JSON.stringify({
    event_id: eventId,
    event_type: "lead",
    name: data.name,
    email: data.email,
    organization: data.organization,
    phone: data.phone,
    interest: data.interest,
    message: data.message,
  });
  const timestamp = String(Date.now());
  const signature = createHmac("sha256", secret)
    .update("group_website." + timestamp + "." + body)
    .digest("hex");

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Fackts-Source": "group_website",
      "X-Fackts-Timestamp": timestamp,
      "X-Fackts-Signature": signature,
    },
    body,
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });

  if (!response.ok) {
    throw new Error("CRM intake returned HTTP " + response.status);
  }
  const result = await response.json();
  if (result?.ok !== true || !result.receipt_id) {
    throw new Error("CRM intake did not confirm receipt.");
  }
  return result.receipt_id;
}
