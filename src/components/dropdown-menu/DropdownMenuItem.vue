<template>
  <div>
    <div>
      <ShadcnDropdownMenuItem :disabled="props.item.disabled">
        <a v-if="props.item.url" :href="props.item.url" class="flex items-center w-full">
          {{ props.item.label }}
          <span v-if="props.item.shortcut" class="ml-auto text-xs text-gray-500">{{ props.item.shortcut }}</span>
        </a>
      </ShadcnDropdownMenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem as DropdownItemType } from '@/types/dropdown-menu.ts';
import { DropdownMenuItem as ShadcnDropdownMenuItem } from '@/shadcn/ui/dropdown-menu';

const props = defineProps({
  item: {
    type: Object as () => DropdownItemType,
    required: true,
  },
});
</script>
