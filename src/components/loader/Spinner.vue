<template>
  <div role="status">
    <Icon
      name="loader_spinner"
      :class="twMerge(`text-gray-200 fill-primary animate-spin ${sizeClass}`, props.class)"
    />
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { twMerge } from 'tailwind-merge';
import { Icon } from '@geonative/ui';

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  }>(),
  {
    size: 'md',
  }
);
const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-4 w-4';
    case 'md':
      return 'h-6 w-6';
    case 'lg':
      return 'h-8 w-8';
    default:
      return 'h-6 w-6';
  }
});
</script>
