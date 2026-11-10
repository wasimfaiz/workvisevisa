const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// 1. Read Cleaned Expanded Markdown Content
const contentPath = path.join(__dirname, 'takamol_svp_expanded_blog.md');
const markdownContent = fs.readFileSync(contentPath, 'utf8');

const updatedBlog14 = {
  id: "blog-14",
  title: "Takamol SVP Test Result & Certificate Check Online 2026: Saudi Arabia Trade Test Syllabus, Center List, Passing Marks & Qiwa Verification",
  slug: "takamol-svp-skill-verification-program-saudi-arabia-trade-test-guide-2026",
  category: "Trade Testing",
  date: "Oct 04, 2026",
  readTime: "35 min read",
  excerpt: "Complete 2026 guide to checking Takamol SVP test results online & downloading certificates for Saudi work visas. Detailed trade syllabi for electricians, welders, plumbers, HVAC & mechanics, passing marks, accredited test centers in India & Qiwa check.",
  image: "/images/takamol-svp-trade-test-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "Takamol SVP",
    "SVP Takamol Result Check",
    "Takamol Certificate Online",
    "Saudi Arabia Trade Test",
    "PVP Test Centers India",
    "Qiwa SVP Check Online",
    "Electrician Takamol Exam",
    "Welder Takamol Test",
    "Saudi Work Visa 2026",
    "WorkWise Visa Gulf Placements",
    "Takamol Passing Marks",
    "Saudi Trade Test Syllabus"
  ],
  metaTitle: "Takamol SVP Result & Certificate Check Online 2026 | WorkWise",
  metaDescription: "Check Takamol SVP test result & download certificate online for Saudi visa. 2026 guide to trade syllabus, passing marks, centers in India & Qiwa check.",
  canonicalUrl: "https://www.workwisevisa.com/blogs/takamol-svp-skill-verification-program-saudi-arabia-trade-test-guide-2026",
  content: markdownContent,
  published: true,
  featured: true
};

// 2. Replace in lib/data.ts
const dataFilePath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataFilePath, 'utf8');

// Find blog-14 regardless of quotes around id
const targetStr = '"blog-14"';
const idIdx = dataContent.indexOf(targetStr);
if (idIdx === -1) {
  throw new Error('Could not find "blog-14" in lib/data.ts');
}

const braceIdx = dataContent.lastIndexOf('{', idIdx);

// Find next blog entry
let nextBlogIdx = dataContent.indexOf('"blog-', idIdx + 20);
if (nextBlogIdx === -1) {
  nextBlogIdx = dataContent.indexOf('id: "blog-', idIdx + 20);
}
const nextBraceIdx = dataContent.lastIndexOf('{', nextBlogIdx);

// The slice to replace is from braceIdx up to nextBraceIdx
const jsonSnippet = JSON.stringify(updatedBlog14, null, 2) + ',\n  ';
const newDataContent = dataContent.slice(0, braceIdx) + jsonSnippet + dataContent.slice(nextBraceIdx);

fs.writeFileSync(dataFilePath, newDataContent, 'utf8');
console.log('Successfully updated blog-14 without ASCII in lib/data.ts!');

// 3. Update in MongoDB Atlas
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
      { slug: updatedBlog14.slug },
      { $set: { ...updatedBlog14, updatedAt: new Date() } },
      { upsert: true }
    );
    console.log('MongoDB update result:', result);
    await client.close();
    console.log('Successfully updated blog-14 in MongoDB Atlas!');
  }).catch(err => {
    console.error('MongoDB Atlas update error:', err);
  });
} else {
  console.log('No MONGODB_URI found, skipped MongoDB Atlas update.');
}
