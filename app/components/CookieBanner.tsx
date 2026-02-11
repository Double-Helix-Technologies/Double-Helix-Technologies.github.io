'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { useConsent } from './ConsentProvider';
import { X } from 'lucide-react';
import { cn } from '@/app/utils/cn';
import { BANNER_COPY } from './CookieBanner.constants';

export default function CookieBanner() {
  const { 
    consentStatus,
    grantConsent, 
    declineConsent,
    openConsentModal,
  } = useConsent();

  const [hasPulsed, setHasPulsed] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (consentStatus === 'pending') {
      document.body.style.paddingBottom = '120px';
      return () => {
        document.body.style.paddingBottom = '';
      };
    }
  }, [consentStatus]);

  useEffect(() => {
    if (consentStatus === 'pending' && !hasPulsed) {
      const timer = setTimeout(() => {
        setHasPulsed(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [consentStatus, hasPulsed]);

  if (consentStatus !== 'pending') {
    return null;
  }

  const handleAccept = () => {
    grantConsent();
  };

  const handleReject = () => {
    declineConsent();
  };

  const handleCustomize = () => {
    openConsentModal();
  };

  const handleClose = () => {
    declineConsent();
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={bannerRef}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cn(
          "fixed bottom-0 left-0 right-0 z-[9999]",
          "bg-background border-t-2 border-primary/20",
          "shadow-2xl",
          "px-4 py-4 sm:px-6 sm:py-5",
          // Enhanced visibility
          "backdrop-blur-sm bg-background/95"
        )}
        role="banner"
        aria-label="Cookie consent banner"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container-wide mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <button
              onClick={handleClose}
              className={cn(
                "hidden sm:block",
                "absolute top-3 right-3 sm:relative sm:top-0 sm:right-0",
                "p-2 rounded-full hover:bg-background-alt transition-colors",
                "text-text-secondary hover:text-text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                "min-w-[44px] min-h-[44px] flex items-center justify-center"
              )}
              aria-label="Reject cookies and close banner"
              title="Reject cookies"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex-1 min-w-0 pr-8 sm:pr-0">
              <p className="text-sm sm:text-base text-text-primary leading-relaxed font-medium">
                {BANNER_COPY.primaryMessage}
              </p>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mt-1">
                {BANNER_COPY.secondaryMessage}{' '}
                <a
                  href={BANNER_COPY.privacyPolicyUrl}
                  className="underline hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <Button
                onClick={handleReject}
                variant="outline"
                size="default"
                className={cn(
                  "flex-1 sm:flex-none",
                  "min-h-[44px] min-w-[100px]",
                  "border-border hover:bg-background-alt",
                  "text-sm sm:text-base"
                )}
              >
                {BANNER_COPY.buttons.reject}
              </Button>
              <Button
                onClick={handleCustomize}
                variant="outline"
                size="default"
                className={cn(
                  "flex-1 sm:flex-none",
                  "min-h-[44px] min-w-[100px]",
                  "border-border hover:bg-background-alt",
                  "text-sm sm:text-base"
                )}
              >
                {BANNER_COPY.buttons.customize}
              </Button>
              <motion.div
                animate={!hasPulsed ? {
                  scale: [1, 1.05, 1],
                } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: 'easeInOut',
                }}
              >
                <Button
                  onClick={handleAccept}
                  variant="default"
                  size="default"
                  className={cn(
                    "flex-1 sm:flex-none",
                    "min-h-[44px] min-w-[120px]",
                    "bg-primary text-white hover:bg-primary/90",
                    "text-sm sm:text-base font-semibold",
                    "shadow-md hover:shadow-lg transition-shadow"
                  )}
                >
                  {BANNER_COPY.buttons.accept}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
