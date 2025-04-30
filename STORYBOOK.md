# Storybook in geonative-ui

This document describes the configuration and usage of Storybook in the geonative-ui project.

## What is Storybook?

Storybook is a development environment for UI components. 
It allows you to develop and test components in isolation, making it easier to create, test, and document your components.

[See Storybook Documentation](https://storybook.js.org/docs/vue/get-started/install)

## Architecture

In our project, Storybook is configured as a separate development environment, similar to our demo. This means:

- Storybook configuration files are located in the `.storybook` folder
- Stories are located in the `/storybook/src/stories/` directory
- Storybook is not included in the main package

## Configuration

### File Structure

```
.storybook/
  ├── main.ts        # Main Storybook configuration
  └── preview.ts     # Preview configuration and global imports
storybook/
  └── src/
      └── stories/
          └── components/
              └── Avatar.stories.ts  # Stories for the Avatar component
src/
  └── components/
      └── avatar/
          └── Avatar.vue
```

### Configuration Files

#### `.storybook/main.ts`

This file contains the main Storybook configuration, including story locations, addons used, and Vite configuration.

#### `.storybook/preview.ts`

This file configures the Storybook preview environment, including global style imports.

### Scripts in `package.json`

```json
{
  "scripts": {
    "dev:storybook": "storybook dev -p 6006",
    "build:storybook": "storybook build --output-dir storybook-dist",
  }
}
```

## Usage

### Start Storybook in Development

```bash
yarn dev:storybook
```

This command starts the Storybook development server on port 6006. You can access Storybook by opening your browser at `http://localhost:6006`.

### Build Storybook for Production

```bash
yarn build:storybook
```

This command generates a static version of Storybook that you can deploy to a web server.

## Adding New Stories

To add a story for a new component, follow these steps:

1. Create a new file in the `/storybook/src/stories/` directory named `[ComponentName].stories.ts`
2. Define the component metadata and its stories
3. Import the component from your main source directory (`src/components/`)

[See documentation to create stories for your components](https://storybook.js.org/docs/vue/writing-stories/introduction)

### Best Practices

1. **Organization**: Organize stories by component type in the `/storybook/src/stories/` directory.
2. **Autodocumentation**: Use the `autodocs` tag to automatically generate documentation from your stories.
3. **Args**: Use `args` to define default properties for each story.
4. **ArgTypes**: Use `argTypes` to customize controls in the Storybook interface.

## Integration with Shadcn and Tailwind

Our library uses Shadcn and Tailwind CSS v4. Some important points to consider:

- Make sure Tailwind styles are properly imported in `preview.ts`.
