import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Asterisk, CornerDownRight } from 'lucide-react';

const workshopItems = [
  'Stakeholder interviews & goals',
  'Systems & data flow map',
  'Risks & controls (incl. compliance)',
  'Target architecture & options',
  '90‑day plan with priorities'
];

const DiscoveryWorkshop: React.FC = () => (
  <section className="section relative">
    <div className="container-tight">
      <div className="grid md:grid-cols-12 items-center z-10">
        <div className="md:col-span-6">
          <h2 className="section-heading mb-10">Discovery Workshop - turning ambiguity into a focused
            90‑day plan</h2>
          <div className="space-y-2 flex max-w-fit flex-col">
            <Button variant="secondary"><CornerDownRight/>
              <a href="mailto:hello@doublehelix.dev?subject=Book%20a%20workshop">
                Start your transformation
              </a>
            </Button>
            <p className="text-xs text-center">
              a structured 1-2 week engagement
            </p>
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col gap-6 items-center ">
          <div className="flex flex-col ">
            <ul className="space-y-3 text-xl z-10">
              {workshopItems.map((item) => (
                <li key={item} className="flex gap-2 hover:">
                  <Asterisk size={32}/>
                  <p className="text-2xl font-semibold">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/*<div className="z-0 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-bl from-purple-900 to-indigo-800 h-80 w-80 blur-2xl"/>*/}

  </section>

);

export default DiscoveryWorkshop;
