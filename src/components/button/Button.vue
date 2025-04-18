<template>
  <div class="inline-block">
    <button
      :class="
        twMerge(
          `relative flex items-center rounded-md bg-primary text-white shadow-md px-4 py-2 cursor-pointer ${sizeClass}`,
          props.disabled || props.loading ? 'cursor-not-allowed' : 'hover:opacity-80',
          props.disabled ? 'opacity-80' : '',
          props.class
        )
      "
      :disabled="props.disabled || props.loading"
    >
      <div class="flex items-center gap-2 whitespace-nowrap" :class="{ invisible: props.loading }">
        <slot>{{ props.label }}</slot>

      </div>
      <div v-if="props.loading" class="absolute inset-0 flex items-center justify-center gap-2">
        <Spinner :size="props.size" />
        <span v-if="props.loadingText">{{ props.loadingText }}</span>
      </div>
    </button>
  </div>
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
  }
);

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm';
    case 'md':
      return 'text-base';
    case 'lg':
      return 'text-lg';
    default:
      return 'text-base';
  }
});
</script>
