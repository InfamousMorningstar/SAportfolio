// No 'use client' — this is now a server component
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


export const metadata = {
  title: 'Salman Ahmad // 0xPortfolio',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`min-h-screen bg-black text-white antialiased ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
        {children}
        {/* Defer analytics for faster FCP/LCP */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
