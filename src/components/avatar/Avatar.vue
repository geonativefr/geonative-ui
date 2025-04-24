<template>
  <ShadcnAvatar
    :class="twMerge(props.isSquare ? 'h-8 w-8 rounded-lg' : '', props.class)"
  >
    <ShadcnAvatarImage :src="props.url ?? ''" alt="Avatar" />
    <ShadcnAvatarFallback :class="props.class">
      <span v-if="props.initials" class="text-md font-bold">
        {{ props.initials.toUpperCase() }}
      </span>
      <span v-else>?</span>
    </ShadcnAvatarFallback>
  </ShadcnAvatar>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { twMerge } from 'tailwind-merge';
import {
  Avatar as ShadcnAvatar,
  AvatarImage as ShadcnAvatarImage,
  AvatarFallback as ShadcnAvatarFallback,
} from '@geonative/ui/shadcn/ui/avatar';

const props = withDefaults(defineProps<{
  url?: string;
  initials?: string;
  isSquare?: boolean;
  class?: string;
}>(), {
  url: '',
  initials: '',
  isSquare: false,
  class: '',
});
</script>
