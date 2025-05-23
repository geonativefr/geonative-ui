<template>
  <ShadcnDropdownMenuSeparator v-if="props.showSeparator" />
  <div v-for="(item, index) in props.section" :key="index">
    <div v-if="item.sections && item.sections.length > 0">
      <DropdownMenuSub :item="item"/>
    </div>
    <div v-else>
      <DropdownMenuItem :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DropdownMenuItem, DropdownMenuSub } from '@geonative/ui/components';
import type { DropdownMenuSectionType } from '@geonative/ui/types';

import {
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
} from '@geonative/ui/shadcn/ui/dropdown-menu';

const props = withDefaults(
  defineProps<{
    section: DropdownMenuSectionType;
    showSeparator?: boolean;
  }>(),
  {
    showSeparator: false,
  }
);
</script>
