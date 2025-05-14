<template>
  <DropdownMenu :dropdown="props.dropdown" position="right" :class="props.class" align="end">
    <Button full-width class="py-6 px-1">
      <div class="flex items-center justify-between gap-2">
        <div class="flex items-center gap-2 truncate">
          <slot />
        </div>
        <ChevronsUpDown class="size-5" />
      </div>
    </Button>
    <template #header>
      <div class="flex items-center gap-2">
        <slot />
      </div>
    </template>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next';
import { Button, DropdownMenu } from '@geonative/ui/components';
import type { DropdownMenuType } from '@geonative/ui/types';

const props = defineProps<{
  dropdown: DropdownMenuType;
  class?: string;
}>();
</script>
