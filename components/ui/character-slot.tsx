import { cn } from '@/lib/utils';

type CharacterSlotProps = {
  name: string;
  description: string;
  className?: string;
};

export function CharacterSlot({ name, description, className }: CharacterSlotProps) {
  return (
    <div
      data-cursor="media"
      className={cn(
        'relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white/68 p-6 shadow-[0_24px_70px_rgba(44,37,22,0.10)] backdrop-blur-md md:p-7',
        className,
      )}
    >
      <div className="absolute inset-0 bg-noise opacity-70" />
      <div className="absolute inset-x-10 top-0 h-20 rounded-b-[2rem] bg-white/35 blur-2xl" />
      <div className="relative space-y-4">
        <span className="inline-flex rounded-full border border-ink/10 bg-paper/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-ink/56">
          Recurso visual central
        </span>
        <div className="rounded-[1.75rem] border border-white/60 bg-paper-grid bg-[size:22px_22px] p-5 md:p-7">
          <div className="mx-auto flex h-52 max-w-sm items-center justify-center rounded-[1.75rem] border border-dashed border-ink/20 bg-chalk/90 px-8 text-center shadow-inner">
            <span className="text-xl font-semibold tracking-[-0.03em] text-ink/58">{name}</span>
          </div>
        </div>
        <p className="max-w-md text-sm leading-7 text-ink/70">{description}</p>
      </div>
    </div>
  );
}
