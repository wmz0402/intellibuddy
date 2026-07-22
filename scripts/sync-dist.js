const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const frontendDist = path.join(rootDir, 'frontend', 'dist');
const rootDist = path.join(rootDir, 'dist');

console.log('Synchronizing dist directories...');
console.log('Root dir:', rootDir);

if (fs.existsSync(frontendDist)) {
  console.log('Copying frontend/dist -> dist');
  fs.cpSync(frontendDist, rootDist, { recursive: true, force: true });
}

if (fs.existsSync(rootDist)) {
  console.log('Ensuring frontend/dist exists');
  const frontendDir = path.join(rootDir, 'frontend');
  if (!fs.existsSync(frontendDir)) {
    fs.mkdirSync(frontendDir, { recursive: true });
  }
  fs.cpSync(rootDist, frontendDist, { recursive: true, force: true });
}

console.log('Dist sync complete!');
