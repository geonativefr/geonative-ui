<template>
  <div v-if="props.item.label">
    <Action :disabled="isDisabled" :action-click="props.item.clickAction || ''" class="cursor-not-allowed">
      <ShadcnDropdownMenuItem
        :disabled="isDisabled"
        class="text-foreground"
      >
        <div class="flex items-center gap-2">
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
        <ShadcnDropdownMenuShortcut v-if="props.item.shortcut">
          {{ props.item.shortcut }}
        </ShadcnDropdownMenuShortcut>
      </ShadcnDropdownMenuItem>
    </Action>
  </div>
</template>

<script setup lang="ts">
import { Icon, Action } from '@geonative/ui/components';
import {
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuShortcut as ShadcnDropdownMenuShortcut,
} from '@geonative/ui/shadcn/ui/dropdown-menu';
import type { DropdownMenuItemType } from '@geonative/ui/types';
import { twMerge } from 'tailwind-merge';

const props = defineProps<{
  item: DropdownMenuItemType;
}>();

const isDisabled = !props.item.clickAction || props.item.clickAction == '' || props.item.disabled;
</script>
