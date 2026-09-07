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
 * 📁 File    : CentauriPlexPost.tsx
 * 🕒 Updated : Oct 30, 2025
 */
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

import { fieldDots, fieldLines } from '@/lib/decorativeField';

// Seeded at module scope: same output on server and client, no hydration risk.
const DOTS = fieldDots(20, 2011);
const LINES = fieldLines(8, 2012, { delay: 3, widthBase: 50, widthSpread: 100 });

interface CentauriPlexPostProps {
  onBack?: () => void;
}

export default function CentauriPlexPost({ onBack }: CentauriPlexPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
      className="min-h-screen py-20 relative bg-gradient-to-br from-slate-950 via-blue-950/40 to-cyan-950/30 overflow-hidden"
    >
      {/* Space/Automation Background Theme */}
      <div className="absolute inset-0 opacity-4">
        {/* Constellation & Star Coordinates */}
        <div className="absolute top-16 right-20 text-cyan-400/15 font-mono text-xs rotate-12 select-none">
          ⭐ α Centauri A: RA 14h 39m<br/>
          ⭐ α Centauri B: Dec −60° 50′<br/>
          Distance: 4.37 light-years<br/>
          System: Triple star<br/>
        </div>
        
        {/* Python/Automation Scripts */}
        <div className="absolute top-1/4 left-16 text-blue-400/20 font-mono text-xs rotate-[-8deg] select-none">
          def check_inactive_users():<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;if days_inactive &gt; 30:<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;remove_user(user_id)<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;send_notification()<br/>
        </div>
        
        {/* Cron Jobs */}
        <div className="absolute bottom-32 left-24 text-purple-400/15 font-mono text-xs rotate-15 select-none">
          */5 * * * * check_new_users.py<br/>
          0 3 * * * user_manager.py<br/>
          # cron: 0 3 * * *<br/>
        </div>
        
        {/* API Endpoints */}
        <div className="absolute top-1/3 right-16 text-cyan-400/20 font-mono text-xs rotate-[-15deg] select-none">
          GET  /api/users<br/>
          POST /api/notifications<br/>
          DELETE /api/v2/sharings/{'{'}id{'}'}<br/>
          ✓ 200 OK<br/>
        </div>
        
        {/* Database Schema */}
        <div className="absolute bottom-1/3 right-32 text-blue-400/15 font-mono text-xs rotate-8 select-none">
          CREATE TABLE user_activity (<br/>
          &nbsp;&nbsp;user_id INTEGER PRIMARY KEY,<br/>
          &nbsp;&nbsp;last_activity TEXT,<br/>
          &nbsp;&nbsp;is_protected INTEGER<br/>
          );<br/>
        </div>
        
        {/* System Architecture */}
        <div className="absolute top-20 left-1/4 text-purple-400/20 text-sm rotate-[-12deg] select-none">
          ┌─[Tautulli]────[API]<br/>
          │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
          ├─[Scripts]────[Cron]<br/>
          │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br/>
          └─[Plex.tv]───[Users: 61]<br/>
        </div>
        
        {/* SMTP/Email Flow */}
        <div className="absolute bottom-24 right-1/4 text-cyan-400/15 font-mono text-xs rotate-[-6deg] select-none">
          SMTP → Gmail → TLS:587<br/>
          ✉ Welcome | Warning | Removal<br/>
          Status: ✅ Operational<br/>
        </div>
        
        {/* Automation Stats */}
        <div className="absolute top-1/2 left-12 text-blue-300/20 text-sm rotate-12 select-none">
          🤖 Status: retired<br/>
          👥 Active Users: 61<br/>
          🛡️ Protected: 11<br/>
          ⏱️ Threshold: 30 days<br/>
        </div>
      </div>

      {/* Animated Stars/Particles (Automation Tasks) */}
      <div className="absolute inset-0 overflow-hidden">
        {DOTS.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/10 rounded-full animate-pulse"
            style={dot}
          />
        ))}

        {/* Constellation Connection Lines */}
        {LINES.map((line, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"
            style={line}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Back Button */}
        {onBack && (
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
            whileHover={{ x: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:animate-pulse" />
            Back to SYSADMIN_ARCHIVES
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
            <span className="text-cyan-400">Centauri</span> (Plex) Automation System
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Published Oct 2025 &middot; system retired 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-400">◼ Retired</span>
            </div>
          </div>

          {/* Retirement notice. The post below is written in the present tense
              because it was true when written; this system no longer runs. */}
          <div className="mb-8 border-l-2 border-amber-400/60 bg-amber-400/5 p-5 rounded-r-lg">
            <h2 className="font-mono text-sm font-bold text-amber-400 mb-2 tracking-wide">
              STATUS: RETIRED
            </h2>
            <div className="text-muted text-sm leading-relaxed space-y-3">
              <p>
                This system no longer runs. It is documented here because building it and deciding to
                switch it off were both worth writing down, but everything below is written in the
                present tense and describes a machine that has been turned off.
              </p>
              <p>
                It was retired for two independent reasons. The first is that it was built against the
                Plex.tv API &mdash; a third-party interface I did not control &mdash; and when Plex changed
                its pricing and policy, continuing to build against it stopped making sense. Roughly all
                of the integration work became worthless in an afternoon, which is the most useful lesson
                this project ever produced.
              </p>
              <p>
                The second reason is less obvious and matters more. This automation existed to solve
                problems created by scale: detecting inactivity, warning people, removing accounts I had
                no personal relationship with. When the userbase came back down to close friends and
                family, that problem stopped existing. I did not rewrite it against Jellyfin&rsquo;s API;
                I replaced the parts still worth having with maintained off-the-shelf tools and deleted
                the rest. Keeping software alive after its requirement has gone is its own kind of debt.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['Python', 'Automation', 'Plex', 'Tautulli', 'Cron', 'SQLite', 'DevOps', 'API Integration'].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20"
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
          {/* Section 1: System Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">1. System Overview</h2>
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                My Centauri Plex Automation System is a production-grade user lifecycle management platform that I built to handle
                everything from welcoming new users to automated cleanup of inactive accounts. What started as a simple
                script grew into a lifecycle suite that ran for 61 users with almost no day-to-day intervention.
              </p>
              <p>
                I built this system with Python, integrated it with Tautulli for activity tracking, and leveraged the Plex.tv API for user
                management. It runs autonomously via cron jobs on my server, requiring virtually zero manual intervention.
              </p>
            </div>

            {/* Key Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="border border-cyan-400/20 rounded-lg p-4">
                <div className="text-cyan-400 font-mono text-2xl font-bold">61</div>
                <div className="text-muted text-sm">Active Plex Users</div>
              </div>
              <div className="border border-purple-400/20 rounded-lg p-4">
                <div className="text-purple-400 font-mono text-2xl font-bold">4</div>
                <div className="text-muted text-sm">Python Scripts</div>
              </div>
              <div className="border border-blue-400/20 rounded-lg p-4">
                <div className="text-blue-400 font-mono text-2xl font-bold">30d</div>
                <div className="text-muted text-sm">Inactivity Threshold</div>
              </div>
            </div>
          </section>

          {/* Section 2: What's Automated */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">2. Automated Workflows</h2>
            <div className="border border-cyan-400/20 rounded-lg p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 text-xl">✅</span>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">New User Detection</h3>
                  <p className="text-muted text-sm">Checks every 5 minutes via cron. New users receive instant welcome emails with complete onboarding guide.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 text-xl">✅</span>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Activity Tracking</h3>
                  <p className="text-muted text-sm">Daily updates from Tautulli API monitoring all user watch history and play counts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 text-xl">✅</span>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Inactivity Warnings</h3>
                  <p className="text-muted text-sm">Automated emails sent at 27 days of inactivity (3-day warning before removal).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 text-xl">✅</span>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Automated Removal</h3>
                  <p className="text-muted text-sm">Users removed from Plex after 30 days via DELETE /api/v2/sharings API endpoint.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 text-xl">✅</span>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Email Notifications</h3>
                  <p className="text-muted text-sm">Both admin and removed users receive professional notifications with re-join instructions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-emerald-400 text-xl">✅</span>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-300">Protected User Whitelist</h3>
                  <p className="text-muted text-sm">11 friends/family members permanently protected from automated removal.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">3. System Architecture</h2>
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                My system consists of four core Python scripts that I orchestrated with cron jobs, backed by a SQLite database
                for state management, and integrated with Tautulli and Plex.tv APIs.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-cyan-400/20 rounded-lg p-6 mt-6 font-mono text-sm overflow-x-auto">
              <pre className="text-cyan-300">
{`┌─────────────────────────────────────────────────────────┐
│              TAUTULLI SERVER (Activity Monitor)         │
│  API: http://192.168.1.xxx:8181/api/v2                │
└────────────────┬────────────────────────────────────────┘
                 │ API Calls (every 5 min & daily)
                 ▼
┌─────────────────────────────────────────────────────────┐
│            AUTOMATION SCRIPTS (Python)                  │
│                                                         │
│  check_new_users.py  │  user_manager.py                │
│  (Every 5 minutes)   │  (Daily at 3 AM)                │
│                                                         │
│  • Detect new users  │  • Update activity              │
│  • Send welcome      │  • Send warnings                │
│  • Notify admin      │  • Remove inactive              │
│                                                         │
│  Database: user_activity.db (SQLite)                   │
└────┬──────────────────────────────┬───────────────────┘
     │                               │
     │ SMTP (Gmail)                  │ Plex API
     ▼                               ▼
┌──────────────┐         ┌────────────────────────────┐
│ EMAIL SYSTEM │         │     PLEX.TV API            │
│              │         │  DELETE /api/v2/sharings   │
│ • Welcome    │         │  (Complete unfriending)    │
│ • Warnings   │         │                            │
│ • Removals   │         │                            │
└──────────────┘         └────────────────────────────┘`}
              </pre>
            </div>
          </section>

          {/* Section 4: Core Scripts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">4. Core Scripts Breakdown</h2>
            
            <div className="space-y-6">
              {/* user_manager.py */}
              <div className="border border-blue-400/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">user_manager.py — Main Cleanup Engine</h3>
                <div className="space-y-2 text-muted">
                  <p><span className="text-cyan-400 font-mono">Location:</span> /mnt/app-pool/config/tautulli/scripts/</p>
                  <p><span className="text-cyan-400 font-mono">Schedule:</span> Daily at 3:00 AM (cron)</p>
                  <p><span className="text-cyan-400 font-mono">Functions:</span></p>
                  <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                    <li>Updates activity for all users from Tautulli API</li>
                    <li>Identifies inactive users (&gt;30 days)</li>
                    <li>Sends warning emails (27 days inactive)</li>
                    <li>Removes users via Plex API (DELETE /api/v2/sharings/{'{'}userId{'}'})</li>
                    <li>Sends notifications to admin AND removed user</li>
                    <li>Cleans up database entries</li>
                  </ul>
                </div>
              </div>

              {/* check_new_users.py */}
              <div className="border border-purple-400/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-300">check_new_users.py — Fast Detection</h3>
                <div className="space-y-2 text-muted">
                  <p><span className="text-cyan-400 font-mono">Schedule:</span> Every 5 minutes (cron)</p>
                  <p><span className="text-cyan-400 font-mono">Purpose:</span> Instant welcome emails without waiting for daily cleanup</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                    <li>Lightweight check for new users only</li>
                    <li>Sends instant welcome emails with Centauri branding</li>
                    <li>Notifies admin of new user addition</li>
                    <li>Does NOT do cleanup (separation of concerns)</li>
                  </ul>
                </div>
              </div>

              {/* config.py */}
              <div className="border border-cyan-400/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-300">config.py — Central Configuration</h3>
                <div className="space-y-2 text-muted text-sm">
                  <p>Single source of truth for all configuration:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Tautulli API settings</li>
                    <li>Plex server URL and authentication token</li>
                    <li>SMTP/Email configuration (Gmail with TLS)</li>
                    <li>Protected users whitelist (11 users)</li>
                    <li>HTML email templates</li>
                    <li>DRY_RUN mode toggle for testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: User Lifecycle */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">5. User Lifecycle Flow</h2>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border-l-4 border-emerald-400 p-4 rounded">
                <h4 className="font-semibold text-emerald-300 mb-2">Stage 1: New User Joins</h4>
                <p className="text-muted text-sm">
                  Within 5 minutes, check_new_users.py detects the addition. User receives professional welcome email
                  with complete onboarding guide, Overseerr request system info, and inactivity policy. Admin receives notification.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-transparent border-l-4 border-blue-400 p-4 rounded">
                <h4 className="font-semibold text-blue-300 mb-2">Stage 2: Active User</h4>
                <p className="text-muted text-sm">
                  Daily user_manager.py updates last_activity timestamp and increments total_plays counter. No action taken.
                  User continues enjoying content seamlessly.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/20 to-transparent border-l-4 border-yellow-400 p-4 rounded">
                <h4 className="font-semibold text-yellow-300 mb-2">Stage 3: Inactivity Warning (27 Days)</h4>
                <p className="text-muted text-sm">
                  User receives professional warning email: "Watch something in 3 days or you'll be removed."
                  Includes last activity date, days until removal, and admin contact info. Warning flag set in database.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-900/20 to-transparent border-l-4 border-red-400 p-4 rounded">
                <h4 className="font-semibold text-red-300 mb-2">Stage 4: Automated Removal (30+ Days)</h4>
                <p className="text-muted text-sm">
                  User unfriended via Plex API (complete removal, not just library unsharing). Removal email sent to user
                  with clear explanation, re-join instructions via Discord. Admin receives removal confirmation. Database cleaned up.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Email System */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">6. Professional Email Notifications</h2>
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                All emails are professionally branded with Centauri Cinema Network theming, using HTML templates
                stored in config.py. SMTP via Gmail with TLS encryption ensures reliable delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="border border-cyan-400/20 rounded-lg p-4">
                <h4 className="font-semibold text-cyan-300 mb-2">📧 Welcome Email</h4>
                <p className="text-muted text-sm">Sent to new users within 5 minutes. Includes Plex access guide, Overseerr info, troubleshooting, Discord contact.</p>
              </div>
              <div className="border border-yellow-400/20 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-300 mb-2">⚠️ Inactivity Warning</h4>
                <p className="text-muted text-sm">Sent at 27 days inactive. Professional reminder with 3-day countdown and instructions to stay active.</p>
              </div>
              <div className="border border-red-400/20 rounded-lg p-4">
                <h4 className="font-semibold text-red-300 mb-2">🚫 Removal Notice</h4>
                <p className="text-muted text-sm">Sent to removed users. Not accusatory—clear explanation with re-join instructions via Discord.</p>
              </div>
              <div className="border border-purple-400/20 rounded-lg p-4">
                <h4 className="font-semibold text-purple-300 mb-2">📊 Admin Alerts</h4>
                <p className="text-muted text-sm">Admin receives notifications for new users and removals with full details (username, email, activity).</p>
              </div>
            </div>
          </section>

          {/* Section 7: Database & State Management */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">7. SQLite Database Schema</h2>
            <div className="bg-slate-900/50 border border-cyan-400/20 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-cyan-300">
{`CREATE TABLE user_activity (
    user_id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    email TEXT,
    first_seen TEXT,
    last_activity TEXT,
    total_plays INTEGER DEFAULT 0,
    is_protected INTEGER DEFAULT 0,
    warning_sent INTEGER DEFAULT 0,
    warning_sent_date TEXT
);

-- Current State:
-- 59 users tracked in database
-- 11 protected users (never removed)
-- Automated queries run via cron`}
              </pre>
            </div>
            <div className="text-muted text-sm mt-4">
              <p><span className="text-cyan-400 font-mono">Location:</span> /mnt/app-pool/config/tautulli/user_activity.db</p>
              <p><span className="text-cyan-400 font-mono">Size:</span> ~20KB (minimal overhead)</p>
              <p><span className="text-cyan-400 font-mono">Access:</span> Python sqlite3 library</p>
            </div>
          </section>

          {/* Section 8: Testing & Verification */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">8. Production Testing Results</h2>
            <div className="bg-emerald-900/20 border border-emerald-400/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-emerald-300 mb-4">✅ October 29, 2025 — Full System Test</h3>
              <div className="space-y-3 text-muted">
                <p><span className="text-cyan-400 font-mono">Test User:</span> [REDACTED_USER]</p>
                <p><span className="text-cyan-400 font-mono">Inactivity:</span> 25 days (manually tested before threshold)</p>
                <p><span className="text-cyan-400 font-mono">Result:</span> ✅ Successfully removed from Plex</p>
                <p><span className="text-cyan-400 font-mono">Verification:</span></p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>User removed from Plex shared users list via API</li>
                  <li>DELETE https://plex.tv/api/v2/sharings/[USER_ID] → 200 OK</li>
                  <li>Removal notification sent to admin</li>
                  <li>User entry deleted from SQLite database</li>
                  <li>Complete unfriending confirmed (user cannot access server)</li>
                </ul>
                <p className="text-emerald-300 font-semibold mt-4">
                  This confirms my system works end-to-end for automated user removal. ✨
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: JBOPS Integration */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">9. JBOPS Integration & Future Enhancements</h2>
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                My system leverages insights from <span className="text-cyan-400 font-mono">JBOPS</span> (Just a Bunch Of Plex Scripts),
                a comprehensive collection of 50+ automation scripts by Blacktwin. I've cloned the repository locally for reference
                and future enhancements.
              </p>
              <p>
                <span className="text-cyan-400 font-mono">Key Learning:</span> Discovered the correct Plex API endpoint
                (DELETE /api/v2/sharings) from JBOPS utility/remove_inactive_users.py. This was adapted from the plexapi
                library's removeFriend() method.
              </p>
            </div>

            <div className="border border-purple-400/20 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-4">🚀 Planned Enhancements</h3>
              <ul className="space-y-2 text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong>Kill Transcoding Streams:</strong> Prevent server overload by forcing direct play (Plex Pass required)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong>Stream Limiter:</strong> Limit concurrent streams per user to prevent credential sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong>New IP Notifications:</strong> Security alerts when users stream from new locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong>Recently Aired Alerts:</strong> Engage users with new episode notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong>User Location Maps:</strong> Visualize where users stream from worldwide</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 10: Technical Achievements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">10. Key Technical Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-400/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">🔧 Hands-off Operation</h3>
                <p className="text-muted text-sm">
                  Zero manual intervention required. System runs autonomously via cron jobs. Only setup and protected
                  user list require human input.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">📧 Professional Communications</h3>
                <p className="text-muted text-sm">
                  HTML email templates with Centauri branding. SMTP via Gmail with TLS. Both user-facing and admin notifications.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/20 to-blue-900/20 border border-emerald-400/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-emerald-300 mb-3">🔌 API Integration</h3>
                <p className="text-muted text-sm">
                  Tautulli API for activity tracking. Plex.tv API for user management. Complete unfriending via
                  DELETE /api/v2/sharings endpoint.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-900/20 to-blue-900/20 border border-yellow-400/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-300 mb-3">⚡ Fast Detection</h3>
                <p className="text-muted text-sm">
                  New users detected within 5 minutes. Welcome emails sent instantly. Separation of fast detection
                  and slow cleanup for optimal performance.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-blue-900/20 border border-red-400/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-300 mb-3">🛡️ Protected Users</h3>
                <p className="text-muted text-sm">
                  11 friends/family permanently whitelisted. Prevents accidental removal of VIP users while maintaining
                  automated cleanup for the community.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-400/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-300 mb-3">📊 State Management</h3>
                <p className="text-muted text-sm">
                  SQLite database for persistent state. Tracks 59 users with activity history, warning flags, and
                  protection status. Minimal 20KB footprint.
                </p>
              </div>
            </div>
          </section>

          {/* Closing Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Final Thoughts</h2>
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                Building my Centauri Plex Automation System was an exercise in production-grade infrastructure automation.
                What started as "I need to clean up inactive users" evolved into a comprehensive user lifecycle management
                platform that I designed to handle onboarding, activity tracking, warnings, and automated cleanup with professional
                communications throughout.
              </p>
              <p>
                It ran in production, removing inactive users while protecting a protected list and notifying everyone
                involved. Once configured it needed no daily attention — which is the only claim about its
                automation level I can actually stand behind, since I never measured one.
              </p>
              <p className="text-cyan-300 font-semibold">
                Key Takeaway: Automation isn't just about running scripts—it's about building resilient systems that
                handle edge cases, communicate clearly, and operate reliably without human babysitting. 🚀
              </p>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 border border-cyan-400/30 rounded-lg p-6 mt-6">
              <div className="text-center space-y-2">
                <p className="text-xl font-semibold text-cyan-300">System Status: 🟢 Fully Operational</p>
                <p className="text-muted text-sm">Last Tested: October 29, 2025</p>
                <p className="text-muted text-sm">Next Cleanup: Daily at 3:00 AM</p>
                <p className="text-muted text-sm font-mono">Powered by Linux, RAID-Z, and sheer stubbornness 🍿</p>
              </div>
            </div>
          </section>

        </motion.article>
      </div>
    </motion.div>
  );
}
