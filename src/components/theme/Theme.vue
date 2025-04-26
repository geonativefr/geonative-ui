<template>
  <div class="flex flex-col gap-4 align-bottom">
    <a class="underline text-foreground" href="#" @click="applyTheme(props.name)">{{ ucfirst(props.name) }}</a>
    <ul v-if="props.config" class="flex flex-col gap-1">
      <li v-for="(value, key) in props.config" :key="key">
        <span class="font-bold">{{ key }}</span
        >: <span>{{ value }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ThemeConfig } from '@geonative/ui/types';
import { useTheme } from '@geonative/ui/composables';
import { ucfirst } from '@geonative/ui/helpers';

// Import the useTheme composable from the UI library
const { applyTheme } = useTheme();

const props = withDefaults(
  defineProps<{
    name: string;
    config?: ThemeConfig | null;
  }>(),
  {
    config: null,
  }
);
</script>
