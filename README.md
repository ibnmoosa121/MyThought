# Modern React Template with Shadcn/UI

A clean, production-ready React template built with modern development practices using TypeScript, Vite, Shadcn/UI, and Zustand. This template provides a solid foundation for building scalable React applications with proper naming conventions and organized structure.

## 🚀 Tech Stack

- **[React 19+](https://react.dev/)** - Modern React with hooks and concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Strict type safety with comprehensive type definitions
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool with HMR and optimized bundling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid styling
- **[Shadcn/UI](https://ui.shadcn.com/)** - Beautiful, accessible component library built on Radix UI
- **[Sonner](https://sonner.emilkowal.ski/)** - An opinionated toast component for React
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management with localStorage persistence
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Perfect dark mode in 2 lines of code

## ✨ Key Features

### 🎨 **Dynamic Theme System**
- Light and dark theme switching with real-time updates
- localStorage persistence across page refreshes
- Seamless theme transitions with next-themes integration

### 🔔 **Smart Notification System**
- Sonner toast notifications with auto-removal
- Multiple notification types (success, error, warning, info)
- Beautiful animations and positioning with Sonner

### 🧩 **Comprehensive Component Library**
- **UI Components**: Shadcn/UI components (Button, Card, etc.), ThemeSelector, NotificationDisplay
- **Layout Components**: Header, MainContent with responsive design
- **Feature Components**: InteractiveCounter with statistics and history
- All components fully typed with TypeScript and Shadcn/UI integration

### 📱 **Responsive Design**
- Mobile-first approach with Tailwind breakpoints
- Adaptive layouts for all screen sizes
- Touch-friendly interactive elements

### 🏗️ **Modern Architecture**
- Clean separation of concerns with organized folder structure
- Custom hooks for reusable logic
- Utility functions with proper TypeScript typing
- Constants management for maintainable code

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
   cd template-1-daisyui
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
│   │   └── interactive-counter.tsx
│   ├── layout/         # Layout and structural components
│   │   ├── header.tsx
│   │   └── main-content.tsx
│   ├── ui/             # Basic UI components
│   │   ├── notification-display.tsx
│   │   ├── theme-selector.tsx
│   │   └── toast-notifications.tsx
│   └── common/         # Reusable shared components (empty)
├── assets/             # Static assets
│   └── react.svg
├── stores/             # Zustand state management
│   └── app-store.ts
├── constants/          # Application constants (empty)
├── hooks/              # Custom React hooks (empty)
├── pages/              # Page components (empty)
├── services/           # API services (empty)
├── types/              # TypeScript type definitions (empty)
├── utils/              # Utility functions (empty)
├── app.tsx             # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles with Tailwind directives
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
Basic, reusable UI building blocks with Shadcn/UI integration:

- **Sonner Toaster**: Modern toast notification system
  - Built with Sonner for beautiful animations
  - Auto-removal with configurable duration
  - Multiple types: success, error, warning, info
  - Theme-aware styling with next-themes integration
  - Accessible and performant

- **Shadcn/UI Components**: Core UI building blocks
  - Button, Card, Separator, and other Radix-based components
  - Fully accessible with ARIA support
  - Customizable with CSS variables
  - TypeScript-first with excellent DX

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
Reusable shared components directory (currently empty, ready for future components)

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
- **Theme selector** with live theme switching across 30+ DaisyUI themes
- **Notification system** with toast notifications
- **Responsive header** with brand display and user actions
- **Clean layout** showcasing proper component organization

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
import { InteractiveCounter, CompactCounter } from './components/features/interactive-counter';

// Full-featured counter with statistics
<InteractiveCounter />

// Compact version for dashboards
<CompactCounter />
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
    <div data-theme={theme}>
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

- **`src/components/ui/`**: Shadcn/UI base components (Button, Card, Badge, etc.)
- **`src/components/layout/`**: Layout components (Header, MainContent)
- **`src/components/features/`**: Feature-specific components (InteractiveCounter, ThemeSelector)
- **`src/components/common/`**: Reusable common components (ToastNotifications, ToastProvider)
- **`src/stores/`**: Zustand state management stores
- **`src/lib/`**: Utility functions and configurations
- **`src/utils/`**: Ready for additional utility functions (currently empty)
- **`src/constants/`**: Ready for application constants (currently empty)
- **`src/types/`**: Ready for TypeScript type definitions (currently empty)
- **`src/hooks/`**: Ready for custom React hooks (currently empty)
- **`src/services/`**: Ready for API services (currently empty)
- **`src/pages/`**: Ready for page components (currently empty)

These directories provide a solid foundation for expanding your application with proper organization and separation of concerns.

## 🔧 Configuration

### Tailwind CSS
Tailwind is configured with PostCSS. The configuration files are:
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration with Tailwind and Autoprefixer

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

### Tailwind CSS + Shadcn/UI
The template uses Tailwind CSS with Shadcn/UI for styling:

- **Light/Dark theme system** with next-themes integration
- **Semantic color system** with CSS custom properties
- **Accessible components** built on Radix UI primitives
- **Responsive utilities** for mobile-first design
- **Theme switching** with persistent user preferences via next-themes

### Key Features
- **Automatic theme persistence**: User's theme choice is saved to localStorage
- **Real-time theme switching**: Instant theme changes without page reload
- **Mobile-optimized**: Responsive design across all screen sizes
- **Consistent styling**: DaisyUI ensures design consistency across components

## 📦 Dependencies

### Production Dependencies
- `react` & `react-dom` - React 19 with modern features
- `zustand` - Lightweight state management with persistence
- `lucide-react` - Beautiful, consistent icon library
- `sonner` - Modern toast notification library
- `next-themes` - Perfect dark mode implementation
- `@radix-ui/react-*` - Accessible UI primitives for Shadcn/UI
- `class-variance-authority` - CVA for component variants
- `clsx` - Conditional class name utility
- `tailwind-merge` - Tailwind class conflict resolution

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin with fast refresh
- `typescript` - TypeScript compiler with strict mode
- `tailwindcss` - Utility-first CSS framework with v4
- `@tailwindcss/vite` - Tailwind CSS v4 Vite plugin
- `eslint` - Code linting with React and TypeScript rules
- `typescript-eslint` - TypeScript-specific ESLint rules

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
- **Theme flexibility**: Light/dark mode switching with next-themes
- **Consistent UI**: Cohesive design language with CSS variables
- **Responsive design**: Mobile-first approach with proper breakpoints

### State Management
- **Lightweight Zustand**: Minimal overhead with powerful features
- **TypeScript integration**: Fully typed store with IntelliSense
- **Persistence**: Automatic localStorage synchronization
- **Simple API**: Easy to understand and extend

## 🚀 Deployment

Build the project for production:
```bash
npm run build
```

The `dist` folder contains the optimized production build ready for deployment.

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
- **Styling approach**: Tailwind CSS with DaisyUI component library

## 🎯 Best Practices

1. **Component Organization**: Keep components small and focused on a single responsibility
2. **Type Safety**: Use TypeScript interfaces and types for all data structures
3. **State Management**: Use Zustand for global state, local state for component-specific data
4. **Styling**: Prefer DaisyUI components over custom Tailwind classes, use semantic color classes
5. **Theme Management**: Use the built-in theme system, avoid hardcoded colors
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
- **Consistent styling**: Use Tailwind CSS and DaisyUI components
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
