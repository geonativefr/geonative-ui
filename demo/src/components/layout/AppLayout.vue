<template>
  <div class="flex h-screen w-screen">
    <div class="w-1/5 h-full flex items-center justify-center">
      <Menu />
    </div>
    <div class="w-4/5 h-full flex-col">
      <div class="w-full p-4">
        <Breadcrumb :breadcrumb="breadcrumb" />
      </div>
      <div id="view">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Menu } from '@/components';
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
