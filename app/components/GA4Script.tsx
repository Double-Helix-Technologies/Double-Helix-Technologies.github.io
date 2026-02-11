'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useConsent } from './ConsentProvider';
import { initializeGA4, trackPageView } from '@/app/utils/analytics';

export default function GA4Script() {
  const { preferences } = useConsent();
  const pathname = usePathname();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (preferences.analytics && !hasInitialized.current) {
      initializeGA4();
      hasInitialized.current = true;
      if (pathname) {
        setTimeout(() => {
          trackPageView(pathname);
        }, 500);
      }
    } else if (!preferences.analytics) {
      hasInitialized.current = false;
    }
  }, [preferences.analytics, pathname]);

  useEffect(() => {
    if (preferences.analytics && pathname && hasInitialized.current) {
      trackPageView(pathname);
    }
  }, [pathname, preferences.analytics]);

  return null;
}
