const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');
let s = fs.readFileSync(dataPath, 'utf8');

const target1 = `    popularRoles: ["6G Pipe & Structural Welder", "Heavy Commercial Driver (CE)", "Civil Construction (Mason/Carpenter/Steel Fixer)", "Hospitality Chef & Hotel Staff"],
  },
];`;

const repl1 = `    popularRoles: ["6G Pipe & Structural Welder", "Heavy Commercial Driver (CE)", "Civil Construction (Mason/Carpenter/Steel Fixer)", "Hospitality Chef & Hotel Staff"],
  },
  {
    name: "Albania",
    code: "AL",
    flag: "",
    region: "Balkans & Europe",
    description:
      "Fast-growing Adriatic economy offering streamlined Unique Permits (Leje Unike) via e-Albania, 4–8 week processing, free company housing, and urgent hiring in construction, hospitality, textiles, and logistics.",
    visaTypes: ["Unique Permit (Leje Unike)", "Type D Employment Visa", "Seasonal Work Permit (6 Months)", "Qualified Specialist Permit"],
    processingTime: "4–8 weeks",
    popularRoles: ["Civil Mason & Steel Fixer", "Hotel Chef & Hospitality Staff", "Industrial Welder & Electrician", "Garment & Warehouse Operator"],
  },
];`;

// Check CRLF vs LF
if (!s.includes(target1)) {
  const target1CRLF = target1.replace(/\n/g, '\r\n');
  const repl1CRLF = repl1.replace(/\n/g, '\r\n');
  if (!s.includes(target1CRLF)) {
    throw new Error('Could not locate end of countries array in lib/data.ts');
  }
  s = s.replace(target1CRLF, repl1CRLF);
} else {
  s = s.replace(target1, repl1);
}

const target2 = `  "Croatia",
  "Hungary",`;

const repl2 = `  "Croatia",
  "Albania",
  "Hungary",`;

if (!s.includes(target2)) {
  const target2CRLF = target2.replace(/\n/g, '\r\n');
  const repl2CRLF = repl2.replace(/\n/g, '\r\n');
  if (!s.includes(target2CRLF)) {
    throw new Error('Could not locate targetCountryOptions in lib/data.ts');
  }
  s = s.replace(target2CRLF, repl2CRLF);
} else {
  s = s.replace(target2, repl2);
}

fs.writeFileSync(dataPath, s, 'utf8');
console.log('Successfully updated lib/data.ts with Albania!');

