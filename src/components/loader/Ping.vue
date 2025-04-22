<template>
  <span class="relative flex" :class="[sizeClass]">
    <span
      :class="twMerge(`absolute bg-primary inline-flex animate-ping rounded-full opacity-75 ${sizeClass}`, props.class)"
    ></span>
    <span :class="twMerge(`relative bg-primary inline-flex rounded-full ${sizeClass}`, props.class)"></span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { twMerge } from 'tailwind-merge';
import type { CustomSize } from '@geonative/ui/types';

const props = withDefaults(
  defineProps<{
    size?: CustomSize;
    class?: string;
  }>(),
  {
    size: 'md',
  }
);

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'size-2';
    case 'md':
      return 'size-3';
    case 'lg':
      return 'size-4';
    default:
      return '';
  }
});
</script>
