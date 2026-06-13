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
 * 🕒 Updated : Jun 13, 2026
 */
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

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
      className="min-h-screen py-20 relative bg-gradient-to-br from-slate-950 via-background to-teal-950/30 overflow-hidden"
    >
      {/* ZFS / Storage Background Theme */}
      <div className="absolute inset-0 opacity-[0.05]">
        {/* zpool status output */}
        <div className="absolute top-16 left-16 text-teal-300/30 font-mono text-xs rotate-[-6deg] select-none">
          pool: centauri<br/>
          state: ONLINE<br/>
          scan: scrub repaired 0B in 08:42:11<br/>
          config:<br/>
          &nbsp;&nbsp;raidz1-0&nbsp;&nbsp;ONLINE&nbsp;&nbsp;0&nbsp;&nbsp;0&nbsp;&nbsp;0<br/>
          &nbsp;&nbsp;raidz1-1&nbsp;&nbsp;ONLINE&nbsp;&nbsp;0&nbsp;&nbsp;0&nbsp;&nbsp;0<br/>
          &nbsp;&nbsp;logs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ONLINE<br/>
          &nbsp;&nbsp;cache&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ONLINE<br/>
        </div>

        {/* RAID-Z vdev diagram */}
        <div className="absolute top-1/3 right-20 text-cyan-400/25 font-mono text-xs rotate-[10deg] select-none">
          [vdev 1]&nbsp;raidz1<br/>
          ┌──┬──┬──┬──┐<br/>
          │4T│4T│4T│4T│ → 12 TB<br/>
          └──┴──┴──┴──┘<br/>
          [vdev 2]&nbsp;raidz1<br/>
          ┌──┬──┬──┬──┐<br/>
          │20│20│20│20│ → 60 TB<br/>
          └──┴──┴──┴──┘<br/>
        </div>

        {/* zfs commands */}
        <div className="absolute bottom-32 left-24 text-emerald-400/25 font-mono text-xs rotate-[-12deg] select-none">
          zfs snapshot centauri/photos@daily<br/>
          zfs send -i @prev @daily | ssh backup<br/>
          zpool scrub centauri<br/>
          zpool iostat -v 1<br/>
        </div>

        {/* Docker compose snippet */}
        <div className="absolute top-1/2 right-12 text-violet-400/25 font-mono text-xs rotate-[8deg] select-none">
          services:<br/>
          &nbsp;&nbsp;plex:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;image: plexinc/pms-docker<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;runtime: nvidia<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;volumes:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /mnt/centauri/media:/data<br/>
        </div>

        {/* SMART / disk health */}
        <div className="absolute bottom-24 right-1/4 text-amber-300/25 font-mono text-xs rotate-[-8deg] select-none">
          /dev/sda&nbsp;HGST&nbsp;20TB&nbsp;Temp 38°C&nbsp;PASS<br/>
          /dev/sdb&nbsp;HGST&nbsp;20TB&nbsp;Temp 39°C&nbsp;PASS<br/>
          /dev/sdc&nbsp;WDC&nbsp;&nbsp;&nbsp;4TB&nbsp;&nbsp;Temp 36°C&nbsp;PASS<br/>
          /dev/sdd&nbsp;WDC&nbsp;&nbsp;&nbsp;4TB&nbsp;&nbsp;Temp 35°C&nbsp;PASS<br/>
        </div>

        {/* ARC stats */}
        <div className="absolute top-20 right-1/3 text-cyan-300/25 font-mono text-xs rotate-[-4deg] select-none">
          ARC size:&nbsp;&nbsp;&nbsp;28.4 GiB / 46.9 GiB<br/>
          Hit ratio:&nbsp;&nbsp;97.3%<br/>
          L2ARC hit:&nbsp;&nbsp;42.1%<br/>
          Prefetch:&nbsp;&nbsp;&nbsp;efficient<br/>
        </div>

        {/* Tailnet / Cloudflare */}
        <div className="absolute top-2/3 left-12 text-blue-300/25 font-mono text-xs rotate-[6deg] select-none">
          tailscale status<br/>
          ├─ centauri&nbsp;&nbsp;&nbsp;active<br/>
          ├─ phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;idle<br/>
          └─ laptop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active<br/>
          cloudflared tunnel run centauri<br/>
        </div>

        {/* Hex / checksum vibe */}
        <div className="absolute bottom-1/3 left-1/3 text-teal-400/20 font-mono text-[10px] rotate-[14deg] select-none">
          0x4f3a 0xc2b1 0x9e08 0x71fd<br/>
          fletcher4&nbsp;OK&nbsp;&nbsp;sha256&nbsp;OK<br/>
          ashift=12&nbsp;recordsize=1M<br/>
          compress=lz4&nbsp;atime=off<br/>
        </div>
      </div>

      {/* Animated &ldquo;disk&rdquo; particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/15 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 6}s`,
            }}
          />
        ))}

        {/* Faint connecting "bus" lines */}
        {[...Array(7)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-teal-400/10 to-transparent animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${120 + Math.random() * 220}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
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
              <span>18 min read</span>
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
                It started, as most homelabs do, with a much smaller plan. I just wanted a place to dump my Blu-ray rips
                so I could stop hunting through external drives whenever I wanted to watch something. A flat SMB share would
                have done the job. Instead, I ended up with a 24-bay-capable chassis, two ZFS vdevs, a Cloudflare tenant,
                a Tailnet, and a Docker workload I now treat with the seriousness of an actual production environment.
              </p>
              <p>
                Calling this "boredom" is generous. It was more like cumulative frustration: rising subscription prices,
                photo libraries scattered across phones, family files trapped in someone else's free tier, and a lingering
                sense that "the cloud" should not be the only option for people who can read documentation. TrueNAS SCALE
                turned out to be the most pragmatic way to consolidate all of that on hardware I already half-owned.
              </p>
              <p>
                What follows is a reasonably honest tour of the box: what's in it, what works, what was a bad idea, and
                what I'd do differently if I were rebuilding from scratch tomorrow. None of this is sponsored, none of it
                is a guide, and almost all of it is recoverable from the wreckage of someone else's reddit post.
              </p>
            </div>
          </section>

          {/* Section 2: Hardware */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">2. The Hardware at a Glance</h2>
            <p className="text-muted mb-6 leading-relaxed">
              This is not a from-scratch build. The chassis and motherboard are recycled from a former workstation,
              which is why some of the choices below look more "available" than "optimal." That's the homelab tax.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent2">System Specs</h3>
                <div className="space-y-2 text-muted">
                  <div className="flex justify-between">
                    <span className="font-medium">CPU:</span>
                    <span>Intel Core i7-8700 (6c / 12t, Coffee Lake)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">GPU:</span>
                    <span>NVIDIA Quadro P1000 (4 GB GDDR5)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Memory:</span>
                    <span>46.9 GiB DDR4 (non-ECC)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Boot:</span>
                    <span>Mirrored SATA SSDs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Platform:</span>
                    <span>TrueNAS SCALE 25.04 (Fangtooth)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Uptime:</span>
                    <span>30+ days between reboots</span>
                  </div>
                </div>
              </div>

              <div className="border border-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent2">Honest Notes on the Build</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted text-sm">
                  <li>
                    The i7-8700 is genuinely overkill for a NAS workload. Where it earns its keep is Plex,
                    Immich machine learning passes, and the half-dozen sidecar containers that would otherwise
                    fight over an N100.
                  </li>
                  <li>
                    Memory is non-ECC. ZFS does not <em>require</em> ECC, and the &quot;scrub of death&quot; story is
                    overblown, but I would absolutely take ECC if I were buying the platform new. I'm not, so I don't.
                  </li>
                  <li>
                    The Quadro P1000 is a 4 GB Pascal card. It can NVENC-encode multiple 1080p streams comfortably
                    and one 4K stream at a stretch. Plex's per-card session cap is lifted via the well-known
                    open-source nvidia-patch; without it you're limited to a couple of concurrent sessions
                    regardless of how much headroom the silicon has.
                  </li>
                  <li>
                    The card also runs Immich's CLIP/face recognition jobs and small Ollama models. 4 GB of VRAM
                    keeps me to ~7B parameter models at Q4 quantisation — usable for chat, not useful for anything
                    serious. The LLM stuff is a toy, and I'm honest about that.
                  </li>
                  <li>
                    The case has more drive bays than I have drives. Future me will appreciate this; current me
                    has to look at the empty caddies and resist the urge to fill them.
                  </li>
                </ul>
                <p className="text-xs italic mt-4 text-accent/70">
                  And no, I haven't lost any RAM sticks. The reported figure is just what's left after the GPU
                  and integrated controllers take their cut.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Storage & Network */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">3. Storage &amp; Network</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-accent2/5 to-accent/5 rounded-lg p-6 border border-accent/20">
                <h3 className="text-xl font-semibold mb-4 text-accent2">ZFS Pool &ldquo;Centauri&rdquo;</h3>
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
                      <div className="flex justify-between">
                        <span>Compression:</span>
                        <span className="font-medium">LZ4 (default)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Record size:</span>
                        <span className="font-medium">128K default, 1M on media datasets</span>
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
                      <div className="text-xs text-muted/80 pt-1">
                        Both vdevs are striped into the same pool. Losing either vdev loses the entire pool.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-accent/20 text-muted text-sm space-y-2">
                  <h4 className="font-semibold text-accent mb-1">The honest part about RAID-Z1 on 20 TB drives</h4>
                  <p>
                    Yes, I know. With drives this large, RAID-Z1 is on the spicy end of acceptable. A single
                    drive failure forces a multi-day resilver during which the surviving disks are hammered, and
                    a second failure in that window takes the pool with it. RAID-Z2 would be the textbook answer.
                  </p>
                  <p>
                    I chose Z1 with eyes open: I had the disks on hand, I wanted the extra capacity, and the
                    pool is paired with off-box backups for anything irreplaceable. If I were buying the 20 TB
                    set again today, I'd run RAID-Z2 and accept the capacity hit. This is the single decision
                    most likely to bite me later.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">SSD Cache Devices</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted text-sm">
                    <div>
                      <span className="font-medium">SLOG:</span> ~223 GB SATA SSD
                    </div>
                    <div>
                      <span className="font-medium">L2ARC:</span> ~168 GB SATA SSD
                    </div>
                  </div>
                  <p className="text-xs text-muted/80 mt-3 leading-relaxed">
                    Worth being honest here. A SLOG only accelerates <em>synchronous</em> writes — NFS with sync
                    on, databases, iSCSI with sync writes. Most of what this box does (SMB, async writes from
                    containers) never touches it, so the SLOG mostly sits idle. The L2ARC helps for repeated
                    random reads of metadata and hot blocks, but its index lives in ARC, so an oversized L2ARC
                    on a memory-constrained system can actively hurt. With ~47 GiB of RAM I'm well inside the
                    safe ratio, but I wouldn't add more L2ARC without adding RAM first. Neither device is a
                    magic &quot;make ZFS faster&quot; button.
                  </p>
                  <p className="text-xs text-accent mt-2">
                    Health: all disks green, monthly scrubs clean, no SMART pre-fail flags. Resilver tested by
                    deliberately offlining a 4 TB disk once — took roughly a day, behaved exactly as advertised.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent/5 to-accent2/5 rounded-lg p-6 border border-accent/20">
                <h3 className="text-xl font-semibold mb-4 text-accent2">Network &amp; Access</h3>
                <div className="text-muted space-y-4 text-sm leading-relaxed">
                  <p>
                    The NIC side is a LACP bond of two 2.5 GbE links into a managed switch. LACP balances per-flow,
                    so it doesn't double single-stream throughput &mdash; it just means several concurrent clients
                    (Plex direct-play to one TV, Immich uploads from a phone, an Nextcloud sync from a laptop) stop
                    fighting each other for headroom. For a homelab that's the right trade.
                  </p>
                  <div className="pt-2 border-t border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">Two overlays, two jobs</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="text-accent2 font-medium">Tailscale</span> handles the admin plane:
                        SSH, the TrueNAS UI, Portainer, Glances, anything I don't want on the public internet.
                        MagicDNS plus tagged ACLs means I never type an IP address and the family never sees
                        these endpoints.
                      </li>
                      <li>
                        <span className="text-accent2 font-medium">Cloudflare Tunnels</span> handle the public
                        plane: the small set of services I actually want family members to reach without
                        installing a VPN client &mdash; primarily Immich, Nextcloud, and a couple of share links.
                        No open ports on the router, TLS terminated at Cloudflare, with Access policies in front
                        of the more sensitive ones.
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">What this is not</h4>
                    <p>
                      It is not zero-trust in any formal sense. There's no SIEM, no posture checks, no per-request
                      identity beyond what Cloudflare Access provides. It's &ldquo;sensible defaults plus an overlay
                      network,&rdquo; which is roughly two orders of magnitude better than port-forwarding, and
                      roughly two orders of magnitude less than what a real org would deploy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">4. The Services That Run the Show</h2>
            <div className="space-y-4 mb-6 text-muted leading-relaxed">
              <p>
                TrueNAS SCALE 25.04 (Fangtooth) finally moved the Apps system from k3s to native Docker. If you
                came in during the Bluefin/Cobia era, this is the headline change &mdash; container management is
                noticeably less painful, and most of my workloads now run as straightforward Compose-style apps
                with bind mounts onto dedicated ZFS datasets. The migration from the old k3s charts was not
                seamless and required manual data moves for a couple of apps; budget time for it if you're
                upgrading.
              </p>
              <p>
                Persistent data for every container lives on its own dataset under the pool, which means
                snapshotting, replication, and dataset-level tuning all work cleanly per-app.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Plex</h3>
                  <p className="text-muted text-sm">
                    The original justification for the whole thing. Library is sourced from physical Blu-rays I
                    own, ripped with MakeMKV and re-encoded only when storage pressure demands it. NVENC on the
                    P1000 covers hardware transcoding for clients that won't direct-play. The pain point isn't
                    Plex itself &mdash; it's keeping metadata clean across thousands of files.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Nextcloud</h3>
                  <p className="text-muted text-sm">
                    Self-hosted file sync and basic office stack for the household. Works well enough for daily
                    use; I'd describe its performance as &ldquo;acceptable, not delightful.&rdquo; Backed by a
                    dedicated dataset and a Postgres container, with regular snapshots and an off-box replication
                    target.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Immich</h3>
                  <p className="text-muted text-sm">
                    The closest thing in self-hosted-land to a real Google Photos replacement. Auto-upload from
                    phones, CLIP-based search, face recognition, shared albums. The ML containers run on the
                    P1000 and are the single biggest reason the GPU isn't idle.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">qBittorrent + NordVPN (gluetun)</h3>
                  <p className="text-muted text-sm">
                    qBittorrent runs in a network namespace tied to a gluetun VPN container with a strict kill
                    switch. If the tunnel drops, the client has no network at all rather than falling back to
                    the WAN. Documented this setup in a separate guide; it's the kind of configuration that's
                    obvious in hindsight and very annoying to discover the wrong way.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Sonarr / Radarr / Prowlarr / Bazarr</h3>
                  <p className="text-muted text-sm">
                    The standard *arr stack for library automation: indexers, metadata, subtitles, the lot.
                    Configured to hand files off to qBittorrent and then hardlink (not copy) into the Plex
                    library, which keeps disk usage sane and seeding intact.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Tautulli</h3>
                  <p className="text-muted text-sm">
                    Plex analytics &mdash; who watched what, when, on which device, and whether it had to
                    transcode. Mostly used to confirm I'm not silently CPU-bottlenecking someone, and
                    occasionally to settle &ldquo;did you actually finish that show&rdquo; arguments.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Glances</h3>
                  <p className="text-muted text-sm">
                    Lightweight real-time view of CPU, memory, network, disk and per-container resource use.
                    It's not Grafana, but it answers &ldquo;what's the box doing right now&rdquo; in one URL.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Ollama + Open-WebUI</h3>
                  <p className="text-muted text-sm">
                    Local LLM playground. With 4 GB of VRAM I'm capped at ~7B-parameter models at Q4
                    quantisation, which is enough to be interesting and nowhere near enough to be useful for
                    real work. I keep it around for tinkering and for offline use when I don't want to send
                    something to a hosted model.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Cloudflared</h3>
                  <p className="text-muted text-sm">
                    The Cloudflare Tunnel daemon, fronting the handful of services that need public exposure.
                    Cheaper than a static IP, safer than UPnP, and survives ISP-level CGNAT, which is the actual
                    reason most people end up using it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Philosophy & Lessons */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">5. Lessons, Quirks &amp; Things I Got Wrong</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-accent/20 rounded-lg p-6">
                  <h3 className="font-semibold text-accent2 mb-3">Snapshots aren&rsquo;t backups</h3>
                  <p className="text-muted text-sm">
                    ZFS snapshots are excellent for &ldquo;undo&rdquo; and ransomware resilience, but a snapshot
                    that lives on the same pool as the data dies with the pool. The dataset-level snapshots are
                    replicated off-box on a schedule for anything irreplaceable (documents, photos, configs).
                    Media is not in that bucket &mdash; I can re-rip a Blu-ray, I can&rsquo;t re-shoot a wedding.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-6">
                  <h3 className="font-semibold text-accent2 mb-3">Cooling and acoustics</h3>
                  <p className="text-muted text-sm">
                    Eight spinning drives in a consumer-ish case generate real heat and real noise. My current
                    fan curve is a compromise between &ldquo;disks under 40 &deg;C&rdquo; and &ldquo;not audible
                    from the next room.&rdquo; A proper rackmount chassis would solve the airflow problem and
                    create a new acoustic problem; I&rsquo;ve chosen the one I can live with.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-6">
                  <h3 className="font-semibold text-accent2 mb-3">Cables</h3>
                  <p className="text-muted text-sm">
                    Eight SATA data + eight SATA power, plus the breakout for the SSDs, plus front-panel headers.
                    No reasonable amount of cable management makes the inside of this chassis attractive. I&rsquo;ve
                    stopped pretending otherwise.
                  </p>
                </div>
              </div>

              <div className="border border-accent/20 rounded-lg p-6">
                <h3 className="font-semibold text-accent2 mb-3">The boring stuff that matters most</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted text-sm">
                  <li>
                    <span className="font-medium">Power.</span> Eight HDDs, an SSD pile, a GPU, and a 65 W CPU
                    pull non-trivial wattage even at idle. The whole box sits behind a line-interactive UPS
                    sized for a clean shutdown, not for ride-through. ZFS hates abrupt power loss less than most
                    filesystems, but it still hates it.
                  </li>
                  <li>
                    <span className="font-medium">Updates.</span> SCALE point releases occasionally break or
                    deprecate apps. I read the release notes before clicking upgrade, snapshot the boot pool,
                    and never upgrade the day a release drops.
                  </li>
                  <li>
                    <span className="font-medium">Monitoring.</span> Alert fatigue is real. I get email on
                    SMART warnings, pool degradation, scrub failures, and snapshot replication failures &mdash;
                    not on every container restart. If everything is urgent, nothing is.
                  </li>
                  <li>
                    <span className="font-medium">Documentation.</span> Every non-trivial change goes into a
                    private notes repo with the command, the reason, and a rollback. I have lost too many
                    weekends to past-me's undocumented cleverness.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Roadmap */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">6. Roadmap &amp; Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">
                    Stand up Prometheus + Grafana + node_exporter for proper time-series visibility, replacing
                    Glances as the default dashboard.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">
                    Migrate the next pool expansion to RAID-Z2 and slowly age out the Z1 vdevs. Capacity is
                    cheap; rebuilding from cold backup is not.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">
                    Offload the noisy &ldquo;edge&rdquo; workloads (encoding, downloads) to a small low-power
                    box, leaving the NAS to do storage and serving. Separate post on that one.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">
                    Formalise the 3-2-1 backup story: pool snapshots + off-site replication + an annual cold
                    drive rotation for the genuinely irreplaceable datasets.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">
                    Tighten the Cloudflare Access policies in front of public services and add WebAuthn for the
                    accounts that don&rsquo;t already have it.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">
                    Smooth the Immich experience for non-technical family members &mdash; mostly a UX and
                    onboarding problem at this point, not an infrastructure one.
                  </p>
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
                  Stripped of the hobbyist romance, this is a well-specced single-node NAS running a sensible
                  Docker stack behind two complementary network overlays, with a storage layout that&rsquo;s
                  good enough for the data I have and one decision (Z1 on 20 TB drives) I&rsquo;d undo if I had
                  the disks to spare. It replaces a real amount of monthly subscription spend, gives the family
                  a single place for photos and files, and has been stable enough that I forget it exists for
                  weeks at a time.
                </p>
                <p>
                  It is not enterprise. There is no HA, no second site, no failover. If the building catches
                  fire, the off-site backups are what matter, not the box. That&rsquo;s a feature, not a bug
                  &mdash; the point of a homelab is to be the right size for one person&rsquo;s house, not a
                  scale-model of AWS.
                </p>
                <p>
                  Would I recommend building one? Only if you genuinely enjoy the maintenance. If you don&rsquo;t,
                  pay for the subscription &mdash; it&rsquo;s cheaper than your time. If you do, TrueNAS SCALE
                  is, in 2026, the most reasonable on-ramp I&rsquo;ve found.
                </p>
              </div>
            </div>
          </section>
        </motion.article>
      </div>
    </motion.div>
  );
}
