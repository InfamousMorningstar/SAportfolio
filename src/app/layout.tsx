import React from 'react';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import ScrollProgressBar from '../components/ScrollProgressBar'; // Only one import needed
// CLS TIP: next/font/google uses font-display: swap by default, preventing FOIT/FOUC.
// If you add custom @font-face, always use font-display: swap.
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { spaceGrotesk } from './fonts';
import Script from 'next/script';
import { ThemeProvider } from '../components/ThemeProvider';
import SmoothScroll from '../components/SmoothScroll';

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
  description: 'Software developer and systems builder in Calgary. I build software, run infrastructure, and figure out what breaks in between — full-stack applications, self-hosted systems, networking, containers and automation, documented down to the architecture and the incidents.',
  keywords: ['DevOps', 'Infrastructure', 'SRE', 'Linux', 'ZFS', 'TrueNAS', 'Docker', 'Self-hosted', 'Homelab', 'Networking', 'Python', 'Next.js', 'Calgary'],
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
    description: 'I build software, run infrastructure, and figure out what breaks in between — documented down to the architecture, the trade-offs and the incidents.',
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
    // `summary`, not `summary_large_image`: the only OG asset is a 1280x1280
    // square portrait, which a large-image card crops badly on both edges.
    card: 'summary',
    title: 'Salman Ahmad // 0xPortfolio',
    description: 'Software developer and systems builder. I build software, run infrastructure, and document what breaks in between.',
    images: ['/images/profile-photo-1280.webp'],
  },
  alternates: {
    canonical: 'https://portfolio.ahmxd.net/',
  },
};

/*
 * Schema.org Person markup. The old README claimed the site had structured
 * data; it did not. This is the minimum that is both true and useful: who the
 * site is about, where else they exist, and what they do.
 */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Salman Ahmad',
  url: 'https://portfolio.ahmxd.net',
  email: 'mailto:s.ahmad0147@gmail.com',
  jobTitle: 'Software Developer · Systems Builder',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Calgary',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  sameAs: [
    'https://github.com/InfamousMorningstar',
    'https://www.linkedin.com/in/salman-ahmad-6788811b6/',
  ],
  knowsAbout: [
    'Linux',
    'ZFS',
    'TrueNAS SCALE',
    'Docker',
    'Self-hosted infrastructure',
    'Networking',
    'Python',
    'TypeScript',
    'Next.js',
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const themeScript = `(() => {
  try {
    const storageKey = 'portfolio-theme';
    const stored = window.localStorage.getItem(storageKey);
    // Dark-first by design: the site is built as an operations console, so a
    // visitor's OS preference does not decide what it looks like on arrival.
    // An explicit choice via the toggle still wins and persists.
    const theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
    document.body?.setAttribute('data-theme', theme);
  } catch (error) {
    console.warn('[theme] Failed to set initial theme', error);
  }
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`min-h-screen bg-background text-foreground antialiased ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <script
          type="application/ld+json"
          // Static, author-controlled JSON with no user input in it.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>
          <SmoothScroll>
            <ScrollProgressBar />
            {children}
          </SmoothScroll>
        </ThemeProvider>
        {/* Defer analytics for faster FCP/LCP */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
