import { cn } from '@/app/utils/cn';

/**
 * Decorative section backgrounds. Every variant is aria-hidden, sits behind the content
 * (`-z-10` or `-z-20`, so the parent section needs `relative isolate`), clips its own overflow,
 * and uses the theme's own tokens so it reads correctly in both light and dark mode.
 */

/** Four blurred brand-colour fields drifting slowly; also used behind the hero. */
export function MeshGradient({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 -z-20 overflow-hidden', className)}>
      <div className="absolute -left-[12%] top-[8%] h-[52vw] w-[52vw] rounded-full bg-accent-pink opacity-25 blur-3xl motion-safe:animate-drift dark:opacity-20" />
      <div className="absolute -right-[10%] top-[22%] h-[46vw] w-[46vw] rounded-full bg-accent-blue opacity-20 blur-3xl motion-safe:animate-drift motion-safe:[animation-delay:-8s] dark:opacity-15" />
      <div className="absolute -bottom-[18%] left-[24%] h-[44vw] w-[44vw] rounded-full bg-accent-teal opacity-15 blur-3xl motion-safe:animate-drift motion-safe:[animation-delay:-15s] dark:opacity-10" />
      <div className="absolute -bottom-[20%] -right-[8%] h-[38vw] w-[38vw] rounded-full bg-accent-lilac opacity-15 blur-3xl motion-safe:animate-drift motion-safe:[animation-delay:-4s] dark:opacity-10" />
    </div>
  );
}

type Variant = 'grid' | 'dots' | 'glow' | 'mesh';

export function SectionBackdrop({ variant, className }: { variant: Variant; className?: string }) {
  if (variant === 'mesh') return <MeshGradient className={className} />;

  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)}>
      {variant === 'grid' && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--divider)_1px,transparent_1px),linear-gradient(to_bottom,var(--divider)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_75%_70%_at_50%_35%,black_15%,transparent_75%)]" />
      )}
      {variant === 'dots' && (
        <div className="absolute inset-0 bg-[radial-gradient(var(--divider)_1.3px,transparent_1.3px)] bg-[size:26px_26px] [mask-image:radial-gradient(ellipse_70%_65%_at_50%_50%,black_10%,transparent_72%)]" />
      )}
      {variant === 'glow' && (
        <>
          <div className="absolute -right-[12%] -top-[25%] h-[58vw] w-[58vw] rounded-full bg-accent-blue opacity-15 blur-3xl motion-safe:animate-drift dark:opacity-10" />
          <div className="absolute -bottom-[30%] -left-[12%] h-[48vw] w-[48vw] rounded-full bg-accent-lilac opacity-15 blur-3xl motion-safe:animate-drift motion-safe:[animation-delay:-11s] dark:opacity-10" />
        </>
      )}
    </div>
  );
}
