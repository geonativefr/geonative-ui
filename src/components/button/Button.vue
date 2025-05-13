<template>
  <div class="inline-block" :style="{ width: width }">
    <ShadcnButton
      :class="
        twMerge(
          `w-full rounded-md bg-background text-foreground shadow-md cursor-pointer ${sizeClass} ${hoverBgClass}`,
          props.disabled || props.loading ? 'cursor-not-allowed' : 'hover:opacity-80',
          props.disabled ? 'opacity-80' : '',
          props.class
        )
      "
      @click="!props.disabled && !props.loading ? emit('click') : null"
      :disabled="props.disabled || props.loading"
    >
      <div
        ref="slotRef"
        class="items-center whitespace-nowrap p-2 gap-2"
        :class="{ invisible: props.loading }"
        :style="{ width: width }"
      >
        <span><slot /></span>
      </div>

      <div ref="loaderRef" class="absolute flex items-center p-2 gap-2" :class="{ invisible: !props.loading }">
        <Spinner :size="props.size" />
        <span v-if="props.loadingText">{{ props.loadingText }}</span>
      </div>
    </ShadcnButton>
  </div>
</template>

<script setup lang="ts">
import { Button as ShadcnButton } from '@geonative/ui/shadcn/ui/button';
import { computed, onMounted, ref } from 'vue';
import { twMerge } from 'tailwind-merge';
import type { CustomSize } from '@geonative/ui/types';
import { Spinner } from '@geonative/ui/components';

const emit = defineEmits(['click']);

const props = withDefaults(
  defineProps<{
    size?: CustomSize;
    class?: string;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    fullWidth?: boolean;
  }>(),
  {
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
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
const width = ref<string>('100%');

onMounted(() => {
  if (!props.fullWidth) {
    const loaderWidth = loaderRef.value?.offsetWidth || null;
    const slotWidth = slotRef.value?.offsetWidth || null;
    const maxWidth = Math.max(loaderWidth || 0, slotWidth || 0);
    width.value = maxWidth ? maxWidth + 'px' : '100%';
  }
});
</script>
