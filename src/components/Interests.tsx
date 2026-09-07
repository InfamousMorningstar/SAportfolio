'use client';

import { motion } from 'framer-motion';

/*
 * An editorial index, not a tab strip.
 *
 * This section used to hide three of its four entries behind buttons nobody had
 * a reason to press. It is also the one part of the site that is supposed to
 * read as a person rather than a system, so it deliberately drops the glass
 * cards, blurred blobs and pill tags used everywhere else: rules, numbers and
 * prose only.
 */

const interests = [
  {
    n: '01',
    label: 'Home Lab',
    meta: [
      ['host', 'Lenovo ThinkCentre + custom JBOD'],
      ['array', '8 × 20 TB · RAID-Z2 · 146 TiB raw'],
      ['usable', '~109 TiB · 76% full'],
      ['running', '38 containers'],
      ['access', 'Tailscale (admin) · Cloudflare Tunnel (public)'],
    ],
    body: (
      <>
        <p>
          The whole thing runs on a Lenovo ThinkCentre that somebody, somewhere, wrote off as
          e-waste. The drives don&apos;t fit in it — eight 20 TB disks live in a JBOD I fabricated
          out of steel at my last job, wired back to the host through an LSI SAS HBA in IT mode so
          that ZFS owns the disks directly instead of a RAID controller pretending to. Dual parity,
          about 109 TiB usable, currently 76% full. A full scrub takes just under two days and has
          never found anything it couldn&apos;t repair.
        </p>
        <p>
          On top of it sit 38 containers. Jellyfin and Immich for media and photos, the usual *arr
          stack tidying up after me, Traccar swallowing GPS telemetry for reasons that were
          extremely compelling at the time. The admin surfaces — TrueNAS, SSH, Portainer, logs —
          are reachable only across a Tailscale WireGuard mesh. A short list of things my family
          actually use is published through a Cloudflare Tunnel. Either way there is not one
          inbound port open on the router, which is the only network posture I actually trust.
        </p>
        <p>
          Backups are the part I&apos;d fix first. Photos and configs go to encrypted cloud storage
          once a week, so my worst case is losing seven days of pictures. The media library
          isn&apos;t backed up at all — it&apos;s the one thing I can rebuild, so it&apos;s the one
          thing I let go. There&apos;s no UPS yet either, and the JBOD has to be powered up before
          the host or the array simply isn&apos;t there when it boots. None of that is an accident;
          I just know exactly what it costs me.
        </p>
        <p>
          Formally: storage architecture, capacity planning, container orchestration, secure
          networking and observability, end to end, owned by one person. Informally: a deeply
          over-engineered guarantee that nobody in my family ever loses a photo.
        </p>
      </>
    ),
  },
  {
    n: '02',
    label: 'Gaming',
    meta: [
      ['mostly', 'Apex Legends'],
      ['also', 'Battlefield 6 · DayZ'],
      ['side effect', 'cdndayz.com'],
    ],
    body: (
      <>
        <p>
          I like games that punish hesitation — Apex especially, where the fight is usually decided
          in the second before it actually starts.
        </p>
        <p>
          Somewhere along the way playing turned into building. I run the website and the support
          bot for a DayZ community, which means I now spend considerably more time reading server
          logs and error codes than I do surviving anything. I&apos;m not sure that counts as a
          hobby any more, but I&apos;m also not stopping.
        </p>
      </>
    ),
  },
  {
    n: '03',
    label: 'Physics',
    meta: [
      ['reading', 'general relativity'],
      ['also', 'quantum mechanics · cosmology'],
      ['shipped', 'nothing'],
    ],
    body: (
      <>
        <p>
          General relativity is the closest thing I have to a hobby that produces absolutely
          nothing. I read about it constantly and build with it never.
        </p>
        <p>
          With one exception. I once spent a weekend trying to render a black hole for the top of
          this website — integrating null geodesics per pixel so the far side of the accretion disk
          would lens up over the event horizon the way the real thing does. It never shipped. It was
          the most fun I&apos;ve had writing code I deleted.
        </p>
      </>
    ),
  },
  {
    n: '04',
    label: 'Anime',
    meta: [
      ['for', 'art direction · structure'],
      ['all-time', 'Dragon Ball Z · Demon Slayer · Jujutsu Kaisen'],
    ],
    body: (
      <>
        <p>
          Where I go when I&apos;ve been staring at a terminal too long. I&apos;m there for the art
          direction and the structure more than the plot — the medium gets away with visual choices
          live action can&apos;t afford, and the best of it commits to a single idea harder than
          most films are willing to.
        </p>
        <p>
          It&apos;s also the only thing on this list I don&apos;t try to optimise, measure or
          automate, which is probably why it works as a reset.
        </p>
      </>
    ),
  },
];

export default function Interests() {
  return (
    <section id="interests" className="py-24 px-6 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-foreground mb-8">
            INTERESTS
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Beyond the terminal: four things I do when nobody is paying me to.
          </p>
        </motion.div>

        <ol>
          {interests.map((item, i) => (
            <motion.li
              key={item.n}
              className="border-t border-divider py-10 md:py-14"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.24) }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">

                {/* Index + label + the hard numbers */}
                <div className="md:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-muted-soft">{item.n}</span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                      {item.label}
                    </h3>
                  </div>

                  <dl className="mt-5 space-y-2 font-mono text-xs md:text-sm">
                    {item.meta.map(([key, value], k) => (
                      <div key={k} className="flex gap-3">
                        <dt className="w-24 shrink-0 text-muted-soft">{key}</dt>
                        <dd className="text-muted">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* The actual writing */}
                <div className="md:col-span-8 space-y-4 text-lg md:text-xl font-light leading-relaxed text-muted">
                  {item.body}
                </div>

              </div>
            </motion.li>
          ))}
        </ol>

        {/* Closes the index so the last entry doesn't float. */}
        <div className="border-t border-divider" />

      </div>
    </section>
  );
}
