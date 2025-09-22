"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, Icon } from "./ui/Card";
import {
  Database,
  FlaskConical,
  LineChart,
  Server,
  ShieldCheck,
  Users
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: 'IT Consultancy',
      description: 'Strategic technology consulting to help you make informed decisions. We break down problems and map out business-smart, tech-driven paths to results.',
      icon: LineChart,
    },
    {
      title: 'Integrations & Process Automation',
      description: 'Streamline your business operations through intelligent automation and system integration. Transform your workflows to prepare for the digital future. Get the most out of your resources.',
      icon: Database,
    },
    {
      title: 'Software Development',
      description: 'Custom IT solutions tailored to your business needs, built with modern technologies and best practices. Secure, scalable, and simple.',
      icon: Server,
    },
    {
      title: 'MVP Development',
      description: 'Rapid development of minimum viable products to validate your business ideas quickly. Get return on investment faster.',
      icon: FlaskConical,
    },
    {
      title: 'Reliable Operations & Monitoring',
      description: 'Keep systems stable and fast. Predictable releases, clear alerts, and response playbooks—so issues are found and fixed early.',
      icon: ShieldCheck,
    },
    {
      title: 'Compliance & Security',
      description: 'Gap analysis and security posture reviews; implement safeguards (access control, logging) with certified partners.',
      icon: Users,
    },
  ];

  return (
    <div id="services" className="section bg-background">
      <div className="container-tight">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">
            What We Do
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We provide comprehensive solutions to help you streamline your business process and get the most out of your resources.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {services.map(({ icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <Icon>{React.createElement(icon)}</Icon>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 