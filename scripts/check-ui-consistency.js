const fs = require('fs');

const cities = ['patna', 'noida', 'siwan', 'gopalganj', 'muzaffarpur', 'chhapra', 'darbhanga', 'gaya'];

cities.forEach(city => {
  const file = `app/locations/${city}/page.tsx`;
  const content = fs.readFileSync(file, 'utf8');
  const hasBreadcrumb = content.includes('aria-label="Breadcrumb"');
  const hasAmber = content.includes('text-amber-400');
  const hasConsultationDark = content.includes('id="consultation"');
  const heroClass = content.match(/<section[^>]*className="([^"]*bg-gradient[^"]*)"/);
  console.log({
    city,
    hasBreadcrumb,
    hasAmber,
    hasConsultationDark,
    heroPreview: heroClass ? heroClass[1].slice(0, 70) : 'none'
  });
});
