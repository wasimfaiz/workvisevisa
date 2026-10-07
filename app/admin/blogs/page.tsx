"use client";

/* ================================================================
   app/admin/blogs/page.tsx — WorkWise Visa Blog & SEO Studio
   Professional publishing platform for Admin & Content Editors:
   - Local Device Image Upload + Cloud URL + Presets selector
   - Complete SEO Suite: Meta Title, Meta Description, Focus Keywords,
     Canonical URL, and Live Google Search Result Snippet Preview.
   - Comprehensive Heading & Formatting Suite: H1, H2, H3, H4, Bold,
     Italic, Underline, Strikethrough, Lists, Tables, Callouts, FAQs.
   - Dynamic MongoDB CRUD + Live website synchronization.
   ================================================================ */

import { useState, useEffect, FormEvent, useCallback, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Newspaper,
  Plus,
  RefreshCw,
  Search,
  Calendar,
  Clock,
  Trash2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  X,
  LayoutGrid,
  List,
  Eye,
  Share2,
  Check,
  ChevronRight,
  Sparkles,
  Award,
  Layers,
  FileText,
  Tag,
  User,
  Globe,
  ExternalLink,
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  ListOrdered,
  List as ListIcon,
  Quote,
  CheckSquare,
  Image as ImageIcon,
  MessageCircle,
  HelpCircle,
  SearchCode,
  Link2,
  Table as TableIcon,
  Minus,
  Code,
  UploadCloud,
  FolderUp,
  Monitor,
  Smartphone,
  Lightbulb,
} from "lucide-react";

import { EmployeePermissions } from "@/lib/types/rbac";
import AdminSidebar from "@/components/AdminSidebar";

// ── Types ─────────────────────────────────────────────────────────

export interface BlogItem {
  id: string;
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
  createdAt?: string;
  updatedAt?: string;
}

interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  permissions?: EmployeePermissions;
}

const CATEGORIES = [
  "Gulf Visas",
  "Schengen Visa",
  "UK Immigration",
  "Driver Recruitment",
  "Work Permits",
  "GAMCA Medical",
  "Trade Testing",
  "Documentation & Attestation",
];

const PRESET_IMAGES = [
  {
    label: "Gulf / Dubai Skyline",
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "European Schengen",
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Healthcare & Caregiver",
    url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Transport & Driving",
    url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Construction & Engineering",
    url: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Hospitality & Hotel",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
];

const SUGGESTED_TAGS = [
  "Gulf Visas",
  "GAMCA Medical",
  "Work Permits",
  "Opportunity Card",
  "Germany",
  "UK Visa",
  "Caregiver Jobs",
  "Heavy Driver",
  "Trade Testing",
  "Attestation",
];

const DEFAULT_BLOG_FORM: Omit<BlogItem, "id" | "views" | "createdAt" | "updatedAt"> = {
  title: "",
  slug: "",
  category: "Gulf Visas",
  excerpt: "",
  content: "",
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  author: "WorkWise Editorial Team",
  readTime: "5 min read",
  tags: ["Gulf Visas", "Work Permits"],
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  canonicalUrl: "",
  published: true,
  featured: false,
  date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
};

function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function calculateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return `${minutes} min read`;
}

// ── Main Admin Blogs Component ─────────────────────────────────────

