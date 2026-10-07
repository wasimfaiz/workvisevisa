"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MarkdownContent from "@/components/MarkdownContent";
import { blogPosts as initialBlogPosts, BlogPost, sortBlogsByDate } from "@/lib/data";
import {
  FaNewspaper,
  FaCalendarDays,
  FaClock,
  FaArrowRight,
  FaTag,
  FaMagnifyingGlass,
  FaWhatsapp,
  FaXmark,
  FaCheck,
  FaUserCheck,
  FaShareNodes,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const DEFAULT_CATEGORIES = [
  "All",
  "Gulf Visas",
  "Schengen Visa",
  "UK Immigration",
  "Driver Recruitment",
  "Work Permits",
  "GAMCA Medical",
  "Trade Testing",
];

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>(() => sortBlogsByDate(initialBlogPosts));
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadBlogs() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            const hydrated = json.data.map((post: BlogPost) => {
              const matched = initialBlogPosts.find(
                (p) =>
                  p.slug === post.slug ||
                  p.id === post.id ||
                  (p.title && post.title && p.title.toLowerCase().includes(post.title.substring(0, 20).toLowerCase())) ||
                  (post.slug && post.slug.includes("construction") && p.id === "blog-5") ||
                  (post.slug && post.slug.includes("hotel") && p.id === "blog-6") ||
                  (post.slug && post.slug.includes("delivery") && p.id === "blog-7") ||
                  (post.slug && post.slug.includes("neom") && p.id === "blog-8") ||
                  (post.slug && post.slug.includes("shutdown") && p.id === "blog-9") ||
                  (post.slug && post.slug.includes("grand-tours") && p.id === "blog-10") ||
                  (post.slug && post.slug.includes("gcc-unified") && p.id === "blog-10") ||
                  (post.slug && post.slug.includes("kuwait-work-visa") && p.id === "blog-11") ||
                  (post.slug && post.slug.includes("degree-attestation") && p.id === "blog-11") ||
                  (post.slug && post.slug.includes("wafid") && p.id === "blog-12") ||
                  (post.slug && post.slug.includes("gamca") && p.id === "blog-12") ||
                  (post.slug && post.slug.includes("heavy") && p.id === "blog-4") ||
                  (post.slug && post.slug.includes("caregiver") && p.id === "blog-3") ||
                  (post.slug && post.slug.includes("opportunity") && p.id === "blog-2") ||
                  (post.slug && post.slug.includes("blue-collar") && p.id === "blog-1")
              );
              if (matched && (!post.content || post.content.length < 800 || post.content.startsWith("## Overview:"))) {
                return { ...post, content: matched.content, slug: post.slug || matched.slug };
              }
              return post;
            });
            setPosts(sortBlogsByDate<BlogPost>(hydrated as BlogPost[]));
          }
        }
      } catch (err) {
        console.error("Failed to load dynamic blogs:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadBlogs();
  }, []);

  const categories = Array.from(
    new Set(["All", ...posts.map((p) => p.category).filter(Boolean), ...DEFAULT_CATEGORIES.slice(1)])
  );

  const filteredPosts = sortBlogsByDate(
    posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    })
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-16 sm:pt-20 pb-20">
        {/* Page Hero Header — Standard Site-Wide UI */}
        <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/80 via-white to-slate-50 pt-8 sm:pt-12 pb-12 sm:pb-16 text-slate-900 border-b border-slate-200/80 shadow-xs">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-4 shadow-sm">
                <FaNewspaper className="w-3.5 h-3.5 text-emerald-600" />
                Visa &amp; Migration Insights
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto">
                Latest News &amp; Overseas Career Guides
              </h1>
              <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
                Stay updated on work permit policies, embassy requirements, trade test centers, and overseas employment rules.
              </p>

              {/* Search Bar matching jobs page */}
              <div className="mt-10 max-w-2xl mx-auto relative">
                <div className="relative flex items-center rounded-2xl bg-white border border-slate-200 p-2 shadow-lg shadow-slate-200/50 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all">
                  <FaMagnifyingGlass className="w-5 h-5 text-emerald-600 ml-4 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search articles, visa guides, trade roles, or medical rules..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-slate-900 placeholder-slate-400 outline-none font-medium"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="p-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                    >
                      <FaXmark className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter Pills matching site-wide style */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                      activeCategory === cat
                        ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/20"
                        : "bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-xs"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <p className="text-lg font-bold text-slate-700">
                No articles found matching your query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-600 transition-colors"
              >
                Clear Search & Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs transition-all duration-300 hover:border-emerald-500/60 hover:shadow-lg hover:-translate-y-1"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80";
                        }}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="rounded-full bg-slate-900/90 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-bold text-emerald-400 border border-slate-700 shadow-xs">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-2">
                        <span className="flex items-center gap-1">
                          <FaCalendarDays className="w-3 h-3 text-emerald-600" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <FaClock className="w-3 h-3 text-emerald-600" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug mb-2">
                        {post.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal mb-3.5">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {(post.tags || []).slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                          >
                            <FaTag className="w-2 h-2 text-slate-400" />
                            {tag}
                          </span>
                        ))}
                        {post.tags && post.tags.length > 2 && (
                          <span className="text-[10px] text-slate-400 self-center font-semibold">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="px-5 pb-4 pt-3 flex items-center justify-between border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/blogs/${post.slug || post.id}`}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-bold text-white shadow-2xs hover:bg-emerald-600 transition-colors"
                      >
                        <span>Read Guide</span>
                        <FaArrowRight className="w-3 h-3" />
                      </Link>

                      <button
                        onClick={() => setSelectedPost(post)}
                        className="px-2.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                        title="Quick View"
                      >
                        <span>Preview</span>
                      </button>
                    </div>

                    <a
                      href={`https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20have%20a%20question%20regarding%20"${encodeURIComponent(
                        post.title
                      )}"`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5" />
                      <span>Ask</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bottom Consultation Banner */}
          <div className="mt-20 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Need Help With Your Work Visa Application?
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                Connect directly with WorkWise Visa specialists for document attestation, trade test registration, and embassy processing.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20would%20like%20to%20book%20a%20free%20consultation!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Book Free Consultation on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Article Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-10 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <FaXmark className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800">
                {selectedPost.category}
              </span>
              <Link
                href={`/blogs/${selectedPost.slug || selectedPost.id}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 underline ml-2"
              >
                <span>Open Dedicated Full Page</span>
                <FaArrowUpRightFromSquare className="w-3 h-3" />
              </Link>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 mb-4 leading-tight">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-6 border-b border-slate-100 pb-4">
              <span>By {selectedPost.author}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80 w-full bg-slate-100">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80";
                }}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Render with MarkdownContent */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <p className="font-semibold text-slate-800 text-sm sm:text-base leading-relaxed">
                  {selectedPost.excerpt}
                </p>
              </div>

              {selectedPost.content ? (
                <div className="pt-2">
                  <MarkdownContent content={selectedPost.content} />
                </div>
              ) : (
                <div className="space-y-4 text-slate-700 text-sm">
                  <p>
                    Navigating foreign work permits requires strict adherence to embassy documentation, medical clearances (such as GAMCA), trade test skill certificates, and employer contract verifications.
                  </p>
                  <h4 className="text-base font-bold text-slate-900 pt-2">Key Highlights & Action Checklist:</h4>
                  <ul className="space-y-2 list-none pl-0 text-sm">
                    <li className="flex items-start gap-2 text-slate-700">
                      <FaCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>Verify employer sponsorship terms & accommodation provisions before contract signing.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <FaCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>Complete HRD / MEA degree & trade certificate apostille attestation.</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-700">
                      <FaCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>Ensure valid passport with at least 6 months validity and PCC (Police Clearance).</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={`https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20read%20your%20article%20"${encodeURIComponent(
                  selectedPost.title
                )}"%20and%20want%20to%20apply!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-500/25 hover:bg-emerald-400 transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Apply via WhatsApp Now</span>
              </a>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  href={`/blogs/${selectedPost.slug || selectedPost.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white hover:bg-slate-800 transition"
                >
                  <span>Full Article Page</span>
                  <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-full sm:w-auto rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
