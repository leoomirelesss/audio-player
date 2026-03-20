const links = [
  ['Inicio', '#top'],
  ['Concepto', '#que-es'],
  ['Goleman', '#goleman'],
  ['Impacto', '#impacto'],
  ['Beneficios', '#beneficios'],
  ['Ejemplos', '#ejemplos'],
  ['Cierre', '#conclusion'],
] as const;

export function SectionNavigator() {
  return (
    <nav className="sticky top-5 z-30 mx-auto hidden w-full max-w-8xl px-6 md:block md:px-10">
      <div className="inline-flex items-center gap-1 rounded-full border border-ink/10 bg-white/70 p-2 shadow-[0_18px_55px_rgba(44,37,22,0.10)] backdrop-blur-xl">
        <span className="rounded-full bg-ink px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/90">
          Guía
        </span>
        {links.map(([label, href]) => (
          <a
            data-cursor="highlight"
            key={href}
            href={href}
            className="rounded-full px-4 py-2 text-sm font-medium text-ink/62 transition-colors hover:bg-paper/90 hover:text-ink"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
