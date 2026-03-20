import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#151515',
        paper: '#f7f2e8',
        chalk: '#fdfbf6',
        accent: {
          blue: '#4263eb',
          coral: '#f26b5e',
          gold: '#e0a827',
          sage: '#7ba389',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(21, 21, 21, 0.08)',
        card: '0 12px 40px rgba(24, 28, 35, 0.08)',
      },
      backgroundImage: {
        'paper-grid': 'radial-gradient(circle at 1px 1px, rgba(21, 21, 21, 0.08) 1px, transparent 0)',
        noise: 'linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [],
};

export default config;
