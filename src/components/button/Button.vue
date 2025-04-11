<template>
  <button
    :class="[
      'transition-all',
      props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      props.size === 'lg' ? 'px-6 py-3 text-lg' : props.size === 'sm' ? 'px-2 py-1 text-sm' : 'px-4 py-2 text-base',
    ]"
    :disabled="props.disabled"
    @click="handleClick"
  >
    <slot>{{ props.label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}>();

const handleClick = () => {
  if (!props.disabled) {
    props.onClick?.();
  }
};
</script>
