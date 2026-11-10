const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// 1. Read Markdown Content
const contentPath = path.join(__dirname, 'canada_work_permit_blog.md');
const markdownContent = fs.readFileSync(contentPath, 'utf8');

const blog39 = {
  id: "blog-39",
  title: "Canada Work Permit & LMIA Complete Guide 2026: TFWP Streams, Low vs High-Wage Caps, In-Demand Jobs, Salaries (CAD & INR), VFS Process & PR Pathways",
  slug: "canada-work-permit-lmia-process-guide-2026-tfwp-jobs-salary-pr",
  category: "Canada Immigration",
  date: "Nov 09, 2026",
  readTime: "35 min read",
  excerpt: "Comprehensive 2026 guide to obtaining a Canada Work Permit and LMIA from India under the Temporary Foreign Worker Program (TFWP). Learn low-wage and high-wage caps, provincial wage thresholds, in-demand trades (truck drivers, farm workers, welders, chefs, caregivers), CAD & INR salary charts, VFS biometrics, IRCC fees, scam prevention, and direct pathways to Canadian Permanent Residency (Express Entry & PNP).",
  image: "/images/canada-work-permit-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "Canada Work Permit 2026",
    "LMIA Process India",
    "TFWP Canada Jobs",
    "Canada Truck Driver Visa",
    "Canada High Wage Low Wage LMIA",
    "Closed Work Permit IRCC",
    "Canada Work Visa Fees & Processing Time",
    "Express Entry PR Pathway",
    "PNP Work Permit Canada",
    "WorkWise Visa Overseas Placements",
    "NOC TEER System 2026",
    "VFS Canada Biometrics India"
  ],
  metaTitle: "Canada Work Permit & LMIA Complete Guide 2026 | TFWP Streams, Salaries & PR",
  metaDescription: "Authoritative 2026 guide to Canada Work Permits, LMIA process, high/low-wage caps, CAD vs INR salaries for trade workers, VFS biometrics in India, and PR pathways.",
  canonicalUrl: "https://www.workwisevisa.com/blogs/canada-work-permit-lmia-process-guide-2026-tfwp-jobs-salary-pr",
  content: markdownContent,
  published: true,
  featured: true
};

// 2. Insert into lib/data.ts
const dataFilePath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataFilePath, 'utf8');

if (dataContent.includes('id: "blog-39"') || dataContent.includes('"blog-39"')) {
  console.log('blog-39 already exists in lib/data.ts');
} else {
  // Find where rawBlogPosts array ends: right before `export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);`
  const targetEnd = `export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);`;
  const endIdx = dataContent.indexOf(targetEnd);

  if (endIdx === -1) {
    throw new Error('Could not find targetEnd in lib/data.ts');
  }

  // Find the closing bracket before targetEnd
  const sliceBefore = dataContent.slice(0, endIdx);
  const lastBracketIdx = sliceBefore.lastIndexOf('];');

  if (lastBracketIdx === -1) {
    throw new Error('Could not find closing bracket ]; of rawBlogPosts');
  }

  const jsonSnippet = ',\n  ' + JSON.stringify(blog39, null, 2) + '\n';
  const updatedData = dataContent.slice(0, lastBracketIdx) + jsonSnippet + dataContent.slice(lastBracketIdx);

  fs.writeFileSync(dataFilePath, updatedData, 'utf8');
  console.log('Successfully inserted blog-39 into lib/data.ts!');
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
      { slug: blog39.slug },
      { $set: blog39 },
      { upsert: true }
    );
    console.log('MongoDB upsert result:', result);
    await client.close();
    console.log('Successfully upserted blog-39 to MongoDB Atlas!');
  }).catch(err => {
    console.error('MongoDB Atlas update error:', err);
  });
} else {
  console.log('No MONGODB_URI found, skipped MongoDB Atlas upsert.');
}

