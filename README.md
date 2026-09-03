# Ivan Raczkowski - Personal Website

A modern, responsive personal website showcasing Ivan Raczkowski's professional experience, skills, and certifications in DevOps and Security.

## 🚀 Features

### **Modern Design**
- **Editorial technology direction**: Executive profile layout with clear hierarchy and restrained visual language
- **CSS Grid and Flexbox**: Responsive layout using modern native CSS primitives
- **Dark Mode**: A single, consistent dark theme
- **Accessible motion**: Lightweight reveal transitions with a reduced-motion path

### **Responsive & Accessible**
- **Mobile-First**: Optimized for all device sizes
- **Semantic HTML**: Proper structure for accessibility
- **Performance Optimized**: Fast loading with optimized images
- **SEO Friendly**: Meta tags and structured content

### **Interactive Elements**
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Animated Statistics**: Counter animations for experience metrics
- **Hover Effects**: Interactive elements with modern hover states
- **Mobile Navigation**: Simple hamburger menu for mobile devices

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties
- **Vanilla JavaScript**: No frameworks, pure JS
- **Google Fonts**: Inter and JetBrains Mono typography
- **CSS Grid & Flexbox**: Modern layout techniques

## 📁 Project Structure

```
ivanrzk.com/
├── index.html          # Main HTML file
├── css/
│   └── modern.css      # All styles and responsive design
├── js/
│   └── modern.js       # Interactive functionality
├── img/
│   ├── profile-optimized.jpg  # Profile image
│   └── slide-bg.jpg          # Hero background
└── README.md           # This file
```

## Project Documentation

- [Implementation plan](docs/PLAN.md)
- [Content sources and claim status](docs/CONTENT-SOURCES.md)
- [UX/UI manual checklist](docs/UX-UI-CHECKLIST.md)
- [Technical and visual decisions](docs/DECISIONS.md)
- [Project addendum](ADDENDUM.md)
- [Changelog](CHANGELOG.md)

The local CV remains the primary content source. LinkedIn is used only as a public reference or through material explicitly shared by the profile owner. Credentials and private profile data are never stored in this repository.

Credly is also tracked as a public source for badge verification, issuer names, issue dates, and expiration states. Expired or candidate badges will not be presented as current certifications.

## Copilot Toolkit

This workspace includes reusable guidance for future iterations:

- `.github/agents/website-modernizer.agent.md` — responsive personal and corporate website specialist.
- `.github/skills/responsive-personal-site/SKILL.md` — repeatable UX/UI, accessibility, SEO, performance, and validation workflow.
- `.github/prompts/modernize-personal-website.prompt.md` — task prompt for starting a modernization pass.
- `.github/agents/linkedin-website-reviewer.agent.md` — privacy-conscious visible-browser profile reviewer.
- `.github/prompts/review-linkedin-profile.prompt.md` — prompt for an authorized LinkedIn review.

### Manual LinkedIn Review

Use the `LinkedIn Website Reviewer` agent or the `Review LinkedIn Profile` prompt. It uses the integrated visible Playwright browser to open or reuse a tab and lets the profile owner complete login or verification directly. The workflow never requests or stores credentials, codes, cookies, tokens, private messages, or other private profile data.

## Quality Workflow

For every meaningful implementation batch:

1. Update `README.md` with the current structure, commands, and status.
2. Update `ADDENDUM.md` when sources, claims, assets, or product decisions change.
3. Update `CHANGELOG.md` with the shipped change and validation result.
4. Run the focused smoke test and complete the manual UX/UI checklist.

The smoke test will cover page loading, metadata, console/request failures, internal anchors, CV download, external links, mobile navigation, keyboard focus, reduced motion, image stability, and horizontal overflow at desktop, tablet, and mobile viewports.

### Current Implementation Status

