<template>
  <div class="flex flex-col items-center min-h-screen bg-background text-foreground p-5">
    <h1 class="text-2xl mb-3">Components demo :</h1>
    <p class="text-sm text-secondary-foreground mb-2">Click on the links bellow to see the components in action.</p>
    <Navigation class="m-5" />
    <div class="flex flex-col justify-center rounded-lg p-5">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '@/Navigation.vue';
import { useTheme } from '@geonative/ui/composables';
import initialThemes from '@/assets/themes/themes.json';
import type { ThemesData } from '@geonative/ui/types';

// Import the useTheme composable from the UI library
const { initializeThemes } = useTheme();

// Initialize themes with the data from the JSON file
initializeThemes(initialThemes as ThemesData);
</script>
