import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

type SectionShellProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionShell({
  eyebrow,
  title,
  description,
  className,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section
      data-animate-reveal
      className={cn('relative mx-auto w-full max-w-8xl px-6 py-24 md:px-10 md:py-32 animation-ready', className)}
      {...props}
    >
      <div className="mb-12 max-w-3xl">
        {eyebrow ? (
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-ink/55">{eyebrow}</p>
        ) : null}
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-ink md:text-6xl">{title}</h2>
        {description ? <p className="mt-6 text-lg leading-8 text-ink/72 md:text-xl">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
