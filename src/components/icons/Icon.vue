<template>
  <component v-if="iconComponent" :is="iconComponent" :class="twMerge('h-5 w-5', props.class)" />
  <span v-else class="rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-600 ring-1 ring-gray-500/10">{{
    props.name
  }}</span>
</template>

<script lang="ts" setup>
import { computed, h } from 'vue';
import type { Component } from 'vue';
import * as lucideIcons from 'lucide-vue-next';
import HeroIcons from './heroicons.ts';
import { twMerge } from 'tailwind-merge';
import type { IconType, IconSource, AvatarProps } from '@geonative/ui/types';
import { Avatar } from '@geonative/ui/components';

const props = withDefaults(
  defineProps<{
    name: string;
    class?: string;
    source: IconSource;
    type?: IconType; // Type for heroicons
    avatarProps?: AvatarProps; // Props for avatar
  }>(),
  {
    type: 'solid',
  }
);

const iconComponent: Component = computed(() => {
  // Handle lucide icons
  if (props.source === 'lucide') {
    return lucideIcons[props.name as keyof typeof lucideIcons];
  }

  // Handle heroicons
  if (props.source === 'heroicons') {
    // Transform the icon name to match the naming convention in HeroIcons academic-cap => AcademicCapIcon
    const iconName = `${props.name
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')}`;
    // Add the icon type (solid or outline) to the name
    const iconType = props.type === 'solid' ? 'Solid' : 'Outline';
    // Construct the full icon name
    const fullIconName = `${iconType}${iconName}Icon`;
    return HeroIcons[fullIconName] as Component;
  }

  // Handle avatar
  if (props.source === 'avatar') {
    // Check if the avatarProps are provided
    if (props.avatarProps) {
      return () => h(Avatar, props.avatarProps);
    }
    console.warn('Avatar props are required for avatar source');
    return null;
  }

  // Handle SVG icons
  try {
    // Use Vite's dynamic import.meta.glob feature to load SVG files
    const iconsOfLib = import.meta.glob('@geonative/ui/assets/icons/**/*.svg', {
      query: '?raw',
      import: 'default',
      eager: true,
    });
    // Icons
    const iconsOfProject = import.meta.glob('@/assets/icons/**/*.svg', {
      query: '?raw',
      import: 'default',
      eager: true,
    });
    // Merge the two icon sets
    const icons = {
      ...iconsOfLib,
      ...iconsOfProject,
    };
    // Find the icon by matching the end of the path replace _ by /
    const targetPath = `/${props.name.replace(/_/g, '/')}.svg`;
    const matchedIconPath = Object.keys(icons).find((path) => path.endsWith(targetPath));
    if (matchedIconPath && icons[matchedIconPath]) {
      // Create a VueJS component from the SVG file
      const svgContent = icons[matchedIconPath] as string;
      return createSvgComponent(svgContent);
    }
    console.warn(`Icon "${props.name}" not found in assets/icons directory`);
    return null;
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
  Array.from(svgElement.attributes).forEach((attr) => {
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
          innerHTML: svgElement.innerHTML,
        },
      });
    },
  };
}
</script>
