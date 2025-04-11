import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // ✅ Correct for Render or any static web host
  plugins: [react()],
})
