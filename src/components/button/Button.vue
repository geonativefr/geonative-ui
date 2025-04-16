<template>
  <button
    :class="
      twMerge(
        'relative transition-all flex items-center justify-center',
        !props.class?.includes('rounded-') ? 'rounded-md' : '',
        !props.class?.includes('bg-') ? 'bg-primary' : '',
        !props.class?.includes('text-') ? 'text-white' : '',
        !props.class?.includes('shadow-') ? 'shadow-md' : '',
        !props.class?.includes('cursor-') ? (props.disabled || props.loading ? 'cursor-not-allowed' : 'cursor-pointer') : '',
        props.disabled ? 'opacity-30' : '',
        sizeClass,
        props.class
      )
    "
    :disabled="props.disabled || props.loading"
  >
    <div v-if="props.loading">
      <div v-if="props.ping" class="absolute -top-0.5 -right-0.5 flex items-center space-x-2">
        <Ping :size="props.size" class="bg-red-500" />
      </div>
    <div v-else class="opacity-100 absolute inset-0 flex items-center justify-between z-20 w-full px-2">
      <Spinner :size="props.size" class="fill-red-600" />
      <span class="mr-auto ml-auto">{{ props.loadingText }}</span>
    </div>
    </div>
    <div :class="twMerge(props.loading && !props.ping ? 'opacity-0 z-10' : 'opacity-100 z-20')">
      <slot>{{ props.label }}</slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import { twMerge } from 'tailwind-merge';
import type { CustomSize } from '@geonative/ui/types/customsize.ts';
import Spinner from '@geonative/ui/components/loader/Spinner.vue';
import Ping from '@geonative/ui/components/loader/Ping.vue';

const props = withDefaults(
  defineProps<{
    label?: string;
    size?: CustomSize;
    class?: string;
    disabled?: boolean;
    loading?: boolean;
    ping?: boolean;
    loadingText?: string;
  }>(),
  {
    size: 'md',
    class: '',
    disabled: false,
    loading: false,
    ping: false,
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
