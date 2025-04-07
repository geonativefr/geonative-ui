import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@demo': resolve(__dirname, './src')
    }
  },
  root: './demo',
  build: {
    outDir: resolve(__dirname, '../demo-dist')
  }
});