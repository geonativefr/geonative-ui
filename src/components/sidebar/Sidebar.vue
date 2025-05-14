<template>
  <ShadcnSidebar
    :side="props.side"
    :variant="props.variant"
    :collapsible="props.collapsible"
    :class="twMerge('bg-background text-foreground', props.class)"
  >
    <ShadcnSidebarHeader>
      <slot name="header" />
    </ShadcnSidebarHeader>

    <ShadcnSidebarContent>
      <slot name="content" />
    </ShadcnSidebarContent>

    <ShadcnSidebarFooter>
      <slot name="footer" />
    </ShadcnSidebarFooter>
  </ShadcnSidebar>
</template>

<script setup lang="ts">
import {
  Sidebar as ShadcnSidebar,
  SidebarHeader as ShadcnSidebarHeader,
  SidebarContent as ShadcnSidebarContent,
  SidebarFooter as ShadcnSidebarFooter,
} from '@geonative/ui/shadcn/ui/sidebar';
import { twMerge } from 'tailwind-merge';

const props = withDefaults(
  defineProps<{
    side?: 'left' | 'right' | 'top' | 'bottom';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
    class?: string;
  }>(),
  {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'offcanvas',
  }
);
</script>
