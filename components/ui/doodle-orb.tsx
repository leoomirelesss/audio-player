import { cn } from '@/lib/utils';

type DoodleOrbProps = {
  label: string;
  tone?: 'blue' | 'coral' | 'gold' | 'sage';
  className?: string;
};

const toneClasses = {
  blue: 'from-accent-blue/90 to-blue-200',
  coral: 'from-accent-coral/90 to-orange-200',
  gold: 'from-accent-gold/90 to-yellow-100',
  sage: 'from-accent-sage/90 to-emerald-100',
};

export function DoodleOrb({ label, tone = 'blue', className }: DoodleOrbProps) {
  return (
    <div
      className={cn(
        'group relative flex aspect-square w-36 items-center justify-center rounded-[34%] border border-white/70 bg-gradient-to-br p-4 shadow-soft transition-transform duration-500 hover:-translate-y-2',
        toneClasses[tone],
        className,
      )}
    >
      <div className="absolute inset-3 rounded-[30%] border border-dashed border-ink/20" />
      <div className="absolute -right-2 top-4 h-8 w-8 rounded-full border border-ink/10 bg-white/40 blur-[1px]" />
      <div className="relative text-center text-base font-semibold text-ink">{label}</div>
    </div>
  );
}
