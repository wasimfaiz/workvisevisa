const { MongoClient } = require('mongodb');

async function checkMongoBlogs() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/workwise"; // let's check .env
  console.log('Checking environment or .env.local...');
}

const fs = require('fs');
let env = '';
if (fs.existsSync('.env.local')) env = fs.readFileSync('.env.local', 'utf8');
else if (fs.existsSync('.env')) env = fs.readFileSync('.env', 'utf8');

const match = env.match(/MONGODB_URI=([^\r\n]+)/);
if (match) {
  const uri = match[1].trim();
  const { MongoClient } = require('mongodb');
  const client = new MongoClient(uri);
  client.connect().then(async () => {
    const db = client.db();
    const blogs = await db.collection('blogs').find({}).project({ id: 1, slug: 1, title: 1 }).toArray();
    console.log('MongoDB total blogs:', blogs.length);
    blogs.forEach(b => console.log(b.id, '->', b.slug, ':', b.title));
    await client.close();
  }).catch(console.error);
} else {
  console.log('No MONGODB_URI found');
}
