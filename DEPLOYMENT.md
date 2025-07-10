# Deployment Guide

## 🚀 Quick Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Domain configured (portfolio.ahmxd.net)
- Repository set up with this code

### Steps

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/InfamousMorningstar/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to Pages section
   - Source: GitHub Actions
   - The workflow will automatically deploy on push to main

3. **Configure Custom Domain:**
   - In repository Settings > Pages
   - Custom domain: `portfolio.ahmxd.net`
   - Enforce HTTPS: ✅

4. **DNS Configuration:**
   Configure your DNS provider with these records:
   ```
   Type: CNAME
   Name: portfolio
   Value: infamousmorningstar.github.io
   ```

### Environment Variables
No environment variables required for this static site.

### Build Process
The GitHub Action automatically:
1. Installs dependencies (`npm ci`)
2. Builds the project (`npm run build`)
3. Deploys to GitHub Pages from the `out/` directory

### Verification
After deployment, verify:
- ✅ Site loads at https://portfolio.ahmxd.net
- ✅ All sections are working
- ✅ Animations are smooth
- ✅ Mobile responsive
- ✅ Fast loading times

### Troubleshooting

**Build Fails:**
- Check the Actions tab for error logs
- Ensure all dependencies are in package.json
- Verify no TypeScript errors

**DNS Issues:**
- DNS changes can take 24-48 hours
- Verify CNAME record points to infamousmorningstar.github.io
- Check if domain is properly configured in repository settings

**404 Errors:**
- Ensure CNAME file exists in public/ directory
- Verify next.config.js has correct export settings

### Performance Optimization
The site is already optimized with:
- ✅ Static generation
- ✅ Image optimization disabled for GitHub Pages
- ✅ Minimal bundle size
- ✅ Code splitting
- ✅ CSS optimization

### Analytics (Optional)
To add Google Analytics:
1. Get GA tracking ID
2. Add to layout.tsx
3. Update privacy policy if needed
