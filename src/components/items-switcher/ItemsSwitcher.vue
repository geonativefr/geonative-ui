<template>
  <DropdownMenu :dropdown="dropdown" :items="props.items" position="right" align="start">
    <Button size="lg" :full-width="true" class="py-6 px-1">
      <div class="flex items-center justify-between gap-2">
        <span class="flex items-center gap-2 truncate">
          <Avatar :url="activeItem.icon" :class="activeItem.color" :initials="activeItem.label.slice(0, 2)" />
          <span class="text-sm font-semibold">{{ activeItem.label }}</span>
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
import type { DropdownMenuType } from '@geonative/ui/types';
import { ref } from 'vue';
import type { Items } from '@geonative/ui/types';

const props = defineProps<{
  items: Array<Items>;
}>();

const activeItem = ref(props.items[0]);

const emit = defineEmits(['itemChange']);

const changeItem = (ItemId: Items['id']): void => {
  activeItem.value = props.items.find((item) => item.id === ItemId) || props.items[0];
  emit('itemChange', activeItem.value);
};

const dropdown: DropdownMenuType = {
  sections: [
    props.items.map((items) => ({
      label: items.label,
      class: 'flex items-center gap-2',
      clickAction: () => {
        changeItem(items.id);
      },
      iconProps: {
        name: items.label,
        source: 'avatar',
        class: 'size-8',
        avatarProps: { url: items.icon, initials: items.label.slice(0, 2), class: items.color },
      },
    })),
    [
      {
        label: 'Add Account',
        clickAction: () => alert('Add Account features coming soon'),
        iconProps: { name: 'plus-circle', source: 'heroicons', type: 'outline', class: 'h-6 w-6' },
      },
    ],
  ],
};
</script>
