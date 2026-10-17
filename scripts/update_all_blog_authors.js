const fs = require('fs');
const mongoose = require('mongoose');

// 1. Read MongoDB URI
let mongoUri = process.env.MONGODB_URI;
if (!mongoUri && fs.existsSync('.env.local')) {
  for (const line of fs.readFileSync('.env.local', 'utf8').split('\n')) {
    const match = line.match(/^MONGODB_URI=(.*)$/);
    if (match) {
      mongoUri = match[1].trim().replace(/^["']|["']$/g, '');
      break;
    }
  }
}

async function updateMongoAuthors() {
  try {
    await mongoose.connect(mongoUri);
    const res = await mongoose.connection.collection('blogs').updateMany(
      {},
      { $set: { author: "Wasim Faiz" } }
    );
    console.log(`Updated ${res.modifiedCount} blogs in MongoDB Atlas with author: "Wasim Faiz"`);

    const blogs = await mongoose.connection.collection('blogs').find({}, { projection: { title: 1, author: 1 } }).toArray();
    console.log(`Verified ${blogs.length} blogs in MongoDB:`);
    for (const b of blogs.slice(0, 5)) {
      console.log(`  - ${b.title.substring(0, 40)}... -> author: "${b.author}"`);
    }

    await mongoose.disconnect();
  } catch (err) {
    console.error('MongoDB update error:', err);
  }
}

// 2. Update lib/data.ts
function updateDataTsAuthors() {
  const filePath = 'lib/data.ts';
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace any author: "..." in rawBlogPosts with author: "Wasim Faiz"
  // E.g. author: "WorkWise Immigration Editorial Team", -> author: "Wasim Faiz",
  const updated = content.replace(/author:\s*"[^"]+"/g, 'author: "Wasim Faiz"');

  fs.writeFileSync(filePath, updated, 'utf8');
  console.log('Successfully updated all authors in lib/data.ts to "Wasim Faiz"!');
}

async function main() {
  updateDataTsAuthors();
  await updateMongoAuthors();
}

main();
