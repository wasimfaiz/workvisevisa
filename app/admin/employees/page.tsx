"use client";

/* ================================================================
   app/admin/employees/page.tsx — WorkWise Visa Staff & RBAC Permissions
   Full Role-Based Access Control:
   - Create and manage employee profiles
   - Assign custom granular permissions for Invoices, Inquiries, Jobs, Tracker, and Staff
   - Control who can view, add, edit, delete, or export in each section
   ================================================================ */

import { useState, useEffect, useCallback, useMemo, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Users,
  UserPlus,
  Shield,
  Key,
  Trash2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  X,
  Search,
  RefreshCw,
  Lock,
  Mail,
  Phone,
  FileText,
  Briefcase,
  MessageSquare,
  Eye,
  Plus,
  Compass,
  Check,
  ShieldCheck,
  ShieldAlert,
  UserCheck,
  Sliders,
  Settings,
  MoreVertical,
} from "lucide-react";
import { EmployeePermissions, AdminRole, DEFAULT_PERMISSIONS } from "@/lib/types/rbac";
import AdminSidebar from "@/components/AdminSidebar";

// ── Types ─────────────────────────────────────────────────────────

interface Employee {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: AdminRole;
  status: "active" | "inactive";
  permissions: EmployeePermissions;
  lastLoginAt?: string;
  createdAt: string;
}

interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions?: EmployeePermissions;
}

// ── Main Page Component ───────────────────────────────────────────

