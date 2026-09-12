"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogPosts, BlogPost } from "@/lib/data";
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
} from "react-icons/fa6";

const categories = ["All", "Gulf Visas", "Schengen Visa", "UK Immigration", "Driver Recruitment"];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-slate-50 min-h-screen">
        {/* Page Hero Header */}
        <section className="relative py-16 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 backdrop-blur-md">
              <FaNewspaper className="w-3.5 h-3.5 text-emerald-400" />
              Immigration & Career Knowledge Base
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">
              WorkWise Visa Blog & Insights
            </h1>
            <p className="mt-4 mx-auto max-w-3xl text-slate-300 text-base sm:text-xl font-normal leading-relaxed">
              Expert guides, embassy policy updates, trade testing tips, and step-by-step overseas work permit procedures for Gulf, Schengen, UK, and North America.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto relative">
              <div className="relative flex items-center">
                <FaMagnifyingGlass className="absolute left-4 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles, visa guides, trade roles, or medical rules..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-800/90 pl-11 pr-4 py-3.5 text-sm text-white placeholder-slate-400 shadow-lg focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-slate-400 hover:text-white"
                  >
                    <FaXmark className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
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
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-emerald-500/60 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80";
                        }}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-slate-900/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-emerald-400 border border-slate-700 shadow-md">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <FaCalendarDays className="w-3.5 h-3.5 text-emerald-600" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <FaClock className="w-3.5 h-3.5 text-emerald-600" />
                          {post.readTime}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <FaUserCheck className="w-3.5 h-3.5 text-slate-400" />
                          {post.author}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-3">
                        {post.title}
                      </h2>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600"
                          >
                            <FaTag className="w-2.5 h-2.5 text-slate-400" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex items-center justify-between border-t border-slate-100 pt-5">
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:bg-emerald-600 transition-colors cursor-pointer"
                    >
                      <span>Read Article & Guide</span>
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href="https://wa.me/918130161603?text=Hi%20WorkWise%20Visa,%20I%20have%20a%20question%20regarding%20your%20blog%20article!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>Ask Expert</span>
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
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-10 shadow-2xl my-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <FaXmark className="w-5 h-5" />
            </button>

            <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-3">
              {selectedPost.category}
            </span>

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

            <div className="prose prose-slate max-w-none text-sm sm:text-base text-slate-600 leading-relaxed space-y-4">
              <p className="font-semibold text-slate-800 text-base sm:text-lg">
                {selectedPost.excerpt}
              </p>
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

              <button
                onClick={() => setSelectedPost(null)}
                className="w-full sm:w-auto rounded-xl border border-slate-200 px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
