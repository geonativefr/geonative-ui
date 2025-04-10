<template>
  <Progress
    :model-value="props.progress"
    color="blue-500"
    class="w-full"
    :class="[sizeClass, bgColorClass]"
  ></Progress>
</template>

<script setup lang="ts">
import { Progress } from '@/shadcn/ui/progress';
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    required: false,
    default: 'md',
    validator: (value: string) => {
      return ['sm', 'md', 'lg'].includes(value)
    }
  },
  progress: {
    type: Number,
    required: true,
    validator: (value: number) => {
      return (value >= 0 && value <= 100)
    }
  },
  color: {
    type: String,
    required: false,
    default: 'black',
  },
  bgColor: {
    type: String,
    required: false,
    default: 'white',
  },
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
const bgColorClass = computed(() => {
  return `bg-blue-50`;
});
</script>