<template>
  <div v-if="props.item.label">
      <ShadcnDropdownMenuItem :disabled="props.item.action == '' || props.item.disabled">

        <div v-if="isFunctionLink" @click="props.item.action" class="flex justify-between items-center w-full">
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
        </div>

        <a v-else-if="isExternalLink" :href="props.item.action" class="flex justify-between items-center w-full">
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

        <router-link v-else-if="isInternalLink" :to="props.item.action" class="flex justify-between items-center w-full">
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
        </router-link>

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

const isInternalLink = typeof props.item.action === 'string';
const isExternalLink = typeof props.item.action === 'string' && props.item.action.startsWith('http');
const isFunctionLink = typeof props.item.action === 'function';
</script>
