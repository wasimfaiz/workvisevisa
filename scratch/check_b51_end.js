const fs = require('fs');
const dataContent = fs.readFileSync('lib/data.ts', 'utf8');

const pos51 = dataContent.indexOf('"id": "blog-51"');
const closingBrace51 = dataContent.indexOf('\n  },', pos51);
const closingBrace51Alt = dataContent.indexOf('\n},', pos51);

console.log("closingBrace51:", closingBrace51, "closingBrace51Alt:", closingBrace51Alt);

// Let's print 200 chars around where blog-51 ends
const closePos = closingBrace51 !== -1 ? closingBrace51 : closingBrace51Alt;
console.log("Around blog-51 end:\n", dataContent.substring(closePos - 100, closePos + 200));

