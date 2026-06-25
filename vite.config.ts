import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), 
    react(),
    visualizer({
      filename: 'stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Updated base path for GitHub Pages under the 'MyThought' repository
  // For Vercel, we use root path '/'
  base: process.env.VERCEL 
    ? '/' 
    : process.env.NODE_ENV === 'production'
      ? process.env.DEPLOY_TARGET === 'daisyui'
        ? '/MyThought/daisyui/'
        : '/MyThought/'
      : '/',
  build: {
    chunkSizeWarningLimit: 2500,
  }
})
