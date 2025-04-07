<template>
  <template v-for="(item, index) in items" :key="index">
    <ShadcnBreadcrumbItem v-if="isLastIndex(index)" class="hidden md:block">
      <ShadcnBreadcrumbLink v-if="!isDisabled(item)" :href="item.link">
        {{ item.title }}
      </ShadcnBreadcrumbLink>
      <p v-else>
        {{ item.title }}
      </p>
    </ShadcnBreadcrumbItem>

    <ShadcnBreadcrumbItem v-else class="hidden md:block">
      <ShadcnBreadcrumbPage>
        {{ item.title }}
      </ShadcnBreadcrumbPage>
    </ShadcnBreadcrumbItem>

    <ShadcnBreadcrumbSeparator v-if="isLastIndex(index)" class="hidden md:block" />
  </template>
</template>

<script setup lang="ts">
import {
  BreadcrumbItem as ShadcnBreadcrumbItem,
  BreadcrumbLink as ShadcnBreadcrumbLink,
  BreadcrumbPage as ShadcnBreadcrumbPage,
  BreadcrumbSeparator as ShadcnBreadcrumbSeparator,
} from '@/shadcn/ui/breadcrumb';
import type { BreadcrumbItem } from '@/type.ts';

const props = defineProps<{
  items: BreadcrumbItem[];
}>();

const itemLength = props.items.length - 1;

const isLastIndex = (index: number) => index < itemLength;
const isDisabled = (item: BreadcrumbItem) => {
  return item.disabled === true || item.link === undefined;
};
</script>
