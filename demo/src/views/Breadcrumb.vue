<template>
  <div class="p-5">
    <h1 class="mb-3">BREADCRUMB :</h1>
    <Breadcrumb :items="breadcrumbItems" />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';

const breadcrumbItems = [
  { title: 'Home', link: '/' },
  { title: 'About' },
  { title: 'Avatar', link: '/avatar' },
  { title: 'Mail', link: '/mail', disabled: true },
  { title: 'Dropdown Menu', link: '/dropdown-menu' },
  { title: 'More' },
  { title: 'Breadcrumb', link: '/breadcrumb' },
];
</script>
