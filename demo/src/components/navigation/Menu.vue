<template>
  <ul class="list-disc">
    <li v-for="(route, index) in menuRoutes" :key="index" :class="{ 'text-blue-500': isActive(route) }">
      <router-link :to="{ name: route.name }">{{ route.meta?.menuLabel }}</router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import routes from '@/routes.ts';
import { computed } from 'vue';
import { type RouteRecordRaw, useRoute } from 'vue-router';

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
