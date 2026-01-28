# 🚀 Deployment & Hosting Guide

## Quick Deploy to Vercel (5 minutes)

### Method 1: Direct GitHub Integration (Easiest)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio-harun.git
git push -u origin main
```

2. **Go to [vercel.com](https://vercel.com)**
   - Sign up/login with GitHub
   - Click "Add New..." → "Project"
   - Select your repository
   - Click "Deploy"

3. **Done!** Get your live URL

---

## Complete Deployment Steps by Platform

### Vercel (Recommended)

**Pros:**
- ✅ Fastest for Next.js
- ✅ Auto-deploys on push
- ✅ Free tier
- ✅ Built-in analytics
- ✅ Automatic SSL

**Step-by-Step:**

1. **Create GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Sign up

2. **Create Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-harun.git
   git push -u origin main
   ```

3. **Sign up on Vercel**
   - Go to [vercel.com/signup](https://vercel.com/signup)
   - Click "Continue with GitHub"
   - Authorize Vercel

4. **Import Project**
   - Click "Add New..." → "Project"
   - Select your `portfolio-harun` repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

5. **Custom Domain** (Optional)
   - In Vercel Dashboard → "Domains"
   - Add your domain
   - Follow DNS instructions

**Environment Variables** (if needed):
```
Settings → Environment Variables
Add your API keys/secrets here
```

---

### Netlify

**Pros:**
- ✅ Good free tier
- ✅ Easy deployment
- ✅ Form handling
- ✅ Serverless functions

**Steps:**

1. **Build Locally**
```bash
npm run build
```

2. **Export Static Site**
Edit `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
module.exports = nextConfig;
```

3. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `out`

---

### GitHub Pages (Free)

**Pros:**
- ✅ Completely free
- ✅ Integrated with GitHub
- ✅ No additional account needed

**Steps:**

1. **Setup**
```bash
npm install --save-dev gh-pages
```

2. **Update `package.json`**
```json
{
  "scripts": {
    "export": "next build && next export",
    "deploy": "gh-pages -d out"
  }
}
```

3. **Update `next.config.js`**
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-harun',
  images: { unoptimized: true },
};
module.exports = nextConfig;
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable in Repository**
   - Go to repo → Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / root
   - Save

Your site will be at: `https://yourusername.github.io/portfolio-harun`

---

### Custom Server (Advanced)

**Pros:**
- ✅ Full control
- ✅ No provider lock-in
- ✅ Custom configurations

**Steps:**

1. **Buy VPS/Server**
   - Recommended: DigitalOcean, Linode, AWS
   - OS: Ubuntu 20.04 or later
   - 1GB RAM minimum

2. **SSH into Server**
```bash
ssh root@your_server_ip
```

3. **Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **Install Nginx** (reverse proxy)
```bash
sudo apt-get update
sudo apt-get install -y nginx
```

5. **Clone Repository**
```bash
cd /var/www
git clone https://github.com/yourusername/portfolio-harun.git
cd portfolio-harun
npm install
npm run build
```

6. **Setup PM2** (process manager)
```bash
npm install -g pm2
pm2 start npm --name portfolio -- start
pm2 save
pm2 startup
```

7. **Configure Nginx**
Edit `/etc/nginx/sites-available/default`:
```nginx
server {
    listen 80 default_server;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **Restart Nginx**
```bash
sudo systemctl restart nginx
```

9. **Enable HTTPS** (SSL)
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Domain Setup

### Connect Custom Domain

**On Vercel:**
1. Dashboard → Your Project → Settings
2. Domains → Add
3. Enter your domain
4. Follow DNS setup instructions
5. Wait for verification (5-30 minutes)

**On Netlify:**
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records

**On Custom Server:**
1. Buy domain from Namecheap, GoDaddy, etc.
2. Update DNS records to point to server IP
3. Setup Nginx config

---

## Environment Variables

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your_secret_key
CONTACT_EMAIL=your-email@gmail.com
```

Access in components:
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## Performance Optimization

### Build Optimization
```bash
npm run build
# Check bundle size
npm install -g webpack-bundle-analyzer
```

### Image Optimization
- Use Next.js Image component
- Optimize images before adding (TinyPNG, ImageOptim)
- Use WebP format when possible

### Code Splitting
- Already handled by Next.js
- Use dynamic imports for heavy components:
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('../components/Heavy'),
  { loading: () => <p>Loading...</p> }
);
```

---

## Monitoring & Analytics

### Vercel Analytics
- Built-in automatically
- Dashboard → Analytics
- Tracks Core Web Vitals, performance, traffic

### Google Analytics
```bash
npm install gtag
```

Add to `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Sentry (Error Tracking)
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

---

## Continuous Integration/Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      - run: npm run test
      
      - name: Deploy to Vercel
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## Troubleshooting Deployment

### Build Fails
```bash
# Check build locally
npm run build

# Check for errors
npm run type-check
npm run lint
```

### 404 Error on Routes
- Make sure all sections have correct IDs
- Check href attributes in Navbar

### Images Not Loading
- Verify image paths (use `/images/...`)
- Check `public` folder exists
- For external servers, ensure `next.config.js` has correct settings

### Slow Performance
- Run Lighthouse audit
- Optimize images
- Check Core Web Vitals
- Consider CDN

---

## Rollback & Revert

### Vercel
- Dashboard → Deployments
- Click three dots on previous deployment
- "Promote to Production"

### Manual Rollback
```bash
git log
git revert <commit-hash>
git push
# Auto-redeploy triggers
```

---

## Maintenance Checklist

- [ ] Update dependencies monthly: `npm update`
- [ ] Check security: `npm audit`
- [ ] Update content regularly
- [ ] Monitor analytics
- [ ] Check broken links
- [ ] Test contact form
- [ ] Backup GitHub repository
- [ ] Update resume
- [ ] Add new projects

---

## Need Help?

📧 Email: work.harun.mollah@gmail.com
💬 CodelithLabs: https://codelithlabs.in
🐙 GitHub: Share your issues

---

**Your portfolio is live! 🎉**
