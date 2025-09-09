# Modern React Starter Template

A clean, production-ready React template with TypeScript, Vite, Shadcn/UI, and Zustand. Perfect for quickly starting new React projects with modern development practices.

## 🚀 Tech Stack

- **React 19.1+** with TypeScript 5.8+
- **Vite 7.1+** - Lightning-fast development and build
- **Tailwind CSS 4.1+** - Utility-first styling
- **Shadcn/UI** - Beautiful, accessible components
- **Zustand 5.0+** - Lightweight state management
- **next-themes 0.4+** - Dark/light mode switching
- **Sonner 2.0+** - Toast notifications
- **Lucide React** - Consistent icon library

## ✨ Features

- 🎨 **Dark/Light Theme** with persistent preferences
- 🔔 **Toast Notifications** with Sonner integration
- 📱 **Fully Responsive** mobile-first design
- 🧩 **Component Library** with Shadcn/UI
- 🔄 **State Management** with Zustand + localStorage
- 📁 **Organized Structure** with clear naming conventions
- ⚡ **Fast Development** with Vite HMR
- 🎯 **TypeScript Strict** mode enabled

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+ or yarn 1.22+

### Setup

1. **Clone and install**
   ```bash
   git clone <repository-url>
   cd template-1-shadcnui
   npm install
   ```

2. **Start development**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173`

3. **Customize for your project**
   - Update `package.json` name and details
   - Modify `vite.config.ts` base path for deployment
   - Remove demo components from `/src/components/features/`
   - Clear `/src/stores/app-store.ts` and add your state
   - Update this README with your project details

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/             # Shadcn/UI base components (don't modify)
│   ├── layout/         # Header, navigation, layout components
│   ├── features/       # Feature-specific components (remove demos)
│   └── common/         # Reusable shared components
├── stores/             # Zustand state management
├── lib/                # Utilities (utils.ts with cn function)
├── assets/             # Static assets
├── constants/          # App constants (ready to use)
├── hooks/              # Custom React hooks (ready to use)
├── pages/              # Page components (ready to use)
├── services/           # API services (ready to use)
├── types/              # TypeScript definitions (ready to use)
├── utils/              # Additional utilities (ready to use)
├── app.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles with theme variables
```

## 🎯 Before Starting Your Project

### Files to Remove/Modify
1. **Demo Components** (in `/src/components/features/`):
   - `interactive-counter.tsx`
   - `theme-selector.tsx` 
   - `notification-display.tsx`

2. **Demo State** (in `/src/stores/app-store.ts`):
   - Remove counter logic
   - Keep theme and notification management

3. **Update Configuration**:
   - `package.json` - Change name, version, description
   - `vite.config.ts` - Update base path for your deployment
   - `README.md` - Replace with your project documentation

### Core Files to Keep
- All `/src/components/ui/` components (Shadcn/UI base)
- `/src/components/layout/` components (customize as needed)
- `/src/components/common/` toast components
- `/src/lib/utils.ts` (essential utilities)
- Theme system and CSS variables in `index.css`

## 📋 Naming Conventions

- **Files/Folders**: kebab-case (`user-profile.tsx`, `auth-forms/`)
- **Components**: PascalCase (`UserProfile`, `AuthForm`)
- **Variables/Functions**: camelCase (`userName`, `handleSubmit`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_BASE_URL`)
- **Types/Interfaces**: PascalCase (`User`, `ApiResponse`)
- **Hooks**: camelCase with 'use' (`useAuth`, `useLocalStorage`)

## 🚀 Deployment

### GitHub Pages

This template includes two deployment options:

#### Option 1: Deploy to Root Path
```bash
npm run deploy
```
- Deploys to: `https://yourusername.github.io/repositoryname/`
- Uses `predeploy` → `build` → `gh-pages -d dist`

#### Option 2: Deploy to Subfolder
```bash
npm run deploy:shadcnui
```
- Deploys to: `https://yourusername.github.io/repositoryname/shadcnui/`
- Uses `predeploy:shadcnui` → `build:shadcnui` → `gh-pages -d dist -e shadcnui`

### Configuration

**For your own deployment**, update `vite.config.ts`:

```typescript
// For root deployment
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/'

// For custom subfolder
base: process.env.NODE_ENV === 'production' 
  ? process.env.DEPLOY_TARGET === 'custom' 
    ? '/your-repo-name/custom/'
    : '/your-repo-name/'
  : '/'
```

### Manual Build
```bash
npm run build
```
Deploy the `dist/` folder to any static hosting service.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (root)
- `npm run deploy:shadcnui` - Deploy to GitHub Pages (subfolder)

## 🧩 Key Components

### Theme System
```tsx
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

### State Management
```tsx
import { useAppStore } from './stores/app-store'

function MyComponent() {
  const { theme, setTheme } = useAppStore()
  // Your component logic
}
```

### Toast Notifications
```tsx
import { toast } from 'sonner'

// Simple toast
toast.success('Success message')

// Toast with description
toast.success('Success!', {
  description: 'Operation completed successfully'
})
```

## 🎨 Styling Guidelines

- **Use Shadcn/UI components** first, then Tailwind utilities
- **Never modify** `/src/components/ui/` files directly
- **Create variants** in `/src/components/common/` for customizations
- **Use semantic colors** (`primary`, `secondary`, `muted`) not hardcoded values
- **Follow mobile-first** responsive design with Tailwind breakpoints

## 🔧 Development Tips

1. **Component Limits**: Keep components under 500 lines, utilities under 250 lines
2. **File Organization**: Use existing directories before creating new ones
3. **Type Safety**: Enable TypeScript strict mode, type all props and state
4. **Performance**: Use React.memo, useMemo, useCallback when needed
5. **Testing**: Test across different themes and screen sizes

## 📦 Key Dependencies

### Production
- `react` & `react-dom` (^19.1.1)
- `zustand` (^5.0.8) - State management
- `next-themes` (^0.4.6) - Theme switching
- `sonner` (^2.0.7) - Toast notifications
- `tailwindcss` (^4.1.12) - Styling
- `lucide-react` (^0.541.0) - Icons

### Development
- `vite` (^7.1.2) - Build tool
- `typescript` (~5.8.3) - Type checking
- `eslint` (^9.33.0) - Code linting
- `gh-pages` (^6.3.0) - Deployment

## 📄 License

MIT License - Use freely in personal and commercial projects.

---

**Ready to build something amazing? Start by removing the demo components and adding your own!** 🚀
