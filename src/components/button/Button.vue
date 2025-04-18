<template>
  <button
    :class="
      twMerge(
        'relative transition-all flex items-center justify-center',
        !props.class?.includes('rounded-') ? 'rounded-md' : '',
        !props.class?.includes('bg-') ? 'bg-primary' : '',
        !props.class?.includes('text-') ? 'text-white' : '',
        !props.class?.includes('shadow-') ? 'shadow-md' : '',
        !props.class?.includes('cursor-')
          ? props.disabled || props.loading
            ? 'cursor-not-allowed'
            : 'cursor-pointer'
          : '',
        props.disabled ? 'opacity-30' : '',
        sizeClass,
        props.class
      )
    "
    :disabled="props.disabled || props.loading"
  >
    <div v-if="props.loading" class="absolute flex items-center gap-2">
      <Spinner :size="props.size" class="fill-red-600" />
      <span>{{ props.loadingText }}</span>
    </div>
    <div :class="{ invisible: props.loading }">
      <slot>{{ props.label }}</slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import { twMerge } from 'tailwind-merge';
import type { CustomSize } from '@geonative/ui/types';
import Spinner from '@geonative/ui/components/loader/Spinner.vue';

const props = withDefaults(
  defineProps<{
    label?: string;
    size?: CustomSize;
    class?: string;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
  }>(),
  {
    size: 'md',
    class: '',
    disabled: false,
    loading: false,
    loadingText: 'Loading...',
  }
);

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-2 py-1 text-sm';
    case 'md':
      return 'px-4 py-2 text-base';
    case 'lg':
      return 'px-6 py-3 text-lg';
    default:
      return 'px-4 py-2 text-base';
  }
});
</script>
