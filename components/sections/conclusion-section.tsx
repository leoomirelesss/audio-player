import { CharacterSlot } from '@/components/ui/character-slot';
import { SectionShell } from '@/components/ui/section-shell';

export function ConclusionSection() {
  return (
    <SectionShell
      id="conclusion"
      eyebrow="Cierre"
      title="Educar emociones también es educar para aprender mejor"
      description="La inteligencia emocional en el aula no es un complemento decorativo: es una condición que mejora la atención, los vínculos y la posibilidad real de construir conocimiento."
      className="pb-36"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-4xl border border-ink/10 bg-white/80 p-8 shadow-soft backdrop-blur-sm md:p-10">
          <p className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink md:text-5xl">
            Reconocer lo que sentimos, comprender por qué ocurre y regular cómo respondemos cambia la experiencia escolar completa.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            Una escuela que integra la dimensión emocional favorece bienestar, convivencia y aprendizajes más duraderos. Ese es el centro del mensaje final de esta presentación.
          </p>
        </div>
        <CharacterSlot
          name="Composición final de personajes"
          description="Reserva este espacio para una escena final con varios personajes emocionales cerrando la experiencia visual del sitio."
        />
      </div>
    </SectionShell>
  );
}
