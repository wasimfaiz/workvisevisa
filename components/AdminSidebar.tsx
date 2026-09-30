"use client";

/* ================================================================
   components/AdminSidebar.tsx — Unified Responsive Admin Sidebar
   - Consistent width across all pages (260px expanded, 76px collapsed)
   - Desktop collapse/expand toggle
   - Mobile top header bar + slide-in drawer with backdrop
   - Granular RBAC permissions-aware navigation
   - Exact unified gradient theme (#1e1b4b -> #312e81)
   ================================================================ */

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  FileText,
  Users,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";
import { EmployeePermissions } from "@/lib/types/rbac";

export interface AdminSidebarUser {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  permissions?: EmployeePermissions;
}

interface AdminSidebarProps {
  currentUser?: AdminSidebarUser | null;
  counts?: {
    jobs?: number;
    inquiries?: number;
    newInquiries?: number;
    invoices?: number;
    employees?: number;
  };
}

export default function AdminSidebar({
  currentUser: initialUser,
  counts,
}: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [user, setUser] = useState<AdminSidebarUser | null>(initialUser || null);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Load user info if not passed
  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
      return;
    }
    async function loadMe() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          if (data.user) setUser(data.user);
        }
      } catch (err) {
        console.error("Failed to load user in sidebar", err);
      }
    }
    loadMe();
  }, [initialUser]);

  // Load collapse preference from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("workwise_admin_sidebar_collapsed");
      if (saved === "true") setCollapsed(true);
    } catch {}
  }, []);

  const toggleCollapsed = () => {
    setCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("workwise_admin_sidebar_collapsed", String(next));
      } catch {}
      return next;
    });
  };

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {}
    router.replace("/admin");
  };

  const isSuper = user?.role === "superadmin" || user?.email === "wasim@yastudy.com";
  const canViewJobs = isSuper || Boolean(user?.permissions?.jobs?.view !== false);
  const canViewInquiries = isSuper || Boolean(user?.permissions?.inquiries?.view !== false);
  const canViewInvoices = isSuper || Boolean(user?.permissions?.invoices?.view);
  const canViewEmployees = isSuper || Boolean(user?.permissions?.employees?.view);

  // Navigation items definition
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
      visible: true,
      badge: null,
      isActive: pathname === "/admin/dashboard",
    },
    {
      id: "inquiries",
      label: "Inquiries & Leads",
      href: "/admin/inquiry",
      icon: MessageSquare,
      visible: canViewInquiries,
      badge:
        counts?.newInquiries && counts.newInquiries > 0
          ? `${counts.newInquiries} New`
          : counts?.inquiries !== undefined
          ? counts.inquiries
          : null,
      badgeColor:
        counts?.newInquiries && counts.newInquiries > 0 ? "#10b981" : "rgba(255,255,255,0.18)",
      isActive: pathname.startsWith("/admin/inquiry"),
    },
    {
      id: "jobs",
      label: "Job Demands",
      href: "/admin/jobs",
      icon: Briefcase,
      visible: canViewJobs,
      badge: counts?.jobs !== undefined ? counts.jobs : null,
      badgeColor: "rgba(255,255,255,0.18)",
      isActive: pathname.startsWith("/admin/jobs"),
    },
    {
      id: "invoices",
      label: "Invoice Generator",
      href: "/admin/invoice",
      icon: FileText,
      visible: canViewInvoices,
      badge: counts?.invoices !== undefined ? counts.invoices : null,
      badgeColor: "rgba(255,255,255,0.18)",
      isActive: pathname.startsWith("/admin/invoice"),
    },
    {
      id: "employees",
      label: "Employees & Access",
      href: "/admin/employees",
      icon: Users,
      visible: canViewEmployees,
      badge: counts?.employees !== undefined ? counts.employees : null,
      badgeColor: "#6366f1",
      isActive: pathname.startsWith("/admin/employees") || pathname.toLowerCase().includes("employ"),
    },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          1. MOBILE TOP HEADER BAR (Screens < 1024px)
          ══════════════════════════════════════════════════════════ */}
      <div className="lg:hidden print:hidden sticky top-0 z-40 w-full bg-[#1e1b4b] border-b border-white/10 px-4 py-3 flex items-center justify-between text-white shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-2 -ml-1 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center flex-shrink-0 shadow">
              <Image
                src="/icon.png"
                alt="WorkWise Visa"
                width={24}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="text-sm font-bold tracking-tight block leading-tight">WorkWise Visa</span>
              <span className="text-[10px] text-white/50 block">Admin Panel</span>
            </div>
          </div>
        </div>

        {user && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/70 hidden sm:inline-block max-w-[120px] truncate font-medium">
              {user.name}
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold shadow text-white">
              {user.name ? user.name[0].toUpperCase() : "A"}
            </div>
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════════════════
          2. MOBILE DRAWER OVERLAY & SIDEBAR (Screens < 1024px)
          ══════════════════════════════════════════════════════════ */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 print:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="w-[280px] max-w-[85vw] h-full bg-gradient-to-b from-[#1e1b4b] to-[#312e81] text-white flex flex-col shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow">
                  <Image
                    src="/icon.png"
                    alt="WorkWise Visa"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">WorkWise Visa</div>
                  <div className="text-[10px] text-white/50 mt-0.5">Admin Navigation</div>
                </div>
              </div>

              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition"
                aria-label="Close Navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Nav Items */}
            <nav className="flex-1 p-3 space-y-1.5">
              {navItems
                .filter((item) => item.visible)
                .map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition ${
                        item.isActive
                          ? "bg-white/15 text-white font-semibold shadow-sm"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="flex-1">{item.label}</span>
                      {item.badge !== null && item.badge !== undefined && (
                        <span
                          className="px-2 py-0.5 rounded-full text-[11px] font-bold"
                          style={{
                            background: item.badgeColor,
                            color: "white",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
            </nav>

            {/* Drawer Footer */}
            {user && (
              <div className="p-4 border-t border-white/10 space-y-3 bg-black/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm shadow">
                    {user.name ? user.name[0].toUpperCase() : "A"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-white truncate">{user.name}</div>
                    <div className="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
                      <ShieldCheck className="w-3 h-3 text-indigo-400" />
                      <span className="capitalize">{user.role || "Admin"}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign Out
                </button>
              </div>
            )}
          </aside>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          3. DESKTOP PERMANENT SIDEBAR (Screens >= 1024px)
          - Standard width: exactly 260px (when expanded)
          - Collapsed width: exactly 76px (when collapsed)
          - Unified across all admin pages!
          ══════════════════════════════════════════════════════════ */}
      <aside
        className={`hidden lg:flex print:hidden flex-col sticky top-0 h-screen overflow-y-auto flex-shrink-0 z-40 bg-gradient-to-b from-[#1e1b4b] to-[#312e81] text-white transition-all duration-300 ease-in-out border-r border-white/5 ${
          collapsed ? "w-[76px]" : "w-[260px]"
        }`}
        style={{
          width: collapsed ? "76px" : "260px",
          minWidth: collapsed ? "76px" : "260px",
          maxWidth: collapsed ? "76px" : "260px",
        }}
      >
        {/* Header / Brand */}
        <div className={`p-4 border-b border-white/10 flex items-center ${collapsed ? "justify-center" : "justify-between"}`}>
          {!collapsed ? (
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src="/icon.png"
                  alt="WorkWise Visa"
                  width={34}
                  height={34}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="min-w-0">
                <div className="text-[15px] font-bold text-white tracking-tight leading-tight truncate">
                  WorkWise Visa
                </div>
                <div className="text-[11px] text-white/50 mt-0.5 truncate">Admin Panel</div>
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
              <Image
                src="/icon.png"
                alt="WorkWise Visa"
                width={30}
                height={30}
                className="object-contain"
                priority
              />
            </div>
          )}

          {/* Collapse Toggle Button */}
          {!collapsed && (
            <button
              onClick={toggleCollapsed}
              className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition"
              title="Collapse Sidebar"
              aria-label="Collapse Sidebar"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Collapsed expand button */}
        {collapsed && (
          <div className="p-2 flex justify-center border-b border-white/5">
            <button
              onClick={toggleCollapsed}
              className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition"
              title="Expand Sidebar"
              aria-label="Expand Sidebar"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Nav Items */}
        <nav className="flex-1 px-2.5 py-4 space-y-1.5">
          {navItems
            .filter((item) => item.visible)
            .map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  title={collapsed ? item.label : undefined}
                  className={`flex items-center gap-3 rounded-xl transition group relative ${
                    collapsed ? "justify-center p-3" : "px-3.5 py-2.5 text-sm font-medium"
                  } ${
                    item.isActive
                      ? "bg-white/15 text-white font-semibold shadow-sm"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed ? (
                    <>
                      <span className="flex-1 truncate">{item.label}</span>
                      {item.badge !== null && item.badge !== undefined && (
                        <span
                          className="px-2 py-0.5 rounded-full text-[11px] font-bold flex-shrink-0"
                          style={{
                            background: item.badgeColor,
                            color: "white",
                          }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </>
                  ) : (
                    /* Floating tooltip for collapsed view */
                    item.badge !== null && item.badge !== undefined && (
                      <span
                        className="absolute top-2 right-2 w-2 h-2 rounded-full"
                        style={{ background: item.badgeColor === "rgba(255,255,255,0.18)" ? "#6366f1" : item.badgeColor }}
                      />
                    )
                  )}
                </Link>
              );
            })}
        </nav>

        {/* Desktop Footer (Profile & Logout) */}
        {user && (
          <div className={`p-3 border-t border-white/10 bg-black/10 ${collapsed ? "flex flex-col items-center gap-2" : "space-y-3"}`}>
            {!collapsed ? (
              <>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-xs shadow flex-shrink-0">
                    {user.name ? user.name[0].toUpperCase() : "A"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-white truncate">{user.name}</div>
                    <div className="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
                      <ShieldCheck className="w-3 h-3 text-indigo-400" />
                      <span className="capitalize">{user.role || "Admin"}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition"
                  title="Sign Out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <div
                  className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-xs shadow"
                  title={`${user.name} (${user.role})`}
                >
                  {user.name ? user.name[0].toUpperCase() : "A"}
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg text-white/60 hover:text-rose-300 hover:bg-rose-500/20 transition"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
