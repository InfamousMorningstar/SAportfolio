'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { skillDomains } from '@/content/skills';
import { TierBadge } from '@/components/ui/TierBadge';

/*
 * Skills, grouped by engineering domain, each carrying its provenance and —
 * wherever possible — a link to the thing that proves it.
 *
 * This replaces a flat row of ten pills where Kubernetes and Tailwind had
 * equal visual weight and neither pointed anywhere. The rule now is that a
 * technology appears here only if a reader can click through to see it in use,
 * or the entry is honest about being a certification rather than experience.
 */

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-xs text-accent tracking-widest mb-3">CAPABILITIES</div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
            WHAT I CAN
            <br />
            <span className="text-muted-soft">ACTUALLY DO</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            Labelled by how it was learned, and linked to the thing that proves it. Where something
            is a certification rather than experience, it says so &mdash; a list you cannot verify is
            worth less than a shorter one you can.
          </p>
        </motion.div>

        <div className="space-y-14">
          {skillDomains.map((domain, i) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.18) }}
            >
              <div className="border-t border-divider pt-6 grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                    {domain.label}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{domain.blurb}</p>
                </div>

                <ul className="md:col-span-8 space-y-4">
                  {domain.skills.map((skill) => (
                    <li key={skill.name} className="border-t border-divider/60 pt-4 first:border-0 first:pt-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <span className="font-mono text-sm text-foreground font-medium">
                          {skill.name}
                        </span>
                        <TierBadge tier={skill.tier} />
                        {skill.evidence &&
                          (skill.evidence.href.startsWith('http') ? (
                            <a
                              href={skill.evidence.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-xs text-accent hover:text-accent2 transition-colors ml-auto"
                            >
                              {skill.evidence.label} &#8599;
                            </a>
                          ) : (
                            <Link
                              href={skill.evidence.href}
                              className="font-mono text-xs text-accent hover:text-accent2 transition-colors ml-auto"
                            >
                              {skill.evidence.label} &rarr;
                            </Link>
                          ))}
                      </div>
                      {skill.note && (
                        <p className="text-sm text-muted leading-relaxed">{skill.note}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
