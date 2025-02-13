import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'electron-vite/plugin';

export default defineConfig({
  plugins: [
    react(),
    electron({
      preload: {
        input: 'src/preload/index.ts'
      }
    })
  ],
  root: 'src/renderer'
});
