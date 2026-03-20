'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type CursorVariant = 'default' | 'highlight' | 'media';

type CursorContextValue = {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
};

type CursorState = {
  x: number;
  y: number;
  visible: boolean;
  pressed: boolean;
  enabled: boolean;
};

const CursorContext = createContext<CursorContextValue | null>(null);
const INTERACTIVE_SELECTOR = '[data-cursor], a, button, [role="button"], input, select, textarea, summary';

const variantStyles: Record<CursorVariant, string> = {
  default: 'h-4 w-4 border-white/55 bg-white/28 shadow-[0_10px_30px_rgba(21,21,21,0.10)]',
  highlight: 'h-10 w-10 border-white/35 bg-white/12 shadow-[0_16px_40px_rgba(21,21,21,0.12)] mix-blend-difference',
  media: 'h-14 w-14 border-[#7c5cff]/25 bg-[#7c5cff]/14 shadow-[0_18px_45px_rgba(74,54,168,0.18)] backdrop-blur-md',
};

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    visible: false,
    pressed: false,
    enabled: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const applyEnabledState = () => {
      const enabled = mediaQuery.matches;
      setState((current: CursorState) => ({ ...current, enabled, visible: enabled && current.visible }));
      document.body.classList.toggle('has-custom-cursor', enabled);
    };

    const resolveVariant = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) {
        return 'default';
      }

      const interactiveElement = target.closest<HTMLElement>(INTERACTIVE_SELECTOR);
      const nextVariant = interactiveElement?.dataset.cursor as CursorVariant | undefined;
      return nextVariant ?? (interactiveElement ? 'highlight' : 'default');
    };

    const handlePointerMove = (event: PointerEvent) => {
      setState((current: CursorState) => ({
        ...current,
        x: event.clientX,
        y: event.clientY,
        visible: true,
      }));
      setVariant(resolveVariant(event.target));
    };

    const handlePointerDown = () => {
      setState((current: CursorState) => ({ ...current, pressed: true }));
    };

    const handlePointerUp = () => {
      setState((current: CursorState) => ({ ...current, pressed: false }));
    };

    const handlePointerLeave = () => {
      setState((current: CursorState) => ({ ...current, visible: false, pressed: false }));
      setVariant('default');
    };

    const handleFocusIn = (event: FocusEvent) => {
      setVariant(resolveVariant(event.target));
    };

    const handleFocusOut = () => {
      setVariant('default');
    };

    applyEnabledState();
    mediaQuery.addEventListener('change', applyEnabledState);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerLeave);
    document.addEventListener('focusin', handleFocusIn);
    document.addEventListener('focusout', handleFocusOut);

    return () => {
      mediaQuery.removeEventListener('change', applyEnabledState);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerLeave);
      document.removeEventListener('focusin', handleFocusIn);
      document.removeEventListener('focusout', handleFocusOut);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  const value = useMemo(() => ({ variant, setVariant }), [variant]);

  return (
    <CursorContext.Provider value={value}>
      {children}
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none fixed left-0 top-0 z-[70] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-sm transition-[width,height,opacity,transform,background-color,border-color,box-shadow] duration-300 ease-out md:block',
          variantStyles[variant],
          state.visible && state.enabled ? 'opacity-100' : 'opacity-0',
        )}
        style={{
          transform: `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) scale(${state.pressed ? 0.92 : 1})`,
        }}
      >
        <div
          className={cn(
            'absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/65 transition-all duration-300',
            variant === 'highlight' && 'h-1 w-1 bg-white/85',
            variant === 'media' && 'h-2 w-2 bg-[#5b3df5]/70',
          )}
        />
      </div>
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
