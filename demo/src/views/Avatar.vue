<template>
  <div class="p-5">
    <h1 class="mb-3">AVATAR :</h1>
    <p class="mb-3">not square :</p>
    <Avatar class="mb-3" :url="avatar_url" />
    <p class="mb-3">square :</p>
    <Avatar class="mb-3" :url="avatar_url" :is-square="true" :bg-color="'#ff0000'" />
    <p class="mb-3">without avatar :</p>
    <Avatar class="mb-3" :bg-color="'#ff00ff'" />
    <p class="mb-3">without avatar with initials :</p>
    <Avatar class="mb-3" :bg-color="'#000000'" :text-color="'#ff00ff'" :initials="'ab'" />
  </div>
</template>

<script setup lang="ts">
import Avatar from '@geonative/ui/components/avatar/Avatar.vue';

const avatar_url =
  'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light';
</script>

<style scoped></style>