export default function AdminEmployeesPage() {
  const router = useRouter();

  // Current admin
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Employees data
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Filters
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");

  // Add Employee Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [submittingAdd, setSubmittingAdd] = useState(false);
  const [addForm, setAddForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "counselor" as AdminRole,
    permissions: JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS.counselor)) as EmployeePermissions,
  });

  // Edit Permissions Modal
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [savingPermissions, setSavingPermissions] = useState(false);
  const [editPermissionsForm, setEditPermissionsForm] = useState<EmployeePermissions | null>(null);

  // Password Reset Modal
  const [resetTargetEmployee, setResetTargetEmployee] = useState<Employee | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);

  // Delete Modal
  const [deletingEmployee, setDeletingEmployee] = useState<Employee | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Toast feedback
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

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
        if (data.user) {
          setCurrentUser(data.user);
          const isSuper = data.user.role === "superadmin" || data.user.email === "wasim@yastudy.com";
          if (!isSuper && !data.user.permissions?.employees?.view) {
            router.replace("/admin/dashboard");
            return;
          }
        } else {
          router.replace("/admin");
        }
      } catch {
        router.replace("/admin");
      } finally {
        setAuthLoading(false);
      }
    }
    checkAuth();
  }, [router]);

  // 2. Fetch Employees
  const fetchEmployees = useCallback(async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else setLoading(true);

    try {
      const res = await fetch("/api/employees", { cache: "no-store" });
      if (!res.ok) {
        if (res.status === 401) {
          router.replace("/admin");
          return;
        }
        throw new Error("Failed to load employees");
      }
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setEmployees(data.data);
      }
    } catch (err) {
      console.error("Error fetching employees:", err);
      showToast("Unable to load employees list.", "error");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [router]);

  useEffect(() => {
    if (!authLoading && currentUser) {
      fetchEmployees();
    }
  }, [authLoading, currentUser, fetchEmployees]);

  // 3. Handle Add Employee
  const handleRolePresetChange = (role: AdminRole) => {
    const preset = JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS[role] || DEFAULT_PERMISSIONS.staff));
    setAddForm((prev) => ({
      ...prev,
      role,
      permissions: preset,
    }));
  };

  const handleCreateEmployee = async (e: FormEvent) => {
    e.preventDefault();
    if (!addForm.name.trim() || !addForm.email.trim() || !addForm.password) {
      showToast("Please fill in Name, Email, and Password.", "error");
      return;
    }
    if (addForm.password.length < 6) {
      showToast("Password must be at least 6 characters.", "error");
      return;
    }

    setSubmittingAdd(true);
    try {
      const res = await fetch("/api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addForm),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to create employee.");
      }
      showToast(`Employee "${addForm.name}" created successfully!`);
      setIsAddModalOpen(false);
      setAddForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "counselor",
        permissions: JSON.parse(JSON.stringify(DEFAULT_PERMISSIONS.counselor)),
      });
      fetchEmployees();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error creating employee";
      showToast(msg, "error");
    } finally {
      setSubmittingAdd(false);
    }
  };

  // 4. Handle Save Permissions
  const handleSavePermissions = async () => {
    if (!editingEmployee || !editPermissionsForm) return;
    setSavingPermissions(true);

    try {
      const res = await fetch(`/api/employees/${editingEmployee.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ permissions: editPermissionsForm }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to update permissions");
      }
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.id === editingEmployee.id ? { ...emp, permissions: editPermissionsForm } : emp
        )
      );
      showToast(`Permissions updated for ${editingEmployee.name}!`);
      setEditingEmployee(null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error saving permissions";
      showToast(msg, "error");
    } finally {
      setSavingPermissions(false);
    }
  };

  // 5. Handle Status Toggle
  const handleToggleStatus = async (employee: Employee) => {
    const newStatus = employee.status === "active" ? "inactive" : "active";
    try {
      const res = await fetch(`/api/employees/${employee.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to update status");
      }
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === employee.id ? { ...emp, status: newStatus } : emp))
      );
      showToast(`Status changed to ${newStatus.toUpperCase()}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error changing status";
      showToast(msg, "error");
    }
  };

  // 6. Handle Password Reset
  const handleResetPassword = async () => {
    if (!resetTargetEmployee || !newPassword) return;
    if (newPassword.length < 6) {
      showToast("New password must be at least 6 characters.", "error");
      return;
    }
    setSavingPassword(true);

    try {
      const res = await fetch(`/api/employees/${resetTargetEmployee.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to reset password");
      }
      showToast(`Password updated for ${resetTargetEmployee.name}!`);
      setResetTargetEmployee(null);
      setNewPassword("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error resetting password";
      showToast(msg, "error");
    } finally {
      setSavingPassword(false);
    }
  };

  // 7. Handle Delete
  const handleDeleteEmployee = async () => {
    if (!deletingEmployee) return;
    setIsDeleting(true);

    try {
      const res = await fetch(`/api/employees/${deletingEmployee.id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete employee");
      }
      setEmployees((prev) => prev.filter((e) => e.id !== deletingEmployee.id));
      showToast(`Employee "${deletingEmployee.name}" deleted.`);
      setDeletingEmployee(null);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error deleting employee";
      showToast(msg, "error");
    } finally {
      setIsDeleting(false);
    }
  };

  // Derived metrics
  const stats = useMemo(() => {
    const total = employees.length;
    const active = employees.filter((e) => e.status === "active").length;
    const superCount = employees.filter((e) => e.role === "superadmin").length;
    const invoiceAccess = employees.filter(
      (e) => e.role === "superadmin" || e.permissions?.invoices?.view
    ).length;
    return { total, active, superCount, invoiceAccess };
  }, [employees]);

  // Filtered employees
  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      if (roleFilter !== "all" && emp.role !== roleFilter) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        const mName = emp.name?.toLowerCase().includes(q);
        const mEmail = emp.email?.toLowerCase().includes(q);
        const mPhone = emp.phone?.toLowerCase().includes(q);
        if (!mName && !mEmail && !mPhone) return false;
      }
      return true;
    });
  }, [employees, roleFilter, search]);

  const getRoleBadge = (role: AdminRole) => {
    switch (role) {
      case "superadmin":
        return { label: "Super Admin", bg: "bg-purple-50 text-purple-700 border-purple-200" };
      case "admin":
        return { label: "Administrator", bg: "bg-indigo-50 text-indigo-700 border-indigo-200" };
      case "manager":
        return { label: "Branch Manager", bg: "bg-blue-50 text-blue-700 border-blue-200" };
      case "counselor":
        return { label: "Visa Counselor", bg: "bg-emerald-50 text-emerald-700 border-emerald-200" };
      case "accountant":
        return { label: "Accountant / Billing", bg: "bg-amber-50 text-amber-800 border-amber-200" };
      default:
        return { label: "Staff", bg: "bg-slate-100 text-slate-700 border-slate-200" };
    }
  };

  if (authLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-white">
        <div className="w-10 h-10 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4" />
        <p className="text-sm font-medium text-slate-400">Verifying access rights...</p>
      </div>
    );
  }

  if (!currentUser) return null;

  const isSuperAdmin = currentUser.role === "superadmin" || currentUser.email === "wasim@yastudy.com";
  const canManageEmployees = isSuperAdmin || Boolean(currentUser.permissions?.employees?.manage);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f8fafc] font-sans">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl text-sm font-bold text-white transition-all animate-bounce ${
            toast.type === "success" ? "bg-emerald-600" : "bg-red-600"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Responsive Unified Admin Sidebar */}
      <AdminSidebar
        currentUser={currentUser}
        counts={{
          employees: employees.length,
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen">
        {/* Header Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Employees &amp; Access Control
              </h1>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-indigo-100 text-indigo-800 border border-indigo-200">
                <Users className="w-3.5 h-3.5 text-indigo-600" />
                {employees.length} Staff Profiles
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Configure granular module access (Invoices, Leads, Tracker, Jobs) per employee
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => fetchEmployees(true)}
              disabled={refreshing || loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200 cursor-pointer disabled:opacity-50"
              title="Sync latest staff roster"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-indigo-600" : "text-slate-600"}`} />
              <span>{refreshing ? "Syncing..." : "Sync"}</span>
            </button>

            {canManageEmployees && (
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-sm transition-all cursor-pointer"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Add Employee</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 KPI Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Staff</span>
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">{stats.total}</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">Registered staff profiles</div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Logins</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <UserCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">{stats.active}</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">Authorized for sign-in</div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Super Admins</span>
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-purple-600">{stats.superCount}</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">Unrestricted tier</div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Invoice Access</span>
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-600">{stats.invoiceAccess}</div>
            <div className="text-[11px] text-slate-500 font-medium mt-1">Financial billing allowed</div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4 mb-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-between">
            {/* Search */}
            <div className="relative flex-1 min-w-[260px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search staff by name, email, or phone..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Role Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {[
                { id: "all", label: "All Staff" },
                { id: "superadmin", label: "Super Admin" },
                { id: "manager", label: "Managers" },
                { id: "counselor", label: "Counselors" },
                { id: "accountant", label: "Accountants" },
                { id: "staff", label: "Custom Staff" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setRoleFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex-shrink-0 ${
                    roleFilter === tab.id
                      ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/60"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Staff Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-slate-500">
              <div className="w-10 h-10 border-4 border-indigo-500/20 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
              <p className="text-sm font-semibold text-slate-700">Loading staff accounts &amp; permissions...</p>
            </div>
          ) : filteredEmployees.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-slate-800">No Staff Accounts Found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-5">
                {search || roleFilter !== "all"
                  ? "No employees matched your current search filters."
                  : "Click '+ Add Employee' to create an account with customized permissions."}
              </p>
              {(search || roleFilter !== "all") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setRoleFilter("all");
                  }}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                >
                  Clear Filters
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4 w-12 text-center">#</th>
                    <th className="py-3.5 px-4">Employee Details</th>
                    <th className="py-3.5 px-4">Role</th>
                    <th className="py-3.5 px-4">Allowed Sections (RBAC)</th>
                    <th className="py-3.5 px-4 text-center">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredEmployees.map((emp, idx) => {
                    const roleBadge = getRoleBadge(emp.role);
                    const isSelf = currentUser.id === emp.id;
                    const isSuper = emp.role === "superadmin" || emp.email === "wasim@yastudy.com";

                    // Calculate permission tags
                    const p = emp.permissions || DEFAULT_PERMISSIONS[emp.role] || DEFAULT_PERMISSIONS.staff;
                    const hasInvoices = isSuper || p.invoices?.view;
                    const hasInquiries = isSuper || p.inquiries?.view;
                    const hasJobs = isSuper || p.jobs?.view;
                    const hasApps = isSuper || p.applications?.view;
                    const hasEmpMgmt = isSuper || p.employees?.view;

                    return (
                      <tr key={emp.id} className="hover:bg-slate-50/70 transition-colors">
                        {/* Index */}
                        <td className="py-3.5 px-4 text-center font-bold text-xs text-slate-400">
                          {idx + 1}
                        </td>

                        {/* Name & Contact */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-700 font-bold flex items-center justify-center flex-shrink-0 text-sm border border-indigo-100">
                              {emp.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-900">{emp.name}</span>
                                {isSelf && (
                                  <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-md">
                                    You
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-slate-500">{emp.email}</div>
                              {emp.phone && (
                                <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                                  <Phone className="w-3 h-3" />
                                  <span>{emp.phone}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Role Badge */}
                        <td className="py-3.5 px-4">
                          <span
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border inline-block ${roleBadge.bg}`}
                          >
                            {roleBadge.label}
                          </span>
                        </td>

                        {/* Allowed Sections */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {/* Tracker */}
                            <span
                              className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border flex items-center gap-1 ${
                                hasApps
                                  ? "bg-purple-50 text-purple-700 border-purple-200"
                                  : "bg-red-50 text-red-500 border-red-100 opacity-60"
                              }`}
                            >
                              <Compass className="w-3 h-3" />
                              <span>Tracker: {hasApps ? "Yes" : "No"}</span>
                            </span>

                            {/* Invoices */}
                            <span
                              className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border flex items-center gap-1 ${
                                hasInvoices
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : "bg-red-50 text-red-500 border-red-100 opacity-60"
                              }`}
                            >
                              <FileText className="w-3 h-3" />
                              <span>Invoices: {hasInvoices ? "Yes" : "No"}</span>
                            </span>

                            {/* Inquiries */}
                            <span
                              className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border flex items-center gap-1 ${
                                hasInquiries
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : "bg-red-50 text-red-500 border-red-100 opacity-60"
                              }`}
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span>Leads: {hasInquiries ? "Yes" : "No"}</span>
                            </span>

                            {/* Jobs */}
                            <span
                              className={`px-2 py-0.5 rounded-md text-[11px] font-semibold border flex items-center gap-1 ${
                                hasJobs
                                  ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                                  : "bg-red-50 text-red-500 border-red-100 opacity-60"
                              }`}
                            >
                              <Briefcase className="w-3 h-3" />
                              <span>Jobs: {hasJobs ? "Yes" : "No"}</span>
                            </span>

                            {/* Staff admin */}
                            {hasEmpMgmt && (
                              <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold border bg-amber-50 text-amber-800 border-amber-200 flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                <span>Staff Admin</span>
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Status Toggle */}
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => !isSuper && handleToggleStatus(emp)}
                            disabled={isSuper || !canManageEmployees}
                            className={`px-2.5 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1.5 transition-all ${
                              emp.status === "active"
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : "bg-slate-100 text-slate-500 border border-slate-200"
                            } ${isSuper || !canManageEmployees ? "cursor-default" : "cursor-pointer hover:opacity-80"}`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                emp.status === "active" ? "bg-emerald-500" : "bg-slate-400"
                              }`}
                            />
                            <span>{emp.status === "active" ? "Active" : "Inactive"}</span>
                          </button>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {canManageEmployees && (
                              <>
                                <button
                                  onClick={() => {
                                    setEditingEmployee(emp);
                                    setEditPermissionsForm(
                                      JSON.parse(
                                        JSON.stringify(
                                          emp.permissions || DEFAULT_PERMISSIONS[emp.role] || DEFAULT_PERMISSIONS.staff
                                        )
                                      )
                                    );
                                  }}
                                  className="px-2.5 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                                  title="Configure Granular Permissions"
                                >
                                  <Shield className="w-3.5 h-3.5 text-indigo-600" />
                                  <span>Permissions</span>
                                </button>

                                <button
                                  onClick={() => {
                                    setResetTargetEmployee(emp);
                                    setNewPassword("");
                                  }}
                                  className="p-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-xl transition-all shadow-sm"
                                  title="Reset Password"
                                >
                                  <Key className="w-3.5 h-3.5 text-amber-500" />
                                </button>
                              </>
                            )}

                            {!isSuper && !isSelf && canManageEmployees && (
                              <button
                                onClick={() => setDeletingEmployee(emp)}
                                className="p-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-xl transition-all shadow-sm"
                                title="Delete Employee Account"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ── MODAL: ADD NEW EMPLOYEE ── */}
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Add New Staff / Employee</h3>
                    <p className="text-xs text-slate-500">
                      Create credentials and specify exact module permissions
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateEmployee} className="space-y-4">
                {/* 2-col inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={addForm.name}
                      onChange={(e) => setAddForm((d) => ({ ...d, name: e.target.value }))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Login ID) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya@workwisevisa.com"
                      value={addForm.email}
                      onChange={(e) => setAddForm((d) => ({ ...d, email: e.target.value }))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Initial Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="Minimum 6 characters"
                      value={addForm.password}
                      onChange={(e) => setAddForm((d) => ({ ...d, password: e.target.value }))}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="e.g. 9876543210"
                      value={addForm.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9+]/g, "");
                        setAddForm((d) => ({ ...d, phone: val }));
                      }}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Role Preset */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Role Preset (Auto-configures Recommended Defaults)
                  </label>
                  <select
                    value={addForm.role}
                    onChange={(e) => handleRolePresetChange(e.target.value as AdminRole)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  >
                    <option value="counselor">Visa Counselor (Inquiries &amp; Tracker Allowed · Invoices Blocked)</option>
                    <option value="accountant">Accountant / Billing (Invoices Full Access · Leads Blocked)</option>
                    <option value="manager">Branch Manager (Invoices, Leads &amp; Tracker Access)</option>
                    <option value="staff">Custom Staff Member (Select Below)</option>
                    <option value="superadmin">Super Administrator (Unrestricted Full Access)</option>
                  </select>
                </div>

                {/* Granular Permission Matrix */}
                <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200 space-y-3">
                  <div className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Granular Module Access
                  </div>

                  {/* Application Tracker */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                        <Compass className="w-4 h-4 text-purple-600" />
                        <span>Application Tracker &amp; Visas</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {[
                        { key: "view", label: "View Tracker" },
                        { key: "create", label: "Enroll Cases" },
                        { key: "edit", label: "Edit Milestones" },
                        { key: "delete", label: "Delete Case" },
                      ].map((item) => (
                        <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={Boolean(addForm.permissions.applications?.[item.key as keyof typeof addForm.permissions.applications])}
                            onChange={(e) =>
                              setAddForm((d) => ({
                                ...d,
                                permissions: {
                                  ...d.permissions,
                                  applications: {
                                    ...(d.permissions.applications || { view: false, create: false, edit: false, delete: false }),
                                    [item.key]: e.target.checked,
                                  },
                                },
                              }))
                            }
                            className="w-4 h-4 text-purple-600 rounded border-slate-300 focus:ring-purple-500"
                          />
                          <span className="text-slate-700">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Invoices */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-emerald-600" />
                        <span>Invoices &amp; Billing</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                      {[
                        { key: "view", label: "View Invoices" },
                        { key: "create", label: "Create Invoice" },
                        { key: "edit", label: "Edit Invoice" },
                        { key: "delete", label: "Delete" },
                        { key: "print", label: "Print A4" },
                      ].map((item) => (
                        <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={Boolean(addForm.permissions.invoices?.[item.key as keyof typeof addForm.permissions.invoices])}
                            onChange={(e) =>
                              setAddForm((d) => ({
                                ...d,
                                permissions: {
                                  ...d.permissions,
                                  invoices: {
                                    ...d.permissions.invoices,
                                    [item.key]: e.target.checked,
                                  },
                                },
                              }))
                            }
                            className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                          />
                          <span className="text-slate-700">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Consultation Leads */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-blue-600" />
                        <span>Consultation Leads / Inquiries</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {[
                        { key: "view", label: "View Leads" },
                        { key: "edit", label: "Update Status" },
                        { key: "delete", label: "Delete Leads" },
                        { key: "export", label: "Export CSV" },
                      ].map((item) => (
                        <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={Boolean(addForm.permissions.inquiries?.[item.key as keyof typeof addForm.permissions.inquiries])}
                            onChange={(e) =>
                              setAddForm((d) => ({
                                ...d,
                                permissions: {
                                  ...d.permissions,
                                  inquiries: {
                                    ...d.permissions.inquiries,
                                    [item.key]: e.target.checked,
                                  },
                                },
                              }))
                            }
                            className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                          />
                          <span className="text-slate-700">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Job Listings */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200/80">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-indigo-600" />
                        <span>Job Listings &amp; Demands</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {[
                        { key: "view", label: "View Jobs" },
                        { key: "create", label: "Post Jobs" },
                        { key: "edit", label: "Edit Jobs" },
                        { key: "delete", label: "Delete Jobs" },
                      ].map((item) => (
                        <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={Boolean(addForm.permissions.jobs?.[item.key as keyof typeof addForm.permissions.jobs])}
                            onChange={(e) =>
                              setAddForm((d) => ({
                                ...d,
                                permissions: {
                                  ...d.permissions,
                                  jobs: {
                                    ...d.permissions.jobs,
                                    [item.key]: e.target.checked,
                                  },
                                },
                              }))
                            }
                            className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                          />
                          <span className="text-slate-700">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submittingAdd}
                    className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 flex items-center gap-2"
                  >
                    {submittingAdd ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Creating...</span>
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4" />
                        <span>Save Employee Account</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ── MODAL: EDIT PERMISSIONS ── */}
        {editingEmployee && editPermissionsForm && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      Edit Permissions: {editingEmployee.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Role: <strong className="uppercase">{editingEmployee.role}</strong> ({editingEmployee.email})
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setEditingEmployee(null)}
                  className="p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Application Tracker */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-purple-900 mb-2.5 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-purple-600" />
                    <span>Application Tracker &amp; Visas</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {[
                      { key: "view", label: "View Tracker" },
                      { key: "create", label: "Enroll Cases" },
                      { key: "edit", label: "Update Milestones" },
                      { key: "delete", label: "Delete Case" },
                    ].map((item) => (
                      <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={Boolean(editPermissionsForm.applications?.[item.key as keyof typeof editPermissionsForm.applications])}
                          onChange={(e) =>
                            setEditPermissionsForm((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    applications: {
                                      ...(prev.applications || { view: false, create: false, edit: false, delete: false }),
                                      [item.key]: e.target.checked,
                                    },
                                  }
                                : null
                            )
                          }
                          className="w-4 h-4 text-purple-600 rounded border-slate-300 focus:ring-purple-500"
                        />
                        <span className="text-slate-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Invoices */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-emerald-900 mb-2.5 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>Invoices &amp; Billing</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                    {[
                      { key: "view", label: "View Invoices" },
                      { key: "create", label: "Create Invoice" },
                      { key: "edit", label: "Edit Invoice" },
                      { key: "delete", label: "Delete" },
                      { key: "print", label: "Print A4" },
                    ].map((item) => (
                      <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={Boolean(editPermissionsForm.invoices?.[item.key as keyof typeof editPermissionsForm.invoices])}
                          onChange={(e) =>
                            setEditPermissionsForm((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    invoices: {
                                      ...prev.invoices,
                                      [item.key]: e.target.checked,
                                    },
                                  }
                                : null
                            )
                          }
                          className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                        />
                        <span className="text-slate-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Consultation Leads */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-blue-900 mb-2.5 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span>Consultation Leads / Inquiries</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {[
                      { key: "view", label: "View Leads" },
                      { key: "edit", label: "Update Status" },
                      { key: "delete", label: "Delete Leads" },
                      { key: "export", label: "Export CSV" },
                    ].map((item) => (
                      <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={Boolean(editPermissionsForm.inquiries?.[item.key as keyof typeof editPermissionsForm.inquiries])}
                          onChange={(e) =>
                            setEditPermissionsForm((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    inquiries: {
                                      ...prev.inquiries,
                                      [item.key]: e.target.checked,
                                    },
                                  }
                                : null
                            )
                          }
                          className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                        />
                        <span className="text-slate-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Listings */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-indigo-900 mb-2.5 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-indigo-600" />
                    <span>Job Listings &amp; Demands</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    {[
                      { key: "view", label: "View Jobs" },
                      { key: "create", label: "Post Jobs" },
                      { key: "edit", label: "Edit Jobs" },
                      { key: "delete", label: "Delete Jobs" },
                    ].map((item) => (
                      <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={Boolean(editPermissionsForm.jobs?.[item.key as keyof typeof editPermissionsForm.jobs])}
                          onChange={(e) =>
                            setEditPermissionsForm((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    jobs: {
                                      ...prev.jobs,
                                      [item.key]: e.target.checked,
                                    },
                                  }
                                : null
                            )
                          }
                          className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                        />
                        <span className="text-slate-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Staff Administration */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-amber-900 mb-2.5 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span>Staff &amp; Role Administration</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { key: "view", label: "View Staff List" },
                      { key: "manage", label: "Manage Roles & Add Staff" },
                    ].map((item) => (
                      <label key={item.key} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={Boolean(editPermissionsForm.employees?.[item.key as keyof typeof editPermissionsForm.employees])}
                          onChange={(e) =>
                            setEditPermissionsForm((prev) =>
                              prev
                                ? {
                                    ...prev,
                                    employees: {
                                      ...prev.employees,
                                      [item.key]: e.target.checked,
                                    },
                                  }
                                : null
                            )
                          }
                          className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500"
                        />
                        <span className="text-slate-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setEditingEmployee(null)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSavePermissions}
                    disabled={savingPermissions}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 flex items-center gap-2"
                  >
                    {savingPermissions ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4" />
                        <span>Save Permissions</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── MODAL: RESET PASSWORD ── */}
        {resetTargetEmployee && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
                <Key className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 text-center mb-1">
                Reset Staff Password
              </h3>
              <p className="text-xs text-slate-500 text-center mb-5">
                Set a new login password for <strong>{resetTargetEmployee.name}</strong> ({resetTargetEmployee.email}).
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter at least 6 characters"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all"
                  />
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setResetTargetEmployee(null);
                      setNewPassword("");
                    }}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleResetPassword}
                    disabled={savingPassword || !newPassword}
                    className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-amber-500/20 disabled:opacity-50"
                  >
                    {savingPassword ? "Updating..." : "Update Password"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── MODAL: DELETE CONFIRMATION ── */}
        {deletingEmployee && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 text-center">
              <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-1">Delete Employee Profile?</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Are you sure you want to remove <strong>{deletingEmployee.name}</strong> ({deletingEmployee.email})? Their system login access will be permanently revoked.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setDeletingEmployee(null)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteEmployee}
                  disabled={isDeleting}
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-red-500/20"
                >
                  {isDeleting ? "Deleting..." : "Yes, Delete Account"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
