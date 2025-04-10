<template>
  <ShadcnBreadcrumb>
    <ShadcnBreadcrumbList>
      <BreadcrumbItem
        v-for="(item, index) in props.breadcrumb.items"
        :key="index"
        :item="item"
        :is-current-page="isLastIndex(index)"
        :separator="props.breadcrumb.separator"
      />
    </ShadcnBreadcrumbList>
  </ShadcnBreadcrumb>
</template>

<script setup lang="ts">
import { Breadcrumb as ShadcnBreadcrumb, BreadcrumbList as ShadcnBreadcrumbList } from '@/shadcn/ui/breadcrumb';
import BreadcrumbItem from '@/components/breadcrumb/BreadcrumbItem.vue';
import type { Breadcrumb as BreadcrumbType } from '@/types';

const props = defineProps<{
  breadcrumb: BreadcrumbType;
}>();

const breadcrumbLength = props.breadcrumb.items.length;
const isLastIndex = (index: number) => index === breadcrumbLength - 1;
</script>
