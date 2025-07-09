# NewLawAI - Claude Code Context

## 🎯 Project Overview

NewLawAI is a production-ready AI-powered legal assistant landing page built with React 19, TypeScript, and Tailwind CSS. The project features a sophisticated dark theme design system inspired by Luma AI principles, complete multi-page architecture, and robust deployment infrastructure.

## 🌐 Live Deployment

**Primary Site:** https://newlawai-landing-page.netlify.app/  
**Static Backup:** https://newlawai-landing-page.netlify.app/backup.html  
**Test Page:** https://newlawai-landing-page.netlify.app/test.html  

## 🏗️ Architecture

### Core Technology Stack
- **Frontend:** React 19.1.0 + TypeScript 5.8.3
- **Styling:** Tailwind CSS 3.4.17 with custom legal AI theme
- **Build Tool:** Vite 7.0.0 for fast development and production builds
- **Icons:** Lucide React 0.525.0 for consistent iconography
- **Routing:** React Router DOM 7.6.3 for multi-page navigation
- **Code Quality:** ESLint with TypeScript integration

### Project Structure
```
MYapp/
├── src/
│   ├── App.tsx                 # Main router with route definitions
│   ├── main.tsx               # React entry point
│   ├── index.css              # Global styles, Tailwind imports, custom animations
│   ├── components/
│   │   └── Layout.tsx         # Shared layout with navigation and footer
│   └── pages/
│       ├── LandingPage.tsx    # Main landing page with hero, features, testimonials
│       ├── Features.tsx       # Detailed AI capabilities showcase
│       ├── Pricing.tsx        # Pricing plans with enterprise section
│       └── Testimonials.tsx   # Customer stories with carousel
├── public/
│   ├── _redirects            # Netlify SPA routing configuration
│   ├── _headers              # MIME type configuration for proper JS loading
│   ├── backup.html           # Static HTML version (fallback solution)
│   └── test.html             # Deployment verification page
├── netlify.toml              # Netlify build and deployment configuration
├── DEPLOYMENT.md             # Comprehensive deployment guide
├── README.md                 # Full project documentation
└── ROADMAP.md                # Development phases and future plans
```

### Multi-Page Navigation
- **/** - Landing page with hero, features, testimonials, FAQ
- **/features** - Detailed AI capabilities and use cases
- **/pricing** - Comprehensive pricing plans and enterprise options
- **/testimonials** - Customer success stories with carousel

## 🎨 Design System

### Color Palette (Luma AI Inspired)
```css
/* Primary Colors */
--midnight-black: #0C0C0D;     /* Main background */
--justice-cyan: #00C2FF;       /* Primary accent, legal trust color */
--true-white: #F8F9FA;         /* Primary text */

/* Secondary Neutrals */
--slate-gray: #1A1A1C;         /* Card backgrounds */
--deep-charcoal: #2C2C2E;      /* Secondary backgrounds */
--muted-border-gray: #3A3A3C;  /* Borders and dividers */
--text-gray: #B1B1B3;          /* Secondary text */

/* Accent Colors */
--signal-red: #FF3B30;         /* Alerts and errors */
--review-orange: #FF6D3D;      /* Warnings and reviews */
--trust-pink: #FF4580;         /* Highlights and CTAs */
--success-green: #28C76F;      /* Success states */
--warning-yellow: #FFB400;     /* Cautions */

/* Special Gradients */
--gradient-backdrop: linear-gradient(135deg, #6536FF, #A15BFF);
--hero-gradient: linear-gradient(to bottom right, #0C0C0D, #112031, #361B3A);
--confidential-glow: radial-gradient(circle, #00C2FF22, transparent 70%);
```

### Typography Hierarchy
- **Font Family:** Inter with system fallbacks
- **H1:** 3.5rem/1.2, weight: 700 (Hero headlines)
- **H2:** 2.5rem/1.3, weight: 700 (Section headers)
- **H3:** 1.5rem/1.4, weight: 600 (Card titles)
- **Body:** 1rem/1.6, weight: 400 (General text)
- **Small:** 0.875rem/1.5, weight: 400 (Captions, metadata)

### Component Design Patterns
- **Cards:** 16dp border radius with subtle shadows
- **Animations:** Smooth transitions with intersection observers
- **Glows:** Confidential glow effects using radial gradients
- **Icons:** Gradient-filled backgrounds for feature icons
- **Navigation:** Sticky header with active section highlighting

## 🚀 Deployment Infrastructure

### Netlify Configuration
The project includes comprehensive Netlify deployment setup:

**netlify.toml:**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[headers]]
  for = "/assets/*.js"
  [headers.values]
    Content-Type = "application/javascript"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Key Files:**
