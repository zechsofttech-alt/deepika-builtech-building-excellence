import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { blogPosts } from "@/data/blogs";
import { projects } from "@/data/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.deepikabuiltech.com";

  // Static routes
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/projects",
    "/blogs",
    "/contact",
    "/careers",
  ];

  const staticUrls = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Dynamic routes
  const serviceUrls = services.map((s) => ({
    url: `${baseUrl}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const serviceSubpathUrls = services.map((s) => ({
    url: `${baseUrl}/service/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const locationUrls = locations.map((l) => ({
    url: `${baseUrl}/location/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogUrls = blogPosts.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const projectUrls = projects.map((p) => ({
    url: `${baseUrl}/project/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticUrls,
    ...serviceUrls,
    ...serviceSubpathUrls,
    ...locationUrls,
    ...blogUrls,
    ...projectUrls,
  ];
}
