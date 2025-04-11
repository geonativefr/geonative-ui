<template>
  <button
    :class="[
      'transition-all',
      !props.class?.includes('rounded-') ? 'rounded-md' : '',
      !props.class?.includes('bg-') ? 'bg-primary' : '',
      !props.class?.includes('text-') ? 'text-white' : '',
      !props.class?.includes('shadow-') ? 'shadow-md' : '',
      !props.class?.includes('cursor-') ? 'cursor-pointer' : '',
      props.disabled ? 'opacity-50 cursor-not-allowed' : '',
      props.size === 'lg' ? 'px-6 py-3 text-lg' : props.size === 'sm' ? 'px-2 py-1 text-sm' : 'px-4 py-2 text-base',
      props.class,
    ]"
    :disabled="props.disabled"
  >
    <slot>{{ props.label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  disabled?: boolean;
}>();

</script>
