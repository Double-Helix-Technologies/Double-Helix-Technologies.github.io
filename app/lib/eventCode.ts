const EVENT_CODE_HASH = process.env.NEXT_PUBLIC_EVENT_CODE_HASH || '';
const EVENT_CODE_SALT = process.env.NEXT_PUBLIC_EVENT_CODE_SALT || 'default-salt-change-in-production';

async function hashEventCode(code: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(code + EVENT_CODE_SALT);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function verifyEventCode(code: string): Promise<{ valid: boolean; proof?: string }> {
  if (!code || !EVENT_CODE_HASH) {
    return { valid: false };
  }

  const computedHash = await hashEventCode(code.trim());
  
  if (computedHash.length !== EVENT_CODE_HASH.length) {
    return { valid: false };
  }

  let result = 0;
  for (let i = 0; i < computedHash.length; i++) {
    result |= computedHash.charCodeAt(i) ^ EVENT_CODE_HASH.charCodeAt(i);
  }
  
  if (result === 0) {
    return { valid: true, proof: computedHash };
  }
  
  return { valid: false };
}
