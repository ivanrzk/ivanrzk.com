# Changelog

All notable changes to this project are documented here.

## [Unreleased]

### Added

- Added project planning and source documentation under `docs/`.
- Added `ADDENDUM.md` for source notes, claims, assets, and decisions.
- Added this changelog for implementation traceability.

### Validation

- Confirmed that all documentation paths linked from `README.md` exist.
- Confirmed that the custom agent, skill, and prompt frontmatter is present.

### Content

- Added the public Credly badge wallet as a certification validation source.
- Recorded visible badge expiration and candidate states so future UI copy does not imply that every badge is current.

### Browser Review

- Added a dedicated `LinkedIn Website Reviewer` agent and reusable review prompt for the integrated visible Playwright browser.
- Removed the unused local Node/Playwright helper and package manifest; the active workflow is provided by the integrated browser tool.

### Environment

- Removed the obsolete local Node/Playwright instructions from `README.md` after switching to the integrated browser workflow.

### Website

- Replaced the generic single-page content with an executive security and DevOps profile based on the CV, LinkedIn, and Credly sources.
- Added source-backed focus areas, credentials with status context, career timeline, featured OpenDNS work, and contact CTAs.
- Added SEO metadata, Open Graph metadata, Person JSON-LD, functional CV/LinkedIn/GitHub/Credly links, and accessible navigation markup.
- Replaced the old visual system with a responsive editorial-technology design using the existing profile and hero assets.
- Simplified JavaScript to mobile navigation, theme persistence, smooth anchors, accessible reveals, and back-to-top behavior.

### Browser Validation

- Verified at 390px in the integrated browser: menu opens, `aria-expanded` updates, dark theme toggles, image loads, and horizontal overflow is absent.
- Verified at 1440px: page loads without failed requests or horizontal overflow; internal anchors and external link security attributes are valid.
- Verified mobile theme behavior after reload: light/dark state persists, the mobile menu opens, and Escape closes it.
- Generated an updated A4 CV PDF from the printable `cv.html` document and connected it to the website download action.
- Simplified the site to one dark theme by removing the theme toggle, theme persistence, and light-theme CSS branch.
- Removed ITIL V3 Foundation from the public credential lists and regenerated the downloadable PDF because it was not corroborated by the available public sources or an attached certificate.
- Removed the optional Featured work/OpenDNS section to keep the public site focused on positioning, credentials, experience, and contact.
- Fixed the hero `Scroll to explore` cue overlapping the primary CTA by moving it into normal document flow and shortening the CTA to `Get in touch`.

### Certificates and CV

- Added the `certificates/` attachment pack with status-based folders and a checklist of PDFs still needed.
- Corrected the CV credential section to preserve expired badges and distinguish current, candidate, public badge, and pending credentials.
- Kept AZ-900 out of the confirmed credentials until its original certificate is provided; AZ-900 is Azure Fundamentals, while the documented Microsoft security credential is commonly SC-900.

### Changed

- Established the rule that every meaningful implementation batch updates `README.md`.

### Pending

- Desktop/tablet visual review, automated UI smoke test, and Lighthouse/accessibility review.
