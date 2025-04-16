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
import { Breadcrumb as ShadcnBreadcrumb, BreadcrumbList as ShadcnBreadcrumbList } from '@ui/shadcn/ui/breadcrumb';
import BreadcrumbItem from '@ui/components/breadcrumb/BreadcrumbItem.vue';
import type { Breadcrumb as BreadcrumbType } from '@ui/types';

const props = defineProps<{
  breadcrumb: BreadcrumbType;
}>();

const breadcrumbLength = props.breadcrumb.items.length;
const isLastIndex = (index: number) => index === breadcrumbLength - 1;
</script>
