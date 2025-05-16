<template>
  <ShadcnSidebarProvider>
    <slot />
  </ShadcnSidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider as ShadcnSidebarProvider } from '@geonative/ui/shadcn/ui/sidebar';
</script>

