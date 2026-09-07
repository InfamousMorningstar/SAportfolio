import type { CaseStudy } from './types';

/*
 * Case study data.
 *
 * Constraint followed throughout: every figure here came off the machine —
 * `zpool status`, `zpool list -v`, `lsblk`, `lspci`, `docker ps` — or is
 * explicitly labelled as theoretical. Where something has not been measured,
 * it says it has not been measured rather than guessing a number that reads
 * well.
 */

export const centauri: CaseStudy = {
  slug: 'centauri',
  title: 'Centauri',
  tier: 'infrastructure',
  status: 'live',
  role: 'Sole architect and operator',
  period: '2023 — present',
  summary:
    'A self-hosted infrastructure lab: 38 containers on ~109 TiB of dual-parity ZFS, in a drive enclosure I fabricated myself.',
  problem:
    'A household that wanted its photos, files and media to stay available without renting them from four different subscriptions — and, honestly, a desire to run real infrastructure rather than read about it. It serves people who will tell me directly when it is down, which is a more demanding form of uptime pressure than it sounds.',

  stack: [
    { name: 'TrueNAS SCALE', why: 'ZFS as a first-class citizen with a management layer I do not have to write.' },
    { name: 'ZFS (RAID-Z2)', why: 'Dual parity, checksummed integrity, and snapshots that cost almost nothing.' },
    { name: 'Docker', why: '38 containers across TrueNAS-managed apps and hand-deployed stacks.' },
    { name: 'LSI SAS3008 HBA (IT mode)', why: 'Presents disks directly to ZFS. Hardware RAID here would actively hurt.' },
    { name: 'Tailscale', why: 'WireGuard mesh for the admin plane, with no ports open to reach it.' },
    { name: 'Cloudflare Tunnel', why: 'Publishes a small set of services outbound-only, surviving any NAT situation.' },
    { name: 'nginx-proxy-manager', why: 'Reverse proxy and TLS termination behind the tunnels.' },
  ],

  architecture: {
    diagram: {
      caption:
        'Centauri: two access planes, no inbound ports on the router. Dashed edges cross to the public internet.',
      rows: [
        ['internet'],
        ['router'],
        ['switch'],
        ['host'],
        ['docker', 'hba'],
        ['tunnel', 'tailscale', 'tank'],
      ],
      nodes: [
        { id: 'internet', label: 'Internet', sub: '3 Gbps symmetric', kind: 'external' },
        { id: 'router', label: 'ISP router', sub: 'no port forwards', kind: 'edge' },
        { id: 'switch', label: 'Switch', sub: '2.5 G, unmanaged', kind: 'network' },
        { id: 'host', label: 'Centauri', sub: 'i7-8700K · 46.7 GiB', kind: 'host' },
        { id: 'docker', label: 'Docker', sub: '38 containers', kind: 'service' },
        { id: 'hba', label: 'SAS3008 HBA', sub: 'IT mode', kind: 'edge' },
        { id: 'tunnel', label: 'Cloudflare Tunnel', sub: 'Jellyfin · Wizarr', kind: 'service' },
        { id: 'tailscale', label: 'Tailscale', sub: 'admin plane', kind: 'service' },
        { id: 'tank', label: 'tank', sub: '8 × 20 TB RAID-Z2', kind: 'store' },
      ],
      edges: [
        { from: 'internet', to: 'router', trust: 'public', protocol: 'WAN' },
        { from: 'router', to: 'switch', trust: 'internal' },
        { from: 'switch', to: 'host', trust: 'internal', label: '2.5 GbE', protocol: 'single link' },
        { from: 'host', to: 'docker', trust: 'internal' },
        { from: 'host', to: 'hba', trust: 'internal', protocol: 'PCIe' },
        { from: 'docker', to: 'tunnel', trust: 'public', protocol: 'outbound only' },
        { from: 'docker', to: 'tailscale', trust: 'private', protocol: 'WireGuard' },
        { from: 'hba', to: 'tank', trust: 'internal', protocol: 'SAS' },
      ],
    },
    walkthrough: [
      'A 3 Gbps symmetric line terminates on an ISP-supplied router whose firewall rules I do not own. There are no inbound port forwards on it — not one — which is the single most important fact about this topology.',
      'From there a single 2.5 GbE link runs through an unmanaged switch to the host. There are no VLANs and no segmentation at layer 2. This is the honest weak point of the design, and it is also the bottleneck: the array reads faster than the wire.',
      'The host is a Lenovo ThinkCentre. The disks are not in it — an LSI SAS3008 HBA in IT mode reaches out over SAS to a JBOD enclosure I built, so ZFS addresses all eight drives directly with nothing pretending to be a RAID controller in between.',
      'Everything above the storage runs in Docker: 38 containers split between TrueNAS-managed apps and hand-deployed stacks.',
      'Access divides into two planes. Administration — the TrueNAS UI, SSH, Portainer, logs — is reachable only across a Tailscale WireGuard mesh. A deliberately short list of services is published outbound through Cloudflare Tunnel for family who are not going to install a VPN client.',
    ],
  },

  decisions: [
    {
      question: 'Why rebuild the pool instead of replacing drives in place?',
      chose: 'Destroy and recreate as a single 8-wide RAID-Z2 vdev',
      alternatives: ['zpool replace, disk by disk', 'Add a third vdev and grow', 'Leave the RAID-Z1 layout alone'],
      reasoning:
        'The pool started as two RAID-Z1 vdevs, one of them 20 TB drives — a layout I had already written up publicly as my worst decision, because a single failure at that capacity means a multi-day resilver hammering the survivors, and a second failure in that window takes everything. ZFS cannot convert a RAID-Z1 vdev to Z2, cannot merge vdevs, and cannot remove a raidz vdev from a pool. In-place replacement would have bought capacity while preserving the exact topology I was trying to escape. Destroying the pool was not the aggressive option; it was the only route to the target.',
      tradeoff:
        'Everything had to come off the array first. Photos and configuration were backed up; the media library was not, because it is the one category I can rebuild. That classification was written down as a principle months earlier — this is the week it cost something real.',
    },
    {
      question: 'Why an HBA in IT mode and a JBOD, rather than a NAS appliance?',
      chose: 'Repurposed desktop + LSI SAS3008 in IT mode + self-fabricated enclosure',
      alternatives: ['Synology/QNAP appliance', 'Used Supermicro or NetApp disk shelf', 'Hardware RAID controller'],
      reasoning:
        'ZFS needs to see raw devices. A RAID controller sitting between ZFS and the disks hides exactly the information ZFS relies on to detect and repair corruption, so IT-mode firmware is not a preference here, it is a requirement. Building the enclosure rather than buying a shelf used metalworking skills and shop access I had from my job at the time, and kept the drive count open-ended instead of capped by an appliance.',
      tradeoff:
        'No vendor support, no hot-swap backplane, and the enclosure runs on its own PSU with no power sequencing — so the drives must be powered up before the host or the HBA enumerates an empty bus. Nothing here recovers from a power event unattended.',
    },
    {
      question: 'Why no SLOG or L2ARC?',
      chose: 'Neither',
      alternatives: ['Add a SLOG device', 'Add an L2ARC device', 'Both'],
      reasoning:
        'A SLOG only accelerates synchronous writes. Almost everything this system does is SMB and async writes from containers, which would never touch it. An L2ARC keeps its index in ARC, so adding one to a memory-constrained host can make things measurably worse. Buying either to look thorough produces an SSD that does nothing.',
      tradeoff:
        'The one workload that would genuinely benefit is the 1 TB zvol exported over iSCSI, which is exactly the sync-write case a SLOG exists for. That is the honest counter-argument, and I have accepted it rather than answered it.',
    },
    {
      question: 'Why remove the GPU rather than keep it working?',
      chose: 'Pull the Quadro P1000, move transcoding to integrated Quick Sync',
      alternatives: ['Community legacy driver builds', 'Stay on TrueNAS 25.04 indefinitely', 'Buy a Turing-or-newer card'],
      reasoning:
        'TrueNAS SCALE 25.10 switched to NVIDIA open GPU kernel modules, which depend on the GSP — a coprocessor introduced in Turing. Pascal does not have one, so the card became unsupported. This was an architectural dependency, not a card that got old. Community rebuilds of the legacy proprietary driver exist and would have kept it alive.',
      tradeoff:
        'Maintaining out-of-tree kernel modules against every future TrueNAS update, for one 4 GB card, was more ongoing work than the card was worth. Immich machine-learning passes now run on CPU and are slower for it, and the local LLM containers were shut down rather than migrated — they were never more than a toy at 4 GB of VRAM.',
    },
  ],

  security: [
    {
      boundary: 'Administration',
      control:
        'TrueNAS UI, SSH, Portainer and logs are reachable only over a Tailscale WireGuard mesh. Nothing on this plane is published.',
    },
    {
      boundary: 'Published services',
      control:
        'Jellyfin, its request front-end and Wizarr are exposed via Cloudflare Tunnel — an outbound connection, so no inbound rules exist on the router.',
      gap: 'They are protected by their own application logins and nothing else. There is no identity layer such as Cloudflare Access in front of them, largely because it adds friction for non-technical users. That is a reason, not a defence.',
    },
    {
      boundary: 'Network segmentation',
      control: 'None.',
      gap: 'The switch is unmanaged, so there are no VLANs and no layer-2 isolation. Every device shares one flat network. Segmentation would require replacing the switch, which is on the same list as the 10 GbE upgrade.',
    },
    {
      boundary: 'Torrent traffic egress',
      control:
        'The download client runs in an image with an integrated VPN and a strict kill switch — if the tunnel drops it has no network at all rather than falling back to the WAN. It is the only container here with an egress path of its own.',
    },
    {
      boundary: 'Backups at rest',
      control:
        'The TrueNAS configuration bundle contains secrets and keys, so it is encrypted before it reaches third-party cloud storage.',
    },
    {
      boundary: 'Power and physical',
      control: 'None worth the name.',
      gap: 'No UPS. Eight spinning disks and an active pool are exposed to abrupt loss, and with no SLOG the sync writes that do occur land in the in-pool ZIL. Combined with manual power sequencing, this is the least mature layer of the whole build and the next thing I would spend money on.',
    },
  ],

  performance: [
    {
      metric: 'Full pool scrub',
      value: '1 day 21 h 49 m, 0 errors repaired',
      method: '`zpool status` after a scheduled scrub of 111 TiB allocated, 2026-09-02.',
    },
    {
      metric: 'Pool capacity',
      value: '146 TiB raw · ~109 TiB usable · 76% allocated · 37% fragmentation',
      method: '`zpool list -v`.',
    },
    {
      metric: 'Pool health',
      value: 'ONLINE, 0 read / 0 write / 0 checksum errors across all 8 devices',
      method: '`zpool status`.',
    },
    {
      metric: 'Network ceiling',
      value: '~300 MB/s',
      method:
        'Theoretical, not measured — the practical ceiling of a single 2.5 GbE link. An 8-wide RAID-Z2 of CMR drives exceeds this sequentially, which is why the NIC is the constraint on every transfer.',
    },
    {
      metric: 'Backup RPO',
      value: 'Up to 7 days',
      method:
        'Weekly TrueNAS Cloud Sync of photos and configuration. Anything added since the last successful run exists only on the array. Media is deliberately outside this scope.',
    },
  ],

  incidents: ['INC-0001'],

  hindsight: [
    'Do not opt into the pre-release update channel on the machine the household depends on. I selected Early Adopter and found out it is a one-way door — once you are running a build newer than stable, the General channel is not selectable any more, and going back means a clean install and a config restore.',
    'Buy the UPS before the tenth drive. Power is the least mature part of this build and the only one where a single event could cost me data rather than time.',
    'Automate the power sequencing, or stop needing it. Requiring the JBOD to be powered before the host means nothing recovers unattended, which quietly turns every outage into a physical-presence problem.',
    'Application state deserves the same care as the data. `app-pool` is a single non-redundant SSD at 80% capacity holding every container configuration, sitting next to a data pool with dual parity. The asymmetry is not defensible; it is just what happened.',
    'Watch the 80% line. The pool is at 76% and ZFS gets meaningfully worse at allocation past 80%, so the decision about pruning or widening is already overdue rather than upcoming.',
  ],
};

