<template>
  <div class="flex flex-row gap-4 m-4">
    <h2 class="text-center text-lg font-bold">Available themes :</h2>
    <Theme
      v-for="themeName in availableThemes"
      :key="themeName"
      :label="themeName"
      @click="applyTheme"
    />
  </div>
  <div class="flex flex-col gap-4 m-4">
    <h2 class="text-center text-lg font-bold">{{ ucfirst(currentTheme) }}</h2>
    <div class="bg-background text-foreground border p-4">
      .bg-background .text-foreground .border
    </div>
    <div class="bg-primary text-primary-foreground p-4">
      .bg-primary .text-primary
    </div>
    <div class="bg-secondary text-secondary-foreground p-4">
      .bg-secondary .text-secondary-foreground
    </div>
    <div class="bg-popover text-popover-foreground p-4">
      .bg-popover .text-popover-foreground
    </div>
    <div class="bg-accent text-accent-foreground p-4">
      .bg-accent .text-accent-foreground
    </div>
    <div class="bg-destructive/10 text-destructive-foreground p-4">
      .bg-destructive/10 .text-destructive-foreground
    </div>
    <div class="bg-muted text-muted-foreground p-4">
      .bg-muted .text-muted-foreground
    </div>
    <div class="bg-card text-card-foreground p-4">
      .bg-card .text-card-foreground
    </div>
  </div>

</template>

<script setup lang="ts">
import { useTheme } from '@geonative/ui/composables';
import initialThemes from '@/assets/themes/themes.json';
import type { ThemesData } from '@geonative/ui/types';
import Theme from '@geonative/ui/components/theme/Theme.vue';
import { ucfirst } from '@geonative/ui/helpers';

// Initialize theme manager
const {
  currentTheme,
  availableThemes,
  applyTheme,
} = useTheme(initialThemes as ThemesData, {
  persistTheme: true,
  defaultTheme: 'dark',
  storageKey: 'app-theme'
});


</script>