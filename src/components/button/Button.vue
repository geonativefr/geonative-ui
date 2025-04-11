<template>
  <button
    :class="[
      'transition-all',
      button.disabled ? 'opacity-50 cursor-not-allowed' : '',
      button.size === 'lg' ? 'px-6 py-3 text-lg' : button.size === 'sm' ? 'px-2 py-1 text-sm' : 'px-4 py-2 text-base',
    ]"
    :disabled="button.disabled"
    @click="handleClick"
  >
    {{ button.label }}
  </button>
</template>

<script setup lang="ts">
import type { Button as ButtonType } from '@/types/button';
import { defineProps } from 'vue';

const props = defineProps<{
  button: ButtonType;
}>();

const handleClick = () => {
  if (!props.button.disabled) {
    props.button.onClick?.();
  }
};
</script>