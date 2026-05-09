# Supun Marine Engineering

A professional single-page Angular website for **Supun Marine Engineering** — a marine engineering company specializing in ship repair, maintenance, fabrication, and marine consulting services.

## Features

- **Responsive Design** — Fully responsive across desktop, tablet, and mobile
- **Professional Theme** — Navy/marine color scheme with elegant typography
- **Smooth Navigation** — Sticky navbar with smooth scroll and active section highlighting
- **Hero Section** — Full-screen hero with gradient overlay and animated particles
- **About Section** — Company overview with credentials and experience badge
- **Services Section** — Six service cards with hover animations
- **Portfolio Section** — Project showcase grid with overlay effects
- **Contact Section** — Working contact form with contact info cards
- **Performance Optimized** — Lazy-loaded images, optimized CSS, production builds
- **GitHub Pages Ready** — Pre-configured deployment workflow

## Tech Stack

- **Angular 21** — Latest Angular with standalone components and signals
- **SCSS** — Custom design system with CSS custom properties
- **TypeScript** — Fully typed components and data models
- **Google Fonts** — Montserrat + Open Sans

## Getting Started

### Prerequisites

- Node.js 22+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
ng serve
```

Navigate to `http://localhost:4200/`.

### Build for Production

```bash
ng build
```

Build output is in `dist/supun-marine-engineering/browser`.

### Build for GitHub Pages

```bash
ng build --base-href /supun-marine-engineering/
```

## Deployment to GitHub Pages

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on push to the `main` branch.

### Manual Setup

1. Push this repository to GitHub
2. Go to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. The site will deploy automatically on the next push to `main`

## Customization

All sample content is defined in `src/app/app.ts`:

- **Company name and branding** — Update in `app.html` and `index.html`
- **Services** — Edit the `services` array in `app.ts`
- **Portfolio projects** — Edit the `projects` array in `app.ts`
- **Statistics** — Edit the `stats` array in `app.ts`
- **Contact info** — Update in the contact section of `app.html`
- **Colors** — Modify CSS custom properties in `src/styles.scss`

## License

This project is proprietary to Supun Marine Engineering.
