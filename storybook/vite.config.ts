import path from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
// Add this to avoid TypeScript errors when importing tailwindcss plugin
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../storybook-dist'),
  },
  root: path.resolve(__dirname, '.'),
});