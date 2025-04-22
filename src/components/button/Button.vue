<template>
  <div class="inline-block" :style="{ width: width ? `${width}px` : 'auto' }">
      <Button
        :class="
          twMerge(
            `relative flex w-full items-center justify-center rounded-md bg-primary text-white shadow-md cursor-pointer ${sizeClass} ${hoverBgClass}`,
            props.disabled || props.loading ? 'cursor-not-allowed' : 'hover:opacity-80',
            props.disabled ? 'opacity-80' : '',
            props.class
          )
        "
        :disabled="props.disabled || props.loading"
      >
        <div ref="slotRef" class="flex items-center gap-2 whitespace-nowrap px-4 py-2" :class="{ 'invisible': props.loading }">
          <span><slot /></span>
        </div>

        <div ref="loaderRef" class="absolute flex items-center gap-2 px-4 py-2" :class="{ 'invisible': !props.loading }">
          <Spinner :size="props.size" />
          <span v-if="props.loadingText">{{ props.loadingText }}</span>
        </div>
      </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@geonative/ui/shadcn/ui/button';
import { computed, defineProps, onMounted, ref, withDefaults } from 'vue';
import { twMerge } from 'tailwind-merge';
import type { CustomSize } from '@geonative/ui/types';
import Spinner from '@geonative/ui/components/loader/Spinner.vue';

const props = withDefaults(
  defineProps<{
    size?: CustomSize;
    class?: string;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
  }>(),
  {
    size: 'md',
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
      return '';
  }
});

const hoverBgClass = computed(() => {
  // Find bg-color class using regex
  const bgColorClass = props.class?.match(/bg-([a-zA-Z0-9-]+)/);
  if (bgColorClass) {
    const bgColor = bgColorClass[0];
    return `hover:${bgColor}/80`;
  }
  return '';
});

const slotRef = ref<HTMLElement | null>(null);
const loaderRef = ref<HTMLElement | null>(null);
const width = ref<number | null>(null);

onMounted(() => {
  const loaderWidth = loaderRef.value?.offsetWidth || null;
  const slotWidth = slotRef.value?.offsetWidth || null;
  const maxWidth = Math.max(loaderWidth || 0, slotWidth || 0);
  width.value = maxWidth ? maxWidth : null;
});



</script>
