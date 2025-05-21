<template>
  <ShadcnDropdownMenuSub>
    <ShadcnDropdownMenuSubTrigger>
      <div class="flex items-center gap-2 w-full">
        <Icon
          v-if="props.item.iconProps"
          :name="props.item.iconProps.name"
          :source="props.item.iconProps.source"
          :type="props.item.iconProps.type"
          :avatar-props="props.item.iconProps.avatarProps"
          :class="twMerge('text-foreground', props.item.iconProps.class)"
        />
        <span>{{ props.item.label }}</span>
      </div>
    </ShadcnDropdownMenuSubTrigger>
    <ShadcnDropdownMenuPortal>
      <ShadcnDropdownMenuSubContent class="bg-background text-foreground">
        <div v-for="(section, subIndex) in props.item.sections" :key="subIndex">
          <DropdownMenuSection :section="section" :show-separator="subIndex !== 0" />
        </div>
      </ShadcnDropdownMenuSubContent>
    </ShadcnDropdownMenuPortal>
  </ShadcnDropdownMenuSub>
</template>

<script setup lang="ts">
import { DropdownMenuSection, Icon } from '@geonative/ui/components';
import {
  DropdownMenuSub as ShadcnDropdownMenuSub,
  DropdownMenuSubTrigger as ShadcnDropdownMenuSubTrigger,
  DropdownMenuPortal as ShadcnDropdownMenuPortal,
  DropdownMenuSubContent as ShadcnDropdownMenuSubContent,
} from '@geonative/ui/shadcn/ui/dropdown-menu';
import type { DropdownMenuItemType } from '@geonative/ui/types';
import { twMerge } from 'tailwind-merge';

const props = defineProps<{
  item: DropdownMenuItemType;
}>();
</script>