- `_redirects` - SPA routing for React Router
- `_headers` - MIME type configuration for ES modules
- `netlify.toml` - Build configuration and deployment settings

### Multi-Deployment Strategy
1. **Primary:** React application with full routing and interactivity
2. **Backup:** Static HTML version (`backup.html`) with identical design
3. **Test:** Simple HTML page for deployment verification

### Build Optimization
- **Asset optimization:** Vite automatically optimizes CSS and JS bundles
- **Code splitting:** Automatic chunking for optimal loading
- **Compression:** Gzip compression enabled for all assets
- **Cache headers:** Proper caching configuration for static assets

## ⚡ Key Features Implemented

### Hero Section
- Animated glowing logo with "pouncing" effect using CSS keyframes
- Gradient backdrop with professional legal industry colors
- Responsive design with mobile optimization
- Smooth scroll navigation to features

### Advanced Components
- **Testimonials:** 6 customer stories with circular avatars and star ratings
- **Pricing:** Three-tier structure (Free/€19/€29) with enterprise section
- **FAQ:** Accordion with smooth animations and hover effects
- **Features:** Interactive cards with hover glows and gradient icons

### Animations & Interactions
- **Scroll animations:** Intersection Observer for fade-in effects
- **Hover effects:** Subtle transforms and glow enhancements
- **Loading states:** Smooth transitions between pages
- **Mobile gestures:** Touch-friendly navigation and interactions

### Accessibility Features
- **High contrast:** WCAG AA compliant color combinations
- **Semantic HTML:** Proper heading hierarchy and landmarks
- **Keyboard navigation:** Full keyboard accessibility
- **Screen reader support:** ARIA labels and descriptions

## 🛠️ Development Workflow

### Essential Commands
```bash
# Development
npm run dev          # Start development server on port 3001+
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality

# Deployment
npm run build        # Generate dist/ folder for deployment
# Drag dist/ folder to Netlify dashboard for manual deploy
# Or push to GitHub for automatic deployment
```

### File Organization Patterns
- **Pages:** Self-contained components in `src/pages/`
- **Shared Components:** Reusable components in `src/components/`
- **Styles:** Global styles in `src/index.css`, component-specific in component files
- **Assets:** Static assets in `public/`, imported assets in `src/assets/`

## 🐛 Common Issues & Solutions

### MIME Type Issues
**Problem:** "Expected a JavaScript-or-Wasm module script" error  
**Solution:** Use the static backup version at `/backup.html` or verify `netlify.toml` deployment

### Routing Issues
**Problem:** 404 errors on page refresh  
**Solution:** Ensure `_redirects` file is deployed with `/* /index.html 200`

### Build Issues
**Problem:** TypeScript compilation errors  
**Solution:** Check `tsconfig.json` configuration and remove invalid compiler options

### Asset Loading
**Problem:** CSS or JS files not loading  
**Solution:** Verify `_headers` file includes proper MIME type configuration

## 📋 Maintenance Notes

### Regular Updates
- **Dependencies:** Monthly security updates via `npm audit`
- **TypeScript:** Keep up with latest stable versions
- **React:** Monitor React 19+ stable releases
- **Tailwind:** Update for latest utility classes

### Performance Monitoring
- **Build size:** Monitor bundle size with `npm run build`
- **Load times:** Test on various devices and connections
- **Lighthouse scores:** Regular performance audits
- **User feedback:** Monitor analytics for user behavior

### Content Updates
- **Testimonials:** Regularly update customer stories and ratings
- **Pricing:** Keep pricing plans current with market positioning
- **Features:** Update AI capabilities as technology evolves
- **Legal compliance:** Review legal disclaimers and terms

## 🎯 Next Development Phase

### Immediate Technical Improvements
1. **Analytics Integration:** Google Analytics 4 or privacy-focused alternative
2. **SEO Optimization:** Meta tags, structured data, sitemap
3. **Performance:** Further optimization of images and fonts
4. **A/B Testing:** Test variations of pricing and CTA sections

### Phase 2 Preparation
1. **Authentication System:** React context for user state management
2. **API Integration:** RESTful API structure planning
3. **Database Schema:** User and document management design
4. **Security Planning:** JWT tokens, encryption, compliance requirements

## 📞 Support Information

**Technical Stack:** React 19 + TypeScript + Tailwind CSS + Vite  
**Deployment:** Netlify with automatic GitHub integration  
**Status:** Production-ready and deployed  
**Last Updated:** January 2025  

For technical questions or contributions, refer to the README.md and ROADMAP.md files for comprehensive information about the project architecture and future development plans.