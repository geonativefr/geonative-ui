<template>
  <SidebarProvider>
    <Sidebar :collapsible="collapsible" side="right" />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center sticky top-0 bg-background">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger v-if="collapsible !== 'none'" orientation="vertical" />
          <Breadcrumb :breadcrumb="breadcrumb" />
        </div>
      </header>
      <div id="view" class="flex-1 flex-col">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>

<script setup lang="ts">
import { Sidebar } from '@/components';
import { Breadcrumb, SidebarInset, SidebarTrigger, SidebarProvider } from '@geonative/ui/components';
import type { BreadcrumbType, BreadcrumbItemType } from '@geonative/ui/types';
import { ref } from 'vue';

const collapsible = ref<'offcanvas' | 'icon' | 'none' | undefined>('offcanvas');

const breadcrumb: BreadcrumbType = {
  items: [
    { title: 'Home', link: '/' },
    { title: 'About' },
    { title: 'Avatar', link: '/avatar' },
    { title: 'Mail', link: '/mail', disabled: true },
    { title: 'Dropdown Menu', link: '/dropdown-menu' },
    { title: 'More' },
    { title: 'Breadcrumb', link: '/breadcrumb' },
  ] as BreadcrumbItemType[],
  separator: '>',
};
</script>
