<template>
  <h1 class="mb-3">BREADCRUMB :</h1>
  <Breadcrumb :items="breadcrumbItems" />
  <h1 class="mb-3 mt-8">AVATAR :</h1>
  <p class="mb-3"> not square :</p>
  <Avatar class="mb-3" :data="dataUser" />
  <p class="mb-3">square :</p>
  <Avatar :data="dataUser" :isSquare="true" />
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import Avatar from '@/components/avatar/Avatar.vue';

const breadcrumbItems = [
  { title: 'Home', link: '/' },
  { title: 'About'},
  { title: 'Contact', link: '/contact'},
  { title: 'Mail', link: '/mail', disabled: true },
  { title: 'Message', link: '/message' },
  { title: 'More'},
  { title: 'Test', link: '/test' },
];

const dataUser = {
    name: 'Melio',
    email: 'melio@example.com',
    avatar: 'https://avatars.githubusercontent.com/u/167002380?v=4',
};
</script>
