import { cn } from '@/lib/utils';

type CharacterSlotProps = {
  name: string;
  description: string;
  className?: string;
};

export function CharacterSlot({ name, description, className }: CharacterSlotProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-4xl border border-ink/10 bg-white/65 p-6 shadow-card backdrop-blur-sm',
        className,
      )}
    >
      <div className="absolute inset-0 bg-noise opacity-70" />
      <div className="relative space-y-4">
        <span className="inline-flex rounded-full border border-ink/10 bg-paper px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-ink/60">
          Character slot
        </span>
        <div className="rounded-3xl border border-dashed border-ink/20 bg-paper-grid bg-[size:22px_22px] p-8 text-center">
          <div className="mx-auto flex h-44 max-w-xs items-center justify-center rounded-[2rem] border border-ink/10 bg-chalk">
            {/* Replace this placeholder with your custom emotion character asset / Lottie / 3D composition later. */}
            <span className="text-lg font-semibold text-ink/55">{name}</span>
          </div>
        </div>
        <p className="text-sm leading-7 text-ink/70">{description}</p>
      </div>
    </div>
  );
}
