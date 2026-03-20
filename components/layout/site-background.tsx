export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-paper" />
      <div className="absolute inset-0 bg-paper-grid bg-[size:24px_24px] opacity-[0.22]" />
      <div className="absolute left-[-10%] top-0 h-[34rem] w-[34rem] rounded-full bg-accent-blue/10 blur-3xl" />
      <div className="absolute right-[-8%] top-[18rem] h-[32rem] w-[32rem] rounded-full bg-accent-coral/10 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-gold/10 blur-3xl" />
    </div>
  );
}
