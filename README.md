# Zeyad Maeen — Portfolio

A modern, animated portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **GSAP**.

## 🚀 Features

- **Blue-Purple Tech Theme** — Gradient accents with dark mode aesthetic
- **GSAP Scroll Animations** — Smooth entrance animations on every section
- **Canvas Particle Background** — Interactive animated network background
- **Responsive Design** — Fully mobile-optimized
- **ATS-Ready Content** — Semantic HTML with keyword-rich sections
- **Static Export** — Ready for GitHub Pages / any static host

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | GSAP + ScrollTrigger |
| Icons | Lucide React |

## 📦 Installation

```bash
# 1. Clone or extract this project
cd zeyad-portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

## 🌐 Deployment

### GitHub Pages
```bash
npm run build
```
The `dist/` folder will contain the static export. Push the `dist` folder contents to your `gh-pages` branch or use GitHub Actions.

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
Drag and drop the `dist/` folder into Netlify deploy UI.

## 📁 Project Structure

```
zeyad-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page composing all sections
│   └── globals.css     # Tailwind + custom styles
├── components/
│   ├── Navbar.tsx      # Fixed navigation with scroll effects
│   ├── Hero.tsx        # Profile header with animated avatar
│   ├── StatsBar.tsx    # GitHub stats highlight
│   ├── Skills.tsx      # Skill categories with tags
│   ├── Experience.tsx  # Timeline work experience
│   ├── Projects.tsx    # Timeline projects
│   ├── Achievements.tsx# Achievement cards grid
│   ├── Education.tsx   # Education & certs cards
│   ├── Volunteering.tsx# Volunteering + languages
│   ├── Footer.tsx      # Footer with social links
│   └── BackgroundParticles.tsx # Canvas particle network
├── lib/
│   └── data.ts         # All CV content data
├── public/             # Static assets
├── next.config.mjs     # Static export config
├── tailwind.config.ts  # Theme colors & fonts
└── tsconfig.json       # TypeScript config
```

## 📝 Customisation

All content lives in `lib/data.ts`. Edit that file to update:
- Personal info, contact links, summary
- Skills, experience, projects
- Achievements, education, volunteering

## 📄 License

MIT — feel free to fork and customise.
