import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo";

const lastModified = new Date("2026-07-27T00:00:00.000Z");

const pages = [
  "",
  "/guide",
  "/guide/create-analyst",
  "/guide/create-strategy",
  "/guide/manage",
  "/faq",
  "/partners",
  "/legal/cookies",
  "/legal/disclaimer",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
