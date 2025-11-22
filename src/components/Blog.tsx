/*
 * ███╗░░░███╗░█████╗░██████╗░██████╗░██╗░░░██╗███████╗██████╗░██████╗░
 * ████╗░░████║██╔══██╗██╔══██╗██╔══██╗██║░░░██║██╔════╝██╔══██╗██╔══██╗
 * ██╔████╔██║███████║██████╔╝██████╔╝██║░░░██║█████╗░░██████╔╝██████╔╝
 * ██║╚██╔╝██║██╔══██║██╔══██╗██╔══██╗██║░░░██║██╔══╝░░██╔══██╗██╔══██╗
 * ██║░╚═╝░██║██║░░██║██║░░██║██║░░██║╚██████╔╝███████╗██║░░██║██║░░██║
 * ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝
 *
 * 👤 Author  : Salman Ahmad
 * 🌐 URL     : https://portfolio.ahmxd.net
 * 📧 Contact : s.ahmad0147@gmail.com
 * 📝 License : MIT (Educational/Personal Use)
 * 📁 File    : Blog.tsx
 * 🕒 Updated : Jun 12, 2025
 */
'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Clock } from 'lucide-react';
import { useState } from 'react';
import BlogPostComponent from './BlogPost';
import { LaserFlowBackground } from './ui/LaserFlowBackground';

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  tags: string[];
}

// Example blog posts - replace with actual data from your blog/Medium
const blogPosts: BlogPostData[] = [
  {
    id: '1',
    title: 'My TrueNAS SCALE Setup: From Boredom to Bytes',
    excerpt: 'What began as a simple wish for an ad-free cartoon binge spiraled into a full-fledged homelab. This isn\'t just another headless server—it\'s a living, breathing storage beast running TrueNAS SCALE.',
    date: '2025-09-24',
    readTime: '12 min',
    url: '#truenas-setup',
    tags: ['TrueNAS', 'Homelab', 'ZFS', 'Docker', 'Infrastructure']
  },
  {
    id: '2',
    title: 'Automating Media Management with *arr Stack',
    excerpt: 'How I built a fully automated media pipeline using Sonarr, Radarr, and Prowlarr.',
    date: '2024-02-28',
    readTime: '6 min',
    url: '#',
    tags: ['Automation', 'Docker', 'Media', 'Python']
  },
  {
    id: '3',
    title: 'The Future of Infrastructure Monitoring',
    excerpt: 'Exploring modern observability tools and building custom dashboards for system monitoring.',
    date: '2024-02-10',
    readTime: '10 min',
    url: '#',
    tags: ['Monitoring', 'Grafana', 'DevOps', 'Infrastructure']
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  // If a blog post is selected, show the detailed view
  if (selectedPost === 'truenas-setup') {
    return <BlogPostComponent onBack={() => setSelectedPost(null)} />;
  }

  return (
    <section id="blog" className="min-h-screen py-20 relative overflow-hidden bg-background">
      {/* LaserFlow WebGL Background */}
      <div className="fixed top-0 left-0 w-screen h-screen" style={{ zIndex: 0, pointerEvents: 'none' }}>
        <LaserFlowBackground 
          color="#8b5cf6"
          wispDensity={1.5}
          fogIntensity={0.6}
          verticalBeamOffset={-0.2}
          horizontalBeamOffset={0}
          flowSpeed={0.4}
          wispSpeed={20}
        />
      </div>
      
      {/* Test badge - MAIN BLOG */}
      <div className="fixed top-4 left-4 bg-green-500 text-white px-3 py-1 rounded text-xs" style={{ zIndex: 9999 }}>
        MAIN BLOG - LaserFlow Active
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="text-center mb-16"
          style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="text-accent">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on technology, infrastructure, and the art of building reliable systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.77, 0, 0.175, 1] }}
              className="group"
              style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
            >
              {post.id === 'truenas-scale-setup' ? (
                <div
                  onClick={() => setSelectedPost('truenas-scale-setup')}
                  className="block h-full cursor-pointer"
                >
                  <div className="card border border-border-subtle/60 shadow-lg hover:shadow-xl hover:ring-2 hover:ring-accent/20 transition-all duration-200 rounded-2xl p-6 h-full">
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
                  <div className="card border border-border-subtle/60 shadow-lg hover:shadow-xl hover:ring-2 hover:ring-accent/20 transition-all duration-200 rounded-2xl p-6 h-full">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}
          className="text-center mt-12"
          style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors font-medium"
          >
            View all articles
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
