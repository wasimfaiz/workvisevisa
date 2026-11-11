const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const SLUG = 'work-visa-check-online-by-passport-number-2026-saudi-dubai-qatar-kuwait-europe';
const TITLE = 'Work Visa Check Online by Passport Number 2026: Official Saudi MOFA/Enjaz, UAE Dubai ICP/MOHRE, Qatar MOI, Kuwait, Oman, Bahrain, Europe & Fake Visa Verification Guide';
const META_TITLE = 'Visa Check Online by Passport Number 2026 | WorkWise Visa';
const META_DESCRIPTION = 'Check Saudi, UAE Dubai, Qatar, Kuwait, Oman, Bahrain & Europe work visa status online by passport number in 2026. Verify MOFA, ICP, MOHRE & spot fake visas.';
const META_KEYWORDS = 'visa check online by passport number, saudi visa check online, dubai visa check online, qatar visa check, mohre offer letter check, fake visa check';
const EXCERPT = 'Definitive 2026 official portal verification guide: Learn how to check your Saudi MOFA/Enjaz, UAE Dubai GDRFA & ICP, MOHRE offer letter, Qatar MOI/QVC, Kuwait, Oman, Bahrain LMRA, Europe, Canada & Australia work visa status online using your passport number—plus our 7-point forensic scam detector to expose fake e-visas.';
const IMAGE = '/images/work-visa-check-online-passport-guide.webp';
const CANONICAL_URL = `https://www.workwisevisa.com/blogs/${SLUG}`;

const contentPath = path.join(__dirname, 'work_visa_check_online_passport_blog.md');
const content = fs.readFileSync(contentPath, 'utf8').trim();

// Verify constraints before proceeding
if (content.includes('+---')) {
  throw new Error('ASCII monospace box detected in blog content!');
}
if (/table of contents/i.test(content)) {
  throw new Error('Table of Contents detected in blog content!');
}
if (META_TITLE.length > 60) {
  throw new Error(`META_TITLE exceeds 60 chars: ${META_TITLE.length}`);
}
if (META_DESCRIPTION.length > 158) {
  throw new Error(`META_DESCRIPTION exceeds 158 chars: ${META_DESCRIPTION.length}`);
}

const blogObject = {
  id: 'blog-41',
  title: TITLE,
  slug: SLUG,
  category: 'Work Permits',
  date: 'Nov 11, 2026',
  readTime: '28 min read',
  excerpt: EXCERPT,
  image: IMAGE,
  author: 'Wasim Faiz',
  tags: [
    'Visa Check Online by Passport Number',
    'Saudi Visa Check MOFA Enjaz',
    'Dubai UAE Visa Check ICP GDRFA',
    'MOHRE Offer Letter Verification',
    'Qatar MOI Visa Inquiry QVC',
    'Kuwait Oman Bahrain Visa Check',
    'Fake Work Visa Check India',
    'Wafid Medical Status Check',
    'eMigrate Emigration Clearance Check',
    'WorkWise Visa Verification Guide'
  ],
  metaTitle: META_TITLE,
  metaDescription: META_DESCRIPTION,
  metaKeywords: META_KEYWORDS,
  canonicalUrl: CANONICAL_URL,
  content: content,
  published: true,
  featured: true
};

// 1. Update lib/data.ts safely
const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataFile = fs.readFileSync(dataPath, 'utf8');

const endMarker = '\n];\n\nexport const blogPosts: BlogPost[]';
const endMarkerCRLF = '\r\n];\r\n\r\nexport const blogPosts: BlogPost[]';
const hasCRLF = dataFile.includes(endMarkerCRLF);
const marker = hasCRLF ? endMarkerCRLF : endMarker;

const markerIdx = dataFile.indexOf(marker);
if (markerIdx === -1) {
  throw new Error('Could not locate end of rawBlogPosts array in lib/data.ts');
}

const existingIdx = dataFile.indexOf('"id": "blog-41"');
if (existingIdx !== -1) {
  // Replace existing blog-41 object
  const objStart = dataFile.lastIndexOf('{', existingIdx);
  const commaBefore = dataFile.lastIndexOf(',', objStart);
  const before = dataFile.slice(0, commaBefore);
  const after = dataFile.slice(markerIdx);
  dataFile = before + ',\n' + JSON.stringify(blogObject, null, 2) + after;
  console.log('Updated existing blog-41 in lib/data.ts');
} else {
  const before = dataFile.slice(0, markerIdx);
  const after = dataFile.slice(markerIdx);
  dataFile = before + ',\n' + JSON.stringify(blogObject, null, 2) + after;
  console.log('Inserted new blog-41 into lib/data.ts');
}

fs.writeFileSync(dataPath, dataFile, 'utf8');
console.log(`lib/data.ts written successfully. MetaTitle (${META_TITLE.length} chars), MetaDesc (${META_DESCRIPTION.length} chars), Content (${content.length} chars).`);

// 2. Sync to MongoDB Atlas
async function syncMongo() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI not found in .env.local');
  }
  const client = new MongoClient(uri);
  await client.connect();
  const coll = client.db('workwisevisa').collection('blogs');

  const now = new Date();
  const dbDoc = {
    title: blogObject.title,
    slug: blogObject.slug.toLowerCase(),
    category: blogObject.category,
    excerpt: blogObject.excerpt,
    content: blogObject.content,
    image: blogObject.image,
    author: blogObject.author,
    readTime: blogObject.readTime,
    tags: blogObject.tags,
    metaTitle: blogObject.metaTitle,
    metaDescription: blogObject.metaDescription,
    metaKeywords: blogObject.metaKeywords,
    canonicalUrl: blogObject.canonicalUrl,
    published: true,
    featured: true,
    date: blogObject.date,
    updatedAt: now
  };

  const result = await coll.updateOne(
    { slug: dbDoc.slug },
    {
      $set: dbDoc,
      $setOnInsert: { views: 0, createdAt: now }
    },
    { upsert: true }
  );

  console.log('MongoDB Atlas upsert result:', {
    matchedCount: result.matchedCount,
    modifiedCount: result.modifiedCount,
    upsertedId: result.upsertedId
  });

  await client.close();
}

syncMongo().catch(err => {
  console.error('MongoDB sync error:', err);
  process.exit(1);
});

