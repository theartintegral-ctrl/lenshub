import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Use a relative base so built assets work when opened via file://
  base: './',
  plugins: [react()],
});
