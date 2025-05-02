<template>
  <ShadcnSidebar v-bind="props">

    <ShadcnSidebarHeader>
      <slot name="header" />
    </ShadcnSidebarHeader>

    <ShadcnSidebarContent>
      <slot name="content" />
    </ShadcnSidebarContent>

    <ShadcnSidebarFooter>
      <slot name="footer" />
    </ShadcnSidebarFooter>

    <ShadcnSidebarRail />
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
</script>
