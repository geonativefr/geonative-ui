<template>
  <component :is="currentLayout">
    <router-view />
  </component>
</template>

<script lang="ts" setup>
import { DefaultLayout } from '@geonative/ui/components';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentLayout = computed(() => {
  return router.currentRoute.value.matched[0]?.components?.layout ?? DefaultLayout;
});
</script>
