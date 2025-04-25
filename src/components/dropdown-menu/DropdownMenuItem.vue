<template>
  <div v-if="props.item.label">
    <ShadcnDropdownMenuItem :disabled="!props.item.action || props.item.disabled">
      <component :is="getComponentType" v-bind="getComponentProps" class="flex justify-between items-center w-full">
        <div class="flex items-center gap-2">
          <Icon
            v-if="props.item.iconProps"
            :name="props.item.iconProps.name"
            :class="props.item.iconProps.class"
            :source="props.item.iconProps.source"
            :type="props.item.iconProps.type"
          />
          <span>{{ props.item.label }}</span>
        </div>
        <ShadcnDropdownMenuShortcut v-if="props.item.shortcut" class="ml-10">
          {{ props.item.shortcut }}
        </ShadcnDropdownMenuShortcut>
      </component>
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
import { computed } from 'vue';

const props = defineProps<{
  item: DropdownMenuItemType;
}>();

const isInternalLink = typeof props.item.action === 'string';
const isExternalLink = typeof props.item.action === 'string' && props.item.action.startsWith('http');
const isFunctionLink = typeof props.item.action === 'function';

const getComponentType = computed(() => {
  if (isFunctionLink) {
    return 'div';
  }
  if (isExternalLink) {
    return 'a';
  }
  if (isInternalLink) {
    return 'router-link';
  }
  return 'div';
});

const getComponentProps = computed(() => {
  if (isFunctionLink) return { onClick: AlertFunction };
  if (isExternalLink) return { href: props.item.action };
  if (isInternalLink) return { to: props.item.action };
  return '';
});

const AlertFunction = () => {
  if (typeof props.item.action === 'function') {
    props.item.action();
  }
};
</script>
