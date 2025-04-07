<template>
  <ul class="list-disc">
    <li v-for="(route, index) in menuRoutes" :key="index">
      <router-link :to="{ name: route.name }">{{ route.menuLabel }}</router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import routes from '@/routes';
import { computed } from 'vue';

const menuRoutes = computed(() => {
  return routes.filter((route) => route.showInMenu);
});
</script>
