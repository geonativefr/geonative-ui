<template>
  <DropdownMenu :sections="props.sections">
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

      <div class="w-full min-w-56 rounded-lg">
        <div class="p-0">
          <div class="flex items-center px-1 py-1.5 gap-2">
            <slot name="avatar" />
            <div class="grid">
              <span class="font-semibold">{{ props.user.name }}</span>
              <span class="text-xs">{{ props.user.email }}</span>
            </div>
          </div>
        </div>
        <hr class="my-2" />

        <div v-for="(section, index) in props.sections" :key="index">
          <DropdownMenuSection :section="section" :show-separator="false" />
          <hr v-if="index < props.sections.length - 1" class="my-2" />
        </div>
      </div>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next';
import { Button, DropdownMenu, DropdownMenuSection } from '@geonative/ui/components';
import type { NavbarUserType } from '@geonative/ui/types';

const props = defineProps<NavbarUserType>();
</script>