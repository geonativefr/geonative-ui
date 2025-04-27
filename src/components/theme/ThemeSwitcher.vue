<template>
  <select class="border rounded p-2 w-full" v-model="selectedTheme" @change="applyTheme(selectedTheme)">
    <option v-for="themeName in availableThemes" :key="themeName" :value="themeName">
      {{ ucfirst(themeName) }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from '@geonative/ui/composables';
import { ucfirst } from '@geonative/ui/helpers';

// Import the useTheme composable from the UI library
const { applyTheme, availableThemes, currentTheme } = useTheme();

const selectedTheme = ref<string | null>(currentTheme.value || null);
</script>
