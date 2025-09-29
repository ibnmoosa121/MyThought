import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: process.env.NODE_ENV === 'production'
    ? process.env.DEPLOY_TARGET === 'daisyui'
      ? '/AIStarterTemplate/daisyui/'
      : '/AIStarterTemplate/'
    : '/'
})
