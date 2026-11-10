const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const targets = {
  'dubai-construction-work-complete-guide-jobs-salaries-visas-recruitment-2026':
    'dubai-construction-work-jobs-guide-2026-salaries-trades-visa-process-labor-laws-wps',
  'saudi-arabia-neom-work-visa-recruitment-guide-2026':
    'saudi-arabia-neom-megaprojects-recruitment-work-visa-guide-2026',
  'kuwait-work-visa-reopening-degree-attestation-guide-2026':
    'kuwait-work-visa-reopening-labor-law-reforms-degree-attestation-2026',
  'police-clearance-certificate-pcc-gulf-work-visas-passport-office-guide-2026':
    'police-clearance-certificate-pcc-gulf-european-visas-psk-apostille-guide-2026',
  'wafid-gamca-medical-test-gulf-visa-complete-guide-2026':
    'wafid-gamca-medical-examination-2026-online-appointment-rules-fit-unfit-criteria',
  'gulf-gcc-work-visa-complete-guide-2026-saudi-uae-qatar-kuwait-oman-bahrain':
    'gulf-work-visa-complete-guide-2026-saudi-arabia-uae-qatar-kuwait-oman-bahrain',
  'dubai-residence-permit-complete-guide-2026-pathways-application-fees-rules':
    'dubai-residence-visa-permit-complete-guide-2026-eligibility-process-cost-official-portals',
  'saudi-arabia-skill-verification-program-takamol-trade-test-guide-2026':
    'takamol-svp-skill-verification-program-saudi-arabia-trade-test-guide-2026',
  'qatar-visa-center-qvc-biometrics-medical-guide-2026':
    'qatar-work-visa-qvc-process-guide-2026-medical-biometrics-contract-qid',
  'kuwait-work-visa-article-18-regulations-degree-attestation-2026':
    'kuwait-work-visa-reopening-labor-law-reforms-degree-attestation-2026',
  'uk-european-caregiver-work-visa-complete-guide-2026':
    'uk-health-and-care-worker-visa-essential-requirements-caregivers-2026',
  'dubai-construction-work-visa-salary-recruitment-guide-2026':
    'dubai-construction-work-jobs-guide-2026-salaries-trades-visa-process-labor-laws-wps'
};

// 1. Update lib/data.ts
const dataTsPath = path.join(__dirname, '..', 'lib', 'data.ts');
let dataContent = fs.readFileSync(dataTsPath, 'utf8');
let dataModified = false;

for (const [oldSlug, newSlug] of Object.entries(targets)) {
  const oldLink = `/blogs/${oldSlug}`;
  const newLink = `/blogs/${newSlug}`;
  if (dataContent.includes(oldLink)) {
    dataContent = dataContent.replaceAll(oldLink, newLink);
    dataModified = true;
    console.log(`Replaced in lib/data.ts: ${oldLink} -> ${newLink}`);
  }
}

if (dataModified) {
  fs.writeFileSync(dataTsPath, dataContent, 'utf8');
  console.log('lib/data.ts updated successfully.');
} else {
  console.log('No targets found in lib/data.ts.');
}

// 2. Update MongoDB Atlas
let env = '';
if (fs.existsSync('.env.local')) env = fs.readFileSync('.env.local', 'utf8');
else if (fs.existsSync('.env')) env = fs.readFileSync('.env', 'utf8');
const match = env.match(/MONGODB_URI=([^\r\n]+)/);

if (match) {
  const uri = match[1].trim();
  const client = new MongoClient(uri);
  client.connect().then(async () => {
    const db = client.db();
    const blogsCollection = db.collection('blogs');
    const blogs = await blogsCollection.find({}).toArray();

    let totalUpdated = 0;
    for (const blog of blogs) {
      let content = blog.content || '';
      let modified = false;

      for (const [oldSlug, newSlug] of Object.entries(targets)) {
        const oldLink = `/blogs/${oldSlug}`;
        const newLink = `/blogs/${newSlug}`;
        if (content.includes(oldLink)) {
          content = content.replaceAll(oldLink, newLink);
          modified = true;
          console.log(`Replaced in MongoDB blog "${blog.slug}": ${oldLink} -> ${newLink}`);
        }
      }

      if (modified) {
        await blogsCollection.updateOne(
          { _id: blog._id },
          { $set: { content: content, updatedAt: new Date() } }
        );
        totalUpdated++;
      }
    }

    console.log(`Successfully updated ${totalUpdated} blogs in MongoDB Atlas.`);
    await client.close();
  }).catch(console.error);
} else {
  console.log('No MONGODB_URI found.');
}

