const sharp = require('sharp');

const src = 'C:/Users/win/.gemini/antigravity/brain/55846097-d97b-49d8-9a61-1811045bc8db/saudi_arabia_work_visa_guide_banner_1794822490328.jpg';
const dest = 'public/images/saudi-arabia-work-visa-guide.webp';

sharp(src)
  .resize(1200, 675, { fit: 'cover' })
  .webp({ quality: 85 })
  .toFile(dest)
  .then(info => console.log('Converted successfully:', info))
  .catch(err => console.error('Error:', err));

