<template>
  <ShadcnAvatar :class="isSquare ? 'h-8 w-8 rounded-lg' : ''">
    <ShadcnAvatarImage src="https://avatars.githubusercontent.com/u/167002380?v=4" alt="@unovue" />
    <ShadcnAvatarFallback>A</ShadcnAvatarFallback>
  </ShadcnAvatar>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import {
  Avatar as ShadcnAvatar,
  AvatarImage as ShadcnAvatarImage,
  AvatarFallback as ShadcnAvatarFallback,
} from '@/shadcn/ui/avatar';

const props = defineProps({
  isSquare: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
</style>