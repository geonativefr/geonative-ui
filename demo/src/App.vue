<template>
  <AppLayout>
    <template #sidebar>
      <div class="flex flex-col items-center min-h-screen text-white bg-stone-900 p-5">
        <h1 class="text-2xl mb-3">Components demo</h1>
        <Navigation />
        <p class="text-sm text-gray-100 mt-2">Click on the links above to see the components in action.</p>
      </div>
    </template>

    <template #header>
      <Breadcrumb :breadcrumb="breadcrumb" />
    </template>

    <template #content>
        <div class="flex flex-col justify-center mt-15 bg-white">
          <router-view />
        </div>
    </template>
  </AppLayout>
</template>

<script setup lang="ts">
import Navigation from '@/Navigation.vue';
import { useTheme } from '@geonative/ui/composables';
import initialThemes from '@/assets/themes/themes.json';
import type { ThemesData } from '@geonative/ui/types';
import AppLayout from '@/components/layout/AppLayout.vue';

// Import the useTheme composable from the UI library
const { initializeThemes } = useTheme();

// Initialize themes with the data from the JSON file
initializeThemes(initialThemes as ThemesData);
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
