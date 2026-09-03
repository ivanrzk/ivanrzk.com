---
description: "Modernize an existing personal or corporate website with responsive UX/UI, accessible SPA patterns, SEO, performance, and smoke-test validation."
name: "Modernize Personal Website"
agent: "Website Modernizer"
argument-hint: "Goal, audience, language, stack, source files, and desired conversion"
---
Modernize the website in this workspace using the Website Modernizer workflow.

Context:
- Goal: ${input:goal:What should the website achieve?}
- Audience: ${input:audience:Who should it serve?}
- Language: ${input:language:What language should the interface use?}
- Stack constraint: ${input:stack:Should the current stack be preserved?}
- Content sources: ${input:sources:Which CV, profile, or brand files are authoritative?}
- Primary conversion: ${input:conversion:What action should visitors take?}

Requirements:

1. Inspect the current implementation and source material before editing.
2. Identify unsupported claims, missing assets, broken links, and responsive or accessibility risks.
3. Keep the existing architecture unless a migration is explicitly justified.
4. Implement a coherent responsive UX/UI improvement with semantic HTML, accessible interaction, SEO, and performance in mind.
5. Add or update focused smoke tests for the changed behavior.
6. Validate at desktop, tablet, and mobile sizes, including keyboard and reduced motion.
7. Update `README.md` in the same batch, plus `CHANGELOG.md` and `ADDENDUM.md` when applicable.

Return:
- Brief audit and implementation rationale.
- Files changed and user-visible improvements.
- Commands executed and results.
- Remaining source, asset, or product decisions.
