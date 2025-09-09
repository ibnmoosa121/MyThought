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
      richColors={true}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { toast }
export { ToastProvider }
export type { CustomToasterProps as ToasterProps }