<template>
  <Progress
    :model-value="props.progress"
    color="props.color"
    class="w-full"
    :class="[sizeClass, props.bgColor]"
  ></Progress>
</template>

<script setup lang="ts">
import { Progress } from '@/shadcn/ui/progress';
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  progress: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  bgColor?: string;
}>(), {
  size: 'md',
  color: 'bg-blue-500',
  bgColor: 'bg-blue-50',
});

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