export const cdnCaptain: CaseStudy = {
  slug: 'cdn-captain',
  title: 'CDN_Captain',
  tier: 'client',
  status: 'live',
  role: 'Sole developer',
  period: '2026 — present',
  summary:
    'A retrieval-first Discord bot for a gaming community whose most important feature is knowing when to say nothing.',
  problem:
    'Every community Discord has the same nine questions asked forever. The obvious fix is to attach a language model to the chat and let it answer — which produces something worse than an unanswered question, because a bot that is confidently wrong erodes the trust that makes it useful at all. The design goal was therefore inverted: answering had to earn its way past several checks, and silence became the default.',

  links: [
    { label: 'Community site', href: 'https://cdndayz.com' },
    { label: 'Write-up', href: '/blog/cdn-captain-bot' },
  ],

  stack: [
    { name: 'Python', why: 'Roughly 1,700 lines, of which the interesting parts are deterministic rather than probabilistic.' },
    { name: 'SQLite', why: 'Fact store and state. A single-file database is the right size for this problem and needs no server.' },
    { name: 'Playwright', why: 'Weekly crawl of the community site, capped at 60 pages and four concurrent.' },
    { name: 'Docker', why: 'Runs on my own TrueNAS host rather than a VPS — the box was already doing enough to absorb it.' },
  ],

  architecture: {
    diagram: {
      caption:
        'CDN_Captain answer path. A model is only reached when local retrieval already found something, and nothing is sent until two checks pass.',
      rows: [
        ['discord'],
        ['bot'],
        ['gate'],
        ['store', 'model'],
        ['verify'],
        ['reply', 'suppressed'],
      ],
      nodes: [
        { id: 'discord', label: 'Discord', sub: 'community server', kind: 'external' },
        { id: 'bot', label: 'CDN_Captain', sub: 'Python · Docker', kind: 'service' },
        { id: 'gate', label: 'Retrieval gate', sub: 'local · free', kind: 'edge' },
        { id: 'store', label: 'Fact store', sub: 'SQLite', kind: 'store' },
        { id: 'model', label: 'Model API', sub: 'one call', kind: 'external' },
        { id: 'verify', label: 'Citation + grounding', sub: 'checked in code', kind: 'edge' },
        { id: 'reply', label: 'Answer', sub: 'cited', kind: 'service' },
        { id: 'suppressed', label: 'Failure log', sub: 'ranked', kind: 'store' },
      ],
      edges: [
        { from: 'discord', to: 'bot', trust: 'public', protocol: 'message' },
        { from: 'bot', to: 'gate', trust: 'internal' },
        { from: 'gate', to: 'store', trust: 'internal', label: 'lookup' },
        { from: 'gate', to: 'model', trust: 'public', label: 'only on match' },
        { from: 'store', to: 'verify', trust: 'internal' },
        { from: 'model', to: 'verify', trust: 'internal' },
        { from: 'verify', to: 'reply', trust: 'internal', label: 'passes' },
        { from: 'verify', to: 'suppressed', trust: 'internal', label: 'fails' },
      ],
    },
    walkthrough: [
      'A message arrives and hits a scoring function written in plain Python before it reaches anything expensive. Keywords are extracted, stop words dropped, a small hand-tuned synonym map applied, and the result scored against the fact store. No match, no answer — and no API call.',
      'That gate is the most valuable code in the project and it contains no machine learning at all. It also means cost scales with the number of questions the bot can actually answer rather than with how busy the channel is.',
      'Separately, once a week Playwright crawls the community site — capped at 60 pages, four at a time — and hashes each page. Only pages whose content actually changed are sent for fact extraction, so the expensive step runs on the delta rather than the whole site.',
      'Extraction is deliberately fine-grained. The prompt refuses summaries and produces individual facts, because small facts retrieve better than paragraphs and, more importantly, can be cited precisely.',
      'When facts do match, the bot makes exactly one answer call with the retrieved facts in context. Then the part that actually makes it work: the citations it returns are verified in code against the facts that were really retrieved, and a second independent call acts as a grounding verifier. Asking a model to cite its sources is a prompt; checking those citations is an assertion.',
      'Anything failing either check is suppressed and written to a ranked failure log rather than posted. Admins can also mark answers good or bad directly, which feeds the same file. That log is the most useful artifact the system produces.',
    ],
  },

  decisions: [
    {
      question: 'Why gate retrieval locally instead of just calling the model?',
      chose: 'A free, deterministic keyword and synonym scorer in front of every model call',
      alternatives: ['Send everything to the model', 'Embedding-based semantic search', 'Answer only on explicit commands'],
      reasoning:
        'Most messages in a community channel are not questions the bot should answer. Passing them all to a model costs money on every message and, worse, invites an answer to things there is no source for. A local scorer decides whether the system even *can* answer before it decides what to say.',
      tradeoff:
        'A hand-tuned keyword and synonym map is less flexible than embeddings and will miss phrasings a semantic search would catch. That is the accepted cost: a missed question is recoverable, a confident fabrication is not.',
    },
    {
      question: 'Why verify citations in code rather than prompting for them?',
      chose: 'Programmatic citation checking plus an independent grounding verifier',
      alternatives: ['Trust the model to cite honestly', 'Prompt-only instructions to stay grounded', 'Human review of every answer'],
      reasoning:
        'A prompt asking for citations is a request. Nothing enforces it, and the failure mode is silent — a fabricated citation looks exactly like a real one. Checking the returned citations against the actually-retrieved facts converts a request into a guarantee, and the second grounding call catches claims that cite real sources but do not follow from them.',
      tradeoff:
        'Two calls per answer instead of one, so verified answers cost roughly double. Given the retrieval gate means the bot answers rarely, doubling the cost of a rare event was an easy trade.',
    },
    {
      question: 'Why self-host it rather than deploy to a platform?',
      chose: 'Docker on my own TrueNAS host',
      alternatives: ['VPS', 'Serverless functions', 'A managed bot-hosting platform'],
      reasoning:
        'The infrastructure already existed, was already monitored, and had capacity to spare. Running it there costs nothing incremental and keeps the fact store and the failure log on storage I control.',
      tradeoff:
        'It inherits every weakness of that host — no UPS, manual power sequencing, a single residential uplink. If the house loses power the bot goes with it, which is acceptable for a community helper and would not be for anything a client depended on commercially.',
    },
  ],

  security: [
    {
      boundary: 'Model exposure',
      control:
        'Untrusted user text only reaches a model after passing the local retrieval gate, and answers are checked against retrieved facts before being posted.',
      gap: 'This is a grounding control, not a prompt-injection defence. A crafted message that scores well against the fact store still reaches the model.',
    },
    {
      boundary: 'Output',
      control:
        'Nothing is posted that fails citation verification or the grounding check. The failure path is silence plus a log entry, not a best-effort answer.',
    },
    {
      boundary: 'Hosting',
      control: 'Runs in a container on infrastructure I operate; no inbound ports, outbound connections only.',
    },
  ],

  performance: [
    {
      metric: 'Crawl scope',
      value: '60 pages max, 4 concurrent, weekly',
      method: 'Configured limits on the Playwright crawler.',
    },
    {
      metric: 'Extraction work avoided',
      value: 'Only changed pages',
      method: 'Per-page content hashing between crawls — unchanged pages skip fact extraction entirely.',
    },
    {
      metric: 'Regression suite',
      value: '15 tests offline against recorded fixtures, plus a live mode',
      method: 'Test suite assembled from the bot’s own past wrong answers.',
    },
    {
      metric: 'Codebase',
      value: '~1,700 lines of Python',
      method: 'Approximate line count. The majority is deterministic logic rather than model interaction.',
    },
  ],

  incidents: ['INC-0002'],

  hindsight: [
    'The retrieval gate should have existed before the first model call, not after the first embarrassing answer. Building the cheap deterministic layer first would have prevented the incident that eventually forced it.',
    'Fine-grained fact extraction was the right instinct and I under-committed to it early. Paragraph-level chunks retrieved worse and could not be cited precisely, which made verification harder than it needed to be.',
    'The failure log turned out to be more valuable than the answer path. If I started again I would build the suppression log and the feedback loop on day one and treat the answering as the feature that has to justify itself against it.',
  ],
};

export const caseStudies: CaseStudy[] = [centauri, cdnCaptain];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
