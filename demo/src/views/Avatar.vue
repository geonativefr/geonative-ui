<template>
  <h1 class="mb-3">AVATAR :</h1>
  <p class="mb-3">not square :</p>
  <Avatar class="mb-3" :data="dataUser" />
  <p class="mb-3">square :</p>
  <Avatar class="mb-3" :data="dataUser" :is-square="true" :bg-color="'#ff0000'"/>
</template>

<script setup lang="ts">
import Avatar from '@/components/avatar/Avatar.vue';

const dataUser = {
  name: 'Alice',
  email: 'alice@example.com',
  avatar:
    'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
};
</script>

<style scoped>

</style>