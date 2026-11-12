const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const SLUG = 'croatia-work-visa-for-indian-workers-2026-mup-permit-vfs-jobs-salary';
const TITLE = 'Croatia Work Visa for Indians 2026: 3-Year MUP Permit, HZZ Jobs, Euro Salary (EUR & INR), VFS India Process & Scam Check';
const META_TITLE = 'Croatia Work Visa 2026: MUP, VFS & Salary | WorkWise Visa';
const META_DESCRIPTION = 'Complete 2026 guide to Croatia work visa from India: 3-year MUP permit, HZZ shortage jobs, €1,050+ salary in INR, VFS Type D steps & crovisa check.';
const META_KEYWORDS = 'croatia work visa 2026, croatia work permit india, mup hzz croatia, crovisa check, croatia salary';
const EXCERPT = 'Definitive 2026 field guide to Croatia work visas from India: Updated Foreigners Act 3-year Stay & Work Permits, HZZ shortage trades, €1,050 statutory minimum wage & real INR take-home savings, PSK PCC apostille, VFS Type D biometrics, crovisa.mvep.hr tracking, and scam checks.';
const IMAGE = '/images/croatia-work-visa-guide.webp';
const CANONICAL_URL = `https://www.workwisevisa.com/blogs/${SLUG}`;

const SRC_BANNER = 'C:\\Users\\win\\.gemini\\antigravity\\brain\\55846097-d97b-49d8-9a61-1811045bc8db\\croatia_work_visa_banner_clean_1794498887233.jpg';
const DEST_WEBP = path.join(__dirname, '..', 'public', 'images', 'croatia-work-visa-guide.webp');

const contentPath = path.join(__dirname, 'croatia_work_visa_blog.md');
const content = fs.readFileSync(contentPath, 'utf8').trim();

// Verify constraints
if (content.includes('+---')) {
  throw new Error('ASCII monospace box detected in blog content!');
}
if (/table of contents/i.test(content)) {
  throw new Error('Table of Contents detected in blog content!');
}
if (META_TITLE.length > 60) {
  throw new Error(`META_TITLE exceeds 60 chars: ${META_TITLE.length}`);
}
if (META_DESCRIPTION.length > 158 || META_DESCRIPTION.length < 130) {
  throw new Error(`META_DESCRIPTION out of ideal 130-158 range: ${META_DESCRIPTION.length}`);
}
if (META_KEYWORDS.length > 100) {
  throw new Error(`META_KEYWORDS exceeds 100 chars: ${META_KEYWORDS.length}`);
}

const faqRegex = /###\s*Q\d+\s*[:.]\s*([^\n]+)\n+\*\*Answer\s*[:.]?\*\*\s*[:.]?\s*([\s\S]+?)(?=\n###\s*Q\d+|\n---|\n##\s|$)/gi;
const faqCount = Array.from(content.matchAll(faqRegex)).length;
if (faqCount < 8) {
  throw new Error(`Expected >= 8 auto-parsed FAQs for FAQPage JSON-LD, found ${faqCount}`);
}

const blogObject = {
  id: 'blog-42',
  title: TITLE,
  slug: SLUG,
  category: 'Work Permits',
  date: 'Nov 12, 2026',
  readTime: '22 min read',
  excerpt: EXCERPT,
  image: IMAGE,
  author: 'Wasim Faiz',
  tags: [
    'Croatia Work Visa 2026',
    'Croatia Work Permit India',
    'MUP Stay and Work Permit',
    'HZZ Shortage Occupations',
    'Croatia Salary EUR INR',
    'VFS Global Croatia India',
    'Crovisa MVEP Track',
    'Croatia 3 Year Permit',
    'PCC MEA Apostille Croatia',
    'WorkWise Visa Europe'
  ],
  metaTitle: META_TITLE,
  metaDescription: META_DESCRIPTION,
  metaKeywords: META_KEYWORDS,
  canonicalUrl: CANONICAL_URL,
  content: content,
  published: true,
  featured: true
};

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataFile = fs.readFileSync(dataPath, 'utf8');

