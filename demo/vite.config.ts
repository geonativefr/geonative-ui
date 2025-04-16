import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// Add this to avoid TypeScript errors when importing tailwindcss plugin
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [vue(), tailwindcss()], // Added tailwindcss plugin
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@ui': resolve(__dirname, '../src'),
    },
  },
  root: './demo',
  build: {
    outDir: resolve(__dirname, '../demo-dist'),
  },
});
