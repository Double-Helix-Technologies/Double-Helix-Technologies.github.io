# Netlify Function Deployment Guide

## Required Environment Variables

Set these in your Netlify dashboard (Site settings → Environment variables):

1. **RESEND_API_KEY** (Required)
   - Your Resend API key for sending emails
   - Get it from: https://resend.com/api-keys

2. **EVENT_CODE_HASH** (Required)
   - The SHA-256 hash of your event code + salt
   - Should match the hash computed on the client side
   - Generate it using the same salt as `NEXT_PUBLIC_EVENT_CODE_SALT`

3. **QUIZ_NOTIFICATION_EMAIL** (Optional but recommended)
   - Email address to receive quiz submissions
   - If not set, submissions will only be logged to console

4. **EMAIL_FROM** (Optional)
   - Email address to send from
   - Defaults to: `board@doublehelix.dev`

## Deployment Methods

### Option 1: Git-based Deployment (Recommended)

If your repository is connected to Netlify:

1. **Commit and push your changes:**
   ```bash
   git add netlify/functions/quiz-submit.js netlify.toml
   git commit -m "Add quiz submission function"
   git push origin main
   ```

2. **Set environment variables in Netlify:**
   - Go to your Netlify dashboard
   - Navigate to: Site settings → Environment variables
   - Add all required variables listed above

3. **Trigger a new deployment:**
   - Netlify will automatically deploy on push, OR
   - Go to Deploys → Trigger deploy → Deploy site

### Option 2: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Link your site (if not already linked):**
   ```bash
   netlify link
   ```

4. **Set environment variables:**
   ```bash
   netlify env:set RESEND_API_KEY "your-api-key"
   netlify env:set EVENT_CODE_HASH "your-hash"
   netlify env:set QUIZ_NOTIFICATION_EMAIL "your-email@example.com"
   netlify env:set EMAIL_FROM "board@doublehelix.dev"
   ```

5. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## Function Endpoint

After deployment, your function will be available at:
- **Production:** `https://your-site.netlify.app/api/quiz-submit`
- **Function URL:** `https://your-site.netlify.app/.netlify/functions/quiz-submit`

The redirect in `netlify.toml` makes `/api/quiz-submit` work automatically.

## Testing

Test your function with:
```bash
curl -X POST https://your-site.netlify.app/api/quiz-submit \
  -H "Content-Type: application/json" \
  -d '{
    "eventCodeProof": "your-hash",
    "startedAt": "2024-01-01T00:00:00Z",
    "completedAt": "2024-01-01T00:05:00Z",
    "answers": [],
    "totalScore": 10,
    "endingId": "fragile"
  }'
```

## Troubleshooting

- Check function logs in Netlify dashboard: Functions → quiz-submit → View logs
- Verify environment variables are set correctly
- Ensure `EVENT_CODE_HASH` matches the hash computed on the client side
