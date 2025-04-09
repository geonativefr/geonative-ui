<template>
  <ShadcnDropdownMenuSeparator v-if="showSeparator" />
  <div v-for="(group, groupIndex) in category.items" :key="groupIndex">
    <DropdownMenuItem :group="group" />
  </div>
</template>

<script setup lang="ts">
import DropdownMenuItem from '@/components/dropdown-menu/DropdownMenuItem.vue';
import type { DropdownMenuCategory as CategoryType } from '@/types/dropdown-menu.ts';
import { DropdownMenuSeparator as ShadcnDropdownMenuSeparator } from '@/shadcn/ui/dropdown-menu';

defineProps({
  category: {
    type: Object as () => CategoryType,
    required: true,
  },
  showSeparator: {
    type: Boolean,
    required: true,
  },
});
</script>
