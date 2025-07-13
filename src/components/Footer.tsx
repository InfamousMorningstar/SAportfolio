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
 * 📁 File    : Footer.tsx
 * 🕒 Updated : Jun 12, 2025
 */
/*
 * ███╗░░░███╗░█████╗░██████╗░██████╗░██╗███╗░░██╗░██████╗░████████╗░█████╗░██████╗░
 * ████╗░████║██╔══██╗██╔══██╗██╔══██╗██║████╗░██║██╔════╝░╚══██╔══╝██╔══██╗██╔══██╗
 * ██╔████╔██║███████║██████╔╝██████╔╝██║██╔██╗██║██║░░██╗░░░░██║░░░███████║██████╔╝
 * ██║╚██╔╝██║██╔══██║██╔═══╝░██╔═══╝░██║██║╚████║██║░░╚██╗░░░██║░░░██╔══██║██╔═══╝░
 * ██║░╚═╝░██║██║░░██║██║░░░░░██║░░░░░██║██║░╚███║╚██████╔╝░░░██║░░░██║░░██║██║░░░░░
 * ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░░░░╚═╝╚═╝░░╚══╝░╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░░░░
 *
 * 👤 Author  : Salman Ahmad
 * 🌐 URL     : https://portfolio.ahmxd.net
 * 📧 Contact : s.ahmad0147@gmail.com
 * 📝 License : MIT (Educational/Personal Use)
 * 📁 File    : Footer.tsx
 * 🕒 Updated : Jul 11, 2025
 */

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
 * 📁 File    : Footer.tsx
 * 🕒 Updated : Jul 11, 2025
 */

'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <footer className="w-full z-50 bg-black/40 backdrop-blur-xl border-t border-white/20 rounded-t-3xl transition-none text-neutral-300 text-sm overflow-hidden">
      {/* Glassy background overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/60 to-neutral-900/40 pointer-events-none" />
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern bg-grid" />
      </div>

      {/* Floating accent dots */}
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-6 left-12 w-1 h-1 bg-accent rounded-full"
        style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
      />
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: [0.77, 0, 0.175, 1], delay: 2 }}
        className="absolute bottom-8 right-16 w-1.5 h-1.5 bg-accent2 rounded-full"
        style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
      />
      <motion.div
        animate={{ y: [0, -6, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: [0.77, 0, 0.175, 1], delay: 4 }}
        className="absolute top-12 right-24 w-0.5 h-0.5 bg-secondary rounded-full"
        style={{ backfaceVisibility: 'hidden', willChange: 'opacity, transform' }}
      />

      {/* Signature, Motto, and Tech Info */}
      <div className="relative max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Signature Left */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p className="font-mono text-neutral-300 text-sm leading-tight">
            — Salman Ahmad · ahmxd.net · © {currentYear} —
          </p>
        </div>

        {/* Motto Center */}
        <div className="text-center w-full md:w-1/3">
          <p className="italic text-neutral-300 font-medium tracking-wide text-sm">
            <span className="text-accent/80">Aut viam inveniam aut faciam</span>{' '}
            
          </p>
          <p className="text-xs italic text-neutral-400 leading-tight">
            <span className="text-neutral-500">»</span> I shall either find a way or make one.
          </p>
        </div>

        {/* Tech Stack Right */}
        <div className="text-right w-full md:w-1/3">
          <p className="text-sm md:text-xs text-neutral-400 font-semibold italic">
            Built using <span className="text-accent">Next.js 15</span>, <span className="text-accent2">Tailwind CSS</span>, <span className="text-secondary">Framer Motion</span>, <span className="text-accent">TypeScript</span>, and <span className="text-accent2">Lucide Icons</span> — deployed on <span className="text-secondary">Vercel</span>.
          </p>
          <p className="text-[10px] text-neutral-600">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent2/60 to-transparent my-1" />
      </div>

      {/* Legal Notice */}
      <div className="w-full px-4 pb-3 pt-1">
        <div className="max-w-6xl mx-auto text-xs text-neutral-500 leading-snug font-sans text-center">
          This website and its source code are protected under the{' '}
          <strong className="text-neutral-300 font-semibold">Copyright Act, R.S.C., 1985, c. C-42 (Canada)</strong>.
          {' '}Unauthorized reproduction, redistribution, or modification is strictly prohibited. The{' '}
          <strong className="text-neutral-300 font-semibold">Digital Millennium Copyright Act (DMCA)</strong> and international IP treaties may also apply.{' '}
          <strong className="text-neutral-300 font-semibold">All Rights Reserved.</strong> <span className="italic">Unauthorized use is prohibited.</span>{' '}
          For licensing or legal inquiries, contact: <span className="font-mono text-neutral-300 px-1">s.ahmad0147@gmail.com</span> with subject line <strong className="text-accent">"PERMISSION REQUEST"</strong>.
        </div>
      </div>
    </footer>
  );
}
