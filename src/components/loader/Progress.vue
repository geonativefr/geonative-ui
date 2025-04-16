<template>
  <ProgressRoot
    data-slot="progress"
    :class="twMerge(`bg-primary/20 relative h-2 w-full overflow-hidden rounded-full ${sizeClass}`, props.class)"
  >
    <ProgressIndicator
      data-slot="progress-indicator"
      :class="`h-full w-full flex-1 transition-all ${props.color}`"
      :style="`transform: translateX(-${100 - (props.progress ?? 0)}%);`"
    />
  </ProgressRoot>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { twMerge } from 'tailwind-merge';
import { ProgressIndicator, ProgressRoot } from 'reka-ui';

const props = withDefaults(
  defineProps<{
    progress: number;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    color?: string;
  }>(),
  {
    size: 'md',
    color: 'bg-primary',
  }
);

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-2';
    case 'md':
      return 'h-4';
    case 'lg':
      return 'h-6';
    default:
      return 'h-4';
  }
});
</script>
