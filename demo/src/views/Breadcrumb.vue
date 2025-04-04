<script setup lang="ts"></script>

<template>
  <h1 class="mb-3">BREADCRUMB :</h1>
  <Breadcrumb :items="breadcrumbItems" />
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';

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