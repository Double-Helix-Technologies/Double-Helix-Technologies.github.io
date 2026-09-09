'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CardSpotlight } from '@/app/components/ui/CardSpotlight';
import type { WorkListItem, WorkTag } from '@/app/data/work';

type WorkShowcaseProps = {
  items: WorkListItem[];
};

const FILTERS: Array<WorkTag | 'All'> = ['All', 'Client work', 'Our products'];

const ACCENT: Record<WorkTag, { border: string; bg: string; glow: string }> = {
  'Client work': {
    border: 'border-accent-digital-blue/20',
    bg: 'bg-accent-digital-blue/10',
    glow: 'rgba(51, 130, 239, 0.22)'
  },
  'Our products': {
    border: 'border-accent-science-teal/20',
    bg: 'bg-accent-science-teal/10',
    glow: 'rgba(2, 192, 186, 0.22)'
  }
};

export default function WorkShowcase({ items }: WorkShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<WorkTag | 'All'>('All');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return items;
    return items.filter((item) => item.tag === activeFilter);
  }, [items, activeFilter]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'border-transparent bg-text-primary text-background'
                : 'border-border/40 text-text-secondary hover:border-border hover:text-text-primary'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-text-secondary">Nothing to show for this filter yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item) => {
            const accent = ACCENT[item.tag];
            return (
              <Link key={item.slug} href={item.path} className="block h-full">
                <CardSpotlight
                  className={`h-full min-h-[280px] cursor-pointer border ${accent.border} ${accent.bg} p-6 transition-all duration-300`}
                  color={accent.glow}
                >
                  <div className="relative z-20 flex h-full flex-col gap-5">
                    <div className="space-y-3">
                      <span className="inline-flex w-fit rounded-full border border-border/30 bg-background/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-text-secondary">
                        {item.tag}
                      </span>
                      <h3 className="text-2xl md:text-3xl">{item.title}</h3>
                      <p className="text-text-secondary">{item.preview}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-background/15 p-4 backdrop-blur-[2px]">
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-text-secondary">
                        {item.metaLabel}
                      </p>
                      <p className="mt-2 text-text-primary">{item.metaValue}</p>
                    </div>

                    <div className="mt-auto inline-flex items-center gap-2 font-medium text-text-primary">
                      Open full details
                      <ArrowRight />
                    </div>
                  </div>
                </CardSpotlight>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
