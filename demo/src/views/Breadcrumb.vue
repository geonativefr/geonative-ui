<template>
  <div class="p-5">
    <h1 class="mb-3">BREADCRUMB :</h1>
    <Breadcrumb :breadcrumb="breadcrumb" />
  </div>
</template>

<script setup lang="ts">
import { Breadcrumb } from '@geonative/ui/components';
import type { BreadcrumbType, BreadcrumbItemType } from '@geonative/ui/types';

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
