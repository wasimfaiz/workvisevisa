# WorkWise Visa — MongoDB + Admin Panel Task List

## Phase 1: Setup
- [/] Install dependencies (mongoose, bcryptjs, jsonwebtoken)
- [ ] Create `.env.local`

## Phase 2: Database Layer (Models)
- [ ] `lib/mongodb.ts` — connection singleton
- [ ] `lib/models/Job.ts` — Mongoose Job model
- [ ] `lib/models/AdminUser.ts` — Mongoose AdminUser model

## Phase 3: Auth Utilities
- [ ] `lib/auth.ts` — JWT sign/verify, bcrypt helpers

## Phase 4: Controllers (MVC)
- [ ] `lib/controllers/jobController.ts` — getAllJobs, getJobById, createJob, updateJob, deleteJob
- [ ] `lib/controllers/authController.ts` — login, logout, getMe

## Phase 5: API Route Handlers (thin wrappers)
- [ ] `app/api/jobs/route.ts` — GET, POST
- [ ] `app/api/jobs/[id]/route.ts` — GET, PUT, DELETE
- [ ] `app/api/auth/login/route.ts` — POST
- [ ] `app/api/auth/logout/route.ts` — POST
- [ ] `app/api/auth/me/route.ts` — GET

## Phase 6: Seed Script
- [ ] `scripts/seed-admin.ts` — seed admin user into DB

## Phase 7: Update Frontend
- [ ] `app/jobs/page.tsx` — fetch live data from `/api/jobs`

## Phase 8: Admin Panel
- [ ] `app/admin/page.tsx` — login page
- [ ] `app/admin/layout.tsx` — auth guard layout
- [ ] `app/admin/dashboard/page.tsx` — full CRUD dashboard

## Phase 9: Verify
- [ ] Run seed script
- [ ] npm run build — confirm no errors
