/* ================================================================
   app/api/blogs/[id]/route.ts — MVC: Route Layer
   GET    /api/blogs/:id  → getBlogById (public)
   PUT    /api/blogs/:id  → updateBlog  (admin with blogs.edit permission)
   DELETE /api/blogs/:id  → deleteBlog  (admin with blogs.delete permission)
   ================================================================ */

import { NextRequest } from "next/server";
import {
  getBlogById,
  updateBlog,
  deleteBlog,
} from "@/lib/controllers/blogController";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return getBlogById(id);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return updateBlog(id, request);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return deleteBlog(id, request);
}
