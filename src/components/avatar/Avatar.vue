<template>
  <ShadcnAvatar :class="props.isSquare ? 'h-8 w-8 rounded-lg' : ''" :style="{ backgroundColor: props.bgColor }">
    <ShadcnAvatarImage :src="props.url ?? ''" alt="Avatar" />
    <ShadcnAvatarFallback :style="{ backgroundColor: props.bgColor, color: props.textColor }">
      <span v-if="props.initials" class="text-md font-bold">
        {{ props.initials.toUpperCase() }}
      </span>
      <span v-else>?</span>
    </ShadcnAvatarFallback>
  </ShadcnAvatar>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue';
import {
  Avatar as ShadcnAvatar,
  AvatarImage as ShadcnAvatarImage,
  AvatarFallback as ShadcnAvatarFallback,
} from '@ui/shadcn/ui/avatar';

const props = defineProps({
  url: {
    type: String,
    required: false,
  },
  initials: {
    type: String,
    required: false,
    validator: (value: string | null): boolean => {
      if (value === null) return true;
      // Check if the value is a string of 1 or 2 letters
      return /^[a-zA-Z]{1,2}$/.test(value);
    },
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
  textColor: {
    type: String as PropType<string | null>,
    required: false,
    default: null,
    validator: (value: string | null): boolean => {
      if (value === null) return true;
      return /^#([0-9A-F]{3}){1,2}$/i.test(value);
    },
  },
  isSquare: {
    type: Boolean,
    default: false,
  },
});
</script>
