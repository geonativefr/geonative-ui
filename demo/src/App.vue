<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100 p-5">
    <h1 class="text-2xl mb-3">Components demo :</h1>
    <Navigation />
    <p class="text-sm text-gray-500 mt-2">Click on the links above to see the components in action.</p>
    <div class="flex flex-col justify-center mt-15 bg-white">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '@/Navigation.vue';
</script>
