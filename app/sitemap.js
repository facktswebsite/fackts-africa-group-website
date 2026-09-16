import { experiences, siteConfig } from "@/lib/content";
import { selectedWork } from "@/lib/institutional";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/hoops",
    "/music",
    "/originals",
    "/experiences",
    "/work",
    "/people",
    "/about",
    "/partners",
    "/contact",
    "/legal",
    "/terms",
    "/privacy",
    "/consent",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.website}${route}`,
      changeFrequency:
        route === "" || route === "/originals" || route === "/work"
          ? "weekly"
          : "monthly",
      priority:
        route === ""
          ? 1
          : route === "/originals" || route === "/work"
            ? 0.9
            : route.startsWith("/legal") || ["/terms", "/privacy", "/consent"].includes(route)
              ? 0.6
              : 0.8,
    })),
    ...experiences.map((item) => ({
      url: `${siteConfig.website}/experiences/${item.slug}`,
      changeFrequency: "weekly",
      priority: 0.75,
    })),
    ...selectedWork.map((item) => ({
      url: `${siteConfig.website}/work/${item.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
