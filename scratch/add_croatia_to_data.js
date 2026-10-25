const fs = require('fs');

const dataFilePath = 'lib/data.ts';
let content = fs.readFileSync(dataFilePath, 'utf8');

const targetStr = '    name: "Bulgaria",';
const idx = content.indexOf(targetStr);

if (idx === -1) {
  console.error("Bulgaria not found in data.ts");
  process.exit(1);
}

// Find the closing bracket of countries array after Bulgaria
const closeBracketIdx = content.indexOf('];', idx);
if (closeBracketIdx === -1) {
  console.error("Closing bracket not found");
  process.exit(1);
}

const croatiaEntry = `  {
    name: "Croatia",
    code: "HR",
    flag: "",
    region: "Schengen",
    description:
      "Full Schengen member state and Eurozone economy offering up to 3-year Stay and Work Permits (Dozvola za boravak i rad), employer-provided housing, and high-volume demand across construction, 6G welding, heavy driving, hospitality, and manufacturing.",
    visaTypes: ["Stay and Work Permit (Dozvola za boravak i rad)", "EU Blue Card (EU Plava karta)", "Seasonal Work Permit", "Shortage Occupation Quota Exemption"],
    processingTime: "8–12 weeks",
    popularRoles: ["6G Pipe & Structural Welder", "Heavy Commercial Driver (CE)", "Civil Construction (Mason/Carpenter/Steel Fixer)", "Hospitality Chef & Hotel Staff"],
  },
`;

const newContent = content.slice(0, closeBracketIdx) + croatiaEntry + content.slice(closeBracketIdx);
fs.writeFileSync(dataFilePath, newContent, 'utf8');
console.log("Successfully added Croatia to countries in lib/data.ts!");
