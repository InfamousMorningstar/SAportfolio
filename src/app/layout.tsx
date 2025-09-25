import React from 'react';
import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import ScrollProgressBar from '../components/ScrollProgressBar'; // Only one import needed
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


export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.ahmxd.net'),
  title: 'Salman Ahmad // 0xPortfolio',
  description: 'Full-Stack Developer specializing in cloud infrastructure, homelab automation, and modern web applications. Experience with React, Next.js, TypeScript, and cloud-native technologies.',
  keywords: ['Full-Stack Developer', 'Cloud Infrastructure', 'React', 'Next.js', 'TypeScript', 'Homelab', 'DevOps', 'TrueNAS', 'Portfolio'],
  authors: [{ name: 'Salman Ahmad' }],
  creator: 'Salman Ahmad',
  publisher: 'Salman Ahmad',
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio.ahmxd.net',
    title: 'Salman Ahmad // 0xPortfolio',
    description: 'Full-Stack Developer specializing in cloud infrastructure, homelab automation, and modern web applications.',
    siteName: 'Salman Ahmad Portfolio',
    images: [
      {
        url: '/images/profile-photo-1280.webp',
        width: 1280,
        height: 1280,
        alt: 'Salman Ahmad Profile Photo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salman Ahmad // 0xPortfolio',
    description: 'Full-Stack Developer specializing in cloud infrastructure, homelab automation, and modern web applications.',
    images: ['/images/profile-photo-1280.webp'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`min-h-screen bg-black text-white antialiased ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
        <ScrollProgressBar />
        {children}
        {/* Defer analytics for faster FCP/LCP */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
