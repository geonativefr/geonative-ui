<template>
  <button
    :class="
      twMerge(
        'transition-all flex-col justify-center items-center bg-stone-950 rounded-md text-white shadow-md',
        props.disabled || props.loading ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-stone-700',
        props.disabled ? 'opacity-30' : '',
        sizeClass,
        props.class
      )
    "
    :disabled="props.disabled || props.loading"
  >
    <div v-if="props.loading" class="flex justify-center items-center px-2 gap-2">
      <Spinner :size="props.size" class="fill-red-600" />
      <span v-if="props.loadingText">{{ props.loadingText }}</span>
    </div>
    <div :class="{ 'invisible h-0': props.loading }">
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
      return 'px-3 py-2 text-base';
    case 'lg':
      return 'px-4 py-3 text-lg';
    default:
      return 'px-2 py-2 text-base';
  }
});
</script>
