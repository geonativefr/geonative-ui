<template>
  <ShadcnAvatar :class="props.isSquare ? 'h-8 w-8 rounded-lg' : ''" :style="{ backgroundColor: props.bgColor }">
    <ShadcnAvatarImage :src="props.url ?? ''" alt="Avatar" />
    <ShadcnAvatarFallback :style="{ backgroundColor: props.bgColor }">?</ShadcnAvatarFallback>
  </ShadcnAvatar>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
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
  url: {
    type: String,
    required: false,
  },
  bgColor: {
    type: String as PropType<string | null>,
    required: false,
    default: null,
    validator: (value: string | null): boolean => {
      if (value === null) return true;
      return /^#([0-9A-F]{3}){1,2}$/i.test(value);
    },
  },
});
</script>
