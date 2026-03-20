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
        'group rounded-[2rem] border border-ink/10 bg-white/72 p-6 shadow-[0_20px_55px_rgba(44,37,22,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-ink/20 hover:shadow-soft md:p-7',
        className,
      )}
    >
      {icon ? <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-paper text-ink shadow-sm">{icon}</div> : null}
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{title}</h3>
      <p className="mt-4 text-base leading-7 text-ink/72">{body}</p>
    </article>
  );
}
