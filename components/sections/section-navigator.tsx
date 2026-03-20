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
    <nav className="sticky top-6 z-30 mx-auto hidden w-full max-w-8xl px-6 md:block md:px-10">
      <div className="inline-flex rounded-full border border-ink/10 bg-white/75 p-2 shadow-card backdrop-blur-sm">
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="rounded-full px-4 py-2 text-sm font-medium text-ink/60 transition-colors hover:bg-paper hover:text-ink"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
