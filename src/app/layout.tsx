
"use client";
import React from 'react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
// CLS TIP: next/font/google uses font-display: swap by default, preventing FOIT/FOUC.
// If you add custom @font-face, always use font-display: swap.
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { spaceGrotesk } from './fonts';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
});

// Metadata export removed: not allowed in a client component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Scroll to Hero section on page load
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const hero = document.getElementById('home');
      if (hero) {
        hero.scrollIntoView({ behavior: 'auto' });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, []);
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/*
          CLS TIP: For any <img> or <Image> tags, always specify width/height or reserve space with aspect-ratio or min-height.
          For dynamic/injected content, always reserve space with min-height or skeletons.
        */}
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
