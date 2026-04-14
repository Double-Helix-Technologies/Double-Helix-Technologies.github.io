import type { Metadata } from 'next';
import OperationalFlowRiskAssessmentPageClient from './OperationalFlowRiskAssessmentPageClient';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Operational Flow Risk Assessment',
  description:
    'Assess operational flow, hidden handoff risk, and system bottlenecks across life sciences and healthcare workflows with a structured risk assessment.',
  path: '/operational-flow-risk-assessment/',
  keywords: [
    'operational risk assessment',
    'workflow risk assessment',
    'life sciences operations consulting',
    'healthcare workflow bottlenecks'
  ]
});

export default function OperationalFlowRiskAssessmentPage() {
  return <OperationalFlowRiskAssessmentPageClient />;
}
