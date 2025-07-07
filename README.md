# 🤖 NewLawAI - AI-Powered Legal Assistant

A modern, sophisticated landing page for an AI-powered legal assistant platform, built with React, TypeScript, and Tailwind CSS. Features a professional dark theme with cyan accents, designed specifically for legal professionals.

## ✨ Features

### 🎨 **Modern Dark Design System**
- **Midnight Black Theme** (#0C0C0D) with high contrast accessibility
- **Justice Cyan** (#00C2FF) primary color for trust and professionalism
- **Luma AI-inspired** design language with "empowered creativity within calm boundaries"
- **Inter Font** with proper typographic hierarchy
- **16dp Rounded Cards** with subtle shadows and hover effects

### 🌟 **Interactive Components**
- **Animated Hero Section** with gradient backdrop and floating elements
- **Responsive Navigation** with mobile hamburger menu
- **Feature Cards** with hover glows and gradient icons
- **Interactive Demo** placeholder with play button
- **Pricing Tiers** with highlighted popular plan
- **Customer Testimonials** with star ratings
- **FAQ Accordion** with smooth animations
- **Confidential Glow Effects** for important sections

### ⚡ **Technical Features**
- **React 19** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **Lucide React** icons for consistent iconography
- **Vite** for fast development and building
- **Responsive Design** optimized for all devices
- **Accessibility** with proper contrast ratios and semantic HTML

### 📱 **Responsive Sections**
1. **Hero** - Gradient background with animated AI bot icon
2. **Features** - Three-column grid showcasing AI capabilities
3. **Demo** - Interactive video placeholder
4. **Pricing** - Three-tier pricing structure (Free, €19, €29)
5. **Testimonials** - Customer reviews with ratings
6. **FAQ** - Collapsible questions and answers
7. **Call-to-Action** - Final conversion section
8. **Footer** - Links and company information

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd MYapp

# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--midnight-black: #0C0C0D;
--true-white: #F8F9FA;

/* Secondary Neutrals */
--slate-gray: #1A1A1C;
--deep-charcoal: #2C2C2E;
--muted-border-gray: #3A3A3C;
--text-gray: #B1B1B3;

/* Accent Colors */
--justice-cyan: #00C2FF;
--signal-red: #FF3B30;
--review-orange: #FF6D3D;
--trust-pink: #FF4580;
--success-green: #28C76F;
--warning-yellow: #FFB400;

/* Gradients */
--gradient-backdrop: linear-gradient(135deg, #6536FF, #A15BFF);
--confidential-glow: radial-gradient(circle, #00C2FF22, transparent 70%);
```

### Typography Hierarchy

```css
/* Font: Inter */
H1: 32px/40px, weight: 700 (Page headers)
H2: 24px/32px, weight: 600 (Modal titles)
H3: 20px/28px, weight: 500 (Section titles)
Body: 16px/24px, weight: 400 (General text)
Small: 14px/20px, weight: 400 (Labels)
Caption: 12px/16px, weight: 500 (Metadata)
```

### Spacing System

```css
XS: 4px   (Tight margins, icon spacing)
SM: 8px   (Button internal padding)
MD: 16px  (Default padding)
LG: 24px  (Card gaps, section spacing)
XL: 32px  (Page margins)
XXL: 48px (Top-level separation)
```

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.0
- **Language:** TypeScript 5.8.3
- **Styling:** Tailwind CSS 3.4.17
- **Icons:** Lucide React 0.525.0
- **Build Tool:** Vite 7.0.0
- **Development:** ESLint for code quality

## 📂 Project Structure

```
MYapp/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Additional styles
│   ├── index.css        # Global styles and Tailwind imports
│   ├── main.tsx         # React entry point
│   └── assets/          # Static assets
├── public/              # Public assets
├── dist/                # Production build output
├── README.md           # This file
├── ROADMAP.md          # Development roadmap
├── CLAUDE.md           # Claude Code context
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## 🎯 Features Overview

### Legal AI Capabilities Highlighted
- **Intelligent Research** - AI-powered case law and statute search
- **Document Analysis** - Automated contract review and risk identification
- **Compliance Monitoring** - Regulatory change tracking

### Pricing Structure
- **Free Tier** - 5 document analyses, basic research, email support
- **PDF Letter (€19)** - Unlimited analyses, AI-generated letters, priority support
- **Human Review (€29)** - Expert lawyer review, custom strategies, 24/7 support

## 🔧 Configuration

### Vite Configuration
- **Port:** 3000 (configurable in `vite.config.ts`)
- **Host:** true (accessible from network)
- **Auto-open:** Browser opens automatically

### Tailwind Configuration
- **Custom colors** for legal AI theme
- **Font family** set to Inter with fallbacks
- **Custom spacing** based on 4dp grid system

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Deploy dist/ folder to Netlify
```

## 🧪 Testing

The project includes:
- TypeScript type checking
- ESLint for code quality
- Build verification

```bash
# Type check
npx tsc --noEmit

# Lint code
npm run lint

# Test build
npm run build
```

## 🎨 Design Inspiration

This project follows the **Luma AI Design System** principles:
- **Empowered creativity within calm boundaries**
- **Professional-grade, emotionally accessible interface**
- **Gradient cards and colorful module tiles**
- **Circular icons, soft blurred glows, floating layers**
- **High accessibility contrast, elegant microinteractions**

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions or support, please contact:
- Email: support@newlawai.com
- Documentation: [Project Wiki]
- Issues: [GitHub Issues]

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**

🔗 **Live Demo:** [Your deployment URL]
🚀 **Status:** Production Ready
⭐ **Version:** 1.0.0
