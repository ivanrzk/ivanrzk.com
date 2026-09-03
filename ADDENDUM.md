# Project Addendum

## Purpose

This file records context and decisions that complement the CV without changing its source content.

## Initial Baseline

The existing site is a static one-page HTML/CSS/JavaScript website with a single dark visual system, animated sections, certifications, experience, and contact links. The modernization pass preserves that deployment model.

## Content Notes

The local CV presents Ivan Raczkowski as a security and DevOps leader with more than 15 years of experience. It supports leadership across cybersecurity governance, ISO/IEC 27001:2022, cloud security, DevSecOps, Azure, AWS, infrastructure automation, enterprise networking, resilience, and technical training.

Credly was added as a public validation source on 2026-09-02. The wallet shows Fortinet FortiGate 7.6 Operator, Fortinet NSE 3 Certified in Cybersecurity, ISC2 Candidate, Cybersecurity Awareness Learner 2025, Cybersecurity Awareness - CAPC, Introduction to Cybersecurity, OPSWAT ICIP, and Cisco CCNA Routing and Switching. Credly identifies OPSWAT ICIP and Cisco CCNA Routing and Switching as expired, while ISC2 Candidate has an expiration date.

The previous site contained inconsistent dates and unsupported claims such as `50+ Projects Delivered`; the redesigned page removes those unsupported metrics.

Credly badge states must not be flattened into a generic "certified" list. The future certifications section should show issuer and status, and should link to individual credential pages when those URLs are confirmed.

## LinkedIn Status

The public profile URL is available in the CV. No authenticated profile data has been copied. Exact headline, dates, current certifications, profile photo, and public links remain pending owner confirmation.

## Asset Status

The current HTML references profile and hero images that are not present in the repository. Use an owner-supplied image or a source with explicit licensing before adding visual assets.

## Maintenance Rule

For each implementation batch, update this file when sources, claims, assets, or product decisions change. Record the shipped code change in `CHANGELOG.md` and update `README.md` with the current workflow.

## 2026-09-02 Implementation Note

The documentation foundation and Copilot customization files were added first. Their paths and frontmatter were checked successfully. The UI smoke test and website implementation remain the next delivery batch.

## 2026-09-02 Browser Review Note

A dedicated Copilot agent and prompt now use the integrated visible Playwright browser for manual LinkedIn review. The obsolete local Node/Playwright helper and package manifest were removed. Authentication challenges are never automated, and credentials, cookies, tokens, and private profile content are not stored.

## 2026-09-02 LinkedIn Review

The authorized visible profile showed the public headline `Head of DevOps & Security Lead at Miracle Devs, Inc`, location `Rosario, Santa Fe, Argentina`, affiliation with Miracle Devs, Inc, and Universidad Nacional de Rosario. The public About section confirms more than 15 years in infrastructure, cybersecurity, cloud platforms, IT operations, Azure, AWS, enterprise networking, Terraform, Bicep, Ansible, Entra ID, Microsoft 365, Intune, Defender XDR, Sentinel, Purview, ISO/IEC 27001:2022, risk management, disaster recovery, business continuity, GitHub Actions, and Azure DevOps.

The LinkedIn profile included `Web Filtering with OpenDNS`, associated with NeuralSoft SRL. That item remains source context but is intentionally excluded from the public website to keep the page focused. Public profile analytics, connections, follower counts, and other private-to-owner information were deliberately excluded.

## 2026-09-02 Website Implementation

The first SPA redesign uses the confirmed LinkedIn headline and public About themes in an executive narrative. Existing repository images were found to be present and were retained; no external visual asset was downloaded. The initial mobile browser check passed for menu state, image loading, and horizontal overflow.

## 2026-09-02 Certificate Pack

The `certificates/` folder is organized by status so expired credentials remain available without being presented as current. The CV source now separates current or verified credentials, public learning badges, candidate status, expired history, and items awaiting the original PDF.

The Microsoft security credential remains named `Microsoft Certified: Security, Compliance, and Identity Fundamentals` pending certificate confirmation. `AZ-900` means Azure Fundamentals and is not substituted for that security credential. No new certification is claimed without an owner-supplied certificate.

## 2026-09-02 Printable CV

Added `cv.html` as the editable, print-ready CV source and generated `CV de Ivan Raczkowski - actualizado.pdf` with Chrome's A4 print engine. The website's Download CV action now points to the updated PDF. Credential names are included without issue or expiration labels, and no unverified certification was added.

ITIL V3 Foundation was removed from the public CV and website after source reconciliation found no corroborating public record or attached certificate. It can be re-added only after the original certificate is provided.

The hero scroll cue was moved out of absolute positioning after responsive review showed it could overlap the primary contact CTA at certain scroll positions and viewport heights.
