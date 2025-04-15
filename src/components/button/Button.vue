<template>
  <button
    :class="[
      'transition-all',
      !props.class?.includes('rounded-') ? 'rounded-md' : '',
      !props.class?.includes('bg-') ? 'bg-primary' : '',
      !props.class?.includes('text-') ? 'text-white' : '',
      !props.class?.includes('shadow-') ? 'shadow-md' : '',
      !props.class?.includes('cursor-') ? (props.disabled || props.loading ? 'cursor-not-allowed' : 'cursor-pointer') : '',
      props.disabled || props.loading ? 'opacity-50' : '',
      props.size === 'lg' ? 'px-6 py-3 text-lg' : props.size === 'sm' ? 'px-2 py-1 text-sm' : 'px-4 py-2 text-base',
      props.class,
    ]"
    :disabled="props.disabled || props.loading"
  >
    <slot>{{ props.label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

export type ButtonSize = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    label?: string;
    size?: ButtonSize;
    class?: string;
    disabled?: boolean;
    loading?: boolean;
  }>(),
  {
    label: 'Button',
    size: 'md',
    class: '',
    disabled: false,
    loading: false,
  }
);
</script>