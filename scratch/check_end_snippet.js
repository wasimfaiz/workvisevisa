const fs = require('fs');
const dataContent = fs.readFileSync('lib/data.ts', 'utf8');

const lastBracket = dataContent.lastIndexOf('];');
console.log("End of array snippet:\n", dataContent.substring(lastBracket - 60, lastBracket + 10));

