import { MetadataRoute } from "next";
import { posts } from "../blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.your-domain.com"; // Replace with your actual domain

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(), // Ideally, you'd have a date in your post data
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...postEntries,
  ];
}
