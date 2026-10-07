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

    // Validate mime type
    const validMimes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/svg+xml",
      "image/avif",
    ];

    if (!validMimes.includes(file.type)) {
      return Response.json(
        {
          success: false,
          message: "Invalid file type. Please upload a valid image (JPEG, PNG, WebP, GIF, SVG).",
        },
        { status: 400 }
      );
    }

    // 10MB size limit
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      return Response.json(
        {
          success: false,
          message: "File size exceeds maximum limit of 10MB.",
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
