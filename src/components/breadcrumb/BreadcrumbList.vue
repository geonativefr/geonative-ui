<template>
  <ShadcnBreadcrumb>
    <ShadcnBreadcrumbList>
      <Breadcrumb :items="props.items" />
    </ShadcnBreadcrumbList>
  </ShadcnBreadcrumb>
</template>

<script setup lang="ts">
import { Breadcrumb as ShadcnBreadcrumb, BreadcrumbList as ShadcnBreadcrumbList } from '@/shadcn/ui/breadcrumb';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import type { BreadcrumbItem } from '@/type.ts';

const props = defineProps<{
  items: BreadcrumbItem[];
}>();
</script>
