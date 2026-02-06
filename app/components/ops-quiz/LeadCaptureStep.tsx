'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { cn } from '@/app/utils/cn';

export interface LeadData {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
}

interface LeadCaptureStepProps {
  onSubmit: (lead: LeadData) => void;
  onSkip: () => void;
}

const ROLE_OPTIONS = [
  'COO / Head of Ops',
  'Site / Plant Manager',
  'Quality / Compliance',
  'Supply Chain / Planning',
  'Other',
];

export default function LeadCaptureStep({
  onSubmit,
  onSkip,
}: LeadCaptureStepProps) {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    company: '',
    role: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof LeadData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return !!formData.email?.trim();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
          We'll reach out if you'd like
        </h2>
        <p className="text-text-secondary text-sm">
          If you provide your email, we'll reach out to discuss how you can get clarity with our product.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Name
          </label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="Your name"
            variant="dark"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Work email
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="you@company.com"
            required
            variant="dark"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Company
          </label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            placeholder="Your company"
            variant="dark"
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-text-primary mb-2"
          >
            Your role
          </label>
          <div className="space-y-2">
            {ROLE_OPTIONS.map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => handleChange('role', role)}
                className={cn(
                  'w-full text-left p-3 rounded-xl border-2 transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-lilac focus-visible:ring-offset-2',
                  formData.role === role
                    ? 'bg-accent-lilac/20 border-accent-lilac text-text-primary'
                    : 'bg-background-alt/30 border-border/50 text-text-secondary hover:border-accent-lilac/50 hover:bg-background-alt/50'
                )}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            type="submit"
            variant="gradient"
            className="flex-1"
            disabled={!isFormValid()}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={onSkip}
            className="text-text-secondary"
          >
            Skip
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
