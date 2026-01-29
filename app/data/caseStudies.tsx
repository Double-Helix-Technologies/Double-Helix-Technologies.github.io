import { ReactNode } from "react";

export interface CaseStudy {
  slug: string;
  caseTitle: string;
  summary: string;
  color: "sky" | "amber" | "emerald" | "violet";
  details: {
    problem: string;
    solution: string;
    outcomes: string[];
  };
  client: {
    name: string;
    summary: string;
    sector: string | string[];
  }
  stats: {
    stat: number;
    statFrom?: number,
    statSuffix: string;
    statLabel: string;
    statSubLabel?: ReactNode;
  }[];
}

export interface ColorClass {
  text: string;
  bg: string;
  border: string;
  glow: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'process-automation',
    caseTitle: 'Process Automation',
    summary: 'Automated manual data entry processes and integrated multiple IT applications to create a single source of truth, dramatically reducing setup times and freeing up team capacity for revenue-generating activities.',
    color: 'sky',
    details: {
      problem: 'Manual data entry across multiple IT applications within NGS (next-generation sequencing) project management and customer care teams as well as missing system integrations and lack of single source of truth for relevant information.',
      solution: 'Introduce process automation, integrations and a single convenient view for Customer Care and project managers via developing information management system MINT.',
      outcomes: [
        'Data entry points reduced from 7 to 1',
        'Order set-up time reduced by 75%',
        'Project set-up backlog reduced from 1 week to 1 day',
        'Data delivery time reduced from 1.5 days to 3 hours',
        'WIP report creation time reduced by 75%',
        '50% of project management and customer care teams capacity freed up for other revenue bringing activities',
        'Implementation done in 10 months from 1st developer hired to MVP go-live'
      ]
    },
    stats: [
      {
        stat: 75,
        statSuffix: '%',
        statLabel: 'Project management and customer care teams capacity freed up',
        statSubLabel: <>by reducing data entry points <span className="text-sky-400 font-semibold">from 7 to 1</span></>
      },
      {
        stat: 50,
        statSuffix: '%',
        statLabel: 'decrease in sequencing project setup time'
      },
      {
        stat: 92,
        statSuffix: '%',
        statLabel: 'reduction in sequencing data delivery time'
      },
      {
        stat: 10,
        statSuffix: ' months',
        statLabel: 'until working MVP from the time first developer was hired'
      }
    ],
    client: {
      name: 'Eurofins Genomics',
      summary: 'Eurofins Genomics is a global provider of genomics services and products focused on "reading and writing DNA." It operates as a specialist unit within the larger Eurofins Scientific Group, a major international life-sciences laboratory network.',
      sector: 'Life sciences'
    }
  },
  {
    slug: "rapid-development",
    caseTitle: "Rapid Development",
    summary: 'Developed a prototype application for field testing digital work scheduling processes, delivering the first MVP iteration in under a week to validate market fit with minimal disruption to existing operations.',
    color: "amber",
    details: {
      problem: "Company management wants to validate and field test digital work scheduling process with minimal to no disruption to the existing processes.",
      solution: "Conduct a series of workshops for functionality discovery. Develop a prototype application for field testing. Propose structured approach for further development after process validation.",
      outcomes: [
        "First MVP iteration ready for pilot in under a week from idea to functional product to validate market fit",
        "Pilot is live in two months time being field tested with no disruption to the existing processes"
      ]
    },
    stats: [
      {
        stat: 1,
        statFrom: 10,
        statSuffix: ' week',
        statLabel: 'From idea to market validation',
        statSubLabel: <>to production launch in <span className="text-amber-400 font-semibold">1 month</span></>
      }
    ],
    client: {
      name: '',
      summary: '',
      sector: 'Logistics'
    }
  },
  {
    slug: 'observability-improvement',
    caseTitle: 'Observability Improvement',
    summary: 'Rebuilt the observability and alerting ecosystem for a global support team, reducing alert volume by over 80% and improving incident response times while eliminating false positives.',
    color: 'emerald',
    details: {
      problem: 'Support specialists working across four global regions (USA, Japan, Europe, and India) were overwhelmed by incident, bug, and support tickets, with little visibility into 30+ live systems. Alerts were triggering over 200 times per day across various severity levels, creating noise and masking real issues. Critical incidents often went unresolved, leading to business disruptions that could have been avoided with better monitoring and focus.',
      solution: 'Establish a dedicated Site Reliability Engineering (SRE) team under strong leadership to rebuild the observability and alerting ecosystem. Map application dependencies and business-critical flows, prioritize alerts based on impact, and redefine thresholds to eliminate noise. Place emphasis on sustainable fixes with business value — no shortcuts or temporary patches.',
      outcomes: [
        "Alert volume reduced by over 80%, enabling focus on true critical issues",
        "False positives eliminated; each alert now triggers a proper response",
        "Unified observability dashboards introduced for preventive maintenance",
        "SLAs and system responsibilities clearly defined across teams",
        "Root Cause Analysis and proper Root Cause fixes made",
        "Incident response times improved 4 times",
        "Number of incidents decreased by 40%",
        "Business regained trust in IT through proactive issue resolution",
        "Support and development teams freed to focus on strategic improvements"
      ]
    },
    stats: [
      {
        stat: 4,
        statSuffix: 'x',
        statLabel: 'Increase in incident response times',
        statSubLabel: <>and false positive alerts reduced by <span
          className="text-emerald-400 font-semibold">90%</span></>
      },
      {
        stat: 80,
        statSuffix: '%',
        statLabel: 'reduction in alert volume, enabling focus on true critical issues'
      },
      {
        stat: 40,
        statSuffix: '%',
        statLabel: 'decrease in number of incidents'
      }
    ],
    client: {
      name: 'Eurofins Genomics',
      summary: 'Eurofins Genomics is a global provider of genomics services and products focused on "reading and writing DNA." It operates as a specialist unit within the larger Eurofins Scientific Group, a major international life-sciences laboratory network.',
      sector: 'Life sciences'
    }
  },
  {
    slug: 'reorganization-of-it',
    caseTitle: 'Reorganization of IT',
    summary: 'Transformed IT organization from reactive to proactive by establishing clear and transparent IT processes, ensuring ownership and accountability for various parts of the business flows and, thus, improving service quality, reliability and trust in internal IT.',
    color: 'violet',
    details: {
      problem: 'Lack of transparency in how IT maintenance and development are managed causing frustration among users and stakeholders. High volume of recurring incidents indicating deeper issues with service quality and reliability.',
      solution: 'Establish clear and transparent IT processes for 10+ applications. Analyze the current application landscape and implement monitoring and alerting to improve observability. Perform root cause analysis to resolve recurring issues at their source. Analyze, propose and deliver solution for the business need, instead of coding for requirements.',
      outcomes: [
        'Reduced amount of repeat incidents by 95%',
        'Introduced early detection of incidents (before end users or customers notice) for preventive maintenance',
        'Issue resolution lead time reduced from 20+ to 3 days',
        'Feature lead time reduced from several months to 6 days',
        'Faster issue resolution due to clear ownership and well documented processes',
        'Internal IT Net Promoter Score (NPS) improved from -25 to +72',
        'IT organization\'s annual costs reduced by 37%'
      ]
    },
    stats: [
      {
        stat: 95,
        statSuffix: '%',
        statLabel: 'Reduction in repeat incidents',
        statSubLabel: <>and <span className="text-violet-400 font-semibold">37%</span> annual cost savings</>
      },
      {
        stat: 7,
        statSuffix: 'x',
        statLabel: 'faster issue resolution lead time'
      },
      {
        stat: 37,
        statSuffix: '%',
        statLabel: 'reduced in IT organization\'s annual costs'
      }
    ],
    client: {
      name: 'Eurofins Genomics',
      summary: 'Eurofins Genomics is a global provider of genomics services and products focused on "reading and writing DNA." It operates as a specialist unit within the larger Eurofins Scientific Group, a major international life-sciences laboratory network.',
      sector: 'Life sciences'
    }
  }
];

export const colorClasses: Record<CaseStudy["color"], ColorClass> = {
  sky: {
    text: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/30",
    glow: "rgba(56, 189, 248, 0.4)",
  },
  amber: {
    text: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
    glow: "rgba(251, 191, 36, 0.4)",
  },
  emerald: {
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    glow: "rgba(52, 211, 153, 0.4)",
  },
  violet: {
    text: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/30",
    glow: "rgba(167, 139, 250, 0.4)",
  },
};
