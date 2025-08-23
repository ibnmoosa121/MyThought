import React from 'react'
import { ChevronDown, Palette } from 'lucide-react'
import { useAppStore, type DaisyTheme, ALL_THEMES } from '../../stores/app-store'

// Theme categories for better organization
const THEME_CATEGORIES = {
  light: {
    label: '🌅 Light Themes',
    themes: ['light', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'garden', 'lofi', 'pastel', 'fantasy', 'wireframe', 'cmyk', 'autumn', 'acid', 'lemonade', 'winter']
  },
  dark: {
    label: '🌙 Dark Themes',
    themes: ['dark', 'synthwave', 'halloween', 'forest', 'black', 'luxury', 'dracula', 'business', 'night', 'coffee', 'dim', 'nord', 'sunset']
  },
  colorful: {
    label: '🎨 Colorful Themes',
    themes: ['retro', 'cyberpunk', 'valentine', 'aqua']
  }
} as const



// Theme preview component
const ThemePreview = ({ theme }: { theme: DaisyTheme }) => {
  return (
    <div className="flex items-center gap-1 min-w-0">
      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
      <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
    </div>
  )
}

// Desktop theme selector dropdown
export const ThemeSelector = () => {
  const { theme, setTheme } = useAppStore()
  
  const handleThemeChange = (newTheme: DaisyTheme) => {
    setTheme(newTheme)
    // Close dropdown by removing focus
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }
  
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost gap-2 normal-case"
      >
        <Palette size={18} />
        <span className="hidden sm:inline capitalize">{theme}</span>
        <ChevronDown size={16} />
      </div>
      
      <div
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow-lg bg-base-100 rounded-box w-64 max-h-80 overflow-y-auto"
      >
        {Object.entries(THEME_CATEGORIES).map(([categoryKey, category]) => (
          <div key={categoryKey} className="mb-3 last:mb-0">
            <div className="text-xs font-semibold opacity-60 px-2 py-1 mb-1">
              {category.label}
            </div>
            <div className="space-y-1">
              {category.themes.map((themeOption) => (
                <button
                  key={themeOption}
                  className={`btn btn-sm w-full justify-start normal-case ${
                    theme === themeOption ? 'btn-primary' : 'btn-ghost'
                  }`}
                  onClick={() => handleThemeChange(themeOption)}
                  data-theme={themeOption}
                >
                  <ThemePreview theme={themeOption} />
                  <span className="capitalize ml-2">{themeOption}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Mobile theme selector (simplified)
export const MobileThemeSelector = () => {
  const { theme, setTheme } = useAppStore()
  
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text flex items-center gap-2">
          <Palette size={16} />
          Theme
        </span>
      </label>
      <select
        className="select select-bordered w-full"
        value={theme}
        onChange={(e) => setTheme(e.target.value as DaisyTheme)}
      >
        {Object.entries(THEME_CATEGORIES).map(([categoryKey, category]) => (
          <optgroup key={categoryKey} label={category.label}>
            {category.themes.map((themeOption) => (
              <option key={themeOption} value={themeOption}>
                {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  )
}

// Compact theme switcher for header
export const CompactThemeSelector = () => {
  const { theme, setTheme, setRandomTheme } = useAppStore()
  
  const handleQuickSwitch = () => {
    setRandomTheme()
  }
  
  const handleThemeChange = (newTheme: DaisyTheme) => {
    setTheme(newTheme)
    // Close dropdown by removing focus
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }
  
  return (
    <div className="flex items-center gap-1">
      {/* Quick switch button */}
      <button
        className="btn btn-ghost btn-circle btn-sm"
        onClick={handleQuickSwitch}
        title={`Current: ${theme} - Click to switch to random theme`}
      >
        <Palette size={16} />
      </button>
      
      {/* Full selector dropdown */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-sm"
        >
          <ChevronDown size={14} />
        </div>
        
        <div
          tabIndex={0}
          className="dropdown-content z-[1] p-2 shadow-lg bg-base-100 rounded-box w-64 max-h-80 overflow-y-auto"
        >
          {Object.entries(THEME_CATEGORIES).map(([categoryKey, category]) => (
            <div key={categoryKey} className="mb-3 last:mb-0">
              <div className="text-xs font-semibold opacity-60 px-2 py-1 mb-1">
                {category.label}
              </div>
              <div className="space-y-1">
                {category.themes.map((themeOption) => (
                  <button
                    key={themeOption}
                    className={`btn btn-sm w-full justify-start normal-case ${
                      theme === themeOption ? 'btn-primary' : 'btn-ghost'
                    }`}
                    onClick={() => handleThemeChange(themeOption)}
                    data-theme={themeOption}
                  >
                    <ThemePreview theme={themeOption} />
                    <span className="capitalize ml-2">{themeOption}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ThemeSelector