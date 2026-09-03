# Website Modernization Plan

## Goal

Position Ivan Raczkowski as a CISO, Security Lead, and Head of DevOps through a fast, accessible, executive-focused single-page website.

## Constraints

- Keep the current static HTML, CSS, and JavaScript stack.
- Publish the first version in English.
- Use the local CV as the editorial source of truth.
- Use only public LinkedIn and Credly information or material explicitly shared by the owner.
- Do not use private credentials, authenticated scraping, or unverified claims.

## Delivery Phases

1. **Content:** reconcile roles, dates, expertise, credentials, and public links with the CV and LinkedIn.
2. **Structure:** create a clear executive hero, focus areas, selected impact, credentials, career timeline, teaching, and contact sections.
3. **Visual system:** establish a restrained editorial-technology direction with strong contrast and mobile-first layout.
4. **Interaction:** keep mobile navigation, active sections, accessible reveal motion, and return-to-top behavior.
5. **Quality:** run the UI smoke test at desktop, tablet, and mobile sizes; complete the manual UX checklist.
6. **Documentation:** update `README.md`, `CHANGELOG.md`, and `ADDENDUM.md` for every implementation batch.
7. **Profile review:** use the integrated visible Playwright browser and pause for manual login; review only authorized public content.

## Current Status

- [ ] Content reconciliation
- [x] SPA structure and copy
- [x] Visual redesign
- [x] JavaScript interaction cleanup
- [ ] Automated smoke test
- [x] Manual UX review: initial mobile and desktop browser checks
- [ ] Lighthouse/accessibility review
- [x] Certificate attachment folder and CV credential status cleanup
- [x] Integrated Playwright LinkedIn review agent and prompt
- [x] Owner-authorized LinkedIn profile review
