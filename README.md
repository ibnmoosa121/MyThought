# Vibe Coding & AI-Powered React + DaisyUI Starter Template

Kickstart your projects with this agentic, coding-friendly React starter kit. Powered by TypeScript, Vite, DaisyUI, and Zustand, it’s built for AI coding workflows, vibe coding projects, and a smooth modern developer experience.

## 🚀 Tech Stack

- **React 19.1+** with TypeScript 5.9+
- **Vite 7.1+** - Lightning-fast development and build
- **Tailwind CSS 4.1+** - Utility-first styling
- **DaisyUI 5.0+** - Beautiful, semantic component library with 30+ themes
- **Zustand 5.0+** - Lightweight state management
- **Lucide React** - Consistent icon library
- **ESLint 9.33+** - Code quality and consistency

## ✨ Features

- 🎨 **30+ DaisyUI Themes** with persistent preferences
- 🔔 **Toast Notifications** with auto-removal system
- 📱 **Fully Responsive** mobile-first design
- 🧩 **Component Library** with DaisyUI integration
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
   cd template-1-daisyui
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
│   ├── ui/             # DaisyUI wrapper components
│   ├── layout/         # Header, navigation, layout components
│   ├── features/       # Feature-specific components (remove demos)
│   └── common/         # Reusable shared components
├── stores/             # Zustand state management
├── assets/             # Static assets
├── constants/          # App constants (ready to use)
├── hooks/              # Custom React hooks (ready to use)
├── pages/              # Page components (ready to use)
├── services/           # API services (ready to use)
├── types/              # TypeScript definitions (ready to use)
├── utils/              # Additional utilities (ready to use)
├── app.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles with Tailwind directives
```

## 🎯 Before Starting Your Project

### Files to Remove/Modify
1. **Demo Components** (in `/src/components/features/`):
   - `interactive-counter.tsx`
   - Any other demo feature components

2. **Demo State** (in `/src/stores/app-store.ts`):
   - Remove counter logic and demo functionality
   - Keep theme and notification management

3. **Update Configuration**:
   - `package.json` - Change name, version, description
   - `vite.config.ts` - Update base path for your deployment
   - `README.md` - Replace with your project documentation

### Core Files to Keep
- All `/src/components/ui/` components (DaisyUI wrappers)
- `/src/components/layout/` components (customize as needed)
- `/src/components/common/` notification components
- Theme system and CSS variables in `index.css`
- Zustand store structure (remove demo logic only)

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
- **Process**: `predeploy` → `npm run build` → `gh-pages -d dist`
- **Environment**: No `DEPLOY_TARGET` set
- **Base Path**: `/AIStarterTemplate/`
- **Result**: `https://yourusername.github.io/repositoryname/`

#### Option 2: Deploy to DaisyUI Subfolder
```bash
npm run deploy:daisyui
```
- **Process**: `predeploy:daisyui` → `npm run build:daisyui` → `gh-pages -d dist -e daisyui`
- **Environment**: `DEPLOY_TARGET=daisyui`
- **Base Path**: `/AIStarterTemplate/daisyui/`
- **Result**: `https://yourusername.github.io/repositoryname/daisyui/`

### Configuration

**For your own deployment**, update `vite.config.ts`:

```typescript
// For root deployment
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/'

// For custom subfolder
base: process.env.NODE_ENV === 'production' 
  ? process.env.DEPLOY_TARGET === 'daisyui' 
    ? '/your-repo-name/daisyui/'
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
- `npm run deploy:daisyui` - Deploy to GitHub Pages (subfolder)
- `npm run build:daisyui` - Build with DaisyUI target environment

## 🧩 Key Components

### Theme System
```tsx
import { useAppStore } from './stores/app-store'

function ThemeSelector() {
  const { theme, setTheme } = useAppStore()
  return (
    <select 
      data-choose-theme 
      value={theme} 
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="cupcake">Cupcake</option>
      {/* 30+ DaisyUI themes available */}
    </select>
  )
}
```

### State Management
```tsx
import { useAppStore } from './stores/app-store'

function MyComponent() {
  const { theme, setTheme, addNotification } = useAppStore()
  
  const handleAction = () => {
    addNotification({
      type: 'success',
      title: 'Success!',
      message: 'Operation completed',
      duration: 3000
    })
  }
}
```

### Toast Notifications
```tsx
import { useAppStore } from './stores/app-store'

const { addNotification } = useAppStore()

// Simple notification
addNotification({
  type: 'success',
  title: 'Success!',
  message: 'Operation completed successfully'
})

// Notification with custom duration
addNotification({
  type: 'error',
  title: 'Error',
  message: 'Something went wrong',
  duration: 5000
})
```

## 🎨 Styling Guidelines

- **Use DaisyUI components** first, then Tailwind utilities
- **Semantic colors**: Use `primary`, `secondary`, `accent`, `neutral` instead of hardcoded colors
- **Theme switching**: Apply `data-theme` attribute for theme-aware styling
- **Responsive design**: Use DaisyUI responsive modifiers (`sm:`, `md:`, `lg:`)
- **Component variants**: Prefer DaisyUI component variants over custom classes
- **Follow mobile-first** responsive design with Tailwind breakpoints

### DaisyUI Component Examples
```tsx
// Buttons with semantic colors
<button className="btn btn-primary">Primary</button>
<button className="btn btn-secondary">Secondary</button>

// Cards with theme-aware styling
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content</p>
  </div>
</div>

// Form elements
<input className="input input-bordered w-full" placeholder="Enter text" />
<select className="select select-bordered w-full">
  <option>Choose option</option>
</select>
```

## 🔧 Development Tips

1. **Component Limits**: Keep components under 500 lines, utilities under 250 lines
2. **File Organization**: Use existing directories before creating new ones
3. **Type Safety**: Enable TypeScript strict mode, type all props and state
4. **Performance**: Use React.memo, useMemo, useCallback when needed
5. **Testing**: Test across different DaisyUI themes and screen sizes
6. **DaisyUI First**: Check DaisyUI component library before building custom components

## 📦 Key Dependencies

### Production
- `react` & `react-dom` (^19.1.1)
- `zustand` (^5.0.8) - State management
- `daisyui` (^5.0.50) - Component library with themes
- `tailwindcss` (^4.1.12) - Styling framework
- `lucide-react` (^0.541.0) - Icon library
- `clsx` (^2.1.1) - Conditional classes
- `tailwind-merge` (^3.3.1) - Class conflict resolution

### Development
- `vite` (^7.1.2) - Build tool
- `typescript` (^5.9.2) - Type checking
- `eslint` (^9.33.0) - Code linting
- `gh-pages` (^6.3.0) - Deployment
- `cross-env` (^10.0.0) - Environment variables

## 📄 License

MIT License - Use freely in personal and commercial projects.

---

**Ready to build something amazing? Start by removing the demo components and adding your own!** 🚀
