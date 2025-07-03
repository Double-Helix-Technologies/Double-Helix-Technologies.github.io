"use client"

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
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
          <span className="text-sm font-medium text-primary mb-2 inline-block">About Us</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6">Meet our team</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We are a newly formed IT consultancy company based in Latvia, bringing together experienced professionals across the whole software development life cycle, starting from discovery and design, through development and deployment, to maintenance and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {leadershipTeam.map((person) => (
            <TeamMemberCard key={person.name} person={person} />
          ))}
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