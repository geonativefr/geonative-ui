<template>
  <ShadcnSidebarTrigger />
  <ShadcnSeparator :orientation="props.orientation" />
</template>

<script setup lang="ts">
import { SidebarTrigger as ShadcnSidebarTrigger } from '@geonative/ui/shadcn/ui/sidebar';
import { Separator as ShadcnSeparator } from '@geonative/ui/shadcn/ui/separator';

const props = withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical';
  }>(),
  { orientation: 'vertical' }
);
</script>

