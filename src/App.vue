<template>
  <div class="flex flex-col items-center bg-gray-100">
    <h1 class="text-2xl mb-3">Components demo :</h1>
    <ul class="list-disc">
      <li v-for="(route, index) in componentRoutes" :key="index">
        <router-link :to="{ name: route.routeName }">{{ route.title }}</router-link>
      </li>
    </ul>
    <p class="text-sm text-gray-500 mt-2">Click on the links above to see the components in action.</p>
    <div class="flex flex-col min-h-screen justify-center mt-4">
      <router-view class="mt-8" />
    </div>
  </div>
</template>

<script setup lang="ts">
const componentRoutes = [
  {
    title: 'Breadcrumb',
    routeName: 'breadcrumb',
  },
];
</script>
