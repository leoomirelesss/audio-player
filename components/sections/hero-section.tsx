import { CharacterSlot } from '@/components/ui/character-slot';
import { DoodleOrb } from '@/components/ui/doodle-orb';

export function HeroSection() {
  return (
    <section data-animate-hero className="relative mx-auto grid min-h-screen w-full max-w-8xl items-center gap-12 px-6 pb-16 pt-36 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:pb-24 md:pt-32">
      <div className="max-w-4xl">
        <span className="inline-flex rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-ink/60 shadow-card backdrop-blur-sm">
          Presentación académica interactiva
        </span>
        <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-ink md:text-7xl xl:text-[5.8rem]">
          Inteligencia emocional <span className="text-ink/55">en el aula</span>
        </h1>
        <p className="mt-8 max-w-2xl text-xl leading-8 text-ink/72 md:text-2xl md:leading-9">
          Cómo reconocer, entender y regular emociones mejora el aprendizaje.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <div className="rounded-full border border-ink/10 bg-white/80 px-5 py-3 text-sm text-ink/70 shadow-card">Scroll-driven storytelling ready</div>
          <div className="rounded-full border border-ink/10 bg-white/80 px-5 py-3 text-sm text-ink/70 shadow-card">Arquitectura lista para GSAP</div>
          <div className="rounded-full border border-ink/10 bg-white/80 px-5 py-3 text-sm text-ink/70 shadow-card">Personajes emocionales reutilizables</div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 top-4 hidden md:block">
          <DoodleOrb label="Percibir" tone="coral" className="rotate-[-10deg]" />
        </div>
        <div className="absolute -right-2 bottom-16 hidden md:block">
          <DoodleOrb label="Regular" tone="gold" className="rotate-[8deg]" />
        </div>
        <CharacterSlot
          name="Personaje emocional principal"
          description="Espacio hero para integrar tu composición principal animada. Aquí puedes montar SVG, secuencia de frames, video liviano o una escena con layers para parallax."
          className="relative z-10"
        />
      </div>
    </section>
  );
}
