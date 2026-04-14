import type { Metadata } from 'next';
import OperationalFlowRiskAssessmentPageClient from './OperationalFlowRiskAssessmentPageClient';
import { buildBreadcrumbSchema, buildFAQSchema, buildMetadata } from '../lib/seo';
import { faqItems } from './faqData';

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
  const faqSchema = buildFAQSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Operational System Flow & Risk Assessment', path: '/operational-flow-risk-assessment/' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <OperationalFlowRiskAssessmentPageClient />
    </>
  );
}
