/* ================================================================
   lib/controllers/blogController.ts  — MVC: Controller Layer
   Business logic for all blog-related operations.
   Route handlers are thin wrappers that call these functions.
   ================================================================ */

import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import Blog, { IBlog } from "@/lib/models/Blog";
import { requirePermission } from "@/lib/auth";
import { blogPosts as fallbackInitialPosts, sortBlogsByDate, parseBlogDate } from "@/lib/data";

// ── Helpers ────────────────────────────────────────────────────────

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function calculateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return `${minutes} min read`;
}

function todayDateString(): string {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/** Seed fallback blog posts ONLY if they do not already exist in MongoDB */
export async function ensureSeedData() {
  try {
    const seedMatchers = [
      {
        pattern: /Blue-Collar Work Permits|UAE.*Saudi|Work Permits in 2026/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-1") || fallbackInitialPosts[0],
      },
      {
        pattern: /Germany Opportunity Card|Chancenkarte|Trade Workers/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-2") || fallbackInitialPosts[1],
      },
      {
        pattern: /Health.*Care Worker|Caregiver/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-3") || fallbackInitialPosts[2],
      },
      {
        pattern: /Heavy Vehicle|Heavy Driver|Dubai & Riyadh|GCC/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-4") || fallbackInitialPosts[3],
      },
      {
        pattern: /Dubai Construction|MEP.*Trade|Skill Card.*Salary/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-5"),
      },
      {
        pattern: /Dubai Hotel|Hospitality Work Visa|Waiters.*Chefs/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-6"),
      },
      {
        pattern: /Dubai Delivery Rider|RTA Bike License|Warehouse.*Logistics/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-7"),
      },
      {
        pattern: /Saudi Arabia NEOM|NEOM.*Megaprojects|Vision 2030.*Recruitment/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-8"),
      },
      {
        pattern: /Qatar.*Kuwait|Oil & Gas Shutdown|Plant Maintenance Work Visa/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-9"),
      },
      {
        pattern: /GCC Unified Tourist Visa|GCC Grand Tours|Cross-Border Employment/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-10"),
      },
      {
        pattern: /Kuwait Work Visa Reopening|PAM Quotas|Degree Attestation.*Kuwait/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-11"),
      },
      {
        pattern: /Wafid.*GAMCA|GAMCA.*Medical|TB Scarring.*GCC/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-12"),
      },
      {
        pattern: /Qatar Work Visa|QVC.*Process|Qatar Visa Center|Contract Signing.*Qatar/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-13"),
      },
      {
        pattern: /Takamol.*SVP|Skill Verification Program|Trade Test.*Saudi/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-14"),
      },
      {
        pattern: /Police Clearance Certificate|PCC.*Passport Seva|MEA Apostille.*PCC/i,
        post: fallbackInitialPosts.find((p) => p.id === "blog-15"),
      },
    ];

    for (const item of seedMatchers) {
      const p = item.post;
      if (!p || !p.content) continue;
      const generatedSlug = p.slug || generateSlug(p.title);

      // Check if document already exists in DB
      const existing = await Blog.findOne({
        $or: [
          { slug: generatedSlug },
          { slug: p.id },
          { title: { $regex: item.pattern } },
        ],
      });

      // ONLY create if missing — NEVER overwrite existing user-edited data!
      if (!existing) {
        await Blog.create({
          title: p.title,
          slug: generatedSlug,
          category: p.category || "Gulf Visas",
          excerpt: p.excerpt,
          content: p.content,
          image: p.image,
          author: p.author || "WorkWise Editorial Team",
          readTime: p.readTime || calculateReadTime(p.content),
          tags: p.tags || ["Work Permits", "Visa Guide"],
          metaTitle: p.metaTitle || p.title,
          metaDescription: p.metaDescription || p.excerpt,
          metaKeywords: p.metaKeywords || (p.tags ? p.tags.join(", ") : ""),
          published: true,
          featured: Boolean(p.featured),
          views: 500,
          date: p.date || todayDateString(),
        });
      }
    }
  } catch (err) {
    console.error("[blogController.ensureSeedData] Error seeding blogs:", err);
  }
}

// ── Controller Methods ────────────────────────────────────────────

/**
 * GET /api/blogs
 * Returns blogs with optional filtering by category, search, and published status.
 */
export async function getAllBlogs(request: NextRequest): Promise<Response> {
  try {
    await connectDB();
    await ensureSeedData();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const includeDrafts = searchParams.get("includeDrafts") === "true";
    const featuredOnly = searchParams.get("featured") === "true";

    const filter: Record<string, unknown> = {};

    if (!includeDrafts) {
      filter.published = true;
    }

    if (category && category !== "All") {
      filter.category = category;
    }

    if (featuredOnly) {
      filter.featured = true;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { tags: { $regex: search, $options: "i" } },
      ];
    }

    const blogs = await Blog.find(filter).sort({ createdAt: -1 }).lean();

    const transformed = blogs.map((b) => ({
      ...b,
      id: (b._id as unknown as { toString(): string }).toString(),
      _id: undefined,
      __v: undefined,
    }));

    // Sort chronologically: newest published date first
    const sorted = sortBlogsByDate(transformed);

    return Response.json({
      success: true,
      data: sorted,
      count: sorted.length,
    });
  } catch (error) {
    console.error("[blogController.getAllBlogs]", error);
    return Response.json(
      { success: false, message: "Failed to fetch blogs." },
      { status: 500 }
    );
  }
}

