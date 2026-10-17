/* ================================================================
   app/api/upload/route.ts — Local File Upload API Handler
   Accepts image file uploads, saves to public/uploads/ and returns
   the public URL for use in blog covers, articles, and media.
   ================================================================ */

import { NextRequest } from "next/server";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { getAuthUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    // Optional auth check (allow logged-in admin)
    const user = getAuthUser(request);
    if (!user) {
      // Proceed if admin token or allow authorized upload
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return Response.json(
        { success: false, message: "No file was uploaded." },
        { status: 400 }
      );
    }

    // Validate mime type (Images and MoU/agreement documents: PDF, DOCX, DOC)
    const validMimes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
      "image/avif",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const fileNameLower = file.name.toLowerCase();
    const hasValidExt = /\.(jpe?g|png|webp|gif|svg|avif|pdf|docx?)$/i.test(fileNameLower);

    if (!validMimes.includes(file.type) && !hasValidExt) {
      return Response.json(
        {
          success: false,
          message: "Invalid file type. Please upload a valid document or image (PDF, DOCX, JPEG, PNG).",
        },
        { status: 400 }
      );
    }

    // 25MB size limit for documents & scans
    const MAX_SIZE = 25 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return Response.json(
        {
          success: false,
          message: "File size exceeds maximum limit of 25MB.",
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Target upload folder in public directory
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    // Sanitize filename & make unique
    const originalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const ext = path.extname(originalName) || ".webp";
    const baseName = path.basename(originalName, ext);
    const uniqueFileName = `${baseName}-${Date.now()}${ext}`;

    const filePath = path.join(uploadDir, uniqueFileName);
    await writeFile(filePath, buffer);

    const publicUrl = `/uploads/${uniqueFileName}`;

    return Response.json({
      success: true,
      url: publicUrl,
      fileName: uniqueFileName,
      size: file.size,
      message: "Image uploaded successfully!",
    });
  } catch (error: unknown) {
    console.error("[upload.POST] Error saving uploaded file:", error);
    const err = error as Error;
    return Response.json(
      { success: false, message: err.message || "Failed to upload image." },
      { status: 500 }
    );
  }
}
