import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import { posts, getPost } from '@/content/posts';
import BlogPost from '@/components/BlogPost';
import HybridEdgePost from '@/components/HybridEdgePost';
import CentauriPlexPost from '@/components/CentauriPlexPost';
import CDNCaptainPost from '@/components/CDNCaptainPost';

/*
 * Real routes, one per post.
 *
 * This replaced a single client component that swapped between four post
 * components with useState. That worked visually and failed at the only thing
 * that matters for technical writing: there was no URL to send anyone. No deep
 * links, no per-post metadata, nothing indexable, and the back button did
 * nothing.
 */

const POST_COMPONENTS: Record<string, React.ComponentType> = {
  'truenas-scale-setup': BlogPost,
  'hybrid-edge-storage': HybridEdgePost,
  'centauri-plex-automation': CentauriPlexPost,
  'cdn-captain-bot': CDNCaptainPost,
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) return {};

  const url = `https://portfolio.ahmxd.net/blog/${post.slug}/`;

  return {
    title: `${post.title} — Salman Ahmad`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const PostBody = POST_COMPONENTS[slug];

  if (!post || !PostBody) notFound();

  return (
    <>
      <div className="container mx-auto px-6 pt-24 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent hover:text-accent2 transition-colors font-mono text-sm"
        >
          <span aria-hidden>&larr;</span> SYSADMIN_ARCHIVES
        </Link>
      </div>
      <PostBody />
    </>
  );
}
