import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MarkdownContent from "@/components/MarkdownContent";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/lib/models/Blog";
import { blogPosts as fallbackPosts, sortBlogsByDate } from "@/lib/data";
import {
  FaCalendarDays,
  FaClock,
  FaTag,
  FaWhatsapp,
  FaArrowLeft,
  FaUserCheck,
  FaFire,
  FaChevronRight,
} from "react-icons/fa6";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getBlog(slug: string) {
  const decodedSlug = decodeURIComponent(slug).trim().toLowerCase();

  // Find corresponding rich fallback first
  const staticFound = fallbackPosts.find(
    (p) =>
      (p.slug && p.slug.toLowerCase() === decodedSlug) ||
      p.id.toLowerCase() === decodedSlug ||
      p.id === `blog-${decodedSlug}` ||
      (decodedSlug.includes("police-clearance") && p.id === "blog-15") ||
      (decodedSlug.includes("pcc") && p.id === "blog-15") ||
      (decodedSlug.includes("takamol") && p.id === "blog-14") ||
      (decodedSlug.includes("skill-verification") && p.id === "blog-14") ||
      (decodedSlug.includes("qvc") && p.id === "blog-13") ||
      (decodedSlug.includes("qatar-work-visa") && p.id === "blog-13") ||
      (decodedSlug.includes("wafid") && p.id === "blog-12") ||
      (decodedSlug.includes("gamca") && p.id === "blog-12") ||
      (decodedSlug.includes("kuwait-work-visa") && p.id === "blog-11") ||
      (decodedSlug.includes("degree-attestation") && p.id === "blog-11") ||
      (decodedSlug.includes("grand-tours") && p.id === "blog-10") ||
      (decodedSlug.includes("gcc-unified") && p.id === "blog-10") ||
      (decodedSlug.includes("shutdown") && p.id === "blog-9") ||
      (decodedSlug.includes("plant-turnaround") && p.id === "blog-9") ||
      (decodedSlug.includes("neom") && p.id === "blog-8") ||
      (decodedSlug.includes("megaprojects") && p.id === "blog-8") ||
      (decodedSlug.includes("delivery") && p.id === "blog-7") ||
      (decodedSlug.includes("rider") && p.id === "blog-7") ||
      (decodedSlug.includes("warehouse") && p.id === "blog-7") ||
      (decodedSlug.includes("hotel") && p.id === "blog-6") ||
      (decodedSlug.includes("hospitality") && p.id === "blog-6") ||
      (decodedSlug.includes("construction") && p.id === "blog-5") ||
      (decodedSlug.includes("mep") && p.id === "blog-5") ||
      (decodedSlug.includes("heavy") && p.id === "blog-4") ||
      (decodedSlug.includes("caregiver") && p.id === "blog-3") ||
      (decodedSlug.includes("opportunity-card") && p.id === "blog-2") ||
      (decodedSlug.includes("germany") && p.id === "blog-2") ||
      (decodedSlug.includes("blue-collar") && p.id === "blog-1") ||
      (decodedSlug.includes("uae-saudi") && p.id === "blog-1")
  );

  try {
    await connectDB();
    const blog = await Blog.findOne({
      $or: [
        { slug: decodedSlug },
        { slug: slug },
        { title: { $regex: `^${decodedSlug.replace(/-/g, " ")}$`, $options: "i" } },
        { _id: slug.match(/^[0-9a-fA-F]{24}$/) ? slug : null },
      ].filter(Boolean),
    }).lean();

    if (blog) {
      // If DB has short stub content (<800 chars or placeholder) and fallback has rich content, prefer the rich content
      const contentToUse =
        blog.content && blog.content.length > 800 && !blog.content.startsWith("## Overview:")
          ? blog.content
          : staticFound?.content || blog.content;

      return {
        ...blog,
        content: contentToUse,
        id: (blog._id as unknown as { toString(): string }).toString(),
        _id: undefined,
      };
    }
  } catch (err) {
    console.error("Error loading blog by slug:", err);
  }

  // Fallback to static data
  if (staticFound) return staticFound;

  return null;
}

