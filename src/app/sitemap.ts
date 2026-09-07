import type { MetadataRoute } from 'next';
import { posts } from '@/content/posts';
import { caseStudies } from '@/content/case-studies';

/*
 * Generated from the post registry rather than hand-maintained.
 *
 * The previous public/sitemap.xml listed two URLs, was frozen at 2025-01-25,
 * omitted /resume entirely, and had no way to know about individual posts
 * because they had no URLs to know about.
 */

const BASE = 'https://portfolio.ahmxd.net';

// Required under `output: 'export'` — the sitemap is generated once at build
// time rather than per request.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: new Date(post.updated ?? post.published),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const dates = posts.map((p) => p.updated ?? p.published).sort();
  const newest = dates.length > 0 ? dates[dates.length - 1] : undefined;

  return [
    {
      url: `${BASE}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE}/blog/`,
      lastModified: newest ? new Date(newest) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/resume/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/work/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/incidents/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...caseStudies.map((study) => ({
      url: `${BASE}/work/${study.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      // The flagship case study is the most important page on the site under
      // an infrastructure-focused positioning.
      priority: 0.95,
    })),
    ...postEntries,
  ];
}
