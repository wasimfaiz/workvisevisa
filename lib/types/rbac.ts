/* ================================================================
   lib/types/rbac.ts — Client-safe RBAC types and permission defaults
   No server or Mongoose dependencies, safe for both client and server.
   ================================================================ */

export type AdminRole =
  | "superadmin"
  | "admin"
  | "manager"
  | "counselor"
  | "accountant"
  | "staff";

export interface EmployeePermissions {
  invoices: {
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
    print: boolean;
  };
  inquiries: {
    view: boolean;
    edit: boolean;
    delete: boolean;
    export: boolean;
  };
  jobs: {
    view: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
  };
  employees: {
    view: boolean;
    manage: boolean;
  };
}

export const DEFAULT_PERMISSIONS: Record<AdminRole, EmployeePermissions> = {
  superadmin: {
    invoices: { view: true, create: true, edit: true, delete: true, print: true },
    inquiries: { view: true, edit: true, delete: true, export: true },
    jobs: { view: true, create: true, edit: true, delete: true },
    employees: { view: true, manage: true },
  },
  admin: {
    invoices: { view: true, create: true, edit: true, delete: true, print: true },
    inquiries: { view: true, edit: true, delete: true, export: true },
    jobs: { view: true, create: true, edit: true, delete: true },
    employees: { view: true, manage: true },
  },
  manager: {
    invoices: { view: true, create: true, edit: true, delete: false, print: true },
    inquiries: { view: true, edit: true, delete: true, export: true },
    jobs: { view: true, create: true, edit: true, delete: true },
    employees: { view: true, manage: false },
  },
  counselor: {
    invoices: { view: false, create: false, edit: false, delete: false, print: false },
    inquiries: { view: true, edit: true, delete: false, export: true },
    jobs: { view: true, create: false, edit: false, delete: false },
    employees: { view: false, manage: false },
  },
  accountant: {
    invoices: { view: true, create: true, edit: true, delete: false, print: true },
    inquiries: { view: false, edit: false, delete: false, export: false },
    jobs: { view: true, create: false, edit: false, delete: false },
    employees: { view: false, manage: false },
  },
  staff: {
    invoices: { view: false, create: false, edit: false, delete: false, print: false },
    inquiries: { view: true, edit: false, delete: false, export: false },
    jobs: { view: true, create: false, edit: false, delete: false },
    employees: { view: false, manage: false },
  },
};
