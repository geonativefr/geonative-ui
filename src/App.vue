<template>
  <h1>BREADCRUMB :</h1>
  <br />
  <BreadcrumbList :items="breadcrumbItems" />
</template>

<script setup lang="ts">
import BreadcrumbList from '@/components/breadcrumb/BreadcrumbList.vue';

const breadcrumbItems = [
  { title: 'Home', link: '/' },
  { title: 'About' },
  { title: 'Contact', link: '/contact' },
  { title: 'Mail', link: '/mail', disabled: true },
  { title: 'Message', link: '/message' },
  { title: 'More' },
  { title: 'Test', link: '/test' },
];
</script>
