import { CharacterSlot } from '@/components/ui/character-slot';
import { DoodleOrb } from '@/components/ui/doodle-orb';

const heroHighlights = [
  'Reconocimiento emocional',
  'Clima de aula positivo',
  'Aprendizaje con autorregulación',
];

export function HeroSection() {
  return (
    <section className="relative mx-auto grid min-h-screen w-full max-w-8xl items-center gap-14 px-6 pb-16 pt-32 md:grid-cols-[1.08fr_0.92fr] md:px-10 md:pb-24 md:pt-28">
      <div className="max-w-4xl">
        <span className="inline-flex rounded-full border border-ink/10 bg-white/78 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-ink/60 shadow-[0_12px_35px_rgba(44,37,22,0.08)] backdrop-blur-sm">
          Presentación académica
        </span>
        <div className="mt-7 max-w-3xl rounded-[2rem] border border-white/65 bg-white/55 p-6 shadow-[0_22px_70px_rgba(44,37,22,0.08)] backdrop-blur-md md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-ink/46">Educación socioemocional</p>
          <h1 className="mt-4 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] text-ink md:text-7xl xl:text-[5.8rem]">
            Inteligencia emocional <span className="text-ink/52">en el aula</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/74 md:text-[1.45rem] md:leading-9">
            Reconocer, comprender y regular las emociones fortalece la convivencia, la atención y la calidad del aprendizaje.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3.5">
          {heroHighlights.map((item) => (
            <div
              key={item}
              className="rounded-full border border-ink/10 bg-white/82 px-5 py-3 text-sm font-medium text-ink/72 shadow-[0_10px_24px_rgba(44,37,22,0.08)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="relative pb-8 md:pb-0">
        <div className="absolute -left-2 top-2 hidden md:block">
          <DoodleOrb label="Percibir" tone="coral" className="rotate-[-10deg]" />
        </div>
        <div className="absolute -right-2 bottom-10 hidden md:block">
          <DoodleOrb label="Regular" tone="gold" className="rotate-[8deg]" />
        </div>
        <div className="absolute left-10 top-12 hidden h-24 w-24 rounded-full border border-white/60 bg-white/30 blur-2xl md:block" />
        <CharacterSlot
          name="Mapa visual del proceso emocional"
          description="Un recurso central para explicar cómo la percepción, la comprensión y la regulación emocional acompañan el aprendizaje en el aula."
          className="relative z-10"
        />
      </div>
    </section>
  );
}
