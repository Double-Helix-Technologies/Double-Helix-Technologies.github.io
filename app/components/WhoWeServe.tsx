"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, Icon } from "./ui/Card";
import {
  CheckCircle2,
  Database,
  FlaskConical,
  GitBranch,
  ShieldCheck,
  Users
} from "lucide-react";

export default function WhoWeServe() {
  const cardContents = [
    {
      title: 'Molecular Labs',
      listItems: ['Delivered a multi‑lab project management application in Eurofins Genomics (role‑based workflows, status visibility)',
        'Integrated instruments with LIMS for automatic result posting and fewer manual entries',
        'Built SLA dashboards & exception handling to improve turnaround visibility'
      ],
      icon: FlaskConical,
    },
    {
      title: 'Analytical & Public Safety Labs',
      listItems: ['Implemented direct Police ↔ Portal integration, eliminating email‑based hand‑offs',
        'Automated secure case exchange with audit trail and role‑based access',
        'Streamlined intake‑to‑report workflow to reduce manual actions and errors'
      ],
      icon: ShieldCheck,
    },
    {
      title: 'Life‑Science Operations & QA',
      listItems: ['Connected LIMS ↔ ERP ↔ CRM to remove duplicate entry and reconcile orders/samples automatically',
        'Standardized approvals & change control with clear documentation rhythms (GxP‑aware)',
        'Automated hand‑offs between R&D, QA, and production to cut delays'
      ],
      icon: Users,
    },
    {
      title: 'Regulated Manufacturing & QC',
      listItems: ['Set up monitoring & audit‑ready logging for traceability and incident review',
        'Introduced CI/CD with staged releases and approvals to speed up safe delivery',
        'Integrated supplier & quality data flows to improve end‑to‑end visibility'
      ],
      icon: Database,
    },
    {
      title: 'Clinics & Health Service Providers',
      listItems: ['Connected clinic ordering/results with partner labs via secure portal & system interfaces (fewer emails, fewer errors)',
        'Role‑based access for physicians and lab staff with full audit trail',
        'Automated intake→report status tracking to shorten TATs'
      ],
      icon: Users,
    },
    {
      title: 'Cross‑Industry Integrations & Automation',
      listItems: ['Unified ERP↔CRM and order‑to‑cash pipelines to remove duplicate entry',
        'Wrapped legacy systems with APIs; introduced CI/CD and monitoring',
        'Built BI‑ready data flows with partners to improve decision‑making'
      ],
      icon: GitBranch,
    },
  ];

  return (
    <div id="audience" className="section bg-background">
      <div className="container-tight">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">
            Who we serve
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We primarily work with mid‑sized, quality‑driven companies and analytical or molecular labs. We also support early‑stage startups that need to move from idea to MVP, and help large enterprises accelerate proofs of concept and integration work.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {cardContents.map(({ icon, title, listItems }) => (
            <Card key={title}>
              <CardHeader>
                <Icon>{React.createElement(icon)}</Icon>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {listItems.map((item, idx) => (
                    <li key={idx} className="flex items-top gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-green flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 