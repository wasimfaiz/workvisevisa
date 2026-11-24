const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, '..', 'lib', 'data.ts'), 'utf8');

// Parse blog objects by splitting on "id": or id:
const chunks = text.split(/[\r\n]+\s*(?:['"]?id['"]?\s*:\s*['"](blog-\d+)['"])/);
console.log('Total chunks:', (chunks.length - 1) / 2);

const blogs = [];
for (let i = 1; i < chunks.length; i += 2) {
  const id = chunks[i];
  const body = chunks[i + 1];
  
  const titleM = body.match(/['"]?title['"]?\s*:\s*['"]([^'"]+)['"]/);
  const slugM = body.match(/['"]?slug['"]?\s*:\s*['"]([^'"]+)['"]/);
  const dateM = body.match(/['"]?date['"]?\s*:\s*['"]([^'"]+)['"]/);
  
  blogs.push({
    id,
    title: titleM ? titleM[1] : 'No Title',
    slug: slugM ? slugM[1] : 'No Slug',
    date: dateM ? dateM[1] : 'No Date'
  });
}

console.log('Total parsed blogs:', blogs.length);
blogs.slice(-15).forEach(b => console.log(`${b.id} | ${b.date} | ${b.slug}`));
