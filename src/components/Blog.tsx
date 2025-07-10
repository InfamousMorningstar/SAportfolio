'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  tags: string[];
}

// Example blog posts - replace with actual data from your blog/Medium
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Homelab: From Zero to Enterprise',
    excerpt: 'A complete guide to setting up a professional homelab with TrueNAS, Docker, and enterprise networking.',
    date: '2024-03-15',
    readTime: '8 min',
    url: '#',
    tags: ['Homelab', 'TrueNAS', 'Docker', 'Networking']
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
  return (
    <section id="blog" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-card border border-border rounded-lg p-6 h-full transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1">
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
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
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
