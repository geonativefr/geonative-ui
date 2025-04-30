<template>
  <a
    :class="twMerge('underline text-foreground', props.class)"
    href="#"
    @click="applyTheme(props.name)"
  >{{ ucfirst(props.name) }}</a>
</template>

<script setup lang="ts">
import { useTheme } from '@geonative/ui/composables';
import { ucfirst } from '@geonative/ui/helpers';
import { twMerge } from 'tailwind-merge';

// Import the useTheme composable from the UI library
const { applyTheme } = useTheme();

const props = withDefaults(defineProps<{
  name: string;
  class?: string;
}>(), {});
</script>
