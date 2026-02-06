# Netlify Environment Variables Configuration

## Required Environment Variables

Set these in your Netlify dashboard:
**Site settings → Environment variables → Add a variable**

### 1. `RESEND_API_KEY` ⚠️ REQUIRED
- **Description:** Your Resend API key for sending email notifications
- **How to get it:**
  1. Go to https://resend.com/api-keys
  2. Sign in or create an account
  3. Create a new API key
  4. Copy the key (starts with `re_`)
- **Example:** `re_1234567890abcdefghijklmnopqrstuvwxyz`

### 2. `EVENT_CODE_HASH` ⚠️ REQUIRED
- **Description:** SHA-256 hash of your event code + salt (must match client-side hash)
- **How to generate:**
  
  The hash is computed as: `SHA-256(eventCode + NEXT_PUBLIC_EVENT_CODE_SALT)`
  
  **Option A: Using Node.js (recommended)**
  ```bash
  node -e "
  const crypto = require('crypto');
  const eventCode = 'YOUR_EVENT_CODE_HERE';
  const salt = 'YOUR_SALT_HERE'; // Should match NEXT_PUBLIC_EVENT_CODE_SALT
  const hash = crypto.createHash('sha256').update(eventCode + salt).digest('hex');
  console.log(hash);
  "
  ```
  
  **Option B: Using online tool**
  1. Concatenate: `YOUR_EVENT_CODE + YOUR_SALT`
  2. Use https://emn178.github.io/online-tools/sha256.html
  3. Paste the concatenated string
  4. Copy the resulting hash
  
  **Important:** This hash must match what the client computes. The client uses:
  - `NEXT_PUBLIC_EVENT_CODE_HASH` (the expected hash)
  - `NEXT_PUBLIC_EVENT_CODE_SALT` (the salt)
  
  The server's `EVENT_CODE_HASH` should be the same as `NEXT_PUBLIC_EVENT_CODE_HASH` from your `.env.local` file.
  
- **Example:** `a1b2c3d4e5f6...` (64 character hex string)

### 3. `QUIZ_NOTIFICATION_EMAIL` ✅ RECOMMENDED
- **Description:** Email address where quiz submissions will be sent
- **Format:** Valid email address
- **Note:** If not set, submissions will only be logged to console (not recommended for production)
- **Example:** `notifications@doublehelix.dev`

### 4. `EMAIL_FROM` (Optional)
- **Description:** Email address to send notifications from
- **Default:** `board@doublehelix.dev` (if not set)
- **Note:** Must be a verified domain in Resend
- **Example:** `board@doublehelix.dev`

---

## Quick Setup Checklist

1. ✅ Get your Resend API key → Set `RESEND_API_KEY`
2. ✅ Generate event code hash → Set `EVENT_CODE_HASH`
3. ✅ Set notification email → Set `QUIZ_NOTIFICATION_EMAIL`
4. ✅ (Optional) Set sender email → Set `EMAIL_FROM`

---

## How to Set in Netlify Dashboard

1. Go to https://app.netlify.com
2. Select your site
3. Navigate to: **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Enter the variable name and value
6. Click **Save**
7. **Important:** Redeploy your site for changes to take effect

---

## Verification

After setting variables, test the function:
```bash
curl -X POST https://your-site.netlify.app/api/quiz-submit \
  -H "Content-Type: application/json" \
  -d '{
    "eventCodeProof": "your-generated-hash",
    "startedAt": "2024-01-01T00:00:00Z",
    "completedAt": "2024-01-01T00:05:00Z",
    "answers": [],
    "totalScore": 10,
    "endingId": "fragile"
  }'
```

Check function logs in Netlify dashboard: **Functions** → **quiz-submit** → **View logs**
