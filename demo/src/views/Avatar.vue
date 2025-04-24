<template>
  <div class="p-5 grid gap-5">
    <h1>AVATAR :</h1>
    <p>not square :</p>
    <Avatar :url="avatar_url" />
    <p>square :</p>
    <Avatar class="bg-red-500" :url="avatar_url" :is-square="true" />
    <p>without avatar :</p>
    <Avatar class="bg-pink-500" />
    <p>without avatar with initials :</p>
    <Avatar class="bg-black text-pink-500" :initials="'ab'" />
  </div>
</template>

<script setup lang="ts">
import { Avatar } from '@geonative/ui/components';

const avatar_url =
  'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light';
</script>

<style scoped></style>
