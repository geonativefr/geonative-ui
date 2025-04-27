<template>
  <div class="flex flex-col">
    <div class="flex flex-row gap-4 m-4">
      <h2 class="text-center text-lg font-bold text-nowrap">Themes :</h2>
      <ThemeSwitcher />
    </div>
    <!-- Switch between theme mode light/dark -->
    <div class="flex flex-row gap-4 m-4">
      <h2 class="text-center text-lg font-bold text-nowrap">Theme mode :</h2>
      <ThemeModeSwitcher />
    </div>
  </div>
  <div class="flex flex-col gap-4 m-4">
    <h2 class="text-center text-lg font-bold">
      {{ currentTheme ? ucfirst(currentTheme) + ' ' + currentThemeMode : 'No theme selected' }}
    </h2>
    <div class="bg-background text-foreground border p-4">.bg-background .text-foreground .border</div>
    <div class="bg-primary text-primary-foreground p-4">.bg-primary .text-primary</div>
    <div class="bg-secondary text-secondary-foreground p-4">.bg-secondary .text-secondary-foreground</div>
    <div class="bg-popover text-popover-foreground p-4">.bg-popover .text-popover-foreground</div>
    <div class="bg-accent text-accent-foreground p-4">.bg-accent .text-accent-foreground</div>
    <div class="bg-destructive/10 text-destructive-foreground p-4">.bg-destructive/10 .text-destructive-foreground</div>
    <div class="bg-muted text-muted-foreground p-4">.bg-muted .text-muted-foreground</div>
    <div class="bg-card text-card-foreground p-4">.bg-card .text-card-foreground</div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@geonative/ui/composables';
import { ucfirst } from '@geonative/ui/helpers';
import { ThemeSwitcher, ThemeModeSwitcher } from '@geonative/ui/components';

// Import the useTheme composable from the UI library
const { currentTheme, currentThemeMode } = useTheme();
</script>
