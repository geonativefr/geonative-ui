<template>
  <ProgressRoot
    data-slot="progress"
    :class="twMerge(
      `relative h-2 w-full overflow-hidden rounded-full ${sizeClass} ${bgColorClass}`,
      props.class
    )"
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
import type { CustomSize } from '@geonative/ui/types';

const props = withDefaults(
  defineProps<{
    progress: number;
    size?: CustomSize;
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
      return '';
  }
});

const bgColorClass = computed(() => {
  return `${props.color}/10`;
});
</script>
