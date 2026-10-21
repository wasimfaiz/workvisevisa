const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const dataTsPath = path.join(__dirname, '..', 'lib', 'data.ts');
const mdContentPath = path.join(__dirname, 'gulf_work_visa_master_content.md');

const content = fs.readFileSync(mdContentPath, 'utf8');

const blog26Data = {
  id: "blog-26",
  title: "Gulf & GCC Work Visa Master Guide 2026: Saudi Arabia, UAE, Qatar, Kuwait, Oman & Bahrain — Eligibility, Work Permits, Wafid GAMCA Medical, Takamol SVP, eMigrate ECR Rules, Salaries & Legal Rights",
  slug: "gulf-work-visa-complete-guide-2026-saudi-arabia-uae-qatar-kuwait-oman-bahrain",
  category: "Gulf Visas",
  date: "Oct 21, 2026",
  readTime: "45 min read",
  excerpt: "The authoritative 2026 master guide to securing a Gulf & GCC work visa across Saudi Arabia (Qiwa & Iqama), UAE (MOHRE & Emirates ID), Qatar (QVC & MoI), Kuwait (Article 18 & PAM), Oman (ROP & MoL), and Bahrain (LMRA). Featuring official immigration portal directories, Wafid GAMCA medical criteria, Takamol SVP trade testing, Indian Emigration Act eMigrate ECR clearance, 5-stage degree attestation, line-by-line fee schedules in local currencies and INR (₹), statutory minimum wage scales, Wage Protection System (WPS) rules, and anti-scam verification protocols.",
  image: "/images/gulf-work-visa-guide.jpg",
  author: "Wasim Faiz",
  tags: [
    "Gulf Work Visa",
    "GCC Work Permit 2026",
    "Saudi Arabia Work Visa",
    "UAE Work Permit MOHRE",
    "Qatar Visa Center QVC",
    "Kuwait Work Visa 18",
    "Oman Work Visa ROP",
    "Bahrain LMRA Work Permit",
    "Wafid GAMCA Medical",
    "Takamol SVP Skill Verification",
    "Indian Emigration Act ECR eMigrate",
    "Gulf Salary Scale 2026",
    "Wage Protection System WPS",
    "Document Attestation MEA MOFA",
    "WorkWise Visa Placement"
  ],
  metaTitle: "Gulf & GCC Work Visa Master Guide 2026: Saudi Arabia, UAE, Qatar, Kuwait, Oman, Bahrain",
  metaDescription: "Authoritative 2026 master guide to Gulf & GCC work visas. Saudi Iqama & Qiwa, UAE MOHRE, Qatar QVC, Kuwait 18, Oman ROP, Bahrain LMRA. Wafid medical, Takamol SVP, eMigrate ECR & salaries.",
  metaKeywords: "gulf work visa complete guide 2026, gcc work permit requirements, saudi arabia iqama qiwa contract, uae mohre employment visa rules, qatar visa center qvc medical appointment, kuwait article 18 work visa reopening, oman rop work visa clearance, bahrain lmra work permit, wafid gamca medical fit unfit rules, takamol skill verification trade test india, emigrate ecr clearance protector of emigrants, gulf salary scale in inr, how to get gulf visa without agent",
  published: true,
  featured: true,
  views: 4520,
};

const blog26ObjectStr = `  {
    id: "blog-26",
    title: ${JSON.stringify(blog26Data.title)},
    slug: ${JSON.stringify(blog26Data.slug)},
    category: ${JSON.stringify(blog26Data.category)},
    date: ${JSON.stringify(blog26Data.date)},
    readTime: ${JSON.stringify(blog26Data.readTime)},
    excerpt: ${JSON.stringify(blog26Data.excerpt)},
    image: ${JSON.stringify(blog26Data.image)},
    author: ${JSON.stringify(blog26Data.author)},
    tags: ${JSON.stringify(blog26Data.tags, null, 6).replace(/\n\s*\]/, '\n    ]')},
    metaTitle: ${JSON.stringify(blog26Data.metaTitle)},
    metaDescription: ${JSON.stringify(blog26Data.metaDescription)},
    metaKeywords: ${JSON.stringify(blog26Data.metaKeywords)},
    published: true,
    featured: true,
    views: 4520,
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

const blog26Marker = 'id: "blog-26"';
if (dataTs.includes(blog26Marker)) {
  const blogIdx = dataTs.indexOf(blog26Marker);
  const startIdx = dataTs.lastIndexOf('  {', blogIdx);
  dataTs = dataTs.substring(0, startIdx) + blog26ObjectStr + dataTs.substring(lastBracketIdx);
  fs.writeFileSync(dataTsPath, dataTs, 'utf8');
  console.log('Successfully updated existing blog-26 in lib/data.ts!');
} else {
  dataTs = dataTs.substring(0, lastBracketIdx) + blog26ObjectStr + dataTs.substring(lastBracketIdx);
  fs.writeFileSync(dataTsPath, dataTs, 'utf8');
  console.log('Successfully added blog-26 into lib/data.ts!');
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
        { slug: blog26Data.slug },
        { title: blog26Data.title }
      ]
    };

    const updateDoc = {
      ...blog26Data,
      content: content,
    };

    const result = await Blog.findOneAndUpdate(filter, updateDoc, { upsert: true, new: true });
    console.log('Successfully upserted blog-26 in MongoDB! ID:', result._id.toString());
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
