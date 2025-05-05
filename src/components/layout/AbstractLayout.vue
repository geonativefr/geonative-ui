<template>
  <div
    ref="layout"
    class="w-screen h-screen overflow-hidden"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, provide, type Ref } from 'vue';

// Reactive references for dimensions
const layoutRef: Ref<HTMLElement | null> = ref(null);
const width: Ref<number> = ref(0);
const height: Ref<number>  = ref(0);

// Make dimensions available via provide/inject
provide('layout', {
  width,
  height
});

// Update dimensions function
const updateDimensions = () => {
  if (layoutRef.value) {
    width.value = layoutRef.value.clientWidth;
    height.value = layoutRef.value.clientHeight;
  }
};

// Create and manage ResizeObserver
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  // Initialize dimensions
  updateDimensions();

  // Setup ResizeObserver
  resizeObserver = new ResizeObserver(updateDimensions);

  if (layoutRef.value) {
    resizeObserver.observe(layoutRef.value);
  }

  // Fallback resize event listener
  window.addEventListener('resize', updateDimensions);
});

onUnmounted(() => {
  // Clean up
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  window.removeEventListener('resize', updateDimensions);
});
</script>