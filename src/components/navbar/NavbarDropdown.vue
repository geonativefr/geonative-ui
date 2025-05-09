<template>
  <DropdownMenu :dropdown="props.dropdown" position="right" :class="props.class" align="end">
    <Button size="lg" class="bg-white hover:bg-gray-100 text-black rounded-lg px-2 py-6">
      <div class="flex items-center gap-2">
        <slot />
        <ChevronsUpDown class="size-5 ml-6" />
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
