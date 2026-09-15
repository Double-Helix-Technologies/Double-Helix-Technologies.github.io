import Image from 'next/image';
import darkLogoSrc from '@/images/logo-full-dark.svg';
import lightLogoSrc from '@/images/logo-full-light.svg';
import { cn } from '@/app/utils/cn';

/**
 * The wordmark for the current theme, chosen by CSS rather than by JavaScript. Both variants are
 * in the HTML; the `dark` class on <html>, set before first paint by the script in
 * `app/layout.tsx`, decides which one shows. So the right logo is visible from the first paint and
 * without JavaScript, and the markup is identical on the server and the client (no hydration
 * mismatch). The hidden variant is display:none and therefore absent from the accessibility tree.
 */
export default function BrandLogo({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <>
      <Image
        src={darkLogoSrc}
        alt="Double Helix Technologies"
        width={180}
        height={0}
        priority={priority}
        className={cn('h-auto dark:hidden', className)}
      />
      <Image
        src={lightLogoSrc}
        alt="Double Helix Technologies"
        width={180}
        height={0}
        priority={priority}
        className={cn('hidden h-auto dark:block', className)}
      />
    </>
  );
}
