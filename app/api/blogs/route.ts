/* ================================================================
   app/api/blogs/route.ts — MVC: Route Layer
   GET  /api/blogs  → getAllBlogs (public or admin filter)
   POST /api/blogs  → createBlog (admin with blogs.create permission)
   ================================================================ */

import { NextRequest } from "next/server";
import { getAllBlogs, createBlog } from "@/lib/controllers/blogController";

export async function GET(request: NextRequest) {
  return getAllBlogs(request);
}

export async function POST(request: NextRequest) {
  return createBlog(request);
}