/**
 * GET /api/blogs/:id
 * Returns a single blog by ID or Slug.
 */
export async function getBlogById(idOrSlug: string): Promise<Response> {
  try {
    await connectDB();

    let blog = null;
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(idOrSlug);

    if (isObjectId) {
      blog = await Blog.findById(idOrSlug);
    }

    if (!blog) {
      blog = await Blog.findOne({ slug: idOrSlug });
    }

    if (!blog) {
      return Response.json(
        { success: false, message: "Blog article not found." },
        { status: 404 }
      );
    }

    // Increment views asynchronously
    Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } }).exec();

    const transformed = {
      ...blog.toObject(),
      id: blog._id.toString(),
      _id: undefined,
      __v: undefined,
    };

    return Response.json({ success: true, data: transformed });
  } catch (error) {
    console.error("[blogController.getBlogById]", error);
    return Response.json(
      { success: false, message: "Failed to fetch blog article." },
      { status: 500 }
    );
  }
}

/**
 * POST /api/blogs
 * Create a new blog post (admin/manager with permission).
 */
export async function createBlog(request: NextRequest): Promise<Response> {
  try {
    const auth = await requirePermission(request, "blogs", "create");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error || "Permission denied." },
        { status: auth.status }
      );
    }

    const body = await request.json();
    const {
      title,
      slug: customSlug,
      category = "Gulf Visas",
      excerpt,
      content,
      image,
      author,
      readTime,
      tags = [],
      metaTitle,
      metaDescription,
      metaKeywords,
      canonicalUrl,
      published = true,
      featured = false,
      date,
    } = body;

    if (!title || !excerpt || !content) {
      return Response.json(
        { success: false, message: "Title, excerpt, and full content are required." },
        { status: 400 }
      );
    }

    await connectDB();

    // Auto-generate or clean slug
    let baseSlug = customSlug ? generateSlug(customSlug) : generateSlug(title);
    if (!baseSlug) baseSlug = `post-${Date.now()}`;

    // Ensure slug uniqueness
    let finalSlug = baseSlug;
    let counter = 1;
    while (await Blog.findOne({ slug: finalSlug })) {
      finalSlug = `${baseSlug}-${counter}`;
      counter++;
    }

    const newBlog = await Blog.create({
      title: title.trim(),
      slug: finalSlug,
      category: category.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      image:
        image?.trim() ||
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      author: author?.trim() || auth.user?.name || "WorkWise Editorial Team",
      readTime: readTime?.trim() || calculateReadTime(content),
      tags: Array.isArray(tags)
        ? tags.map((t: string) => t.trim()).filter(Boolean)
        : [],
      metaTitle: metaTitle?.trim() || title.trim(),
      metaDescription: metaDescription?.trim() || excerpt.trim(),
      metaKeywords: metaKeywords?.trim() || "",
      canonicalUrl: canonicalUrl?.trim() || "",
      published: Boolean(published),
      featured: Boolean(featured),
      views: 0,
      date: date?.trim() || todayDateString(),
    });

    const transformed = {
      ...newBlog.toObject(),
      id: newBlog._id.toString(),
      _id: undefined,
      __v: undefined,
    };

    try {
      revalidatePath("/blogs");
      revalidatePath(`/blogs/${newBlog.slug}`);
      revalidatePath("/");
      revalidatePath("/sitemap.xml");
    } catch {
      // Ignored in non-SSR environment
    }

    return Response.json(
      { success: true, data: transformed, message: "Blog published successfully!" },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[blogController.createBlog]", error);
    const err = error as Error;
    return Response.json(
      { success: false, message: err.message || "Failed to create blog." },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/blogs/:id
 * Update an existing blog post.
 */
export async function updateBlog(
  id: string,
  request: NextRequest
): Promise<Response> {
  try {
    const auth = await requirePermission(request, "blogs", "edit");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error || "Permission denied." },
        { status: auth.status }
      );
    }

    await connectDB();

    const existing = await Blog.findById(id);
    if (!existing) {
      return Response.json(
        { success: false, message: "Blog not found." },
        { status: 404 }
      );
    }

    const body = await request.json();
    const {
      title,
      slug: customSlug,
      category,
      excerpt,
      content,
      image,
      author,
      readTime,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      canonicalUrl,
      published,
      featured,
      date,
    } = body;

    if (title) existing.title = title.trim();
    if (category) existing.category = category.trim();
    if (excerpt) existing.excerpt = excerpt.trim();
    if (content) {
      existing.content = content.trim();
      if (!readTime) {
        existing.readTime = calculateReadTime(content);
      }
    }
    if (image !== undefined) existing.image = image.trim();
    if (author) existing.author = author.trim();
    if (readTime) existing.readTime = readTime.trim();
    if (metaTitle !== undefined) existing.metaTitle = metaTitle.trim();
    if (metaDescription !== undefined) existing.metaDescription = metaDescription.trim();
    if (metaKeywords !== undefined) existing.metaKeywords = metaKeywords.trim();
    if (canonicalUrl !== undefined) existing.canonicalUrl = canonicalUrl.trim();
    if (Array.isArray(tags)) {
      existing.tags = tags.map((t: string) => t.trim()).filter(Boolean);
    }
    if (published !== undefined) existing.published = Boolean(published);
    if (featured !== undefined) existing.featured = Boolean(featured);
    if (date) existing.date = date.trim();

    if (customSlug && customSlug.trim() !== existing.slug) {
      const newSlug = generateSlug(customSlug);
      const duplicate = await Blog.findOne({ slug: newSlug, _id: { $ne: existing._id } });
      if (duplicate) {
        return Response.json(
          { success: false, message: "Slug is already used by another article." },
          { status: 400 }
        );
      }
      existing.slug = newSlug;
    }

    await existing.save();

    try {
      revalidatePath("/blogs");
      revalidatePath(`/blogs/${existing.slug}`);
      revalidatePath("/");
      revalidatePath("/sitemap.xml");
    } catch {
      // Ignored in non-SSR environment
    }

    const transformed = {
      ...existing.toObject(),
      id: existing._id.toString(),
      _id: undefined,
      __v: undefined,
    };

    return Response.json({
      success: true,
      data: transformed,
      message: "Blog updated successfully.",
    });
  } catch (error: unknown) {
    console.error("[blogController.updateBlog]", error);
    const err = error as Error;
    return Response.json(
      { success: false, message: err.message || "Failed to update blog." },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/blogs/:id
 * Delete a blog post.
 */
export async function deleteBlog(
  id: string,
  request: NextRequest
): Promise<Response> {
  try {
    const auth = await requirePermission(request, "blogs", "delete");
    if (!auth.allowed) {
      return Response.json(
        { success: false, message: auth.error || "Permission denied." },
        { status: auth.status }
      );
    }

    await connectDB();

    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) {
      return Response.json(
        { success: false, message: "Blog article not found." },
        { status: 404 }
      );
    }

    try {
      revalidatePath("/blogs");
      if (deleted.slug) revalidatePath(`/blogs/${deleted.slug}`);
      revalidatePath("/");
      revalidatePath("/sitemap.xml");
    } catch {
      // Ignored in non-SSR environment
    }

    return Response.json({
      success: true,
      message: `Blog "${deleted.title}" deleted successfully.`,
    });
  } catch (error) {
    console.error("[blogController.deleteBlog]", error);
    return Response.json(
      { success: false, message: "Failed to delete blog." },
      { status: 500 }
    );
  }
}
