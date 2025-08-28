# Modern React Template with Shadcn/UI

A clean, production-ready React template built with modern development practices using TypeScript, Vite, Shadcn/UI, and Zustand. This template provides a solid foundation for building scalable React applications with proper naming conventions and organized structure.

## 🚀 Tech Stack

- **[React 19.1+](https://react.dev/)** - Modern React with hooks and concurrent features
- **[TypeScript 5.8+](https://www.typescriptlang.org/)** - Strict type safety with comprehensive type definitions
- **[Vite 7.1+](https://vitejs.dev/)** - Lightning-fast build tool with HMR and optimized bundling
- **[Tailwind CSS 4.1+](https://tailwindcss.com/)** - Utility-first CSS framework with v4 features
- **[Shadcn/UI](https://ui.shadcn.com/)** - Beautiful, accessible component library built on Radix UI
- **[Sonner 2.0+](https://sonner.emilkowal.ski/)** - An opinionated toast component for React
- **[Zustand 5.0+](https://zustand-demo.pmnd.rs/)** - Lightweight state management with localStorage persistence
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon library
- **[next-themes 0.4+](https://github.com/pacocoursey/next-themes)** - Perfect dark mode implementation

## ✨ Key Features

### 🎨 **Dynamic Theme System**
- Light and dark theme switching with real-time updates
- localStorage persistence across page refreshes
- Seamless theme transitions with next-themes integration

### 🔔 **Smart Notification System**
- Sonner toast notifications with auto-removal
- Toast provider with centralized notification management
- Beautiful animations and positioning with Sonner

### 🧩 **Comprehensive Component Library**
- **UI Components**: Shadcn/UI components (Button, Card, Badge, Dropdown Menu, Separator, Sonner)
- **Layout Components**: Header, MainContent with responsive design
- **Feature Components**: InteractiveCounter, ThemeSelector, NotificationDisplay
- **Common Components**: ToastNotifications, ToastProvider
- All components fully typed with TypeScript and Shadcn/UI integration

### 📱 **Responsive Design**
- Mobile-first approach with Tailwind breakpoints
- Adaptive layouts for all screen sizes
- Touch-friendly interactive elements

### 🏗️ **Modern Architecture**
- Clean separation of concerns with organized folder structure
- Utility functions with proper TypeScript typing (lib/utils.ts)
- Ready-to-use directories for hooks, constants, types, services, and pages
- Modular component organization by type (ui, layout, features, common)

### 🔄 **State Management**
- Zustand store with devtools integration
- localStorage persistence for theme and UI preferences
- Centralized notification management
- Loading states and UI state management

## 🛠️ Getting Started

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **npm** 9+ or **yarn** 1.22+
- **Git** for version control

### Quick Start

1. **Clone or download the template**
   ```bash
   git clone <repository-url>
   cd template-1-shadcnui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Development Workflow

1. **Create new components** in appropriate directories (`/ui`, `/layout`, `/features`, `/common`)
2. **Add types** in `/types` for TypeScript definitions
3. **Implement utilities** in `/utils` for shared functionality
4. **Update store** in `/stores` for state management
5. **Follow naming conventions** using kebab-case for files and PascalCase for components
6. **Test thoroughly** across different themes and screen sizes

## 📁 Project Structure

```
src/
├── components/          # React components organized by type
│   ├── features/       # Feature-specific components
│   │   ├── interactive-counter.tsx
│   │   ├── notification-display.tsx
│   │   └── theme-selector.tsx
│   ├── layout/         # Layout and structural components
│   │   ├── header.tsx
│   │   └── main-content.tsx
│   ├── ui/             # Shadcn/UI base components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── separator.tsx
│   │   └── sonner.tsx
│   └── common/         # Reusable shared components
│       ├── toast-notifications.tsx
│       └── toast-provider.tsx
├── assets/             # Static assets
│   └── react.svg
├── lib/                # Utility functions and configurations
│   └── utils.ts
├── stores/             # Zustand state management
│   └── app-store.ts
├── constants/          # Application constants (empty)
├── hooks/              # Custom React hooks (empty)
├── pages/              # Page components (empty)
├── services/           # API services (empty)
├── types/              # TypeScript type definitions (empty)
├── utils/              # Additional utility functions (empty)
├── app.tsx             # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles with Tailwind CSS v4 and theme variables
└── vite-env.d.ts       # Vite type definitions
```

## 📋 Naming Conventions

### Files and Folders
- **Files**: Use kebab-case (e.g., `user-profile.tsx`, `api-client.ts`)
- **Folders**: Use kebab-case (e.g., `user-management/`, `api-services/`)
- **Main Components**: Use kebab-case for filenames (e.g., `app.tsx`, `main.tsx`)

### Code Conventions
- **Components**: PascalCase (e.g., `UserProfile`, `NavigationMenu`, `App`)
- **Variables & Functions**: camelCase (e.g., `userName`, `handleSubmit`)
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `API_BASE_URL`, `MAX_RETRY_ATTEMPTS`)
- **Types & Interfaces**: PascalCase (e.g., `User`, `ApiResponse`)
- **Hooks**: camelCase starting with 'use' (e.g., `useLocalStorage`, `useAuth`)

### Recent Updates
- Updated `App.tsx` to `app.tsx` to follow kebab-case naming convention
- Fixed import statements to match new file naming
- Maintained PascalCase for component names while using kebab-case for filenames

## 🧩 Components

### UI Components (`src/components/ui/`)
Shadcn/UI base components built on Radix UI primitives:

- **Button**: Versatile button component with multiple variants
- **Card**: Container component for content organization
- **Badge**: Small status and labeling component
- **Dropdown Menu**: Accessible dropdown menu with keyboard navigation
- **Separator**: Visual divider component
- **Sonner**: Toast notification system integration
  - Built with Sonner for beautiful animations
  - Theme-aware styling with next-themes integration
  - Accessible and performant

All components are:
- Fully accessible with ARIA support
- Customizable with CSS variables
- TypeScript-first with excellent DX
- Built on Radix UI primitives

### Layout Components (`src/components/layout/`)
Structural components for application layout:

- **Header**: Application header with navigation
  - Responsive sidebar toggle
  - Logo and application name
  - Notification bell with unread count
  - Integrated theme selector
  - User menu placeholder
  - Multiple variants: Header, HeaderWithNav, MinimalHeader
  - Responsive components: AppBrand, MobileAppBrand, HeaderActions

- **MainContent**: Main content area component
  - Responsive structure with mobile-first design
  - Content organization with structured layout
  - Flexible layout adaptable to different content types
  - Proper semantic HTML structure for accessibility

### Feature Components (`src/components/features/`)
Feature-specific interactive components:

- **InteractiveCounter**: Advanced counter widget
  - Increment, decrement, and reset functionality
  - Configurable min/max ranges
  - Statistics display (total operations, average)
  - Operation history tracking
  - Integration with app store for loading states
  - Notification system integration
  - Multiple display modes: standard, compact, mobile-optimized
  - Sub-components: CounterDisplay, CounterControls, CounterStats, MobileCounterStats, CompactCounter

### Common Components (`src/components/common/`)
Reusable shared components for application-wide functionality:

- **ToastNotifications**: Utility functions for showing toast notifications
  - Wrapper functions for different notification types
  - Integration with Sonner toast system
  - Consistent notification styling and behavior

- **ToastProvider**: Toast notification provider component
  - Centralized toast management
  - Theme-aware toast styling
  - Global toast configuration

## 🔄 State Management

### Zustand Store (`src/stores/app-store.ts`)
Centralized application state with localStorage persistence:

- **Theme Management**
  - Current theme selection from 30+ DaisyUI themes
  - Real-time theme switching with DOM updates
  - localStorage persistence across sessions

- **Counter State**
  - Interactive counter with increment/decrement operations
  - Statistics tracking (total operations, average)
  - Operation history and state management

- **UI State**
  - Loading states for async operations
  - Global UI preferences and application state

- **Notification System**
  - Toast notification queue with unique IDs
  - Auto-removal with configurable duration
  - Multiple notification types with proper styling

- **Persistence Features**
  - Automatic localStorage sync for theme preferences
  - Lightweight state management with minimal re-renders

## 🏠 Demo Application

The template includes a clean, focused demo application showcasing core functionality:

### Main Application
- **Interactive counter** demonstrating Zustand state management
- **Theme selector** with light/dark mode switching using next-themes
- **Notification system** with Sonner toast notifications
- **Responsive header** with brand display and user actions
- **Clean layout** showcasing proper component organization
- **Modern UI** built with Shadcn/UI components and Tailwind CSS v4

## 🚀 Usage Examples

### Component Usage

#### Theme Switching
```tsx
import { useTheme } from 'next-themes';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
}
```

#### Interactive Counter
```tsx
import { InteractiveCounter } from './components/features/interactive-counter';

// Interactive counter with state management
<InteractiveCounter />
```

#### Theme Selector
```tsx
import { ThemeSelector } from './components/features/theme-selector';

// Theme selector component
<ThemeSelector />
```

#### Notification System
```tsx
import { showToast } from './components/common/toast-notifications';
import { toast } from 'sonner';

// Using the custom showToast function
showToast('success', 'Success!', 'Operation completed successfully');

// Or using Sonner directly
toast.success('Success!', {
  description: 'Operation completed successfully',
  duration: 5000
});

// Toast Provider is already included in App.tsx
```

### State Management Usage
```tsx
import { useAppStore } from './stores/app-store'
import { showToast } from './components/common/toast-notifications'

function MyComponent() {
  const { 
    theme, 
    setTheme, 
    count,
    increment,
    decrement,
    isLoading, 
    setLoading 
  } = useAppStore()

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    showToast('success', 'Theme Changed', `Switched to ${newTheme} theme`)
  }

  return (
    <div className={theme}>
      <button onClick={() => increment(1)}>Count: {count}</button>
      <button onClick={() => decrement(1)}>Decrement</button>
      {/* Your component content */}
    </div>
  )
}
```

## 🛠️ Utilities

### Project Organization
The template includes well-organized directories for scalable development:

- **`src/components/ui/`**: Shadcn/UI base components (Button, Card, Badge, Dropdown Menu, Separator, Sonner)
- **`src/components/layout/`**: Layout components (Header, MainContent)
- **`src/components/features/`**: Feature-specific components (InteractiveCounter, ThemeSelector, NotificationDisplay)
- **`src/components/common/`**: Reusable common components (ToastNotifications, ToastProvider)
- **`src/stores/`**: Zustand state management stores (app-store.ts)
- **`src/lib/`**: Utility functions and configurations (utils.ts with cn function)
- **`src/utils/`**: Ready for additional utility functions (currently empty)
- **`src/constants/`**: Ready for application constants (currently empty)
- **`src/types/`**: Ready for TypeScript type definitions (currently empty)
- **`src/hooks/`**: Ready for custom React hooks (currently empty)
- **`src/services/`**: Ready for API services (currently empty)
- **`src/pages/`**: Ready for page components (currently empty)

These directories provide a solid foundation for expanding your application with proper organization and separation of concerns.

## 🔧 Configuration

### Tailwind CSS v4
Tailwind CSS v4 is configured with the new Vite plugin:
- `tailwind.config.js` - Tailwind v4 configuration with CSS variables
- `@tailwindcss/vite` - Tailwind CSS v4 Vite plugin
- `src/index.css` - Global styles with @theme inline and CSS custom properties

### TypeScript
Strict mode is enabled with additional linting rules:
- `noUnusedLocals` and `noUnusedParameters` for cleaner code
- `noFallthroughCasesInSwitch` for safer switch statements
- `noUncheckedSideEffectImports` for better module safety

### ESLint
Configured with React and TypeScript support:
- React Hooks rules
- React Refresh for HMR
- TypeScript ESLint recommended rules

## 🎨 Styling

### Tailwind CSS v4 + Shadcn/UI
The template uses Tailwind CSS v4 with Shadcn/UI for styling:

- **Light/Dark theme system** with next-themes integration
- **CSS custom properties** for semantic color system
- **Accessible components** built on Radix UI primitives
- **Responsive utilities** for mobile-first design
- **Theme switching** with persistent user preferences via next-themes
- **Modern CSS features** with Tailwind CSS v4 and @theme inline

### Key Features
- **Automatic theme persistence**: User's theme choice is saved to localStorage
- **Real-time theme switching**: Instant theme changes without page reload
- **Mobile-optimized**: Responsive design across all screen sizes
- **Consistent styling**: Shadcn/UI ensures design consistency across components
- **CSS Variables**: Comprehensive theme system with CSS custom properties
- **Modern shadows**: Custom shadow system with light/dark variants

## 📦 Dependencies

### Production Dependencies
- `react` (^19.1.1) & `react-dom` (^19.1.1) - React 19 with modern features
- `zustand` (^5.0.8) - Lightweight state management with persistence
- `lucide-react` (^0.541.0) - Beautiful, consistent icon library
- `sonner` (^2.0.7) - Modern toast notification library
- `next-themes` (^0.4.6) - Perfect dark mode implementation
- `@radix-ui/react-dropdown-menu` (^2.1.16) - Dropdown menu primitives
- `@radix-ui/react-separator` (^1.1.7) - Separator primitives
- `@radix-ui/react-slot` (^1.2.3) - Slot primitives for composition
- `class-variance-authority` (^0.7.1) - CVA for component variants
- `clsx` (^2.1.1) - Conditional class name utility
- `tailwind-merge` (^3.3.1) - Tailwind class conflict resolution
- `tailwindcss` (^4.1.12) - Utility-first CSS framework v4
- `@tailwindcss/vite` (^4.1.12) - Tailwind CSS v4 Vite plugin

### Development Dependencies
- `@vitejs/plugin-react` (^5.0.0) - Vite React plugin with fast refresh
- `typescript` (~5.8.3) - TypeScript compiler with strict mode
- `vite` (^7.1.2) - Lightning-fast build tool
- `eslint` (^9.33.0) - Code linting with React and TypeScript rules
- `typescript-eslint` (^8.39.1) - TypeScript-specific ESLint rules
- `@types/react` (^19.1.10) & `@types/react-dom` (^19.1.7) - TypeScript definitions
- `tw-animate-css` (^1.3.7) - Additional CSS animations for Tailwind

## 🏗️ Why Use This Template?

### Developer Experience
- **Modern tooling**: Latest versions of React, TypeScript, and Vite
- **Type safety**: Comprehensive TypeScript integration with strict mode
- **Fast development**: Hot reload and optimized development server
- **Clean structure**: Well-organized file structure with clear naming conventions
- **Minimal setup**: Ready to use with essential features configured

### Production Ready
- **Performance optimized**: Vite's fast build system and optimizations
- **Mobile responsive**: Mobile-first design with responsive components
- **Scalable architecture**: Modular design for easy expansion
- **Best practices**: Follows React and TypeScript best practices

### Design System
- **Shadcn/UI integration**: Beautiful, accessible components built on Radix UI
- **Theme flexibility**: Light/dark mode switching with next-themes and CSS variables
- **Consistent UI**: Cohesive design language with semantic color system
- **Responsive design**: Mobile-first approach with Tailwind breakpoints
- **Modern CSS**: Tailwind CSS v4 with @theme inline and custom properties

### State Management
- **Lightweight Zustand**: Minimal overhead with powerful features
- **TypeScript integration**: Fully typed store with IntelliSense
- **Persistence**: Automatic localStorage synchronization
- **Simple API**: Easy to understand and extend

## 🚀 Deployment

### GitHub Pages (Automated)

This template is configured for automatic deployment to GitHub Pages:

1. **Repository Setup**:
   - Push your code to a GitHub repository
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Automatic Deployment**:
   - Every push to `main` branch triggers automatic deployment
   - GitHub Actions workflow builds and deploys to GitHub Pages
   - Site will be available at `https://yourusername.github.io/repository-name/`

3. **Configuration**:
   - Update the `base` path in `vite.config.ts` to match your repository name
   - The workflow file is located at `.github/workflows/deploy.yml`

### Manual Build

Build the project for production:
```bash
npm run build
```

The `dist` folder contains the optimized production build ready for deployment to any static hosting service.

## 📜 Scripts

### Development
- **`npm run dev`**: Start development server with hot reload at `http://localhost:5173`
- **`npm run build`**: Build for production with optimizations
- **`npm run preview`**: Preview production build locally

### Quality Assurance
- **`npm run lint`**: Run ESLint for code quality
- **`npm run lint:fix`**: Auto-fix ESLint issues

These scripts provide the essential development workflow for building and maintaining your React application.

## 📚 Documentation

### Component Documentation
The template includes well-documented components:
- **TypeScript definitions**: Complete prop interfaces for all components
- **Usage examples**: Clear implementation examples in this README
- **Responsive design**: Mobile-first approach with proper breakpoints
- **State integration**: Zustand store integration examples

### Architecture Overview
- **File organization**: Clear separation of concerns with organized directories
- **Naming conventions**: Consistent kebab-case for files, PascalCase for components
- **State management**: Centralized Zustand store with persistence
- **Styling approach**: Tailwind CSS v4 with Shadcn/UI component library
- **Theme system**: CSS custom properties with light/dark mode support

## 🎯 Best Practices

1. **Component Organization**: Keep components small and focused on a single responsibility
2. **Type Safety**: Use TypeScript interfaces and types for all data structures
3. **State Management**: Use Zustand for global state, local state for component-specific data
4. **Styling**: Prefer Shadcn/UI components over custom Tailwind classes, use semantic color classes
5. **Theme Management**: Use the built-in theme system with CSS variables, avoid hardcoded colors
6. **File Organization**: Follow the established folder structure and naming conventions
7. **Error Handling**: Implement proper error boundaries and loading states
8. **Performance**: Use React.memo, useMemo, and useCallback when appropriate
9. **Responsive Design**: Use mobile-first approach with DaisyUI responsive modifiers

## 🤝 Contributing

### Development Guidelines
1. **Follow naming conventions**: Use kebab-case for files, PascalCase for components
2. **Maintain TypeScript strict mode**: Ensure all code is properly typed
3. **Keep files under limits**: Components under 500 lines, utilities under 250 lines
4. **Document new features**: Update README and component documentation
5. **Follow project structure**: Use existing directories and patterns

### Code Quality Standards
- **ESLint compliance**: All code must pass ESLint checks
- **TypeScript strict**: Comprehensive type coverage
- **Consistent styling**: Use Tailwind CSS v4 and Shadcn/UI components
- **Responsive design**: Mobile-first approach for all components
- **State management**: Use Zustand store for application state

### Getting Started with Development
1. **Clone the repository** and install dependencies
2. **Run development server** with `npm run dev`
3. **Follow existing patterns** in component organization
4. **Test across themes** to ensure compatibility
5. **Maintain file size limits** and refactor when necessary

## 📄 License

This project is licensed under the **MIT License**.

### MIT License Summary
- ✅ **Commercial use**: Use in commercial projects
- ✅ **Modification**: Modify and adapt the code
- ✅ **Distribution**: Distribute original or modified versions
- ✅ **Private use**: Use in private projects

---

<div align="center">
  <p><strong>Built with ❤️ using React, TypeScript, Vite, and Shadcn/UI</strong></p>
  <p>A clean, modern template for building scalable React applications</p>
</div>
