<template>
  <ShadcnBreadcrumbItem v-if="props.isCurrentPage" class="hidden md:block">
    <ShadcnBreadcrumbPage>
      {{ props.item.title }}
    </ShadcnBreadcrumbPage>
  </ShadcnBreadcrumbItem>

  <ShadcnBreadcrumbItem v-else class="hidden md:block">
    <ShadcnBreadcrumbLink v-if="!isDisabled(item)" :href="item.link">
      {{ props.item.title }}
    </ShadcnBreadcrumbLink>
    <p v-else>
      {{ props.item.title }}
    </p>
  </ShadcnBreadcrumbItem>
  <ShadcnBreadcrumbSeparator v-if="!props.isCurrentPage" class="hidden md:block">{{
    separator
  }}</ShadcnBreadcrumbSeparator>
</template>

<script setup lang="ts">
import {
  BreadcrumbItem as ShadcnBreadcrumbItem,
  BreadcrumbLink as ShadcnBreadcrumbLink,
  BreadcrumbPage as ShadcnBreadcrumbPage,
  BreadcrumbSeparator as ShadcnBreadcrumbSeparator,
} from '@ui/shadcn/ui/breadcrumb';
import type { BreadcrumbItem } from '@ui/types';

const props = withDefaults(
  defineProps<{
    item: BreadcrumbItem;
    isCurrentPage?: boolean;
    separator?: string;
  }>(),
  {
    isCurrentPage: false,
    separator: '>',
  }
);

const isDisabled = (item: BreadcrumbItem) => {
  return item.disabled === true || item.link === undefined;
};
</script>
