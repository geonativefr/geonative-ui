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

const data = {
  accordion: [
    {
      title: 'Section 1',
      url: '#',
      items: [
        { title: 'Item 1.1', url: '#', icon: 'home' },
        { title: 'Item 1.2', url: '#', icon: 'settings' },
      ],
    },
    {
      title: 'Section 2',
      url: '#',
      items: [
        { title: 'Item 2.1', url: '#', icon: 'user' },
        { title: 'Item 2.2', url: '#', icon: 'info' },
      ],
    },
  ],
};
</script>
