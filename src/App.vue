<template>
  <h1>Geonative UI</h1>
  <Breadcrumb :items="breadcrumbItems"/>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
const breadcrumbItems = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contact' }
];
</script>

<style scoped></style>