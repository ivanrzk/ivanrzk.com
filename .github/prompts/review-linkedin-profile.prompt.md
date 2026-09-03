---
description: "Open a visible Playwright tab for a manual LinkedIn login, review authorized public profile content, and translate it into source-backed website recommendations."
name: "Review LinkedIn Profile"
agent: "LinkedIn Website Reviewer"
argument-hint: "Public profile URL and sections to inspect"
---
Open a visible Playwright browser tab for this public profile:

- URL: ${input:url:https://www.linkedin.com/in/iv%C3%A1n-raczkowski-60b31432/}
- Sections to review: ${input:sections:headline, About, Experience, Licenses & Certifications, Featured, Skills}
- Website goal: ${input:goal:executive personal website}

Use the integrated visible Playwright browser to open or reuse the profile tab. Let me complete any login or verification manually in the browser. Do not request or handle credentials, codes, cookies, or private messages.

After I confirm the profile is ready:

1. Review only the authorized public sections.
2. Compare them with `Ivan_Raczkowski_LinkedIn_CV_Summary.md` and Credly.
3. Classify content as confirmed, pending, expired, candidate, or unsupported.
4. Recommend concise website copy, information architecture, and UX improvements.
5. Update `docs/CONTENT-SOURCES.md`, `ADDENDUM.md`, `CHANGELOG.md`, and `README.md` when the review produces a repository change.
