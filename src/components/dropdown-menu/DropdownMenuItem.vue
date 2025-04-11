<template>
  <div v-if="props.item.label">
    <div>
      <ShadcnDropdownMenuItem :disabled="!props.item.url || props.item.url === '' || props.item.disabled">
        <template v-if="props.item.url">
          <a :href="props.item.url" class="flex justify-between items-center w-full">
            <div class="flex items-center gap-2">
              <component v-if="props.item.icon" :is="props.item.icon" class="h-4 w-4" />
              <span>{{ props.item.label }}</span>
            </div>
            <ShadcnDropdownMenuShortcut v-if="props.item.shortcut" class="ml-10">
              {{ props.item.shortcut }}
            </ShadcnDropdownMenuShortcut>
          </a>
        </template>
        <template v-else>
          <div class="flex justify-between items-center w-full">
            <div class="flex items-center gap-2">
              <component v-if="props.item.icon" :is="props.item.icon" class="h-4 w-4" />
              <span>{{ props.item.label }}</span>
            </div>
          </div>
        </template>
      </ShadcnDropdownMenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem as DropdownItemType } from '@/types/dropdown-menu';
import {
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuShortcut as ShadcnDropdownMenuShortcut,
} from '@/shadcn/ui/dropdown-menu';

const props = defineProps<{
  item: DropdownItemType;
}>();
</script>