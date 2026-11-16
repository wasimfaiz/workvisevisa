const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'lib/data.ts',
  'app/locations/delhi/page.tsx',
  'public/llms.txt',
  'public/llms-full.txt'
];

filesToUpdate.forEach(relPath => {
  const fullPath = path.join(__dirname, '..', relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    const beforeCount = (content.match(/track-application/g) || []).length;
    // Replace /track-application with /track
    content = content.replace(/([(\/])track-application([)"'\s\/]|$)/g, '$1track$2');
    // Also handle workwisevisa.com/track-application
    content = content.replace(/workwisevisa\.com\/track-application/g, 'workwisevisa.com/track');
    const afterCount = (content.match(/track-application/g) || []).length;
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`${relPath}: replaced ${beforeCount - afterCount} occurrences (remaining: ${afterCount})`);
  }
});

