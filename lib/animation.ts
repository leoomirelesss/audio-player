export type ScrollRevealConfig = {
  y?: number;
  scrub?: boolean;
  start?: string;
  end?: string;
};

export const sectionRevealDefaults: ScrollRevealConfig = {
  y: 48,
  scrub: false,
  start: 'top 80%',
  end: 'bottom 30%',
};

export const animationHooks = {
  hero: 'data-animate-hero',
  reveal: 'data-animate-reveal',
  parallax: 'data-animate-parallax',
} as const;

export const premiumEase = 'cubic-bezier(0.22, 1, 0.36, 1)';
