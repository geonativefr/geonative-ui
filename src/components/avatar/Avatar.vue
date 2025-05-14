<template>
  <ShadcnAvatar :class="twMerge(props.isSquare ? 'size-8 rounded-none' : '', props.class)">
    <ShadcnAvatarImage :src="props.url ?? ''" alt="Avatar" />
    <ShadcnAvatarFallback :class="props.class">
      <span class="font-bold" :style="{ fontSize: textSize }">
        {{ props.initials.slice(0, 2).toUpperCase() }}
      </span>
    </ShadcnAvatarFallback>
  </ShadcnAvatar>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { twMerge } from 'tailwind-merge';
import {
  Avatar as ShadcnAvatar,
  AvatarImage as ShadcnAvatarImage,
  AvatarFallback as ShadcnAvatarFallback,
} from '@geonative/ui/shadcn/ui/avatar';

const props = withDefaults(
  defineProps<{
    url?: string;
    initials?: string;
    isSquare?: boolean;
    class?: string;
  }>(),
  {
    url: '',
    initials: '?',
    isSquare: false,
    class: '',
  }
);
const textSize = computed((): string => {
  let sizeMatch = props.class.match(/size-(\d+)/);
  if (!sizeMatch) {
    sizeMatch = props.class.match(/w-(\d+)/);
  }
  if (!sizeMatch) {
    sizeMatch = props.class.match(/h-(\d+)/);
  }
  const size = parseInt(sizeMatch && sizeMatch[1] ? sizeMatch[1] : '8', 10);
  return size / 8 + 'rem';
});
</script>
