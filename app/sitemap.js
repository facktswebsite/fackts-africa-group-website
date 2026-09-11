import { experiences, siteConfig } from "@/lib/content";

export default function sitemap() {
  const staticRoutes = ["", "/hoops", "/music", "/originals", "/experiences", "/people", "/about", "/partners", "/contact"];
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.website}${route}`,
      changeFrequency: route === "" || route === "/originals" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/originals" ? 0.9 : 0.8,
    })),
    ...experiences.map((item) => ({
      url: `${siteConfig.website}/experiences/${item.slug}`,
      changeFrequency: "weekly",
      priority: 0.75,
    })),
  ];
}
