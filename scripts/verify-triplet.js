const fs = require('fs');

['siwan', 'gopalganj', 'muzaffarpur'].forEach(c => {
  const f = `app/locations/${c}/page.tsx`;
  const content = fs.readFileSync(f, 'utf8');
  const size = fs.statSync(f).size;
  const words = content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
  const indigos = (content.match(/indigo/g) || []).length;
  const ambers = (content.match(/amber|orange|yellow/gi) || []).length;
  const hasDeskCard = content.includes('WorkWise Candidate Desk');
  const hasBreadcrumbs = content.includes('Breadcrumb Navigation');
  const hasConsultForm = content.includes('rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl');
  console.log(c.padEnd(14), 'Size:', (size / 1024).toFixed(1) + 'KB', 'Words:', words, 'Indigos:', indigos, 'Ambers:', ambers, 'DeskCard:', hasDeskCard, 'Breadcrumbs:', hasBreadcrumbs, 'ConsultForm:', hasConsultForm);
});
