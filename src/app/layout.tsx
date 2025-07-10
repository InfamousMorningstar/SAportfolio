import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

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
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
