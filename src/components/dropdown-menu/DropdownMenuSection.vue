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
              <DropdownMenuSection :section="item.sections[0]" :show-separator="false" />
              <div v-if="item.sections.length > 1">
                <div v-for="(section, index) in item.sections.slice(1)" :key="index">
                  <DropdownMenuSection :section="section" :show-separator="true" />
                </div>
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
import DropdownMenuItem from '@/components/dropdown-menu/DropdownMenuItem.vue';
import type { DropdownMenuSection as DropdownMenuSectionType } from '@/types/dropdown-menu.ts';

import {
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
  DropdownMenuSub as ShadcnDropdownMenuSub,
  DropdownMenuSubTrigger as ShadcnDropdownMenuSubTrigger,
  DropdownMenuPortal as ShadcnDropdownMenuPortal,
  DropdownMenuSubContent as ShadcnDropdownMenuSubContent,
} from '@/shadcn/ui/dropdown-menu';

const props = defineProps<{
  section: DropdownMenuSectionType;
  showSeparator: boolean;
}>();
</script>
