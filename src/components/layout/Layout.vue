<template>
  <AbstractLayout>
    <component :is="layoutComponent">
      <router-view />
    </component>
  </AbstractLayout>
</template>

<script lang="ts" setup>
import { type Component, computed } from 'vue';
import { AppLayout as DefaultLayout } from '@geonative/ui/components';
import { AbstractLayout } from '@geonative/ui/components';
import { useCurrentRoute } from '@geonative/ui/composables';

const currentRoute = useCurrentRoute();
const layoutComponent = computed<Component>((): Component => {
  // Get layout from route meta or use default
  if (currentRoute?.layout) {
    return currentRoute.layout;
  }
  // Fallback to default layout
  return DefaultLayout;
});
</script>
