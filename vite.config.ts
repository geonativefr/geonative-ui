import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/geonative-ui/',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ui',
    },
    sourcemap: true,
    cssCodeSplit: true,
  },
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      outDir: path.resolve(__dirname, 'dist/types/'),
      include: [path.resolve(__dirname, 'src/')],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@geonative/ui': path.resolve(__dirname, 'src/'),
    },
  },
});
