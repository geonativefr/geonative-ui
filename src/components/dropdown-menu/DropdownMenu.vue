<template>
  <ShadcnDropdownMenu>
    <ShadcnDropdownMenuTrigger>
      <Button>{{ props.name }}</Button>
    </ShadcnDropdownMenuTrigger>
    <ShadcnDropdownMenuContent>
      <ShadcnDropdownMenuLabel>{{ props.label }}</ShadcnDropdownMenuLabel>
      <ShadcnDropdownMenuSeparator />
      <div v-for="(section, index) in props.sections" :key="index">
        <DropdownMenuSection :section="section" :show-separator="index > 0" />
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
import DropdownMenuSection from '@/components/dropdown-menu/DropdownMenuSection.vue';
import type { DropdownMenuSection as DropdownMenuSectionType } from '@/types/dropdown-menu.ts';

const props = defineProps({
  sections: {
    type: Array as () => DropdownMenuSectionType[],
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
