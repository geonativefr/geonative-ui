<template>
  <span class="relative flex" :class="[sizeClass]">
    <span
      class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
      :class="[props.color]"
    ></span>
    <span
      class="relative inline-flex  rounded-full"
      :class="[props.color, sizeClass]"
    ></span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}>(), {
  size: 'md',
  color: 'bg-blue-500',
});

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