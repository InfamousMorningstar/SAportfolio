<!--
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
 * 📁 File    : README.md
 * 🕒 Updated : March 16, 2026
-->
# 🚀 0xPortfolio v2.1 – Salman Ahmad

A high-performance, sci-fi/cyberpunk-inspired portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This **Version 2.1 Update** refines the visual identity with a sophisticated "Particle Network" aesthetic, advanced canvas animations, and improved system theming.

---

## 🟢 v2.1 Update Highlights

- **Particle Network Background:** A dynamic, interactive constellation mesh that reacts to mouse movement and adapts seamlessly to light/dark themes.
- **Enhanced Loading Sequence:** Upgraded "Gyroscopic Core" animation with HUD elements and glitch-free transitions.
- **Improved Theming:** robust state management for the background system, ensuring instant and smooth transitions between light and dark modes.
- **Performance Optimization:** Replaced heavy GLSL shaders with optimized Canvas 2D implementations for better battery life on mobile devices.
- **Codebase Cleanup:** Removed unused assets and simplified the component architecture for better maintainability.

## 🟢 CLS Optimization & Deployment Readiness

This portfolio is fully optimized for Cumulative Layout Shift (CLS) and Core Web Vitals:

- **No layout jank:** All images, headings, and dynamic content reserve space to prevent shifting.
- **Animation polish:** Framer Motion controls all transitions; no interfering CSS transitions or legacy styles.
- **Instant micro-interactions:** All buttons and interactive elements use spring physics for instant feedback.
- **Consistent structure:** No conflicting CSS, no legacy code, and all files are deployment-ready.
- **Signature comments:** Every major file includes a signature block for author, license, and update info.

### CLS Best Practices Checklist

- Use `width` and `height` attributes for all images and media.
- Reserve space for headings, icons, and dynamic content.
- Avoid layout shifts from fonts by using `font-display: swap`.
- Use Framer Motion for all entrance/exit animations.
- Remove all CSS transitions from interactive elements; use JS animation only.
- Test on mobile and desktop for zero jank.
- Validate with Lighthouse and Chrome DevTools.

## ✨ Features

- **Apple-style glassmorphic UI:** Frosted glass navbar, footer, and cards with deep blur, neon accent gradients, and floating particles.
- **Animated navigation:** Responsive, glassy navbar with anchor links, live dual-timezone clock (MDT & UTC), and animated hamburger menu for mobile.
- **Hero section:** Animated intro with decrypt effect, floating geometric shapes, smooth color transitions, and professional blog hint linking to SYSADMIN_ARCHIVES.
- **SYSADMIN_ARCHIVES Blog System:** Complete separate blog platform featuring technical infrastructure logs, homelab documentation, and system administration deep-dives with computer science themed backgrounds.
- **About section:** Professional headshot, personal narrative, animated skills grid, and interactive trait badges.
- **Projects section:** Real, production-grade projects with tech stack, features, and links to GitHub/Medium.
- **Experience section:** Timeline of professional roles, responsibilities, and achievements.
- **Education section:** Academic background, highlights, and relevant coursework.
- **Contact section:** Real contact methods (email, Discord, GitHub, LinkedIn, location), availability, and response time.
- **Footer:** Glassmorphic, animated, with signature, motto, tech stack, dynamic last updated date, and legal notice.
- **S-tier 3D pop-up animation:** All interactive elements feature unified 3D pop and microinteractions.
- **Context-aware floating scroll-to-top arrow:** S-tier, glassmorphic, animated arrow appears only between Contact and Footer, with buttery-smooth spring physics and no flicker.
- **Responsive & accessible:** Mobile-first, keyboard navigation, and ARIA labels.
- **Legal & copyright:** Professional legal notice and copyright compliance.

---

## 🛠️ Built With

