# 🪔 Animated Diwali Greeting Card

A beautiful, interactive Diwali greeting card web application with stunning animations, fireworks, and personalized wishes.

![Diwali Card](https://img.shields.io/badge/Festival-Diwali-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178c6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.11-646cff?style=for-the-badge&logo=vite)

## ✨ Features

- 🎴 **3-Page Foldable Card Animation** - Beautiful book-opening animation inspired by traditional greeting cards
- 🎆 **Dynamic Fireworks Display** - Canvas-based fireworks with realistic physics simulation
- 🎵 **Looping Audio** - Festive Diwali music and firecracker sound effects
- 🎲 **Random Wishes** - 10 unique Diwali greetings displayed randomly
- 📱 **Fully Responsive** - Optimized for all devices from mobile (320px) to 4K displays
- 🎨 **Festive Animations** - Firecracker bursts, flame animations, and sparkling effects
- 🔗 **Social Media Integration** - Quick links to GitHub, Instagram, and LinkedIn

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm installed
- Modern web browser with HTML5 Canvas support

### Installation

```bash
# Clone the repository
git clone https://github.com/psb-001/diwali-greeting-card.git

# Navigate to project directory
cd diwali-greeting-card

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the application.

## 🛠️ Built With

- **React 18** - UI framework
- **TypeScript** - Type safety and better developer experience
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **HTML5 Canvas** - For fireworks animation

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The build output will be in the `dist` folder, ready to deploy.

## 🌐 Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Push the `dist` folder to `gh-pages` branch
- **Any CDN/Static Host**: Upload contents of `dist` folder

## 🎯 Project Structure

```
diwali-greeting-card/
├── src/
│   ├── App.tsx              # Main greeting card component
│   ├── Fireworks.tsx        # Canvas-based fireworks animation
│   ├── wishesData.ts        # Collection of Diwali wishes
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/
│   ├── happy-diwali-jethalal-audio-meme-download.mp3
│   └── fireworks-07-419025.mp3
└── index.html               # HTML template
```

## 🎨 Features in Detail

### Card Animation
- Smooth 3-page flip animation using CSS 3D transforms
- Perspective-based rotation for realistic book-opening effect
- Responsive sizing for all screen sizes

### Fireworks System
- Real-time particle physics simulation
- Multiple festive colors (red, yellow, green, blue, orange, purple)
- 60fps animation using requestAnimationFrame
- Transparent canvas background for overlay effect

### Responsive Design
- Mobile: 320px - 767px (viewport-based sizing)
- Tablet: 768px - 991px (optimized dimensions)
- Desktop: 992px+ (fixed pixel dimensions)
- Special handling for landscape and short screens
- Text scaling with CSS clamp() function

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Prathamesh Bhujbal**

- GitHub: [@psb-001](https://github.com/psb-001)
- Instagram: [@pratham01012007](https://www.instagram.com/pratham01012007)
- LinkedIn: [prathamesh-bhujbal-psb](https://www.linkedin.com/in/prathamesh-bhujbal-psb)

## 🙏 Acknowledgments

- Inspired by the birthday card animation from [naemazam/birthday-card](https://github.com/naemazam/birthday-card)
- Fireworks animation concept from [huynq-fouj/Firework](https://github.com/huynq-fouj/Firework)

## 🎊 Happy Diwali!

Wishing you and your family a blessed and joyful Diwali filled with light, prosperity, and happiness! 🪔✨

---

Made with ❤️ for Diwali 2025
