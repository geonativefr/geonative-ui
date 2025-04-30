<template>
  <ShadcnDropdownMenuSeparator v-if="props.showSeparator" />
  <div v-for="(item, index) in props.section" :key="index">
    <div v-if="item.sections && item.sections.length > 0">
      <ShadcnDropdownMenuSub>
        <ShadcnDropdownMenuSubTrigger>
          <div class="flex items-center gap-2">
            <Icon v-if="props.item.iconProps" v-bind="props.item.iconProps" />
            <span>{{ item.label }}</span>
          </div>
        </ShadcnDropdownMenuSubTrigger>
        <ShadcnDropdownMenuPortal>
          <ShadcnDropdownMenuSubContent>
            <div v-for="(section, subIndex) in item.sections" :key="subIndex">
              <DropdownMenuSection :section="section" :show-separator="subIndex !== 0" />
            </div>
          </ShadcnDropdownMenuSubContent>
        </ShadcnDropdownMenuPortal>
      </ShadcnDropdownMenuSub>
    </div>
    <div v-else>
      <DropdownMenuItem :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@geonative/ui/components';
import { DropdownMenuItem } from '@geonative/ui/components';
import type { DropdownMenuSectionType } from '@geonative/ui/types';

import {
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
  DropdownMenuSub as ShadcnDropdownMenuSub,
  DropdownMenuSubTrigger as ShadcnDropdownMenuSubTrigger,
  DropdownMenuPortal as ShadcnDropdownMenuPortal,
  DropdownMenuSubContent as ShadcnDropdownMenuSubContent,
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
