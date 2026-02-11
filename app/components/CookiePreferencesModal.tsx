'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useConsent } from './ConsentProvider';
import { cn } from '@/app/utils/cn';
import type { ConsentPreferences } from '@/app/lib/consent';
import { X } from 'lucide-react';

export default function CookiePreferencesModal() {
  const { 
    preferences,
    setCustomPreferences,
    closeConsentModal,
    isModalOpen 
  } = useConsent();
  
  const [localPreferences, setLocalPreferences] = useState<ConsentPreferences>({
    analytics: preferences.analytics,
  });
  
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      setLocalPreferences({
        analytics: preferences.analytics,
      });
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);
    }
  }, [isModalOpen, preferences]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeConsentModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isModalOpen, closeConsentModal]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeConsentModal();
    }
  };

  const handleToggleAnalytics = () => {
    setLocalPreferences(prev => ({
      ...prev,
      analytics: !prev.analytics,
    }));
  };

  const handleSave = () => {
    setCustomPreferences(localPreferences);
  };

  const handleCancel = () => {
    closeConsentModal();
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-preferences-title"
        aria-describedby="cookie-preferences-description"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        {/* Modal */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <Card className={cn(
            "bg-background border-2 border-border shadow-2xl"
          )}>
            <CardHeader className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle 
                    id="cookie-preferences-title"
                    className="text-2xl md:text-3xl font-semibold text-text-primary"
                  >
                    Cookie Preferences
                  </CardTitle>
                  <CardDescription 
                    id="cookie-preferences-description"
                    className="text-base text-text-secondary mt-2"
                  >
                    Manage your cookie preferences. You can enable or disable different types of cookies below.
                  </CardDescription>
                </div>
                <button
                  onClick={handleCancel}
                  className={cn(
                    "p-1 rounded-full hover:bg-background-alt transition-colors",
                    "text-text-secondary hover:text-text-primary",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  )}
                  aria-label="Close cookie preferences"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-background-alt/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary">Necessary Cookies</h4>
                      <p className="text-sm text-text-secondary mt-1">
                        Essential for the website to function properly. These cannot be disabled.
                      </p>
                    </div>
                    <div className="ml-4">
                      <span className="text-sm font-medium text-text-secondary">Always On</span>
                    </div>
                  </div>
                </div>
                <div className="bg-background-alt/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-primary">Analytics Cookies</h4>
                      <p className="text-sm text-text-secondary mt-1">
                        Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                    </div>
                    <label 
                      className="relative inline-flex items-center cursor-pointer ml-4"
                      aria-label="Toggle analytics cookies"
                    >
                      <input
                        type="checkbox"
                        checked={localPreferences.analytics}
                        onChange={handleToggleAnalytics}
                        className="sr-only peer"
                        aria-checked={localPreferences.analytics}
                      />
                      <div className={cn(
                        "w-11 h-6 rounded-full peer transition-colors",
                        localPreferences.analytics 
                          ? "bg-primary" 
                          : "bg-gray-300 dark:bg-gray-600"
                      )}>
                        <div className={cn(
                          "absolute top-0.5 left-0.5 bg-white rounded-full h-5 w-5 transition-transform shadow-sm",
                          localPreferences.analytics ? "translate-x-5" : "translate-x-0"
                        )} />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                  ref={firstFocusableRef}
                  onClick={handleCancel}
                  variant="outline"
                  size="lg"
                  className="flex-1 border-border hover:bg-background-alt"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  variant="default"
                  size="lg"
                  className="flex-1 bg-primary text-white hover:bg-primary/90"
                >
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
