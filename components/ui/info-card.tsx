import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type InfoCardProps = {
  title: string;
  body: string;
  icon?: ReactNode;
  className?: string;
};

export function InfoCard({ title, body, icon, className }: InfoCardProps) {
  return (
    <article
      className={cn(
        'group rounded-4xl border border-ink/10 bg-white/75 p-6 shadow-card backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-ink/20 hover:shadow-soft',
        className,
      )}
    >
      {icon ? <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-paper text-ink">{icon}</div> : null}
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{title}</h3>
      <p className="mt-4 text-base leading-7 text-ink/72">{body}</p>
    </article>
  );
}
