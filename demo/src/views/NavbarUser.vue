<template>
  <div class="p-5">
    <h1 class="mb-3">NAVBAR USER :</h1>
      <NavbarUser :user="user" />
  </div>
</template>

<script setup lang="ts">
import NavbarUser from '@/components/navbar-user/NavbarUser.vue';

const user = {
  name: 'alice',
  email: 'alice@example.com',
  avatar: 'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
};
</script>