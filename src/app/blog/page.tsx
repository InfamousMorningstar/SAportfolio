import Link from 'next/link';
import { Clock } from 'lucide-react';

import { postsByDate } from '@/content/posts';
import { ParticleNetworkBackground } from '@/components/ui/ParticleNetworkBackground';

/*
 * Listing is a server component now: it reads the post registry directly, so
 * the index is statically rendered and each entry is a real link rather than a
 * setState call.
 */

const STATUS_STYLES: Record<string, string> = {
  retired: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
  planned: 'text-secondary border-secondary/30 bg-secondary/10',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <ParticleNetworkBackground />
      </div>

      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent2 transition-colors font-mono text-sm"
          >
            <span aria-hidden>&larr;</span> Back to Portfolio
          </Link>
        </div>

        <header className="mb-16">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-accent font-mono text-left">
            \\.SYSADMIN_ARCHIVES
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl">
            Infrastructure documentation and technical deep-dives from systems I actually run.
            Where something has been switched off or was never built, it says so.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-6">
          {postsByDate.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="border-l-4 border-accent/50 hover:border-accent transition-all duration-300 p-6 hover:translate-x-2">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-sm text-accent/70 bg-accent/10 px-3 py-1 rounded">
                      [{post.published}]
                    </span>
                    <span className="font-mono text-xs text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    {post.statusLabel && (
                      <span
                        className={`font-mono text-xs px-2 py-1 rounded border ${
                          STATUS_STYLES[post.status] ?? ''
                        }`}
                      >
                        {post.statusLabel}
                      </span>
                    )}
                    {post.updated && (
                      <span className="font-mono text-xs text-muted-soft">
                        verified {post.updated}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors font-mono">
                    {post.title}
                  </h2>

                  <p className="text-muted mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center font-mono text-sm text-accent">
                    <span className="text-emerald-400">$</span>
                    <span className="ml-2">cat {post.slug}.log</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
