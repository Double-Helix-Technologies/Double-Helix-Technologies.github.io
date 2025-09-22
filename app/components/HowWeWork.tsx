"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, Icon } from "./ui/Card";
import {
  Activity,
  CheckCircle2,
  GitBranch,
  Server,
  ShieldCheck,
  Users
} from "lucide-react";

export default function HowWeWork() {
  const cardContents = [
    {
      title: 'Discover',
      description: 'Meet stakeholders, map current systems and constraints, capture risks, and define success metrics.',
      icon: Activity,
    },
    {
      title: 'Design',
      description: 'Propose right‑sized architecture, decide build‑vs‑buy, and plan incremental releases with clear acceptance criteria.',
      icon: GitBranch,
    },
    {
      title: 'Deliver',
      description: 'Ship in small increments with demos, automated tests and CI/CD; manage change control where required.',
      icon: Server,
    },
    {
      title: 'Evolve',
      description: 'Set up monitoring and alerts, runbooks and training; hand over or stay to operate with SLAs.',
      icon: ShieldCheck,
    },
  ];

  const collaborationPrinciples = [
    "Work closely with domain experts and end users",
    "Understand the 'why' to focus on real value",
    "Communicate early and often",
    "Consolidate findings into an actionable plan",
    "Iterate with stakeholders to land the right solution",
  ];

  return (
    <div id="how-we-work" className="section bg-background">
      <div className="container-tight">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">
            How we work
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We keep the process simple and transparent. Here's how engagements typically progress—from first conversations to ongoing operations.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {cardContents.map(({ icon, title, description }) => (
            <Card key={title} className="bg-background-alt">
              <CardHeader>
                <Icon>{React.createElement(icon)}</Icon>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-8 md:grid-cols-1">
          <Card key="collaboration-principles" className="bg-background-alt">
            <CardHeader>
              <Icon><Users /></Icon>
              <CardTitle>Collaboration principles</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {collaborationPrinciples.map((principle, idx) => (
                  <li key={idx} className="flex items-top gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-green flex-shrink-0 mt-1" />
                    {principle}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 