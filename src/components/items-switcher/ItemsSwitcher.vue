<template>
  <DropdownMenu :dropdown="props.dropdown" position="right" align="start">
    <Button :full-width="true" size="lg" class="bg-background text-foreground rounded-lg px-2 py-6">
      <div class="flex items-center justify-between gap-2">
        <span class="flex items-center gap-2 truncate">
          <Avatar
            :url="props.activeItem?.icon"
            :class="props.activeItem?.color"
            :initials="props.activeItem?.label.slice(0, 2)"
          />
          <span class="text-sm font-semibold">{{ props.activeItem?.label }}</span>
        </span>
        <ChevronsUpDown class="size-5" />
      </div>
    </Button>
    <template #header>
      <slot />
    </template>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next';
import { Avatar, Button, DropdownMenu } from '@geonative/ui/components';
import type { DropdownMenuType, Item } from '@geonative/ui/types';

const props = withDefaults(defineProps<{
  dropdown: DropdownMenuType;
  activeItem?: Item;
}>(), {
  items: () => [],
});
</script>
