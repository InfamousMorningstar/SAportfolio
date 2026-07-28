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
 * 📁 File    : CDNCaptainPost.tsx
 * 🕒 Updated : Jul 28, 2026
 */
'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

interface CDNCaptainPostProps {
  onBack?: () => void;
}

export default function CDNCaptainPost({ onBack }: CDNCaptainPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
      className="min-h-screen py-20 relative bg-gradient-to-br from-slate-900 via-background to-indigo-950/30 overflow-hidden"
    >
      {/* Retrieval / knowledge-base themed background */}
      <div className="absolute inset-0 opacity-4">
        <div className="absolute top-20 left-16 text-indigo-400/20 font-mono text-xs rotate-6 select-none">
          [12] WIPE: servers wipe every ~90 days<br />
          [31] TRADER: no building within 1000m<br />
          [47] ERROR: 0x00040010 = ADMIN_KICK<br />
        </div>

        <div className="absolute top-1/3 right-20 text-violet-400/20 font-mono text-xs rotate-[-11deg] select-none">
          score = Σ keyword_hits<br />
          if score &lt; 1.0: return []<br />
          # return [] == stay silent<br />
          # stay silent == spend $0<br />
        </div>

        <div className="absolute bottom-36 left-28 text-amber-400/20 font-mono text-xs rotate-[14deg] select-none">
          FACTS: [3, 7]<br />
          FACTS: [4, IMG]<br />
          NO_ANSWER<br />
        </div>

        <div className="absolute top-1/2 left-1/3 text-sky-400/20 font-mono text-xs rotate-[-17deg] select-none">
          SELECT * FROM facts<br />
          WHERE manual = 1<br />
          ORDER BY id<br />
        </div>

        <div className="absolute bottom-24 right-16 text-indigo-400/15 font-mono text-xs rotate-[8deg] select-none">
          crawl → hash → diff<br />
          └── changed pages only<br />
        </div>

        <div className="absolute top-24 right-1/3 text-violet-400/20 font-mono text-xs rotate-12 select-none">
          suppressed_answers.jsonl<br />
          ├── question<br />
          ├── answer<br />
          └── reason<br />
        </div>
      </div>

      {/* Drifting "fact" nodes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Back Button */}
        {onBack && (
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors mb-8 group"
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
            CDN_Captain: Teaching a Discord Bot{' '}
            <span className="text-indigo-400">to Shut Up</span>
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Jul 28, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {['Python', 'Discord', 'Retrieval', 'RAG', 'Playwright', 'SQLite', 'Docker'].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-indigo-400/10 text-indigo-400 rounded-full"
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
          {/* Intro */}
          <section className="mb-12">
            <div className="text-muted leading-relaxed space-y-4">
              <p>
                Every community Discord has the same nine questions. When does the server wipe? Why
                did I get kicked with error 0x00040010? How far from a trader can I build? Can I get
                unbanned? They arrive at 3 a.m., they arrive in triplicate, and they arrive with a
                confidence that suggests nobody has ever scrolled up.
              </p>
              <p>
                The obvious fix is to bolt a language model onto the Discord API and let it answer.
                I did not do that, because the obvious fix produces something worse than an
                unanswered question: a bot that is <em>fluent</em>, <em>instant</em>, and{' '}
                <em>wrong</em>. A confidently wrong bot in a gaming community doesn&apos;t just fail —
                it generates support tickets, because now people are quoting it at the admins.
              </p>
              <p>
                So CDN_Captain was built around an unusual design goal. Its most important feature is
                not answering. It&apos;s <span className="text-indigo-300 font-medium">silence</span>.
              </p>
            </div>
          </section>

          {/* The gate */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-indigo-400">The $0 Gate</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                Before any message reaches a model, it hits a scoring function written in plain
                Python. Keywords are extracted, stop words dropped, a small hand-tuned synonym map
                expands them — <span className="font-mono text-sm text-indigo-300">wipe</span> also
                means reset, restart, map reset; <span className="font-mono text-sm text-indigo-300">trader</span>{' '}
                also means market, vendor, safe zone — and every fact in the database is scored
                against the result.
              </p>

              <div className="border border-indigo-400/20 rounded-lg p-6">
                <p className="text-muted leading-relaxed mb-4">
                  If nothing clears a threshold of{' '}
                  <span className="font-mono text-sm text-indigo-300">1.0</span>, the function
                  returns an empty list, and an empty list means the bot says nothing at all. No API
                  call. No token spent. No apology paragraph explaining what it doesn&apos;t know.
                </p>
                <p className="text-muted leading-relaxed italic">
                  This is the single most valuable line of code in the project, and it contains no
                  intelligence whatsoever.
                </p>
              </div>

              <p className="text-muted leading-relaxed">
                Retrieval-gating this way has a pleasant second-order effect: cost scales with{' '}
                <em>relevant</em> traffic, not total traffic. A raid at 2 a.m. that fills a channel
                with 400 messages of trash talk costs exactly nothing, because none of it scores.
              </p>
            </div>
          </section>

          {/* Ingest */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-violet-400">Where the Facts Come From</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                Once a week, Playwright crawls cdndayz.com — capped at 60 pages, four at a time,
                because politeness is free. Each page&apos;s content is hashed and compared against
                the last crawl.
              </p>

              <div className="border border-violet-400/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-violet-300">The diff is the point</h3>
                <p className="text-muted leading-relaxed">
                  Only pages whose hash actually <em>changed</em> get sent for fact extraction. A
                  site that didn&apos;t change costs one crawl and zero extraction calls. The rules
                  page has not been edited since March. I am not paying to re-read it every Sunday.
                </p>
              </div>

              <p className="text-muted leading-relaxed">
                Extraction is deliberately merciless about granularity. The prompt refuses summaries
                and demands that every cause, fix, step and number become its own tagged line:
              </p>

              <div className="border border-violet-400/20 rounded-lg p-6 font-mono text-sm bg-black/20">
                <div className="text-violet-300">RULE: <span className="text-muted">No building within 1000 metres of any trader</span></div>
                <div className="text-violet-300">WIPE: <span className="text-muted">All CDN servers wipe approximately every 90 days</span></div>
                <div className="text-violet-300">ERROR: <span className="text-muted">0x00040010 = ADMIN_KICK — player removed by an administrator</span></div>
                <div className="text-violet-300">ERROR: <span className="text-muted">0x00040010 fix = if a restart was announced, wait and reconnect</span></div>
                <div className="text-violet-300">REP: <span className="text-muted">Black Market unlocks at 50,000 rep</span></div>
              </div>

              <p className="text-muted leading-relaxed">
                Fine-grained facts retrieve better than paragraphs, and — more importantly — they can
                be <em>cited individually</em>. That matters in a minute.
              </p>

              <div className="bg-gradient-to-r from-violet-500/10 to-indigo-500/10 rounded-lg p-6 border border-violet-400/20">
                <p className="text-muted leading-relaxed">
                  <span className="text-violet-300 font-semibold">The override hatch:</span> a
                  hand-written <span className="font-mono text-sm">knowledge.txt</span> sits above
                  everything the crawler produces and always wins. 61 lines of facts that I control
                  absolutely. When the model misreads a page, I don&apos;t debug the prompt at
                  midnight — I write one line and move on.
                </p>
              </div>
            </div>
          </section>

          {/* Citations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-amber-400">Cite Your Sources or Say Nothing</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                When facts do match, the bot makes exactly one answer call. The retrieved facts go in
                numbered, and the system prompt — frozen, byte-identical on every call, with nothing
                interpolated into it — ends with a hard requirement:
              </p>

              <div className="border border-amber-400/20 rounded-lg p-6 font-mono text-sm bg-black/20 space-y-1">
                <div className="text-muted">End every answer with the fact numbers you used:</div>
                <div className="text-amber-300">FACTS: [3, 7]</div>
                <div className="text-muted mt-3">If you cannot honestly cite at least one,</div>
                <div className="text-amber-300">NO_ANSWER</div>
              </div>

              <p className="text-muted leading-relaxed">
                Here&apos;s the part that makes it work: <strong className="text-amber-300">the
                citations are not taken on faith.</strong> A deterministic function parses that line
                and checks every cited ID against the set of facts that were actually retrieved. Cite
                a fact that wasn&apos;t in the context? Rejected. Cite a screenshot when no image was
                attached? Rejected. Cite nothing at all? Rejected.
              </p>

              <p className="text-muted leading-relaxed">
                Asking a model to cite its sources is a prompt. Verifying those citations in code is
                an <em>invariant</em>. Only one of those survives contact with a model having an
                imaginative afternoon.
              </p>

              <div className="border border-amber-400/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-amber-300">Then it gets checked again</h3>
                <p className="text-muted leading-relaxed">
                  A second, independent call acts as a grounding verifier: here are the sources, here
                  is the proposed answer, is every concrete claim actually supported? Numbers,
                  distances, rules, item names, causes, fixes. Tone and greetings are explicitly
                  ignored. One line back: GROUNDED, or UNGROUNDED with the offending claim named.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-lg p-6 border border-amber-400/20">
                <p className="text-muted leading-relaxed">
                  <span className="text-amber-300 font-semibold">One deliberate compromise:</span> the
                  verifier <em>fails open</em>. If that API call errors, the answer ships. It felt
                  wrong to write, and I&apos;d defend it anyway — a provider outage should not be able
                  to silence a correct, properly-cited answer. The citation check, which is pure local
                  code and can&apos;t have an outage, still fails closed. The strict gate is the one
                  that never goes down.
                </p>
              </div>
            </div>
          </section>

          {/* The incident */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-rose-400">The Airdrop Incident</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                All of that scaffolding exists because of a specific, humbling afternoon.
              </p>

              <p className="text-muted leading-relaxed">
                Someone asked whether vehicles drop from airdrops. The bot said yes. It further
                volunteered that you could claim one within a 500-metre radius. Both details were
                completely invented, delivered in the calm register of a man reading from a manual,
                and — this is the genuinely dangerous part — they were <em>plausible</em>. They sound
                like DayZ. Players went looking for cars that do not exist.
              </p>

              <div className="border border-rose-400/20 rounded-lg p-6">
                <p className="text-muted leading-relaxed mb-4">
                  That incident is now permanently embedded in the test suite as a golden question,
                  and it is the reason the suite exists at all:
                </p>
                <div className="font-mono text-xs bg-black/30 rounded p-4 space-y-1 overflow-x-auto">
                  <div className="text-rose-300">question: &quot;do vehicles drop from the airdrops?&quot;</div>
                  <div className="text-emerald-300">must_contain_any: [gear, medical, no vehicles]</div>
                  <div className="text-rose-300">must_not_contain: [contain vehicles, get a vehicle, 500m]</div>
                </div>
              </div>

              <p className="text-muted leading-relaxed">
                Fifteen of these now run offline and free against recorded fixtures, plus a live mode
                that costs real tokens for when I&apos;ve changed something load-bearing. Every
                hallucination the bot has ever produced in public has been converted into a test that
                fails if it ever tries again. It&apos;s regression testing, except the regressions are
                lies.
              </p>
            </div>
          </section>

          {/* Knowing when not to talk */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-sky-400">Nine Ways to Not Answer</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                A technically correct bot that interjects constantly is still an unbearable bot.
                Retrieval decides whether it <em>can</em> answer; a separate stack of checks decides
                whether it <em>should</em>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-sky-400/20 rounded-lg p-6">
                  <h3 className="font-semibold text-sky-300 mb-3">Is it even a question?</h3>
                  <p className="text-muted text-sm">Statements are not invitations. Neither is someone venting.</p>
                </div>

                <div className="border border-indigo-400/20 rounded-lg p-6">
                  <h3 className="font-semibold text-indigo-300 mb-3">Two-person conversation</h3>
                  <p className="text-muted text-sm">If two players are clearly mid-exchange, the bot stays out of it. Nobody likes the guy who joins a conversation to correct it.</p>
                </div>

                <div className="border border-violet-400/20 rounded-lg p-6">
                  <h3 className="font-semibold text-violet-300 mb-3">90-second staleness</h3>
                  <p className="text-muted text-sm">After a restart it will not answer a question from last Tuesday. Necromancy is not a support strategy.</p>
                </div>

                <div className="border border-amber-400/20 rounded-lg p-6">
                  <h3 className="font-semibold text-amber-300 mb-3">30-second cooldown + dedup</h3>
                  <p className="text-muted text-sm">Per user, plus a five-minute memory of what it just answered in that channel. Rephrasing does not summon it twice.</p>
                </div>
              </div>

              <p className="text-muted leading-relaxed">
                The prompt carries a few more refusals earned the hard way. Never substitute one
                map&apos;s rules for another — DayZ maps are genuinely different and a confident
                cross-map answer is worse than nothing. Error codes must match exactly, never
                &quot;close enough&quot;. And it will not reveal the Black Market&apos;s location on
                any map, even if a retrieved fact appears to describe it, because some knowledge is
                supposed to cost you something to find.
              </p>

              <p className="text-muted leading-relaxed">
                There&apos;s also a small rule I&apos;m disproportionately fond of:{' '}
                <em>never tell anyone to join the Discord.</em> They are, definitionally, already in
                the Discord. Support bots love this advice. It is never once useful.
              </p>
            </div>
          </section>

          {/* Suppression as backlog */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-emerald-400">Every Silence Is a To-Do</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                When an answer gets suppressed — bad citations, ungrounded claim, whatever — it
                isn&apos;t just dropped. It&apos;s appended to{' '}
                <span className="font-mono text-sm text-emerald-300">suppressed_answers.jsonl</span>{' '}
                with the question, the rejected answer, and the reason.
              </p>

              <div className="bg-gradient-to-r from-emerald-500/10 to-sky-500/10 rounded-lg p-6 border border-emerald-400/20">
                <p className="text-muted leading-relaxed">
                  That file is the single most useful artifact the system produces. It is a ranked,
                  self-maintaining list of things my community wants to know and my knowledge base
                  cannot answer. The bot&apos;s failures write my documentation backlog for me.
                </p>
              </div>

              <p className="text-muted leading-relaxed">
                On top of that sits a human feedback loop, because automated verification only gets
                you so far. Anyone can react 👍 or 👎. Three downvotes on one answer and I get a DM.
                Admins get sharper tools: ✅ confirms an answer as good, ❌ marks it wrong{' '}
                <em>and deletes it from the channel</em> — because a wrong answer sitting in the
                scrollback keeps being wrong long after everyone stops reading.
              </p>
            </div>
          </section>

          {/* Deployment */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400">Where It Lives</h2>
            <div className="space-y-6">
              <p className="text-muted leading-relaxed">
                It runs in Docker on my TrueNAS box, which is doing enough already and did not
                complain. All state — the fact database, conversation memory, both log files — sits
                on one mounted volume. First boot against an empty volume triggers a full site
                ingest, which takes about a minute and well under a dollar of credit, then it settles
                into the weekly rhythm.
              </p>

              <div className="border border-cyan-400/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">A few things I&apos;d call load-bearing</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="text-cyan-300 font-medium">One config module</span>
                      <span className="text-muted"> — no other file reads an environment variable, and a validator refuses to boot on a missing token rather than dying mysteriously an hour later.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="text-indigo-300 font-medium">Results returned by value</span>
                      <span className="text-muted"> — no stashing state on function attributes between calls. Async plus hidden mutable state is how you get a bot that answers the wrong person.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 shrink-0"></div>
                    <div>
                      <span className="text-violet-300 font-medium">A staleness alarm</span>
                      <span className="text-muted"> — if the knowledge base hasn&apos;t refreshed in fourteen days, I hear about it. A silently stale bot is just a confident bot with old opinions.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-indigo-400">What I&apos;d Tell Past Me</h2>
            <div className="bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-lg p-8 border border-indigo-400/30">
              <div className="text-muted leading-relaxed space-y-4">
                <p>
                  Roughly 1,700 lines of Python, and the interesting engineering is almost entirely
                  about restraint. The model is the least remarkable component — it&apos;s a small,
                  cheap one, called once, with its output treated as a proposal that has to clear two
                  checks before anyone sees it.
                </p>
                <p>
                  Everything that makes CDN_Captain trustworthy is boring, deterministic code
                  wrapped around that call: a scoring function that gates it, a parser that verifies
                  its citations, a test suite built from its past lies, and a log of every time it
                  chose silence.
                </p>
                <p>
                  Which turned out to be the actual lesson. Building something useful with a language
                  model had very little to do with prompting and almost everything to do with
                  deciding, precisely and in advance, what it is not allowed to say.
                </p>
                <p className="font-medium text-indigo-300">
                  The smartest thing my bot does is nothing at all.
                </p>
              </div>
            </div>
          </section>
        </motion.article>
      </div>
    </motion.div>
  );
}
