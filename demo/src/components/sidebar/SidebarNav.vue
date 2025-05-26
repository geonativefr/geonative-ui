<template>
  <SidebarNav title="Application" :menu="menuRoutes" />
</template>

<script setup lang="ts">
import routes from '@/routes.ts';
import { computed } from 'vue';
import { type RouteRecordRaw, useRoute } from 'vue-router';
import { SidebarNav } from '@geonative/ui/components';

const route = useRoute();
const menuRoutes = routes.filter((route) => route.meta?.showInMenu);

// Use computed property to track the current route dynamically
const currentRoute = computed(() => {
  return routes.find((r) => r.name === route.name);
});

const isActive = (route: RouteRecordRaw) => {
  return currentRoute.value?.name === route.name;
};
</script>
