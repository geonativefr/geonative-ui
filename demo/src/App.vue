<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script setup lang="ts">
import { useTheme } from '@geonative/ui/composables';
import initialThemes from '@/assets/themes/themes.json';
import type { ThemesData } from '@geonative/ui/types';
import { Layout } from '@geonative/ui/components';

// Import the useTheme composable from the UI library
const { initializeThemes } = useTheme();

// Initialize themes with the data from the JSON file
initializeThemes(initialThemes as ThemesData);
</script>
