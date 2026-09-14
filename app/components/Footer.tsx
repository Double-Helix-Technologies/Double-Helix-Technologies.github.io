'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@radix-ui/react-separator';
import { Button } from './ui/button';
import { AtSign, Linkedin } from 'lucide-react';
import { useTheme } from '@/app/components/ThemeProvider';
import { useConsent } from './ConsentProvider';
import { complianceStatement } from './ComplianceNotice';

function CookieSettingsLink() {
  const { openConsentModal } = useConsent();

  return (
    <button
      onClick={openConsentModal}
      className="text-text-secondary hover:text-primary transition-colors text-left"
    >
      Cookie Settings
    </button>
  );
}

/**
 * Site footer. Carries the two disclosures that used to be homepage sections: the LIAA export
 * support agreement with its EU and NAP 2027 marks, and the ISO statement in its approved wording
 * (see `complianceStatement`). Both now appear on every page.
 */
export default function Footer() {
  const { logo } = useTheme();

  return (
    <footer className="pt-16 pb-8" aria-labelledby="footer-heading">
      <Separator />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="max-w-52 flex flex-col gap-6">
            <Image src={logo} alt="Double Helix Technologies Logo" width={180} height={0} className="h-auto mr-5 opacity-80" />
            <div className="flex gap-2">
              <Button size="icon" variant="secondary">
                <a href="https://www.linkedin.com/company/double-helix-technologies" aria-label="Double Helix Technologies on LinkedIn">
                  <Linkedin />
                </a>
              </Button>
              <Button size="icon" variant="secondary">
                <a href="mailto:hello@doublehelix.dev" aria-label="Email hello@doublehelix.dev">
                  <AtSign />
                </a>
              </Button>
            </div>
            <p className="">Simple, secure, adaptable systems for regulated and quality‑driven businesses.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg">Company</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/#services" className="text-text-secondary hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-text-secondary hover:text-primary transition-colors">
                    Our work
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-text-secondary hover:text-primary transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/custom-ai-software-life-sciences/" className="text-text-secondary hover:text-primary transition-colors">
                    AI for life sciences
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-text-secondary hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/privacy" className="text-text-secondary hover:text-primary transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-text-secondary hover:text-primary transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/notice" className="text-text-secondary hover:text-primary transition-colors">
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <CookieSettingsLink />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-divider pt-8 text-sm text-text-secondary md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex shrink-0 items-center gap-4">
              <Image src="/images/eu-flag.png" alt="European Union flag" width={147} height={98} className="h-9 w-auto" />
              <Image src="/images/nap-logo.png" alt="NAP 2027 logo" width={153} height={127} className="h-11 w-auto" />
            </div>
            <p>
              Double Helix Technologies SIA has entered into Export Support Agreement No. 9.3&#8209;1&#8209;L&#8209;2025/254 with
              the Investment and Development Agency of Latvia. Financed by European Union.
            </p>
          </div>
          <p>
            <span className="font-medium text-text-primary">{complianceStatement.heading}</span> {complianceStatement.body}
          </p>
        </div>

        <div className="mt-8 border-t border-divider pt-6">
          <p className="text-sm text-text-secondary font-semibold">
            &copy; {new Date().getFullYear()} Double Helix Technologies SIA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
