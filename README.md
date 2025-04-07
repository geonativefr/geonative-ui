# geonative-ui

Shadcn based components library and Tailwind CSS V4

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm or yarn

### Documentation

- [Vue 3 with Composition API](https://vuejs.org/guide/introduction)
- [TypeScript](https://www.typescriptlang.org/)
- [VueJS + Vite](???)
- [Shadcn Vue](https://www.shadcn-vue.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)

### Installation

```bash
# Install dependencies from the root directory
npm install
# OR
yarn install
```

### Running the Demo

To start the demo development server:

```bash
npm run dev:demo
# OR
yarn dev:demo
```

### Building the Demo

To build the demo for production:

```bash
npm run build:demo
# OR
yarn build:demo
```

The built files will be in the `demo-dist` directory.

## Adding New Component Demos

To add a new component demo:

1. Create a new Vue file in the `demo/src/views` directory
2. Add the component to the routes in `demo/src/routes.ts`

Example route entry:

```typescript
createRoute({
  path: '/your-component',
  name: 'your-component',
  component: () => import('./views/YourComponent.vue'),
  menuLabel: 'Your Component',
})
```

## Path Aliases

The demo uses the following path aliases:

- `@/*` - Points to the main `/src` directory (component library)
- `@demo/*` - Points to the `/demo/src` directory (demo application)

Example:

```typescript
// Import from the component library
import { Button } from '@/components/ui';

// Import from the demo application
import DemoLayout from '@demo/components/DemoLayout.vue';
```

## Information

### CSS Variations

- Text Primary
- Background Primary
- Text Secondary
- Background Secondary
- `dark:` variants

## Components list

- Layout Pre-Auth
- Layout Auth
  - Sidebar
  - Breadcrumb
- Sidebar
  - NavUser
  - AccountSwitcher
  - Navigation (slot)
  - Version number
- Breadcrumb
- Navigation (inline + list)
- Command Palette
- DataTable
- Card List
- Pagination
- Dropdown Menu
- Dialog (Modal) (Simple/Validation/Confirmation)
- Drawer (up/down/right/left)
- Accordion
- Button
- Toast (Vue Sonner)
- Flash Message
- Form
  - Input (text, number)
  - Select
  - Combobox (mono/multi)
  - Datepicker / Datepicker range
  - ColorPicker
  - Textarea + Optionnal(WYSIWYG + Markdown)
  - Checkbox
  - Radio
  - Toggle
- Loader
- Tooltip
- Avatar
