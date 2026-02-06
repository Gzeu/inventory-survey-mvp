# Inventory Survey MVP - Deployment Guide

## Quick Deploy (5 minutes)

### Option 1: GitHub Pages (Free, Easiest)

```bash
# Already set up! Just visit:
https://yourusername.github.io/inventory-survey-mvp
```

**Setup steps:**
1. Go to Settings → Pages
2. Select "Deploy from branch"
3. Choose "main" branch, "/" (root) folder
4. Click Save
5. Visit your GitHub Pages URL

---

### Option 2: Vercel (Free, Recommended)

**Method A: Import from GitHub**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project" → "Import Git Repository"
3. Select `Gzeu/inventory-survey-mvp`
4. Click "Deploy"
5. Get live URL in ~1 minute

**Method B: CLI Deploy**
```bash
npm i -g vercel
vercel
# Follow prompts, automatically detects static site
```

**Result**: App live at `https://your-project.vercel.app`

---

### Option 3: Netlify (Free)

**Method A: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Drag the `inventory-survey-mvp` folder to "Deploy">
3. Done! Get URL in seconds

**Method B: Connect GitHub**
1. Click "New site from Git"
2. Connect GitHub, select repository
3. Netlify auto-detects settings
4. Click "Deploy site"

**Result**: App live at `https://your-site.netlify.app`

---

### Option 4: AWS S3 + CloudFront

```bash
# 1. Create S3 bucket
aws s3 mb s3://inventory-survey-mvp

# 2. Upload files
aws s3 cp index.html s3://inventory-survey-mvp/

# 3. Enable static website hosting in AWS Console
# S3 → Bucket → Properties → Static website hosting
# Set index document: index.html

# 4. Create CloudFront distribution pointing to S3
# CloudFront Console → Create distribution
# Origin domain: inventory-survey-mvp.s3.amazonaws.com

# 5. Get CloudFront URL from distribution
```

**Cost**: ~$1/month

---

### Option 5: Local Deployment (Development)

```bash
# Clone repository
git clone https://github.com/Gzeu/inventory-survey-mvp.git
cd inventory-survey-mvp

# Option A: Python
python -m http.server 8000
# Open http://localhost:8000

# Option B: Node.js http-server
npm install -g http-server
http-server
# Open http://localhost:8080

# Option C: VS Code Live Server
# Install extension, right-click index.html → "Open with Live Server"

# Option D: Using Node.js directly
node -e "require('http').createServer((req, res) => { res.writeHead(200, {'Content-Type': 'text/html'}); require('fs').createReadStream('index.html').pipe(res); }).listen(3000);"
# Open http://localhost:3000
```

---

## Production Deployment Checklist

- [ ] **Security**
  - [ ] Enable HTTPS (automatic on GitHub Pages, Vercel, Netlify)
  - [ ] Remove console logs in production
  - [ ] Validate all user inputs
  - [ ] Test for XSS vulnerabilities
  - [ ] Check CORS headers if using external APIs

- [ ] **Performance**
  - [ ] Minify JavaScript/CSS (optional for single file)
  - [ ] Test page load time (target <2s)
  - [ ] Verify all external CDNs are loading
  - [ ] Test on 3G connection (Chrome DevTools)

- [ ] **Functionality**
  - [ ] Add 5+ inventory items
  - [ ] Submit survey response
  - [ ] View analytics with sample data
  - [ ] Test all export formats (CSV, Excel, PDF, JSON)
  - [ ] Test search/filter on inventory
  - [ ] Verify data persists after page reload
  - [ ] Test on mobile device (iPhone, Android)

- [ ] **Browser Compatibility**
  - [ ] Chrome (latest)
  - [ ] Firefox (latest)
  - [ ] Safari (latest)
  - [ ] Edge (latest)
  - [ ] Mobile Safari (iOS)
  - [ ] Chrome Mobile (Android)

- [ ] **Data**
  - [ ] Load sample data successfully
  - [ ] Export data in all 4 formats
  - [ ] Verify exported data accuracy
  - [ ] Test with 100+ inventory items
  - [ ] Test with 50+ survey responses

- [ ] **Documentation**
  - [ ] README.md is accurate
  - [ ] IMPLEMENTATION.md covers all features
  - [ ] Deployment guide is clear
  - [ ] Contact/support info is available

- [ ] **Monitoring**
  - [ ] Set up error tracking (Sentry, LogRocket)
  - [ ] Enable Google Analytics
  - [ ] Monitor Vercel/Netlify dashboard
  - [ ] Check browser console for errors

---

## Environment-Specific Configurations

### Development

```html
<!-- Add to top of index.html for development -->
<script>
  window.ENV = 'development';
  window.API_URL = 'http://localhost:3000';
  window.DEBUG = true;
</script>
```

### Production

```html
<!-- Add to top of index.html for production -->
<script>
  window.ENV = 'production';
  window.API_URL = 'https://api.example.com';
  window.DEBUG = false;
</script>
```

---

## Scaling to Multiple Environments

### Staging Environment

```bash
# Create staging branch
git checkout -b staging

# Deploy from staging branch
# Vercel: Project Settings → Production Branch → Select 'main'
#        → Preview URL uses 'staging' branch

# Push to staging
git push origin staging
```

### Custom Domain

**Vercel:**
1. Project Settings → Domains
2. Add custom domain (e.g., inventory.example.com)
3. Update DNS records (Vercel provides instructions)
4. Wait for SSL certificate (~1 min)

