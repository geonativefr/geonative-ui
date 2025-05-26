# geonative-ui

Shadcn based components library and Tailwind CSS V4

## Section

- [Sidebar](#sidebar)

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- yarn

### Documentation

- [Vue 3 with Composition API](https://vuejs.org/guide/introduction)
- [TypeScript](https://www.typescriptlang.org/)
- [VueJS + Vite](https://vitejs.dev/guide/)
- [Shadcn Vue](https://www.shadcn-vue.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)

### Installation

```bash
yarn install
```

### Running the Demo

To start the demo development server:

```bash
yarn dev:demo
```

### Building the Demo

To build the demo for production:

```bash
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
  meta: {
    menuLabel: 'Your Component',
  },
});
```

## Path Aliases

The demo uses the following path aliases:

- `@geonative/ui/*` - Points to the main `/src` directory (component library)
- `@/*` - Points to the `/demo/src` directory (demo application or your project using the library)

Example:

```typescript
// Import from the component library
import { Button } from '@geonative/ui';

// Import from the demo application
import DemoLayout from '@/components/DemoLayout.vue';
```

## Theme Management

The library includes a theme management system with built-in support for multiple themes and color modes (light/dark). The theme system is integrated with Tailwind CSS and uses CSS variables to apply theme settings.

### Theme Composable

The `useTheme` composable provides functionality to manage themes:

```typescript
import { useTheme } from '@geonative/ui/composables';

// Get theme state and functions
const {
  currentTheme, // Current selected theme name (reactive)
  currentThemeMode, // Current theme mode (light/dark) (reactive)
  selectedThemeMode, // User selected theme mode (light/dark/system) (reactive)
  availableThemes, // List of available themes (reactive)
  initializeThemes, // Initialize themes with configuration
  applyTheme, // Apply a theme by name
  setThemeMode, // Set theme mode (light/dark/system)
  resetTheme, // Reset to default theme
  getThemeConfig, // Get theme configuration
} = useTheme();
```

### Initializing Themes

Initialize themes in your main app component:

```typescript
import { useTheme } from '@geonative/ui/composables';
import initialThemes from '@/assets/themes/themes.json';
import type { ThemesData } from '@geonative/ui/types';

// Import the useTheme composable
const { initializeThemes } = useTheme();

// Initialize themes with the data from the JSON file
initializeThemes(initialThemes as ThemesData);
```

### Theme Components

The library provides ready-to-use components for theme switching:

- `ThemeSwitcher` - Dropdown to select a theme
- `ThemeModeSwitcher` - Toggle between light/dark/system modes
- `Theme` - Link to apply a specific theme

```vue
<template>
  <ThemeSwitcher />
  <ThemeModeSwitcher />
  <Theme name="blue" />
</template>

<script setup lang="ts">
import { ThemeSwitcher, ThemeModeSwitcher, Theme } from '@geonative/ui/components';
</script>
```

### Theme Structure

Theme configurations are organized as follows:

```typescript
interface ThemesData {
  [themeName: string]: {
    light: ThemeConfig;
    dark: ThemeConfig;
  };
}

interface ThemeConfig {
  background: string; // Background color for the theme
  foreground: string; // Foreground color for text
  primary: string; // Primary background color
  'primary-foreground': string; // Primary foreground color
  secondary?: string; // Secondary background color
  'secondary-foreground'?: string; // Secondary foreground color
  card?: string; // Card background color
  'card-foreground'?: string; // Card foreground color
  popover?: string; // Popover background color
  'popover-foreground'?: string; // Popover foreground color
  muted?: string; // Muted background color
  'muted-foreground'?: string; // Muted foreground color
  accent?: string; // Accent background color
  'accent-foreground'?: string; // Accent color foreground
  destructive?: string; // Destructive action color background
  'destructive-foreground'?: string; // Destructive action color foreground
  border?: string; // Border color
  input?: string; // Input field background color
  ring?: string; // Ring color
  radius?: string; // Border radius
  [key: string]: string | undefined; // Allow additional custom properties
}
```

## Icon System

The library provides a versatile icon system supporting multiple icon sources :

- SVG icons (from src/assets/icons directory of library and src/assets/icons directory of your project)
- [Lucide icons](https://lucide.dev/)
- [Heroicons](https://heroicons.com/)

### Icon Component

The `Icon` component allows you to use different icon types:

```vue
<template>
  <Icon name="user" source="heroicons" type="solid" class="size-5 text-blue-500" />
</template>

<script setup lang="ts">
import { Icon } from '@geonative/ui/components';
</script>
```

### Supported Icon Sources

The Icon component supports the following sources:

- **svg**: Custom SVG icons from assets directory

  ```vue
  <Icon name="antenna" source="svg" class="size-5 text-blue-500" />
  ```

- **lucide**: Icons from Lucide icon library

  ```vue
  <Icon name="AlertCircle" source="lucide" class="size-5 text-red-500" />
  ```

- **heroicons**: Icons from Heroicons (with `type` support: "solid" or "outline")

  ```vue
  <Icon name="bell" source="heroicons" type="solid" class="size-5 text-yellow-500" />
  <Icon name="bell" source="heroicons" type="outline" class="size-5 text-green-500" />
  ```

- **avatar**: Avatar component as an icon
  ```vue
  <Icon
    name="user"
    source="avatar"
    :avatar-props="{
      url: user.avatar,
      initials: user.name.slice(0, 2),
      class: 'bg-red-500',
    }"
  />
  ```

### File Naming Conventions

For SVG icons, the name parameter corresponds to the file path in the assets directory:

- Simple name: `antenna` -> `assets/icons/antenna.svg`
- Path with underscore: `battery_batt-level-2` -> `assets/icons/battery/batt-level-2.svg`
- Path with multiple levels: `alert_actions_push-notification` -> `assets/icons/alert/actions/push-notification.svg`

## Action Component

The Action component provides a unified way to handle different types of actions like URLs, internal routes, or function calls.

### Basic Usage

```vue
<template>
  <Action action-click="/about">
    <span>Go to About</span>
  </Action>
</template>

<script setup lang="ts">
import { Action } from '@geonative/ui/components';
</script>
```

### Action Types

The `actionClick` prop accepts different types of values:

- **Internal route**: String that doesn't start with `http://` or `https://`

  ```vue
  <Action action-click="/dashboard">Internal Link</Action>
  ```

- **External URL**: String starting with `http://` or `https://`

  ```vue
  <Action action-click="https://github.com">External Link</Action>
  ```

- **Function**: Callback function to execute
  ```vue
  <Action :action-click="() => alert('Action triggered!')">
    <Button>Click Me</Button>
  </Action>
  ```

### Combining with Other Components

Action is designed to wrap other components:

```vue
<Action action-click="/profile">
  <Button>Go to Profile</Button>
</Action>

<Action action-click="https://github.com" class="flex gap-1">
  <span>GitHub</span>
  <Icon name="arrow-top-right-on-square" source="heroicons" type="solid" class="size-4" />
</Action>
```

## Sidebar

The Sidebar component provides a collapsible sidebar layout with support for multiple sections and items.

Includes `Sidebar`, `SidebarNav`, `SidebarGroup`, `SidebarInset`, `SidebarTrigger`, and `SidebarProvider` for building a flexible navigation sidebar.

### Basic Usage

```vue
<template>
  <SidebarProvider>
    <Sidebar>
      <template #header>
        <span>Header</span>
      </template>

      <SidebarNav />

      <template #footer>
        <span>Footer</span>
      </template>
    </Sidebar>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider, Sidebar, SidebarNav } from '@geonative/ui/components';
</script>
```

### Sidebar Props

| Prop          | Type                                     | Default       | Description                                   |
| ------------- | ---------------------------------------- | ------------- | --------------------------------------------- |
| `side`        | `'left'` \| `'right'`                    | `'left'`      | Which side of the screen the sidebar appears. |
| `variant`     | `'sidebar'` \| `'floating'` \| `'inset'` | `'sidebar'`   | Display style of the sidebar.                 |
| `collapsible` | `'offcanvas'` \| `'icon'` \| `'none'`    | `'offcanvas'` | Collapse behavior for responsiveness.         |
| `class`       | `string`                                 | —             | Additional Tailwind classes for styling.      |

### Sidebar Slots

| Slot      | Description                     |
| --------- | ------------------------------- |
| `header`  | Slot for custom header content. |
| `default` | Slot for main sidebar content.  |
| `footer`  | Slot for custom footer content. |
