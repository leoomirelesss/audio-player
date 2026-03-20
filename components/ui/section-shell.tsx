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
      className={cn('animation-ready relative mx-auto w-full max-w-8xl translate-y-10 px-6 py-24 opacity-0 transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 md:px-10 md:py-32', className)}
      {...props}
    >
      <div className="mb-12 max-w-3xl rounded-[2rem] border border-white/60 bg-white/35 p-6 shadow-[0_18px_55px_rgba(44,37,22,0.05)] backdrop-blur-sm md:mb-14 md:p-8">
        {eyebrow ? (
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-ink/55">{eyebrow}</p>
        ) : null}
        <h2 className="text-4xl font-semibold tracking-[-0.045em] text-ink md:text-6xl">{title}</h2>
        {description ? <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 md:text-xl">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
