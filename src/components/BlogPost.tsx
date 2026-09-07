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
import { fieldDots, fieldLines } from '@/lib/decorativeField';

// Computed once at module scope with a fixed seed, so the server and the
// browser agree. Generating these inline during render was impure and is the
// same hydration hazard that bit the Experience section previously.
const DOTS = fieldDots(18, 1011);
const LINES = fieldLines(7, 1012);

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
          pool: tank<br/>
          state: ONLINE<br/>
          scan: scrub repaired 0B in 1 days 21:49:03<br/>
          config:<br/>
          &nbsp;&nbsp;raidz2-0&nbsp;&nbsp;ONLINE&nbsp;&nbsp;0&nbsp;&nbsp;0&nbsp;&nbsp;0<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;8 × 18.2T&nbsp;&nbsp;ONLINE<br/>
          errors: No known data errors<br/>
        </div>

        {/* RAID-Z vdev diagram */}
        <div className="absolute top-1/3 right-20 text-cyan-400/25 font-mono text-xs rotate-[10deg] select-none">
          [vdev 0]&nbsp;raidz2<br/>
          ┌──┬──┬──┬──┬──┬──┬──┬──┐<br/>
          │20│20│20│20│20│20│20│20│<br/>
          └──┴──┴──┴──┴──┴──┴──┴──┘<br/>
          146 TiB raw → ~109 TiB usable<br/>
        </div>

        {/* zfs commands */}
        <div className="absolute bottom-32 left-24 text-emerald-400/25 font-mono text-xs rotate-[-12deg] select-none">
          zfs snapshot tank/photos@weekly<br/>
          zpool scrub tank<br/>
          zpool iostat -v 1<br/>
          sas3flash -list<br/>
        </div>

        {/* Docker compose snippet */}
        <div className="absolute top-1/2 right-12 text-violet-400/25 font-mono text-xs rotate-[8deg] select-none">
          services:<br/>
          &nbsp;&nbsp;jellyfin:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;image: jellyfin/jellyfin<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;devices:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /dev/dri:/dev/dri<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- /mnt/tank/media:/data<br/>
        </div>

        {/* SMART / disk health */}
        <div className="absolute bottom-24 right-1/4 text-amber-300/25 font-mono text-xs rotate-[-8deg] select-none">
          sda&nbsp;WDC WD200EDGZ&nbsp;18.2T&nbsp;sas<br/>
          sdb&nbsp;WDC WD200EDGZ&nbsp;18.2T&nbsp;sas<br/>
          sdc&nbsp;WDC WD200EDGZ&nbsp;18.2T&nbsp;sas<br/>
          sdd&nbsp;WDC WD200EDGZ&nbsp;18.2T&nbsp;sas<br/>
        </div>

        {/* ARC stats */}
        <div className="absolute top-20 right-1/3 text-cyan-300/25 font-mono text-xs rotate-[-4deg] select-none">
          mpt3sas_cm0: log_info(0x31110e03)<br/>
          sd 0:0:4:0: device_block, handle(0x000c)<br/>
          sd 0:0:5:0: device_block, handle(0x000d)<br/>
          task txg_sync blocked for 120 seconds<br/>
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
        {DOTS.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/15 rounded-full animate-pulse"
            style={dot}
          />
        ))}

        {/* Faint connecting "bus" lines */}
        {LINES.map((line, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-teal-400/10 to-transparent animate-pulse"
            style={line}
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
              <span>Published Sep 2025 &middot; verified Sep 2026</span>
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
                    <span className="font-medium">Chassis:</span>
                    <span>Lenovo ThinkCentre + custom JBOD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">CPU:</span>
                    <span>Intel Core i7-8700K (6c / 12t, Coffee Lake)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">GPU:</span>
                    <span>None &mdash; see below</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Memory:</span>
                    <span>46.7 GiB DDR4 (non-ECC)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">HBA:</span>
                    <span>LSI SAS3008, IT mode</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Boot:</span>
                    <span>Single 512 GB NVMe (no redundancy)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Platform:</span>
                    <span>TrueNAS SCALE 26.0.0-BETA</span>
                  </div>
                </div>
              </div>

              <div className="border border-accent/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-accent2">Honest Notes on the Build</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted text-sm">
                  <li>
                    The i7-8700K is genuinely overkill for a NAS workload. Where it earns its keep is
                    transcoding and the three dozen sidecar containers that would otherwise fight over an N100.
                  </li>
                  <li>
                    Memory is non-ECC. ZFS does not <em>require</em> ECC, and the &quot;scrub of death&quot; story is
                    overblown, but I would absolutely take ECC if I were buying the platform new. I'm not, so I don't.
                  </li>
                  <li>
                    <span className="text-accent2 font-medium">There used to be a Quadro P1000 in here.</span> TrueNAS
                    SCALE 25.10 moved to NVIDIA's open GPU kernel modules, which depend on the GSP &mdash; a
                    coprocessor that first appeared in Turing. Pascal doesn't have one, so the card stopped being
                    supported. Not "too old for the driver": a specific architectural dependency introduced by a
                    kernel-module change in a point release.
                  </li>
                  <li>
                    I could have kept it. There are community builds of the legacy proprietary driver for exactly
                    this situation. I chose not to maintain out-of-tree kernel modules against every future TrueNAS
                    update for one 4 GB card, so I pulled it. Transcoding moved to the 8700K's integrated Quick Sync,
                    and the local LLM containers &mdash; which were a toy at 4 GB of VRAM anyway &mdash; were shut down
                    rather than migrated.
                  </li>
                  <li>
                    The drives don't live in the ThinkCentre at all. Eight 20 TB disks sit in a JBOD enclosure I
                    fabricated out of steel, attached over an LSI SAS3008 HBA running IT-mode firmware so ZFS
                    addresses the disks directly. Hardware RAID in front of ZFS is worse than useless &mdash; it hides
                    exactly the information ZFS needs to do its job.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Storage & Network */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-accent">3. Storage &amp; Network</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-accent2/5 to-accent/5 rounded-lg p-6 border border-accent/20">
                <h3 className="text-xl font-semibold mb-4 text-accent2">ZFS Pool &ldquo;tank&rdquo;</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Pool Overview</h4>
                    <div className="space-y-1 text-muted text-sm">
                      <div className="flex justify-between">
                        <span>Raw capacity:</span>
                        <span className="font-medium">146 TiB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Usable:</span>
                        <span className="font-medium">~109 TiB</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Allocated:</span>
                        <span className="font-medium">111 TiB raw &mdash; 76% full</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fragmentation:</span>
                        <span className="font-medium">37%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Compression:</span>
                        <span className="font-medium">LZ4 (default)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-accent mb-2">Vdev Configuration</h4>
                    <div className="space-y-2 text-muted text-sm">
                      <div>
                        <span className="font-medium">One vdev:</span> 8 × 20 TB in RAID-Z2
                      </div>
                      <div>
                        <span className="font-medium">Parity:</span> dual &mdash; any two disks may fail
                      </div>
                      <div className="text-xs text-muted/80 pt-1">
                        Two other pools exist: <span className="font-mono">boot-pool</span> on a single NVMe,
                        and <span className="font-mono">app-pool</span> on a single 500 GB SSD holding
                        container state. Neither is redundant. More on that below.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-accent/20 text-muted text-sm space-y-2">
                  <h4 className="font-semibold text-accent mb-1">How this pool came to be RAID-Z2</h4>
                  <p>
                    An earlier version of this post argued that the pool's original layout &mdash; two RAID-Z1
                    vdevs, one of them 20 TB drives &mdash; was the single decision most likely to bite me. With
                    disks that large, a single failure forces a multi-day resilver during which the survivors get
                    hammered, and a second failure in that window takes everything. I wrote that RAID-Z2 was the
                    textbook answer and that I'd run it if I bought the set again.
                  </p>
                  <p>
                    So I did. The pool you're reading about is that rebuild.
                  </p>
                  <p>
                    The important detail is that it could not be done gradually. ZFS cannot convert a RAID-Z1 vdev
                    to RAID-Z2, cannot merge two vdevs into one wider vdev, and cannot remove a raidz vdev from a
                    pool. Replacing disks in place would have grown capacity while preserving the exact topology I
                    was trying to escape. The only route to one 8-wide RAID-Z2 was to destroy the pool and build it
                    again.
                  </p>
                  <p>
                    Which meant deciding, concretely, what was worth carrying across. Photos and configuration got
                    backed up. The media library did not &mdash; it's the one category I can rebuild, so it's the one
                    category I let go. That's the same classification I'd written down months earlier as a
                    principle; this is the week it cost me something.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-accent/20">
                  <h4 className="font-semibold text-accent mb-2">No SLOG, no L2ARC &mdash; on purpose</h4>
                  <p className="text-xs text-muted/80 mt-3 leading-relaxed">
                    There are no cache or log devices attached to this pool, and for this workload that's the
                    correct answer rather than an omission. A SLOG only accelerates <em>synchronous</em> writes
                    &mdash; NFS with sync on, databases, iSCSI configured for sync. Almost everything this box does
                    is SMB and async writes from containers, none of which would ever touch it. An L2ARC helps
                    repeated random reads, but its index lives in ARC, so adding one to a memory-constrained
                    system can actively make things worse. Neither device is a &quot;make ZFS faster&quot; button,
                    and buying one to look thorough is how you end up with an SSD that does nothing.
                  </p>
                  <p className="text-xs text-muted/80 mt-2 leading-relaxed">
                    The one workload here that <em>would</em> benefit is the 1 TB zvol exported over iSCSI. That's the
                    honest counter-argument to the paragraph above, and it's the trade I've accepted for now.
                  </p>
                  <p className="text-xs text-accent mt-2">
                    Health as of September 2026: all eight disks ONLINE, zero read, write or checksum errors. The
                    last full scrub took 1 day 21 hours and repaired nothing, because there was nothing to repair.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent/5 to-accent2/5 rounded-lg p-6 border border-accent/20">
                <h3 className="text-xl font-semibold mb-4 text-accent2">Network &amp; Access</h3>
                <div className="text-muted space-y-4 text-sm leading-relaxed">
                  <p>
                    The network side is deliberately unglamorous: a single 2.5 GbE link into an unmanaged switch,
                    behind an ISP-supplied router whose firewall rules I don't own. No VLANs, no LAG, no
                    segmentation. There is exactly one interesting thing about it, and it's a bottleneck.
                  </p>
                  <p>
                    Eight CMR drives in RAID-Z2 will read sequentially far faster than 2.5 GbE can carry
                    &mdash; call it 300 MB/s at the wire, against an array that comfortably beats that. So for every
                    transfer on this network, <span className="text-accent2">the constraint is the NIC, not the
                    disks</span>. The WAN is 3 Gbps symmetric, which is also faster than the host link, meaning this
                    machine cannot saturate its own internet connection. The upgrade path is obvious &mdash; 10 GbE
                    and a managed switch &mdash; and I haven't taken it, because nothing I actually do here is
                    currently limited by waiting on a file.
                  </p>
                  <div className="pt-2 border-t border-accent/20">
                    <h4 className="font-semibold text-accent mb-2">Two overlays, two jobs</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <span className="text-accent2 font-medium">Tailscale</span> handles the admin plane:
                        SSH, the TrueNAS UI, Portainer, Dozzle, anything I don't want on the public internet.
                        MagicDNS plus tagged ACLs means I never type an IP address and the family never sees
                        these endpoints.
                      </li>
                      <li>
                        <span className="text-accent2 font-medium">Cloudflare Tunnels</span> handle the public
                        plane: the small set of services I actually want family to reach without installing a VPN
                        client &mdash; Jellyfin, its request front-end, and Wizarr for invitations. No open ports on
                        the router, TLS terminated at Cloudflare.
                      </li>
                      <li>
                        Worth being precise, because these get conflated: <span className="text-accent2">zero open
                        ports is not the same as nothing exposed.</span> A tunnel is an outbound connection, so the
                        router genuinely has no inbound rules &mdash; and three services are genuinely reachable from
                        the public internet, protected by their own authentication and nothing else.
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
                  <h3 className="font-semibold text-accent2 mb-2">Jellyfin (and Plex, for now)</h3>
                  <p className="text-muted text-sm">
                    Plex was the original justification for the whole box. It's being wound down: pricing and
                    policy changes made it a poor thing to keep building against, so Jellyfin is now the server
                    that's actually published, and Plex goes local-only shortly. Both are running simultaneously
                    while the migration finishes. Transcoding is handled by the 8700K's integrated Quick Sync
                    since the discrete GPU came out.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Filebrowser</h3>
                  <p className="text-muted text-sm">
                    File access for the household. This slot used to be Nextcloud, which I retired &mdash; it wanted
                    a Postgres instance, a dedicated dataset and a meaningful share of the maintenance budget to
                    deliver something I was mostly using as a file browser. So now it's a file browser. Not every
                    service needs to be the full-fat option.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">Immich</h3>
                  <p className="text-muted text-sm">
                    The closest thing in self-hosted-land to a real Google Photos replacement. Auto-upload from
                    phones, CLIP-based search, face recognition, shared albums. Its machine-learning containers
                    used to be the main justification for having a GPU at all; with the card gone the indexing
                    passes are slower, which nobody but me has noticed.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">qBittorrent, VPN-bound</h3>
                  <p className="text-muted text-sm">
                    The client runs inside an image with the VPN built in and a strict kill switch: if the tunnel
                    drops, it has no network at all rather than quietly falling back to the WAN. This used to be a
                    separate gluetun sidecar with qBittorrent joined to its network namespace &mdash; the integrated
                    image does the same job with one fewer moving part. It is the only container here with an
                    egress path of its own, and that's the entire point.
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
                  <h3 className="font-semibold text-accent2 mb-2">Homarr, Dozzle, Scrutiny</h3>
                  <p className="text-muted text-sm">
                    The observability layer, such as it is: Homarr as the dashboard, Dozzle streaming container
                    logs, Scrutiny watching SMART data across the array. It is not a metrics stack &mdash; there's no
                    Prometheus, no Grafana, no time-series history. What actually does the work is TrueNAS emailing
                    me when something is wrong, which is unglamorous and has caught every real fault so far.
                  </p>
                </div>

                <div className="border border-accent/20 rounded-lg p-4">
                  <h3 className="font-semibold text-accent2 mb-2">CDN_Captain</h3>
                  <p className="text-muted text-sm">
                    A retrieval-first Discord bot I built for a client's gaming community, running here in Docker
                    rather than on a VPS because this box was already doing enough to absorb it. There used to be
                    an Ollama and Open-WebUI pairing in this slot too; it went away with the GPU, and I didn't
                    miss it &mdash; 4 GB of VRAM only ever made it a toy.
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
                    that lives on the same pool as the data dies with the pool. What actually leaves the box is a
                    weekly encrypted sync of photos and configuration to cloud storage &mdash; which means my real
                    RPO is seven days, and I&rsquo;d rather write that number down than imply something continuous.
                    Media isn&rsquo;t in that bucket at all: I can re-rip a Blu-ray, I can&rsquo;t re-shoot a wedding.
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
                    <span className="font-medium">Power is the weakest layer here, and I know it.</span> There is
                    no UPS. Eight spinning disks and an active pool are exposed to abrupt loss, and with no SLOG
                    the sync writes that do happen land in the in-pool ZIL. Worse, the JBOD runs on its own PSU
                    with no sequencing logic &mdash; it has to be powered up before the host, or the HBA enumerates
                    an empty bus. So nothing here recovers from an outage unattended. If the power blips while
                    I'm away, it stays down until I'm standing in front of it. The fix is a UPS sized for both
                    supplies plus NUT integration, and it is the next thing I'd spend money on.
                  </li>
                  <li>
                    <span className="font-medium">Updates.</span> Container images are largely pinned on the
                    TrueNAS-managed side and tracked by Watchtower on the hand-rolled side &mdash; a split I'd
                    tighten if this were anyone else's system. The OS itself is a different story: I opted into
                    the Early Adopter release train and discovered it's a one-way door. Once you're running a
                    build newer than stable, the General channel isn't selectable any more; going back means a
                    clean install and a config restore. I'm on a beta release of TrueNAS 26 because that's where
                    I put myself, not because I chose it release by release.
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
                    Stand up Prometheus + Grafana + node_exporter for proper time-series visibility. Right now I
                    can tell you what the box is doing, but not what it was doing at 3am last Tuesday.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">
                    Deal with capacity before it deals with me. The pool is 76% full and ZFS gets meaningfully
                    worse at allocation past about 80%, so the clock is already running on either pruning or a
                    wider vdev.
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
                    Get to an actual 3-2-1. Today it&rsquo;s closer to 2-2-1: the pool, plus one weekly cloud copy
                    of the irreplaceable subset. That&rsquo;s a defensible posture for a household and it is not
                    the thing I keep claiming it is.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <p className="text-muted">
                    Put something in front of the publicly-tunnelled services besides their own login forms.
                    Cloudflare Access is the obvious candidate and the reason I haven&rsquo;t done it is friction
                    for the non-technical people who use them, which is a reason and not an excuse.
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
