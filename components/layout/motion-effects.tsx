'use client';

import { useEffect } from 'react';
import { animationHooks } from '@/lib/animation';

const heroRevealDelay = 80;

export function MotionEffects() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      document.querySelectorAll<HTMLElement>(`[${animationHooks.hero}], [${animationHooks.reveal}]`).forEach((element) => {
        element.dataset.revealed = 'true';
      });
      return;
    }

    const hero = document.querySelector<HTMLElement>(`[${animationHooks.hero}]`);
    const heroItems = hero?.querySelectorAll<HTMLElement>('[data-animate-hero-item]') ?? [];
    const revealTargets = document.querySelectorAll<HTMLElement>(`[${animationHooks.reveal}]`);
    const parallaxTargets = document.querySelectorAll<HTMLElement>(`[${animationHooks.parallax}]`);

    const heroFrame = window.requestAnimationFrame(() => {
      hero?.setAttribute('data-revealed', 'true');
      heroItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * heroRevealDelay}ms`;
        item.dataset.revealed = 'true';
      });
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          target.dataset.revealed = 'true';
          revealObserver.unobserve(target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));

    let parallaxFrame = 0;

    const updateParallax = () => {
      parallaxTargets.forEach((element) => {
        const depth = Number(element.dataset.depth ?? 0.08);
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = ((viewportCenter - elementCenter) / window.innerHeight) * depth * 120;

        element.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
      });
    };

    const requestParallaxUpdate = () => {
      if (parallaxFrame) {
        return;
      }

      parallaxFrame = window.requestAnimationFrame(() => {
        updateParallax();
        parallaxFrame = 0;
      });
    };

    updateParallax();
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    window.addEventListener('resize', requestParallaxUpdate);

    return () => {
      window.cancelAnimationFrame(heroFrame);
      if (parallaxFrame) {
        window.cancelAnimationFrame(parallaxFrame);
      }
      revealObserver.disconnect();
      window.removeEventListener('scroll', requestParallaxUpdate);
      window.removeEventListener('resize', requestParallaxUpdate);
    };
  }, []);

  return null;
}
