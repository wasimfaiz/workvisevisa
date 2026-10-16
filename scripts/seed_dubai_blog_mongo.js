const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Read .env.local to get MONGODB_URI
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

async function seed() {
  if (!mongoUri) {
    console.log('No MONGODB_URI found, skipping mongo seed.');
    process.exit(0);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    const content = fs.readFileSync(path.join(__dirname, 'dubai_blog_content.md'), 'utf8');
    const wordCount = (content.match(/\b[A-Za-z0-9_-]+\b/g) || []).length;

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

    const doc = {
      title: "Dubai Construction Work & Overseas Jobs Master Guide 2026: Salaries (AED & INR), 25+ Trades, UAE Labour Law (Decree-Law 33/2021), MOHRE Employment Visa Roadmap, WPS & Camp Living",
      slug: "dubai-construction-work-jobs-guide-2026-salaries-trades-visa-process-labor-laws-wps",
      category: "Gulf Visas & Overseas Jobs",
      date: "Oct 17, 2026",
      readTime: "45 min read",
      excerpt: "Comprehensive guide to Dubai construction work for Indian and overseas tradesmen. Complete breakdown of 25+ trades, verified salary matrices in AED & INR, UAE Labour Law (Decree-Law 33/2021), Midday Work Ban, End-of-Service Gratuity, 6-phase employment visa roadmap, GAMCA medicals, eMigrate ECR clearance, labour camp living (Sonapur, Al Quoz, Jebel Ali), safety protocols, top Tier-1 contractors (AFGC Holding, ALEC, ASGC, Shapoorji, Six Construct), and fraud prevention.",
      image: "/images/dubai-construction-work.jpg",
      author: "WorkWise UAE Recruitment & Legal Immigration Desk",
      tags: [
        "Dubai Construction Work",
        "Dubai Construction Jobs",
        "UAE Labour Law",
        "Dubai Salaries AED INR",
        "Construction Helper Jobs",
        "Mason Jobs Dubai",
        "Shuttering Carpenter Dubai",
        "Steel Fixer Dubai",
        "Scaffolder Jobs Dubai",
        "MOHRE Work Visa",
        "Wage Protection System WPS",
        "Sonapur Labour Camp",
        "AFGC Holding Dubai",
        "eMigrate ECR POE",
        "GAMCA Wafid Medical",
        "Overseas Employment 2026"
      ],
      metaTitle: "Dubai Construction Work & Jobs Master Guide 2026: Salaries, Trades & Visas",
      metaDescription: "Comprehensive guide to Dubai construction work. Discover 25+ trades, AED & INR salary matrices, UAE Labour Law, MOHRE visa roadmap, WPS & camp life.",
      metaKeywords: "dubai construction work, dubai construction jobs 2026, construction helper salary in dubai, mason salary in dubai aed inr, shuttering carpenter salary uae, steel fixer jobs dubai, uae labour law decree 33 2021, midday work ban uae, mohre employment visa roadmap, wps salary system uae, sonapur labour camp life, afgc holding dubai vaccancy, emigrate ecr poe clearance, gamca medical test india, dubai work visa for indians 2026",
      canonicalUrl: "https://www.workwisevisa.com/blogs/dubai-construction-work-jobs-guide-2026-salaries-trades-visa-process-labor-laws-wps",
      published: true,
      featured: true,
      views: 3120,
      content: content,
    };

    const updated = await Blog.findOneAndUpdate(
      { slug: doc.slug },
      { $set: doc },
      { upsert: true, new: true }
    );

    console.log('Successfully upserted blog into MongoDB with ID:', updated._id, 'Word Count:', wordCount);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('MongoDB seed error:', err.message);
    process.exit(0);
  }
}

seed();
