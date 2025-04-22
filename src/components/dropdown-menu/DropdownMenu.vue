<template>
  <ShadcnDropdownMenu>
    <ShadcnDropdownMenuTrigger>
      <slot />
    </ShadcnDropdownMenuTrigger>
    <ShadcnDropdownMenuContent
      class="w-full min-w-56 rounded-lg"
      :side="props.position"
      :align="props.align"
      :side-offset="4"
    >
      <div v-if="props.label">
        <ShadcnDropdownMenuLabel class="text-center">{{ props.label }}</ShadcnDropdownMenuLabel>
        <ShadcnDropdownMenuSeparator />
      </div>
      <div>
        <div v-for="(section, index) in props.sections" :key="index">
          <DropdownMenuSection :section="section" :show-separator="index > 0" />
        </div>
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
} from '@geonative/ui/shadcn/ui/dropdown-menu';
import { DropdownMenuSection } from '@geonative/ui/components';
import type { DropdownMenuSectionType } from '@geonative/ui/types';

const props = withDefaults(
  defineProps<{
    sections: Array<DropdownMenuSectionType>;
    label?: string;
    position?: 'right' | 'top' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
  }>(),
  {
    label: '',
    position: 'bottom',
    align: 'center',
  }
);
</script>
