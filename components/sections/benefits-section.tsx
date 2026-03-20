import { SectionShell } from '@/components/ui/section-shell';

const benefits = [
  'Mejor atención y disposición cognitiva para aprender.',
  'Comunicación más clara entre docentes y estudiantes.',
  'Reducción de conflictos y reacciones impulsivas.',
  'Mayor capacidad de regulación emocional ante el error.',
  'Ambiente académico más seguro, cooperativo y estable.',
] as const;

export function BenefitsSection() {
  return (
    <SectionShell
      id="beneficios"
      eyebrow="Resultados observables"
      title="Beneficios concretos para el aprendizaje"
      description="Cuando la emoción se reconoce y se regula, el proceso educativo gana claridad, continuidad y profundidad."
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-4xl border border-ink/10 bg-ink p-8 text-white shadow-soft md:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-white/55">Idea central</p>
          <p className="mt-6 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            Aprender mejor no depende solo de saber más, sino también de saber <span className="text-accent-gold">cómo nos sentimos al aprender</span>.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-4xl border border-ink/10 bg-white/75 p-6 text-lg leading-8 text-ink/75 shadow-card">
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
