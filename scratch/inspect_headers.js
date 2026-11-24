const fs = require('fs');

// Read current b50 and b51
const b50 = fs.readFileSync('scratch/b50_current.txt', 'utf8');
const b51 = fs.readFileSync('scratch/b51_current.txt', 'utf8');

console.log("b50 starts with:", b50.substring(0, 200));
console.log("b51 starts with:", b51.substring(0, 200));

