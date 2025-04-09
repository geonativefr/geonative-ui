<template>
  <ShadcnDropdownMenu>
    <ShadcnDropdownMenuTrigger>
      <Button>{{ name }}</Button>
    </ShadcnDropdownMenuTrigger>
    <ShadcnDropdownMenuContent>
      <ShadcnDropdownMenuLabel>{{ label }}</ShadcnDropdownMenuLabel>
      <ShadcnDropdownMenuSeparator />
      <div v-for="(category, categoryIndex) in items" :key="categoryIndex">
        <DropdownMenuCategory :category="category" :show-separator="categoryIndex > 0" />
      </div>
    </ShadcnDropdownMenuContent>
  </ShadcnDropdownMenu>
</template>

<script setup lang="ts">
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuContent as ShadcnDropdownMenuContent,
  DropdownMenuLabel as ShadcnDropdownMenuLabel,
  DropdownMenuTrigger as ShadcnDropdownMenuTrigger,
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
} from '@/shadcn/ui/dropdown-menu';
import { Button } from '@/shadcn/ui/button';
import DropdownMenuCategory from '@/components/dropdown-menu/DropdownMenuCategory.vue';
import type { DropdownMenuCategory as CategoryType } from '@/types/dropdown-menu.ts';

defineProps({
  items: {
    type: Array as () => CategoryType[],
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>
