import React from 'react'
import { Palette, Check } from 'lucide-react'
import { useAppStore, ALL_THEMES, type Theme } from '../../stores/app-store'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { cn } from '../../lib/utils'

const THEME_LABELS: Record<Theme, string> = {
  light: 'Light',
  dark: 'Dark'
}

const THEME_COLORS: Record<Theme, string> = {
  light: 'bg-white border-gray-300',
  dark: 'bg-gray-900 border-gray-600'
}

export const ThemeSelector = () => {
  const { theme, setTheme, setRandomTheme } = useAppStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Palette size={16} />
          <span className="hidden sm:inline">{THEME_LABELS[theme]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-popover/95 backdrop-blur supports-[backdrop-filter]:bg-popover/60">
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {ALL_THEMES.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption}
            onClick={() => setTheme(themeOption)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className={cn(
              "w-4 h-4 rounded-full border-2",
              THEME_COLORS[themeOption]
            )} />
            <span className="flex-1">{THEME_LABELS[themeOption]}</span>
            {theme === themeOption && <Check size={16} className="text-primary" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={setRandomTheme}
          className="flex items-center gap-3 cursor-pointer text-muted-foreground"
        >
          <Palette size={16} />
          <span>Random Theme</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const CompactThemeSelector = () => {
  const { theme, setTheme } = useAppStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Palette size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-popover/95 backdrop-blur supports-[backdrop-filter]:bg-popover/60">
        <DropdownMenuLabel className="text-xs">Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {ALL_THEMES.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption}
            onClick={() => setTheme(themeOption)}
            className="flex items-center gap-2 cursor-pointer text-sm"
          >
            <div className={cn(
              "w-3 h-3 rounded-full border",
              THEME_COLORS[themeOption]
            )} />
            <span className="flex-1">{THEME_LABELS[themeOption]}</span>
            {theme === themeOption && <Check size={12} className="text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeSelector