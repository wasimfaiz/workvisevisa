const fs = require('fs');

const configs = {
  siwan: {
    cityTitle: 'Siwan',
    heading: 'Book Your In-Person or Online Profile Assessment in Siwan',
    desc: 'Submit your profile online or consult our emigration advisors. Our licensed career counselors will assess your trade experience, review your passport eligibility, and align you with authentic government-approved job demands.'
  },
  gopalganj: {
    cityTitle: 'Gopalganj',
    heading: 'Book Your In-Person or Online Profile Assessment in Gopalganj',
    desc: 'Submit your profile online or consult our emigration advisors. Our licensed career counselors will assess your trade experience, review your passport eligibility, and align you with authentic government-approved job demands.'
  },
  muzaffarpur: {
    cityTitle: 'Muzaffarpur',
    heading: 'Book Your In-Person or Online Profile Assessment in Muzaffarpur',
    desc: 'Submit your profile online or consult our emigration advisors. Our licensed career counselors will assess your trade experience, review your passport eligibility, and align you with authentic government-approved job demands.'
  },
  chhapra: {
    cityTitle: 'Chhapra (Saran)',
    heading: 'Book Your In-Person or Online Profile Assessment in Chhapra (Saran)',
    desc: 'Submit your profile online or consult our emigration advisors. Our licensed career counselors will assess your trade experience, review your passport eligibility, and align you with authentic government-approved job demands.'
  },
  darbhanga: {
    cityTitle: 'Darbhanga',
    heading: 'Book Your In-Person or Online Profile Assessment in Darbhanga',
    desc: 'Submit your profile online or consult our emigration advisors. Our licensed career counselors will assess your trade experience, review your passport eligibility, and align you with authentic government-approved job demands.'
  },
  gaya: {
    cityTitle: 'Gaya',
    heading: 'Book Your In-Person or Online Profile Assessment in Gaya',
    desc: 'Submit your profile online or consult our emigration advisors. Our licensed career counselors will assess your trade experience, review your passport eligibility, and align you with authentic government-approved job demands.'
  }
};

Object.entries(configs).forEach(([city, cfg]) => {
  const filePath = `app/locations/${city}/page.tsx`;
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to match the consultation section
  const sectionRegex = /<section[\s\S]*?id="consultation"[\s\S]*?<\/section>/;
  
  const replacement = `<section
          id="consultation"
          className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-20 text-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Institutional Candidate Evaluation
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                ${cfg.heading}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                ${cfg.desc}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              <ConsultationForm />
            </div>
          </div>
        </section>`;

  if (sectionRegex.test(content)) {
    content = content.replace(sectionRegex, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated consultation section for ${city}`);
  } else {
    console.log(`Could not match consultation section in ${city}`);
  }
});
