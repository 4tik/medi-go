# Medi Go

[![Live Demo](https://img.shields.io/badge/Live_Demo-medi--go--bd.vercel.app-000000?style=for-the-badge&logo=vercel)](https://medi-go-bd.vercel.app/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

A modern, high-performance digital healthcare landing page and platform web application built with **React 19**, **Vite 7**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🌐 Live Preview

The application is deployed and live on Vercel:
👉 **[https://medi-go-bd.vercel.app/](https://medi-go-bd.vercel.app/)**

---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Preview](#-live-preview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Development Workflow](#development-workflow)
- [Build and Deployment](#build-and-deployment)
- [Component Guidelines](#component-guidelines)
- [Styling Guidelines](#styling-guidelines)
- [Contribution Guidelines](#contribution-guidelines)

---

## Project Overview

**Medi Go** provides a responsive digital healthcare interface designed to streamline patient-to-doctor interactions. The application showcases telemedicine consultation capabilities, specialist discovery, health service packages, secure electronic health records (EHR), verified patient testimonials, and multi-platform mobile application integration.

---

## Technology Stack

| Layer | Technology | Description |
|---|---|---|
| **Framework** | [React 19](https://react.dev/) | Core UI rendering engine |
| **Build Tool** | [Vite 7](https://vite.dev/) | Ultra-fast local dev server and optimized production bundler |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS framework with `@tailwindcss/vite` |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | End-to-end type safety and IntelliSense |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Declarative scroll and gesture animations |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icon set |
| **Class Utilities** | `clsx` & `tailwind-merge` | Conditional class name resolution and merge conflict handling |

---

## Features

- **Hero & Doctor Search:** High-impact hero section with fast search across physicians, clinics, and specialties.
- **Trust Indicators:** Highlighting board certifications, 24/7 emergency support, and HIPAA compliance.
- **Service Catalog:** Interactive cards for Telemedicine, In-clinic Specialist visits, Electronic Prescriptions, Lab Testing, and Health Packages.
- **Specialty Discovery:** Browse across 8 medical domains (Cardiology, Neurology, Orthopedics, Pediatrics, etc.) with real-time doctor counts.
- **Doctor Directory:** Profile cards showcasing doctor ratings, consultation fees, verification badges, and instant booking actions.
- **Interactive Telemedicine Preview:** Live simulation of the video consultation UI with in-call controls and doctor chat.
- **Patient Testimonials:** Smooth animated carousel with verified review metrics and institutional credentials.
- **Enterprise Security & Tech Stack:** Highlighting 256-bit AES encryption, SOC 2 certification, and uptime SLA.
- **Mobile Application Showcase:** Dual mockup view of iOS and Android apps with health monitoring metrics.
- **Interactive FAQ:** Expandable question-and-answer accordion with direct support triggers.
- **Sticky Navbar & Smooth Scroll:** Glass-morphism sticky header with responsive mobile drawer and a floating scroll-to-top button.

---

## Project Structure

```text
medi-go/
├── .gitignore               # Version control exclusion rules
├── .env.example             # Template for optional environment variables
├── index.html               # Single page application HTML entry point
├── package.json             # Scripts, dependencies, and project metadata
├── package-lock.json        # Deterministic dependency lockfile
├── tsconfig.json            # TypeScript compiler configuration
├── vite.config.ts           # Vite plugin pipeline & path aliases
└── src/
    ├── App.tsx              # Root page composition and section layout
    ├── main.tsx             # Application mount entry point
    ├── index.css            # Base stylesheet importing Tailwind CSS v4
    ├── utils/
    │   └── cn.ts            # Utility combining clsx and tailwind-merge
    └── components/
        ├── ui/              # Reusable design system primitives
        │   ├── index.ts     # Public exports for UI primitives
        │   ├── Button.tsx   # Variants: primary, secondary, outline, white, ghost
        │   ├── Badge.tsx    # Variants: sky, teal, amber, rose, blue, emerald, etc.
        │   ├── Card.tsx     # Standard card container with hover lift
        │   └── SectionHeading.tsx # Reusable section title with badge & description
        ├── Navbar.tsx       # Responsive top navigation with mobile drawer
        ├── Hero.tsx         # Hero section with search & floating stat cards
        ├── TrustBar.tsx     # Trust metrics banner
        ├── Services.tsx     # Grid of comprehensive medical services
        ├── Specialties.tsx  # Specialty category directory
        ├── FeaturedDoctors.tsx # Doctor cards with ratings and book action
        ├── HowItWorks.tsx   # 4-step workflow guide
        ├── Telemedicine.tsx # Video consultation interactive mockup
        ├── Testimonials.tsx # Patient reviews carousel
        ├── Technology.tsx   # Health tech infrastructure and security metrics
        ├── MobileApp.tsx    # Native mobile app download showcase
        ├── FAQ.tsx          # Accordion FAQ list with support links
        ├── FinalCTA.tsx     # High-conversion closing banner
        ├── Footer.tsx       # Links, emergency hotline, and regulatory footer
        └── ScrollToTop.tsx  # Floating button to return to top smoothly
```

---

## Installation & Setup

### Prerequisites
- **Node.js**: `v18.x` or higher (Node.js 20+ recommended)
- **npm**: `v9.x` or higher

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/4tik/medi-go.git
   cd medi-go
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

---

## Environment Variables

Copy `.env.example` if you need custom environment variables:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|---|---|---|
| `VITE_APP_NAME` | Name displayed in document title/metadata | `Medi Go` |
| `VITE_APP_DESCRIPTION` | Default platform description | `Your Trusted Digital Healthcare Partner` |
| `VITE_APP_URL` | Live production URL | `https://medi-go-bd.vercel.app/` |

---

## Development Workflow

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser at `http://localhost:5173` (or the port specified in terminal output).

---

## Build and Deployment

### 1. Type Check
Verify there are no TypeScript compile errors:
```bash
npm run typecheck
```

### 2. Production Build
Generate an optimized bundle in `dist/`:
```bash
npm run build
```

### 3. Local Preview
Preview the production bundle locally:
```bash
npm run preview
```

### 4. Deploying to Vercel
This repository is configured to deploy directly to Vercel at **[https://medi-go-bd.vercel.app/](https://medi-go-bd.vercel.app/)**:
1. Connect your GitHub repository `4tik/medi-go` in the Vercel Dashboard.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Install Command: `npm install`

---

## Component Guidelines

To maintain visual consistency and prevent code duplication, follow these guidelines when creating or updating UI elements:

1. **Section Headers:**
   Always use the `<SectionHeading />` component for section introductions:
   ```tsx
   import { SectionHeading } from './ui';

   <SectionHeading
     badge="🩺 Medical Specialties"
     badgeVariant="teal"
     title="Find the Right"
     gradientTitle="Medical Specialists"
     description="Access 500+ board-certified specialists across all disciplines."
   />
   ```

2. **Action Buttons:**
   Use the `<Button />` component with variants (`primary`, `secondary`, `outline`, `white`, `ghost`) and sizes (`sm`, `md`, `lg`):
   ```tsx
   import { Button } from './ui';

   <Button variant="primary" size="md">
     Book Appointment
   </Button>
   ```

3. **Status Badges & Chips:**
   Use the `<Badge />` component:
   ```tsx
   import { Badge } from './ui';

   <Badge variant="emerald" size="sm" pulse>
     Online
   </Badge>
   ```

4. **Elevation Cards:**
   Use `<Card />` for consistent border, shadow, and hover transition states.

---

## Styling Guidelines

- **Tailwind CSS v4:** Use Tailwind utility classes for all colors, spacing, typography, gradients, and responsive breakpoints.
- **No Ad-Hoc CSS:** Avoid defining custom CSS classes in `index.css` when Tailwind utilities can achieve the same styling.
- **Brand Gradients:**
  - Primary Gradient: `bg-gradient-to-r from-sky-500 to-blue-600`
  - Gradient Text: `bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent`
- **Responsive Layout:**
  - Standard grid pattern: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`
  - Max container width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

---

## Contribution Guidelines

1. Create a feature branch (`git checkout -b feature/my-feature`).
2. Adhere to TypeScript typing standards; do not use `any`.
3. Verify your changes pass `npm run typecheck` and `npm run build`.
4. Commit your changes with clear, descriptive messages.
5. Push to your branch and submit a Pull Request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
