"use client";

import { motion } from "motion/react";
import {
  FaNewspaper,
  FaCalendarDays,
  FaClock,
  FaArrowRight,
  FaTag,
} from "react-icons/fa6";
import { blogPosts } from "@/lib/data";

export default function Blogs() {
  return (
    <section id="blogs" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-4 shadow-xs">
            <FaNewspaper className="w-3.5 h-3.5 text-emerald-600" />
            Visa & Migration Insights
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            Latest News & Overseas Career Guides
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Stay updated on work permit policies, embassy requirements, trade test centers, and overseas employment rules.
          </p>
        </motion.div>

        {/* Blog Cards Grid (2x2 / 4-card grid) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-emerald-500/60 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                {/* Image & Category Overlay */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-slate-900/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-emerald-400 border border-slate-700 shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  {/* Meta Bar: Date & Read Time */}
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
                  </div>

                  {/* Post Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        <FaTag className="w-2.5 h-2.5 text-slate-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 group-hover:text-emerald-600 transition-colors"
                >
                  <span>Read Full Article & Guides</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
