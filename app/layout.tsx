import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Outfit } from 'next/font/google';
import './globals.css';
import AnimatedBackground from '@/components/AnimatedBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'MedicRey - Red Médica y Hospitalaria',
  description: 'Tu red médica y hospitalaria de confianza en México. Aprovecha tu Seguro de Gasto Médico Mayor sin co-seguro ni deducible.',
};

import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} ${outfit.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            if (typeof window !== 'undefined') {
              try {
                const originalFetch = window.fetch;
                Object.defineProperty(window, 'fetch', {
                  value: originalFetch,
                  writable: true,
                  configurable: true,
                  enumerable: true
                });
              } catch (e) {
                // Ignore errors during patching
              }
            }
          })();
        ` }} />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
