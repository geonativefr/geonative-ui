<template>
  <AbstractLayout>
    <component :is="currentLayout">
      <router-view name="default" />
    </component>
  </AbstractLayout>
</template>

<script lang="ts" setup>
import { AbstractLayout } from '@geonative/ui/components';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const currentRoute = computed(() => router.currentRoute.value);
const currentLayout = computed(() => {
  const matchedRoute = currentRoute.value.matched[0];
  return matchedRoute?.components?.layout;
});
</script>
