import { siteConfig } from "@/lib/content";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin"] },
    sitemap: `${siteConfig.website}/sitemap.xml`,
  };
}
