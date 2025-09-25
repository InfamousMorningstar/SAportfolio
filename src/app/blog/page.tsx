"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import BlogPostComponent from '../../components/BlogPost';
import HybridEdgePost from '../../components/HybridEdgePost';

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  url: string;
}

const blogPosts: BlogPostData[] = [
  {
    id: 'truenas-scale-setup',
    title: 'My TrueNAS SCALE Setup: From Boredom to Bytes',
    excerpt: 'What started with boredom became a highly capable home infrastructure stack: Plex for media, Nextcloud for files, Immich for photos, and enough storage overhead to keep my family\'s data safe for years.',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['TrueNAS', 'Homelab', 'Docker', 'ZFS', 'Self-Hosting', 'Plex', 'Nextcloud'],
    url: '#'
  },
  {
    id: 'hybrid-edge-storage',
    title: 'My Next Big Upgrade: Hybrid Edge + Storage Setup',
    excerpt: 'A hybrid setup plan with a ZimaBoard 2 edge node handling the messy work while TrueNAS focuses on what it does best: keeping data safe, fast, and organised.',
    date: '2024-09-20',
    readTime: '6 min read',
    tags: ['ZimaBoard', 'Edge Computing', 'Network Architecture', 'Homelab', 'Infrastructure'],
    url: '#'
  }
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  if (selectedPost === 'truenas-scale-setup') {
    return <BlogPostComponent onBack={() => setSelectedPost(null)} />;
  }

  if (selectedPost === 'hybrid-edge-storage') {
    return <HybridEdgePost onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/5 relative overflow-hidden">
      {/* Computer Science/Physics Background */}
      <div className="absolute inset-0 opacity-5">
        {/* Binary Code Pattern */}
        <div className="absolute top-10 left-10 text-accent/20 font-mono text-xs rotate-12 select-none">
          01001000 01100101 01101100 01101100 01101111<br/>
          01010111 01101111 01110010 01101100 01100100<br/>
          01000010 01101001 01101110 01100001 01110010<br/>
        </div>
        
        {/* Mathematical Equations */}
        <div className="absolute top-32 right-20 text-accent2/20 text-sm rotate-[-8deg] select-none">
          ∫₋∞^∞ e^(-x²/2) dx = √(2π)<br/>
          E = mc²<br/>
          f(x) = Σ(n=0 to ∞) aₙ(x-c)ⁿ<br/>
        </div>
        
        {/* Circuit Elements */}
        <div className="absolute bottom-20 left-20 text-accent/20 text-lg rotate-45 select-none">
          ─┤├─ ─||─ ─⧸⧸⧸─<br/>
          ─⟲─ ─△─ ─◊─<br/>
        </div>
        
        {/* More Binary */}
        <div className="absolute top-1/2 left-1/4 text-accent2/15 font-mono text-xs rotate-[-15deg] select-none">
          11010010 01001101<br/>
          10110101 11100011<br/>
          00101110 01110100<br/>
        </div>
        
        {/* Physics Formulas */}
        <div className="absolute bottom-32 right-32 text-accent/20 text-sm rotate-12 select-none">
          F = ma<br/>
          P = IV<br/>
          λ = h/p<br/>
          ∇²ψ = 0<br/>
        </div>
        
        {/* Computer Science Symbols */}
        <div className="absolute top-1/3 right-1/3 text-accent2/20 font-mono text-lg rotate-[-25deg] select-none">
          {`{ } [ ] ( )`}<br/>
          {`&& || !`}<br/>
          {`=> -> <-`}<br/>
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-24 max-w-6xl relative z-10">
        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent2 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-accent font-mono text-left">
            \\.SYSADMIN_ARCHIVES
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            System administration logs, infrastructure documentation, and technical deep-dives from production environments.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              {(post.id === 'truenas-scale-setup' || post.id === 'hybrid-edge-storage') ? (
                <div
                  onClick={() => setSelectedPost(post.id)}
                  className="block h-full cursor-pointer"
                >
                  <div className="bg-white/90 dark:bg-background/80 border border-border shadow-lg hover:shadow-xl hover:ring-2 hover:ring-accent/20 transition-all duration-200 rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                      Read more
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-white/90 dark:bg-background/80 border border-border shadow-lg hover:shadow-xl hover:ring-2 hover:ring-accent/20 transition-all duration-200 rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all">
                      Read more
                      <ExternalLink className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                    </div>
                  </div>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}