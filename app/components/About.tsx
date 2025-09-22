"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Icon } from "./ui/Card";
import { Badge } from "./ui/Badge";
import {
  ChevronDown,
  ChevronUp,
  Eye,
  HeartHandshake,
  BriefcaseBusiness,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const leadershipTeam = [
    {
      name: 'Armands Baranovskis',
      role: 'Chief Executive Officer',
      description: 'Keeps us aligned, focused, and moving in the right direction.',
      image: '/images/team/armands.jpg',
    },
    {
      name: 'Māris Mekšs',
      role: 'Chief Infrastructure Officer',
      description: 'Builds reliable, purposeful tech that solves meaningful problems.',
      image: '/images/team/maris.jpg',
    },
    {
      name: 'Aleksandrs Gusevs',
      role: 'Chief Strategy & Business Development Officer',
      description: 'Drives growth through strategy, partnerships, and meaningful client relationships.',
      image: '/images/team/aleksandrs.jpg',
    },
    {
      name: 'Valts Mazurs',
      role: 'Chief Information Officer',
      description: 'Connects the dots between business needs and smart tech choices.',
      image: '/images/team/valts.jpg',
    },
    {
      name: 'Aleksandra Romanovska',
      role: 'Chief Operating Officer',
      description: 'Ensures smooth operations and delivery across teams and engagements.',
      //image: '/images/team/valts.jpg',
    }
  ];
  

  const coreTeam = [
    {
      name: 'Jānis',
      role: 'Software Engineer',
      description: 'Full-stack developer with expertise in cloud architecture',
      image: '',
    },
    {
      name: 'Lauris',
      role: 'Software Engineer',
      description: 'Full-stack developer with expertise in complex systems',
      image: '',
    },
    {
      name: 'Murathan',
      role: 'DevSecOps Engineer',
      description: 'Infrastructure and automation specialist',
      image: '',
    },
    {
      name: 'Gints',
      role: 'System Administrator',
      description: 'Ensuring smooth operations of our and your infrastructure',
      image: '',
    },
    {
      name: 'Kristīne',
      role: 'Software Engineer',
      description: 'Software engineer with a passion for building scalable and efficient systems',
      image: '',
    },
    {
      name: 'Santa',
      role: 'Business Analyst',
      description: 'Bridging business needs with technical solutions',
      image: '',
    },
    {
      name: 'Agnis',
      role: 'Software Engineer',
      description: '',
      image: '',
    },
    {
      name: 'Agris',
      role: 'Software Engineer',
      description: '',
      image: '',
    },
    {
      name: 'Dmitrijs',
      role: 'Software Engineer',
      description: '',
      image: '',
    },
    {
      name: 'Gvido',
      role: 'Software Engineer',
      description: '',
      image: '',
    },
    {
      name: 'Tamāra',
      role: 'Solution Architect',
      description: '',
      image: '',
    },
    {
      name: 'Anastasia',
      role: 'Software Engineer',
      description: '',
      image: '',
    },
    {
      name: 'Guntis',
      role: 'Software Engineer',
      description: '',
      image: '',
    },
    {
      name: 'Andrejs',
      role: 'System Administrator',
      description: '',
      image: '',
    },
    {
      name: 'Marts',
      role: 'Software Reliability Engineer',
      description: '',
      image: '',
    },
    {
      name: 'Harijs',
      role: 'Software Engineer',
      description: '',
      image: '',
    }
  ];

  type TeamMember = {
    name: string;
    role: string;
    description: string;
    image?: string;
  };

  const TeamMemberCard = ({ person }: { person: TeamMember }) => (
    <div 
      className="bg-background p-6 rounded-2xl transition-all hover:shadow-lg"
    >
      <div className="flex items-center mb-5">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover object-center bg-primary flex-shrink-0"
            priority={false}
          />
        ) : (
          <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-semibold text-white">{person.name[0]}</span>
          </div>
        )}
        <div className="ml-4 min-w-0">
          <h3 className="text-xl font-semibold text-text-primary">{person.name}</h3>
          <p className="text-primary text-sm font-medium break-words">{person.role}</p>
        </div>
      </div>
      <p className="text-text-secondary">{person.description}</p>
    </div>
  );

  return (
    <div id="about" className="section bg-background-alt">
      <div className="container-tight">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">About Us</h2>

          <div className="grid gap-8 md:grid-cols-1">
            <Card className="bg-background">
              <CardHeader className="">
                <Icon><BriefcaseBusiness/></Icon>
                <CardTitle>Company overview</CardTitle>
              </CardHeader>
              <CardContent className="text-justify">
                  Double Helix is a senior, lean engineering team based in Latvia. We start with discovery to map your bottlenecks and risks, then deliver right‑sized software, integrations, and automation. We prioritize reuse over reinvention, reliability over novelty, and audit‑readiness by default. With partners in BI, compliance, and security, we cover the full path from problem to production—and we stay to operate it.
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <Icon><Eye/></Icon>
                <CardTitle >Mission & Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-justify">
                <div><span className="font-medium text-slate-900">Mission: </span>We help businesses transform complexity into clarity through tailored IT solutions—guided by technical excellence, empathy, and strategic thinking.</div>
                <div><span className="font-medium text-slate-900">Vision: </span>We create a healthier, safer & better organized world by solving IT challenges for companies making a positive impact.</div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <Icon><HeartHandshake/></Icon>
                <CardTitle>Values</CardTitle>
              </CardHeader>
              <CardContent className="text-justify">
                <p>How we show up with clients and each other.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Sustainability","Adaptability","Competence","Empathy","Collaboration","Autonomy","Reliability"].map((v) => (
                    <Badge key={v} variant="secondary" className="rounded-xl">{v}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background">
              <CardHeader>
                <Icon><Sparkles/></Icon>
                <CardTitle>Skilled Talent Pool</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                      "Multilingual engineers proficient in modern frameworks.",
                      "Business‑minded, proactive problem solvers with ownership.",
                      "Agile teams that integrate seamlessly with client stakeholders."
                    ].map((v) => (
                      <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent-green flex-shrink-0 mt-1" />{v}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-semibold text-text-primary mb-6 text-center">Founders</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {leadershipTeam.map((person) => (
            <TeamMemberCard key={person.name} person={person} />
          ))}
        </div>

        <div className="mb-16 text-center">
          <div className="grid gap-8 md:grid-cols-1">
        
        </div>
        </div>

        <div className="mt-12" hidden>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mx-auto flex items-center gap-2 px-6 py-3 rounded-full bg-background hover:bg-background-alt transition-colors"
          >
            <span className="text-text-primary font-medium">
              {isExpanded ? 'Show Less' : 'Meet More Team Members'}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-text-primary" />
            ) : (
              <ChevronDown className="w-5 h-5 text-text-primary" />
            )}
          </button>

          {isExpanded && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 animate-fade-in">
              {coreTeam.map((person) => (
                <TeamMemberCard key={person.name} person={person} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 