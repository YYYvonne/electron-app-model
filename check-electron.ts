const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  const electronPath = path.resolve('node_modules', 'electron');
  const distPath = path.resolve('node_modules', 'electron', 'dist');
  if (!fs.existsSync(electronPath)) {
    execSync('npm cache clean --force && npm install electron');
    throw new Error('Electron not found');
  }
  if (!fs.existsSync(distPath)) execSync('npm cache clean --force && npm install electron-fix -g && electron-fix start');
  console.log('Electron Path:', electronPath, distPath);
} catch (e) {
  console.error('Electron not found!', e);
}
