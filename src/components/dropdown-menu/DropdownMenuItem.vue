<template>
  <div v-if="props.item.label">
    <Action :disabled="isDisabled" :action-click="props.item.clickAction || ''" class="cursor-not-allowed">
      <ShadcnDropdownMenuItem
        :disabled="isDisabled"
      >
        <div class="flex items-center gap-2">
          <Icon v-if="props.item.iconProps" v-bind="props.item.iconProps" />
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

const props = defineProps<{
  item: DropdownMenuItemType;
}>();

const isDisabled = !props.item.clickAction || props.item.clickAction == '' || props.item.disabled;
</script>
