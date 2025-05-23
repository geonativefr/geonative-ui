<template>
  <DropdownMenu :dropdown="props.dropdown" position="right" align="start">
    <Button size="lg" class="bg-background text-foreground rounded-lg px-2 py-6">
      <div class="flex items-center justify-between gap-2">
        <Avatar
          :url="props.activeItem?.icon"
          :class="props.activeItem?.color"
          :initials="props.activeItem?.label.slice(0, 2)"
        />
        <span class="flex-1 text-center text-sm">
          <span class="font-semibold">{{ props.activeItem?.label }}</span>
        </span>
        <ChevronsUpDown class="size-5 ml-6" />
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

const props = defineProps<{
  dropdown: DropdownMenuType;
  activeItem?: Item;
}>();
</script>
