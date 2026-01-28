# Portfolio Website - Complete Setup & Deployment Guide

## 📖 Table of Contents
1. [Project Overview](#project-overview)
2. [Installation](#installation)
3. [File Structure Explanation](#file-structure-explanation)
4. [Customization Guide](#customization-guide)
5. [Deployment](#deployment)
6. [Maintenance](#maintenance)

---

## Project Overview

This is a professional portfolio website built with modern web technologies:
- **Framework**: Next.js 14 (React-based)
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth interactions
- **Language**: TypeScript for type safety
- **Icons**: Lucide React & React Icons

### Key Features
✨ Fully responsive design
✨ Smooth animations and transitions
✨ Dark theme with gradient colors
✨ Contact form functionality
✨ Social media integration
✨ SEO optimized
✨ Performance optimized

---

## Installation

### Step 1: Prerequisites
Make sure you have installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org)
- **npm** (comes with Node.js)
- **Git** (for version control) - [Download](https://git-scm.com)
- **VS Code** (recommended editor) - [Download](https://code.visualstudio.com)

### Step 2: Navigate to Project
```bash
cd c:\projects\portfolio-Harun
```

### Step 3: Install Dependencies
```bash
npm install
```

This installs all required packages from `package.json`

### Step 4: Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

### Step 5: Stop the Server
Press `Ctrl + C` in the terminal

---

## File Structure Explanation

```
c:\projects\portfolio-Harun\
│
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── layout.tsx               # Root layout wrapper
│   │   ├── page.tsx                 # Home page (index)
│   │   ├── globals.css              # Global styles
│   │
│   └── components/
│       ├── Navbar.tsx               # Navigation component
│       ├── Footer.tsx               # Footer component
│       │
│       └── sections/
│           ├── Hero.tsx             # Welcome/intro section
│           ├── About.tsx            # About me section
│           ├── Education.tsx        # Education details
│           ├── Skills.tsx           # Skills showcase
│           ├── Projects.tsx         # Portfolio projects
│           ├── Experience.tsx       # Work experience
│           └── Contact.tsx          # Contact form
│
├── public/                          # Static files (images, etc.)
│   └── (add your images here)
│
├── package.json                     # Project dependencies
├── tsconfig.json                    # TypeScript config
├── tailwind.config.ts               # Tailwind CSS config
├── next.config.js                   # Next.js config
├── postcss.config.js                # PostCSS config
├── .eslintrc.json                   # Code linting rules
├── .gitignore                       # Git ignore rules
└── README.md                        # Project documentation
```

### Component Details

#### `Navbar.tsx`
- Navigation bar with logo and menu items
- Sticky header with glass effect
- Smooth animations on hover
- Resume button

#### `Footer.tsx`
- Contact information
- Social media links
- Copyright notice
- Links to social profiles

#### `Hero.tsx`
- Large headline with gradient effect
- Introduction text
- CTA buttons
- Animated background elements
- Floating info cards

#### `About.tsx`
- Personal introduction
- Feature cards (4 key specialties)
- Statistics (Projects, Technologies, etc.)
- Resume download

#### `Education.tsx`
- Education timeline
- College details and affiliation
- Achievements grid
- Focus areas and CGPA

#### `Skills.tsx`
- Categorized skills (Frontend, Backend, Database, Other)
- Technical proficiency bars
- Interactive skill cards
- Hover animations

#### `Projects.tsx`
- Featured projects (3 large cards)
- Additional projects grid (3 small cards)
- Project images, descriptions, and tech stack
- GitHub and demo links

#### `Experience.tsx`
- Timeline-based experience layout
- Role details and responsibilities
- Duration and location
- Skills and achievements

#### `Contact.tsx`
- Contact form (name, email, subject, message)
- Contact information cards
- Social media links
- Quick info section

---

## Customization Guide

### 1. Update Your Information

#### A. Basic Information
Edit `src/components/sections/Hero.tsx`:
```typescript
<h1 className="...">
  Hi, I'm <span className="gradient-text">YOUR NAME HERE</span>
</h1>
```

#### B. About Section
Edit `src/components/sections/About.tsx`:
```typescript
<p className="...">
  I'm a passionate [YOUR TITLE] with...
</p>
```

#### C. Education
Edit `src/components/sections/Education.tsx`:
```typescript
{
  degree: 'YOUR DEGREE',
  school: 'YOUR SCHOOL',
  period: 'YOUR DATES',
  cgpa: 'YOUR CGPA',
  focus: ['SKILL1', 'SKILL2', ...]
}
```

#### D. Contact Information
Edit `src/components/Footer.tsx` and `src/components/sections/Contact.tsx`:
```typescript
<a href="mailto:YOUR_EMAIL@gmail.com">
  your@email.com
</a>
```

### 2. Add Your Photo

1. Create folder: `public/images/`
2. Add your photo as `profile.jpg`
3. Update components to reference the image:
```typescript
import Image from 'next/image';

<Image 
  src="/images/profile.jpg" 
  alt="Profile" 
  width={300} 
  height={300}
/>
```

### 3. Update Projects

Edit `src/components/sections/Projects.tsx`:
```typescript
{
  id: 1,
  title: 'Your Project Title',
  description: 'Project description...',
  technologies: ['React', 'Node.js', ...],
  image: '🎯',
  github: 'https://github.com/yourusername/project',
  live: 'https://project-live-url.com',
  featured: true,
}
```

### 4. Update Skills

Edit `src/components/sections/Skills.tsx`:
```typescript
{
  category: 'Frontend Development',
  skills: [
    'React.js',
    'Next.js',
    'Your Skill Here',
    ...
  ]
}
```

### 5. Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0066ff',      // Your primary color
  secondary: '#1a1a2e',    // Your secondary color
  accent: '#16c784',       // Your accent color
  dark: '#0f0f1e',         // Background color
  light: '#f5f5f5',        // Text color
}
```

### 6. Update Navigation Links

Edit `src/components/Navbar.tsx`:
```typescript
const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  // Add more items as needed
];
```

### 7. Add Social Media Links

Edit `src/components/Footer.tsx`:
```typescript
const socialLinks = [
  { 
    icon: Github, 
    href: 'https://github.com/yourusername', 
    label: 'GitHub' 
  },
  // Add more social links
];
```

### 8. Contact Form Setup

The contact form is currently simulated. To make it functional:

Option A: Use Formspree (Free)
1. Go to [formspree.io](https://formspree.io)
2. Create account and form
3. Update form action in `Contact.tsx`:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    setSubmitStatus('success');
  }
};
```

Option B: Use EmailJS
```bash
npm install emailjs-com
```

---

## Deployment

### Option 1: Deploy to Vercel (Recommended)

**Vercel** is created by the makers of Next.js and is the easiest option.

#### Steps:

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio-harun.git
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and login with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

3. **Done!** Your site is live at `your-project.vercel.app`

### Option 2: Deploy to Netlify

1. **Build locally**
```bash
npm run build
```

2. **Go to [netlify.com](https://netlify.com)**
   - Click "Sites" → "Add new site"
   - Select "Deploy manually"
   - Drag & drop the `.next` folder

### Option 3: Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Update `package.json`:
```json
"scripts": {
  "export": "next build && next export",
  "deploy": "npm run export && gh-pages -d out"
}
```

Then:
```bash
npm run deploy
```

### Option 4: Custom Server (VPS/Dedicated Hosting)

1. **Build for production**
```bash
npm run build
```

2. **Install PM2** (process manager)
```bash
npm install -g pm2
```

3. **Start application**
```bash
pm2 start npm --name "portfolio" -- start
```

4. **Save PM2 config**
```bash
pm2 save
pm2 startup
```

---

## Maintenance

### Regular Updates

1. **Update dependencies** (quarterly)
```bash
npm update
```

2. **Check for security issues**
```bash
npm audit
npm audit fix
```

3. **Update content**
   - Add new projects regularly
   - Update skills as you learn
   - Refresh project descriptions

### Performance Monitoring

- Use [Google PageSpeed Insights](https://pagespeed.web.dev)
- Check [Lighthouse](https://developer.chrome.com/docs/lighthouse) scores
- Monitor [Core Web Vitals](https://web.dev/vitals/)

### Backup

```bash
# Commit regularly
git add .
git commit -m "Update portfolio content"
git push origin main
```

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -r node_modules
npm install
```

### Build Errors
```bash
# Check for TypeScript errors
npm run type-check

# Run linting
npm run lint
```

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## Support

For issues or questions:
- 📧 Email: work.harun.mollah@gmail.com
- 💬 Visit: [CodelithLabs](https://codelithlabs.in)
- 🐙 GitHub Issues: Create an issue in your repository

---

**Happy coding! 🚀**

Last updated: January 28, 2026
