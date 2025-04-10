<template>
  <span class="relative flex" :class="[sizeClass]">
    <span
      class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
      :class="[colorClass]"
    ></span>
    <span
      class="relative inline-flex  rounded-full"
      :class="[colorClass, sizeClass]"
    ></span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    required: false,
    default: 'md',
    validator: (value: string) => {
      return ['sm', 'md', 'lg'].includes(value);
    },
  },
  color: {
    type: String,
    required: false,
    default: 'black',
  },
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
const colorClass = computed(() => {
  return `bg-blue-500`;
});
</script>