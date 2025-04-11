<template>
  <component
    v-if="iconComponent"
    :is="iconComponent"
    :class="props.class"
  />
  <span
    v-else
    class="rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-600 ring-1 ring-gray-500/10"
  >{{ props.name }}</span>
</template>

<script lang="ts" setup>
import { computed, h } from 'vue';
import type { Component } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
    validator: (value: string): boolean => {
      // Check if the value is a valid SVG file name
      return /^[a-zA-Z0-9-_]+$/.test(value);
    },
  },
  class: {
    type: String,
    default: '',
  },
});

const iconComponent: Component = computed(() => {
  try {
    // Use Vite's dynamic import.meta.glob feature to load SVG files
    const icons = import.meta.glob('@/assets/icons/**/*.svg', {
      query: "?raw",
      import: "default",
      eager: true,
    });
    // Find the icon by matching the end of the path replace _ by /
    const targetPath = `/${props.name.replace(/_/g, '/')}.svg`;
    const matchedIconPath = Object.keys(icons).find(path =>
      path.endsWith(targetPath)
    );
    if (matchedIconPath && icons[matchedIconPath]) {
      // Create a VueJS component from the SVG file
      const svgContent = icons[matchedIconPath] as string;
      return createSvgComponent(svgContent);
    } else {
      console.warn(`Icon "${props.name}" not found in assets/icons directory`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading icon "${props.name}":`, error);
    return null;
  }
});

/**
 * Create VueJS component from the SVG file
 * @param {string} svgContent - The content of the SVG file
 * @return {Component | null} - The VueJS component or null if invalid
 */
function createSvgComponent(svgContent: string): Component | null {
  // Parse the SVG content to extract attributes and inner HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgContent, 'image/svg+xml');
  const svgElement = doc.querySelector('svg');

  if (!svgElement) {
    console.error('Invalid SVG content');
    return null;
  }

  // Get all attributes from the SVG
  const attrs: Record<string, string> = {};
  Array.from(svgElement.attributes).forEach(attr => {
    attrs[attr.name] = attr.value;
  });

  // Create a Vue component that returns an SVG element with all original attributes
  // and inner HTML content
  return {
    render() {
      return h('svg', {
        ...attrs,
        innerHTML: svgElement.innerHTML,
        // This ensures the SVG renders correctly
        domProps: {
          innerHTML: svgElement.innerHTML
        }
      });
    }
  };
}

</script>
