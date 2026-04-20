# Modern Portfolio Website

A stunning, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features dark theme, glassmorphism effects, smooth animations with Framer Motion, and a modern design inspired by Apple and Tesla.

## Features

- **Dark Theme**: Sleek dark theme with glassmorphism and gradient effects
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion for page transitions and hover effects
- **Modern UI**: Minimal, futuristic design with soft shadows and rounded corners
- **Interactive Elements**: Hover animations on buttons and cards
- **SEO Friendly**: Clean structure and semantic HTML
- **Fast Loading**: Optimized with Vite for quick development and build times

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Sections

1. **Hero**: Animated typing text, CTA buttons, and background effects
2. **About**: Profile image and personal bio
3. **Skills**: Animated progress bars for technical skills
4. **Projects**: Interactive project cards with hover effects
5. **Experience**: Vertical timeline with work experience
6. **Contact**: Contact form and social links
7. **Footer**: Simple footer with copyright

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Adding Images

Place your images in the `public/` directory:
- `profile.jpg`: Your profile picture (recommended 512x512px)
- `project1.jpg`, `project2.jpg`, `project3.jpg`: Project screenshots
- `resume.pdf`: Your resume for download

### Updating Content

Edit the component files in `src/components/` to update:
- Personal information in `Hero.tsx`, `About.tsx`, `Contact.tsx`
- Skills in `Skills.tsx`
- Projects in `Projects.tsx`
- Experience in `Experience.tsx`

### Styling

The design uses custom Tailwind CSS classes defined in `tailwind.config.js`. Colors are defined as:
- `primary`: Main background (#0f0f23)
- `secondary`: Secondary background (#1a1a2e)
- `accent`: Accent color (#16213e)
- `text`: Text color (#e5e5e5)
- `highlight`: Highlight color (#0f3460)

## Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Loading.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Deployment

This project can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## License

This project is open source and available under the [MIT License](LICENSE).
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
