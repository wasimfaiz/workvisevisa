const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// 1. Read Markdown Content
const contentPath = path.join(__dirname, 'australia_work_visa_blog.md');
const markdownContent = fs.readFileSync(contentPath, 'utf8');

const blog40 = {
  id: "blog-40",
  title: "Australia Skills in Demand Visa & Subclass 482 Complete Master Guide 2026: Core Skills Stream, CSOL Jobs, TRA Skills Assessment, Salaries (AUD & INR), VFS Process & Direct PR Pathways (Subclass 186 ENS)",
  slug: "australia-skills-in-demand-visa-subclass-482-complete-guide-2026-jobs-salary-tra-pr",
  category: "Australia Immigration",
  date: "Nov 10, 2026",
  readTime: "36 min read",
  excerpt: "Definitive 2026 master guide to Australia's new Skills in Demand (SID) Visa replacing the Subclass 482 TSS framework. Explore the Core Skills Occupations List (CSOL), TSMIT $73,150 AUD salary threshold, trade wages in AUD and INR, Trades Recognition Australia (TRA) assessment, VFS biometrics in India, 180-day worker mobility rules, and direct pathways to Australian Permanent Residency via the Subclass 186 ENS TRT stream.",
  image: "/images/australia-skills-in-demand-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "Australia Skills in Demand Visa",
    "Subclass 482 Visa 2026",
    "Australia Work Visa from India",
    "CSOL In Demand Jobs",
    "Trades Recognition Australia TRA",
    "TSMIT Salary Threshold Australia",
    "Subclass 186 ENS Permanent Residency",
    "Australia Trade Wages AUD INR",
    "VFS Australia Biometrics India",
    "WorkWise Visa Overseas Placements",
    "Core Skills Stream Australia",
    "Australian Work Permit Process"
  ],
  metaTitle: "Australia Skills in Demand Visa & Subclass 482 Guide 2026 | Jobs, Salaries & PR",
  metaDescription: "Complete 2026 guide to Australia's Skills in Demand Visa, Subclass 482 replacement, Core Skills Stream, CSOL occupations, TRA skills assessment, AUD salaries, and PR.",
  canonicalUrl: "https://www.workwisevisa.com/blogs/australia-skills-in-demand-visa-subclass-482-complete-guide-2026-jobs-salary-tra-pr",
  content: markdownContent,
  published: true,
  featured: true
};

// 2. Insert into lib/data.ts
const dataFilePath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataFilePath, 'utf8');

if (dataContent.includes('id: "blog-40"') || dataContent.includes('"blog-40"')) {
  console.log('blog-40 already exists in lib/data.ts');
} else {
  const targetEnd = `export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);`;
  const endIdx = dataContent.indexOf(targetEnd);

  if (endIdx === -1) {
    throw new Error('Could not find targetEnd in lib/data.ts');
  }

  const sliceBefore = dataContent.slice(0, endIdx);
  const lastBracketIdx = sliceBefore.lastIndexOf('];');

  if (lastBracketIdx === -1) {
    throw new Error('Could not find closing bracket ]; of rawBlogPosts');
  }

  const jsonSnippet = ',\n  ' + JSON.stringify(blog40, null, 2) + '\n';
  const updatedData = dataContent.slice(0, lastBracketIdx) + jsonSnippet + dataContent.slice(lastBracketIdx);

  fs.writeFileSync(dataFilePath, updatedData, 'utf8');
  console.log('Successfully inserted blog-40 into lib/data.ts!');
}

// 3. Upsert into MongoDB Atlas
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
      { slug: blog40.slug },
      { $set: blog40 },
      { upsert: true }
    );
    console.log('MongoDB upsert result:', result);
    await client.close();
    console.log('Successfully upserted blog-40 to MongoDB Atlas!');
  }).catch(err => {
    console.error('MongoDB Atlas update error:', err);
  });
} else {
  console.log('No MONGODB_URI found, skipped MongoDB Atlas upsert.');
}

