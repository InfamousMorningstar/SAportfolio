import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
