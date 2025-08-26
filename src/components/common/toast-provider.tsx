"use client"

import { useTheme } from "next-themes"
import { Toaster as SonnerToaster, toast } from "sonner"
import type { ComponentProps } from "react"

type ToasterProps = ComponentProps<typeof SonnerToaster>

interface CustomToasterProps extends Omit<ToasterProps, 'theme'> {
  theme?: ToasterProps['theme']
}

const ToastProvider = ({ ...props }: CustomToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <SonnerToaster
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg transition-smooth hover:shadow-xl",
          description: "group-[.toast]:text-muted-foreground transition-smooth",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground transition-smooth hover:scale-105 active:scale-95",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground transition-smooth hover:bg-muted/80",
        },
      }}
      {...props}
    />
  )
}

// Re-export toast functions for easy usage
export { toast }
export { ToastProvider }
export type { CustomToasterProps as ToasterProps }