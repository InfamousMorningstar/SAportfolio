'use client';

import { FaEnvelope, FaPrint, FaArrowLeft, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

import { profile, roles, education, certifications } from '@/content/career';
import { resumeProjects } from '@/content/projects';
import { skillDomains } from '@/content/skills';
import { caseStudies } from '@/content/case-studies';
import { incidents } from '@/content/incidents';

/*
 * Generated resume.
 *
 * Every line below is derived from the same content model the site renders
 * from — career.ts, projects.ts, skills.ts, case-studies.ts. Nothing is typed
 * twice, so adding a project or correcting a date updates the resume in the
 * same commit, and the two cannot drift apart the way they had (the site said
 * Circle K ended in 2023 while the resume said 2024, and the resume claimed a
 * Kubernetes cluster that never existed).
 *
 * PDF output is the browser's own print pipeline rather than a bundled
 * renderer: it is a static export, print CSS already gives an accurate A4
 * layout, and shipping a PDF library to reproduce what Ctrl+P does correctly
 * would be weight for no gain.
 */

// Certifications and hard-earned credentials read differently on a resume;
// keep the tiering honest by showing what each one actually is.
const TIER_NOTE: Record<string, string> = {
  client: 'Client',
  infrastructure: 'Personal infra',
  lab: 'Lab',
  learning: 'Learning',
  professional: 'Professional',
  production: 'Production',
};

export default function ResumePage() {
  const flagship = caseStudies.find((c) => c.slug === 'centauri');

  return (
    <div className="min-h-screen bg-white text-black print:p-0 p-8 font-sans selection:bg-black selection:text-white">
      {/* Controls — never printed */}
      <div className="max-w-[21cm] mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-black transition-colors"
        >
          <FaArrowLeft /> Back to Portfolio
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-400 hidden sm:inline">
            Generated from site content
          </span>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg"
          >
            <FaPrint /> Download / Print PDF
          </button>
        </div>
      </div>

      <div className="max-w-[21cm] mx-auto bg-white shadow-2xl print:shadow-none print:w-full p-[1.6cm] relative">
        {/* Header */}
        <header className="border-b-2 border-black pb-5 mb-6">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-1 text-center">
            {profile.name}
          </h1>
          <p className="text-center text-sm font-bold uppercase tracking-widest mb-1">
            {profile.headline}
          </p>
          <p className="text-center text-xs text-zinc-500 mb-4">{profile.subhead}</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-zinc-600">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt size={9} /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="hover:text-black flex items-center gap-1">
              <FaEnvelope size={9} /> {profile.email}
            </a>
            <span className="flex items-center gap-1">
              <FaPhone size={9} /> {profile.phone}
            </span>
            <a
              href={`https://${profile.site}`}
              className="hover:text-black flex items-center gap-1"
            >
              <FaGlobe size={9} /> {profile.site}
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-base font-black uppercase border-b border-black mb-2">Summary</h2>
          <p className="text-sm text-zinc-700 text-justify leading-snug">{profile.summary}</p>
        </section>

        <div className="grid grid-cols-[1fr_230px] gap-7">
          {/* ---------------- LEFT ---------------- */}
          <main className="flex flex-col gap-5">
            {/* Flagship infrastructure — derived from the case study */}
            {flagship && (
              <section>
                <h2 className="text-base font-black uppercase border-b border-black mb-3">
                  Infrastructure
                </h2>
                <div className="mb-1 flex justify-between items-baseline">
                  <h3 className="font-bold text-sm">
                    {flagship.title} — self-hosted infrastructure lab
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-500">{flagship.period}</span>
                </div>
                <p className="text-[11px] text-zinc-500 italic mb-1.5">
                  {profile.site}/work/{flagship.slug}
                </p>
                <ul className="list-disc list-outside ml-4 text-sm text-zinc-700 space-y-1">
                  <li>{flagship.summary}</li>
                  {flagship.decisions?.slice(0, 2).map((d) => (
                    <li key={d.question}>
                      <span className="font-semibold">{d.chose}.</span> {d.reasoning.split('. ')[0]}.
                    </li>
                  ))}
                  {incidents
                    .filter((i) => i.system === flagship.slug)
                    .map((i) => (
                      <li key={i.id}>
                        <span className="font-semibold">{i.rootCause.split('.')[0]}.</span>{' '}
                        {i.lesson.split('. ')[0]}.
                      </li>
                    ))}
                  {flagship.performance?.slice(0, 2).map((m) => (
                    <li key={m.metric}>
                      {m.metric}: {m.value}.
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Projects — derived */}
            <section>
              <h2 className="text-base font-black uppercase border-b border-black mb-3">
                Selected Projects
              </h2>
              {resumeProjects.map((project) => (
                <div key={project.slug} className="mb-3.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">
                      {project.title}
                      <span className="ml-2 text-[10px] font-mono font-normal uppercase text-zinc-500">
                        {TIER_NOTE[project.tier]}
                      </span>
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {project.tech.slice(0, 3).join(' • ')}
                    </span>
                  </div>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-[11px] text-blue-600 hover:underline block mb-1"
                    >
                      {project.demo.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </a>
                  )}
                  <ul className="list-disc list-outside ml-4 text-sm text-zinc-700 space-y-0.5">
                    {(project.resumeBullets ?? [project.description]).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Employment — derived */}
            <section>
              <h2 className="text-base font-black uppercase border-b border-black mb-3">
                Employment
              </h2>
              {roles.map((role) => (
                <div key={role.id} className="mb-3.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-sm">{role.title}</h3>
                    <span className="text-[11px] font-mono text-zinc-500">{role.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs font-semibold text-zinc-700">{role.company}</span>
                    <span className="text-[11px] text-zinc-500">{role.location}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-sm text-zinc-700 space-y-0.5">
                    {role.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </main>

          {/* ---------------- RIGHT ---------------- */}
          <aside className="flex flex-col gap-5">
            <section>
              <h2 className="text-base font-black uppercase border-b border-black mb-3">
                Education
              </h2>
              {education.map((study) => (
                <div key={study.id} className="mb-3">
                  <h3 className="font-bold text-xs leading-snug">{study.credential}</h3>
                  <p className="text-[11px] text-zinc-600">{study.institution}</p>
                  <p className="text-[11px] font-mono text-zinc-500">{study.period}</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Focus: {study.focus}</p>
                </div>
              ))}
            </section>

            {/* Skills — derived, and honest about tier */}
            <section>
              <h2 className="text-base font-black uppercase border-b border-black mb-3">
                Technical Skills
              </h2>
              {skillDomains.map((domain) => {
                // Learning-tier entries are listed separately rather than mixed
                // in, so nothing implies more depth than exists.
                const solid = domain.skills.filter((s) => s.tier !== 'learning');
                if (solid.length === 0) return null;
                return (
                  <div key={domain.id} className="mb-2.5">
                    <h3 className="text-[10px] font-bold uppercase text-zinc-500 mb-0.5">
                      {domain.label}
                    </h3>
                    <p className="text-[11px] text-zinc-700 leading-snug">
                      {solid.map((s) => s.name).join(', ')}
                    </p>
                  </div>
                );
              })}
              {(() => {
                const learning = skillDomains
                  .flatMap((d) => d.skills)
                  .filter((s) => s.tier === 'learning');
                if (learning.length === 0) return null;
                return (
                  <div className="mb-2.5">
                    <h3 className="text-[10px] font-bold uppercase text-zinc-500 mb-0.5">
                      Currently Learning
                    </h3>
                    <p className="text-[11px] text-zinc-700 leading-snug">
                      {learning.map((s) => s.name).join(', ')}
                    </p>
                  </div>
                );
              })()}
            </section>

            <section>
              <h2 className="text-base font-black uppercase border-b border-black mb-3">
                Certifications
              </h2>
              <ul className="space-y-1.5">
                {certifications.map((cert) => (
                  <li key={cert.name} className="text-[11px]">
                    <strong className="block text-black leading-snug">{cert.name}</strong>
                    {cert.issuer && <span className="text-zinc-500">{cert.issuer}</span>}
                    {cert.status && (
                      <span className="text-zinc-500 italic">
                        {cert.issuer ? ' · ' : ''}
                        {cert.status}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <section className="print:hidden">
              <h2 className="text-base font-black uppercase border-b border-black mb-3">Links</h2>
              <ul className="space-y-1 text-[11px]">
                <li>
                  <a href={`https://${profile.github}`} className="text-blue-600 hover:underline">
                    {profile.github}
                  </a>
                </li>
                <li>
                  <a href={`https://${profile.linkedin}`} className="text-blue-600 hover:underline">
                    {profile.linkedin}
                  </a>
                </li>
              </ul>
            </section>
          </aside>
        </div>

        <div className="mt-8 border-t border-dashed border-zinc-300 pt-3 text-center">
          <p className="text-[9px] text-zinc-400 font-mono">
            Generated from {profile.site} — architecture, decisions and incidents documented in full
            at {profile.site}/work
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 1cm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
