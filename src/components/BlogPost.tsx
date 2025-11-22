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
 * 📁 File    : BlogPost.tsx
 * 🕒 Updated : Sep 24, 2025
 */
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { LaserFlowBackground } from './ui/LaserFlowBackground';

interface BlogPostProps {
  onBack?: () => void;
}

export default function BlogPost({ onBack }: BlogPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
      className="min-h-screen py-20 relative overflow-hidden bg-background"
    >
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
      
      {/* Temporary test - visible overlay to confirm component renders */}
      <div className="fixed top-4 right-4 bg-red-500 text-white px-3 py-1 rounded text-xs" style={{ zIndex: 9999 }}>
        LaserFlow Active
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Back Button */}
        {onBack && (
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-accent hover:text-accent2 transition-colors mb-8 group"
            whileHover={{ x: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:animate-pulse" />
            Back to Blog
          </motion.button>
        )}

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            My <span className="text-accent">TrueNAS SCALE</span> Setup: From Boredom to Bytes
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Sep 24, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>12 min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['TrueNAS', 'Homelab', 'ZFS', 'Docker', 'Infrastructure'].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {/* Section 1: The Origin Story */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">1. The Origin Story</h2>
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                It all started with a simple wish: watch my favourite shows without buffering, ads, or subscription guilt. 
                Instead of settling for yet another streaming service, I built my own platform. TrueNAS SCALE quickly turned 
                into the backbone of a homelab that now doubles as my personal cloud, family media hub, and digital playground.
              </p>
              <p>
                This isn't just "a server." It's the stubborn outcome of too many late nights, spare hardware, and an 
                unreasonable passion for making storage do backflips.
              </p>
            </div>
          </section>

          {/* Section 2: Hardware */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">2. The Hardware at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent2">System Specs</h3>
                <div className="space-y-2 text-muted">
                  <div className="flex justify-between">
                    <span className="font-medium">CPU:</span>
                    <span>Intel Core i7-8700 (6 cores, 12 threads)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">GPU:</span>
                    <span>NVIDIA Quadro P1000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Memory:</span>
                    <span>46.9 GiB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Platform:</span>
                    <span>TrueNAS SCALE 25.04.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Uptime:</span>
                    <span>30+ days without flames</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent2">GPU Purpose</h3>
                <div className="space-y-2 text-muted">
                  <p>NVIDIA Quadro P1000 handles:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Plex hardware transcoding</li>
                    <li>Occasional AI experiments</li>
                    <li>Efficient media processing</li>
                  </ul>
                  <p className="text-sm italic mt-4 text-accent/70">(don't ask what happened to the missing memory sticks)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Storage & Network */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">3. Storage & Network</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-accent/5 to-accent2/5 rounded-lg p-6 border border-accent/20">
                <h3 className="text-xl font-semibold mb-4 text-accent2">Network & Access</h3>
                <div className="text-muted space-y-3">
                  <p>Bonded 2.5 Gbps link via <span className="text-accent font-semibold">Tailscale</span> for secure access anywhere.</p>
                  <div className="pt-2 border-t border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">External Access & Security</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li><span className="text-accent2 font-medium">Cloudflare Tunnels:</span> Secure, zero-trust access without port forwarding</li>
                      <li><span className="text-accent2 font-medium">Cloudflare DNS:</span> Domain management with advanced security features</li>
                      <li><span className="text-accent2 font-medium">Cloudflare Security:</span> DDoS protection, WAF, and SSL/TLS encryption</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent2/5 to-accent/5 rounded-lg p-6 border border-accent/20">
                <h3 className="text-xl font-semibold mb-4 text-accent2">ZFS Pool "Centauri"</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Pool Overview</h4>
                    <div className="space-y-1 text-muted text-sm">
                      <div className="flex justify-between">
                        <span>Total Usable:</span>
                        <span className="font-medium">~72 TB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Currently Free:</span>
                        <span className="font-medium">~15 TB</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Vdev Configuration</h4>
                    <div className="space-y-2 text-muted text-sm">
                      <div>
                        <span className="font-medium">Vdev 1:</span> 4 × 4 TB in RAID-Z1 → ~12 TB usable
                      </div>
                      <div>
                        <span className="font-medium">Vdev 2:</span> 4 × 20 TB in RAID-Z1 → ~60 TB usable
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">SSD Cache</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted text-sm">
                    <div>
                      <span className="font-medium">SLOG/ZIL:</span> ~223 GB dedicated SSD
                    </div>
                    <div>
                      <span className="font-medium">L2ARC:</span> ~168 GB dedicated SSD
                    </div>
                  </div>
                  <p className="text-xs text-accent mt-2">Health: All disks green and spinning; no SMART horror stories.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">4. The Services That Run the Show</h2>
            <div className="space-y-4 mb-6">
              <p className="text-muted">
                TrueNAS SCALE makes Docker orchestration surprisingly elegant. A few highlights:
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Plex</h3>
                  <p className="text-muted text-sm">
                    The media server that started it all. I digitise my Blu-ray library (yes, actual discs) and stream it seamlessly across devices.
                  </p>
                </div>
                
                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Nextcloud</h3>
                  <p className="text-muted text-sm">
                    My self-hosted Google Drive alternative. Documents, spreadsheets, and files for the family are always a secure VPN away.
                  </p>
                </div>
                
                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Immich</h3>
                  <p className="text-muted text-sm">
                    Think of it as our family's Google Photos. Automatic uploads, facial recognition, and private galleries—minus the privacy trade-offs.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Glances</h3>
                  <p className="text-muted text-sm">
                    Real-time monitoring dashboard that tells me exactly when something's on fire.
                  </p>
                </div>
                
                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Open-WebUI & Ollama</h3>
                  <p className="text-muted text-sm">
                    Local AI tinkering, because why not run a language model alongside movie night?
                  </p>
                </div>
                
                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Tautulli</h3>
                  <p className="text-muted text-sm">
                    Media analytics for Plex (because yes, I want to know if my sister actually finished that show).
                  </p>
                </div>
                
                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Cloudflare Tunnels</h3>
                  <p className="text-muted text-sm">
                    Zero-trust network access that eliminates the need for port forwarding while providing enterprise-grade security.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Philosophy & Lessons */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">5. Philosophy, Lessons & Quirks</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-accent/20 rounded-lg p-6">
                  <h3 className="font-semibold text-accent2 mb-3">Cables</h3>
                  <p className="text-muted text-sm">
                    No amount of zip ties could tame them. I've accepted the "SATA Medusa" aesthetic.
                  </p>
                </div>
                
                <div className="border border-accent/20 rounded-lg p-6">
                  <h3 className="font-semibold text-accent2 mb-3">Fans</h3>
                  <p className="text-muted text-sm">
                    My cooling policy is a mix of optimism and glue. Not ideal, but functional.
                  </p>
                </div>
                
                <div className="border border-accent/20 rounded-lg p-6">
                  <h3 className="font-semibold text-accent2 mb-3">Redundancy</h3>
                  <p className="text-muted text-sm">
                    With ZFS snapshots and backup tasks, I sleep at night knowing I won't lose everything to one bad sector.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Roadmap */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">6. Roadmap & Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">Add Grafana + Prometheus for system-wide observability</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">Expand cache SSDs and fine-tune ZFS performance</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">Enhance Cloudflare Tunnels configuration for better performance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">Improve photo management workflows in Immich for extended family</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Closing Thoughts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">7. Closing Thoughts</h2>
            <div className="bg-gradient-to-r from-accent/10 to-accent2/10 rounded-lg p-8 border border-accent/30">
              <div className="text-muted leading-relaxed space-y-4">
                <p>
                  What started with boredom became a highly capable home infrastructure stack: Plex for media, 
                  Nextcloud for files, Immich for photos, and enough storage overhead to keep my family's data safe for years.
                </p>
                <p>
                  The result? A DIY digital ecosystem that feels both futuristic and oddly personal. Because sometimes, 
                  building your own "cloud" beats renting someone else's.
                </p>
              </div>
            </div>
          </section>
        </motion.article>
      </div>
    </motion.div>
  );
}
