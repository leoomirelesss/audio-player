'use client';

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type CursorVariant = 'default' | 'highlight' | 'media';

type CursorContextValue = {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>('default');
  const value = useMemo(() => ({ variant, setVariant }), [variant]);

  return (
    <CursorContext.Provider value={value}>
      {children}
      {/* Attach your custom cursor visual here later; state is already exposed through context. */}
      <div className="pointer-events-none fixed left-5 top-5 z-50 hidden h-4 w-4 rounded-full border border-ink/25 bg-white/70 backdrop-blur md:block" />
    </CursorContext.Provider>
  );
}

export function useCursorVariant() {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error('useCursorVariant must be used inside CursorProvider');
  }

  return context;
}
