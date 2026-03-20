import { practicalExamples } from '@/lib/content';
import { SectionShell } from '@/components/ui/section-shell';

export function ExamplesSection() {
  return (
    <SectionShell
      id="ejemplos"
      eyebrow="Aterrizaje práctico"
      title="Ejemplos breves para explicar durante la exposición"
      description="Cada caso muestra cómo incorporar la dimensión emocional sin perder foco académico ni tiempo de clase."
    >
      <div className="space-y-5">
        {practicalExamples.map((example, index) => (
          <article
            key={example.title}
            className="grid gap-5 rounded-4xl border border-ink/10 bg-white/75 p-6 shadow-card md:grid-cols-[120px_1fr] md:items-start md:p-8"
          >
            <div className="rounded-3xl border border-dashed border-ink/15 bg-paper px-5 py-6 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-ink/45">Caso</p>
              <p className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-ink">0{index + 1}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{example.title}</h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-ink/72">{example.body}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
