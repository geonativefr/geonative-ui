<template>
  <ShadcnAvatar :class="props.isSquare ? 'h-8 w-8 rounded-lg' : ''">
    <ShadcnAvatarImage :src="data.avatar" :alt="data.name" />
    <ShadcnAvatarFallback>?</ShadcnAvatarFallback>
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
  data: {
    type: Object,
    required: true,
  },
});
</script>
