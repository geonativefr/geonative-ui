<template>
  <ShadcnBreadcrumb>
    <ShadcnBreadcrumbList>
      <BreadcrumbItem v-for="(item, index) in items" :key="index" :item="item" :is-current-page="isLastIndex(index)" />
    </ShadcnBreadcrumbList>
  </ShadcnBreadcrumb>
</template>

<script setup lang="ts">
import { Breadcrumb as ShadcnBreadcrumb, BreadcrumbList as ShadcnBreadcrumbList } from '@/shadcn/ui/breadcrumb';
import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem.vue';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/type.ts';

const props = defineProps<{
  items: BreadcrumbItemType[];
}>();

const breadcrumbLength = props.items.length;
const isLastIndex = (index: number) => index === breadcrumbLength - 1;
</script>
