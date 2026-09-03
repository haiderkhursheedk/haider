import { MetadataRoute } from "next";
import { getAllWritingArticles } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.haiderkhursheed.com";
  const lastModified = new Date();

  const articles = getAllWritingArticles();
  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/writing/${article.slug}`,
    lastModified: article.date ? new Date(article.sr || article.date) : lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/press`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/writing`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  return [...staticPages, ...articleEntries];
}
