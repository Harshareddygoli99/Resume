// This is a simple script to help save the profile image
// 1. Save the image from the conversation to your computer
// 2. Run this script with: node save-profile-image.js /path/to/your/downloaded/image.jpg
// 3. The image will be copied to public/images/profile.jpg

const fs = require('fs');
const path = require('path');

const sourcePath = process.argv[2];
if (!sourcePath) {
  console.error('Please provide the path to your image: node save-profile-image.js /path/to/your/image.jpg');
  process.exit(1);
}

const targetDir = path.join(__dirname, 'public', 'images');
const targetPath = path.join(targetDir, 'profile.jpg');

// Ensure the directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`Created directory: ${targetDir}`);
}

// Copy the file
try {
  fs.copyFileSync(sourcePath, targetPath);
  console.log(`Successfully copied profile image to: ${targetPath}`);
  console.log('You can now run "npm run dev" to see your profile on the website!');
} catch (error) {
  console.error(`Error copying file: ${error.message}`);
  process.exit(1);
} 