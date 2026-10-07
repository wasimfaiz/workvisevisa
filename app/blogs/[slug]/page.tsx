import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/lib/models/Blog";
import { blogPosts as fallbackPosts } from "@/lib/data";
import {
  FaCalendarDays,
  FaClock,
  FaTag,
  FaWhatsapp,
  FaArrowLeft,
  FaShareNodes,
  FaCheck,
  FaUserCheck,
  FaGlobe,
  FaBookOpen,
} from "react-icons/fa6";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getBlog(slug: string) {
  try {
    await connectDB();
    const blog = await Blog.findOne({
      $or: [{ slug: slug }, { _id: slug.match(/^[0-9a-fA-F]{24}$/) ? slug : null }],
    }).lean();

    if (blog) {
      return {
        ...blog,
        id: (blog._id as unknown as { toString(): string }).toString(),
        _id: undefined,
      };
    }
  } catch (err) {
    console.error("Error loading blog by slug:", err);
  }

  // Fallback to static data
  const staticFound = fallbackPosts.find((p) => p.id === slug || p.id === `blog-${slug}`);
  if (staticFound) return staticFound;

  return null;
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

  return {
    title: `${title} | WorkWise Visa`,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      type: "article",
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

  const article = blog as any;

  return (
    <>
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-20 bg-slate-50 min-h-screen">
        {/* Article Breadcrumb & Category Bar */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-6 pb-4">
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

        {/* Featured Cover Image */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mb-8">
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-72 sm:h-96 w-full bg-slate-100">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Body Content */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            {/* Key Summary Excerpt Callout */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <p className="text-sm sm:text-base font-semibold text-emerald-950 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Main Text / Markdown Output */}
            <div className="prose prose-slate max-w-none text-base sm:text-lg text-slate-700 leading-relaxed whitespace-pre-wrap">
              {article.content ? (
                article.content
              ) : (
                <div className="space-y-4">
                  <p>
                    Navigating foreign work permits requires strict adherence to embassy documentation, medical clearances (such as GAMCA), trade test skill certificates, and employer contract verifications.
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 pt-2">Key Highlights & Action Checklist:</h3>
                  <ul className="space-y-2 list-none pl-0 text-sm sm:text-base">
                    <li className="flex items-start gap-2 text-slate-700">
                      <FaCheck className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span>Verify employer sponsorship terms & accommodation provisions before contract signing.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <FaCheck className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span>Complete HRD / MEA degree & trade certificate apostille attestation.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <FaCheck className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span>Ensure valid passport with at least 6 months validity and PCC (Police Clearance).</span>
                    </li>
                  </ul>
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
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
