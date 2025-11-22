"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import BlogPostComponent from '../../components/BlogPost';
import HybridEdgePost from '../../components/HybridEdgePost';
import CentauriPlexPost from '../../components/CentauriPlexPost';
import LaserFlowBackground from '../../components/ui/LaserFlowBackground';

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
    id: 'centauri-plex-automation',
    title: 'Centauri (Plex) Automation System',
    excerpt: 'My 95% automated user lifecycle management system for my Plex server. From instant welcome emails to automated cleanup of inactive users—a production-grade system I built that manages 61 users with zero daily intervention.',
    date: '2025-10-29',
    readTime: '15 min read',
    tags: ['Python', 'Automation', 'Plex', 'Tautulli', 'Cron', 'SQLite', 'DevOps', 'API Integration'],
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
  },
  {
    id: 'truenas-scale-setup',
    title: 'My TrueNAS SCALE Setup: From Boredom to Bytes',
    excerpt: 'What started with boredom became a highly capable home infrastructure stack: Plex for media, Nextcloud for files, Immich for photos, and enough storage overhead to keep my family\'s data safe for years.',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['TrueNAS', 'Homelab', 'Docker', 'ZFS', 'Self-Hosting', 'Plex', 'Nextcloud'],
    url: '#'
  }
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  if (selectedPost === 'centauri-plex-automation') {
    return <CentauriPlexPost onBack={() => setSelectedPost(null)} />;
  }

  if (selectedPost === 'truenas-scale-setup') {
    return <BlogPostComponent onBack={() => setSelectedPost(null)} />;
  }

  if (selectedPost === 'hybrid-edge-storage') {
    return <HybridEdgePost onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* LaserFlow WebGL Background */}
      <div className="fixed inset-0 z-0">
        <LaserFlowBackground />
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

        {/* Blog Posts List (Terminal-Style Professional List) */}
        <div className="max-w-4xl mx-auto space-y-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {(post.id === 'centauri-plex-automation' || post.id === 'truenas-scale-setup' || post.id === 'hybrid-edge-storage') ? (
                <div
                  onClick={() => setSelectedPost(post.id)}
                  className="block cursor-pointer"
                >
                  {/* Terminal-Style List Item */}
                  <div className="border-l-4 border-accent/50 hover:border-accent transition-all duration-300 p-6 hover:translate-x-2">
                    {/* Date Badge (Terminal Timestamp Style) */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm text-accent/70 bg-accent/10 px-3 py-1 rounded">
                        [{new Date(post.date).toISOString().split('T')[0]}]
                      </span>
                      <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors font-mono">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags (Terminal Style) */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-3 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More (Terminal Prompt Style) */}
                    <div className="flex items-center font-mono text-sm text-accent group-hover:gap-2 transition-all">
                      <span className="text-emerald-400">$</span>
                      <span className="ml-2">cat {post.id}.log</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:ml-0 transition-all opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {/* Terminal-Style List Item (External) */}
                  <div className="border-l-4 border-accent/50 hover:border-accent transition-all duration-300 p-6 hover:translate-x-2">
                    {/* Date Badge (Terminal Timestamp Style) */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm text-accent/70 bg-accent/10 px-3 py-1 rounded">
                        [{new Date(post.date).toISOString().split('T')[0]}]
                      </span>
                      <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors font-mono">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags (Terminal Style) */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-3 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More (Terminal Prompt Style) */}
                    <div className="flex items-center font-mono text-sm text-accent group-hover:gap-2 transition-all">
                      <span className="text-emerald-400">$</span>
                      <span className="ml-2">cat {post.id}.log</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:ml-0 transition-all opacity-0 group-hover:opacity-100" />
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