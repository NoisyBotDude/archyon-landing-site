# Archyon - Futuristic Construction Services Website

A modern, static marketing website for construction services built with React, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 Futuristic construction-themed UI with blueprint grid backgrounds
- ✨ Smooth animations and transitions using Framer Motion
- 📱 Fully responsive design
- 🎯 Multi-page navigation with React Router
- 🏗️ Comprehensive service listings
- 📋 Project portfolio showcase
- 📧 Contact form (static-ready, can integrate with form services)

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **TailwindCSS** for styling
- **Framer Motion** for animations
- **React Router** for routing
- **Lucide React** for icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    layout/       # Navbar, Footer, Section
    ui/           # Button, GlowCard, Badge
    motion/       # Animation components
  data/           # Services and projects data
  pages/          # Page components
  styles/         # Global styles
  utils/          # Utility functions
```

## Deployment

This is a static site and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## Customization

Update contact information, company details, and content in:
- `src/data/services.ts` - Service listings
- `src/data/projects.ts` - Project portfolio
- `src/components/layout/Footer.tsx` - Footer contact info
- `src/pages/Contact.tsx` - Contact form and details

