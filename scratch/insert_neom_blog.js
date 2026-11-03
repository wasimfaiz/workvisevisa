const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const mdContent = fs.readFileSync('scratch/neom_content.md', 'utf8');

const newPost = {
  id: "blog-36",
  title: "NEOM Project Latest Updates & Mega Recruitment 2026/2027: The Line, Oxagon, Trojena Jobs, High Salaries (SAR 3,000–8,500+), Qiwa Contracts, Takamol Tests & Direct EPC Hiring Guide",
  slug: "neom-project-latest-updates-mega-recruitment-2026-jobs-salary-qiwa-epc",
  category: "Gulf & Middle East Jobs",
  date: "Nov 03, 2026",
  readTime: "20 min read",
  excerpt: "Authoritative late 2026 update on Saudi Arabia's $500B NEOM megaproject. Explore hiring drives across The Line, Oxagon port, and Trojena mountain resorts, SAR 3,000 to SAR 8,500+ tax-free salaries, top EPC contractors (L&T, Webuild, Nesma), Qiwa digital contracts, Takamol trade tests, and luxury NCV camp life.",
  image: "/images/neom-project-recruitment-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "NEOM Project 2026",
    "NEOM Recruitment 2026",
    "The Line Saudi Arabia Jobs",
    "Oxagon Green Hydrogen Jobs",
    "Trojena Ski Resort Construction",
    "Saudi Work Visa 2026",
    "Qiwa Contract Verification",
    "Takamol Trade Test India",
    "L&T NEOM Vacancies",
    "WorkWise Visa NEOM"
  ],
  metaTitle: "NEOM Project Recruitment & Jobs Update 2026: Salaries & EPC Hiring",
  metaDescription: "Latest 2026 NEOM project updates and mega recruitment guide for Indian workers. The Line, Oxagon & Trojena jobs, SAR 3,000+ wages, Qiwa contracts, Takamol tests & EPC hiring.",
  metaKeywords: "neom project latest updates 2026, neom jobs for indians salary sar inr, the line construction recruitment saudi arabia, oxagon green hydrogen plant jobs, trojena winter games construction vacancies, larsen and toubro neom vacancies 2026, qiwa contract authentication, takamol svp trade test centers india, workwise visa saudi careers",
  published: true,
  featured: true,
  views: 2850,
  content: mdContent
};

// 1. Update lib/data.ts
const dataFilePath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataFilePath, 'utf8');

// Find closing marker of rawBlogPosts
const closingMarker = "export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);";
if (!dataContent.includes(closingMarker)) {
  console.error("Target marker not found in lib/data.ts!");
  process.exit(1);
}

// Remove old blog-36 if present
if (dataContent.includes('"id": "blog-36"') || dataContent.includes('id: "blog-36"')) {
  console.log("Removing existing blog-36 from lib/data.ts before re-inserting...");
  // Regex to remove the entire blog-36 object
  const regex = /,\s*\{\s*["']?id["']?:\s*["']blog-36["'][\s\S]*?\n\s*\}\s*(?=\];|\n\s*\{|\n\s*,)/;
  dataContent = dataContent.replace(regex, '');
}

const serializedPost = "  ,\n  " + JSON.stringify(newPost, null, 2) + "\n];\n\n" + closingMarker;
const closingRegex = /\];\s*\r?\n\s*export const blogPosts: BlogPost\[\] = sortBlogsByDate\(rawBlogPosts\);/;

if (!closingRegex.test(dataContent)) {
  console.error("Could not find closing of rawBlogPosts!");
  process.exit(1);
}

dataContent = dataContent.replace(closingRegex, serializedPost);
fs.writeFileSync(dataFilePath, dataContent, 'utf8');
console.log("Successfully re-inserted clean blog-36 into lib/data.ts!");

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
    console.error("MongoDB error:", err.message);
  });
} else {
  console.log("No MONGODB_URI found, skipping MongoDB sync.");
}
