<template>
  <ShadcnSidebar :side="props.side" :variant="props.variant" :collapsible="props.collapsible">
    <ShadcnSidebarHeader>
      <slot name="header" />
    </ShadcnSidebarHeader>

    <ShadcnSidebarContent>
      <SidebarAccordion :items="data.accordion" />
    </ShadcnSidebarContent>

    <ShadcnSidebarFooter>
      <slot name="footer" />
    </ShadcnSidebarFooter>
    <ShadcnSidebarRail>
      <Button class="bg-gray-100 text-black rounded hover:bg-gray-200">
        <Icon name="bars-4" source="heroicons" type="solid" />
      </Button>
    </ShadcnSidebarRail>
  </ShadcnSidebar>
</template>

<script setup lang="ts">
import {
  Sidebar as ShadcnSidebar,
  SidebarHeader as ShadcnSidebarHeader,
  SidebarContent as ShadcnSidebarContent,
  SidebarFooter as ShadcnSidebarFooter,
  SidebarRail as ShadcnSidebarRail,
} from '@geonative/ui/shadcn/ui/sidebar';
import { Button, Icon, SidebarAccordion } from '@geonative/ui/components';

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
