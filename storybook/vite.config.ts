import { StorybookConfig } from '@storybook/vue3-vite';
import { resolve } from 'path';
// Add this to avoid TypeScript errors when importing tailwindcss plugin
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

// This is a Vite configuration file for Storybook.
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    // Add path aliases
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(__dirname, '../', '../src'),
        '@storybook': resolve(__dirname, '../src'),
      };
    }
    // Add tailwindcss plugin
    if (config.plugins) {
      const tailwindPlugin = config.plugins.find(plugin => plugin.name === 'tailwindcss');
      if (!tailwindPlugin) {
        config.plugins.push(tailwindcss());
      }
    }
    // Root directory
    config.root = resolve(__dirname, '../storybook');
    config.build = {
      outDir: resolve(__dirname, '../storybook-dist'),
    }
    return config;
  },
};

export default config;