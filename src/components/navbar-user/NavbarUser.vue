<template>
  <DropdownMenu :sections="props.sections" position="right" align="end">
    <template #trigger>
      <Button size="lg" class="bg-white hover:bg-gray-100 text-black rounded-lg px-2 py-6">
        <div class="flex items-center gap-2">
          <slot name="avatar" />
          <span class="flex flex-col text-left text-sm">
            <span class="font-semibold">{{ props.user.name }}</span>
            <span class="text-xs">{{ props.user.email }}</span>
          </span>
          <ChevronsUpDown class="size-5 ml-6" />
        </div>
      </Button>
    </template>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next';
import { Button, DropdownMenu } from '@geonative/ui/components';
import type { NavbarUserType } from '@geonative/ui/types';

const props = defineProps<NavbarUserType>();
</script>