import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { caseStudies, getCaseStudy } from '@/content/case-studies';
import { incidentsFor } from '@/content/incidents';
import { CaseStudy } from '@/components/CaseStudy';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  const url = `https://portfolio.ahmxd.net/work/${study.slug}/`;

  return {
    title: `${study.title} — Salman Ahmad`,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: `${study.title} — ${study.summary}`,
      description: study.problem,
      url,
    },
    twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.summary,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return <CaseStudy study={study} incidents={incidentsFor(slug)} />;
}
