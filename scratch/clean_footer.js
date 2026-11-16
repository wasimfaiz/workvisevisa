const fs = require('fs');

const path = 'components/Footer.tsx';
const content = fs.readFileSync(path, 'utf8');

const startMarker = '        {/* Candidate Hubs Row (High Local SEO Link Authority) */}';
const endMarker = '        {/* bottom bar */}';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Could not find markers in Footer.tsx!');
  process.exit(1);
}

// Replace the entire block with clean spacing for bottom bar
const newContent = content.slice(0, startIndex) + 
  '        {/* bottom bar */}\n' + 
  content.slice(endIndex + endMarker.length + 1).replace(
    '<div className="mt-8 flex flex-col',
    '<div className="mt-12 flex flex-col'
  );

fs.writeFileSync(path, newContent, 'utf8');
console.log('Footer.tsx cleaned successfully!');

