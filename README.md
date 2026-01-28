# MD Harun Al Roshid Mollah's Professional Portfolio

A stunning, modern portfolio website built with cutting-edge web technologies. Showcasing projects, skills, and experience with beautiful animations and interactive elements.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and glassmorphism effects
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Dark Theme**: Easy on the eyes with a professional dark color scheme
- **Interactive Elements**: Hover effects, smooth transitions, and dynamic content
- **Optimized Performance**: Built with Next.js for lightning-fast performance
- **SEO Optimized**: Proper metadata and structured content
- **Contact Form**: Fully functional contact form for inquiries
- **Social Integration**: Links to social profiles and professional networks

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework for production
- **React 18**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Advanced animations
- **React Icons & Lucide React**: Icon libraries
- **Three.js** (Optional): 3D animations

### Styling
- **Tailwind CSS**: Modern CSS framework
- **Custom CSS**: Glass-morphism effects and custom animations

### Development
- **Node.js**: JavaScript runtime
- **npm**: Package manager

## 📋 Project Structure

```
portfolio-harun/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer section
│   │   └── sections/
│   │       ├── Hero.tsx     # Hero section
│   │       ├── About.tsx    # About section
│   │       ├── Education.tsx # Education section
│   │       ├── Skills.tsx   # Skills section
│   │       ├── Projects.tsx # Projects section
│   │       ├── Experience.tsx # Experience section
│   │       └── Contact.tsx  # Contact section
├── public/
│── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Sections

### 1. **Hero Section**
- Eye-catching headline with gradient text
- Brief introduction
- CTA buttons
- Animated background elements
- Floating cards with key info

### 2. **About Section**
- Personal introduction
- Key features/specialties
- Statistics card
- Download resume button

### 3. **Education Section**
- Education timeline
- Institution details
- CGPA and focus areas
- Achievements grid

### 4. **Skills Section**
- Categorized skill listing (Frontend, Backend, Database, Others)
- Technical proficiency bars
- Interactive skill cards

### 5. **Projects Section**
- Featured projects with detailed descriptions
- Project images/icons
- Technology tags
- GitHub and live demo links
- Additional projects grid

### 6. **Experience Section**
- Timeline-based experience layout
- Role details and responsibilities
- Duration and location info
- Key achievements

### 7. **Contact Section**
- Contact information cards
- Functional contact form
- Social media links
- Response time and availability info

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio-harun.git
cd portfolio-harun
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information
Edit the relevant component files to update:
- Name and title in `Hero.tsx`
- Personal details in `About.tsx` and `Footer.tsx`
- Education info in `Education.tsx`
- Skills in `Skills.tsx`
- Projects in `Projects.tsx`
- Experience in `Experience.tsx`
- Contact information in `Contact.tsx` and `Footer.tsx`

### Add Your Photo
1. Create `public/images/` folder
2. Add your photo as `public/images/profile.jpg`
3. Update image paths in components

### Customize Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  accent: '#your-color',
}
```

### Update Social Links
Edit footer and contact components to add your social media links

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Select your GitHub repository
- Click "Deploy"

### Other Deployment Options
- **Netlify**: Similar GitHub connection process
- **AWS Amplify**: AWS deployment
- **Docker**: Containerized deployment

## 📊 Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic by Next.js
- **Lazy Loading**: Components load as needed
- **CSS Purging**: Unused CSS removed automatically
- **Compression**: Assets compressed by default

## 🔒 Best Practices

- ✅ Type-safe with TypeScript
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)
- ✅ Mobile responsive
- ✅ Performance optimized
- ✅ Clean code structure
- ✅ Reusable components

## 🤝 Contributing

If you want to improve this portfolio template:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a pull request

## 📧 Contact

- **Email**: work.harun.mollah@gmail.com
- **Phone**: +91 9954927947
- **GitHub**: [github.com](https://github.com)
- **LinkedIn**: [linkedin.com](https://linkedin.com)
- **CodelithLabs**: [codelithlabs.in](https://codelithlabs.in)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspiration from modern portfolio websites
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Integrate 3D models with Three.js
- [ ] Add dark/light theme toggle
- [ ] Implement email notification system
- [ ] Add multi-language support
- [ ] Create admin dashboard for content management
- [ ] Add testimonials section
- [ ] Implement analytics

---

Made with ❤️ by MD Harun Al Roshid Mollah
