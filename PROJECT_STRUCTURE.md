# MyThought Project Structure

This document provides an overview of the project structure and the purpose of each file and directory in the MyThought application.

## 📁 Root Directory

### Configuration Files
- **`package.json`** - Node.js project configuration with dependencies and scripts
- **`package-lock.json`** - Locked dependency versions for consistent installs
- **`tailwind.config.js`** - Tailwind CSS configuration and customization
- **`vite.config.ts`** - Vite build tool configuration
- **`tsconfig.json`** - TypeScript compiler configuration
- **`tsconfig.app.json`** - TypeScript configuration for the application
- **`tsconfig.node.json`** - TypeScript configuration for Node.js
- **`eslint.config.js`** - ESLint linting rules and configuration
- **`components.json`** - shadcn/ui component configuration
- **`.gitignore`** - Git ignore patterns for version control

### Documentation
- **`README.md`** - Project overview and setup instructions
- **`PROJECT_STRUCTURE.md`** - This file - project structure documentation

### HTML Entry Point
- **`index.html`** - Main HTML template and application entry point

## 📁 .trae/
Internal Trae AI configuration directory
- **`rules/project_rules.md`** - Project-specific rules and guidelines for AI assistance

## 📁 @/
Legacy component directory (being phased out)
- **`components/ScrollReveal.jsx`** - Scroll reveal animation component
- **`components/ScrollReveal.css`** - Styles for scroll reveal animations
- **`components/ui/`** - Legacy UI components (moved to src/components/ui/)

## 📁 public/
Static assets served directly by the web server
- **`vite.svg`** - Vite logo
- **`Img/SVG/`** - SVG image assets

## 📁 Img/
Additional image assets directory

## 📁 src/
Main application source code

### Core Application Files
- **`main.tsx`** - Application entry point and React DOM rendering
- **`app.tsx`** - Root application component with routing
- **`index.css`** - Global styles, Tailwind imports, and custom CSS
- **`vite-env.d.ts`** - TypeScript environment declarations for Vite

### 📁 src/components/
React component organization following feature-based architecture

#### 📁 src/components/layout/
Structural and layout components
- **`header.tsx`** - Main navigation header with menu items
- **`main-content.tsx`** - Main content area with hero section and timeline

#### 📁 src/components/ui/
Reusable UI components and primitives
- **`hero-parallax.tsx`** - Hero section with parallax scrolling effect
- **`macbook-scroll.tsx`** - MacBook scroll animation component
- **`navigation-menu.tsx`** - Navigation menu component
- **`theme-selector.tsx`** - Theme switching component
- **`section-container.tsx`** - Reusable section wrapper
- **`notification-display.tsx`** - Notification system component
- **`radial-orbital-timeline.tsx`** - Interactive orbital timeline component
- **`badge.tsx`** - Badge/tag component (shadcn/ui)
- **`button.tsx`** - Button component (shadcn/ui)
- **`card.tsx`** - Card component (shadcn/ui)

#### 📁 src/components/features/
Feature-specific components (currently empty, ready for expansion)

### 📁 src/pages/
Page components for different routes
- **`about-us.tsx`** - About us page
- **`blog.tsx`** - Blog page
- **`business-consultancy.tsx`** - Business consultancy services page
- **`contact-us.tsx`** - Contact information page
- **`design-creativity.tsx`** - Design and creativity services page
- **`software-tech.tsx`** - Software and technology services page
- **`ventures.tsx`** - Ventures and partnerships page

### 📁 src/stores/
State management using Zustand
- **`app-store.ts`** - Global application state store

### 📁 src/hooks/
Custom React hooks (currently empty, ready for expansion)

### 📁 src/lib/
Utility libraries and helper functions
- **`utils.ts`** - Common utility functions and helpers

### 📁 src/assets/
Static assets imported by components
- **`react.svg`** - React logo

## 🎨 Styling Architecture

### CSS Framework Stack
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on Tailwind
- **Custom CSS** - Additional styles in `index.css`

### Theme System
- Light/Dark mode support
- Multiple DaisyUI themes available
- Responsive design with mobile-first approach

## 🏗️ Build System

### Development Tools
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **ESLint** - Code linting and quality
- **React 18+** - Modern React with hooks

### Component Architecture
- **Functional Components** - Using React hooks
- **TypeScript Interfaces** - Strongly typed props
- **Modular Design** - Reusable and composable components

## 🚀 Key Features

### Current Implementation
1. **Hero Section** - Parallax scrolling with product showcase
2. **Timeline Component** - Interactive orbital timeline for development process
3. **Responsive Design** - Mobile-first responsive layout
4. **Theme Support** - Light/dark mode switching
5. **Modern Animations** - Smooth scroll and hover effects

### Architecture Patterns
- **Component Composition** - Building complex UIs from simple components
- **State Management** - Zustand for global state
- **Type Safety** - Full TypeScript coverage
- **Performance** - Optimized with Vite and modern React patterns

## 📝 Development Guidelines

### File Naming Conventions
- **Components**: PascalCase (e.g., `HeroParallax.tsx`)
- **Files/Folders**: kebab-case (e.g., `hero-parallax.tsx`)
- **Constants**: SCREAMING_SNAKE_CASE
- **Variables/Functions**: camelCase

### Directory Organization
- Components organized by purpose (ui, layout, features)
- Pages separated from components
- Utilities and hooks in dedicated directories
- Clear separation of concerns

This structure supports scalable development and maintains clean code organization as the project grows.