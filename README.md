# geonative-ui

Shadcn based components library and Tailwind CSS V4

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
  <Action actionClick="/about">
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
  <Action actionClick="/dashboard">Internal Link</Action>
  ```

- **External URL**: String starting with `http://` or `https://`

  ```vue
  <Action actionClick="https://github.com">External Link</Action>
  ```

- **Function**: Callback function to execute
  ```vue
  <Action :actionClick="() => alert('Action triggered!')">
    <Button>Click Me</Button>
  </Action>
  ```

### Combining with Other Components

Action is designed to wrap other components:

```vue
<Action actionClick="/profile">
  <Button>Go to Profile</Button>
</Action>

<Action actionClick="https://github.com" class="flex gap-1">
  <span>GitHub</span>
  <Icon name="arrow-top-right-on-square" source="heroicons" type="solid" class="size-4" />
</Action>
```

## Button Component

Styled **Button** component with support for loading and disabled states.

### Basic Usage

```vue
<template>
  <Button :loading="isClickedButton" @click="handleClick">Default</Button>
  <Button class="bg-blue-500" :loading="isClickedButton" @click="handleClick">Button</Button>
  <Button class="bg-green-500" size="lg">Button LG</Button>
  <Button class="bg-red-500" size="sm">Button SM</Button>
  <Button class="bg-green-500" :loading="isClickedButton" @click="handleClick">
    <Icon name="bell" source="heroicons" />
  </Button>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Button, Icon } from '@geonative/ui/components';

  const isLoading = ref(false);

  function handleClick() {
    isLoading.value = true;
    setTimeout(() => (isLoading.value = false), 3000);
  }
</script>
```

### Button Props

| Prop          | Type                    | Default | Description                   |
|---------------|-------------------------|---------|-------------------------------|
| `size`        | `'sm' \| 'md' \| 'lg'`  | `'md'`  | Defines the button size       |
| `class`       | `string`                | `''`    | Additional CSS classes        |
| `disabled`    | `boolean`               | `false` | Disables the button           |
| `loading`     | `boolean`               | `false` | Shows a loading spinner       |
| `loadingText` | `string`                | `''`    | Text displayed when loading   |
| `fullWidth`   | `boolean`               | `false` | Makes the button full width   |

### About Button

- Disabled when `disabled` or `loading` is true.
- Width adapts to content or spinner size.
- Hover opacity is automatically set based on background color.

## Accordion Component

The Accordion component provides a collapsible content area with multiple sections.

### Basic Usage

```vue
<template>
  <Accordion>
    <AccordionItem value="item-1">
      <template #title>
        <span>Accordion 1</span>
      </template>
      <p>Content 1</p>
    </AccordionItem>

    <AccordionItem value="item-2">
      <template #title>
        <Icon name="antenna" source="svg" class="size-7 fill-blue-500" />
      </template>
      <span>This is an antenna icon</span>
    </AccordionItem>

    <AccordionItem value="item-3">
      <template #title>
        <span>Click to show a Button</span>
      </template>
      <Button class="bg-green-500">Button</Button>
    </AccordionItem>
  </Accordion>
</template>

<script setup lang="ts">
import { Accordion, AccordionItem, Icon, Button } from '@geonative/ui/components';
</script>
```

### Example with Collapsible and Multiple

```vue
<Accordion :collapsible="true" :multiple="true">
  <AccordionItem value="item-1">
    <template #title><span>Accordion 1</span></template>
    <p>Content 1</p>
  </AccordionItem>
</Accordion>
```


### Accordion Props

| Prop         | Type      | Default | Description                                 |
|--------------|-----------|---------|---------------------------------------------|
| `multiple`   | boolean   | false   | Allows multiple accordion items to be open simultaneously. |
| `collapsible`| boolean   | false   | Allows all accordion items to be collapsed (no item opened). |

### AccordionItem Props

| Prop  | Type   | Required | Description                   |
|-------|--------|----------|-------------------------------|
| `value` | string | yes      | Unique identifier for the accordion item. Used to control open/close state. |

### About Accordion 

- Requires a unique `value prop
- Use `#title` slot to define the clickable header content
- Default slot contains the collapsible content

