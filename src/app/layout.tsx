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

export const metadata: Metadata = {
  title: 'Salman Ahmad - Portfolio',
  description: 'DevOps Engineer & Full-Stack Developer passionate about automation, infrastructure, and innovative solutions.',
  keywords: ['DevOps', 'Full-Stack', 'Developer', 'Next.js', 'React', 'TypeScript', 'TrueNAS', 'Kubernetes'],
  authors: [{ name: 'Salman Ahmad' }],
  openGraph: {
    title: 'Salman Ahmad - Portfolio',
    description: 'DevOps Engineer & Full-Stack Developer',
    url: 'https://portfolio.ahmxd.net',
    siteName: 'Salman Ahmad Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salman Ahmad - Portfolio',
    description: 'DevOps Engineer & Full-Stack Developer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
