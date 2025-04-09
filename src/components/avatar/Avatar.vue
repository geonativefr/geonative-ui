<template>
  <ShadcnAvatar
    :class="props.isSquare ? 'h-8 w-8 rounded-lg' : ''"
    :style="{ backgroundColor: props.bgColor }"
  >
    <ShadcnAvatarImage :src="props.data.avatar" :alt="props.data.name" />
    <ShadcnAvatarFallback>?</ShadcnAvatarFallback>
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
  data: {
    type: Object,
    required: true,
  },
  bgColor: {
    type: String as PropType<string | null>,
    required: false,
    default: null,
    validator: (value: string | null): boolean => {
      // Allow null values
      if (value === null) return true;
      // Validate that the string is a valid hex color
      return /^#([0-9A-F]{3}){1,2}$/i.test(value);
    }
  }
});
</script>