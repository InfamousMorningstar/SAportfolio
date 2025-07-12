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
 * 🕒 Updated : Jul 11, 2025
-->
# 🚀 Salman Ahmad – Professional Portfolio

A visually stunning, Apple-inspired portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Showcasing real projects, technical skills, and professional experience with glassmorphic design, neon accents, and S-tier polish.

---

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
- **Hero section:** Animated intro with decrypt effect, floating geometric shapes, and smooth color transitions.
- **About section:** Professional headshot, personal narrative, animated skills grid, and interactive trait badges.
- **Projects section:** Real, production-grade projects with tech stack, features, and links to GitHub/Medium.
- **Experience section:** Timeline of professional roles, responsibilities, and achievements.
- **Education section:** Academic background, highlights, and relevant coursework.
- **Contact section:** Real contact methods (email, Discord, GitHub, LinkedIn, location), availability, and response time.
- **Footer:** Glassmorphic, animated, with signature, motto, tech stack, last updated, and legal notice.
- **S-tier 3D pop-up animation:** All interactive elements feature unified 3D pop and microinteractions.
- **Context-aware floating scroll-to-top arrow:** S-tier, glassmorphic, animated arrow appears only between Contact and Footer, with buttery-smooth spring physics and no flicker.
- **Responsive & accessible:** Mobile-first, keyboard navigation, and ARIA labels.
- **Legal & copyright:** Professional legal notice and copyright compliance.

---

## 🛠️ Built With

- **Next.js 15.3.5** (App Router, SSR)
- **React 18**
- **TypeScript 5.x**
- **Tailwind CSS 3.4.x**
- **Framer Motion 11.18.x**
- **Lucide React 0.525.x**
- **React Icons 5.x**
- **@vercel/analytics**
- **@vercel/speed-insights**

---

## 📁 Folder Structure

```text
portfolio/
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   ├── robots.txt
│   ├── Salman_Ahmad_Resume.pdf
│   ├── sitemap.xml
│   └── images/
│       └── profile-photo.JPG
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── Blog.tsx
│       ├── Contact.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── LocalClock.tsx
│       ├── Navbar.tsx
│       ├── Projects.tsx
│       └── ScrollToTopArrow.tsx
├── DEPLOYMENT.md
├── LICENSE
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── tsconfig.tsbuildinfo
```

---

## 📁 Main Components & Sections

- `Navbar` – Glassmorphic, animated, with live clock and anchor navigation
- `Hero` – Animated intro, floating shapes, decrypt effect
- `About` – Headshot, narrative, animated skills grid
- `Projects` – Real projects (portfolio, TrueNAS homelab, media automation, infra dashboard)
- `Experience` – Work timeline, responsibilities, achievements
- `Education` – Degrees, highlights, coursework
- `Contact` – Email, Discord, GitHub, LinkedIn, location, availability
- `Footer` – Glassy, animated, legal notice, tech stack, last updated
- `Blog` – Placeholder only (no real blog integration)
- `ScrollToTopArrow` – S-tier, context-aware, glassmorphic, animated floating arrow that appears only between Contact and Footer, with spring physics and no flicker

---

## 📞 Contact

- **Email:** [s.ahmad0147@gmail.com](mailto:s.ahmad0147@gmail.com)
- **Discord:** [infamous_morningstar](https://discord.com/users/699763177315106836)
- **GitHub:** [InfamousMorningstar](https://github.com/InfamousMorningstar)
- **LinkedIn:** [Salman Ahmad](https://www.linkedin.com/in/salman-ahmad-6788811b6/)
- **Location:** [Calgary, AB, Canada](https://www.google.com/maps/place/Calgary,+AB)

---

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
- **Resume Integration:** Replace `/public/Salman_Ahmad_Resume.pdf`
- **Blog Posts:** Configure `/components/Blog.tsx` for article display (placeholder only)
- **Scroll-to-Top Arrow:** Refine `/components/ScrollToTopArrow.tsx` for context-aware, S-tier animated floating arrow

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

