import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { vitestPlugin } from 'vitest/vite'

export default defineConfig({
  plugins: [
    react(),
    vitestPlugin(),
  ],
})
