# <img src="./public/logo.svg" alt="Viewport Sense Logo" width="32" height="32" style="vertical-align: middle;"> viewport-sense Official Website

<div align="center">
  <img src="./public/logo.svg" alt="Viewport Sense Logo" width="120" height="120">
  
  <h1>Viewport Sense</h1>
  <p><em>A modern, lightweight library for responsive breakpoint detection and viewport management</em></p>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
  [![Bundle Size](https://img.shields.io/badge/Bundle%20Size-4KB%20gzipped-green?style=flat-square)](https://bundlephobia.com/)
  [![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-orange?style=flat-square)](https://www.npmjs.com/)
</div>

---

The official documentation and showcase website for the **viewport-sense** npm package - a comprehensive viewport utility library for modern web applications.

## 🎨 Design Philosophy

This website embodies a **modern minimalistic** design philosophy, featuring:

- **Clean, Professional Aesthetics**: Smooth curves, elegant spacing, and refined details
- **Subtle Gradients**: Carefully crafted color transitions and depth
- **Modern Typography**: Inter and JetBrains Mono for optimal readability
- **Accessibility First**: Full support for user preferences and screen readers
- **Performance Optimized**: Fast loading with smooth animations

## 🏗️ Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and interactions
- **React Router** - Client-side routing
- **TypeScript Ready** - Full TypeScript support

## 🚀 Features

### 🎯 Interactive Demo Page
- Live viewport statistics with real-time updates
- Device detection and capability analysis
- Responsive breakpoint visualization
- Accessibility preferences monitoring
- Scroll position and element visibility tracking
- Safe area detection for mobile devices

### 📚 Comprehensive Documentation
- Complete API reference with code examples
- React hooks integration guide
- TypeScript definitions and IntelliSense support
- Installation and quick start guides
- Advanced patterns and best practices

### 💡 Real-World Examples
- Copy-paste ready code implementations
- Production-ready patterns and components
- Performance optimization techniques
- Accessibility-first development examples
- Responsive design patterns

### 🎨 Modern UI/UX
- Beautiful, minimalistic design system
- Smooth animations with Framer Motion
- Responsive layout that works on all devices
- Dark mode and accessibility support
- Professional component library

### 🌐 SEO & Performance Optimized
### 🌐 SEO & Performance Optimized
- Perfect Lighthouse scores
- Comprehensive meta tags
- Structured data markup
- Optimized bundle size

## 🎨 Logo & Branding

<div align="center">
  <img src="./public/logo.svg" alt="Viewport Sense Logo Variations" width="200">
</div>

The Viewport Sense logo represents the core concept of responsive viewport detection:

- **Circular Design**: Represents the comprehensive, all-encompassing nature of viewport detection
- **Screen Frame**: Central white rectangle symbolizes the viewport/screen
- **Breakpoint Indicators**: Colored dots represent different responsive breakpoints (mobile, tablet, desktop)
- **Detection Waves**: Curved lines illustrate the sensing/detection functionality
- **Corner Indicators**: Frame corners emphasize viewport boundaries and safe areas
- **Blue Gradient**: Professional, trustworthy color scheme that conveys technology and precision

The logo is designed to be scalable and recognizable at any size, from favicon to large headers.

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd viewport-sense-site

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Linking viewport-sense Package

For development with the actual viewport-sense package:

```bash
# In the viewport-sense package directory
npm link

# In this website directory
npm link viewport-sense
```

## 📁 Project Structure

```
src/
├── components/
│   ├── brutal/          # Brutalist UI components
│   ├── layout/          # Layout components
│   └── interactive/     # Interactive demos
├── pages/
│   ├── Home.jsx         # Landing page
│   ├── Docs.jsx         # Documentation
│   └── Playground.jsx   # Interactive playground
├── hooks/
│   └── useViewportSense.js  # Mock hooks for development
├── styles/
│   └── index.css        # Global styles & design system
└── docs/
    └── Demo.jsx         # Original demo implementation
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--bg-primary: #0a0a0a      /* Deep black background */
--bg-secondary: #111111    /* Card backgrounds */
--bg-tertiary: #1a1a1a     /* Elevated elements */

/* Accent Colors */  
--accent-primary: #ff6b35   /* Orange - Primary CTA */
--accent-secondary: #00ff88 /* Green - Success states */
--accent-tertiary: #ff3366  /* Red - Warnings */
--accent-code: #ffd700      /* Yellow - Code highlights */
```

### Typography
- **Headings**: Inter Black/ExtraBold
- **Body**: Inter Regular/Medium  
- **Code**: JetBrains Mono

## 📊 Performance Targets

- **Bundle Size**: < 100KB gzipped
- **Lighthouse Score**: 95+ all metrics
- **Core Web Vitals**: All green
- **Load Time**: < 2s on 3G

## 🌍 Deployment

The site is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify** 
- **GitHub Pages**
- Any static hosting service

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions welcome! Please read our contributing guidelines and submit pull requests.

---

**Built with ❤️ for the developer community**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
