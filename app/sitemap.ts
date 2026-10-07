import { MetadataRoute } from "next";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/lib/models/Blog";
import { blogPosts as fallbackPosts, parseBlogDate } from "@/lib/data";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.workwisevisa.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 1. Static high-priority landing pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/jobs`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/countries`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/track-application`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/track`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // 2. Dynamic Blog Article Pages
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    await connectDB();
    const dbBlogs = await Blog.find({ published: { $ne: false } }).lean();

    const blogsToMap = dbBlogs && dbBlogs.length > 0 ? dbBlogs : fallbackPosts;

    const seenUrls = new Set<string>();

    blogRoutes = (blogsToMap as Array<Record<string, any>>)
      .map((blog) => {
        const slug = blog.slug || (blog._id ? blog._id.toString() : blog.id);
        if (!slug) return null;
        const url = `${BASE_URL}/blogs/${slug}`;
        if (seenUrls.has(url)) return null;
        seenUrls.add(url);

        const timestamp = parseBlogDate(
          blog.date,
          blog.createdAt ? new Date(blog.createdAt).toISOString() : undefined
        );
        const lastModified = timestamp > 0 ? new Date(timestamp) : now;

        return {
          url,
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.85,
        };
      })
      .filter(Boolean) as MetadataRoute.Sitemap;
  } catch (error) {
    console.error("[sitemap] Failed to query MongoDB for sitemap, falling back to static:", error);
    blogRoutes = fallbackPosts.map((blog) => {
      const timestamp = parseBlogDate(blog.date);
      return {
        url: `${BASE_URL}/blogs/${blog.slug || blog.id}`,
        lastModified: timestamp > 0 ? new Date(timestamp) : now,
        changeFrequency: "weekly" as const,
        priority: 0.85,
      };
    });
  }

  return [...staticRoutes, ...blogRoutes];
}
