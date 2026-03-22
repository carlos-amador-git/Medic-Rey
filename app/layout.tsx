import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'MedicRey - Red Médica y Hospitalaria',
  description: 'Tu red médica y hospitalaria de confianza en México. Aprovecha tu Seguro de Gasto Médico Mayor sin co-seguro ni deducible.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            if (typeof window !== 'undefined') {
              try {
                const descriptor = Object.getOwnPropertyDescriptor(window, 'fetch');
                if (descriptor && !descriptor.writable && !descriptor.set && descriptor.configurable) {
                  const originalFetch = window.fetch;
                  Object.defineProperty(window, 'fetch', {
                    get: function() { return originalFetch; },
                    set: function() { console.warn('Ignored attempt to overwrite window.fetch'); },
                    configurable: true,
                    enumerable: true
                  });
                }
              } catch (e) {
                // Ignore errors during patching
              }
            }
          })();
        ` }} />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
