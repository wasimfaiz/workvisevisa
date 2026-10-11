import * as dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd(), ".env.local") });

const INDEXNOW_KEY = "9b3f4d8e7a1c2e5b8d6f0a3c5e7b9d1f";
const HOST = "www.workwisevisa.com";

async function submitToIndexNow() {
  console.log("Fetching site URLs from sitemap...");
  const { default: sitemap } = await import("../app/sitemap");
  const entries = await sitemap();
  const urlList = entries.map((e) => e.url);

  console.log(`Found ${urlList.length} URLs to submit to Bing IndexNow.`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urlList,
  };

  try {
    console.log("Submitting to Bing via IndexNow API (api.indexnow.org)...");
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`✅ Success! Bing IndexNow accepted ${urlList.length} URLs (Status: ${response.status}).`);
      console.log("Bingbot will prioritize crawling and indexing these URLs within minutes to hours.");
    } else {
      const text = await response.text();
      console.log(`Status: ${response.status}. Response: ${text}`);
    }
  } catch (err) {
    console.error("IndexNow submission error:", err);
  }
}

submitToIndexNow();