## Avatar Component

The Avatar component displays a user avatar image, with fallback initials and optional square style.

### Basic Usage

```vue
<template>
  <div>
    <p>Not square:</p>
    <Avatar :url="avatar_url" />

    <p>Square:</p>
    <Avatar :url="avatar_url" :is-square="true" class="bg-red-500" />

    <p>Without avatar image:</p>
    <Avatar class="bg-pink-500" />

    <p>Without avatar image, with initials:</p>
    <Avatar :initials="'ab'" class="bg-black text-pink-500" />
  </div>
</template>

<script setup lang="ts">
import { Avatar } from '@geonative/ui/components';

const avatar_url =
  'https://avatars.example';
</script>
```

### Avatar Props

| Prop        | Type      | Default | Description                   |
|-------------|-----------|---------|-------------------------------|
| `url`       | string    | `''`    | URL of the avatar image       |
| `initials`  | string    | `'?'`   | Initials to display if no image is provided |
| `isSquare`  | boolean   | `false` | If true, the avatar will be square (default is circular) |
| `class`     | string    | `''`    | Additional CSS classes        |

### About Avatar

- If `url` is missing or invalid, the component displays the initials as fallback.
- `initials` are limited to 2 characters and converted to uppercase.
- The size of the initials adjusts based on sizing classes (`size-`, `w-`, `h-`) applied via `class`.
- Use `isSquare` prop to toggle between rounded and square avatar shapes.

## Breadcrumb Component

The Breadcrumb component displays a navigational trail for hierarchical pages. It supports links, plain text items, and disabled states.

### Basic Usage

```vue
<template>
  <Breadcrumb :breadcrumb="breadcrumb" />
</template>

<script setup lang="ts">
import { Breadcrumb } from '@geonative/ui/components';
import type { BreadcrumbType, BreadcrumbItemType } from '@geonative/ui/types';

const breadcrumb: BreadcrumbType = {
  items: [
    { title: 'Home', link: '/' },
    { title: 'About' },
    { title: 'Avatar', link: '/avatar' },
    { title: 'Mail', link: '/mail', disabled: true },
    { title: 'Dropdown Menu', link: '/dropdown-menu' },
    { title: 'More' },
    { title: 'Breadcrumb', link: '/breadcrumb' },
  ] as BreadcrumbItemType[],
  separator: '>',
};
</script>
```

### Breadcrumb Props

| Prop         | Type             | Required | Default | Description                                    |
| ------------ | ---------------- | -------- | ------- | ---------------------------------------------- |
| `breadcrumb` | `BreadcrumbType` | yes      | —       | Breadcrumb data including items and separator. |

### BreadcrumbItemType

```typescript
type BreadcrumbItemType = {
  title: string;
  link?: string;
  disabled?: boolean;
};

type BreadcrumbType = {
  items: BreadcrumbItemType[];
  separator?: string;
};
```

### About Breadcrumb

- Supports links and plain text:
  - If link is provided and disabled is not true, it renders as a clickable link.
  - If link is missing or disabled is true, it renders as plain text.
- Current page: Last item in the list is considered the current page and not rendered as a link.
- Custom separator: You can define a custom separator (default is >).
- Add disabled: true to an item to disable navigation even if a link is present.

## DropdownMenu Component

The `DropdownMenu` component displays a hierarchical dropdown navigation menu with support for sections, nested submenus, icons, shortcuts, and disabled states.

### Basic Usage

```vue
<template>
  <DropdownMenu :dropdown="dropdownMenu">
    <template #header>
      <p class="font-semibold text-center">{{ dropdownMenu.label }}</p>
    </template>
    <Button class="text-blue-500 bg-blue-100 rounded-full">Menu 1</Button>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { DropdownMenu, Button } from '@geonative/ui/components';
import type { DropdownMenuType } from '@geonative/ui/types';

const dropdownMenu: DropdownMenuType = {
  label: 'Menu Label',
  sections: [
    [
      {
        label: 'Team',
        clickAction: '/team',
        iconProps: { name: 'users', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
    ],
  ],
};
</script>
```

### DropdownMenu Props

