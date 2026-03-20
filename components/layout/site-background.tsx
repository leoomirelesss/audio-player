export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-paper" />
      <div className="absolute inset-0 bg-paper-grid bg-[size:28px_28px] opacity-[0.12]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/55 to-transparent" />
      <div data-animate-parallax data-depth="0.06" className="absolute left-[-12%] top-[-4rem] h-[32rem] w-[32rem] rounded-full bg-accent-blue/12 blur-3xl" />
      <div data-animate-parallax data-depth="0.05" className="absolute right-[-10%] top-[14rem] h-[30rem] w-[30rem] rounded-full bg-accent-coral/12 blur-3xl" />
      <div data-animate-parallax data-depth="0.04" className="absolute bottom-[-8rem] left-[18%] h-[24rem] w-[24rem] rounded-full bg-accent-gold/14 blur-3xl" />
      <div data-animate-parallax data-depth="0.03" className="absolute bottom-[8%] right-[12%] h-56 w-56 rounded-full border border-white/40 bg-white/25 blur-3xl" />
      <div data-animate-parallax data-depth="0.07" className="absolute left-[8%] top-[16%] h-24 w-24 rounded-full border border-ink/10 bg-white/30 blur-2xl" />
    </div>
  );
}
