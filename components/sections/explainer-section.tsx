import { SectionShell } from '@/components/ui/section-shell';
import { CharacterSlot } from '@/components/ui/character-slot';

export function ExplainerSection() {
  return (
    <SectionShell
      id="que-es"
      eyebrow="Marco conceptual"
      title="¿Qué es la inteligencia emocional?"
      description="Es la capacidad de reconocer, comprender y gestionar las emociones propias y ajenas para actuar de forma consciente en contextos sociales y de aprendizaje."
    >
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-4xl border border-ink/10 bg-white/75 p-8 shadow-card backdrop-blur-sm md:p-10">
          <p className="text-lg leading-8 text-ink/75">
            En el aula, la inteligencia emocional no sustituye al contenido académico: lo potencia. Cuando estudiantes y docentes identifican lo que sienten, pueden comprender mejor sus reacciones, regular la tensión y sostener interacciones más productivas.
          </p>
          <p className="mt-6 text-lg leading-8 text-ink/75">
            Desde una perspectiva educativa, esto se traduce en más atención, mejor disposición para aprender, menor impulsividad y una convivencia que favorece la construcción de conocimiento.
          </p>
        </div>
        <CharacterSlot
          name="Guía visual de apoyo"
          description="Utiliza este bloque para acompañar la explicación con un personaje que cambie de gesto según la emoción o con una mini escena ilustrada."
        />
      </div>
    </SectionShell>
  );
}
