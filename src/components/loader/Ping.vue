<template>
  <span class="relative flex" :class="[sizeClass]">
    <span
      class=""
      :class="
        twMerge('absolute bg-blue-500 inline-flex h-full w-full animate-ping rounded-full opacity-75', props.class)
      "
    ></span>
    <span class="" :class="twMerge(`relative bg-blue-500 inline-flex rounded-full ${sizeClass}`, props.class)"></span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { twMerge } from 'tailwind-merge';

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  }>(),
  {
    size: 'md',
    class: '',
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
      return 'size-3';
  }
});
</script>
