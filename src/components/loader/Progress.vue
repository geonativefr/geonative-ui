<template>
  <Progress
    :model-value="props.progress"
    :class="
      twMerge(
        `w-full bg-blue-100 ${sizeClass}`,
        props.class,
      )
    "
  ></Progress>
</template>

<script setup lang="ts">
import { Progress } from '@/shadcn/ui/progress';
import { computed } from 'vue';
import { twMerge } from "tailwind-merge";

const props = withDefaults(defineProps<{
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  class?: string;
}>(), {
  size: 'md',
});
console.log("progress", props.progress);

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