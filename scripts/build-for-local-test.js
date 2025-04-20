#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Execute command with output printing
function exec(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

// Main function
async function main() {
  console.log('🔧 Building for local testing...');
  
  // Build the project
  process.env.NODE_ENV = 'production';
  exec('npm run build');

  console.log('\n✅ Build completed. You can now test locally with:');
  console.log('npm run serve-static    # Normal mode');
  console.log('npm run serve-as-github # GitHub Pages simulation');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
}); 