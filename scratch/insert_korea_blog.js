const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const mdContent = fs.readFileSync('scratch/south_korea_content.md', 'utf8');

const newPost = {
  id: "blog-34",
  title: "South Korea Work Visa (E-9 EPS & E-7 Skilled) Complete Master Guide 2026: Jobs, Salaries (₩2,100,000+), EPS-TOPIK, Shipbuilding Trades, CCVI & Embassy Process",
  slug: "south-korea-work-visa-e9-eps-e7-skilled-complete-guide-2026-jobs-salary-topik",
  category: "East Asia & Global Jobs",
  date: "Nov 01, 2026",
  readTime: "18 min read",
  excerpt: "Definitive 2026 master guide to South Korea's E-9 EPS and E-7 skilled worker visas. Explore shipbuilding trades, automotive manufacturing, ₩2,100,000+ monthly wages, EPS-TOPIK syllabus, Hi Korea CCVI issuance, and multi-lakh departure severance refunds.",
  image: "/images/south-korea-work-visa-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "South Korea Work Visa 2026",
    "E-9 EPS Visa Korea",
    "E-7 Skilled Worker Visa",
    "Shipbuilding Jobs Korea",
    "EPS-TOPIK 2026",
    "Korea Minimum Wage 2026",
    "Hi Korea CCVI Visa",
    "Korea Visa for Indians",
    "KOSHIPA Welder Jobs",
    "WorkWise Visa Korea"
  ],
  metaTitle: "South Korea Work Visa (E-9 & E-7) Guide 2026: Jobs, Salaries & Process",
  metaDescription: "Master the 2026 South Korea E-9 EPS & E-7 skilled work visa process for Indian workers. Explore shipbuilding jobs, ₩2,100,000+ wages, EPS-TOPIK exam, CCVI & KVAC.",
  metaKeywords: "south korea work visa 2026, south korea e9 eps visa for indians, e7 skilled worker visa korea, korea shipbuilding welder jobs salary krw inr, eps topik exam syllabus india, certificate for confirmation of visa issuance ccvi, hi korea visa portal, kvac new delhi korea work visa, korea minimum wage 2026, workwise visa overseas careers",
  published: true,
  featured: true,
  views: 2680,
  content: mdContent
};

// 1. Update lib/data.ts
const dataFilePath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataFilePath, 'utf8');

// Find insertion point before `export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);`
const targetMarker = "export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);";
if (!dataContent.includes(targetMarker)) {
  console.error("Target marker not found in lib/data.ts!");
  process.exit(1);
}

// Check if blog-34 already exists in lib/data.ts
if (dataContent.includes('"id": "blog-34"') || dataContent.includes('id: "blog-34"')) {
  console.log("blog-34 already in lib/data.ts, replacing...");
  const regex = /\{\s*["']?id["']?:\s*["']blog-34["'][\s\S]*?content:\s*["'][\s\S]*?["']\s*\},?\s*/;
  dataContent = dataContent.replace(regex, '');
}

const serializedPost = "  ,\n  " + JSON.stringify(newPost, null, 2) + "\n];\n\n" + targetMarker;
// Replace the closing of rawBlogPosts `];\n\nexport const blogPosts`
const closingRegex = /\];\s*\r?\n\s*export const blogPosts: BlogPost\[\] = sortBlogsByDate\(rawBlogPosts\);/;

if (!closingRegex.test(dataContent)) {
  console.error("Could not find closing of rawBlogPosts!");
  process.exit(1);
}

dataContent = dataContent.replace(closingRegex, serializedPost);
fs.writeFileSync(dataFilePath, dataContent, 'utf8');
console.log("Successfully inserted blog-34 into lib/data.ts!");

// 2. Upsert into MongoDB
let env = '';
if (fs.existsSync('.env.local')) env = fs.readFileSync('.env.local', 'utf8');
else if (fs.existsSync('.env')) env = fs.readFileSync('.env', 'utf8');

const match = env.match(/MONGODB_URI=([^\r\n]+)/);
if (match) {
  const uri = match[1].trim();
  const client = new MongoClient(uri);
  client.connect().then(async () => {
    const db = client.db();
    const result = await db.collection('blogs').updateOne(
      { slug: newPost.slug },
      { $set: newPost },
      { upsert: true }
    );
    console.log("MongoDB upsert result:", result.upsertedId ? "Inserted new document" : "Updated existing document");
    await client.close();
  }).catch(err => {
    console.error("MongoDB error:", err);
  });
} else {
  console.log("No MONGODB_URI found, skipping MongoDB sync.");
}
