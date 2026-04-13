# Gemini Instructional Context - Sourav Portfolio

This document provides architectural overview, development standards, and operational guidelines for the **Sourav Portfolio** project.

## 🚀 Project Overview

A modern, high-performance professional portfolio website for Sourav Bhattacharya, a Senior Full-stack Developer. The project emphasizes a clean, high-contrast "brutalist-lite" aesthetic with a focus on typography and professional history.

- **Core Stack:** React 19, TypeScript 6.0, Vite 8.0.
- **Styling:** Vanilla CSS (high-contrast, black & white).
- **Animations:** Framer Motion.
- **Icons:** React Icons & Custom SVG assets.

## 🛠️ Building and Running

| Task | Command |
| :--- | :--- |
| Start Development Server | `yarn dev` |
| Build for Production | `yarn build` |
| Lint Codebase | `yarn lint` |
| Preview Production Build | `yarn preview` |

## 📂 Project Structure

- `src/data.ts`: **Single Source of Truth** for all professional data (experience, skills, education). Update this file to change site content.
- `src/components/`: Modular React components (Navbar, Hero, Skills, etc.).
- `src/App.tsx`: Main layout wrapper.
- `public/`: SVG icons and static assets like the resume and profile picture.
- `src/App.css`: Primary stylesheet containing layout and component-specific styles.
- `src/index.css`: Global resets, root variables, and base typography.

## 🎨 Development Conventions

### 1. Data-Driven Components
Most components are designed to consume data from `src/data.ts`. When adding new sections or updating info, modify the interfaces and exports in `data.ts` first.

### 2. Styling Standards
- **Aesthetic:** High-contrast (Black/White), minimal borders (2px solid #000), and bold typography.
- **Fonts:** `Inter` for headings/UI elements, `Georgia` (serif) for body text.
- **Responsiveness:** Mobile-first approach using media queries in `App.css`.

### 3. Component Guidelines
- Use Functional Components with `React.FC`.
- Explicitly define TypeScript interfaces for props and data structures.
- Keep components focused on a single section of the portfolio.

### 4. Assets
- Technical icons should be added to `public/` and mapped in `src/components/Skills.tsx` within the `skillLogos` object.
- Ensure all SVG assets are optimized for web use.

## 📝 Future Improvements (TODO)
- [ ] Implement a blog or project showcase section.
- [ ] Add dark mode toggle (currently locked to light-high-contrast).
- [ ] Integrate an automated contact form backend.
