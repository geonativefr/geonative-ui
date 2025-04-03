import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
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
    ...compat.config({
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'prettier'],
      rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'error',
      },
    }),
  },
  
  // Vue files configuration
  {
    files: ['**/*.vue'],
    ...compat.config({
      extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      plugins: ['vue', '@typescript-eslint', 'prettier'],
      rules: {
        'vue/multi-word-component-names': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'error',
      },
    }),
  },
  
  // JavaScript files configuration
  {
    files: ['**/*.{js,jsx,cjs,mjs}'],
    ...compat.config({
      extends: [
        'eslint:recommended',
        'prettier',
      ],
      plugins: ['prettier'],
      rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'error',
      },
    }),
  },
];

export default config;

