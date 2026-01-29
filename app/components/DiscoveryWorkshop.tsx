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
    <div className="container-tight" >
      <div className="md:grid md:grid-cols-2 flex flex-col gap-5 md:gap-24">
        <div className="md:col-span-1 z-10">
          <h2 className="section-heading mb-8">Discovery Workshop - turning ambiguity into a focused
            90‑day plan
          </h2>
          <p className="max-w-md text-text-secondary">
            In 1–2 weeks we deliver a current‑state map, risks, and a 90‑day plan - so you can move with confidence.
          </p>
        </div>
        <div className="flex flex-col gap-6 mt-5">
          <div className="flex flex-col ">
            <ul className="space-y-3 text-xl z-10">
              {workshopItems.map((item) => (
                <li key={item} className="flex gap-2 hover:">
                  <Asterisk size={32}/>
                  <p className="md:text-2xl text-lx font-semibold">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="space-y-2 flex max-w-fit flex-col mt-10">
        <Button variant="secondary"><CornerDownRight/>
          <a href="mailto:hello@doublehelix.dev?subject=Book%20a%20workshop">
            Book your workshop now
          </a>
        </Button>
        <p className="text-xs text-center">
          structured 1-2 week engagement
        </p>
      </div>
    </div>
    <div className="z-0 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-bl from-purple-900/30 to-indigo-800/30 h-80 w-80 blur-3xl"/>

  </section>

);

export default DiscoveryWorkshop;
