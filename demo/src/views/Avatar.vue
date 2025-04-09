<template>
  <h1 class="mb-3">AVATAR :</h1>
  <p class="mb-3">not square :</p>
  <Avatar class="mb-3" :data="dataUser" />
  <p class="mb-3">square :</p>
  <Avatar class="mb-3" :data="dataUser" :isSquare="true" />
</template>

<script setup lang="ts">
import Avatar from '@/components/avatar/Avatar.vue';

const dataUser = {
  name: 'Alice',
  email: 'alice@example.com',
  avatar:
    'https://st5.depositphotos.com/1001941/66147/v/450/depositphotos_661475956-stock-illustration-anonymous-hacker-using-laptop-desk.jpg',
};
</script>
