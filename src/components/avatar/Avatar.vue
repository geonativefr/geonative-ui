<template>
  <ShadcnAvatar :class="isSquare ? 'h-8 w-8 rounded-lg' : ''">
    <ShadcnAvatarImage src="data.avatar" alt="user.name" />
    <ShadcnAvatarFallback></ShadcnAvatarFallback>
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

const data = {
  user: {
    name: 'Melio',
    email: 'melio@example.com',
    avatar: 'https://avatars.githubusercontent.com/u/167002380?v=4',
  }
};
</script>

<style scoped>
</style>