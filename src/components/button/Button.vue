<template>
  <button
    :class="[
      'transition-all',
      !props.class?.includes('rounded-') ? 'rounded-md' : '',
      !props.class?.includes('bg-') ? 'bg-primary' : '',
      !props.class?.includes('text-') ? 'text-white' : '',
      !props.class?.includes('shadow-') ? 'shadow-md' : '',
      !props.class?.includes('cursor-') ? 'cursor-pointer' : '',
      props.disabled || props.loading ? 'opacity-50 cursor-not-allowed' : '',
      props.size === 'lg' ? 'px-6 py-3 text-lg' : props.size === 'sm' ? 'px-2 py-1 text-sm' : 'px-4 py-2 text-base',
      props.class,
    ]"
    :disabled="props.disabled || props.loading"
  >
    <slot v-if="!props.loading">{{ props.label }}</slot>
    <span v-else>{{ loadingText }}</span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { ref, onMounted, onUnmounted, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    label?: string;
    size?: 'sm' | 'md' | 'lg';
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

// Better loading button

const loadingText = ref('Loading');
let interval: number | undefined;

const startLoadingAnimation = () => {
  let dots = 0;
  interval = setInterval(() => {
    dots = (dots + 1) % 4;
    loadingText.value = 'Loading' + '.'.repeat(dots);
  }, 500);
};

const stopLoadingAnimation = () => {
  if (interval) {
    clearInterval(interval);
    interval = undefined;
    loadingText.value = 'Loading';
  }
};

watch(
  () => props.loading,
  (newVal) => {
    if (newVal) {
      startLoadingAnimation();
    } else {
      stopLoadingAnimation();
    }
  }
);

onMounted(() => {
  if (props.loading) {
    startLoadingAnimation();
  }
});

onUnmounted(() => {
  stopLoadingAnimation();
});
</script>
