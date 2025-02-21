// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'electron-vite/plugin';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    electron({
      preload: {
        // プリロードスクリプトの絶対パスを指定
        input: resolve(__dirname, 'src/preload/index.ts')
      },
      renderer: {
        // レンダラのエントリーポイントを絶対パスで指定
        input: resolve(__dirname, 'src/app/index.html')
      }
    })
  ],
  // Vite のルートディレクトリを src/app に変更
  root: resolve(__dirname, 'src/app'),
  build: {
    rollupOptions: {
      // ビルド時も絶対パスで renderer の入力ファイルを指定
      input: resolve(__dirname, 'src/app/index.html')
    }
  },
  server: {
    port: 5173
  }
});