async function getRecentBlogs(currentSlug: string) {
  const decoded = decodeURIComponent(currentSlug).trim().toLowerCase();
  try {
    await connectDB();
    const blogs = await Blog.find({ published: { $ne: false } }).lean();

    if (blogs && blogs.length > 0) {
      const filtered = blogs.filter((b) => {
        const bSlug = (b.slug || "").toLowerCase();
        return bSlug !== decoded && b._id.toString() !== decoded;
      });
      if (filtered.length > 0) {
        const sorted = sortBlogsByDate(
          filtered.map((b) => ({
            ...b,
            id: (b._id as unknown as { toString(): string }).toString(),
            _id: undefined,
          }))
        );
        return sorted.slice(0, 4);
      }
    }
  } catch (err) {
    console.error("Error loading recent blogs:", err);
  }

  // Fallback to static data
  return sortBlogsByDate(fallbackPosts)
    .filter(
      (p) =>
        p.slug?.toLowerCase() !== decoded &&
        p.id.toLowerCase() !== decoded &&
        !decoded.includes(p.id)
    )
    .slice(0, 4);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Article Not Found | WorkWise Visa",
    };
  }

  const title = (blog as any).metaTitle || blog.title;
  const description = (blog as any).metaDescription || blog.excerpt;
  const keywords = (blog as any).metaKeywords || (blog.tags ? blog.tags.join(", ") : "");
  const image = blog.image || "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80";
  const canonicalUrl = `https://www.workwisevisa.com/blogs/${blog.slug || slug}`;

  return {
    title: `${title} | WorkWise Visa`,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      images: [{ url: image }],
      type: "article",
      publishedTime: (blog as any).date,
      authors: [blog.author || "WorkWise Editorial Team"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const recentBlogs = await getRecentBlogs(slug);
  const article = blog as any;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt || article.metaDescription,
    "image": article.image || "https://www.workwisevisa.com/images/workwise_logo.png",
    "datePublished": article.date,
    "dateModified": article.date,
    "author": {
      "@type": "Organization",
      "name": article.author || "WorkWise Editorial Team",
      "url": "https://www.workwisevisa.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "WorkWise Visa",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.workwisevisa.com/images/workwise_logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.workwisevisa.com/blogs/${article.slug || slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.workwisevisa.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs & Visa Guides",
        "item": "https://www.workwisevisa.com/blogs",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://www.workwisevisa.com/blogs/${article.slug || slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* Article Breadcrumb & Category Bar */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-6">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition mb-6"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles & Guides</span>
          </Link>

          <div>
            <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-3 shadow-2xs">
              {article.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Author & Meta Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 mt-4 pb-6 border-b border-slate-200">
              <span className="flex items-center gap-1.5 text-slate-800 font-bold">
                <FaUserCheck className="w-3.5 h-3.5 text-emerald-600" />
                {article.author || "WorkWise Editorial Team"}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="w-3.5 h-3.5 text-emerald-600" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FaClock className="w-3.5 h-3.5 text-emerald-600" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Main Content (8 cols) + Sticky Sidebar (4 cols) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* ── Left / Main Content Column (lg:col-span-8) ── */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Cover Image */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-72 sm:h-96 w-full bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main White Article Container */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 shadow-sm space-y-8">
                {/* Key Summary Excerpt Callout */}
                <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 shadow-xs">
                  <p className="text-sm sm:text-base font-semibold text-emerald-950 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Markdown Body */}
                <div>
                  {article.content ? (
                    <MarkdownContent content={article.content} />
                  ) : (
                    <div className="space-y-4">
                      <p className="text-slate-700 text-base leading-relaxed">
                        Navigating foreign work permits requires strict adherence to embassy documentation, medical clearances (such as GAMCA), trade test skill certificates, and employer contract verifications.
                      </p>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-400 mr-1">TOPICS:</span>
                    {article.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        <FaTag className="w-2.5 h-2.5 text-slate-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* WhatsApp Consultation Action Box */}
                <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Have Questions Regarding This Visa Guide?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Chat directly with WorkWise Visa immigration and trade testing advisors on WhatsApp.
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20read%20your%20article%20"${encodeURIComponent(
                      article.title
                    )}"%20and%20want%20to%20apply!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-3 text-sm shadow-md transition-all shrink-0 cursor-pointer"
                  >
                    <FaWhatsapp className="w-5 h-5 text-slate-950" />
                    <span>Ask Expert on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right Column / Sticky Sidebar (lg:col-span-4) ── */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              {/* Recent & Trending Guides Widget */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm">
                <div className="flex items-center gap-2.5 mb-5 pb-3.5 border-b border-slate-100">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-200/80">
                    <FaFire className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-extrabold text-slate-900">
                      Recent & Trending Guides
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Latest overseas career updates
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {recentBlogs.map((item: any) => (
                    <Link
                      key={item.id || item.slug}
                      href={`/blogs/${item.slug || item.id}`}
                      className="group flex gap-3.5 p-2.5 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/70"
                    >
                      <div className="relative h-18 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
                        <img
                          src={
                            item.image ||
                            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80"
                          }
                          alt={item.title}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col justify-center min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider mb-1 line-clamp-1">
                          {item.category}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1.5 font-medium">
                          <span>{item.date}</span>
                          <span>•</span>
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 text-center">
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition"
                  >
                    <span>View All Articles & Insights</span>
                    <FaChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
