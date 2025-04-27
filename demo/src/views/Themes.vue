<template>
  <div class="flex flex-row gap-4 m-4">
    <h2 class="text-center text-lg font-bold">Available themes :</h2>
    <Theme v-for="themeName in availableThemes" :key="themeName" :name="themeName" />
  </div>
  <!-- Switch between theme mode light/dark -->
  <div class="flex flex-row gap-4 m-4">
    <h2 class="text-center text-lg font-bold">Dark mode :</h2>
    <input type="checkbox" ref="dark-mode" class="toggle toggle-primary" @click="toggleDarkMode()"  />
  </div>
  <div class="flex flex-col gap-4 m-4">
    <h2 class="text-center text-lg font-bold">{{ currentTheme ? ucfirst(currentTheme) : 'No theme selected' }}</h2>
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
import Theme from '@geonative/ui/components/theme/Theme.vue';
import { ucfirst } from '@geonative/ui/helpers';
import { onMounted, ref } from 'vue';

// Import the useTheme composable from the UI library
const { currentTheme, availableThemes, setDarkMode, currentThemeMode  } = useTheme();

// Toggle dark mode
const darkModeRef = ref<boolean>(false);
onMounted(() => {
  if (darkModeRef.value) {
    darkModeRef.value = currentThemeMode.value === 'dark';
  }
});

const toggleDarkMode = () => {
  darkModeRef.value = !darkModeRef.value;
  setDarkMode(darkModeRef.value);
};

</script>
