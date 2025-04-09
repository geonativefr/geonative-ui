<template>
  <ShadcnDropdownMenuItem v-for="item in group.group" :key="item.title" :disabled="item.disabled">
    <a v-if="!item.submenu && item.link" :href="item.link" class="flex items-center w-full">
      {{ item.title }}
      <span v-if="item.shortcut" class="ml-auto text-xs text-gray-500">{{ item.shortcut }}</span>
    </a>
    <span v-else-if="!item.submenu">
      {{ item.title }}
      <span v-if="item.shortcut" class="ml-auto text-xs text-gray-500">{{ item.shortcut }}</span>
    </span>
    <ShadcnDropdownMenu v-else>
      <ShadcnDropdownMenuTrigger>
        <span>{{ item.title }}</span>
      </ShadcnDropdownMenuTrigger>
      <ShadcnDropdownMenuContent>
        <ShadcnDropdownMenuItem v-for="subItem in getFilteredSubItems(item.submenu)" :key="subItem.title">
          <a v-if="subItem.link" :href="subItem.link" class="flex items-center w-full">
            {{ subItem.title }}
          </a>
          <span v-else>
            {{ subItem.title }}
          </span>
        </ShadcnDropdownMenuItem>
        <ShadcnDropdownMenuSeparator
          v-for="separator in item.submenu.filter((sub) => sub.separator)"
          :key="separator.title"
        />
      </ShadcnDropdownMenuContent>
    </ShadcnDropdownMenu>
  </ShadcnDropdownMenuItem>
</template>

<script setup lang="ts">
import type { DropdownMenuGroup as GroupType, DropdownMenuItem as ItemType } from '@/types/dropdown-menu.ts';
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuTrigger as ShadcnDropdownMenuTrigger,
  DropdownMenuContent as ShadcnDropdownMenuContent,
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
} from '@/shadcn/ui/dropdown-menu';

defineProps({
  group: {
    type: Object as () => GroupType,
    required: true,
  },
});

const getFilteredSubItems = (submenu: ItemType[]) => {
  return submenu.filter((subItem) => !subItem.separator);
};
</script>
