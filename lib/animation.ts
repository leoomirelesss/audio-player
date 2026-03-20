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

// Reserved for future GSAP timelines / ScrollTrigger wiring.
export const animationHooks = {
  hero: 'data-animate-hero',
  reveal: 'data-animate-reveal',
  parallax: 'data-animate-parallax',
};
