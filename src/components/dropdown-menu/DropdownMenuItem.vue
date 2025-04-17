<template>
  <div v-if="props.item.label">
    <div>
      <ShadcnDropdownMenuItem :disabled="!props.item.url || props.item.url === '' || props.item.disabled">
        <a
          v-if="props.item.url"
          :href="props.item.url"
          class="flex justify-between items-center w-full"
        >
          <div class="flex items-center gap-2">
            <Icon
              v-if="item.iconProps"
              :name="item.iconProps.name"
              :source="item.iconProps.source"
              v-bind="item.iconProps"
            />
            <span>{{ props.item.label }}</span>
          </div>
          <ShadcnDropdownMenuShortcut v-if="props.item.shortcut" class="ml-10">
            {{ props.item.shortcut }}
          </ShadcnDropdownMenuShortcut>
        </a>
        <div
          v-else
          class="flex justify-between items-center w-full"
        >
          <div class="flex items-center gap-2">
            <Icon
              v-if="item.iconProps"
              :name="item.iconProps.name"
              :source="item.iconProps.source"
              v-bind="item.iconProps"
            />
            <span>{{ props.item.label }}</span>
          </div>
        </div>
      </ShadcnDropdownMenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '@geonative/ui/components/icons/Icon.vue';
import type { DropdownMenuItem as DropdownItemType } from '@geonative/ui/types/dropdown-menu';
import {
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuShortcut as ShadcnDropdownMenuShortcut,
} from '@geonative/ui/shadcn/ui/dropdown-menu';

const props = defineProps<{
  item: DropdownItemType;
}>();
</script>