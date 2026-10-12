const fs = require('fs');

const muzaffarpurTemplate = fs.readFileSync('app/locations/muzaffarpur/page.tsx', 'utf8');

function generateCityFile(config) {
  let content = muzaffarpurTemplate;

  // Replacements
  content = content.replace(/Muzaffarpur/g, config.name);
  content = content.replace(/muzaffarpur/g, config.slug);
  content = content.replace(/Tirhut/g, config.division);
  content = content.replace(/tirhut/g, config.divisionSlug);
  
  // Custom blocks / region specifics
  if (config.customReplace) {
    config.customReplace.forEach(([from, to]) => {
      content = content.replace(from, to);
    });
  }

  // In directory section, mark this city as active (emerald) and muzaffarpur as white
  const dirOldActive = '<Link\n                href="/locations/' + config.slug + '"\n                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"\n              >\n                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">';
  
  const dirNewActive = '<Link\n                href="/locations/' + config.slug + '"\n                className="rounded-xl border border-emerald-500 bg-emerald-50/50 p-4 text-center shadow-sm"\n              >\n                <div className="font-bold text-emerald-800">';

  const dirOldMuzaffarpur = '<Link\n                href="/locations/muzaffarpur"\n                className="rounded-xl border border-emerald-500 bg-emerald-50/50 p-4 text-center shadow-sm"\n              >\n                <div className="font-bold text-emerald-800">';

  const dirNewMuzaffarpur = '<Link\n                href="/locations/muzaffarpur"\n                className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm hover:border-emerald-500 hover:shadow-md transition-all group"\n              >\n                <div className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">';

  content = content.replace(dirOldMuzaffarpur, dirNewMuzaffarpur);
  content = content.replace(dirOldActive, dirNewActive);

  fs.writeFileSync('app/locations/' + config.slug + '/page.tsx', content, 'utf8');
  console.log('Generated unified page for ' + config.name + ' at app/locations/' + config.slug + '/page.tsx');
}

// 1. Chhapra
generateCityFile({
  name: 'Chhapra',
  slug: 'chhapra',
  division: 'Saran',
  divisionSlug: 'saran',
  customReplace: [
    [/Motipur, Kanti, Kurhani, Sakra, Mushahari, Bochahan, Aurai, and Gaighat/g, 'Marhaura, Sonepur, Revelganj, Ekma, Baniapur, Dighwara, Garkha, and Manjhi'],
    [/Motipur, Kanti, Kurhani, and Sakra/g, 'Marhaura, Sonepur, Ekma, and Revelganj'],
    [/East-West Corridor \(NH-27\)/g, 'Saran Emigration Belt along NH-19 & NH-31'],
    [/Sri Krishna Medical College and Hospital \(SKMCH\)/g, 'Saran District Technical and Industrial Network'],
    [/SKMCH/g, 'Chhapra Sadar & Saran Polytechnic'],
    [/Muzaffarpur Junction/g, 'Chhapra Junction (CPR)'],
    [/latitude: 26.1209,\s+longitude: 85.3647/g, 'latitude: 25.7796, longitude: 84.7499'],
    [/postalCode: "842001"/g, 'postalCode: "841301"']
  ]
});

// 2. Darbhanga
generateCityFile({
  name: 'Darbhanga',
  slug: 'darbhanga',
  division: 'Mithilanchal',
  divisionSlug: 'mithilanchal',
  customReplace: [
    [/Motipur, Kanti, Kurhani, Sakra, Mushahari, Bochahan, Aurai, and Gaighat/g, 'Laheriasarai, Benipur, Baheri, Biraul, Hayaghat, Keoti, Jale, and Kusheshwar Asthan'],
    [/Motipur, Kanti, Kurhani, and Sakra/g, 'Laheriasarai, Benipur, Baheri, and Jale'],
    [/East-West Corridor \(NH-27\)/g, 'Mithila Commercial Gateway along NH-27 & NH-527C'],
    [/Sri Krishna Medical College and Hospital \(SKMCH\)/g, 'Darbhanga Medical College & Hospital (DMCH)'],
    [/SKMCH/g, 'DMCH Darbhanga'],
    [/Muzaffarpur Junction/g, 'Darbhanga Junction (DBG) & Darbhanga Airport (DBR)'],
    [/latitude: 26.1209,\s+longitude: 85.3647/g, 'latitude: 26.1542, longitude: 85.8918'],
    [/postalCode: "842001"/g, 'postalCode: "846004"']
  ]
});

// 3. Gaya
generateCityFile({
  name: 'Gaya',
  slug: 'gaya',
  division: 'Magadh',
  divisionSlug: 'magadh',
  customReplace: [
    [/Motipur, Kanti, Kurhani, Sakra, Mushahari, Bochahan, Aurai, and Gaighat/g, 'Bodh Gaya, Sherghati, Tekari, Imamganj, Barachatti, Belaganj, Wazirganj, and Manpur'],
    [/Motipur, Kanti, Kurhani, and Sakra/g, 'Bodh Gaya, Sherghati, Tekari, and Belaganj'],
    [/East-West Corridor \(NH-27\)/g, 'Grand Trunk Road Corridor (NH-19 & NH-22)'],
    [/Sri Krishna Medical College and Hospital \(SKMCH\)/g, 'Anugrah Narayan Magadh Medical College & Hospital (ANMMCH)'],
    [/SKMCH/g, 'ANMMCH Gaya'],
    [/Muzaffarpur Junction/g, 'Gaya Junction (GAYA) & Gaya International Airport (GAY)'],
    [/latitude: 26.1209,\s+longitude: 85.3647/g, 'latitude: 24.7914, longitude: 85.0002'],
    [/postalCode: "842001"/g, 'postalCode: "823001"']
  ]
});
