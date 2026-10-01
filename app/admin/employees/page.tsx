"use client";

/* ================================================================
   app/admin/employees/page.tsx — WorkWise Visa Staff & RBAC Permissions
   Full Role-Based Access Control:
   - Create and manage employees
   - Assign custom granular permissions for Invoices, Inquiries, Jobs, and Staff
   - Control who can view, add, edit, delete, or export in each section
   ================================================================ */

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  UserPlus,
  Shield,
  Key,
  Trash2,
  Edit,
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
  Printer,
  FileSpreadsheet,
} from "lucide-react";
import { EmployeePermissions, AdminRole, DEFAULT_PERMISSIONS } from "@/lib/types/rbac";
import AdminSidebar from "@/components/AdminSidebar";

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
          // Verify if user has permission to view employees
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

  const handleCreateEmployee = async (e: React.FormEvent) => {
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

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      router.replace("/admin");
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
        return { label: "Super Admin", bg: "#f5f3ff", color: "#6d28d9", border: "#ddd6fe" };
      case "admin":
        return { label: "Administrator", bg: "#eef2ff", color: "#4338ca", border: "#c7d2fe" };
      case "manager":
        return { label: "Branch Manager", bg: "#eff6ff", color: "#1d4ed8", border: "#bfdbfe" };
      case "counselor":
        return { label: "Visa Counselor", bg: "#ecfdf5", color: "#047857", border: "#a7f3d0" };
      case "accountant":
        return { label: "Accountant / Billing", bg: "#fffbeb", color: "#b45309", border: "#fde68a" };
      default:
        return { label: "Staff", bg: "#f1f5f9", color: "#475569", border: "#cbd5e1" };
    }
  };

  if (authLoading) {
    return (
      <div style={s.loadingContainer}>
        <div style={s.spinner} />
        <p style={{ marginTop: "12px", color: "white", fontSize: "14px" }}>
          Verifying access rights...
        </p>
      </div>
    );
  }

  if (!currentUser) return null;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#f8fafc] font-sans">
      {/* Toast Notification */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "24px",
            right: "24px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            fontSize: "14px",
            fontWeight: 600,
            background: toast.type === "success" ? "#10b981" : "#ef4444",
            color: "white",
            animation: "fadeIn 0.2s ease-in-out",
          }}
        >
          {toast.type === "success" ? (
            <CheckCircle2 style={{ width: "18px", height: "18px" }} />
          ) : (
            <AlertCircle style={{ width: "18px", height: "18px" }} />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* ── RESPONSIVE UNIFIED SIDEBAR ── */}
      <AdminSidebar
        currentUser={currentUser}
        counts={{
          employees: employees.length,
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-screen">
        {/* Header */}
        <div style={s.header}>
          <div>
            <h1 style={s.pageTitle}>Employees &amp; Access Control</h1>
            <p style={s.pageSubtitle}>
              Assign section permissions (Invoices, Leads, Jobs) so staff only access what they are granted.
            </p>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button
              onClick={() => fetchEmployees(true)}
              disabled={refreshing || loading}
              style={{ ...s.btnSecondary, display: "flex", alignItems: "center", gap: "8px" }}
              title="Refresh Employees"
            >
              <RefreshCw
                className={refreshing ? "animate-spin" : ""}
                style={{ width: "15px", height: "15px", color: refreshing ? "#6366f1" : "inherit" }}
              />
              <span>{refreshing ? "Syncing..." : "Refresh"}</span>
            </button>

            <button
              onClick={() => setIsAddModalOpen(true)}
              style={{ ...s.btnPrimary, display: "flex", alignItems: "center", gap: "8px" }}
            >
              <UserPlus style={{ width: "15px", height: "15px" }} />
              <span>+ Add New Employee</span>
            </button>
          </div>
        </div>

        {/* ── KPI Stat Cards ── */}
        <div style={s.statsRow}>
          {[
            { label: "Total Staff", value: stats.total, color: "#6366f1" },
            { label: "Active Accounts", value: stats.active, color: "#10b981" },
            { label: "Super Admins", value: stats.superCount, color: "#8b5cf6" },
            { label: "Permitted to Invoices", value: stats.invoiceAccess, color: "#f59e0b" },
          ].map((stat) => (
            <div key={stat.label} style={s.statCard}>
              <div style={{ fontSize: "28px", fontWeight: 800, color: stat.color }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px", fontWeight: 600 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Search & Filter Bar ── */}
        <div style={{ ...s.card, padding: "16px 20px", marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Search */}
            <div style={{ position: "relative", flex: 1, minWidth: "260px" }}>
              <Search
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "16px",
                  height: "16px",
                  color: "#9ca3af",
                  pointerEvents: "none",
                }}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search staff by name, email, or phone..."
                style={{ ...s.input, paddingLeft: "40px", fontSize: "13px", width: "100%" }}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#9ca3af",
                  }}
                >
                  <X style={{ width: "15px", height: "15px" }} />
                </button>
              )}
            </div>

            {/* Role Filter Chips */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
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
                  style={{
                    padding: "7px 14px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 700,
                    cursor: "pointer",
                    border: "1px solid",
                    transition: "all 0.15s",
                    background: roleFilter === tab.id ? "#6366f1" : "#f8fafc",
                    color: roleFilter === tab.id ? "white" : "#475569",
                    borderColor: roleFilter === tab.id ? "#6366f1" : "#e2e8f0",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Employees Table ── */}
        <div style={s.card}>
          {loading ? (
            <div style={{ padding: "48px", textAlign: "center", color: "#6b7280" }}>
              <RefreshCw
                className="animate-spin"
                style={{ width: "24px", height: "24px", margin: "0 auto 12px", color: "#6366f1" }}
              />
              Loading employees &amp; permissions…
            </div>
          ) : filteredEmployees.length === 0 ? (
            <div style={{ padding: "56px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "44px", marginBottom: "12px" }}>👥</div>
              <div style={{ color: "#374151", fontWeight: 700, fontSize: "16px" }}>
                No Employees Found
              </div>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "13px",
                  marginTop: "4px",
                  maxWidth: "460px",
                  margin: "4px auto 0",
                }}
              >
                {search || roleFilter !== "all"
                  ? "No staff matched your active search query."
                  : "Click '+ Add New Employee' above to create a staff account with specific permissions."}
              </p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={s.table}>
                <thead>
                  <tr>
                    <th style={{ ...s.th, width: "40px", textAlign: "center" }}>#</th>
                    <th style={s.th}>Employee Details</th>
                    <th style={s.th}>Role</th>
                    <th style={s.th}>Allowed Sections (RBAC)</th>
                    <th style={s.th}>Status</th>
                    <th style={{ ...s.th, textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((emp, idx) => {
                    const roleBadge = getRoleBadge(emp.role);
                    const isSelf = currentUser.id === emp.id;
                    const isSuper = emp.role === "superadmin" || emp.email === "wasim@yastudy.com";

                    // Calculate permission tags
                    const p = emp.permissions || DEFAULT_PERMISSIONS[emp.role] || DEFAULT_PERMISSIONS.staff;
                    const hasInvoices = isSuper || p.invoices?.view;
                    const hasInquiries = isSuper || p.inquiries?.view;
                    const hasJobs = isSuper || p.jobs?.view;
                    const hasEmpMgmt = isSuper || p.employees?.view;

                    return (
                      <tr
                        key={emp.id}
                        style={{
                          background: idx % 2 === 0 ? "white" : "#f9fafb",
                          transition: "background 0.15s",
                        }}
                      >
                        <td
                          style={{
                            ...s.td,
                            textAlign: "center",
                            color: "#9ca3af",
                            fontWeight: 700,
                            fontSize: "12px",
                          }}
                        >
                          {idx + 1}
                        </td>

                        {/* Name & Contact */}
                        <td style={s.td}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontWeight: 700, color: "#0f172a", fontSize: "14px" }}>
                              {emp.name}
                            </span>
                            {isSelf && (
                              <span
                                style={{
                                  background: "#f1f5f9",
                                  color: "#475569",
                                  borderRadius: "6px",
                                  padding: "1px 6px",
                                  fontSize: "10px",
                                  fontWeight: 700,
                                }}
                              >
                                You
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>
                            {emp.email}
                          </div>
                          {emp.phone && (
                            <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "2px" }}>
                              📞 {emp.phone}
                            </div>
                          )}
                        </td>

                        {/* Role Badge */}
                        <td style={s.td}>
                          <span
                            style={{
                              background: roleBadge.bg,
                              color: roleBadge.color,
                              border: `1px solid ${roleBadge.border}`,
                              borderRadius: "6px",
                              padding: "4px 10px",
                              fontSize: "12px",
                              fontWeight: 700,
                              display: "inline-block",
                            }}
                          >
                            {roleBadge.label}
                          </span>
                        </td>

                        {/* Allowed Sections */}
                        <td style={s.td}>
                          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                            {/* Invoices */}
                            <span
                              style={{
                                padding: "2px 8px",
                                borderRadius: "6px",
                                fontSize: "11px",
                                fontWeight: 700,
                                background: hasInvoices ? "#ecfdf5" : "#fef2f2",
                                color: hasInvoices ? "#047857" : "#b91c1c",
                                border: `1px solid ${hasInvoices ? "#a7f3d0" : "#fecaca"}`,
                              }}
                            >
                              📄 Invoices: {hasInvoices ? (isSuper ? "Full Access" : "Permitted") : "Blocked"}
                            </span>

                            {/* Inquiries */}
                            <span
                              style={{
                                padding: "2px 8px",
                                borderRadius: "6px",
                                fontSize: "11px",
                                fontWeight: 700,
                                background: hasInquiries ? "#eff6ff" : "#fef2f2",
                                color: hasInquiries ? "#1d4ed8" : "#b91c1c",
                                border: `1px solid ${hasInquiries ? "#bfdbfe" : "#fecaca"}`,
                              }}
                            >
                              💬 Leads: {hasInquiries ? "Permitted" : "Blocked"}
                            </span>

                            {/* Jobs */}
                            <span
                              style={{
                                padding: "2px 8px",
                                borderRadius: "6px",
                                fontSize: "11px",
                                fontWeight: 700,
                                background: hasJobs ? "#f5f3ff" : "#fef2f2",
                                color: hasJobs ? "#6d28d9" : "#b91c1c",
                                border: `1px solid ${hasJobs ? "#ddd6fe" : "#fecaca"}`,
                              }}
                            >
                              💼 Jobs: {hasJobs ? "Permitted" : "Blocked"}
                            </span>

                            {/* Employees */}
                            {hasEmpMgmt && (
                              <span
                                style={{
                                  padding: "2px 8px",
                                  borderRadius: "6px",
                                  fontSize: "11px",
                                  fontWeight: 700,
                                  background: "#fef3c7",
                                  color: "#92400e",
                                  border: "1px solid #fde68a",
                                }}
                              >
                                👥 Staff Admin
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Status Toggle */}
                        <td style={s.td}>
                          <button
                            onClick={() => !isSuper && handleToggleStatus(emp)}
                            disabled={isSuper}
                            style={{
                              border: "none",
                              background: emp.status === "active" ? "#ecfdf5" : "#f1f5f9",
                              color: emp.status === "active" ? "#059669" : "#64748b",
                              padding: "4px 10px",
                              borderRadius: "8px",
                              fontSize: "12px",
                              fontWeight: 700,
                              cursor: isSuper ? "default" : "pointer",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <span
                              style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                background: emp.status === "active" ? "#10b981" : "#94a3b8",
                              }}
                            />
                            {emp.status === "active" ? "Active" : "Inactive"}
                          </button>
                        </td>

                        {/* Actions */}
                        <td style={{ ...s.td, textAlign: "right" }}>
                          <div style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                            {/* Edit Permissions */}
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
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                background: "white",
                                border: "1.5px solid #e2e8f0",
                                borderRadius: "8px",
                                padding: "6px 10px",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#475569",
                                cursor: "pointer",
                              }}
                              title="Edit Permissions"
                            >
                              <Shield style={{ width: "13px", height: "13px", color: "#6366f1" }} />
                              <span>Permissions</span>
                            </button>

                            {/* Reset Password */}
                            <button
                              onClick={() => {
                                setResetTargetEmployee(emp);
                                setNewPassword("");
                              }}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                background: "white",
                                border: "1.5px solid #e2e8f0",
                                borderRadius: "8px",
                                padding: "6px 10px",
                                fontSize: "12px",
                                fontWeight: 700,
                                color: "#475569",
                                cursor: "pointer",
                              }}
                              title="Reset Password"
                            >
                              <Key style={{ width: "13px", height: "13px", color: "#f59e0b" }} />
                            </button>

                            {/* Delete Employee */}
                            {!isSuper && !isSelf && (
                              <button
                                onClick={() => setDeletingEmployee(emp)}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  background: "#fef2f2",
                                  border: "1px solid #fecaca",
                                  borderRadius: "8px",
                                  padding: "6px 8px",
                                  fontSize: "12px",
                                  color: "#dc2626",
                                  cursor: "pointer",
                                }}
                                title="Delete Employee"
                              >
                                <Trash2 style={{ width: "13px", height: "13px" }} />
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
      </main>

      {/* ── MODAL: ADD NEW EMPLOYEE ── */}
      {isAddModalOpen && (
        <div style={s.modalOverlay}>
          <div style={{ ...s.modalContent, maxWidth: "620px" }}>
            <div style={s.modalHeader}>
              <div>
                <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 800, color: "#0f172a" }}>
                  Add New Staff / Employee
                </h3>
                <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#64748b" }}>
                  Create credentials and choose which sections this staff member can access.
                </p>
              </div>
              <button onClick={() => setIsAddModalOpen(false)} style={s.closeBtn}>
                <X style={{ width: "18px", height: "18px" }} />
              </button>
            </div>

            <form onSubmit={handleCreateEmployee} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={s.label}>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={addForm.name}
                    onChange={(e) => setAddForm((d) => ({ ...d, name: e.target.value }))}
                    style={s.input}
                  />
                </div>

                <div>
                  <label style={s.label}>Email Address (Login ID) *</label>
                  <input
                    type="email"
                    required
                    placeholder="priya@workwisevisa.com"
                    value={addForm.email}
                    onChange={(e) => setAddForm((d) => ({ ...d, email: e.target.value }))}
                    style={s.input}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <label style={s.label}>Initial Password *</label>
                  <input
                    type="password"
                    required
                    placeholder="Minimum 6 characters"
                    value={addForm.password}
                    onChange={(e) => setAddForm((d) => ({ ...d, password: e.target.value }))}
                    style={s.input}
                  />
                </div>

                <div>
                  <label style={s.label}>Phone Number (Optional)</label>
                  <input
                    type="tel"
                    inputMode="numeric"
                    placeholder="e.g. 9876543210 or +919876543210"
                    value={addForm.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9+]/g, "");
                      setAddForm((d) => ({ ...d, phone: val }));
                    }}
                    style={s.input}
                  />
                </div>
              </div>

              {/* Role Preset Selector */}
              <div>
                <label style={s.label}>Role Preset (Auto-sets Recommended Permissions)</label>
                <select
                  value={addForm.role}
                  onChange={(e) => handleRolePresetChange(e.target.value as AdminRole)}
                  style={{ ...s.input, width: "100%", fontWeight: 700 }}
                >
                  <option value="counselor">Visa Counselor / Telecaller (Inquiries Only · Invoices Blocked)</option>
                  <option value="accountant">Accountant / Billing (Invoices Full Access · Leads Blocked)</option>
                  <option value="manager">Branch Manager (Invoices &amp; Leads Access)</option>
                  <option value="staff">Custom Staff Member (Custom Checkboxes)</option>
                  <option value="superadmin">Super Administrator (Unrestricted Full Access)</option>
                </select>
              </div>

              {/* Granular Permission Matrix */}
              <div style={{ border: "1px solid #e2e8f0", borderRadius: "12px", padding: "14px", background: "#f8fafc" }}>
                <div style={{ fontSize: "12px", fontWeight: 800, color: "#1e293b", marginBottom: "10px", textTransform: "uppercase" }}>
                  Granular Section Permissions
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {/* Invoices Group */}
                  <div style={{ background: "white", padding: "10px 12px", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <FileText style={{ width: "14px", height: "14px", color: "#6366f1" }} />
                      Invoices Management
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: "8px" }}>
                      {[
                        { key: "view", label: "View Invoices" },
                        { key: "create", label: "Create Invoice" },
                        { key: "edit", label: "Edit Invoice" },
                        { key: "delete", label: "Delete Invoice" },
                        { key: "print", label: "Print A4" },
                      ].map((item) => (
                        <label key={item.key} style={s.checkboxLabel}>
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
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Inquiries Group */}
                  <div style={{ background: "white", padding: "10px 12px", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <MessageSquare style={{ width: "14px", height: "14px", color: "#10b981" }} />
                      Consultation Leads / Inquiries
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: "8px" }}>
                      {[
                        { key: "view", label: "View Leads" },
                        { key: "edit", label: "Update Status & Notes" },
                        { key: "delete", label: "Delete Leads" },
                        { key: "export", label: "Export CSV" },
                      ].map((item) => (
                        <label key={item.key} style={s.checkboxLabel}>
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
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Jobs Group */}
                  <div style={{ background: "white", padding: "10px 12px", borderRadius: "8px", border: "1px solid #f1f5f9" }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Briefcase style={{ width: "14px", height: "14px", color: "#3b82f6" }} />
                      Job Listings
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: "8px" }}>
                      {[
                        { key: "view", label: "View Jobs" },
                        { key: "create", label: "Post Job" },
                        { key: "edit", label: "Edit Job" },
                        { key: "delete", label: "Delete Job" },
                      ].map((item) => (
                        <label key={item.key} style={s.checkboxLabel}>
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
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "8px" }}>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  style={s.btnSecondary}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submittingAdd}
                  style={{ ...s.btnPrimary, display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <UserPlus style={{ width: "15px", height: "15px" }} />
                  <span>{submittingAdd ? "Creating..." : "Save Employee Account"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── MODAL: EDIT PERMISSIONS ── */}
      {editingEmployee && editPermissionsForm && (
        <div style={s.modalOverlay}>
          <div style={{ ...s.modalContent, maxWidth: "580px" }}>
            <div style={s.modalHeader}>
              <div>
                <h3 style={{ margin: 0, fontSize: "17px", fontWeight: 800, color: "#0f172a" }}>
                  Edit Permissions: {editingEmployee.name}
                </h3>
                <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#64748b" }}>
                  Role: <strong>{editingEmployee.role.toUpperCase()}</strong> ({editingEmployee.email})
                </p>
              </div>
              <button onClick={() => setEditingEmployee(null)} style={s.closeBtn}>
                <X style={{ width: "18px", height: "18px" }} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Invoices Group */}
              <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <FileText style={{ width: "15px", height: "15px", color: "#6366f1" }} />
                  Invoices Section
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "8px" }}>
                  {[
                    { key: "view", label: "View Invoices" },
                    { key: "create", label: "Create Invoice" },
                    { key: "edit", label: "Edit Invoice" },
                    { key: "delete", label: "Delete Invoice" },
                    { key: "print", label: "Print / PDF" },
                  ].map((item) => (
                    <label key={item.key} style={s.checkboxLabel}>
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
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Inquiries Group */}
              <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <MessageSquare style={{ width: "15px", height: "15px", color: "#10b981" }} />
                  Consultation Leads / Inquiries
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "8px" }}>
                  {[
                    { key: "view", label: "View Leads" },
                    { key: "edit", label: "Update Status & Notes" },
                    { key: "delete", label: "Delete Leads" },
                    { key: "export", label: "Export CSV" },
                  ].map((item) => (
                    <label key={item.key} style={s.checkboxLabel}>
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
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Jobs Group */}
              <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Briefcase style={{ width: "15px", height: "15px", color: "#3b82f6" }} />
                  Job Listings
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "8px" }}>
                  {[
                    { key: "view", label: "View Jobs" },
                    { key: "create", label: "Post Job" },
                    { key: "edit", label: "Edit Job" },
                    { key: "delete", label: "Delete Job" },
                  ].map((item) => (
                    <label key={item.key} style={s.checkboxLabel}>
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
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Employees Access Group */}
              <div style={{ background: "#f8fafc", padding: "12px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Users style={{ width: "15px", height: "15px", color: "#f59e0b" }} />
                  Employees &amp; Staff Administration
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "8px" }}>
                  {[
                    { key: "view", label: "View Staff List" },
                    { key: "manage", label: "Manage Roles & Add Staff" },
                  ].map((item) => (
                    <label key={item.key} style={s.checkboxLabel}>
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
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "10px" }}>
                <button
                  type="button"
                  onClick={() => setEditingEmployee(null)}
                  style={s.btnSecondary}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSavePermissions}
                  disabled={savingPermissions}
                  style={{ ...s.btnPrimary, display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <Shield style={{ width: "14px", height: "14px" }} />
                  <span>{savingPermissions ? "Saving..." : "Save Permissions"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: RESET PASSWORD ── */}
      {resetTargetEmployee && (
        <div style={s.modalOverlay}>
          <div style={{ ...s.modalContent, maxWidth: "420px" }}>
            <div style={s.modalHeader}>
              <div>
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "#0f172a" }}>
                  Reset Password
                </h3>
                <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#64748b" }}>
                  Staff: <strong>{resetTargetEmployee.name}</strong> ({resetTargetEmployee.email})
                </p>
              </div>
              <button onClick={() => setResetTargetEmployee(null)} style={s.closeBtn}>
                <X style={{ width: "18px", height: "18px" }} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={s.label}>New Password *</label>
                <input
                  type="password"
                  placeholder="Enter minimum 6 characters"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={s.input}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "8px" }}>
                <button
                  type="button"
                  onClick={() => setResetTargetEmployee(null)}
                  style={s.btnSecondary}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleResetPassword}
                  disabled={savingPassword}
                  style={{ ...s.btnPrimary, display: "flex", alignItems: "center", gap: "6px" }}
                >
                  <Key style={{ width: "14px", height: "14px" }} />
                  <span>{savingPassword ? "Updating..." : "Update Password"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL: DELETE EMPLOYEE ── */}
      {deletingEmployee && (
        <div style={s.modalOverlay}>
          <div style={{ ...s.modalContent, maxWidth: "400px", textAlign: "center" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#fef2f2",
                color: "#dc2626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <Trash2 style={{ width: "24px", height: "24px" }} />
            </div>
            <h3 style={{ margin: "0 0 8px", fontSize: "17px", fontWeight: 800, color: "#0f172a" }}>
              Delete Employee Account?
            </h3>
            <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: "1.5" }}>
              Are you sure you want to delete <strong>{deletingEmployee.name}</strong> ({deletingEmployee.email})? They will immediately lose all login access.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "24px" }}>
              <button
                type="button"
                onClick={() => setDeletingEmployee(null)}
                style={s.btnSecondary}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteEmployee}
                disabled={isDeleting}
                style={s.btnDanger}
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Shared Theme Style System ──
const s = {
  layout: {
    display: "flex",
    minHeight: "100vh",
    background: "#f8fafc",
    fontFamily: "'Inter', sans-serif",
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#1e1b4b",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid rgba(255,255,255,0.2)",
    borderTopColor: "#6366f1",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  sidebar: {
    width: "260px",
    flexShrink: 0,
    background: "linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)",
    display: "flex",
    flexDirection: "column" as const,
    padding: "0",
    position: "sticky" as const,
    top: 0,
    height: "100vh",
    overflowY: "auto" as const,
  },
  sidebarLogo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "28px 24px 24px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    marginBottom: "8px",
  },
  sidebarIconWrap: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.95)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
    flexShrink: 0,
    boxShadow: "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,1)",
  },
  nav: {
    flex: 1,
    padding: "8px 12px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "none",
    background: "transparent",
    color: "rgba(255,255,255,0.6)",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
    textAlign: "left" as const,
    transition: "all 0.15s",
    width: "100%",
  },
  navItemActive: {
    background: "rgba(255,255,255,0.12)",
    color: "white",
    fontWeight: 600,
  },
  badge: {
    marginLeft: "auto",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "999px",
    padding: "2px 8px",
    fontSize: "11px",
    fontWeight: 700,
    color: "rgba(255,255,255,0.8)",
  },
  sidebarFooter: {
    padding: "16px 16px 24px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },
  adminInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  adminAvatar: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "15px",
    color: "white",
    flexShrink: 0,
  },
  logoutBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "transparent",
    color: "rgba(255,255,255,0.5)",
    fontSize: "13px",
    cursor: "pointer",
    fontWeight: 500,
  },
  main: {
    flex: 1,
    padding: "32px",
    overflowY: "auto" as const,
    maxHeight: "100vh",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "28px",
    flexWrap: "wrap" as const,
    gap: "16px",
  },
  pageTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: 800,
    color: "#111827",
    letterSpacing: "-0.3px",
  },
  pageSubtitle: {
    margin: "4px 0 0",
    fontSize: "14px",
    color: "#6b7280",
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  },
  statCard: {
    background: "white",
    borderRadius: "16px",
    padding: "20px 24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.06)",
    border: "1px solid #f1f5f9",
  },
  card: {
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
    border: "1px solid #f1f5f9",
    overflow: "hidden",
  },
  label: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#374151",
    marginBottom: "6px",
    display: "block",
  },
  input: {
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "#111827",
    background: "#fafafa",
    transition: "all 0.15s",
    outline: "none",
    width: "100%",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    fontWeight: 600,
    color: "#374151",
    cursor: "pointer",
  },
  btnPrimary: {
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 18px",
    fontSize: "13px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(99,102,241,0.35)",
    letterSpacing: "0.02em",
  },
  btnSecondary: {
    background: "white",
    color: "#374151",
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    padding: "10px 18px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },
  btnDanger: {
    background: "linear-gradient(135deg, #ef4444, #dc2626)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "10px 18px",
    fontSize: "13px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(239,68,68,0.35)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "14px",
  },
  th: {
    textAlign: "left" as const,
    padding: "14px 16px",
    fontSize: "12px",
    fontWeight: 700,
    color: "#6b7280",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    background: "#f9fafb",
    borderBottom: "1px solid #f1f5f9",
  },
  td: {
    padding: "14px 16px",
    color: "#374151",
    borderBottom: "1px solid #f9fafb",
    verticalAlign: "middle" as const,
  },
  modalOverlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(4px)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  modalContent: {
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    width: "100%",
    padding: "24px",
    border: "1px solid #e2e8f0",
    maxHeight: "90vh",
    overflowY: "auto" as const,
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "14px",
    borderBottom: "1px solid #f1f5f9",
    marginBottom: "16px",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#94a3b8",
  },
};
