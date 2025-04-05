import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // ✅ Correct base for Render static hosting
  plugins: [react()],
});
