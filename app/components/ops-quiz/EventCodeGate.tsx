'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { verifyEventCode } from '@/app/lib/eventCode';
import { SESSION_STORAGE_KEY } from './constants';

interface EventCodeGateProps {
  onCodeVerified: (code: string) => void;
}

export default function EventCodeGate({ onCodeVerified }: EventCodeGateProps) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsVerifying(true);

    try {
      const result = await verifyEventCode(code);

      if (result.valid && result.proof) {
        sessionStorage.setItem(SESSION_STORAGE_KEY, result.proof);
        onCodeVerified(result.proof);
      } else {
        setError('Invalid event code. Please try again.');
      }
    } catch (err) {
      setError('Failed to verify code. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6 text-center"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
          Enter Event Code
        </h2>
        <p className="text-text-secondary text-sm">
          Please enter the event code to access the quiz.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError('');
            }}
            placeholder="Enter event code"
            variant="dark"
            className="text-center text-lg tracking-wider"
            autoFocus
            disabled={isVerifying}
          />
          {error && (
            <p className="text-sm text-red-400 mt-2">{error}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="px-8"
          disabled={!code.trim() || isVerifying}
        >
          {isVerifying ? 'Verifying...' : 'Continue'}
        </Button>
      </form>
    </motion.div>
  );
}
