import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { CursorProvider } from '@/components/cursor/cursor-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Inteligencia emocional en el aula',
  description:
    'Landing page scroll-driven para una presentación académica sobre inteligencia emocional en el aula.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        <CursorProvider>{children}</CursorProvider>
      </body>
    </html>
  );
}
