const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'hero');
fs.mkdirSync(outDir, { recursive: true });

fs.copyFileSync(
  'C:\\Users\\CMP\\.gemini\\antigravity\\brain\\5784d847-5f81-44dc-a013-414e4754ebd3\\hero_image_1_1777980650611.png', 
  path.join(outDir, 'img1.png')
);
fs.copyFileSync(
  'C:\\Users\\CMP\\.gemini\\antigravity\\brain\\5784d847-5f81-44dc-a013-414e4754ebd3\\hero_image_2_1777980768331.png', 
  path.join(outDir, 'img2.png')
);
fs.copyFileSync(
  'C:\\Users\\CMP\\.gemini\\antigravity\\brain\\5784d847-5f81-44dc-a013-414e4754ebd3\\hero_image_3_1777980924963.png', 
  path.join(outDir, 'img3.png')
);

console.log('Images copied successfully.');
