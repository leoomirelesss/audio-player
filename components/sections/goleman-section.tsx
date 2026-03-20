import { golemanComponents } from '@/lib/content';
import { SectionShell } from '@/components/ui/section-shell';

export function GolemanSection() {
  return (
    <SectionShell
      id="goleman"
      eyebrow="Daniel Goleman"
      title="Cinco componentes clave para comprender la inteligencia emocional"
      description="Una estructura clara para presentar cómo las competencias emocionales impactan la experiencia de aprendizaje."
    >
      <div className="grid gap-5 lg:grid-cols-5">
        {golemanComponents.map((item, index) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-4xl border border-ink/10 bg-white/75 p-6 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft lg:min-h-[24rem]"
          >
            <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r from-accent-blue via-accent-coral to-accent-gold opacity-70" />
            <p className="text-sm uppercase tracking-[0.28em] text-ink/45">0{index + 1}</p>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-ink">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-ink/72">{item.description}</p>
            <div className="mt-8 h-32 rounded-3xl border border-dashed border-ink/15 bg-paper-grid bg-[size:20px_20px]" />
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
