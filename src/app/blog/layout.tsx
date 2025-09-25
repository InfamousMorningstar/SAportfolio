import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SYSADMIN_ARCHIVES - Salman Ahmad // 0xPortfolio',
  description: 'System administration logs, infrastructure documentation, and technical deep-dives from production environments.',
  openGraph: {
    title: 'SYSADMIN_ARCHIVES - Salman Ahmad // 0xPortfolio',
    description: 'System administration logs, infrastructure documentation, and technical deep-dives from production environments.',
  },
  twitter: {
    title: 'SYSADMIN_ARCHIVES - Salman Ahmad // 0xPortfolio',
    description: 'System administration logs, infrastructure documentation, and technical deep-dives from production environments.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}