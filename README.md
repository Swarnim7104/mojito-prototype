# Mojito Prototype 🍹

A cocktail bar website built following a tutorial to learn React, Vite, and GSAP animations. This project demonstrates modern web development techniques including smooth animations, responsive design, and interactive user interfaces.

## ✨ Features

- **Smooth GSAP Animations**: Text splitting, scroll-triggered animations, and parallax effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Menu**: Dynamic cocktail slider with smooth transitions
- **Modern UI/UX**: Custom fonts, gradients, and visual effects
- **Performance Optimized**: Built with Vite for fast development and builds
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🎓 Learning Goals

This tutorial project helped me learn:
- **GSAP Animations**: Text splitting, scroll triggers, and timeline animations
- **React with Hooks**: useState, useRef, and custom hooks like useGSAP
- **Modern CSS**: Tailwind CSS with custom utilities and CSS Grid
- **Responsive Design**: Mobile-first approach and media queries
- **Performance**: Optimized animations and asset loading
- **Project Structure**: Component organization and constants management


## 🚀 What I Built

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: GSAP (GreenSock Animation Platform)
- **Fonts**: Google Fonts (DM Serif Text, Mona Sans) + Custom Modern Negra
- **Responsive Design**: React Responsive

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/swarnim7104/mojito-prototype.git
   cd mojito-prototype
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
mojito-prototype/
├── public/
│   ├── images/          # All image assets
│   ├── videos/          # Video assets
│   └── fonts/           # Custom fonts
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Art.jsx
│   │   ├── Cocktails.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── constants/
│   └── index.js        # App constants and data
└── README.md
```

## 🎨 Sections Overview

### Hero Section
- Large typography with GSAP text animations
- Parallax leaf elements
- Scroll-triggered video playback
- Responsive design with mobile adaptations

### Cocktails Section
- Popular cocktails and mocktails lists
- Animated leaf decorations
- Clean, readable menu layout

### About Section
- Image grid with hover effects
- Animated text reveals
- Customer rating display
- Responsive grid layout

### Art Section
- Pinned scroll section with mask effects
- Feature lists with check icons
- Dramatic image reveals
- Mobile-optimized animations

### Menu Section
- Interactive cocktail slider
- Tab navigation
- Smooth transitions between items
- Recipe details with animations

### Contact Section
- Business information
- Opening hours
- Social media links
- Animated footer elements

## 🎯 Key Components

## 🎯 Key Learning Points

### GSAP Animations I Practiced
- **Text Splitting**: Breaking text into characters and words for individual animation
- **ScrollTrigger**: Animating elements based on scroll position
- **Timeline Animations**: Sequencing multiple animations together
- **Parallax Effects**: Moving elements at different speeds during scroll
- **Pinned Sections**: Keeping sections fixed while content changes

### React Concepts Applied
- **Component Structure**: Breaking UI into reusable components
- **State Management**: Using useState for interactive elements
- **Refs**: Direct DOM manipulation with useRef
- **Custom Hooks**: Leveraging useGSAP for animation lifecycle
- **Responsive Hooks**: Using react-responsive for device detection

### CSS & Styling Techniques
- **Tailwind Utilities**: Custom utility classes and responsive design
- **CSS Grid**: Complex layouts with grid systems
- **Custom Properties**: CSS variables for consistent theming
- **Mask Effects**: Creative image reveals with CSS masks
- **Gradient Effects**: Text and background gradients

## 🔄 What I'd Do Differently

- Add TypeScript for better type safety
- Implement error boundaries for better error handling
- Add loading states for better UX
- Optimize images further with next-gen formats
- Add unit tests for components

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `index.css`:
- **Yellow**: `#e7d393` (accent color)
- **White-100**: `#efefef` (secondary text)
- **Background**: Black with noise texture

### Fonts
- **Modern Negra**: Custom display font for headings
- **Mona Sans**: Clean sans-serif for body text
- **DM Serif Text**: Elegant serif for special text

### Animation Timing
Adjust animation durations and easing in component files:
```javascript
gsap.from(element, {
  duration: 1.8,
  ease: 'expo.out',
  stagger: 0.05
});
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📈 Performance Optimizations

- **Lazy Loading**: Images load as needed
- **Optimized Assets**: WebP images and compressed videos
- **Code Splitting**: Components load efficiently
- **GSAP Performance**: Hardware-accelerated animations
- **Responsive Images**: Different sizes for different screens

## 🎭 Animation Details

### Text Animations
- Character-by-character reveals
- Staggered line animations
- Gradient text effects

### Scroll Animations
- Parallax backgrounds
- Pin/unpin sections
- Progress-based video scrubbing

### Interactive Elements
- Hover effects on buttons
- Smooth tab transitions
- Carousel navigation

## 🤝 Credits

This project was built following a tutorial to learn modern web development techniques. All design and code structure credit goes to the original tutorial creator.

## 📝 Notes

This is a learning project - not intended for commercial use. The focus was on understanding animation libraries, React patterns, and responsive design techniques.