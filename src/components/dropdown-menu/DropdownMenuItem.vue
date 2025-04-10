<template>
  <div>
    <div v-if="props.item.sections && props.item.sections.length > 0">
      <ShadcnDropdownMenuSub>
        <ShadcnDropdownMenuSubTrigger>
          <span>{{ props.item.label }}</span>
        </ShadcnDropdownMenuSubTrigger>
        <ShadcnDropdownMenuPortal>
          <ShadcnDropdownMenuSubContent>
            <div v-for="(subSection, index) in props.item.sections" :key="index">
              <DropdownMenuSection :section="subSection" :show-separator="index > 0" />
            </div>
          </ShadcnDropdownMenuSubContent>
        </ShadcnDropdownMenuPortal>
      </ShadcnDropdownMenuSub>
    </div>
    <div v-else>
      <ShadcnDropdownMenuItem :disabled="props.item.disabled">
        <a v-if="props.item.url" :href="props.item.url" class="flex items-center w-full">
          {{ props.item.label }}
          <span v-if="props.item.shortcut" class="ml-auto text-xs text-gray-500">{{ props.item.shortcut }}</span>
        </a>
        <span v-else>
          {{ props.item.label }}
          <span v-if="props.item.shortcut" class="ml-auto text-xs text-gray-500">{{ props.item.shortcut }}</span>
        </span>
      </ShadcnDropdownMenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DropdownMenuItem as ItemType } from '@/types/dropdown-menu.ts';
import {
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuSub as ShadcnDropdownMenuSub,
  DropdownMenuSubTrigger as ShadcnDropdownMenuSubTrigger,
  DropdownMenuPortal as ShadcnDropdownMenuPortal,
  DropdownMenuSubContent as ShadcnDropdownMenuSubContent,
} from '@/shadcn/ui/dropdown-menu';
import DropdownMenuSection from '@/components/dropdown-menu/DropdownMenuSection.vue';

const props = defineProps({
  item: {
    type: Object as () => ItemType,
    required: true,
  },
});
</script>
