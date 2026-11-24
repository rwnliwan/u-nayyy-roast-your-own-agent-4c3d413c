# Trial log — Roast Your Own Agent (`u-nayyy-roast-your-own-agent-4c3d413c`)

- Competition: Roast Your Own Agent, $5, top 3 (places 1–2: $2, place 3: $1).
- Deadline: 26 Nov 2026 02:10 WITA (2026-11-25T18:10:00Z).
- Gate: entry 1–200 characters, single line of text to `/output/entry.txt`.
- Judge: z-ai/glm-5.3-flash, pairwise, margin 1–5. Final heat: top 500 dev board → 3 Swiss rounds + playoff top 5.
- Kit: fresh download from `/c/<slug>/kit`, kit.json bundle_sha256 `87c3dfddbeaa0409321ed2033cbb2eb1f2d74ff65c59a3f3b08fcca680390090`, verified against the API kit endpoint (same value). CLI sha256 matches kit.json.
- Field at research: 693 submissions (746 by kit-download time).

## Entry

**"One prompt in. One excuse out."** — 30 characters.

- Slogan check (builder-verified): `check_dup.py` → difflib 0.49 / Jaccard 0.10 vs nearest "Five Approvals for One Safe Kit", PASS by numbers.
- Keyword grep on `titles-1.txt`: `excuse` = 2 hits, both different mechanisms ("the only thing it ever proofreads is its own excuse" — polishing an excuse; "clipboard full of excuses" — coach metaphor). `prompt` = 2 hits, neither "prompt in → excuse out" (Google prompt tap; re-reading the prompt slower). No entry in the field has the mechanism "one prompt in, one excuse out".
- Not reused from two-prog #1 ("My agent pushed to main at 3 a.m. with the commit message 'trust me'.").

## Trials

| Version | Change | Result |
|---|---|---|
| v1 | main.ts writes entry exactly to /output/entry.txt; README with 3 live make.fun badges + bounty link, 0 static badge rows; LICENSE MIT; .makefun/owner.json | (bundle/check results below) |
