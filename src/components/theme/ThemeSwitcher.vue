<template>
  <select
    :class="twMerge('border rounded p-2 w-full', props.class)"
    v-model="selectedTheme"
    @change="applyTheme(selectedTheme)"
  >
    <option v-for="themeName in availableThemes" :key="themeName" :value="themeName">
      {{ ucfirst(themeName) }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTheme } from '@geonative/ui/composables';
import { ucfirst } from '@geonative/ui/helpers';
import { twMerge } from 'tailwind-merge';

const props = withDefaults(
  defineProps<{
    class?: string;
  }>(),
  {}
);

// Import the useTheme composable from the UI library
const { applyTheme, availableThemes, currentTheme } = useTheme();

const selectedTheme = ref<string | null>(currentTheme.value || null);
</script>
