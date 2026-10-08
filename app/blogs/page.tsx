"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogPosts as initialBlogPosts, BlogPost, sortBlogsByDate } from "@/lib/data";
import {
  FaNewspaper,
  FaCalendarDays,
  FaClock,
  FaTag,
  FaMagnifyingGlass,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";

const DEFAULT_CATEGORIES = [
  "All",
  "Gulf Visas",
  "Qatar Visas",
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadBlogs() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setPosts(sortBlogsByDate<BlogPost>(json.data as BlogPost[]));
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

              {/* Search Bar */}
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
                      title="Clear search"
                    >
                      <FaXmark className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter Pills */}
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

        {/* Blog Posts Grid — Clean, Compact & Optimized */}
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
                className="mt-4 rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-600 transition-colors cursor-pointer"
              >
                Clear Search &amp; Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blogs/${post.slug || post.id}`}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs transition-all duration-300 hover:border-emerald-500/60 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                >
                  <div>
                    {/* Image Header with Category Badge */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
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

                    {/* Content Section */}
                    <div className="p-5">
                      {/* Meta: Date & Read Time */}
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-2.5">
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

                      {/* Title */}
                      <h2 className="text-base sm:text-lg font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug mb-2.5">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal mb-4">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                            >
                              <FaTag className="w-2 h-2 text-slate-400" />
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="text-[10px] text-slate-400 self-center font-semibold">
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
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

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
