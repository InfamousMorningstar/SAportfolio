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
 * 📁 File    : HybridEdgePost.tsx
 * 🕒 Updated : Sep 24, 2025
 */
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface HybridEdgePostProps {
  onBack?: () => void;
}

export default function HybridEdgePost({ onBack }: HybridEdgePostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
      className="min-h-screen py-20 relative bg-gradient-to-br from-slate-900 via-background to-emerald-950/30 overflow-hidden"
    >
      {/* Network/Edge Computing Background Theme */}
      <div className="absolute inset-0 opacity-4">
        {/* Network Topology Diagrams */}
        <div className="absolute top-20 left-20 text-emerald-400/20 font-mono text-xs rotate-8 select-none">
          [Edge Node]━━━━━━[2.5GbE]━━━━━━[Storage]<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃<br/>
          [Internet]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Clients]<br/>
        </div>
        
        {/* Networking Commands */}
        <div className="absolute top-1/3 right-24 text-blue-400/20 font-mono text-xs rotate-[-12deg] select-none">
          ip route add default<br/>
          iptables -t nat -A<br/>
          docker network create<br/>
          tailscale up --accept-routes<br/>
        </div>
        
        {/* Hardware Specs */}
        <div className="absolute bottom-32 left-32 text-cyan-400/20 text-sm rotate-15 select-none">
          ZimaBoard 2<br/>
          Dual 2.5GbE<br/>
          Intel N100<br/>
          16GB DDR4<br/>
        </div>
        
        {/* Docker/Container Commands */}
        <div className="absolute top-1/2 left-1/4 text-violet-400/20 font-mono text-xs rotate-[-18deg] select-none">
          docker-compose up -d<br/>
          kubectl apply -f<br/>
          systemctl enable<br/>
          nginx -t && nginx -s reload<br/>
        </div>
        
        {/* Data Flow Arrows */}
        <div className="absolute bottom-24 right-16 text-emerald-400/15 text-lg rotate-45 select-none">
          ┌─────┐&nbsp;&nbsp;&nbsp;┌─────┐<br/>
          │&nbsp;SRC&nbsp;│──→│&nbsp;DST&nbsp;│<br/>
          └─────┘&nbsp;&nbsp;&nbsp;└─────┘<br/>
        </div>
        
        {/* System Architecture */}
        <div className="absolute top-16 right-1/3 text-cyan-400/20 font-mono text-xs rotate-12 select-none">
          Edge Layer<br/>
          ├── VPN Gateway<br/>
          ├── Media Processing<br/>
          └── Cache/Buffer<br/>
        </div>
      </div>

      {/* Animated Network Nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Connecting Lines Animation */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${100 + Math.random() * 200}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Back Button */}
        {onBack && (
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8 group"
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
            My Next Big Upgrade: <span className="text-emerald-400">Hybrid Edge + Storage</span> Setup
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Sep 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>6 min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['ZimaBoard', 'Edge Computing', 'Network Architecture', 'Homelab', 'Infrastructure'].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full"
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
          {/* Introduction */}
          <section className="mb-12">
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                I've already got a pretty healthy TrueNAS SCALE system humming along, but like every homelabber, 
                I can't help but ask: what's next?
              </p>
              <p>
                The idea that's been bouncing around my head lately is a hybrid setup — basically letting a smaller 
                "edge box" handle the messy, noisy work while my TrueNAS server sticks to what it does best: keeping 
                data safe, fast, and organised.
              </p>
            </div>
          </section>

          {/* Edge Node Dream */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">The Edge Node Dream (ZimaBoard 2)</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                I've got my eye on a compact ZimaBoard 2 with dual 2.5 GbE ports. Think of it as a front door to my 
                homelab, acting as both a bouncer and a buffer.
              </p>
              
              <div className="border border-emerald-400/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-emerald-300">Here's what I imagine it running:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <div>
                      <span className="text-emerald-300 font-medium">Tailscale VPN</span>
                      <span className="text-muted"> → secure remote access without opening router ports.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <span className="text-cyan-300 font-medium">Cloudflare Tunnel</span>
                      <span className="text-muted"> → publish services like dashboards and request portals to the web with automatic HTTPS.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                    <div>
                      <span className="text-violet-300 font-medium">Blu-ray Ripping Pipeline</span>
                      <span className="text-muted"> → instead of hammering my ZFS pool with random writes, the ZimaBoard would chew through discs on its local SSD first. When the rip is polished and ready, it'll push the final file across a private 2.5 GbE link straight into TrueNAS.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg p-6 border border-emerald-400/20">
                <p className="text-muted leading-relaxed">
                  <span className="text-emerald-300 font-semibold">The appeal?</span> My storage server won't get bogged down 
                  while I'm processing a stack of Blu-rays, and my family still gets uninterrupted Plex streams and photo syncs.
                </p>
              </div>
            </div>
          </section>

          {/* TrueNAS Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">TrueNAS: Staying the Brains of the Operation</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                TrueNAS itself won't get demoted — it's still the star of the show. The plan is for it to keep running:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-cyan-400/20 rounded-lg p-4">
                  <h3 className="font-semibold text-cyan-300 mb-2">ZFS Pool "Centauri"</h3>
                  <p className="text-muted text-sm">~72 TB usable (with about 15 TB free right now)</p>
                </div>
                
                <div className="border border-cyan-400/20 rounded-lg p-4">
                  <h3 className="font-semibold text-cyan-300 mb-2">Plex</h3>
                  <p className="text-muted text-sm">Streaming my ripped library</p>
                </div>
                
                <div className="border border-cyan-400/20 rounded-lg p-4">
                  <h3 className="font-semibold text-cyan-300 mb-2">Nextcloud</h3>
                  <p className="text-muted text-sm">Our personal Google Drive replacement for docs and files</p>
                </div>
                
                <div className="border border-cyan-400/20 rounded-lg p-4">
                  <h3 className="font-semibold text-cyan-300 mb-2">Immich</h3>
                  <p className="text-muted text-sm">The family photo vault, complete with automatic uploads and galleries</p>
                </div>
                
                <div className="border border-cyan-400/20 rounded-lg p-4 md:col-span-2">
                  <h3 className="font-semibold text-cyan-300 mb-2">Tautulli + friends</h3>
                  <p className="text-muted text-sm">Analytics and monitoring, because I'm curious who's watching what</p>
                </div>
              </div>

              <p className="text-muted leading-relaxed italic">
                The idea is to let TrueNAS focus on storing and serving media while the ZimaBoard handles all the prep work.
              </p>
            </div>
          </section>

          {/* Network Layout */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-violet-400">The Network Layout</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">The way I picture it:</p>
              
              <div className="border border-violet-400/20 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted"><span className="text-blue-300 font-medium">Main LAN</span> handles the everyday stuff — internet, devices, Plex clients.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <p className="text-muted"><span className="text-emerald-300 font-medium">Private 2.5 GbE P2P link</span> between the ZimaBoard and TrueNAS handles file transfers.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                    <p className="text-muted"><span className="text-violet-300 font-medium">Tailscale + Cloudflare</span> keep remote access secure and user-friendly, even if the storage box reboots.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-violet-500/10 to-emerald-500/10 rounded-lg p-6 border border-violet-400/20">
                <p className="text-muted leading-relaxed">
                  Basically, the edge node becomes the always-on "front door," while TrueNAS is the rock-solid "vault."
                </p>
              </div>
            </div>
          </section>

          {/* Why Bother */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Why Bother?</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                So why complicate things with an extra box? A few reasons:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-emerald-400/20 rounded-lg p-6">
                  <h3 className="font-semibold text-emerald-300 mb-3">Less I/O stress</h3>
                  <p className="text-muted text-sm">Blu-ray rips happen on the ZimaBoard SSD, not directly on ZFS.</p>
                </div>
                
                <div className="border border-cyan-400/20 rounded-lg p-6">
                  <h3 className="font-semibold text-cyan-300 mb-3">Crash isolation</h3>
                  <p className="text-muted text-sm">If something blows up on the edge, TrueNAS stays clean.</p>
                </div>
                
                <div className="border border-violet-400/20 rounded-lg p-6">
                  <h3 className="font-semibold text-violet-300 mb-3">Performance</h3>
                  <p className="text-muted text-sm">That private 2.5 GbE pipe should move files at ~300 MB/s.</p>
                </div>
                
                <div className="border border-blue-400/20 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-300 mb-3">Flexibility</h3>
                  <p className="text-muted text-sm">Edge box can run extra toys like monitoring dashboards or DNS filtering without cluttering the storage stack.</p>
                </div>
              </div>

              <p className="text-muted leading-relaxed italic">
                Sure, it adds a bit of cost and config overhead, but for me, that's part of the fun.
              </p>
            </div>
          </section>

          {/* Future Roadmap */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Future Roadmap</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                This setup has plenty of room to grow. Some ideas on my list:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                    <p className="text-muted">Upgrade the P2P link to 5 GbE or 10 GbE.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-muted">Spin up multiple edge nodes (e.g. one for ripping, one for networking).</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2"></div>
                    <p className="text-muted">Offload certain apps from TrueNAS into a clustered setup.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-muted">Sync subsets of media/photos to the cloud for redundancy.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing Thoughts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Closing Thoughts</h2>
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg p-8 border border-emerald-400/30">
              <div className="text-muted leading-relaxed space-y-4">
                <p>
                  Right now, this is just a plan — but it's the kind of plan that scratches the homelab itch. I like the 
                  idea of decoupling heavy ingest work (like Blu-ray ripping) from the storage backend.
                </p>
                <p>
                  In theory, I'll end up with a system that's faster, safer, and easier to manage. And if nothing else, 
                  it'll give me another excuse to wrestle with Docker configs at 2 a.m.
                </p>
                <p className="font-medium text-emerald-300">
                  Because in homelabs, the journey is half the fun.
                </p>
              </div>
            </div>
          </section>
        </motion.article>
      </div>
    </motion.div>
  );
}
