#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directory to check
const distDir = path.resolve(__dirname, '../dist');

console.log('🔍 Testing static export...');

// Check if the dist directory exists
if (!fs.existsSync(distDir)) {
  console.error('❌ Error: dist directory not found. Run "npm run build" first.');
  process.exit(1);
}

// Check for index.html
const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ Error: index.html not found in the dist directory.');
  process.exit(1);
}

// Check for CSS files
const cssFiles = fs.readdirSync(path.join(distDir, '_next/static/css')).filter(file => file.endsWith('.css'));
if (cssFiles.length === 0) {
  console.error('❌ Error: No CSS files found in the static export.');
  process.exit(1);
}

console.log('✅ Found index.html');
console.log(`✅ Found ${cssFiles.length} CSS files`);

// Print the CSS file names
console.log('\nCSS files:');
cssFiles.forEach(file => {
  console.log(`  - ${file}`);
});

// Look for specific CSS variables
const mainCssPath = path.join(distDir, '_next/static/css', cssFiles[0]);
const cssContent = fs.readFileSync(mainCssPath, 'utf8');

// Check if CSS contains the dark mode variables
if (cssContent.includes('--primary') && cssContent.includes('.dark')) {
  console.log('✅ CSS contains dark mode variables');
} else {
  console.warn('⚠️ Warning: CSS might not contain dark mode variables');
}

console.log('\n🚀 Static export looks good! You can serve it with:');
console.log('  npm run serve-static');

// Exit with success
process.exit(0); 