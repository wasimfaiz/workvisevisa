/* ================================================================
   app/api/indexnow/route.ts
   Instant indexing ping endpoint for Microsoft Bing, Yandex & Naver.
   GET /api/indexnow  → Submits all URLs from sitemap to Bing IndexNow
   ================================================================ */

import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";

const INDEXNOW_KEY = "9b3f4d8e7a1c2e5b8d6f0a3c5e7b9d1f";
const HOST = "www.workwisevisa.com";

export async function GET() {
  try {
    const entries = await sitemap();
    const urlList = entries.map((e) => e.url);

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urlList,
    };

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: true,
      status: res.status,
      submittedCount: urlList.length,
      message:
        res.status === 200 || res.status === 202
          ? "URLs submitted successfully to Bing IndexNow for instant crawling."
          : `Submitted with status code ${res.status}`,
    });
  } catch (err: unknown) {
    const error = err as Error;
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
