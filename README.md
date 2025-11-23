<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

# Clark Chen - Digital Portfolio

**Live Site:** [https://clark21.com](https://clark21.com)

_A modern, interactive portfolio showcasing projects, blog posts, and visual chronicles._

[![Built with Gemini 3](https://img.shields.io/badge/Built%20with-Gemini%203-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/gemini)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

</div>

---

## 🌟 Overview

This portfolio website is a modern, glass-morphic design featuring:

- **Interactive Projects Showcase** - Featuring Smart Mirror, Skyveil AI, and more
- **Blog/Grimoire** - Technical articles and insights
- **Visual Chronicles** - Photo galleries from travels and experiences
- **AI Oracle Chat** - Powered by Google Gemini 3 for interactive assistance
- **Liquid Ether Background** - Fluid simulation with WebGL for immersive experience

## 🛠 Tech Stack

### Core Technologies
- **React 19.2.0** - Modern UI library with latest features
- **TypeScript** - Type-safe development
- **Vite 6.4** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework

### Design & Animation
- **Glass Morphism** - Custom backdrop-filter effects
- **Three.js** - WebGL fluid simulation (Liquid Ether effect)
- **Lucide Icons** - Beautiful, consistent iconography
- **Custom Animations** - Fade-in, float, and morph keyframes

### AI Integration
- **Google Gemini 3** - Powers the Oracle Chat feature for intelligent conversations
- **React Markdown** - Rich markdown rendering for blog posts

### Fonts
- **Outfit** - Primary sans-serif font
- **Rajdhani** - Fantasy/display font for headings
- **JetBrains Mono** - Monospace font for code and technical text

## 📂 Project Structure

```
/
├── public/              # Static assets
│   └── icon.svg        # Favicon
├── src/
│   ├── components/     # React components
│   │   ├── Background.tsx
│   │   ├── Gallery.tsx
│   │   ├── GalleryDetail.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── BlogList.tsx
│   │   ├── ProjectList.tsx
│   │   ├── OracleChat.tsx
│   │   └── ...
│   ├── data/           # Constants and data
│   │   └── constants.ts
│   ├── types/          # TypeScript type definitions
│   │   └── index.ts
│   ├── services/       # API services
│   │   └── geminiService.ts
│   ├── App.tsx         # Main application component
│   ├── index.tsx       # Entry point
│   └── index.css       # Global styles & Tailwind imports
├── index.html          # HTML entry point
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Design System

### Color Palette
- **void**: `#F2F5F3` - Cool sage mist background
- **nature-100**: `#E6EBE6` - Soft grey-green mist
- **nature-200**: `#B8C6B9` - Sage
- **nature-300**: `#7D9D89` - Vintage green
- **nature-400**: `#2F4858` - Deep slate/blue-green
- **warm-accent**: `#C08552` - Muted copper accent

### Custom Effects
- **Glass Morphism** - Frosted glass cards with backdrop blur
- **Spotlight Cards** - Interactive hover spotlight effect
- **Tilted Cards** - 3D perspective tilt on hover
- **Liquid Ether** - Full-screen fluid simulation background

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/clarkche/home.git
cd home

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Add your Gemini API key to .env
```

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server runs on `http://localhost:3000`

## 🌐 Deployment

The site is deployed at **[https://clark21.com](https://clark21.com)**

Build artifacts are in the `dist/` folder after running `pnpm build`.

## 🤖 Built with Gemini 3

This entire application was developed with assistance from **Google Gemini 3**, demonstrating AI-augmented development capabilities:

- Architecture design and component structure
- Custom animations and interactions
- Type-safe TypeScript implementation
- Responsive design patterns
- Performance optimizations

## 📝 Features

### Projects Section
- **Smart Mirror** - AI Agent-centric hardware for Gen-Z digital companions ($3M angel round)
- **Skyveil AI** - AI Copilot for real-world creation
- **Shi Dai (时代)** - Browser-based dungeon crawler game

### Blog/Grimoire
Technical articles covering:
- React Hooks deep dive
- Linux systemd & daemon management
- Microservices architecture

### Visual Chronicles
Photo galleries organized by series:
- Travel photography (Las Vegas, Hawaii, NYC)
- Timeline-based presentation
- Lightbox detail view

### Oracle Chat
Interactive AI assistant powered by Gemini 3:
- Natural language conversations
- Context-aware responses
- Markdown rendering support

## 🎯 Performance

- **Vite** - Instant HMR and optimized builds
- **Code Splitting** - Lazy-loaded routes and components
- **Tree Shaking** - Minimal production bundle
- **PostCSS** - Optimized CSS processing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Clark Chen**
- Website: [https://clark21.com](https://clark21.com)
- GitHub: [@clarkche](https://github.com/clarkche)

---

<div align="center">

**Constructed with Gemini 3** 🤖

_Where code meets creativity._

</div>
