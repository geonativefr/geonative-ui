<template>
  <span
    v-for="mode in THEME_MODES_SELECTION"
    :key="mode"
    :class="twMerge('text-center text-lg font-bold toggle toggle-primary', props.class)"
  >
    <input type="radio" :checked="selectedThemeMode === mode" @change="setThemeMode(mode as ThemeModeSelection)" />
    {{ ucfirst(mode) }}
  </span>
</template>

<script setup lang="ts">
import { useTheme } from '@geonative/ui/composables';
import { THEME_MODES_SELECTION } from '@geonative/ui/constants';
import { ucfirst } from '@geonative/ui/helpers';
import type { ThemeModeSelection } from '@geonative/ui/types';
import { twMerge } from 'tailwind-merge';
// Import the useTheme composable from the UI library
const { setThemeMode, selectedThemeMode } = useTheme();

const props = withDefaults(
  defineProps<{
    class?: string;
  }>(),
  {}
);
</script>
