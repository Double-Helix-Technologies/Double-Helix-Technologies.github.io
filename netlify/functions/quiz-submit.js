const RESEND_API_URL = 'https://api.resend.com/emails';
const MAX_SCORE = 21;
const VALID_ENDINGS = ['confident', 'fragile', 'blind'];
const DEFAULT_EMAIL_FROM = 'board@doublehelix.dev';

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://doublehelix.dev',
  'https://www.doublehelix.dev',
  'http://localhost:3000', // For local development
];

const getCorsHeaders = (origin) => {
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400', // 24 hours
  };
};

const createResponse = (statusCode, ok, error = null, headers = {}) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
  body: JSON.stringify({ ok, ...(error && { error }) }),
});

const getClientIp = (headers) => {
  return headers['x-forwarded-for']?.split(',')[0] || 
         headers['x-real-ip'] || 
         undefined;
};

const validateEventCode = (payload, storedHash) => {
  if (!storedHash) {
    console.error('[Quiz Submission] EVENT_CODE_HASH not configured');
    return { valid: false, error: 'Server configuration error', statusCode: 500 };
  }

  if (!payload.eventCodeProof || payload.eventCodeProof !== storedHash) {
    return { valid: false, error: 'Invalid event code proof', statusCode: 403 };
  }

  return { valid: true };
};

const validatePayload = (payload) => {
  if (!payload.startedAt || !payload.completedAt) {
    return { valid: false, error: 'Missing timestamps' };
  }

  if (!Array.isArray(payload.answers)) {
    return { valid: false, error: 'Invalid answers format' };
  }

  if (typeof payload.totalScore !== 'number' || payload.totalScore < 0 || payload.totalScore > MAX_SCORE) {
    return { valid: false, error: 'Invalid score' };
  }

  if (!VALID_ENDINGS.includes(payload.endingId)) {
    return { valid: false, error: 'Invalid ending ID' };
  }

  return { valid: true };
};

const sendEmail = async (submissionData, recipientEmail) => {
  const { html, text } = formatQuizSubmissionEmail(submissionData);
  const subject = `New Quiz Submission: ${submissionData.endingId.toUpperCase()} (${submissionData.totalScore}/${MAX_SCORE})`;

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || DEFAULT_EMAIL_FROM,
      to: recipientEmail,
      subject,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('[Quiz Submission] Resend error:', error);
    console.log('[Quiz Submission]', JSON.stringify(submissionData, null, 2));
  }
};

exports.handler = async (event) => {
  const origin = event.headers.origin || event.headers.Origin;
  const corsHeaders = getCorsHeaders(origin);

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return createResponse(405, false, 'Method not allowed', corsHeaders);
  }

  try {
    const payload = JSON.parse(event.body);

    const eventCodeValidation = validateEventCode(payload, process.env.EVENT_CODE_HASH);
    if (!eventCodeValidation.valid) {
      return createResponse(eventCodeValidation.statusCode, false, eventCodeValidation.error, corsHeaders);
    }

    const payloadValidation = validatePayload(payload);
    if (!payloadValidation.valid) {
      return createResponse(400, false, payloadValidation.error, corsHeaders);
    }

    const submissionData = {
      ...payload,
      ipAddress: getClientIp(event.headers),
      userAgent: event.headers['user-agent'] || undefined,
    };

    const recipientEmail = process.env.QUIZ_NOTIFICATION_EMAIL;
    
    if (!recipientEmail) {
      console.log('[Quiz Submission]', JSON.stringify(submissionData, null, 2));
      return createResponse(200, true, null, corsHeaders);
    }

    await sendEmail(submissionData, recipientEmail);
    return createResponse(200, true, null, corsHeaders);
  } catch (error) {
    console.error('[Quiz Submission Error]', error);
    return createResponse(500, false, 'Failed to process submission', corsHeaders);
  }
};

const formatDate = (dateStr) => {
  try {
    return new Date(dateStr).toLocaleString();
  } catch {
    return dateStr;
  }
};

const escapeHtml = (text) => {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return String(text).replace(/[&<>"']/g, (m) => map[m]);
};

const formatLeadSection = (lead) => {
  if (!lead) return '';
  return `
          <div class="section">
            <div class="label">Lead Information</div>
            ${lead.name ? `<div class="value"><strong>Name:</strong> ${escapeHtml(lead.name)}</div>` : ''}
            ${lead.email ? `<div class="value"><strong>Email:</strong> ${escapeHtml(lead.email)}</div>` : ''}
            ${lead.company ? `<div class="value"><strong>Company:</strong> ${escapeHtml(lead.company)}</div>` : ''}
            ${lead.role ? `<div class="value"><strong>Role:</strong> ${escapeHtml(lead.role)}</div>` : ''}
          </div>
          `;
};

const formatLeadText = (lead) => {
  if (!lead) return '';
  return `
Lead Information:
${lead.name ? `Name: ${lead.name}` : ''}
${lead.email ? `Email: ${lead.email}` : ''}
${lead.company ? `Company: ${lead.company}` : ''}
${lead.role ? `Role: ${lead.role}` : ''}
`;
};

function formatQuizSubmissionEmail(data) {

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0d1119; color: #FDFCF9; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .section { margin: 20px 0; padding: 15px; background: white; border-radius: 4px; }
        .label { font-weight: bold; color: #5A5F73; }
        .value { margin-top: 5px; }
        .score { font-size: 24px; font-weight: bold; color: #826ffb; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f0f0f0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Operations Quiz Submission</h2>
        </div>
        <div class="content">
          <div class="section">
            <div class="label">Score & Result</div>
            <div class="score">${data.totalScore}/${MAX_SCORE} - ${data.endingId.toUpperCase()}</div>
          </div>

          <div class="section">
            <div class="label">Access</div>
            <div class="value">Verified via event code</div>
          </div>

          ${formatLeadSection(data.lead)}

          ${data.softFollowUp ? `
          <div class="section">
            <div class="label">Follow-up Response</div>
            <div class="value">${escapeHtml(data.softFollowUp.choice)}</div>
          </div>
          ` : ''}

          <div class="section">
            <div class="label">Answers</div>
            <table>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                ${data.answers.map(a => `
                  <tr>
                    <td>${escapeHtml(a.questionId)}</td>
                    <td>${escapeHtml(a.selectedOptionId)}</td>
                    <td>${a.points}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="section">
            <div class="label">Timestamps</div>
            <div class="value"><strong>Started:</strong> ${formatDate(data.startedAt)}</div>
            <div class="value"><strong>Completed:</strong> ${formatDate(data.completedAt)}</div>
          </div>

          ${data.ipAddress ? `
          <div class="section">
            <div class="label">Metadata</div>
            <div class="value"><strong>IP:</strong> ${escapeHtml(data.ipAddress)}</div>
          </div>
          ` : ''}
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Operations Quiz Submission

Score: ${data.totalScore}/${MAX_SCORE} - ${data.endingId.toUpperCase()}

Access: Verified via event code

${formatLeadText(data.lead)}

${data.softFollowUp ? `Follow-up: ${data.softFollowUp.choice}` : ''}

Answers:
${data.answers.map(a => `  ${a.questionId}: ${a.selectedOptionId} (${a.points} pts)`).join('\n')}

Started: ${formatDate(data.startedAt)}
Completed: ${formatDate(data.completedAt)}
${data.ipAddress ? `IP: ${data.ipAddress}` : ''}
  `.trim();

  return { html, text };
}
