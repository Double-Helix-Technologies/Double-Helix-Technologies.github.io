export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  label: string;
  points: number;
}

export interface Question {
  id: string;
  text: string;
  options: QuestionOption[];
}

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: 'When something goes wrong, who usually finds out first?',
    options: [
      { id: 'A', label: 'We spot it early, before it becomes a real problem', points: 3 },
      { id: 'B', label: 'A supervisor/shift lead notices and reacts', points: 2 },
      { id: 'C', label: 'Quality finds it during checks', points: 1 },
      { id: 'D', label: 'A customer / auditor / "someone outside" notices', points: 0 },
    ],
  },
  {
    id: 'q2',
    text: 'When there\'s a problem, how quickly do you usually understand what caused it?',
    options: [
      { id: 'A', label: 'Same day', points: 3 },
      { id: 'B', label: 'Within a few days', points: 2 },
      { id: 'C', label: 'Within a couple of weeks', points: 1 },
      { id: 'D', label: 'We often don\'t fully know - we patch it and move on', points: 0 },
    ],
  },
  {
    id: 'q3',
    text: 'If I asked right now: "Where is this order/batch, and what\'s blocking it?" you could answer…',
    options: [
      { id: 'A', label: 'In minutes', points: 3 },
      { id: 'B', label: 'In a few hours', points: 2 },
      { id: 'C', label: 'By tomorrow (after asking around)', points: 1 },
      { id: 'D', label: 'It depends who\'s in the building', points: 0 },
    ],
  },
  {
    id: 'q4',
    text: 'How much do you trust your numbers (output, delays, scrap, rework, backlog)?',
    options: [
      { id: 'A', label: 'Fully - they match what\'s really happening', points: 3 },
      { id: 'B', label: 'Mostly - but sometimes they\'re off', points: 2 },
      { id: 'C', label: 'Not really - we double-check everything', points: 1 },
      { id: 'D', label: 'We have "two versions of the truth"', points: 0 },
    ],
  },
  {
    id: 'q5',
    text: 'How often do you deal with rework, "special cases," or surprises?',
    options: [
      { id: 'A', label: 'Rarely', points: 3 },
      { id: 'B', label: 'Sometimes (weekly)', points: 2 },
      { id: 'C', label: 'Often (daily)', points: 1 },
      { id: 'D', label: 'Constantly - it feels normal now', points: 0 },
    ],
  },
  {
    id: 'q6',
    text: 'When work moves between teams, handovers are…',
    options: [
      { id: 'A', label: 'Clear and smooth', points: 3 },
      { id: 'B', label: 'Usually fine, but sometimes messy', points: 2 },
      { id: 'C', label: 'Often confusing - things fall between cracks', points: 1 },
      { id: 'D', label: '"Who owns this?" is a regular question', points: 0 },
    ],
  },
  {
    id: 'q7',
    text: 'If there\'s an audit, complaint, or serious issue, can you show what happened end-to-end?',
    options: [
      { id: 'A', label: 'Yes, quickly and confidently', points: 3 },
      { id: 'B', label: 'Yes, but it takes effort', points: 2 },
      { id: 'C', label: 'Maybe, if we dig and chase people', points: 1 },
      { id: 'D', label: 'It turns into a scramble', points: 0 },
    ],
  },
];

export interface Ending {
  id: 'confident' | 'fragile' | 'blind';
  title: string;
  text: string;
  ctaButton: string;
  ctaLine: string;
  minScore: number;
  maxScore: number;
}

export const ENDINGS: Ending[] = [
  {
    id: 'confident',
    title: 'Confident control ✅',
    text: 'You\'re mostly in control. The win now is to harden the few weak links before they become expensive surprises.',
    ctaButton: 'Let\'s discuss how you can get clarity with our product',
    ctaLine: 'Want a comprehensive plan to reduce risk without a big transformation?',
    minScore: 17,
    maxScore: 21,
  },
  {
    id: 'fragile',
    title: 'Fragile (but fixable) ⚠️',
    text: 'Things work - but gaps in visibility, handovers, and "truth in numbers" are creating hidden risk and stress.',
    ctaButton: 'Let\'s discuss how you can get clarity with our product',
    ctaLine: 'Our Operational System Flow & Risk Assessment maps your end-to-end flow, scores the risk points, and gives a practical comprehensive action plan.',
    minScore: 10,
    maxScore: 16,
  },
  {
    id: 'blind',
    title: 'Flying blind 🚨',
    text: 'You\'re relying on heroics. One production stop, quality escape, or compliance miss can cost more than fixing the system early.',
    ctaButton: 'Let\'s discuss how you can get clarity with our product',
    ctaLine: 'Let\'s map where work really breaks and what to fix first.',
    minScore: 0,
    maxScore: 9,
  },
];

export function getEndingForScore(score: number): Ending {
  return ENDINGS.find(e => score >= e.minScore && score <= e.maxScore) || ENDINGS[2];
}
