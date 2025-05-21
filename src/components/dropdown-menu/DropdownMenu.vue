<template>
  <ShadcnDropdownMenu>
    <ShadcnDropdownMenuTrigger>
      <slot />
    </ShadcnDropdownMenuTrigger>
    <ShadcnDropdownMenuContent
      :class="twMerge('w-full min-w-56 bg-background text-foreground rounded-lg', props.class)"
      :side="props.position"
      :align="props.align"
      :side-offset="4"
    >
      <div v-if="$slots.header || props.dropdown.label">
        <ShadcnDropdownMenuLabel>
          <slot name="header">
            <p>{{ props.dropdown.label }}</p>
          </slot>
        </ShadcnDropdownMenuLabel>
        <ShadcnDropdownMenuSeparator />
      </div>
      <div>
        <div v-for="(section, index) in props.dropdown.sections" :key="index">
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
import type { DropdownMenuType } from '@geonative/ui/types';
import { twMerge } from 'tailwind-merge';

const props = withDefaults(
  defineProps<{
    dropdown: DropdownMenuType;
    position?: 'right' | 'top' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    class?: string;
  }>(),
  {
    position: 'bottom',
    align: 'center',
  }
);
</script>
