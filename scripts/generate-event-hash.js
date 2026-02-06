#!/usr/bin/env node

/**
 * Helper script to generate EVENT_CODE_HASH for Netlify
 * 
 * Usage:
 *   node scripts/generate-event-hash.js <EVENT_CODE> <SALT>
 * 
 * Example:
 *   node scripts/generate-event-hash.js "my-secret-code" "my-salt"
 */

const crypto = require('crypto');

const eventCode = process.argv[2];
const salt = process.argv[3];

if (!eventCode || !salt) {
  console.error('Usage: node scripts/generate-event-hash.js <EVENT_CODE> <SALT>');
  console.error('');
  console.error('Example:');
  console.error('  node scripts/generate-event-hash.js "my-secret-code" "my-salt"');
  process.exit(1);
}

const hash = crypto.createHash('sha256')
  .update(eventCode + salt)
  .digest('hex');

console.log('');
console.log('═══════════════════════════════════════════════════════════');
console.log('  EVENT_CODE_HASH for Netlify');
console.log('═══════════════════════════════════════════════════════════');
console.log('');
console.log(`Event Code: ${eventCode}`);
console.log(`Salt: ${salt}`);
console.log('');
console.log(`EVENT_CODE_HASH: ${hash}`);
console.log('');
console.log('Copy the hash above and set it as EVENT_CODE_HASH in Netlify');
console.log('═══════════════════════════════════════════════════════════');
console.log('');
