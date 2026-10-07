/* ================================================================
   lib/models/Blog.ts — Mongoose Model (MVC: Model layer)
   Stores dynamic blog posts, visa guides, and overseas career articles
   with full SEO meta tag support (meta title, description, keywords).
   ================================================================ */

import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  readTime: string;
  tags: string[];
  // SEO Meta fields
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalUrl?: string;
  published: boolean;
  featured: boolean;
  views: number;
  date: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
    category: { type: String, required: true, trim: true, default: "Gulf Visas" },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    image: {
      type: String,
      required: true,
      default: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    },
    author: { type: String, required: true, default: "WorkWise Editorial Team" },
    readTime: { type: String, required: true, default: "5 min read" },
    tags: { type: [String], default: [] },
    // SEO Meta fields
    metaTitle: { type: String, trim: true, default: "" },
    metaDescription: { type: String, trim: true, default: "" },
    metaKeywords: { type: String, trim: true, default: "" },
    canonicalUrl: { type: String, trim: true, default: "" },
    published: { type: Boolean, default: true, index: true },
    featured: { type: Boolean, default: false, index: true },
    views: { type: Number, default: 0 },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret: Record<string, unknown>) => {
        ret.id = (ret._id as { toString(): string }).toString();
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Prevent model re-compilation during hot reloads
const Blog: Model<IBlog> =
  (mongoose.models.Blog as Model<IBlog>) || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