function updateObjectInDataTs(id, patchFn) {
  const tokens = [`"id": "${id}"`, `id: "${id}"`];
  let idx = -1;
  for (const t of tokens) {
    idx = dataFile.indexOf(t);
    if (idx !== -1) break;
  }
  if (idx === -1) return null;
  const objStart = dataFile.lastIndexOf('{', idx);
  let depth = 0;
  let inString = false;
  let escaped = false;
  let objEnd = -1;
  for (let i = objStart; i < dataFile.length; i++) {
    const ch = dataFile[i];
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === '"') { inString = !inString; continue; }
    if (!inString) {
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) { objEnd = i + 1; break; }
      }
    }
  }
  if (objEnd === -1) throw new Error(`Unmatched brace for ${id}`);
  const raw = dataFile.slice(objStart, objEnd);
  // Only replace JSON-formatted entries cleanly here
  if (raw.trim().startsWith('{\n  "') || raw.trim().startsWith('{\r\n  "')) {
    const parsed = JSON.parse(raw);
    const updated = patchFn(parsed);
    dataFile = dataFile.slice(0, objStart) + JSON.stringify(updated, null, 2) + dataFile.slice(objEnd);
    return updated;
  }
  return null;
}

const endMarker = '\n];\n\nexport const blogPosts: BlogPost[]';
const endMarkerCRLF = '\r\n];\r\n\r\nexport const blogPosts: BlogPost[]';
const marker = dataFile.includes(endMarkerCRLF) ? endMarkerCRLF : endMarker;
const markerIdx = dataFile.indexOf(marker);
if (markerIdx === -1) {
  throw new Error('Could not locate end of rawBlogPosts array in lib/data.ts');
}

const existingIdx = dataFile.indexOf('"id": "blog-42"');
if (existingIdx !== -1) {
  updateObjectInDataTs('blog-42', () => blogObject);
  console.log('Updated existing blog-42 in lib/data.ts');
} else {
  const before = dataFile.slice(0, markerIdx);
  const after = dataFile.slice(markerIdx);
  dataFile = before + ',\n' + JSON.stringify(blogObject, null, 2) + after;
  console.log('Inserted new blog-42 into lib/data.ts');
}

// Add contextual inbound link inside blog-41 Croatia section if not already linked
const b41 = updateObjectInDataTs('blog-41', (b) => {
  const linkAnchor = 'Explore [Croatia Jobs & Visa Hub](/countries/croatia).';
  if (b.content && b.content.includes(linkAnchor) && !b.content.includes(SLUG)) {
    b.content = b.content.replace(
      linkAnchor,
      `Explore our [Croatia Jobs & Visa Hub](/countries/croatia) and [Croatia Work Visa & 3-Year MUP Permit Manual 2026](/blogs/${SLUG}).`
    );
  }
  return b;
});

fs.writeFileSync(dataPath, dataFile, 'utf8');
console.log(`Saved lib/data.ts | META_TITLE (${META_TITLE.length}/60): "${META_TITLE}"`);
console.log(`META_DESC (${META_DESCRIPTION.length}/158): "${META_DESCRIPTION}"`);
console.log(`META_KEYWORDS (${META_KEYWORDS.length}/100): "${META_KEYWORDS}"`);
console.log(`Content chars: ${content.length} | Auto-parsed FAQs: ${faqCount}`);

async function run() {
  if (!fs.existsSync(SRC_BANNER)) {
    throw new Error(`Banner not found at ${SRC_BANNER}`);
  }
  await sharp(SRC_BANNER).webp({ quality: 85 }).toFile(DEST_WEBP);
  console.log('Converted WebP banner:', DEST_WEBP);

  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const coll = client.db('workwisevisa').collection('blogs');
  const now = new Date();

  const docs = [blogObject];
  if (b41) docs.push(b41);

  for (const post of docs) {
    const res = await coll.updateOne(
      { slug: post.slug.toLowerCase() },
      {
        $set: {
          title: post.title,
          slug: post.slug.toLowerCase(),
          category: post.category,
          excerpt: post.excerpt,
          content: post.content,
          image: post.image,
          author: post.author,
          readTime: post.readTime,
          tags: post.tags,
          metaTitle: post.metaTitle,
          metaDescription: post.metaDescription,
          metaKeywords: post.metaKeywords,
          canonicalUrl: post.canonicalUrl,
          published: true,
          featured: true,
          date: post.date,
          updatedAt: now
        },
        $setOnInsert: { views: 0, createdAt: now }
      },
      { upsert: true }
    );
    console.log(`Mongo sync [${post.id}] (${post.slug}): matched=${res.matchedCount}, modified=${res.modifiedCount}, upserted=${res.upsertedCount}`);
  }

  await client.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

