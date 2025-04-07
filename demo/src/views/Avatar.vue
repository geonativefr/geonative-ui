<template>
  <h1 class="mb-3">AVATAR :</h1>
  <p class="mb-3"> not square :</p>
  <Avatar class="mb-3" :data="dataUser" />
</template>

<script setup lang="ts">
import Avatar from '@/components/avatar/Avatar.vue';

const dataUser = {
  name: 'Melio',
  email: 'melio@example.com',
  avatar: 'https://avatars.githubusercontent.com/u/167002380?v=4',
};
</script>