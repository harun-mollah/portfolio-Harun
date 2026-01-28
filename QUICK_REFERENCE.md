# Quick Reference Guide

## 🚀 Common Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start            # Start production server

# Maintenance
npm install          # Install dependencies
npm update           # Update packages
npm audit            # Check security issues
npm run lint         # Check code style
npm run type-check   # Check TypeScript types

# Deployment (if using Vercel)
npm install -g vercel
vercel               # Deploy to Vercel
```

---

## 📁 Where to Edit Each Section

| Section | File | Component |
|---------|------|-----------|
| Hero/Intro | `src/components/sections/Hero.tsx` | Large heading, intro text, CTA |
| About | `src/components/sections/About.tsx` | About description, features |
| Education | `src/components/sections/Education.tsx` | School, degree, dates, CGPA |
| Skills | `src/components/sections/Skills.tsx` | Skill lists, proficiency bars |
| Projects | `src/components/sections/Projects.tsx` | Project cards, descriptions, links |
| Experience | `src/components/sections/Experience.tsx` | Job titles, companies, responsibilities |
| Contact | `src/components/sections/Contact.tsx` | Contact form, email, phone |
| Footer | `src/components/Footer.tsx` | Social links, copyright |
| Navbar | `src/components/Navbar.tsx` | Navigation menu |
| Colors | `tailwind.config.ts` | Primary, secondary, accent colors |
| Animations | `src/app/globals.css` | Custom animations |

---

## 🎨 Color Palette

Current colors (in `tailwind.config.ts`):
- **Primary**: `#0066ff` (Blue) - Main accent color
- **Secondary**: `#1a1a2e` (Dark) - Secondary accent
- **Accent**: `#16c784` (Green) - Highlight color
- **Dark**: `#0f0f1e` (Almost black) - Background
- **Light**: `#f5f5f5` (Off-white) - Text

To change colors, edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  accent: '#your-color',
  dark: '#your-color',
  light: '#your-color',
}
```

---

## 🔗 Navigation Links

All navigation is managed through sections with IDs:
- `#about` → About Section
- `#education` → Education Section
- `#skills` → Skills Section
- `#projects` → Projects Section
- `#experience` → Experience Section
- `#contact` → Contact Section

Update Navbar links in `src/components/Navbar.tsx`:
```typescript
const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  // ... more items
];
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Classes for responsive design:
```typescript
// Mobile-first
<div className="text-sm md:text-base lg:text-lg">
  // Small on mobile, medium on tablet, large on desktop
</div>

<div className="hidden lg:block">
  // Hidden on mobile/tablet, shown on desktop
</div>
```

---

## 🎯 Key Files to Customize

1. **`package.json`**
   - Update `"name"`, `"description"`
   - Add/remove dependencies if needed

2. **`tailwind.config.ts`**
   - Change color scheme
   - Add custom animations
   - Modify breakpoints

3. **`.env.local`** (create from `.env.example`)
   - API keys
   - Contact email
   - Social media links

4. **`next.config.js`**
   - Image optimization
   - API routes
   - Rewrites/redirects

5. **`tsconfig.json`**
   - Path aliases
   - Compiler options

---

## 🔒 Security Best Practices

1. **Never commit sensitive data**
   - Use `.env.local` for secrets
   - Add to `.gitignore`

2. **Use environment variables**
   ```typescript
   const apiKey = process.env.API_KEY;
   ```

3. **Validate form inputs**
   ```typescript
   if (!email.includes('@')) {
     setError('Invalid email');
     return;
   }
   ```

4. **Keep dependencies updated**
   ```bash
   npm update
   npm audit fix
   ```

5. **Use HTTPS everywhere**
   - Vercel provides automatic SSL
   - Custom servers need certbot

---

## 📊 Performance Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Compress images (TinyPNG)
   - Use WebP format

2. **Code Splitting**
   - Automatic by Next.js
   - Use dynamic imports for heavy components

3. **Caching**
   - Next.js handles static generation
   - Set appropriate cache headers

4. **Monitoring**
   - Use PageSpeed Insights
   - Check Lighthouse scores
   - Monitor Core Web Vitals

---

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build test
npm run build

# Manual testing
npm run dev
# Open http://localhost:3000 in browser
```

---

## 📚 Documentation

- **Full Setup Guide**: See `SETUP_GUIDE.md`
- **Deployment Guide**: See `DEPLOYMENT_GUIDE.md`
- **React Docs**: https://react.dev
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## 🐛 Common Issues

### Port 3000 already in use
```bash
# Kill the process
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Module not found error
```bash
rm -r node_modules
npm install
```

### Build fails
```bash
npm run type-check  # Check TypeScript
npm run lint        # Check linting
npm run build       # Full build
```

### Layout looks wrong on mobile
- Check responsive classes (md:, lg:, etc.)
- Test with `npm run dev` and DevTools
- Verify `tailwind.config.ts` settings

### Images not showing
- Verify path starts with `/`
- Place images in `public/` folder
- Check `next.config.js` image settings

---

## 📞 Support Contacts

- **Email**: work.harun.mollah@gmail.com
- **Phone**: +91 9954927947
- **Location**: Kutirghat, Asssam, India
- **Team**: CodelithLabs - https://codelithlabs.in

---

## 🚀 Deployment Platforms

1. **Vercel** (Recommended) - https://vercel.com
2. **Netlify** - https://netlify.com
3. **GitHub Pages** - https://pages.github.com
4. **Heroku** - https://heroku.com
5. **AWS** - https://aws.amazon.com

---

## 📅 Maintenance Schedule

- **Weekly**: Commit code changes
- **Monthly**: Update dependencies
- **Quarterly**: Security audit (`npm audit`)
- **Quarterly**: Update projects/content
- **Annually**: Full review and refresh

---

## ✨ Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Customize personal information
4. ✅ Add your projects
5. ✅ Deploy to Vercel
6. ✅ Setup custom domain
7. ✅ Monitor analytics
8. ✅ Keep content updated

---

**Happy coding! Let's build something amazing! 🎉**

Last updated: January 28, 2026
