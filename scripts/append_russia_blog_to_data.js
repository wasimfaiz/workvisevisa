const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const dataTsPath = path.join(__dirname, '..', 'lib', 'data.ts');
const mdContentPath = path.join(__dirname, 'russia_work_visa_master_content.md');

const content = fs.readFileSync(mdContentPath, 'utf8');

const blog29Data = {
  id: "blog-29",
  title: "Russia Work Visa & Overseas Jobs Master Guide 2026: Quota vs Non-Quota Pathways, Salaries (RUB & INR), MVD Yellow Invitation (Priglashenie), VFS Process, Medicals & Zero Military Scam Protection",
  slug: "russia-work-visa-complete-guide-2026-jobs-salaries-mvd-invitation-process-safety",
  category: "Work Permits",
  date: "Oct 24, 2026",
  readTime: "35 min read",
  excerpt: "Definitive 2026 master guide to securing a legal Russian work visa and employment permit under Federal Law No. 115-FZ. Complete breakdown of regional quota vs non-quota trades, verified salary scales across 20+ trades in RUB, USD & INR, MVD electronic/yellow invitation (Priglashenie), VFS consular stamping, mandatory HIV testing & Law 357-FZ green card biometrics, and a vital zero-tolerance advisory against illegal travel and military recruitment scams.",
  image: "/images/russia-work-visa-guide.webp",
  author: "Wasim Faiz",
  tags: [
    "Russia Work Visa",
    "Russia Work Permit 2026",
    "Russian Employment Visa",
    "MVD Work Invitation",
    "Priglashenie Russia",
    "Russia Jobs for Indians",
    "Russia Salaries RUB INR",
    "Russian Labour Law 115-FZ",
    "Russia Construction Jobs",
    "Welder Jobs Russia",
    "Factory Jobs Russia",
    "VFS Russia Stamping",
    "Law 357-FZ Green Card",
    "WorkWise Visa Placement"
  ],
  metaTitle: "Russia Work Visa & Overseas Jobs Guide 2026: Salaries, MVD Invitation & Rules",
  metaDescription: "Authoritative 2026 master guide to Russian work visas under Law 115-FZ. Quota & non-quota pathways, verified salaries in RUB & INR, MVD invitation, VFS stamping & anti-scam rules.",
  metaKeywords: "russia work visa 2026, russian work permit for indians, mvd work invitation priglashenie, russia construction jobs salary rub inr, welder jobs in russia, vfs russia work visa application process, federal law 115-fz russia migration, how to verify russia work visa, russia military recruitment scam advisory, workwise visa overseas placement",
  published: true,
  featured: true,
  views: 3920,
};

const blog29ObjectStr = `  {
    id: "blog-29",
    title: ${JSON.stringify(blog29Data.title)},
    slug: ${JSON.stringify(blog29Data.slug)},
    category: ${JSON.stringify(blog29Data.category)},
    date: ${JSON.stringify(blog29Data.date)},
    readTime: ${JSON.stringify(blog29Data.readTime)},
    excerpt: ${JSON.stringify(blog29Data.excerpt)},
    image: ${JSON.stringify(blog29Data.image)},
    author: ${JSON.stringify(blog29Data.author)},
    tags: ${JSON.stringify(blog29Data.tags, null, 6).replace(/\n\s*\]/, '\n    ]')},
    metaTitle: ${JSON.stringify(blog29Data.metaTitle)},
    metaDescription: ${JSON.stringify(blog29Data.metaDescription)},
    metaKeywords: ${JSON.stringify(blog29Data.metaKeywords)},
    published: true,
    featured: true,
    views: 3920,
    content: ${JSON.stringify(content)},
  },
`;

// 1. Update lib/data.ts
let dataTs = fs.readFileSync(dataTsPath, 'utf8');
const exportMarker = 'export const blogPosts: BlogPost[] = sortBlogsByDate(rawBlogPosts);';
const exportIdx = dataTs.indexOf(exportMarker);
if (exportIdx === -1) {
  console.error('Could not find export const blogPosts in data.ts!');
  process.exit(1);
}

const lastBracketIdx = dataTs.lastIndexOf('];', exportIdx);
if (lastBracketIdx === -1) {
  console.error('Could not find closing bracket before export in data.ts!');
  process.exit(1);
}

const blog29Marker = 'id: "blog-29"';
if (dataTs.includes(blog29Marker)) {
  const blogIdx = dataTs.indexOf(blog29Marker);
  const startIdx = dataTs.lastIndexOf('  {', blogIdx);
  dataTs = dataTs.substring(0, startIdx) + blog29ObjectStr + dataTs.substring(lastBracketIdx);
  fs.writeFileSync(dataTsPath, dataTs, 'utf8');
  console.log('Successfully updated existing blog-29 in lib/data.ts!');
} else {
  dataTs = dataTs.substring(0, lastBracketIdx) + blog29ObjectStr + dataTs.substring(lastBracketIdx);
  fs.writeFileSync(dataTsPath, dataTs, 'utf8');
  console.log('Successfully added blog-29 into lib/data.ts!');
}

// 2. Upsert to MongoDB
async function syncToMongo() {
  let mongoUri = process.env.MONGODB_URI;
  if (!mongoUri && fs.existsSync('.env.local')) {
    const envContent = fs.readFileSync('.env.local', 'utf8');
    for (const line of envContent.split('\n')) {
      const match = line.match(/^MONGODB_URI=(.*)$/);
      if (match) {
        mongoUri = match[1].trim().replace(/^["']|["']$/g, '');
        break;
      }
    }
  }

  if (!mongoUri) {
    console.log('No MONGODB_URI found, skipping mongo update.');
    return;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB Atlas');

    const BlogSchema = new mongoose.Schema({
      title: String,
      slug: String,
      category: String,
      date: String,
      readTime: String,
      excerpt: String,
      content: String,
      image: String,
      author: String,
      tags: [String],
      metaTitle: String,
      metaDescription: String,
      metaKeywords: String,
      canonicalUrl: String,
      published: Boolean,
      featured: Boolean,
      views: Number,
    }, { timestamps: true });

    const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

    const filter = {
      $or: [
        { slug: blog29Data.slug },
        { title: blog29Data.title }
      ]
    };

    const updateDoc = {
      ...blog29Data,
      content: content,
    };

    const result = await Blog.findOneAndUpdate(filter, updateDoc, { upsert: true, new: true });
    console.log('Successfully upserted blog-29 in MongoDB! ID:', result._id.toString());
  } catch (err) {
    console.error('Error syncing to MongoDB:', err);
  } finally {
    await mongoose.disconnect();
  }
}

syncToMongo().then(() => {
  console.log('Finished sync.');
  process.exit(0);
});
