"use client"

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const leadershipTeam = [
    {
      name: 'Armands',
      role: 'CEO',
      description: 'Keeps us aligned, focused, and moving in the right direction.',
    },
    {
      name: 'Māris',
      role: 'CTO',
      description: 'Builds reliable, purposeful tech that solves meaningful problems.',
    },
    {
      name: 'Alex',
      role: 'CBDO',
      description: 'Shapes collaborations that align with what we are good at and what clients truly need.',
    },
    {
      name: 'Valts',
      role: 'CIO',
      description: 'Connects the dots between business needs and smart tech choices.',
    }
  ];
  

  const coreTeam = [
    {
      name: 'Jānis',
      role: 'Software Engineer',
      description: 'Full-stack developer with expertise in cloud architecture',
    },
    {
      name: 'Lauris',
      role: 'Software Engineer',
      description: 'Full-stack developer with expertise in complex systems',
    },
    {
      name: 'Murathan',
      role: 'DevSecOps Engineer',
      description: 'Infrastructure and automation specialist',
    },
    {
      name: 'Gints',
      role: 'System Administrator',
      description: 'Ensuring smooth operations of our and your infrastructure',
    },
    {
      name: 'Kristīne',
      role: 'Software Engineer',
      description: 'Software engineer with a passion for building scalable and efficient systems',
    },
    {
      name: 'Santa',
      role: 'Business Analyst',
      description: 'Bridging business needs with technical solutions',
    },
    {
      name: 'Agnis',
      role: 'Software Engineer',
      description: '',
    },
    {
      name: 'Agris',
      role: 'Software Engineer',
      description: '',
    },
    {
      name: 'Dmitrijs',
      role: 'Software Engineer',
      description: '',
    },
    {
      name: 'Gvido',
      role: 'Software Engineer',
      description: '',
    },
    {
      name: 'Tamāra',
      role: 'Solution Architect',
      description: '',
    },
    {
      name: 'Anastasia',
      role: 'Software Engineer',
      description: '',
    },
    {
      name: 'Guntis',
      role: 'Software Engineer',
      description: '',
    },
    {
      name: 'Andrejs',
      role: 'System Administrator',
      description: '',
    },
    {
      name: 'Marts',
      role: 'Software Reliability Engineer',
      description: '',
    },
    {
      name: 'Harijs',
      role: 'Software Engineer',
      description: '',
    }
  ];

  const TeamMemberCard = ({ person }: { person: typeof leadershipTeam[0] }) => (
    <div 
      className="bg-background p-6 rounded-2xl transition-all hover:shadow-lg"
    >
      <div className="flex items-center mb-5">
        <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
          <span className="text-2xl font-semibold text-white">{person.name[0]}</span>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-text-primary">{person.name}</h3>
          <p className="text-primary text-sm font-medium">{person.role}</p>
        </div>
      </div>
      <p className="text-text-secondary">{person.description}</p>
    </div>
  );

  return (
    <div id="about" className="section bg-background-alt">
      <div className="container-tight">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium text-primary mb-2 inline-block">About Us</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">Meet our team</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We are a newly formed IT consultancy company based in Latvia, bringing together experienced professionals across engineering, business development, and strategic operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {leadershipTeam.map((person) => (
            <TeamMemberCard key={person.name} person={person} />
          ))}
        </div>

        <div className="mt-12">
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