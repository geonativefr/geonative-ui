import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import vueeslint from 'eslint-plugin-vue';
import prettiereslint from 'eslint-plugin-prettier';
import vueParser from 'vue-eslint-parser';
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

  // Node environment for all files
  {
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        require: 'readonly',
      },
    },
  },

  // Ignore patterns (replaces .eslintignore)
  {
    ignores: ['dist/**', 'node_modules/**', '.prettierrc.json', 'sc'],
  },

  // TypeScript files configuration
  {
    files: ['**/*.{ts,tsx,cts,mts}'],
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettiereslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-console': 'off', // Use explicit off instead of environment variable
      'no-debugger': 'off', // Use explicit off instead of environment variable
      'prettier/prettier': 'error',
      '@typescript-eslint/no-require-imports': 'off', // Disable no-require-imports rule
    },
  },

  // Vue files configuration
  {
    files: ['**/*.vue'],
    plugins: {
      vue: vueeslint,
      '@typescript-eslint': tseslint,
      prettier: prettiereslint,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
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
      'vue/comment-directive': 'off', // Disable comment directive rule
      'no-console': 'off', // Use explicit off instead of environment variable
      'no-debugger': 'off', // Use explicit off instead of environment variable
      'prettier/prettier': 'error',
    },
  },

  // JavaScript files configuration
  {
    files: ['**/*.{js,jsx,cjs,mjs}'],
    plugins: {
      prettier: prettiereslint,
    },
    rules: {
      'no-console': 'off', // Use explicit off instead of environment variable
      'no-debugger': 'off', // Use explicit off instead of environment variable
      'prettier/prettier': 'error',
    },
  },
];

export default config;
