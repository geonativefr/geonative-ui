<template>
  <ShadcnDropdownMenuItem v-for="item in props.group" :key="item.title" :disabled="item.disabled">
    <a :href="item.link" class="flex items-center w-full">
      {{ item.title }}
      <span v-if="item.shortcut" class="ml-auto text-xs text-gray-500">{{ item.shortcut }}</span>
    </a>
  </ShadcnDropdownMenuItem>
</template>

<script setup lang="ts">
import type { DropdownMenuItem as ItemType } from '@/types/dropdown-menu.ts';
import { DropdownMenuItem as ShadcnDropdownMenuItem } from '@/shadcn/ui/dropdown-menu';

const props = defineProps({
  group: {
    type: Array as () => ItemType[],
    required: true,
  },
});
</script>