- Documentation foundation: complete.
- Copilot agent, skill, and prompt: complete and frontmatter-validated.
- Credly source reconciliation: initial public review complete; individual credential URLs pending.
- Responsive SPA redesign: first implementation batch complete.
- Automated UI smoke test: pending.
- Manual UX/UI review: pending.
- LinkedIn integrated browser review: active; public profile review completed for the authorized visible sections.
- Executive SPA structure and visual redesign: complete for the first implementation batch.
- Mobile navigation, dark theme, image loading, and overflow checks: validated in the integrated browser.
- Desktop browser check at 1440px: page loaded with no failed requests, valid internal targets, safe external link attributes, and no horizontal overflow.
- Certificate pack: `certificates/` is ready for current, expired, candidate, and pending-confirmation PDFs.
- Printable CV: `cv.html` includes an `Export PDF` action, and the updated PDF is available from the website navigation.

## 🎨 Design Features

### **Color Scheme**
- **Dark Mode**: Deep petrol surfaces with readable teal and coral accents
- **CSS Variables**: Consistent theming throughout

### **Typography**
- **Display Font**: Space Grotesk for headings and professional labels
- **Body Font**: DM Sans for readable long-form content
- **Responsive Sizing**: Clamp() functions for fluid typography

### **Layout**
- **Container**: Max-width 1200px with responsive padding
- **Grid System**: CSS Grid for certifications and skills
- **Flexbox**: Navigation and content alignment
- **Spacing**: Consistent spacing with CSS custom properties

## 🚀 Getting Started

### **Local Development**

1. **Clone the repository**
   ```bash
   git clone https://github.com/ivanrzk/ivanrzk.com.git
   cd ivanrzk.com
   ```

2. **Start local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx serve .
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### **Production Deployment**

The website is ready for deployment to any static hosting service:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3**

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Sections

### **Hero Section**
- Professional introduction
- Call-to-action buttons
- Background image with overlay

### **About Section**
- Source-backed professional summary
- Executive positioning and career through-line
- No unsupported project metrics

### **Skills & Expertise**
- Security governance, cloud and DevSecOps, and resilient infrastructure focus areas
- Technology tags used as context rather than subjective percentage bars
- Responsive grid layout

### **Licenses & Certifications**
- 15 professional certifications
- Clean card design with hover effects
- Organized by technology/company

### **Work Experience**
- Chronological timeline
- Company details and roles
- Responsive timeline design

### **Contact Section**
- Email contact
- Social media links
- Professional contact information

## 🔧 Customization

### **Colors**
Edit CSS variables in `css/modern.css`:
```css
:root {
    --primary-color: #6366f1;
    --accent-color: #06b6d4;
    /* ... other variables */
}
```

### **Content**
- Update personal information in `index.html`
- Modify certifications list
- Adjust work experience timeline
- Update contact information

### **Styling**
- Modify `css/modern.css` for design changes
- Update animations in `js/modern.js`
- Adjust responsive breakpoints

## 📊 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Image Optimization**: Compressed and optimized images
- **Minimal Dependencies**: No external frameworks
- **Fast Loading**: Optimized CSS and JavaScript

## 🌟 Features in Detail

### **Dark Mode**
- Single dark theme for a consistent executive presentation
- No theme state or storage overhead
- Header and footer use the same dark visual system

### **Mobile Navigation**
- Compact menu controlled by `aria-expanded`
- Closes after selecting a section or pressing Escape
- Responsive panel with keyboard-visible focus states

### **Accessible Motion**
- Section reveals use `IntersectionObserver` when motion is allowed
- `prefers-reduced-motion` disables reveal and smooth-scroll animation
- Synchronized timing
- Professional number formatting

### **Smooth Scrolling**
- Intersection Observer for animations
- Debounced scroll events
- Performance optimized

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Ivan Raczkowski**
- DevOps & Security Lead
- 10+ years of experience
- Expert in Azure, infrastructure automation, and network security

---

*Built with ❤️ using modern web technologies*
