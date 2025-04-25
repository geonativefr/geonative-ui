<template>
  <Toaster rich-colors :closeButton="props.closeButton" :class="props.class" />
</template>

<script setup lang="ts">
import { Toaster } from 'vue-sonner';

const props = withDefaults(
  defineProps<{
    closeButton?: boolean;
    class?: string;
  }>(),
  {
    closeButton: false,
    class: 'top-0 right-0',
  }
);
</script>
