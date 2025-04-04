<template>
  <ShadcnAvatar>
    <ShadcnAvatarImage src="https://github.com/unovue.png" alt="@unovue" />
    <ShadcnAvatarFallback>A</ShadcnAvatarFallback>
  </ShadcnAvatar>
</template>

<script setup lang="ts">
import {
  Avatar as ShadcnAvatar,
  AvatarImage as ShadcnAvatarImage,
  AvatarFallback as ShadcnAvatarFallback,
} from '@/shadcn/ui/avatar';
</script>

<style scoped>

</style>