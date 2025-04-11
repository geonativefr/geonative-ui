<template>
  <div v-if="props.item.label">
    <div>
      <ShadcnDropdownMenuItem :disabled="!props.item.url || props.item.url === '' || props.item.disabled">
        <template v-if="props.item.url">
          <a :href="props.item.url" class="flex justify-between items-center w-full">
            <span>{{ props.item.label }}</span>
            <ShadcnDropdownMenuShortcut v-if="props.item.shortcut" class="ml-10">
              {{ props.item.shortcut }}
            </ShadcnDropdownMenuShortcut>
          </a>
        </template>
        <template v-else>
          <span class="flex justify-between items-center w-full">
            {{ props.item.label }}
          </span>
        </template>
      </ShadcnDropdownMenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem as DropdownItemType } from '@/types/dropdown-menu.ts';
import {
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuShortcut as ShadcnDropdownMenuShortcut,
} from '@/shadcn/ui/dropdown-menu';

const props = defineProps({
  item: {
    type: Object as () => DropdownItemType,
    required: true,
  },
});
</script>
