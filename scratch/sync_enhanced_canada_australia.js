const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataFile = fs.readFileSync(dataPath, 'utf8');

const canadaContent = fs.readFileSync(path.join(__dirname, 'canada_work_permit_blog.md'), 'utf8').trim();
const australiaContent = fs.readFileSync(path.join(__dirname, 'australia_work_visa_blog.md'), 'utf8').trim();

// Verify constraints
for (const [name, txt] of [['canada', canadaContent], ['australia', australiaContent]]) {
  if (txt.includes('+---')) throw new Error(`ASCII box found in ${name}`);
  if (/table of contents/i.test(txt)) throw new Error(`TOC found in ${name}`);
}

const CANADA_META_TITLE = 'Canada Work Permit & LMIA Guide 2026 | WorkWise Visa';
const CANADA_META_DESC = '2026 Canada Work Permit & LMIA guide for Indian workers: Low vs High-Wage rules, NOC TEER salaries in CAD & INR, Job Bank verification, VFS & PR routes.';
const AUS_META_TITLE = 'Australia Skills in Demand 482 Visa 2026 | WorkWise Visa';
const AUS_META_DESC = '2026 Australia Subclass 482 Skills in Demand guide for Indian trades: CSOL list, TRA practical test in India, AUD net salary, VEVO check & Subclass 186 PR.';

if (CANADA_META_TITLE.length > 60 || AUS_META_TITLE.length > 60) {
  throw new Error('MetaTitle exceeds 60 chars');
}
if (CANADA_META_DESC.length > 158 || AUS_META_DESC.length > 158) {
  throw new Error('MetaDescription exceeds 158 chars');
}

// Helper to extract and replace a JSON-like object inside rawBlogPosts by id
function updateBlogInDataTs(id, patchFn) {
  const idToken = `"id": "${id}"`;
  const idx = dataFile.indexOf(idToken);
  if (idx === -1) throw new Error(`Could not find ${id} in lib/data.ts`);
  const objStart = dataFile.lastIndexOf('{', idx);
  // Find matching closing brace for JSON object
  let depth = 0;
  let inString = false;
  let escaped = false;
  let objEnd = -1;
  for (let i = objStart; i < dataFile.length; i++) {
    const ch = dataFile[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (ch === '\\') {
      escaped = true;
      continue;
    }
    if (ch === '"') {
      inString = !inString;
      continue;
    }
    if (!inString) {
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          objEnd = i + 1;
          break;
        }
      }
    }
  }
  if (objEnd === -1) throw new Error(`Unmatched brace for ${id}`);
  const rawJson = dataFile.slice(objStart, objEnd);
  const parsed = JSON.parse(rawJson);
  const updated = patchFn(parsed);
  dataFile = dataFile.slice(0, objStart) + JSON.stringify(updated, null, 2) + dataFile.slice(objEnd);
  return updated;
}

const b39 = updateBlogInDataTs('blog-39', (b) => {
  b.metaTitle = CANADA_META_TITLE;
  b.metaDescription = CANADA_META_DESC;
  b.content = canadaContent;
  b.date = 'Nov 12, 2026';
  b.readTime = '32 min read';
  return b;
});

const b40 = updateBlogInDataTs('blog-40', (b) => {
  b.metaTitle = AUS_META_TITLE;
  b.metaDescription = AUS_META_DESC;
  b.content = australiaContent;
  b.date = 'Nov 12, 2026';
  b.readTime = '31 min read';
  return b;
});

// Add contextual inbound links from already-indexed sister blogs (blog-17 & blog-18)
const b18 = updateBlogInDataTs('blog-18', (b) => {
  const linkNote = '> [!NOTE]\n> **Dedicated Country Playbooks (2026)**: Explore our deep-dive execution manuals for **[Canada Work Permit & LMIA Complete Guide 2026](/blogs/canada-work-permit-lmia-process-guide-2026-tfwp-jobs-salary-pr)** and **[Australia Skills in Demand (Subclass 482) Master Guide 2026](/blogs/australia-skills-in-demand-visa-subclass-482-complete-guide-2026-jobs-salary-tra-pr)**.';
  if (b.content && !b.content.includes('canada-work-permit-lmia-process-guide-2026-tfwp-jobs-salary-pr')) {
    const pos = b.content.indexOf('\n---\n');
    if (pos !== -1) {
      b.content = b.content.slice(0, pos) + '\n\n' + linkNote + b.content.slice(pos);
    } else {
      b.content = b.content + '\n\n' + linkNote;
    }
  }
  return b;
});

fs.writeFileSync(dataPath, dataFile, 'utf8');
console.log('Updated blog-39, blog-40, blog-18 in lib/data.ts cleanly.');

// Clear require cache and load live TypeScript blogPosts including updated blog-17
delete require.cache[require.resolve('../lib/data.ts')];
const { blogPosts } = require('../lib/data.ts');
const b17 = blogPosts.find(b => b.id === 'blog-17');
if (!b17) throw new Error('blog-17 not found');

async function syncMongo() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const coll = client.db('workwisevisa').collection('blogs');
  const now = new Date();

  for (const post of [b39, b40, b17, b18]) {
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
          metaKeywords: post.metaKeywords || (post.tags ? post.tags.join(', ') : ''),
          canonicalUrl: post.canonicalUrl || `https://www.workwisevisa.com/blogs/${post.slug}`,
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

syncMongo().catch(err => {
  console.error('Mongo error:', err);
  process.exit(1);
});
