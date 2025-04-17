<template>
  <div v-if="props.section && props.section.length > 0">
    <ShadcnDropdownMenuSeparator v-if="props.showSeparator" />
    <div v-for="(item, index) in props.section" :key="index">
      <div v-if="item.sections && item.sections.length > 0">
        <ShadcnDropdownMenuSub>
          <ShadcnDropdownMenuSubTrigger>
            <span>{{ item.label }}</span>
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
  </div>
</template>

<script setup lang="ts">
import DropdownMenuItem from '@geonative/ui/components/dropdown-menu/DropdownMenuItem.vue';
import type { DropdownMenuSection as DropdownMenuSectionType } from '@geonative/ui/types/dropdown-menu.ts';

import {
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
  DropdownMenuSub as ShadcnDropdownMenuSub,
  DropdownMenuSubTrigger as ShadcnDropdownMenuSubTrigger,
  DropdownMenuPortal as ShadcnDropdownMenuPortal,
  DropdownMenuSubContent as ShadcnDropdownMenuSubContent,
} from '@geonative/ui/shadcn/ui/dropdown-menu';

const props = defineProps<{
  section: DropdownMenuSectionType;
  showSeparator: boolean;
}>();
</script>