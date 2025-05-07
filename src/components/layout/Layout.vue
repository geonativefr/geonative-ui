<template>
  <AbstractLayout>
    <component :is="currentLayout">
      <router-view />
    </component>
  </AbstractLayout>
</template>

<script lang="ts" setup>
import { AbstractLayout, DefaultLayout } from '@geonative/ui/components';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentLayout = computed(() => {
  return router.currentRoute.value.matched[0]?.components?.layout ?? DefaultLayout;
});
</script>
