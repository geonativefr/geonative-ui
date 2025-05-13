<template>
  <ShadcnSidebarProvider>
      <Sidebar />
    <ShadcnSidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <ShadcnSidebarTrigger class="-ml-1" />
          <ShadcnSeparator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb :breadcrumb="breadcrumb" />
        </div>
      </header>
      <div id="view" class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <slot />
      </div>
    </ShadcnSidebarInset>
  </ShadcnSidebarProvider>
</template>

<script setup lang="ts">
import Sidebar from '../../views/Sidebar.vue';
import { Breadcrumb } from '@geonative/ui/components';
import type { BreadcrumbType, BreadcrumbItemType } from '@geonative/ui/types';
import {
  SidebarProvider as ShadcnSidebarProvider,
  SidebarInset as ShadcnSidebarInset,
  SidebarTrigger as ShadcnSidebarTrigger,
} from '@geonative/ui/shadcn/ui/sidebar';
import { Separator as ShadcnSeparator } from '@geonative/ui/shadcn/ui/separator';

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
