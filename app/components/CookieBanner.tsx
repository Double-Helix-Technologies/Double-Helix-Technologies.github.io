'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { useConsent } from './ConsentProvider';
import { X } from 'lucide-react';
import { cn } from '@/app/utils/cn';
import { BANNER_COPY } from './CookieBanner.constants';

/**
 * Consent banner. Analytics stay off until the visitor allows them; declining is one tap away and
 * the close control also declines. The banner measures itself and pads the page by exactly its
 * own height, so the footer is never hidden behind it and a phone does not lose more of the
 * viewport than the banner actually needs.
 */
export default function CookieBanner() {
  const {
    isReady,
    consentStatus,
    grantConsent,
    declineConsent,
    openConsentModal
  } = useConsent();

  const [hasPulsed, setHasPulsed] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isReady || consentStatus !== 'pending') return;

    const applyPadding = () => {
      const height = bannerRef.current?.offsetHeight ?? 0;
      document.body.style.paddingBottom = `${height}px`;
    };

    applyPadding();
    window.addEventListener('resize', applyPadding);
    return () => {
      window.removeEventListener('resize', applyPadding);
      document.body.style.paddingBottom = '';
    };
  }, [isReady, consentStatus]);

  useEffect(() => {
    if (isReady && consentStatus === 'pending' && !hasPulsed) {
      const timer = setTimeout(() => {
        setHasPulsed(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isReady, consentStatus, hasPulsed]);

  // Nothing is rendered until the stored consent has been read, so returning visitors never see
  // the banner flash, and the server-rendered HTML carries page content rather than the banner.
  if (!isReady || consentStatus !== 'pending') {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        ref={bannerRef}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cn(
          'fixed bottom-0 left-0 right-0 z-[9999]',
          'border-t-2 border-primary/20 bg-background/95 backdrop-blur-sm shadow-2xl',
          'px-4 py-3 sm:px-6 sm:py-5'
        )}
        role="region"
        aria-label="Cookie consent"
      >
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container-wide mx-auto">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button
              onClick={declineConsent}
              className={cn(
                'hidden sm:flex',
                'relative items-center justify-center rounded-full p-2 transition-colors hover:bg-background-alt',
                'text-text-secondary hover:text-text-primary',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                'min-h-[44px] min-w-[44px]'
              )}
              aria-label="Reject cookies and close banner"
              title="Reject cookies"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-snug text-text-primary sm:text-base sm:leading-relaxed">
                {BANNER_COPY.primaryMessage}{' '}
                <span className="font-normal text-text-secondary">{BANNER_COPY.secondaryMessage}</span>{' '}
                <a
                  href={BANNER_COPY.privacyPolicyUrl}
                  className="rounded text-text-secondary underline transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="flex w-full items-center gap-2 sm:w-auto sm:gap-3">
              <Button
                onClick={declineConsent}
                variant="outline"
                size="default"
                className={cn(
                  'flex-1 sm:flex-none',
                  'min-h-[44px] px-3 sm:min-w-[100px]',
                  'border-border hover:bg-background-alt',
                  'text-xs sm:text-base'
                )}
              >
                {BANNER_COPY.buttons.reject}
              </Button>
              <Button
                onClick={openConsentModal}
                variant="outline"
                size="default"
                className={cn(
                  'flex-1 sm:flex-none',
                  'min-h-[44px] px-3 sm:min-w-[100px]',
                  'border-border hover:bg-background-alt',
                  'text-xs sm:text-base'
                )}
              >
                {BANNER_COPY.buttons.customize}
              </Button>
              <motion.div
                className="flex-1 sm:flex-none"
                animate={!hasPulsed ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeInOut' }}
              >
                <Button
                  onClick={grantConsent}
                  variant="default"
                  size="default"
                  className={cn(
                    'w-full sm:w-auto',
                    'min-h-[44px] px-3 sm:min-w-[120px]',
                    'bg-primary text-white hover:bg-primary/90',
                    'text-xs font-semibold sm:text-base',
                    'shadow-md transition-shadow hover:shadow-lg'
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