export default function AdminBlogsPage() {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Filters & UI State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft" | "featured">("all");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Modal / Editor State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogItem | null>(null);
  const [form, setForm] = useState(DEFAULT_BLOG_FORM);
  const [tagInput, setTagInput] = useState("");
  const [activeTab, setActiveTab] = useState<"editor" | "seo" | "preview">("editor");
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
  const [formLoading, setFormLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Cover Image Mode: "upload" | "url" | "presets"
  const [coverImageMode, setCoverImageMode] = useState<"upload" | "url" | "presets">("upload");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const coverFileInputRef = useRef<HTMLInputElement | null>(null);

  // Inline Image Upload State for Editor
  const [isInlineModalOpen, setIsInlineModalOpen] = useState(false);
  const [inlineImageUrl, setInlineImageUrl] = useState("");
  const [inlineImageAlt, setInlineImageAlt] = useState("");
  const [uploadingInline, setUploadingInline] = useState(false);
  const inlineFileInputRef = useRef<HTMLInputElement | null>(null);

  // Delete & Preview modal
  const [deletingBlog, setDeletingBlog] = useState<BlogItem | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [previewingBlog, setPreviewingBlog] = useState<BlogItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // 1. Auth check
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) {
          router.replace("/admin");
          return;
        }
        const data = await res.json();
        if (!data.user) {
          router.replace("/admin");
          return;
        }
        setCurrentUser(data.user);
      } catch {
        router.replace("/admin");
      }
    }
    checkAuth();
  }, [router]);

  // 2. Fetch blogs
  const fetchBlogs = useCallback(async () => {
    setRefreshing(true);
    try {
      const res = await fetch("/api/blogs?includeDrafts=true");
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          setBlogs(json.data);
        }
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      fetchBlogs();
    }
  }, [currentUser, fetchBlogs]);

  // Permissions
  const isSuper = currentUser?.role === "superadmin" || currentUser?.email === "wasim@yastudy.com";
  const canCreate = isSuper || Boolean(currentUser?.permissions?.blogs?.create);
  const canEdit = isSuper || Boolean(currentUser?.permissions?.blogs?.edit);
  const canDelete = isSuper || Boolean(currentUser?.permissions?.blogs?.delete);

  // Open Create Modal
  const handleOpenCreate = () => {
    setEditingBlog(null);
    setForm({
      ...DEFAULT_BLOG_FORM,
      author: currentUser?.name || "WorkWise Editorial Team",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    });
    setTagInput("");
    setActiveTab("editor");
    setCoverImageMode("upload");
    setFormMessage(null);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEdit = (blog: BlogItem) => {
    setEditingBlog(blog);
    setForm({
      title: blog.title,
      slug: blog.slug,
      category: blog.category,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      author: blog.author,
      readTime: blog.readTime,
      tags: blog.tags || [],
      metaTitle: blog.metaTitle || blog.title,
      metaDescription: blog.metaDescription || blog.excerpt,
      metaKeywords: blog.metaKeywords || (blog.tags ? blog.tags.join(", ") : ""),
      canonicalUrl: blog.canonicalUrl || "",
      published: blog.published,
      featured: blog.featured,
      date: blog.date,
    });
    setTagInput("");
    setActiveTab("editor");
    setCoverImageMode("upload");
    setFormMessage(null);
    setIsModalOpen(true);
  };

  // Auto-fill SEO button
  const handleAutoFillSEO = () => {
    setForm((prev) => ({
      ...prev,
      metaTitle: prev.metaTitle || prev.title,
      metaDescription: prev.metaDescription || prev.excerpt,
      metaKeywords: prev.metaKeywords || (prev.tags ? prev.tags.join(", ") : ""),
    }));
  };

  // Tag helper
  const handleAddTag = (tagToAdd: string) => {
    const clean = tagToAdd.trim().replace(/^#/, "");
    if (clean && !form.tags.includes(clean)) {
      setForm((prev) => {
        const nextTags = [...prev.tags, clean];
        return {
          ...prev,
          tags: nextTags,
          metaKeywords: prev.metaKeywords ? `${prev.metaKeywords}, ${clean}` : nextTags.join(", "),
        };
      });
    }
    setTagInput("");
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tagToRemove),
    }));
  };

  // Upload file helper
  const uploadFileToServer = async (file: File): Promise<string> => {
    const fd = new FormData();
    fd.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || "Failed to upload image.");
    }
    return data.url;
  };

  // Handle Cover File Upload (File input change or Drop)
  const handleCoverFileSelected = async (file: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (PNG, JPG, WebP, etc.)");
      return;
    }

    setUploadingCover(true);
    try {
      const publicUrl = await uploadFileToServer(file);
      setForm((prev) => ({ ...prev, image: publicUrl }));
    } catch (err: unknown) {
      const error = err as Error;
      alert(error.message || "Error uploading image.");
    } finally {
      setUploadingCover(false);
    }
  };

  // Handle Inline Editor Image Upload
  const handleInlineFileSelected = async (file: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    setUploadingInline(true);
    try {
      const publicUrl = await uploadFileToServer(file);
      setInlineImageUrl(publicUrl);
    } catch (err: unknown) {
      const error = err as Error;
      alert(error.message || "Error uploading inline image.");
    } finally {
      setUploadingInline(false);
    }
  };

  // Insert formatting helper in editor
  const insertFormatting = (prefix: string, suffix: string = "", placeholder: string = "") => {
    const textarea = document.getElementById("blog-content-editor") as HTMLTextAreaElement | null;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = textarea.value.substring(start, end) || placeholder;
    const replacement = `${prefix}${selected}${suffix}`;

    const newContent =
      textarea.value.substring(0, start) +
      replacement +
      textarea.value.substring(end);

    setForm((prev) => ({
      ...prev,
      content: newContent,
      readTime: calculateReadTime(newContent),
    }));

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        start + prefix.length + selected.length
      );
    }, 50);
  };

  // Insert Templates
  const insertTemplate = (type: "faq" | "table" | "callout" | "checklist" | "cta") => {
    let snippet = "";
    if (type === "faq") {
      snippet = `\n\n### Frequently Asked Questions (FAQs)\n**Q1: What are the eligibility criteria for this visa?**\nA: Candidates must possess a valid passport, authenticated trade certificates, and GAMCA medical clearance.\n\n**Q2: How long does the processing take?**\nA: Standard embassy endorsement and biometric processing typically take 15 to 30 working days.\n`;
    } else if (type === "table") {
      snippet = `\n\n| Job Trade / Role | Country | Average Monthly Salary | Working Hours |\n| :--- | :--- | :--- | :--- |\n| Heavy Bus Driver | UAE 🇦🇪 | 3,200 - 4,500 AED | 8 hrs + Overtime |\n| Pipe Welder 6G | Saudi Arabia 🇸🇦 | 2,800 - 3,800 SAR | 8 hrs + Overtime |\n| Healthcare Caregiver | UK 🇬🇧 | £2,200 - £2,800 | 40 hrs / week |\n`;
    } else if (type === "callout") {
      snippet = `\n\n> 💡 **Important Immigration Advisory:**\n> Always ensure your employer offer letter is attested by the Ministry of Labor and avoid unauthorized sub-agents. WorkWise Visa provides 100% genuine embassy documentation.\n`;
    } else if (type === "checklist") {
      snippet = `\n\n### Mandatory Document Checklist:\n- [ ] Valid Passport (minimum 6 months validity)\n- [ ] 12 Passport Size Photographs with White Background\n- [ ] GAMCA / Embassy Medical Clearance Slip\n- [ ] Police Clearance Certificate (PCC)\n- [ ] Attested Educational & Trade Experience Certificates\n`;
    } else if (type === "cta") {
      snippet = `\n\n---\n### Need Free Visa Guidance & Application Support?\nConnect directly with WorkWise Visa specialists for trade testing booking and embassy appointments.\n👉 **WhatsApp Consultation:** [+91 8130161603](https://wa.me/918130161603)\n---\n`;
    }
    insertFormatting(snippet, "");
  };

  // Submit create / edit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      setFormMessage({ type: "error", text: "Please enter a blog title." });
      setActiveTab("editor");
      return;
    }
    if (!form.excerpt.trim()) {
      setFormMessage({ type: "error", text: "Please enter a short excerpt / summary." });
      setActiveTab("editor");
      return;
    }
    if (!form.content.trim()) {
      setFormMessage({ type: "error", text: "Please enter the full article content." });
      setActiveTab("editor");
      return;
    }

    setFormLoading(true);
    setFormMessage(null);

    // Auto-fill SEO if left empty
    const payload = {
      ...form,
      metaTitle: form.metaTitle?.trim() || form.title.trim(),
      metaDescription: form.metaDescription?.trim() || form.excerpt.trim(),
      metaKeywords: form.metaKeywords?.trim() || (form.tags ? form.tags.join(", ") : ""),
    };

    try {
      const url = editingBlog ? `/api/blogs/${editingBlog.id}` : "/api/blogs";
      const method = editingBlog ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to save blog post.");
      }

      setFormMessage({
        type: "success",
        text: editingBlog ? "Blog and SEO metadata updated successfully!" : "Blog published with SEO metadata successfully!",
      });

      await fetchBlogs();

      setTimeout(() => {
        setIsModalOpen(false);
        setEditingBlog(null);
      }, 700);
    } catch (err: unknown) {
      const error = err as Error;
      setFormMessage({ type: "error", text: error.message || "An error occurred." });
    } finally {
      setFormLoading(false);
    }
  };

  // Quick toggle published status
  const handleTogglePublish = async (blog: BlogItem) => {
    if (!canEdit) return;
    try {
      const res = await fetch(`/api/blogs/${blog.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !blog.published }),
      });
      if (res.ok) {
        setBlogs((prev) =>
          prev.map((b) => (b.id === blog.id ? { ...b, published: !b.published } : b))
        );
      }
    } catch (err) {
      console.error("Failed to toggle publish status", err);
    }
  };

  // Quick toggle featured status
  const handleToggleFeatured = async (blog: BlogItem) => {
    if (!canEdit) return;
    try {
      const res = await fetch(`/api/blogs/${blog.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured: !blog.featured }),
      });
      if (res.ok) {
        setBlogs((prev) =>
          prev.map((b) => (b.id === blog.id ? { ...b, featured: !b.featured } : b))
        );
      }
    } catch (err) {
      console.error("Failed to toggle featured status", err);
    }
  };

  // Delete Blog
  const handleDeleteConfirm = async () => {
    if (!deletingBlog) return;
    setDeleteLoading(true);
    try {
      const res = await fetch(`/api/blogs/${deletingBlog.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete article.");
      }
      setBlogs((prev) => prev.filter((b) => b.id !== deletingBlog.id));
      setDeletingBlog(null);
    } catch (err: unknown) {
      const error = err as Error;
      alert(error.message || "Could not delete article.");
    } finally {
      setDeleteLoading(false);
    }
  };

  // Copy link
  const handleCopyLink = (blog: BlogItem) => {
    const url = `${window.location.origin}/blogs`;
    navigator.clipboard.writeText(url);
    setCopiedId(blog.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered list
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.tags && blog.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesCat =
        selectedCategory === "All" || blog.category === selectedCategory;

      const matchesStatus =
        statusFilter === "all"
          ? true
          : statusFilter === "published"
          ? blog.published
          : statusFilter === "draft"
          ? !blog.published
          : blog.featured;

      return matchesSearch && matchesCat && matchesStatus;
    });
  }, [blogs, searchQuery, selectedCategory, statusFilter]);

  // Metric counts
  const publishedCount = blogs.filter((b) => b.published).length;
  const draftsCount = blogs.filter((b) => !b.published).length;
  const featuredCount = blogs.filter((b) => b.featured).length;
  const totalViews = blogs.reduce((acc, b) => acc + (b.views || 0), 0);

  // SEO Snippet calculations
  const effectiveMetaTitle = form.metaTitle || form.title || "Article Title | WorkWise Visa";
  const effectiveMetaDesc =
    form.metaDescription ||
    form.excerpt ||
    "Read comprehensive immigration guidelines, embassy rules, and trade test procedures on WorkWise Visa.";
  const effectiveSlug = form.slug || generateSlug(form.title) || "article-url";

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-5 h-5 animate-spin text-emerald-400" />
          <span className="font-medium text-sm">Authenticating session...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* ── UNIFIED RESPONSIVE SIDEBAR ─────────────────────────────────── */}
      <AdminSidebar currentUser={currentUser} counts={{ blogs: blogs.length }} />

      {/* ── MAIN CONTENT CONTAINER ────────────────────────────────────── */}
      <main className="flex-1 min-w-0 flex flex-col min-h-screen overflow-x-hidden">
        {/* Top Header Bar */}
        <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sticky top-0 z-20 shadow-xs">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 mb-1">
              <Newspaper className="w-4 h-4" />
              <span>CONTENT & SEO PUBLISHING STUDIO</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Blog & Article Management
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Draft, upload images from local storage, optimize SEO meta tags (H1-H4), and publish.
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-2.5">
            <Link
              href="/blogs"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition"
              title="View public blogs page"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              <span>View Public Page</span>
            </Link>

            <button
              onClick={fetchBlogs}
              disabled={refreshing}
              className="p-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition disabled:opacity-50"
              title="Refresh Blogs List"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin text-emerald-600" : ""}`} />
            </button>

            {canCreate && (
              <button
                onClick={handleOpenCreate}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-600/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Write New Blog</span>
              </button>
            )}
          </div>
        </header>

        {/* Inner Content Area */}
        <div className="p-4 sm:p-8 space-y-6 flex-1">
          {/* Metric KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {/* Total Articles */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Articles</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">{blogs.length}</p>
                <span className="text-[11px] text-emerald-600 font-medium">In database</span>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Newspaper className="w-5 h-5" />
              </div>
            </div>

            {/* Published */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Published</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mt-1">{publishedCount}</p>
                <span className="text-[11px] text-slate-500 font-medium">Live & Indexable</span>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>

            {/* Drafts */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Drafts</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-600 mt-1">{draftsCount}</p>
                <span className="text-[11px] text-slate-500 font-medium">Unpublished</span>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
            </div>

            {/* Total Readers / Views */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Featured / Views</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-purple-600 mt-1">{featuredCount} <span className="text-xs font-medium text-slate-400">/ {totalViews} v</span></p>
                <span className="text-[11px] text-purple-600 font-medium">Pinned & Views</span>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Action & Filter Toolbar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles by title, excerpt, tag, author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Status Tabs */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 self-start md:self-auto">
                <button
                  onClick={() => setStatusFilter("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    statusFilter === "all" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  All ({blogs.length})
                </button>
                <button
                  onClick={() => setStatusFilter("published")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    statusFilter === "published" ? "bg-white text-emerald-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Published ({publishedCount})
                </button>
                <button
                  onClick={() => setStatusFilter("draft")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    statusFilter === "draft" ? "bg-white text-amber-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Drafts ({draftsCount})
                </button>
                <button
                  onClick={() => setStatusFilter("featured")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    statusFilter === "featured" ? "bg-white text-purple-700 shadow-xs" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Featured ({featuredCount})
                </button>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 self-end md:self-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg transition ${
                    viewMode === "grid" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-800"
                  }`}
                  title="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`p-1.5 rounded-lg transition ${
                    viewMode === "table" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500 hover:text-slate-800"
                  }`}
                  title="Table / List View"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs pt-1 no-scrollbar">
              <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider shrink-0 mr-1">
                Category:
              </span>
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition ${
                  selectedCategory === "All"
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                All Categories
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ── BLOGS LISTING ─────────────────────────────────────────── */}
          {loading ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center">
              <RefreshCw className="w-8 h-8 animate-spin text-emerald-600 mx-auto mb-3" />
              <p className="text-slate-600 font-medium text-sm">Loading articles & guides...</p>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-16 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <Newspaper className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">No blog posts found</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mt-1 mb-6">
                {searchQuery || selectedCategory !== "All" || statusFilter !== "all"
                  ? "Try clearing filters or search query to view articles."
                  : "Start writing your first visa guide with custom image uploads & meta SEO optimization."}
              </p>
              {canCreate && (
                <button
                  onClick={handleOpenCreate}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition"
                >
                  <Plus className="w-4 h-4" />
                  <span>Write First Blog</span>
                </button>
              )}
            </div>
          ) : viewMode === "grid" ? (
            /* ════ GRID VIEW ════ */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80";
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/85 backdrop-blur-sm text-emerald-400 border border-slate-700 shadow">
                          {blog.category}
                        </span>
                      </div>

                      {/* Status Badges */}
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        {blog.featured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-purple-600 text-white shadow">
                            FEATURED
                          </span>
                        )}
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow ${
                            blog.published
                              ? "bg-emerald-500 text-white"
                              : "bg-amber-500 text-slate-950 font-bold"
                          }`}
                        >
                          {blog.published ? "PUBLISHED" : "DRAFT"}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold mb-2.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                          {blog.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-emerald-600" />
                          {blog.readTime}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug line-clamp-2 mb-2 group-hover:text-emerald-700 transition">
                        {blog.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {blog.excerpt}
                      </p>

                      {/* SEO Meta Indicators */}
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 mb-4 text-[11px] text-slate-500 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-700 flex items-center gap-1">
                            <SearchCode className="w-3.5 h-3.5 text-indigo-600" />
                            SEO Title:
                          </span>
                          <span className="text-indigo-600 font-mono text-[10px] font-bold">
                            {(blog.metaTitle || blog.title).length} chars
                          </span>
                        </div>
                        <p className="truncate font-medium text-slate-600">
                          {blog.metaTitle || blog.title}
                        </p>
                      </div>

                      {/* Tags */}
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {blog.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600"
                            >
                              <Tag className="w-2.5 h-2.5 text-slate-400" />
                              {t}
                            </span>
                          ))}
                          {blog.tags.length > 3 && (
                            <span className="text-[10px] text-slate-400 font-semibold self-center">
                              +{blog.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                        <span className="flex items-center gap-1 text-slate-600 font-medium">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          {blog.author}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          {blog.views || 0} views
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="bg-slate-50/80 px-5 py-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setPreviewingBlog(blog)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 transition"
                        title="Quick Read / Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleCopyLink(blog)}
                        className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-white border border-transparent hover:border-slate-200 transition"
                        title="Copy Public Link"
                      >
                        {copiedId === blog.id ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Share2 className="w-4 h-4" />
                        )}
                      </button>
                      {canEdit && (
                        <button
                          onClick={() => handleToggleFeatured(blog)}
                          className={`p-1.5 rounded-lg border transition ${
                            blog.featured
                              ? "text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100"
                              : "text-slate-400 hover:text-purple-600 hover:bg-white border-transparent hover:border-slate-200"
                          }`}
                          title={blog.featured ? "Remove Featured" : "Mark as Featured"}
                        >
                          <Sparkles className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {canEdit && (
                        <button
                          onClick={() => handleTogglePublish(blog)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition ${
                            blog.published
                              ? "text-slate-600 bg-white border-slate-200 hover:bg-slate-100"
                              : "text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
                          }`}
                        >
                          {blog.published ? "Unpublish" : "Publish"}
                        </button>
                      )}
                      {canEdit && (
                        <button
                          onClick={() => handleOpenEdit(blog)}
                          className="p-1.5 rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition"
                          title="Edit Article & SEO"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                      )}
                      {canDelete && (
                        <button
                          onClick={() => setDeletingBlog(blog)}
                          className="p-1.5 rounded-lg text-rose-600 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition"
                          title="Delete Article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* ════ TABLE VIEW ════ */
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      <th className="py-3.5 px-4">Article</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">SEO Meta Title</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Views</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                    {filteredBlogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-slate-50/70 transition">
                        <td className="py-3.5 px-4 min-w-[280px]">
                          <div className="flex items-center gap-3">
                            <img
                              src={blog.image}
                              alt={blog.title}
                              onError={(e) => {
                                e.currentTarget.src =
                                  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80";
                              }}
                              className="w-12 h-10 rounded-lg object-cover flex-shrink-0 bg-slate-100 border border-slate-200"
                            />
                            <div className="min-w-0">
                              <p className="font-bold text-slate-900 truncate max-w-sm" title={blog.title}>
                                {blog.title}
                              </p>
                              <p className="text-[11px] text-slate-400 truncate max-w-sm mt-0.5">
                                {blog.excerpt}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
                            {blog.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[11px] text-indigo-700 max-w-xs truncate">
                          {blog.metaTitle || blog.title}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                                blog.published
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {blog.published ? "Published" : "Draft"}
                            </span>
                            {blog.featured && (
                              <span className="px-1.5 py-0.5 rounded-md text-[9px] font-black bg-purple-100 text-purple-800">
                                Pin
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-medium text-slate-600">
                          {blog.views || 0}
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setPreviewingBlog(blog)}
                              className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 transition"
                              title="Preview"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            {canEdit && (
                              <button
                                onClick={() => handleOpenEdit(blog)}
                                className="p-1.5 rounded-lg text-indigo-600 hover:bg-indigo-50 transition"
                                title="Edit & SEO"
                              >
                                <Edit3 className="w-4 h-4" />
                              </button>
                            )}
                            {canDelete && (
                              <button
                                onClick={() => setDeletingBlog(blog)}
                                className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition"
                                title="Delete"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ═════════════════════════════════════════════════════════════════
          CREATE / EDIT BLOG MODAL (Full Publishing Studio with SEO Suite)
          ═════════════════════════════════════════════════════════════════ */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-5 overflow-y-auto">
          <div
            className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh] my-auto animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Header */}
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shadow-xs">
                  <Newspaper className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {editingBlog ? "Edit Blog Article & SEO" : "Write & Publish New Blog Article"}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {editingBlog
                      ? `Updating "${editingBlog.title}"`
                      : "Create rich immigration advice, work permit guides, or recruitment news with Google SEO optimization."}
                  </p>
                </div>
              </div>

              {/* Navigation Tabs in Header */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-slate-200/80 p-1 rounded-xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveTab("editor")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                      activeTab === "editor"
                        ? "bg-white text-slate-900 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Content & Headings</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("seo")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                      activeTab === "seo"
                        ? "bg-white text-indigo-700 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <SearchCode className="w-3.5 h-3.5 text-indigo-600" />
                    <span>SEO & Meta Tags</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("preview")}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                      activeTab === "preview"
                        ? "bg-white text-emerald-700 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Live Preview</span>
                  </button>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
              {formMessage && (
                <div
                  className={`p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm font-medium ${
                    formMessage.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {formMessage.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{formMessage.text}</span>
                </div>
              )}

              {/* ══════════════════════════════════════════════════════════
                  TAB 1: CONTENT & HEADINGS EDITOR
                  ══════════════════════════════════════════════════════════ */}
              {activeTab === "editor" && (
                <div className="space-y-6 animate-in fade-in-50 duration-150">
                  {/* Title & Live Slug */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                          <span>Article Title (Main Heading)</span>
                          <span className="text-rose-500">*</span>
                        </label>
                        <span className="text-[11px] text-slate-400">
                          {form.title.length} characters
                        </span>
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Complete Guide to UAE & Saudi Arabia Blue-Collar Work Permits in 2026"
                        value={form.title}
                        onChange={(e) => {
                          const newTitle = e.target.value;
                          setForm((prev) => ({
                            ...prev,
                            title: newTitle,
                            slug: prev.slug || generateSlug(newTitle),
                            metaTitle: prev.metaTitle ? prev.metaTitle : newTitle,
                          }));
                        }}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm sm:text-base font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                      />
                    </div>

                    {/* Slug display / edit */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100 px-3.5 py-2 rounded-xl border border-slate-200">
                      <span className="font-semibold text-slate-600 shrink-0">URL Slug:</span>
                      <span className="text-slate-400 truncate">https://workwisevisa.com/blogs/</span>
                      <input
                        type="text"
                        value={form.slug}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, slug: generateSlug(e.target.value) }))
                        }
                        placeholder="auto-generated-from-title"
                        className="flex-1 bg-transparent border-none text-xs font-mono font-bold text-emerald-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Meta Grid (Category, Author, Read Time, Date) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Category */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Category <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={form.category}
                        onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Author */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Author Name
                      </label>
                      <input
                        type="text"
                        value={form.author}
                        onChange={(e) => setForm((prev) => ({ ...prev, author: e.target.value }))}
                        placeholder="e.g. WorkWise Editorial Team"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                      />
                    </div>

                    {/* Read Time */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Read Time
                      </label>
                      <input
                        type="text"
                        value={form.readTime}
                        onChange={(e) => setForm((prev) => ({ ...prev, readTime: e.target.value }))}
                        placeholder="e.g. 5 min read"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Publish Date
                      </label>
                      <input
                        type="text"
                        value={form.date}
                        onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
                        placeholder="e.g. Oct 7, 2026"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                      />
                    </div>
                  </div>

                  {/* ── COVER IMAGE SELECTOR & LOCAL STORAGE UPLOAD ── */}
                  <div className="space-y-3 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Cover Photo Selection</span>
                      </label>

                      {/* Cover Photo Mode Switcher */}
                      <div className="flex items-center bg-white p-0.5 rounded-lg border border-slate-200 shadow-2xs">
                        <button
                          type="button"
                          onClick={() => setCoverImageMode("upload")}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1 ${
                            coverImageMode === "upload"
                              ? "bg-emerald-600 text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          <FolderUp className="w-3 h-3" />
                          <span>Upload from Device</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setCoverImageMode("url")}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1 ${
                            coverImageMode === "url"
                              ? "bg-emerald-600 text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          <Link2 className="w-3 h-3" />
                          <span>Web Link</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setCoverImageMode("presets")}
                          className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1 ${
                            coverImageMode === "presets"
                              ? "bg-emerald-600 text-white shadow-xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          <Sparkles className="w-3 h-3" />
                          <span>Presets</span>
                        </button>
                      </div>
                    </div>

                    {/* 1. Upload from Local Storage / Device Tab */}
                    {coverImageMode === "upload" && (
                      <div className="space-y-3">
                        <input
                          type="file"
                          ref={coverFileInputRef}
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleCoverFileSelected(file);
                          }}
                          className="hidden"
                        />

                        <div
                          onClick={() => coverFileInputRef.current?.click()}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDragOver(true);
                          }}
                          onDragLeave={() => setIsDragOver(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setIsDragOver(false);
                            const file = e.dataTransfer.files?.[0];
                            if (file) handleCoverFileSelected(file);
                          }}
                          className={`border-2 border-dashed rounded-2xl p-5 sm:p-6 text-center cursor-pointer transition-all bg-white flex flex-col items-center justify-center gap-2 ${
                            isDragOver
                              ? "border-emerald-500 bg-emerald-50/50 scale-[1.01]"
                              : "border-slate-300 hover:border-emerald-500 hover:bg-slate-50/50"
                          }`}
                        >
                          {uploadingCover ? (
                            <div className="py-2 flex flex-col items-center">
                              <RefreshCw className="w-8 h-8 animate-spin text-emerald-600 mb-2" />
                              <p className="text-xs font-bold text-slate-800">Uploading image to server storage...</p>
                              <p className="text-[11px] text-slate-500 mt-0.5">Please wait a moment</p>
                            </div>
                          ) : form.image ? (
                            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-between">
                              <div className="flex items-center gap-3">
                                <img
                                  src={form.image}
                                  alt="Cover Preview"
                                  className="w-24 h-16 rounded-xl object-cover border border-slate-200 shadow-sm flex-shrink-0"
                                />
                                <div className="text-left">
                                  <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    Image Selected & Ready
                                  </span>
                                  <p className="text-[11px] text-slate-500 font-mono truncate max-w-xs sm:max-w-md mt-0.5">
                                    {form.image}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    coverFileInputRef.current?.click();
                                  }}
                                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                                >
                                  Change Image
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setForm((prev) => ({ ...prev, image: "" }));
                                  }}
                                  className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition"
                                  title="Remove image"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                <UploadCloud className="w-6 h-6" />
                              </div>
                              <div>
                                <p className="text-xs sm:text-sm font-bold text-slate-800">
                                  Click to browse files from computer / phone or drag & drop here
                                </p>
                                <p className="text-[11px] text-slate-400 mt-0.5">
                                  Supports PNG, JPG, JPEG, WEBP, SVG (Up to 10MB)
                                </p>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )}

                    {/* 2. Web Image URL Tab */}
                    {coverImageMode === "url" && (
                      <div className="flex flex-col sm:flex-row gap-3 items-center">
                        <input
                          type="url"
                          placeholder="https://images.unsplash.com/... or https://..."
                          value={form.image}
                          onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
                          className="flex-1 w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                        />
                        {form.image && (
                          <img
                            src={form.image}
                            alt="Preview"
                            className="w-20 h-11 rounded-lg object-cover border border-slate-200 shadow-xs flex-shrink-0"
                          />
                        )}
                      </div>
                    )}

                    {/* 3. Preset Chips Tab */}
                    {coverImageMode === "presets" && (
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1.5">
                          {PRESET_IMAGES.map((preset) => (
                            <button
                              type="button"
                              key={preset.label}
                              onClick={() => setForm((prev) => ({ ...prev, image: preset.url }))}
                              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1.5 ${
                                form.image === preset.url
                                  ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                              }`}
                            >
                              <span>{preset.label}</span>
                            </button>
                          ))}
                        </div>
                        {form.image && (
                          <div className="pt-2 flex items-center gap-3">
                            <img
                              src={form.image}
                              alt="Preset Selected"
                              className="w-20 h-12 rounded-lg object-cover border border-slate-200 shadow-xs"
                            />
                            <span className="text-xs text-slate-500 truncate font-mono">{form.image}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Short Excerpt */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Short Excerpt / Summary <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        {form.excerpt.length} chars (Recommended: 120 - 180 chars)
                      </span>
                    </div>
                    <textarea
                      rows={2}
                      required
                      placeholder="Summarize the core takeaways in 2-3 sentences. This appears on blog cards and acts as fallback Meta Description..."
                      value={form.excerpt}
                      onChange={(e) => {
                        const val = e.target.value;
                        setForm((prev) => ({
                          ...prev,
                          excerpt: val,
                          metaDescription: prev.metaDescription ? prev.metaDescription : val,
                        }));
                      }}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition"
                    />
                  </div>

                  {/* Tags Section */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Tags & Keywords
                    </label>
                    <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-50 border border-slate-200 rounded-xl min-h-[44px]">
                      {form.tags.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-100 text-emerald-800"
                        >
                          <span>#{t}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(t)}
                            className="text-emerald-700 hover:text-emerald-950"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                      <input
                        type="text"
                        placeholder="Type tag and press Enter..."
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === ",") {
                            e.preventDefault();
                            handleAddTag(tagInput);
                          }
                        }}
                        className="flex-1 min-w-[140px] bg-transparent border-none text-xs text-slate-800 placeholder-slate-400 focus:outline-none px-2 py-1"
                      />
                    </div>

                    {/* Quick suggestions */}
                    <div className="flex flex-wrap items-center gap-1 text-[11px] text-slate-500 pt-1">
                      <span className="font-semibold text-slate-400">Suggestions:</span>
                      {SUGGESTED_TAGS.map((st) => (
                        <button
                          type="button"
                          key={st}
                          onClick={() => handleAddTag(st)}
                          disabled={form.tags.includes(st)}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-30 disabled:pointer-events-none transition"
                        >
                          +{st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ── RICH ARTICLE CONTENT EDITOR (H1, H2, H3, H4 & Full Suite) ── */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <span>Full Article Body</span>
                        <span className="text-rose-500">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400">
                        Supports Headings (H1-H4), Lists, Tables, Callouts, and FAQs
                      </span>
                    </div>

                    <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                      {/* Advanced Formatting Toolbar */}
                      <div className="bg-slate-100 border-b border-slate-200 p-2 flex flex-wrap items-center gap-1 text-slate-700">
                        {/* Headings */}
                        <div className="flex items-center bg-white rounded-lg p-0.5 border border-slate-200 shadow-2xs mr-1">
                          <button
                            type="button"
                            onClick={() => insertFormatting("# ", "\n", "Main Document Title")}
                            className="px-2 py-1 rounded text-xs font-black text-slate-800 hover:bg-slate-100 transition"
                            title="Heading 1 (Main Header)"
                          >
                            H1
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("## ", "\n", "Section Heading")}
                            className="px-2 py-1 rounded text-xs font-extrabold text-slate-800 hover:bg-slate-100 transition"
                            title="Heading 2 (Major Section)"
                          >
                            H2
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("### ", "\n", "Sub-Section Title")}
                            className="px-2 py-1 rounded text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
                            title="Heading 3 (Sub Section)"
                          >
                            H3
                          </button>
                          <button
                            type="button"
                            onClick={() => insertFormatting("#### ", "\n", "Minor Heading")}
                            className="px-2 py-1 rounded text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
                            title="Heading 4 (Minor Header)"
                          >
                            H4
                          </button>
                        </div>

                        {/* Inline Formatting */}
                        <button
                          type="button"
                          onClick={() => insertFormatting("**", "**", "bold text")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Bold (Ctrl+B)"
                        >
                          <Bold className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("*", "*", "italic text")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Italic (Ctrl+I)"
                        >
                          <Italic className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("<u>", "</u>", "underlined text")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Underline"
                        >
                          <UnderlineIcon className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("~~", "~~", "strikethrough text")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Strikethrough"
                        >
                          <Strikethrough className="w-3.5 h-3.5" />
                        </button>

                        <div className="h-4 w-[1px] bg-slate-300 mx-1" />

                        {/* Lists & Checklists */}
                        <button
                          type="button"
                          onClick={() => insertFormatting("- ", "\n", "Bullet point item")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Bullet List"
                        >
                          <ListIcon className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("1. ", "\n", "Numbered step item")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Numbered List"
                        >
                          <ListOrdered className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("- [ ] ", "\n", "Checklist item")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Checklist Item"
                        >
                          <CheckSquare className="w-3.5 h-3.5" />
                        </button>

                        <div className="h-4 w-[1px] bg-slate-300 mx-1" />

                        {/* Link, Code & Image Insert */}
                        <button
                          type="button"
                          onClick={() => insertFormatting("[", "](https://workwisevisa.com)", "anchor text")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Insert Link"
                        >
                          <Link2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsInlineModalOpen(true)}
                          className="px-2 py-1 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold flex items-center gap-1 transition"
                          title="Upload or Insert Image in Article"
                        >
                          <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                          <span>+Image</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("`", "`", "code")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Inline Code"
                        >
                          <Code className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("> ", "\n", "Immigration rule note or quote")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Quote / Callout"
                        >
                          <Quote className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting("\n---\n", "")}
                          className="p-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-slate-900 transition"
                          title="Horizontal Divider Line"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>

                        <div className="h-4 w-[1px] bg-slate-300 mx-1" />

                        {/* Smart Template Dropdowns / Quick Inserts */}
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => insertTemplate("callout")}
                            className="px-2 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-[11px] font-bold flex items-center gap-1 transition"
                            title="Insert Important Alert Callout"
                          >
                            <Lightbulb className="w-3 h-3 text-amber-600" /> +Callout
                          </button>
                          <button
                            type="button"
                            onClick={() => insertTemplate("table")}
                            className="px-2 py-1 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 text-[11px] font-bold flex items-center gap-1 transition"
                            title="Insert Salary / Role Comparison Table"
                          >
                            <TableIcon className="w-3 h-3 text-indigo-600" /> +Table
                          </button>
                          <button
                            type="button"
                            onClick={() => insertTemplate("faq")}
                            className="px-2 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-[11px] font-bold flex items-center gap-1 transition"
                            title="Insert FAQ Section Template"
                          >
                            <HelpCircle className="w-3 h-3 text-emerald-600" /> +FAQs
                          </button>
                          <button
                            type="button"
                            onClick={() => insertTemplate("cta")}
                            className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold flex items-center gap-1 transition"
                            title="Insert WhatsApp Consultation CTA Box"
                          >
                            <MessageCircle className="w-3 h-3 text-emerald-400" /> +CTA Box
                          </button>
                        </div>
                      </div>

                      {/* Editor Textarea */}
                      <textarea
                        id="blog-content-editor"
                        rows={16}
                        required
                        placeholder={`# Write Article Main Heading\n\n## 1. Overview of Immigration Policy\nExplain the overseas job landscape and recent embassy guidelines here...\n\n### Required Qualifications & Experience\n- 10th / 12th pass or Vocational ITI Diploma\n- GAMCA Medical clearance certificate\n- Minimum 2 years trade experience\n\n> 💡 Important: Verify employer sponsorship letters through certified agencies.\n\n### Step-by-Step Procedure\n1. Document Apostille & Verification\n2. Embassy Biometric Scheduling\n3. Visa Stamping & Flight Deployment`}
                        value={form.content}
                        onChange={(e) => {
                          const val = e.target.value;
                          setForm((prev) => ({
                            ...prev,
                            content: val,
                            readTime: calculateReadTime(val),
                          }));
                        }}
                        className="w-full p-4 bg-white font-mono text-xs sm:text-sm text-slate-800 focus:outline-none leading-relaxed resize-y min-h-[300px]"
                      />

                      {/* Word Counter Bar */}
                      <div className="bg-slate-50 px-4 py-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                        <span>
                          Words: {form.content.trim().split(/\s+/).filter(Boolean).length} | Characters: {form.content.length}
                        </span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveTab("seo")}
                            className="text-indigo-600 hover:underline font-semibold flex items-center gap-1"
                          >
                            <SearchCode className="w-3 h-3" /> Optimize SEO & Meta Tags →
                          </button>
                          <span>Estimated {form.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ══════════════════════════════════════════════════════════
                  TAB 2: ADVANCED SEO & META TAGS SUITE
                  ══════════════════════════════════════════════════════════ */}
              {activeTab === "seo" && (
                <div className="space-y-6 animate-in fade-in-50 duration-150">
                  {/* SEO Hero Notice */}
                  <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-indigo-950">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <SearchCode className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-indigo-900 text-sm">Google Search Optimization Suite</h4>
                        <p className="text-indigo-700 text-[11px] mt-0.5">
                          Set custom Meta Titles, Descriptions, and Keywords to maximize Google search ranking and CTR.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleAutoFillSEO}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shrink-0 shadow-xs transition"
                    >
                      ⚡ Auto-Fill From Article
                    </button>
                  </div>

                  {/* Google Search Live Snippet Preview */}
                  <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-md space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Google Search Live Snippet Preview</span>
                      </span>

                      <div className="flex items-center bg-slate-800 p-0.5 rounded-lg text-[11px]">
                        <button
                          type="button"
                          onClick={() => setPreviewDevice("desktop")}
                          className={`px-2.5 py-1 rounded-md flex items-center gap-1 font-semibold transition ${
                            previewDevice === "desktop" ? "bg-slate-700 text-white" : "text-slate-400"
                          }`}
                        >
                          <Monitor className="w-3 h-3" /> Desktop
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreviewDevice("mobile")}
                          className={`px-2.5 py-1 rounded-md flex items-center gap-1 font-semibold transition ${
                            previewDevice === "mobile" ? "bg-slate-700 text-white" : "text-slate-400"
                          }`}
                        >
                          <Smartphone className="w-3 h-3" /> Mobile
                        </button>
                      </div>
                    </div>

                    {/* The Snippet Card */}
                    <div className="bg-white text-slate-900 p-4 sm:p-5 rounded-xl font-sans max-w-2xl shadow-inner">
                      <div className="flex items-center gap-2 text-xs text-slate-600 mb-1">
                        <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-[9px] text-white font-bold">
                          W
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-semibold text-slate-800 leading-tight">WorkWise Visa</span>
                          <span className="text-[10px] text-slate-500 leading-tight truncate">
                            https://workwisevisa.com › blogs › {effectiveSlug}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-medium text-[#1a0dab] hover:underline cursor-pointer leading-snug line-clamp-1">
                        {effectiveMetaTitle}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#4d5156] leading-relaxed line-clamp-2 mt-1">
                        {form.date} — {effectiveMetaDesc}
                      </p>
                    </div>
                  </div>

                  {/* SEO Input Fields */}
                  <div className="space-y-4">
                    {/* Meta Title Field */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                          <span>SEO Meta Title</span>
                          <span className="text-indigo-600 font-normal text-[11px]">(Appears on Google & Browser Tabs)</span>
                        </label>
                        <div className="flex items-center gap-2 text-[11px]">
                          <span
                            className={`font-mono font-bold ${
                              form.metaTitle && form.metaTitle.length > 60
                                ? "text-amber-600"
                                : form.metaTitle && form.metaTitle.length >= 40
                                ? "text-emerald-600"
                                : "text-slate-400"
                            }`}
                          >
                            {(form.metaTitle || form.title).length} / 60 chars
                          </span>
                          <span className="text-slate-400">| Optimal: 50–60</span>
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="e.g. UAE Blue-Collar Work Permits 2026: GAMCA, Trade Test & Visa Rules"
                        value={form.metaTitle}
                        onChange={(e) => setForm((prev) => ({ ...prev, metaTitle: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                      />
                      {/* Character indicator bar */}
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div
                          className={`h-full transition-all duration-300 ${
                            (form.metaTitle || form.title).length > 65
                              ? "bg-rose-500"
                              : (form.metaTitle || form.title).length >= 45
                              ? "bg-emerald-500"
                              : "bg-amber-400"
                          }`}
                          style={{
                            width: `${Math.min(100, (((form.metaTitle || form.title).length || 0) / 60) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Meta Description Field */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                          <span>SEO Meta Description</span>
                          <span className="text-indigo-600 font-normal text-[11px]">(Google search result description)</span>
                        </label>
                        <div className="flex items-center gap-2 text-[11px]">
                          <span
                            className={`font-mono font-bold ${
                              form.metaDescription && form.metaDescription.length > 160
                                ? "text-amber-600"
                                : form.metaDescription && form.metaDescription.length >= 120
                                ? "text-emerald-600"
                                : "text-slate-400"
                            }`}
                          >
                            {(form.metaDescription || form.excerpt).length} / 160 chars
                          </span>
                          <span className="text-slate-400">| Optimal: 140–160</span>
                        </div>
                      </div>
                      <textarea
                        rows={3}
                        placeholder="Comprehensive step-by-step guide explaining GAMCA medical examinations, trade test centers, and overseas work permit sponsorship for Gulf & European visas in 2026."
                        value={form.metaDescription}
                        onChange={(e) => setForm((prev) => ({ ...prev, metaDescription: e.target.value }))}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                      />
                      {/* Character indicator bar */}
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1.5">
                        <div
                          className={`h-full transition-all duration-300 ${
                            (form.metaDescription || form.excerpt).length > 165
                              ? "bg-rose-500"
                              : (form.metaDescription || form.excerpt).length >= 120
                              ? "bg-emerald-500"
                              : "bg-amber-400"
                          }`}
                          style={{
                            width: `${Math.min(100, (((form.metaDescription || form.excerpt).length || 0) / 160) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Focus Meta Keywords */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Focus SEO Keywords (Comma separated)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. UAE work permit 2026, GAMCA medical test, Dubai driver jobs"
                          value={form.metaKeywords}
                          onChange={(e) => setForm((prev) => ({ ...prev, metaKeywords: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Canonical URL (Optional)
                        </label>
                        <input
                          type="url"
                          placeholder="https://workwisevisa.com/blogs/..."
                          value={form.canonicalUrl}
                          onChange={(e) => setForm((prev) => ({ ...prev, canonicalUrl: e.target.value }))}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ══════════════════════════════════════════════════════════
                  TAB 3: FULL LIVE ARTICLE PREVIEW
                  ══════════════════════════════════════════════════════════ */}
              {activeTab === "preview" && (
                <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50 min-h-[300px] max-h-[550px] overflow-y-auto space-y-4 animate-in fade-in-50 duration-150">
                  <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-5">
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {form.category}
                    </span>

                    <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                      {form.title || "Untitled Article Title"}
                    </h1>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pb-4 border-b border-slate-100">
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <User className="w-3.5 h-3.5 text-emerald-600" /> By {form.author}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" /> {form.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" /> {form.readTime}
                      </span>
                    </div>

                    {form.image && (
                      <div className="rounded-2xl overflow-hidden h-64 sm:h-80 w-full bg-slate-100">
                        <img
                          src={form.image}
                          alt="Cover"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
                      <p className="text-sm font-semibold text-emerald-950 leading-relaxed">
                        {form.excerpt || "Article excerpt will appear here as the key overview..."}
                      </p>
                    </div>

                    <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {form.content || "Write content in the editor to see formatted live preview."}
                    </div>

                    {form.tags && form.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
                        <span className="text-xs font-bold text-slate-400">TAGS:</span>
                        {form.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Publishing Flags (Published & Featured) */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(e) => setForm((prev) => ({ ...prev, published: e.target.checked }))}
                    className="w-5 h-5 rounded-md text-emerald-600 focus:ring-emerald-500 border-slate-300"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                      Publish to Website Immediately
                    </span>
                    <span className="text-[11px] text-slate-500">
                      If unchecked, post will be saved as a private Draft.
                    </span>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) => setForm((prev) => ({ ...prev, featured: e.target.checked }))}
                    className="w-5 h-5 rounded-md text-purple-600 focus:ring-purple-500 border-slate-300"
                  />
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 block">
                      Pin as Featured Guide
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Highlighted at the top of the public knowledge base.
                    </span>
                  </div>
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading || uploadingCover}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/30 transition disabled:opacity-50"
                >
                  {formLoading && <RefreshCw className="w-4 h-4 animate-spin" />}
                  <span>{editingBlog ? "Save Changes & Update SEO" : "Publish Article & SEO"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════
          INLINE IMAGE INSERT MODAL (Upload from Device or URL)
          ═════════════════════════════════════════════════════════════════ */}
      {isInlineModalOpen && (
        <div className="fixed inset-0 z-60 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-slate-200 space-y-4 animate-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">Insert Image in Article</h3>
              </div>
              <button
                onClick={() => setIsInlineModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <input
              type="file"
              ref={inlineFileInputRef}
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleInlineFileSelected(file);
              }}
              className="hidden"
            />

            {/* Upload Button */}
            <div
              onClick={() => inlineFileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-2xl p-4 text-center cursor-pointer bg-slate-50 hover:bg-emerald-50/30 transition flex flex-col items-center justify-center gap-1.5"
            >
              {uploadingInline ? (
                <div className="py-2 flex flex-col items-center">
                  <RefreshCw className="w-6 h-6 animate-spin text-emerald-600 mb-1" />
                  <span className="text-xs font-bold text-slate-800">Uploading image...</span>
                </div>
              ) : (
                <>
                  <UploadCloud className="w-6 h-6 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Upload from Local Storage / Device
                  </span>
                  <span className="text-[10px] text-slate-400">Click to choose image file</span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 my-1">
              <div className="flex-1 h-[1px] bg-slate-200" />
              <span>OR PASTE IMAGE URL</span>
              <div className="flex-1 h-[1px] bg-slate-200" />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Image Web URL
              </label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/... or /uploads/..."
                value={inlineImageUrl}
                onChange={(e) => setInlineImageUrl(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Image Caption / Alt Text
              </label>
              <input
                type="text"
                placeholder="e.g. GAMCA Medical Test Center in Dubai"
                value={inlineImageAlt}
                onChange={(e) => setInlineImageAlt(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>

            {inlineImageUrl && (
              <div className="rounded-xl overflow-hidden h-28 w-full bg-slate-100 border border-slate-200">
                <img src={inlineImageUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsInlineModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!inlineImageUrl.trim()}
                onClick={() => {
                  const alt = inlineImageAlt.trim() || "Article Image";
                  const snippet = `\n\n![${alt}](${inlineImageUrl.trim()})\n*${alt}*\n\n`;
                  insertFormatting(snippet, "");
                  setIsInlineModalOpen(false);
                  setInlineImageUrl("");
                  setInlineImageAlt("");
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs disabled:opacity-50"
              >
                Insert Image
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════
          DELETE CONFIRMATION MODAL
          ═════════════════════════════════════════════════════════════════ */}
      {deletingBlog && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-4 animate-in zoom-in-95">
            <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Delete Blog Article?</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Are you sure you want to permanently delete{" "}
              <strong className="text-slate-800">"{deletingBlog.title}"</strong>? This action cannot be undone.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setDeletingBlog(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                disabled={deleteLoading}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-600/30 transition disabled:opacity-50"
              >
                {deleteLoading && <RefreshCw className="w-4 h-4 animate-spin" />}
                <span>Yes, Delete Article</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════════
          QUICK PREVIEW MODAL
          ═════════════════════════════════════════════════════════════════ */}
      {previewingBlog && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPreviewingBlog(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
              {previewingBlog.category}
            </span>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
              {previewingBlog.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-slate-400 pb-4 mb-4 border-b border-slate-100">
              <span>By {previewingBlog.author}</span>
              <span>•</span>
              <span>{previewingBlog.date}</span>
              <span>•</span>
              <span>{previewingBlog.readTime}</span>
              <span>•</span>
              <span>{previewingBlog.views || 0} views</span>
            </div>

            <div className="rounded-2xl overflow-hidden h-60 w-full mb-4 bg-slate-100">
              <img
                src={previewingBlog.image}
                alt={previewingBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-5">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">
                {previewingBlog.excerpt}
              </p>
            </div>

            <div className="text-xs sm:text-sm text-slate-700 whitespace-pre-wrap leading-relaxed space-y-3">
              {previewingBlog.content}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/blogs"
                target="_blank"
                className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
              >
                <span>View on public website</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setPreviewingBlog(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
