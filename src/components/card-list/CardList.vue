<template>
  <div :class="twMerge('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4', props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  class?: string;
}>();
</script>
