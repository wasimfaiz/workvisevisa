const fs = require('fs');
const path = require('path');

const targetMdPath = path.join(__dirname, 'gulf_work_visa_master_content.md');
const currentMd = fs.readFileSync(targetMdPath, 'utf8');

const jsCode = `const fs = require('fs');
const path = require('path');

const targetMdPath = path.join(__dirname, 'gulf_work_visa_master_content.md');
const content = ${JSON.stringify(currentMd)};

fs.writeFileSync(targetMdPath, content, 'utf8');
console.log('Successfully wrote scripts/gulf_work_visa_master_content.md, length:', content.length);
`;

fs.writeFileSync(path.join(__dirname, 'generate_gulf_master_content.js'), jsCode, 'utf8');
console.log('Synchronized scripts/generate_gulf_master_content.js with cleaned content!');
