<template>
  <Progress
    :model-value="props.progress"
    class="w-full border"
    :class="`${sizeClass} bg-[${props.bgColor}]  border-[${props.borderColor}]`"
  />
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
    default: '#000000',
    validator: (value: string) => {
      return /^#[0-9A-F]{6}$/i.test(value)
    }
  },
  bgColor: {
    type: String,
    required: false,
    default: '#ffffff',
    validator: (value: string) => {
      return /^#[0-9A-F]{6}$/i.test(value)
    }
  },
  borderColor: {
    type: String,
    required: false,
    default: '#ffffff',
    validator: (value: string) => {
      return /^#[0-9A-F]{6}$/i.test(value)
    }
  }
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