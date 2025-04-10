import { createTailwindcss } from 'tailwindcss'

// Configuration pour Vue.js
export const tailwind = createTailwindcss({
  mode : 'jit',
  content : [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './demo/src/**/*.{html,js,jsx,ts,tsx}',
    './storybook/src/**/*.{html,js,jsx,ts,tsx}',
  ],
  safelist: [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-yellow-500',
  ],
})

// Exportez la configuration pour l'utiliser dans vite.config.js ou vue.config.js
export default tailwind