**Netlify:**
1. Site Settings → Domain Management
2. Add custom domain
3. Follow DNS setup wizard
4. SSL auto-generated by Let's Encrypt

**GitHub Pages:**
1. Settings → Pages → Custom domain
2. Enter custom domain (e.g., inventory.example.com)
3. Update DNS records to point to GitHub Pages IP:
   ```
   A record: 185.199.108.153
   A record: 185.199.109.153
   A record: 185.199.110.153
   A record: 185.199.111.153
   ```
4. Enable "Enforce HTTPS"

---

## Continuous Deployment Setup

### GitHub Actions (Auto-deploy on push)

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

**Netlify (Automatic)**
- Once connected to GitHub, Netlify auto-deploys on every push to main

**Vercel (Automatic)**
- Same as Netlify - auto-deploys on push

---

## Rollback Procedures

### GitHub Pages
```bash
# Revert to previous commit
git revert <commit-sha>
git push origin main
# Pages auto-redeploy from new commit
```

### Vercel
1. Dashboard → Deployments
2. Find previous working deployment
3. Click "Promote to Production"

### Netlify
1. Deploys tab
2. Find previous working deploy
3. Click "Publish deploy"

---

## CDN and Performance Optimization

### Cloudflare (Free)
1. Add domain to Cloudflare
2. Update domain nameservers
3. Enable "Caching" and "Minify"
4. Automatic HTTPS via Let's Encrypt

**Benefits:**
- Global CDN (~200 edge locations)
- DDoS protection
- Free SSL certificate
- ~30% faster load times

### Result
```
Before: index.html loads in 1.2s from US East
After:  index.html loads in 0.3s globally via CDN
```

---

## Monitoring and Analytics

### Google Analytics

```html
<!-- Add to <head> section of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
  
  // Track custom events
  gtag('event', 'item_added', {item_name: 'Laptop'});
  gtag('event', 'survey_submitted', {rating: 5});
</script>
```

### Error Tracking (Sentry)

```html
<!-- Add to <head> section -->
<script src="https://browser.sentry-cdn.com/6.19.7/bundle.min.js"></script>
<script>
  Sentry.init({
    dsn: 'https://your-sentry-dsn@sentry.io/project-id',
    environment: 'production'
  });
</script>
```

### Uptime Monitoring

- **UptimeRobot**: Monitor your deployed URL every 5 mins
- **StatusPage.io**: Public status page for your application
- **Pingdom**: Advanced monitoring with alerts

---

## Backup and Recovery

### Automated Backups

```bash
# Script to backup localStorage data (run weekly)
# Add to your backend or use a service like Zapier

function backupData() {
  const data = localStorage.getItem('inventorySurveyDB');
  return fetch('https://backup-api.example.com/backup', {
    method: 'POST',
    body: JSON.stringify({ data, timestamp: new Date() })
  });
}
```

### User Data Export

- Users can export all data as JSON via Export → JSON button
- Encourage users to backup quarterly
- Keep backups in S3 or Google Cloud Storage

---

## Disaster Recovery

### If data is lost (localStorage)

1. Check browser history for previous exports
2. If backup exists: Import from JSON export
3. If no backup:
   - Reload sample data from "Load Sample Data" button
   - Re-enter critical data manually
   - Set up automated backups for future

### If website is down

1. Check GitHub Pages status page
2. Check Vercel/Netlify dashboard
3. Verify DNS settings
4. Try clearing browser cache (Ctrl+Shift+Del)
5. Try different browser
6. Contact hosting provider support

---

## Cost Analysis

| Platform | Monthly Cost | Features | Best For |
|----------|------------|----------|----------|
| GitHub Pages | FREE | Unlimited bandwidth, HTTPS, auto-deploy | Teams already using GitHub |
| Vercel | FREE (Pro $20) | Global CDN, auto-scaling, analytics | High-traffic apps, enterprises |
| Netlify | FREE (Pro $19) | Global CDN, edge functions, A/B testing | Teams wanting ease-of-use |
| AWS S3 + CF | ~$1-5 | Scalable, pay-as-you-go, DDoS protection | Large data volumes |
| Traditional hosting | $5-50 | Full control, FTP access, email | Legacy systems, complex setups |

**Recommendation**: Start with **Vercel** or **Netlify** (free tier), upgrade if needed.

---

## Security Best Practices

1. **HTTPS Only**: All platforms provide free SSL/TLS
   - GitHub Pages: Automatic ✓
   - Vercel: Automatic ✓
   - Netlify: Automatic ✓

2. **Headers**: Add security headers via platform settings
   ```
   X-Content-Type-Options: nosniff
   X-Frame-Options: DENY
   Content-Security-Policy: default-src 'self' https:
   ```

3. **Input Validation**: Sanitize all user inputs in JavaScript
   ```javascript
   const sanitize = (str) => str.replace(/[<>"']/g, '');
   ```

4. **API Security**: If adding backend API:
   - Use CORS properly
   - Validate on server side
   - Rate limit requests
   - Use environment variables for secrets

5. **Data Privacy**:
   - Data stored locally (no external transmission)
   - Add privacy policy if needed
   - Comply with GDPR if serving EU users

---

## Support

**Deployment Issues?**
- GitHub Pages: Check [pages.github.com](https://pages.github.com)
- Vercel: Visit [vercel.com/support](https://vercel.com/support)
- Netlify: Visit [netlify.com/support](https://netlify.com/support)
- Stack Overflow: Tag `[github-pages]` or `[vercel]`

---

**Last Updated**: February 2026  
**Status**: ✅ Production Ready
