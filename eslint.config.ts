import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from '@typescript-eslint/eslint-plugin';
import vueeslint from 'eslint-plugin-vue';
import prettiereslint from 'eslint-plugin-prettier';
import type { Linter } from 'eslint';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize FlatCompat for using traditional eslint configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

// Use compat to load vue3-recommended config
const vue3RecommendedConfig = compat.config(vueeslint.configs['vue3-recommended']);

const config: Linter.FlatConfig[] = [
  // Base JS recommended rules
  js.configs.recommended,
  
  // Ignore patterns (replaces .eslintignore)
  {
    ignores: ['dist/**', 'node_modules/**', '.prettierrc.json'],
  },
  
  // TypeScript files configuration
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    plugins: {
      '@typescript-eslint': tseslint,
      'prettier': prettiereslint
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'prettier/prettier': 'error',
    },
  },
  
  // Vue files configuration
  {
    files: ['**/*.vue'],
    plugins: {
      'vue': vueeslint,
      '@typescript-eslint': tseslint,
      'prettier': prettiereslint
    },
    languageOptions: {
      parser: vueeslint.parser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    // Use the flattened vue3-recommended config rules
    ...vue3RecommendedConfig[0],
    rules: {
      // Base Vue rules
      ...vueeslint.configs.base.rules,
      // Add TypeScript recommended rules
      ...tseslint.configs.recommended.rules,
      // Custom rules
      'vue/multi-word-component-names': 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'prettier/prettier': 'error',
    },
  },
  
  // JavaScript files configuration
  {
    files: ['**/*.{js,jsx,cjs,mjs}'],
    plugins: {
      'prettier': prettiereslint
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'prettier/prettier': 'error',
    },
  },
];

export default config;
