<template>
  <ShadcnDropdownMenu>
    <ShadcnDropdownMenuTrigger as-child>
      <Button
        size="lg"
        class="bg-white hover:bg-gray-100 text-black rounded-lg px-2 py-6"
      >
        <div class="flex items-center gap-2">
          <Avatar v-bind="avatarProps" />
          <span class="flex flex-col text-left text-sm">
            <span class="font-semibold">{{ user.name }}</span>
            <span class="text-xs">{{ user.email }}</span>
          </span>
          <ChevronsUpDown class="size-5 ml-6" />
        </div>
      </Button>
    </ShadcnDropdownMenuTrigger>
    <ShadcnDropdownMenuContent class="w-full min-w-56 rounded-lg" :side="'right'" align="end" :side-offset="4">
      <ShadcnDropdownMenuLabel class="p-0">
        <div class="flex items-center px-1 py-1.5 gap-2">
          <Avatar v-bind="avatarProps" />
          <div class="grid">
            <span class="font-semibold">{{ user.name }}</span>
            <span class="text-xs">{{ user.email }}</span>
          </div>
        </div>
      </ShadcnDropdownMenuLabel>
      <ShadcnDropdownMenuSeparator />

      <div v-for="(section, index) in props.dropdown.sections" :key="index">
        <DropdownMenuSection :section="section" :showSeparator="false" />
        <ShadcnDropdownMenuSeparator v-if="index < props.dropdown.sections.length - 1" />
      </div>
    </ShadcnDropdownMenuContent>
  </ShadcnDropdownMenu>
</template>

<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next';
import { Button, Avatar, DropdownMenuSection } from '@geonative/ui/components';
import { computed } from 'vue';
import {
  DropdownMenuLabel as ShadcnDropdownMenuLabel,
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuContent as ShadcnDropdownMenuContent,
  DropdownMenuTrigger as ShadcnDropdownMenuTrigger,
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
} from '@geonative/ui/shadcn/ui/dropdown-menu';
import type { NavbarUserType } from '@geonative/ui/types';

const props = defineProps<
  NavbarUserType
>();

const avatarProps = computed(() => ({
  url: props.user.avatar,
  bgColor: '#ff00ff',
  textColor: '#000000',
  initials: props.user.name.slice(0, 2),
  isSquare: true,
}));
</script>
