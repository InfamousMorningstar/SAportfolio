# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

Visit the live site: [https://portfolio.ahmxd.net](https://portfolio.ahmxd.net)

## 🛠️ Built With

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS with custom animations
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + JetBrains Mono
- **Deployment:** GitHub Pages with GitHub Actions
- **Domain:** Custom domain via portfolio.ahmxd.net

## ✨ Features

- **Dark Theme:** Sleek, professional dark design with animated backgrounds
- **Responsive:** Fully responsive across all devices
- **Animated:** Smooth animations, floating shapes, and interactive elements
- **Modern:** Next.js 15, Tailwind CSS, and Framer Motion
- **Fast:** Optimized static export for performance
- **SEO:** Search engine optimized with proper meta tags
- **Live Clock:** Real-time clock component in the corner
- **Blog Ready:** Optional blog component for articles (not enabled by default)
- **Accessibility:** ARIA labels, keyboard navigation, and screen reader friendly

## 🎨 Design

- **Color Palette:** Purple (#8B5CF6), Teal (#14B8A6), and Cyan (#06B6D4) accents on dark background
- **Typography:** Inter for body text, JetBrains Mono for code and monospace elements
- **Animations:** Smooth scroll, hover effects, floating shapes, and entrance animations
- **Layout:** Clean, minimalist design inspired by Bruce Wayne/Tony Stark aesthetic
- **Background:** Animated grid pattern with floating geometric shapes
- **Effects:** Glowing buttons, borders, and interactive elements

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Education.tsx
│       ├── Contact.tsx
│       ├── LocalClock.tsx
│       └── Blog.tsx (optional)
├── public/
│   ├── favicon.svg
│   ├── CNAME
│   ├── robots.txt
│   └── sitemap.xml
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── tailwind.config.ts
├── next.config.ts
├── LICENSE
└── README.md
```
├── public/
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/InfamousMorningstar/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out/` directory, ready for deployment to GitHub Pages.

## 🌐 Deployment

This site is configured for GitHub Pages deployment with a custom domain. The build process:

1. Runs `npm run build` to generate static files
2. Outputs to the `out/` directory
3. GitHub Pages serves the static files
4. Custom domain points to the GitHub Pages URL

## 📱 Sections

- **Hero:** Animated welcome with decrypt effect
- **About:** Personal introduction and skills overview
- **Projects:** Featured projects with detailed descriptions
- **Experience:** Professional work history
- **Education:** Academic background and achievements
- **Contact:** Contact information and social links

## 🛠️ Technologies & Tools

### Frontend
- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

### Development
- ESLint
- PostCSS
- Autoprefixer

### Deployment
- Vercel
- Custom Domain (portfolio.ahmxd.net)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Salman Ahmad - [s.ahmad0147@gmail.com](mailto:s.ahmad0147@gmail.com)

Project Link: [https://github.com/InfamousMorningstar/portfolio](https://github.com/InfamousMorningstar/portfolio)
