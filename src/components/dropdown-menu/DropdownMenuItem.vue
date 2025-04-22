<template>
  <div v-if="props.item.label">
    <div>
      <ShadcnDropdownMenuItem :disabled="!props.item.url || props.item.url === '' || props.item.disabled">
        <a v-if="props.item.url" :href="props.item.url" class="flex justify-between items-center w-full">
          <div class="flex items-center gap-2">
            <Icon
              v-if="item.iconProps"
              :name="item.iconProps.name"
              :class="item.iconProps.class"
              :source="item.iconProps.source"
              :type="item.iconProps.type"
            />
            <span>{{ props.item.label }}</span>
          </div>
          <ShadcnDropdownMenuShortcut v-if="props.item.shortcut" class="ml-10">
            {{ props.item.shortcut }}
          </ShadcnDropdownMenuShortcut>
        </a>
        <div v-else class="flex justify-between items-center w-full">
          <div class="flex items-center gap-2">
            <Icon
              v-if="item.iconProps"
              :name="item.iconProps.name"
              :class="item.iconProps.class"
              :source="item.iconProps.source"
              :type="item.iconProps.type"
            />
            <span>{{ props.item.label }}</span>
          </div>
        </div>
      </ShadcnDropdownMenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@geonative/ui/components';
import {
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuShortcut as ShadcnDropdownMenuShortcut,
} from '@geonative/ui/shadcn/ui/dropdown-menu';
import type { DropdownMenuItemType } from '@geonative/ui/types';

const props = defineProps<{
  item: DropdownMenuItemType;
}>();
</script>