| Prop       | Type                                     | Required | Default    | Description                                                     |
| ---------- | ---------------------------------------- | -------- | ---------- | --------------------------------------------------------------- |
| `dropdown` | `DropdownMenuType`                       | yes      | —          | Configuration object containing menu sections and label.        |
| `position` | `'top' \| 'right' \| 'bottom' \| 'left'` | no       | `'bottom'` | The side on which to position the dropdown.                     |
| `align`    | `'start' \| 'center' \| 'end'`           | no       | `'center'` | Alignment relative to the trigger.                              |
| `class`    | `string`                                 | no       | —          | Additional Tailwind classes for the dropdown content container. |

### DropdownMenu Slots

| Slot    | Description                      |
| ------- | -------------------------------- |
| default | Trigger element (e.g. a button). |
| header  | Optional custom header content.  |

### DropdownMenuType

```typescript
interface DropdownMenuType {
  label?: string;
  sections: DropdownMenuSectionType[];
}

type DropdownMenuSectionType = DropdownMenuItemType[];

interface DropdownMenuItemType {
  iconProps?: IconProps;
  label?: string;
  clickAction?: ClickActionType;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSectionType[];
}
```

- **iconProps**: Object passed to the Icon component to render an icon.
- **clickAction**: String (URL) or function (e.g., () => alert('clicked')).
- **sections**: Nested submenu groups to build multilevel dropdowns.
- **shortcut**: Displays a keyboard shortcut hint (e.g., ⌘+G).
- **disabled**: Disables the item if true or if clickAction is null or empty.

### About DropdownMenu

- Uses default slot as trigger element.
- Optional `header` slot or `label` shown at top.
- Supports nested submenus via `sections`.
- `clickAction` accepts a URL or a function.
- Items auto-disabled if `clickAction` is empty or `disabled` is true.
- Shows `shortcut` text if provided.

## Loader Components

Includes `Spinner`, `Progress`, and `Ping` components for various loading states.

---

### Spinner

Displays a spinning loader icon.

```vue
<Spinner size="md" class="fill-blue-500" />
```

| Prop  | Type                       | Required | Default | Description             |
| ----- | -------------------------- | -------- | ------- | ----------------------- |
| size  | `'sm'` \| `'md'` \| `'lg'` | no       | `'md'`  | Controls spinner size.  |
| class | `string`                   | no       | —       | Additional CSS classes. |

### Progress

Shows a progress bar indicating completion percentage.

```vue
<Progress :progress="50" size="lg" color="bg-green-500" />
```

| Prop     | Type                       | Required | Default        | Description                              |
| -------- | -------------------------- | -------- | -------------- | ---------------------------------------- |
| progress | `number`                   | yes      | —              | Current progress (0-100).                |
| size     | `'sm'` \| `'md'` \| `'lg'` | no       | `'md'`         | Height of the progress bar.              |
| color    | `string`                   | no       | `'bg-primary'` | Tailwind color class for the filled bar. |
| class    | `string`                   | no       | —              | Additional CSS classes.                  |

### Ping

Renders a pulsing dot animation.

```vue
<Ping size="sm" class="bg-red-500" />
```

| Prop  | Type                       | Required | Default | Description             |
| ----- | -------------------------- | -------- | ------- | ----------------------- |
| size  | `'sm'` \| `'md'` \| `'lg'` | no       | `'md'`  | Controls ping size.     |
| class | `string`                   | no       | —       | Additional CSS classes. |

### About Loaders

- All components accept a `size` prop (`sm`, `md`, `lg`) for sizing.
- `class` prop lets you customize color, sizing, and styling freely.
- `Progress` requires a `progress` number (0-100) to display progress.
- `Spinner` uses an animated icon with configurable size and color.
- `Ping` shows a pulsing circle to indicate activity.
- Designed for flexible styling with Tailwind CSS utility classes.

### Example Usage

```vue
<template>
  <div class="flex gap-5 items-center">
    <Spinner size="sm" class="fill-red-500" />
    <Progress :progress="70" size="md" color="bg-green-500" />
    <Ping size="lg" class="bg-purple-500" />
  </div>
</template>
```

