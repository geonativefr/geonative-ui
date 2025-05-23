<template>
  <DropdownMenu :dropdown="props.dropdown" :items="props.items" position="right" align="start" @item-select="onItemChange">
    <Button size="lg" class="bg-background text-foreground rounded-lg px-2 py-6">
      <div class="flex items-center justify-between gap-2">
        <Avatar :url="activeItem.icon" :class="activeItem.color" :initials="activeItem.label.slice(0, 2)" />
        <span class="flex-1 text-center text-sm">
          <span class="font-semibold">{{ activeItem.label }}</span>
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
import type { DropdownMenuType, Items } from '@geonative/ui/types';

const props = defineProps<{
  items: Array<Items>;
  dropdown: DropdownMenuType;
  activeItem: Items;
}>();

const emit = defineEmits(['item-change']);

function onItemChange(item: Items) {
  emit('item-change', item);
}

</script>
