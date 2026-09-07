import type { Metadata } from 'next';

/*
 * The resume page itself is a client component (it calls window.print()), so
 * it cannot export metadata. Without this layout the tab fell back to the
 * site-wide title, which meant a saved PDF and a bookmarked tab were both
 * labelled "Salman Ahmad // 0xPortfolio" rather than identifying themselves.
 */
export const metadata: Metadata = {
  title: 'Resume — Salman Ahmad',
  description:
    'Software Developer and Systems Builder based in Calgary. Generated from the site content: client work, self-hosted infrastructure, employment and education.',
  alternates: { canonical: 'https://portfolio.ahmxd.net/resume/' },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
