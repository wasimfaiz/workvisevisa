"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FaNewspaper,
  FaCalendarDays,
  FaClock,
  FaArrowRight,
  FaTag,
} from "react-icons/fa6";
import { blogPosts as fallbackPosts, BlogPost, sortBlogsByDate } from "@/lib/data";

export default function Blogs() {
  const [posts, setPosts] = useState<BlogPost[]>(() => sortBlogsByDate(fallbackPosts).slice(0, 6));

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            const hydrated = json.data.map((post: BlogPost) => {
              const matched = fallbackPosts.find(
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
            const sorted = sortBlogsByDate<BlogPost>(hydrated as BlogPost[]);
            setPosts(sorted.slice(0, 6));
          }
        }
      } catch (err) {
        console.error("Error loading homepage blogs:", err);
      }
    }
    load();
  }, []);

  return (
    <section id="blogs" className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 shadow-xs">
            <FaNewspaper className="w-3.5 h-3.5 text-emerald-600" />
            Visa &amp; Migration Insights
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Latest News &amp; Overseas Career Guides
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Stay updated on work permit policies, embassy requirements, trade test centers, and overseas employment rules.
          </p>
        </motion.div>

        {/* Blog Cards Grid (3-column optimized grid) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white overflow-hidden shadow-xs transition-all duration-300 hover:border-emerald-500/60 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <div>
                {/* Image & Category Overlay */}
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

                {/* Card Content */}
                <div className="p-5">
                  {/* Meta Bar: Date & Read Time */}
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

                  {/* Post Title */}
                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug mb-2">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal mb-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-2">
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

              {/* Card Footer Link */}
              <div className="px-5 pb-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/blogs/${post.slug || post.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors"
                >
                  <span>Read Full Guide</span>
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Insights Footer CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-emerald-600 hover:scale-[1.02] transition-all"
          >
            <span>Explore All {fallbackPosts.length} Visa &amp; Migration Guides</span>
            <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
