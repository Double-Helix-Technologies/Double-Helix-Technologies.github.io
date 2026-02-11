'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  getConsent, 
  setConsent, 
  setCustomConsent, 
  resetConsent,
  type ConsentPreferences,
  type ConsentStatus 
} from '@/app/lib/consent';
import { clearAnalyticsCookies } from '@/app/lib/consent';

interface ConsentContextType {
  hasConsent: boolean;
  consentStatus: ConsentStatus;
  preferences: ConsentPreferences;
  grantConsent: () => void;
  declineConsent: () => void;
  setCustomPreferences: (preferences: ConsentPreferences) => void;
  resetConsent: () => void;
  openConsentModal: () => void;
  closeConsentModal: () => void;
  isModalOpen: boolean;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [preferences, setPreferences] = useState<ConsentPreferences>({ analytics: false });
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = getConsent();
      if (consent) {
        setConsentStatus(consent.status);
        setPreferences(consent.preferences);
      }
      setIsModalOpen(false);
      setMounted(true);
    }
  }, []);

  const grantConsent = () => {
    const newPreferences: ConsentPreferences = { analytics: true };
    setConsent(newPreferences);
    setConsentStatus('accepted');
    setPreferences(newPreferences);
    setIsModalOpen(false);
  };

  const declineConsent = () => {
    const newPreferences: ConsentPreferences = { analytics: false };
    setConsent(newPreferences);
    setConsentStatus('declined');
    setPreferences(newPreferences);
    setIsModalOpen(false);
    clearAnalyticsCookies();
  };

  const setCustomPreferences = (newPreferences: ConsentPreferences) => {
    setCustomConsent(newPreferences);
    setConsentStatus('custom');
    setPreferences(newPreferences);
    setIsModalOpen(false);
    if (!newPreferences.analytics) {
      clearAnalyticsCookies();
    }
  };

  const handleResetConsent = () => {
    resetConsent();
    setConsentStatus('pending');
    setPreferences({ analytics: false });
    setIsModalOpen(true);
    clearAnalyticsCookies();
  };

  const openConsentModal = () => {
    setIsModalOpen(true);
  };

  const closeConsentModal = () => {
    setIsModalOpen(false);
  };

  const hasConsent = preferences.analytics;

  return (
    <ConsentContext.Provider value={{ 
      hasConsent, 
      consentStatus, 
      preferences,
      grantConsent, 
      declineConsent,
      setCustomPreferences,
      resetConsent: handleResetConsent,
      openConsentModal,
      closeConsentModal,
      isModalOpen,
    }}>
      {mounted ? children : <div className="min-h-screen bg-background" />}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}
