import type { Incident } from './types';

/*
 * Real incidents only.
 *
 * Every entry here happened, and the details are constrained by what can
 * actually be evidenced. Where the record is incomplete the entry says so
 * rather than filling the gap with something plausible — see the notes on
 * SMART data and resilver duration in INC-0001. An invented incident is the
 * fastest way to fail an interview where someone asks you to walk through it.
 */

export const incidents: Incident[] = [
  {
    id: 'INC-0001',
    date: '2026-01-02',
    system: 'centauri',
    severity: 'sev1',
    symptom:
      'The pool went DEGRADED and stayed unstable for days. Individual drives cycled between DEGRADED, FAULTED, REMOVED and OFFLINE, and the fault kept moving between devices rather than staying on one.',
    impact:
      'Intermittently usable rather than cleanly down. The pool was sometimes ONLINE while resilvering, but also hit suspended I/O and full storage freezes. Pool import and export operations became extremely slow or hung entirely. Every service backed by the array was affected for the duration.',
    detection: 'alert',
    investigation: [
      'Started from the TrueNAS email alerts and `zpool status`, which showed the pool degraded and resilvering with disks changing state.',
      'First working theory was a single failing 20 TB drive — the obvious reading, and the wrong one.',
      'Physically pulled the suspect disk. This made things worse: TrueNAS immediately reported "ZFS pool I/O is suspended", which temporarily made the problem look more like a pool or filesystem failure than a hardware one.',
      'WRONG TURN: spent time questioning whether SATA drives were appropriate at all, and seriously considered replacing all eight with SAS units. Also chased breakout cables, power splitters, insufficient PSU capacity, HBA cooling, firmware, and PCIe instability.',
      'Moved from the ZFS layer down to the kernel. The `mpt3sas` logs showed multiple devices being reset and removed through the same controller path — including disks on HBA PHYs 4, 5 and 7.',
      'Correlated the failures rather than counting them: at least four distinct drives reported problems over several days, and affected disks could return online and resume resilvering. That is not how several independent mechanical failures behave.',
      'Noted `task txg_sync blocked for more than 120 seconds` in the logs, which explained the system freezes — ZFS was waiting indefinitely on I/O beneath it.',
      'Reassessed the timing. The problem appeared after the 20 TB upgrade, which made the new drives look causal. More likely, sustained resilver load simply exposed a controller path that was already marginal.',
    ],
    rootCause:
      'The HBA had failed, not the disks. Simultaneous errors across multiple drives on the same controller point at the shared component — the card and its breakout cables — rather than at the drives themselves.',
    fix: 'Replaced the unstable HBA with a known-good LSI/Broadcom controller running IT-mode firmware. The pool resilvered and returned to a healthy state on its own.',
    prevention:
      'Honestly: limited. There was no monitoring in place that would have caught a controller degrading before it started taking drives offline, and there still is not. What did work was dual parity — RAID-Z2 absorbed the instability long enough to diagnose the real cause instead of forcing a panicked rebuild.',
    evidence: {
      label: 'Representative kernel output',
      content: `mpt3sas_cm0: log_info(0x31110e03)
sd 0:0:4:0: device_block, handle(0x000c)
sd 0:0:5:0: device_block, handle(0x000d)
INFO: task txg_sync:1042 blocked for more than 120 seconds.`,
    },
    lesson:
      'When several drives fail at once, suspect the thing they have in common. The evidence that actually settled it was correlation — failures moving across devices on one controller path — not a clean bill of health on any individual disk. Worth noting the limit of that reasoning too: no clean SMART output from the affected drives survives, so this was never "SMART proved the disks were fine". It did not need to be. SMART frequently cannot see HBA, cable or link instability at all, which is exactly why the correlated-failure pattern is the stronger signal.',
  },
  {
    id: 'INC-0002',
    date: '2026',
    system: 'cdn-captain',
    severity: 'sev3',
    symptom:
      'Someone asked the bot whether vehicles drop from airdrops. It said yes, and then elaborated — confidently, in detail, and entirely incorrectly.',
    impact:
      'A community support bot gave a wrong answer to a real question, in public, in the authoritative voice it uses for correct ones. No outage; the damage is to trust, which is the only thing this bot actually has.',
    detection: 'user-report',
    investigation: [
      'Traced the answer back through the pipeline to find which retrieved fact had produced it. There was not one.',
      'Confirmed the model had answered from its own priors rather than from anything the retrieval layer supplied — the failure was not bad source data, it was an answer generated without sources at all.',
      'Recognised the deeper problem: asking a model to cite its sources is a prompt, and prompts are requests rather than guarantees. Nothing in the system was checking that a citation corresponded to a real retrieved fact.',
    ],
    rootCause:
      'The bot was trusted to be honest about its own grounding. It was permitted to answer where retrieval had returned nothing useful, and its citations were accepted as given rather than checked against the facts actually retrieved.',
    fix: 'Citations are now verified in code against the retrieved set rather than trusted, and a second independent call acts as a grounding verifier before anything is sent. Answers that fail either check are suppressed rather than posted.',
    prevention:
      'The incident became a permanent golden question in the test suite. Every subsequent wrong answer joins it, so the regression suite is assembled entirely from the bot’s own past mistakes. Suppressed answers are written to a ranked failure log, which is the most useful artifact the system produces.',
    lesson:
      'The valuable engineering here was not the model call. It was deciding what the system does when it does not know — and then enforcing that in deterministic code rather than asking the model nicely. A bot that is confidently wrong is worse than one that stays quiet, so silence became the default and answering became the thing that has to earn its way past two checks.',
  },
];

export const incidentsFor = (system: string) =>
  incidents.filter((i) => i.system === system);

export const getIncident = (id: string) => incidents.find((i) => i.id === id);
