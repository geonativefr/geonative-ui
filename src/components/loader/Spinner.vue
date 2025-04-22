<template>
  <div role="status">
    <Icon
      name="loader_spinner"
      source="svg"
      :class="twMerge(`text-gray-200 fill-primary animate-spin ${sizeClass}`, props.class)"
    />
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { twMerge } from 'tailwind-merge';
import { Icon } from '@geonative/ui/components';
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
      return 'size-4';
    case 'md':
      return 'size-5';
    case 'lg':
      return 'size-6';
    default:
      return '';
  }
});
</script>