- **Next.js 15.5.6** (App Router, Static Export)
- **React 18**
- **TypeScript 5.9.3**
- **Tailwind CSS 3.4.18**
- **Framer Motion 11.18.x**
- **Vercel Analytics & Speed Insights** (Real-time Core Web Vitals)
- **Optimized Images** (WebP & AVIF with responsive sizing)
- **Complete Blog System** — SYSADMIN_ARCHIVES with separate routing, themed backgrounds, and technical content
- **Professional SEO** — Full metadata, Open Graph, Twitter cards, XML sitemap
- **Production Security** — Latest dependency updates, vulnerability scanning
- **Cinematic, S-tier scroll/entrance animation** for all major sections (Framer Motion, hardware-accelerated, lag-free, CLS/hydration safe)
- **Apple-style Liquid-Glass navbar & footer** — 200% blur field, LED under-glow, pointer-safe masking (< 0.01 CLS)
- **Motion-driven mobile UX** — Framer-Motion hamburger morphs into a staggered menu with buttery easing
- **Live dual-timezone pill clock** (MDT / UTC) updating every second for global availability
- **Decrypt-style hero + floating geometry** — cinematic text-reveal plus depth layers, zero layout shift
- **Universal neon scrollbar & ISO dark-mode theme** with graceful fall-backs across Chrome, Firefox, Safari
- **CI/CD-ready, type-safe stack** — Next.js 15, TypeScript, Tailwind, ESLint auto-deploying to Vercel edge
- **Legal-grade compliance footer** — dynamic copyright, Latin motto, and Canadian Copyright Act notice
portfolio/
- `Hero`: Cinematic decrypt text, floating geometry, scroll arrow, content lift, micro-bounce, zero CLS
- `Navbar`: Apple-style glass, LED under-glow, device-appropriate hover/click (desktop: hover, mobile: tap), dual-timezone pill clock, social icons (desktop), hamburger menu (mobile), pixel-perfect alignment
- `About`: Animated entrance, premium card, responsive grid, Space Grotesk font
- `Experience`: Animated timeline, premium card, micro-bounce, responsive
- `Projects`: Animated card grid, premium card, feature list (see below), live status, GitHub/demo links
- `Education`: Animated entrance, premium card, responsive
- `Blog`: Animated entrance, premium card, responsive
- `Contact`: Animated entrance, premium card, social links, legal compliance, **no 3D pop on Location/Email** (simple links)
- `Footer`: Apple-style glass, LED under-glow, dynamic copyright, Latin motto, legal notice
│   │   ├── globals.css
- Apple-style Liquid-Glass navbar & footer — 200 % blur field, LED under-glow, pointer-safe masking (< 0.01 CLS)
- Motion-driven mobile UX — Framer-Motion hamburger morphs into a staggered menu with buttery easing
- Live dual-timezone pill clock (MDT / UTC) updating every second for global availability
- Decrypt-style hero + floating geometry — cinematic text-reveal plus depth layers, zero layout shift
- Universal neon scrollbar & ISO dark-mode theme with graceful fall-backs across Chrome, Firefox, Safari
- Built-in performance telemetry via Vercel Analytics & Speed Insights badges (real-time Core Web Vitals)
- CI/CD-ready, type-safe stack — Next.js 15, TypeScript, Tailwind, Husky pre-commit hooks auto-deploying to Vercel edge
- Legal-grade compliance footer — dynamic copyright, Latin motto, and Canadian Copyright Act notice
│       ├── Hero.tsx
- Uses [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for headings and UI, with fallbacks for system fonts.

- Accent colors and gradients are defined in `tailwind.config.ts` and used throughout for a consistent, premium look.

- All major sections use Framer Motion for entrance/scroll animation. Animations are hardware-accelerated, lag-free, and CLS/hydration safe.

- Fully responsive, mobile-first layout. Device-appropriate hover/click logic for nav buttons and interactive elements. Social icons visible on desktop, hamburger menu and clock logic refined for mobile.

- Footer includes dynamic copyright, Latin motto, and Canadian Copyright Act/DMCA notice.
├── tailwind.config.ts
- All main component files include a standardized signature block with file name and date (see top of each file).
## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/                # Optimized images (webp, avif, responsive sizes)
│   │   ├── profile-photo-320.webp
│   │   ├── profile-photo-480.webp
│   │   ├── profile-photo-768.webp
│   │   ├── profile-photo-1024.webp
│   │   ├── profile-photo-1280.webp
│   │   ├── profile-photo-1600.webp
│   │   ├── profile-photo-1920.webp
│   │   └── [corresponding .avif files]
│   ├── favicon.svg
│   ├── resume.pdf
│   ├── robots.txt
│   └── sitemap.xml            # Updated with blog routes
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── blog/              # SYSADMIN_ARCHIVES blog system
│   │   │   ├── layout.tsx     # Blog-specific metadata
│   │   │   └── page.tsx       # Blog listing page
│   │   ├── fonts.ts
│   │   ├── globals.css
│   │   ├── layout.tsx         # Root layout with full SEO metadata
│   │   └── page.tsx           # Main portfolio page
│   ├── components/            # React components (modular, reusable)
│   │   ├── About.tsx
│   │   ├── BlogPost.tsx       # TrueNAS SCALE technical deep-dive
│   │   ├── CentauriPlexPost.tsx # Plex automation system documentation
│   │   ├── HybridEdgePost.tsx # Hybrid edge computing setup
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx         # Dynamic last updated date
│   │   ├── Hero.tsx           # With professional blog hint
│   │   ├── Navbar.tsx         # Updated with Blog navigation
│   │   ├── Projects.tsx
│   │   ├── ScrollProgressBar.tsx
│   │   └── ScrollToTopArrow.tsx
│   └── constants/
│       └── lastUpdated.ts     # Centralized date management
├── .eslintrc.js
├── next.config.js
├── package.json               # Updated dependencies (Next.js 15.5.4, latest types)
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── LICENSE
```

- All main files include signature comments for author, license, and last update.

---

## 📖 SYSADMIN_ARCHIVES Blog System

### Technical Content Platform
The portfolio features a complete separate blog system accessible via `/blog` that showcases technical expertise and system administration experience.

### Blog Features
- **Terminal-Style Branding:** `\\.SYSADMIN_ARCHIVES` heading with monospace typography
- **Computer Science Themed Backgrounds:** Binary code patterns, mathematical equations, circuit diagrams, floating particles
- **Three Technical Deep-Dives:**
  - **Centauri (Plex) Automation System:** First-person documentation of a 95% automated user lifecycle management platform managing 61 Plex users with Python scripts, Tautulli API integration, cron job orchestration, SQLite database, email notifications, and zero daily intervention. Features space/DevOps themed background with constellation patterns.
  - **TrueNAS SCALE Setup:** Complete homelab infrastructure documentation covering ZFS pool "Centauri", Intel i7-8700 hardware, Quadro P1000 GPU, 72TB storage, Cloudflare Tunnels, and services (Plex, Nextcloud, Immich)
  - **Hybrid Edge Computing:** ZimaBoard 2 edge node architecture, network topology, container orchestration, and performance benefits
- **Professional Navigation:** Seamless routing between portfolio and blog content
- **SEO Optimized:** Complete metadata, social media cards, and search engine optimization
- **Responsive Design:** Mobile-first approach with glassmorphic design consistency

### Content Focus
- System administration logs and documentation
- Infrastructure setup guides and lessons learned  
- Production environment deep-dives
- Homelab automation and cloud-native technologies
- DevOps practices and troubleshooting guides

### Hero Integration
The main portfolio Hero section includes a subtle, professional call-to-action that directs visitors to the technical blog content with the hint "Read my technical logs" in a glassmorphic, animated button.

---
- See each section/component for more details in the README.
```
## 📄 License & Legal Notice

This website and its source code are protected under the **Copyright Act, R.S.C., 1985, c. C-42 (Canada)** and the **DMCA**. Unauthorized reproduction, redistribution, or modification is strictly prohibited. For licensing or legal inquiries, contact: s.ahmad0147@gmail.com with subject line "PERMISSION REQUEST".

MIT License. See `LICENSE` for details.

---

**© Salman Ahmad – ahmxd.net – All Rights Reserved.**

---

## 🚀 Development Workflow

### Local Development Setup

1. **Repository Clone:**
   ```bash
   git clone https://github.com/InfamousMorningstar/SAportfolio.git
   cd portfolio
   ```

2. **Dependency Installation:**
   ```bash
   npm install
   # Installs Next.js, React, Tailwind, Framer Motion, Analytics packages
   ```

3. **Development Server:**
   ```bash
   npm run dev
   # Starts hot-reload development server on http://localhost:3000
   ```

4. **Build Verification:**
   ```bash
   npm run build
   # Creates optimized production build with static export
   ```

### Code Quality & Standards

- **TypeScript Strict Mode** – Type safety across all components
- **ESLint Configuration** – Enforced coding standards and best practices
- **Component Architecture** – Modular, reusable component design
- **Performance Optimization** – Image optimization, lazy loading, code splitting
 - **Signature Comments** – Every major file includes a signature block for author, license, and update info
 - **CLS Optimization** – All layout, animation, and content loads are optimized for zero jank
 - **No Interfering CSS** – All transitions and animations are handled by Framer Motion only
 - **Deployment Ready** – Codebase is clean, documented, and ready for production

---

## 🌐 Deployment & Infrastructure

### Vercel Platform Integration
- **Automatic Deployments** – GitHub push triggers instant deployment
- **Preview Deployments** – Branch-based staging environments
- **Custom Domain** – SSL-secured professional domain
- **Edge Network** – Global CDN for optimal performance
- **Analytics Dashboard** – Real-time performance and visitor insights

### Domain Configuration
- **Primary Domain:** portfolio.ahmxd.net
- **SSL Certificate:** Automatic HTTPS with Let's Encrypt
- **DNS Management:** Cloudflare integration for performance
- **Subdomain Ready** – Prepared for blog.ahmxd.net expansion

### Performance Optimizations
- **Static Generation** – Pre-rendered pages for fastest loading
- **Image Optimization** – Next.js automatic image compression
- **Font Optimization** – Google Fonts with font-display: swap
- **CSS Optimization** – Purged unused styles and optimized delivery
- **JavaScript Splitting** – Optimized bundle sizes with lazy loading

---

## 🎯 SEO & Marketing Features

### Search Engine Optimization
- **Meta Tags** – Comprehensive meta descriptions and keywords
- **Open Graph** – Social media sharing optimization
- **Twitter Cards** – Enhanced Twitter link previews
- **Structured Data** – Schema.org markup for rich snippets
- **Sitemap Generation** – Automatic XML sitemap creation

### Social Media Integration
- **LinkedIn Profile** – Professional network connection
- **GitHub Showcase** – Open source project portfolio
- **Medium Articles** – Technical writing and thought leadership
- **Email Contact** – Professional communication channel

---

## 📊 Analytics Insights

### Available Metrics
- **Real-time Visitors** – Live site engagement tracking
- **Page Performance** – Loading times and Core Web Vitals
- **User Journey** – Navigation patterns and section engagement
- **Geographic Data** – Visitor location and timezone analysis
- **Device Insights** – Desktop, mobile, and tablet usage

### Performance Benchmarks
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** Excellent rating across all metrics
- **Loading Speed:** < 1.5s First Contentful Paint
- **Interactive Time:** < 2.5s Time to Interactive

---

## 🔧 Customization Guide

### Theme Modifications
```typescript
// tailwind.config.ts - Custom color palette
theme: {
  extend: {
    colors: {
      accent: '#8B5CF6',    // Purple - Primary brand color
      accent2: '#14B8A6',   // Teal - Secondary accent
      secondary: '#06B6D4'  // Cyan - Tertiary accent
    }
  }
}
```

### Animation Customizations
```typescript
// Framer Motion variants for custom animations
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
}

// S-tier spring for ScrollToTopArrow
const scrollToTopSpring = {
  type: 'spring',
  stiffness: 120,
  damping: 18,
  mass: 0.7
}
```

### Content Management
- **Project Showcase:** Modify `/components/Projects.tsx` for portfolio items
- **Resume Integration:** Replace `/public/resume.pdf`
- **Blog Content:** Two comprehensive technical posts in `/components/BlogPost.tsx` and `/components/HybridEdgePost.tsx`
- **SYSADMIN_ARCHIVES:** Full blog system at `/blog` route with separate metadata and theming
- **Dynamic Footer:** Centralized last updated date management via `/constants/lastUpdated.ts`

---

## 📈 Future Enhancements

### Planned Features
- **CMS Integration** – Headless CMS for dynamic content management
- **Blog Platform** – Full blog with dynamic routing and MDX support
- **Contact Form Backend** – Serverless function for message handling
- **Multi-language Support** – Internationalization for global reach
- **Advanced Analytics** – Custom event tracking and conversion funnels

### Technical Roadmap
- **Next.js 16 Migration** – Latest framework features and optimizations
- **React Server Components** – Enhanced performance and SEO
- **Edge Runtime** – Faster cold starts and global distribution
- **Advanced Caching** – Intelligent caching strategies for optimal performance

---

## 🧩 Attribution

- **Font:** Inter & JetBrains Mono – Google Fonts
- **Icons:** Lucide React – MIT License
- **Animations:** Framer Motion – MIT License
- **Framework:** Next.js – MIT License

---

**Built with ❤️ by Salman Ahmad**  
*Aut viam inveniam aut faciam* – I shall either find a way or make one.

