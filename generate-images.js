// This script generates multiple responsive WebP and AVIF images for profile-photo.webp
// Place this file in your project root and run with: node generate-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'public/images/profile-photo.webp');
const outputDir = path.join(__dirname, 'public/images');
const sizes = [320, 480, 768, 1024, 1280, 1600, 1920];

(async () => {
  if (!fs.existsSync(inputFile)) {
    console.error('Input file not found:', inputFile);
    process.exit(1);
  }
  for (const width of sizes) {
    // WebP
    await sharp(inputFile)
      .resize(width)
      .toFile(path.join(outputDir, `profile-photo-${width}.webp`));
    // AVIF
    await sharp(inputFile)
      .resize(width)
      .toFile(path.join(outputDir, `profile-photo-${width}.avif`));
  }
  console.log('All responsive WebP and AVIF images generated!');
})();
