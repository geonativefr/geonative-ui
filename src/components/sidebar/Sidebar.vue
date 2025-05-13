<template>
  <ShadcnSidebar :side="props.side" :variant="props.variant" :collapsible="props.collapsible">
    <ShadcnSidebarHeader>
      <slot name="header" />
    </ShadcnSidebarHeader>

    <ShadcnSidebarContent>
      <SidebarMenu />
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
import { SidebarMenu } from '@/components';

const props = withDefaults(
  defineProps<{
    side?: 'left' | 'right' | 'top' | 'bottom';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
  }>(),
  {
    side: 'left',
    variant: 'sidebar',
    collapsible: 'offcanvas',
  }
);
</script>
