import { stories, experiences, siteConfig } from "@/lib/content";

export default function sitemap() {
  const staticRoutes = ["", "/hoops", "/music", "/stories", "/experiences", "/people", "/about", "/partners", "/contact"];
  return [
    ...staticRoutes.map(route => ({ url: `${siteConfig.website}${route}`, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.8 })),
    ...stories.map(story => ({ url: `${siteConfig.website}/stories/${story.slug}`, changeFrequency: "monthly", priority: 0.7 })),
    ...experiences.map(item => ({ url: `${siteConfig.website}/experiences/${item.slug}`, changeFrequency: "weekly", priority: 0.75 })),
  ];
}
