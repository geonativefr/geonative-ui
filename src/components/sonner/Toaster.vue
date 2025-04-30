<template>
  <Toaster
    :rich-colors="props.richColors"
    :position="props.position"
    :closeButton="props.closeButton"
    :expand="props.expend"
    :visible-toasts="props.visibleToasts"
    :class="props.class"
  />
</template>

<script setup lang="ts">
import { Toaster } from 'vue-sonner';

const props = withDefaults(
  defineProps<{
    richColors?: boolean;
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
    closeButton?: boolean;
    visibleToasts?: number;
    expend?: boolean;
    class?: string;
  }>(),
  {
    richColors: true,
    position: 'top-right',
    closeButton: false,
    expend: false,
    visibleToasts: 3,
    class: '',
  }
);
</script>
